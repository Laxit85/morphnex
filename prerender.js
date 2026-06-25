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
  },
  {
    path: 'blog/cloud-migration-best-practices',
    title: '10 Best Practices for Cloud Migration | Morphnex Blog',
    description: 'Learn essential strategies for successfully migrating your infrastructure to the cloud without downtime.'
  },
  {
    path: 'blog/future-of-ai-in-software-development',
    title: 'The Future of AI in Software Development | Morphnex Blog',
    description: 'Exploring how artificial intelligence is transforming the way we build and deploy software applications.'
  },
  {
    path: 'blog/building-scalable-microservices-architecture',
    title: 'Building Scalable Microservices Architecture | Morphnex Blog',
    description: 'A comprehensive guide to designing and implementing microservices that scale with your business.'
  },
  {
    path: 'blog/securing-web-applications-2026',
    title: 'Securing Your Web Applications in 2026 | Morphnex Blog',
    description: 'Essential security practices every development team should implement to protect their applications.'
  },
  {
    path: 'blog/devops-best-practices-continuous-delivery',
    title: 'DevOps Best Practices for Continuous Delivery | Morphnex Blog',
    description: 'Streamline your development workflow with proven DevOps practices and automation strategies.'
  },
  {
    path: 'blog/react-performance-optimization-techniques',
    title: 'React Performance Optimization Techniques | Morphnex Blog',
    description: 'Advanced techniques to improve the performance of your React applications and enhance user experience.'
  },
  {
    path: 'case-studies/ecommerce-order-management-system',
    title: 'E-Commerce Order Management System | Morphnex Case Study',
    description: 'Processing 100k+ daily orders across multiple channels with real-time inventory management.'
  },
  {
    path: 'case-studies/cryptocurrency-payment-gateway',
    title: 'Cryptocurrency Payment Gateway | Morphnex Case Study',
    description: 'Creating a secure, multi-chain payment gateway with instant settlement and fraud detection.'
  },
  {
    path: 'case-studies/digital-banking-platform',
    title: 'Digital Banking Platform | Morphnex Case Study',
    description: 'Building a modern banking app serving 500k+ users with real-time transactions and compliance.'
  },
  {
    path: 'case-studies/ai-powered-analytics-platform',
    title: 'AI-Powered Analytics Platform | Morphnex Case Study',
    description: 'Processing and analyzing terabytes of data daily with predictive insights for enterprise clients.'
  },
  {
    path: 'case-studies/cloud-migration-devops-transformation',
    title: 'Cloud Migration & DevOps Transformation | Morphnex Case Study',
    description: 'Migrating legacy infrastructure to cloud with zero downtime and implementing DevOps practices.'
  },
  {
    path: 'case-studies/multiplayer-gaming-platform',
    title: 'Multiplayer Gaming Platform | Morphnex Case Study',
    description: 'Creating a scalable multiplayer gaming platform with low latency and real-time synchronization.'
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
  rootHtml = rootHtml.replace(/<link id="canonical-link" rel="canonical" href="[^"]*"\s*\/?>/, '<link id="canonical-link" rel="canonical" href="https://morphnex.in/" />');
  fs.writeFileSync(TEMPLATE_PATH, rootHtml, 'utf8');
  console.log('✓ Prerendered root (/)');

  routes.forEach(route => {
    let html = template;
    const url = `https://morphnex.in/${route.path}`;

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
