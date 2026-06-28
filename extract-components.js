const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

function extractSection(id, componentName) {
  let section = html.substring(html.indexOf(`<section class="py-24 md:py-32 bg-surface-container-low px-4 md:px-8 border-y border-outline-variant overflow-hidden" id="projects">`));
  if (id !== 'projects') {
    section = html.substring(html.indexOf(`<section class="py-24 md:py-32 bg-surface-container-lowest px-4 md:px-8 bg-white" id="experience-section">`));
  }
  if (id === 'contact') {
    section = html.substring(html.indexOf(`<section class="py-24 md:py-32 bg-surface-container-lowest px-4 md:px-8" id="contact">`));
  }
  if (id === 'footer') {
    section = html.substring(html.indexOf(`<footer class="bg-tertiary-container`));
  }
  
  let endTag = id === 'footer' ? '</footer>' : '</section>';
  let endIndex = section.indexOf(endTag) + endTag.length;
  let code = section.substring(0, endIndex);

  // Convert HTML to JSX
  code = code.replace(/class=/g, 'className=');
  code = code.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  code = code.replace(/<img([^>]+)>/g, (match, attrs) => {
    if (!attrs.endsWith('/')) {
      return `<img${attrs}/>`;
    }
    return match;
  });
  code = code.replace(/<br>/g, '<br/>');
  code = code.replace(/style="([^"]+)"/g, (match, styleString) => {
    // Simple converter for styles
    const styles = styleString.split(';').filter(s => s.trim()).map(s => {
      const [key, val] = s.split(':');
      if (!val) return '';
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: '${val.trim()}'`;
    }).join(', ');
    return `style={{ ${styles} }}`;
  });

  // Replace style block within projects
  if (id === 'projects') {
    code = code.replace(/<style>([\s\S]*?)<\/style>/g, '');
  }

  // wrap in component
  const jsx = `import Image from 'next/image';

export default function ${componentName}() {
  return (
    ${code}
  );
}
`;
  
  fs.writeFileSync(`components/${componentName}.tsx`, jsx);
}

extractSection('projects', 'Projects');
extractSection('experience-section', 'Experience');
extractSection('contact', 'Contact');
extractSection('footer', 'Footer');

console.log('Successfully extracted remaining components.');
