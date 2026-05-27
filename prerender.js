import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

const routes = [
  {
    path: 'about',
    title: 'About Morphnex | Our Story & Vision',
    description: 'Learn about Morphnex, our mission, our values, and how we deliver luxury software solutions to leading enterprises.'
  },
  {
    path: 'team',
    title: 'Meet The Team | Morphnex',
    description: "Meet the exceptional engineers, designers, and leaders behind Morphnex's premium software solutions."
  },
  {
    path: 'blog',
    title: 'Blog & Insights | Morphnex',
    description: 'Read the latest insights on software engineering, UI/UX trends, and enterprise architecture from the Morphnex team.'
  },
  {
    path: 'services',
    title: 'Services | Morphnex Technologies',
    description: 'Explore our premium services including Full-Stack Development, UI/UX Design, Cloud Architecture, and AI solutions.'
  },
  {
    path: 'case-studies',
    title: 'Case Studies | Morphnex Success Stories',
    description: 'Read our case studies to see how Morphnex has transformed businesses through high-performance software engineering.'
  },
  {
    path: 'career',
    title: 'Careers at Morphnex | Join Our Team',
    description: 'Looking for a new challenge? Join Morphnex and work on premium, high-impact enterprise software projects.'
  },
  {
    path: 'contact',
    title: "Contact Morphnex | Let's Build Together",
    description: 'Get in touch with Morphnex to discuss your next big software project or enterprise transformation.'
  }
];

function prerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Error: Template file not found at ${TEMPLATE_PATH}. Run "npm run build" first.`);
    process.exit(1);
  }

  console.log('Starting prerendering for SEO routes...');
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  // Also prerender the root index.html to ensure it has the correct canonical tag
  let rootHtml = template;
  rootHtml = rootHtml.replace(/<link id="canonical-link" rel="canonical" href="[^"]*"\s*\/?>/, '<link id="canonical-link" rel="canonical" href="https://morphnex.netlify.app/" />');
  fs.writeFileSync(TEMPLATE_PATH, rootHtml, 'utf8');
  console.log('✓ Prerendered root (/)');

  routes.forEach(route => {
    let html = template;
    const url = `https://morphnex.netlify.app/${route.path}`;

    // 1. Replace Title
    html = html.replace(/<title>[^<]*<\/title>/g, `<title>${route.title}</title>`);

    // 2. Replace Description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Replace Canonical Link
    html = html.replace(
      /<link id="canonical-link" rel="canonical" href="[^"]*"\s*\/?>/g,
      `<link id="canonical-link" rel="canonical" href="${url}" />`
    );

    // 4. Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/g,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/g,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/g,
      `<meta property="og:url" content="${url}" />`
    );

    // 5. Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/g,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/g,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // Create route directory in dist
    const routeDir = path.join(DIST_DIR, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Write index.html inside the route directory
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
    console.log(`✓ Prerendered /${route.path}`);
  });

  console.log('Prerendering completed successfully!');
}

prerender();
