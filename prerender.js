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

function loadTypeScriptData(filePath, arrayName) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, '');
  content = content.replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\}/g, '');
  content = content.replace(new RegExp(`export\\s+const\\s+${arrayName}\\s*:\\s*\\w+(?:\\[\\])?\\s*=`), `const ${arrayName} =`);
  const jsContent = `${content}\nexport default ${arrayName};`;
  const tempPath = path.join(__dirname, `temp_${arrayName}.js`);
  fs.writeFileSync(tempPath, jsContent, 'utf8');
  return tempPath;
}

function generateBodyHtml(route, blogPosts, caseStudies) {
  if (route.path.startsWith('blog/')) {
    const slug = route.path.substring(5);
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      const contentHtml = post.content.map(block => {
        if (block.type === 'paragraph') {
          return `<p style="margin-bottom: 20px; line-height: 1.8; color: #A0A0A0; font-size: 18px;">${block.text}</p>`;
        } else if (block.type === 'heading') {
          const tag = block.level === 3 ? 'h3' : 'h2';
          return `<${tag} style="color: #FFFFFF; margin-top: 30px; margin-bottom: 15px;">${block.text}</${tag}>`;
        } else if (block.type === 'list') {
          return `<ul style="margin-bottom: 20px; padding-left: 20px; color: #A0A0A0; line-height: 1.8;">${block.items.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}</ul>`;
        } else if (block.type === 'quote') {
          return `<blockquote style="border-left: 4px solid #C9A96E; padding-left: 20px; font-style: italic; color: #FFFFFF; margin: 30px 0; background: rgba(255,255,255,0.03); padding: 15px;">${block.text}</blockquote>`;
        }
        return '';
      }).join('');

      return `
        <article style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
          <header style="margin-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px;">
            <span style="text-transform: uppercase; color: #C9A96E; font-size: 11px; font-weight: bold; letter-spacing: 0.2em;">${post.category}</span>
            <h1 style="font-size: 42px; font-weight: 900; margin: 15px 0; letter-spacing: -0.02em; line-height: 1.2;">${post.title}</h1>
            <div style="font-size: 13px; color: #A0A0A0; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;">
              By ${post.author} • ${post.date}
            </div>
          </header>
          <img src="${post.image}" alt="${post.title}" style="width: 100%; height: auto; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" />
          <div class="content">${contentHtml}</div>
        </article>
      `;
    }
  }

  if (route.path.startsWith('case-studies/')) {
    const slug = route.path.substring(13);
    const study = caseStudies.find(c => c.slug === slug);
    if (study) {
      const contentHtml = study.content.map(block => {
        if (block.type === 'paragraph') {
          return `<p style="margin-bottom: 20px; line-height: 1.8; color: #A0A0A0; font-size: 18px;">${block.text}</p>`;
        } else if (block.type === 'heading') {
          const tag = block.level === 3 ? 'h3' : 'h2';
          return `<${tag} style="color: #FFFFFF; margin-top: 30px; margin-bottom: 15px;">${block.text}</${tag}>`;
        } else if (block.type === 'list') {
          return `<ul style="margin-bottom: 20px; padding-left: 20px; color: #A0A0A0; line-height: 1.8;">${block.items.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}</ul>`;
        } else if (block.type === 'quote') {
          return `<blockquote style="border-left: 4px solid #C9A96E; padding-left: 20px; font-style: italic; color: #FFFFFF; margin: 30px 0; background: rgba(255,255,255,0.03); padding: 15px;">${block.text}</blockquote>`;
        }
        return '';
      }).join('');

      return `
        <article style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
          <header style="margin-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px;">
            <span style="text-transform: uppercase; color: #C9A96E; font-size: 11px; font-weight: bold; letter-spacing: 0.2em;">${study.industry}</span>
            <h1 style="font-size: 42px; font-weight: 900; margin: 15px 0; letter-spacing: -0.02em; line-height: 1.2;">${study.title}</h1>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px;">
              ${study.tags.map(t => `<span style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: #A0A0A0; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; padding: 4px 8px; text-transform: uppercase;">${t}</span>`).join('')}
            </div>
          </header>
          <img src="${study.image}" alt="${study.title}" style="width: 100%; height: auto; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" />
          
          <section style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px; margin-bottom: 40px; color: #FFFFFF;">
            <h2 style="font-size: 20px; font-weight: bold; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Project Summary</h2>
            <div style="margin-bottom: 20px;">
              <h3 style="font-size: 12px; font-weight: bold; color: #C9A96E; text-transform: uppercase; margin-bottom: 5px;">The Challenge</h3>
              <p style="color: #A0A0A0; margin: 0; font-size: 15px; line-height: 1.6;">${study.challenge}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="font-size: 12px; font-weight: bold; color: #C9A96E; text-transform: uppercase; margin-bottom: 5px;">The Solution</h3>
              <p style="color: #A0A0A0; margin: 0; font-size: 15px; line-height: 1.6;">${study.solution}</p>
            </div>
            <div>
              <h3 style="font-size: 12px; font-weight: bold; color: #C9A96E; text-transform: uppercase; margin-bottom: 10px;">Results</h3>
              <ul style="margin: 0; padding-left: 20px; color: #C9A96E; font-weight: bold;">
                ${study.results.map(r => `<li style="margin-bottom: 5px;">${r}</li>`).join('')}
              </ul>
            </div>
          </section>

          <div class="content">${contentHtml}</div>
        </article>
      `;
    }
  }

  if (route.path === 'blog') {
    return `
      <main style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 40px;">Our <span style="color: #C9A96E;">Blog</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 18px; margin-bottom: 50px;">Insights, tutorials, and industry news from our expert engineering team.</p>
        <section style="display: flex; flex-direction: column; gap: 40px;">
          ${blogPosts.map(post => `
            <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
              <span style="color: #C9A96E; font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase;">${post.category}</span>
              <h2 style="font-size: 24px; font-weight: 900; margin: 10px 0; text-transform: uppercase;"><a href="/blog/${post.slug}" style="color: #FFFFFF; text-decoration: none;">${post.title}</a></h2>
              <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 20px;">${post.excerpt}</p>
              <a href="/blog/${post.slug}" style="color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Read Full Article &rarr;</a>
            </article>
          `).join('')}
        </section>
      </main>
    `;
  }

  if (route.path === 'case-studies') {
    return `
      <main style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 40px;">Case <span style="color: #C9A96E;">Studies</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 18px; margin-bottom: 50px;">Read our success stories to see how Morphnex has transformed businesses through high-performance software engineering.</p>
        <section style="display: flex; flex-direction: column; gap: 40px;">
          ${caseStudies.map(study => `
            <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
              <span style="color: #C9A96E; font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase;">${study.industry}</span>
              <h2 style="font-size: 24px; font-weight: 900; margin: 10px 0; text-transform: uppercase;"><a href="/case-studies/${study.slug}" style="color: #FFFFFF; text-decoration: none;">${study.title}</a></h2>
              <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 20px;">${study.challenge}</p>
              <a href="/case-studies/${study.slug}" style="color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Read Case Study &rarr;</a>
            </article>
          `).join('')}
        </section>
      </main>
    `;
  }

  return `
    <main style="max-width: 800px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF; text-align: center;">
      <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; margin-bottom: 20px;">${route.title}</h1>
      <p style="color: #A0A0A0; font-size: 18px; line-height: 1.6; max-width: 600px; margin: 0 auto 40px auto;">${route.description}</p>
      <a href="/" style="display: inline-block; border: 1px solid #C9A96E; color: #C9A96E; padding: 12px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Go back home</a>
    </main>
  `;
}

async function prerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Error: Template file not found at ${TEMPLATE_PATH}. Run "npm run build" first.`);
    process.exit(1);
  }

  console.log('Starting prerendering for SEO routes...');
  
  // Load dynamic data from typescript files
  const blogPath = path.join(__dirname, 'src/app/data/blogData.ts');
  const tempBlogPath = loadTypeScriptData(blogPath, 'blogPosts');
  const blogPostsUrl = `file://${tempBlogPath.replace(/\\/g, '/')}`;
  const { default: blogPosts } = await import(blogPostsUrl);
  fs.unlinkSync(tempBlogPath);

  const casePath = path.join(__dirname, 'src/app/data/caseStudiesData.ts');
  const tempCasePath = loadTypeScriptData(casePath, 'caseStudies');
  const caseStudiesUrl = `file://${tempCasePath.replace(/\\/g, '/')}`;
  const { default: caseStudies } = await import(caseStudiesUrl);
  fs.unlinkSync(tempCasePath);

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  // Also prerender the root index.html to ensure it has the correct canonical tag
  let rootHtml = template;
  rootHtml = rootHtml.replace(/<link id="canonical-link" rel="canonical" href="[^"]*"\s*(?:data-rh="true")?\s*\/?>/, '<link id="canonical-link" rel="canonical" href="https://morphnex.in/" data-rh="true" />');
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
      /<link id="canonical-link" rel="canonical" href="[^"]*"\s*(?:data-rh="true")?\s*\/?>/g,
      `<link id="canonical-link" rel="canonical" href="${url}" data-rh="true" />`
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

    // 6. Generate and Inject Semantic Body Content
    const bodyContent = generateBodyHtml(route, blogPosts, caseStudies);
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);

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

prerender().catch(err => {
  console.error('Error during prerendering:', err);
  process.exit(1);
});
