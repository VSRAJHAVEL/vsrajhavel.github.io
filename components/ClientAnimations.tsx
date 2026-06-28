'use client';

import { useEffect } from 'react';

export default function ClientAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const getMobileDelay = (desktopDelay: number) => isMobile ? Math.min(desktopDelay, 80) : desktopDelay;

    if (prefersReducedMotion) {
      document.querySelectorAll('.stat-card .counter').forEach(counter => {
          if (counter.getAttribute('data-target')) {
             counter.textContent = counter.getAttribute('data-target');
          }
      });
      document.querySelectorAll('.contact-anim, .contact-card, .footer-anim, .exp-section-header, #exp-heading, #exp-label, .project-card, .will-change-anim').forEach(el => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
          (el as HTMLElement).style.transform = 'scale(1)';
      });
      return;
    }

    // Intersection Observers
    const observeAndUnobserve = (selector: string, onIntersect: (target: HTMLElement) => void) => {
        const el = document.querySelector(selector);
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onIntersect(entry.target as HTMLElement);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        obs.observe(el);
    };

    // Hero Animations
    setTimeout(() => {
        const h = document.getElementById('hero-heading');
        if(h) { h.style.opacity = '1'; h.style.transform = 'translateY(0)'; }
    }, 100);
    setTimeout(() => {
        const b = document.getElementById('hero-body');
        if(b) { b.style.opacity = '1'; b.style.transform = 'translateY(0)'; }
    }, 200);
    setTimeout(() => {
        const c = document.getElementById('hero-ctas');
        if(c) { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }
    }, 300);

    // About
    observeAndUnobserve('#about', (target) => {
        const label = target.querySelector('.about-anim-label') as HTMLElement;
        const heading = target.querySelector('.about-anim-heading') as HTMLElement;
        const bio = target.querySelector('.about-anim-bio') as HTMLElement;
        
        if(label) { label.style.opacity = '1'; label.style.transform = 'translateY(0)'; }
        if(heading) { setTimeout(() => { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, getMobileDelay(100)); }
        if(bio) { setTimeout(() => { bio.style.opacity = '1'; bio.style.transform = 'translateY(0)'; }, getMobileDelay(200)); }
        
        target.querySelectorAll('.about-anim-photo').forEach((photo, idx) => {
            setTimeout(() => { (photo as HTMLElement).style.opacity = '1'; (photo as HTMLElement).style.transform = 'translateY(0)'; }, getMobileDelay(300 + idx * 80));
        });
        
        target.querySelectorAll('.stat-card').forEach((card, idx) => {
            setTimeout(() => { 
                (card as HTMLElement).style.opacity = '1'; 
                (card as HTMLElement).style.transform = 'scale(1)'; 
            }, getMobileDelay(400 + idx * 100));
        });
    });

    // Gallery
    observeAndUnobserve('#gallery', (target) => {
        const label = target.querySelector('.gallery-label') as HTMLElement;
        const heading = target.querySelector('.gallery-heading') as HTMLElement;
        const sub = target.querySelector('.gallery-sub') as HTMLElement;
        
        if(label) { label.style.opacity = '1'; label.style.transform = 'translateY(0)'; }
        if(heading) { setTimeout(() => { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, getMobileDelay(100)); }
        if(sub) { setTimeout(() => { sub.style.opacity = '1'; sub.style.transform = 'translateY(0)'; }, getMobileDelay(200)); }
        
        target.querySelectorAll('.gallery-stat').forEach((stat, idx) => {
            setTimeout(() => { (stat as HTMLElement).style.opacity = '1'; (stat as HTMLElement).style.transform = 'translateY(0)'; }, getMobileDelay(300 + idx * 80));
        });
    });

    // Skills
    observeAndUnobserve('#skills', (target) => {
        const header = target.querySelector('.skills-anim-header') as HTMLElement;
        if(header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
        target.querySelectorAll('.skill-card').forEach((card, idx) => {
            setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
            }, getMobileDelay(idx * 100));
        });
        const cert = target.querySelector('.cert-badges') as HTMLElement;
        if(cert) {
            setTimeout(() => {
                cert.style.opacity = '1';
                cert.style.transform = 'translateY(0)';
            }, getMobileDelay(400));
        }
    });

    // Projects
    observeAndUnobserve('#projects', (target) => {
        const label = document.getElementById('projects-label');
        const heading = document.getElementById('projects-heading');
        if(label) { label.style.opacity = '1'; label.style.transform = 'translateY(0)'; }
        if(heading) { setTimeout(() => { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, getMobileDelay(80)); }
        target.querySelectorAll('.project-card').forEach((card, idx) => {
            const delay = parseInt(card.getAttribute('data-delay') || '0');
            setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
            }, isMobile ? (idx * 80) : delay);
        });
    });
    
    // Experience
    observeAndUnobserve('#experience-section', (target) => {
        const label = document.getElementById('exp-label');
        const heading = document.getElementById('exp-heading');
        if(label) { label.style.opacity = '1'; label.style.transform = 'translateY(0)'; }
        if(heading) { setTimeout(() => { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, getMobileDelay(80)); }
        
        target.querySelectorAll('.will-change-anim').forEach((el, idx) => {
            if (el.id !== 'exp-label' && el.id !== 'exp-heading') {
                setTimeout(() => {
                    (el as HTMLElement).style.opacity = '1';
                    (el as HTMLElement).style.transform = 'translateY(0)';
                }, getMobileDelay(100 + (idx * 50)));
            }
        });
    });

    // Contact
    observeAndUnobserve('#contact', (target) => {
        target.querySelectorAll('.contact-anim').forEach((el, idx) => {
            setTimeout(() => { (el as HTMLElement).style.opacity = '1'; (el as HTMLElement).style.transform = 'translateY(0)'; }, getMobileDelay(idx * 100));
        });
        target.querySelectorAll('.contact-card').forEach((card, idx) => {
            setTimeout(() => { (card as HTMLElement).style.opacity = '1'; (card as HTMLElement).style.transform = 'translateY(0)'; }, getMobileDelay(300 + idx * 150));
        });
    });

    // Footer
    observeAndUnobserve('#footer', (target) => {
        target.querySelectorAll('.footer-anim').forEach((el, idx) => {
            setTimeout(() => { (el as HTMLElement).style.opacity = '1'; (el as HTMLElement).style.transform = 'translateY(0)'; }, getMobileDelay(idx * 80));
        });
    });

    // Magnetic Buttons
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');
    magneticWraps.forEach(wrap => {
        const btn = wrap.querySelector('.magnetic-btn') as HTMLElement;
        if(!btn) return;
        
        wrap.addEventListener('mousemove', (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = wrap.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            
            const x = mouseEvent.clientX - rect.left - h;
            const y = mouseEvent.clientY - rect.top - v;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        wrap.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // Project Accordion Logic
    document.querySelectorAll('.proj-row').forEach(row => {
        row.addEventListener('click', () => {
            document.querySelectorAll('.proj-row').forEach(other => {
                if (other !== row) other.classList.remove('active');
            });
            row.classList.toggle('active');
        });
    });

  }, []);

  return null;
}
