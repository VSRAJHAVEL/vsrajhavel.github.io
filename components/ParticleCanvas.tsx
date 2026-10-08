'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ParticleCanvas() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const trailRef    = useRef<HTMLCanvasElement>(null);
  const animRef     = useRef<number>(0);
  const mouseRef    = useRef({ x: -9999, y: -9999, active: false });
  const clickBursts = useRef<{ x: number; y: number; r: number; a: number }[]>([]);

  // Smooth spring-driven spotlight position
  const rawX  = useMotionValue(-200);
  const rawY  = useMotionValue(-200);
  const spotX = useSpring(rawX, { stiffness: 180, damping: 22 });
  const spotY = useSpring(rawY, { stiffness: 180, damping: 22 });

  const [isInHero, setIsInHero] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const trail  = trailRef.current;
    if (!canvas || !trail) return;

    const ctx  = canvas.getContext('2d');
    const tCtx = trail.getContext('2d');
    if (!ctx || !tCtx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      [canvas, trail].forEach(c => {
        c.width  = W * dpr;
        c.height = H * dpr;
      });
      ctx.scale(dpr, dpr);
      tCtx.scale(dpr, dpr);
      tCtx.fillStyle = '#000000';
      tCtx.fillRect(0, 0, W, H);
    };
    resize();

    // ── Flow field ────────────────────────────────────────────────────
    const baseAngle = (x: number, y: number, t: number) =>
      Math.sin(x * 0.0055 + t * 0.22) * Math.cos(y * 0.0045 + t * 0.17) * Math.PI * 2.5 +
      Math.sin((x - y) * 0.003  + t * 0.12) * Math.PI +
      Math.cos((x + y) * 0.002  + t * 0.08) * Math.PI * 0.5;

    // ── Particles ─────────────────────────────────────────────────────
    const COUNT = 480;
    interface P { x: number; y: number; age: number; max: number; spd: number }

    const spawn = (fx?: number, fy?: number): P => ({
      x:   fx ?? Math.random() * W,
      y:   fy ?? Math.random() * H,
      age: 0,
      max: 100 + Math.random() * 180,
      spd: 0.8 + Math.random() * 1.1,
    });

    const particles: P[] = Array.from({ length: COUNT }, () => spawn());

    let t = 0;

    const draw = () => {
      t += 0.006;

      // Slow fade of trail
      tCtx.fillStyle = 'rgba(0,0,0,0.022)';
      tCtx.fillRect(0, 0, W, H);

      const mx     = mouseRef.current.x;
      const my     = mouseRef.current.y;
      const active = mouseRef.current.active;
      const VORTEX_R = 220;   // vortex influence radius
      const PULL_R   = 90;    // tight pull-in zone

      particles.forEach(p => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);

        let fa = baseAngle(p.x, p.y, t);

        if (active && d < VORTEX_R) {
          // Spiral vortex: angle toward cursor + tangential rotation
          const strength  = 1 - d / VORTEX_R;          // 0→1 as d→0
          const towardAngle = Math.atan2(dy, dx) + Math.PI; // point inward
          const spinAngle   = towardAngle + Math.PI / 2;     // 90° = orbit

          // Mix: outer ring orbits, inner ring gets pulled in hard
          const mix = d < PULL_R ? 0.92 : strength * 0.72;
          fa = fa * (1 - mix) + spinAngle * mix * 0.6 + towardAngle * mix * 0.4;
        }

        const spd = active && d < VORTEX_R
          ? p.spd * (1 + (1 - d / VORTEX_R) * 3.5)   // accelerate near cursor
          : p.spd;

        const nx = p.x + Math.cos(fa) * spd;
        const ny = p.y + Math.sin(fa) * spd;

        // Per-particle opacity ramp
        const life  = p.age / p.max;
        const alpha = life < 0.12
          ? (life / 0.12) * 0.6
          : life > 0.78
            ? ((1 - life) / 0.22) * 0.6
            : 0.6;

        // Brighten lines near cursor
        const brighten = active && d < VORTEX_R ? 1 + (1 - d / VORTEX_R) * 0.9 : 1;
        const finalA   = Math.min(alpha * brighten, 1);

        tCtx.strokeStyle = `rgba(255,255,255,${finalA * 0.72})`;
        tCtx.lineWidth   = d < PULL_R && active ? 0.9 : 0.65;
        tCtx.beginPath();
        tCtx.moveTo(p.x, p.y);
        tCtx.lineTo(nx, ny);
        tCtx.stroke();

        p.x   = nx;
        p.y   = ny;
        p.age += 1;

        if (p.age > p.max || p.x < -5 || p.x > W + 5 || p.y < -5 || p.y > H + 5) {
          Object.assign(p, spawn());
        }
      });

      // ── Click burst rings ──────────────────────────────────────────
      clickBursts.current = clickBursts.current.filter(b => b.a > 0.02);
      clickBursts.current.forEach(b => {
        ctx.strokeStyle = `rgba(255,255,255,${b.a})`;
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.stroke();
        b.r += 5;
        b.a *= 0.88;
      });

      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(trail, 0, 0, W, H);

      // Redraw burst rings on top
      clickBursts.current.forEach(b => {
        ctx.strokeStyle = `rgba(255,255,255,${b.a})`;
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    const heroEl = canvas.closest('#hero') as HTMLElement | null;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      mouseRef.current = { x: lx, y: ly, active: true };
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
      setIsInHero(false);
    };
    const onEnter = () => setIsInHero(true);
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickBursts.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        r: 10,
        a: 0.8,
      });
      // Spawn a burst of new particles from click point
      for (let i = 0; i < 18; i++) {
        particles[Math.floor(Math.random() * particles.length)] =
          spawn(e.clientX - rect.left + (Math.random() - 0.5) * 20,
                e.clientY - rect.top  + (Math.random() - 0.5) * 20);
      }
    };

    if (heroEl) {
      heroEl.addEventListener('mousemove',  onMove);
      heroEl.addEventListener('mouseleave', onLeave);
      heroEl.addEventListener('mouseenter', onEnter);
      heroEl.addEventListener('click',      onClick);
    }
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      if (heroEl) {
        heroEl.removeEventListener('mousemove',  onMove);
        heroEl.removeEventListener('mouseleave', onLeave);
        heroEl.removeEventListener('mouseenter', onEnter);
        heroEl.removeEventListener('click',      onClick);
      }
      window.removeEventListener('resize', resize);
    };
  }, [rawX, rawY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Pure black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Offscreen trail accumulation (hidden) */}
      <canvas ref={trailRef} className="absolute inset-0" style={{ display: 'none' }} />

      {/* Display canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Spring-driven cursor spotlight — appears only when inside hero */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: spotX,
          y: spotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isInHero ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        {/* Outer diffuse glow */}
        <div
          className="rounded-full"
          style={{
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)',
            transform: 'translate(-50%,-50%)',
            position: 'absolute',
          }}
        />
        {/* Inner tight glow */}
        <div
          className="rounded-full"
          style={{
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
            transform: 'translate(-50%,-50%)',
            position: 'absolute',
          }}
        />
        {/* Cursor dot */}
        <div
          style={{
            width: '5px',
            height: '5px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
            transform: 'translate(-50%,-50%)',
            position: 'absolute',
            boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)',
          }}
        />
      </motion.div>

      {/* Static centre breath */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 48%, rgba(255,255,255,0.035) 0%, transparent 65%)',
        }}
      />

      {/* Vignette corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}
