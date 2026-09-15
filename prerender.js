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
    path: 'terms',
    title: 'Terms & Conditions | Morphnex Technologies',
    description: 'Read the terms and conditions of collaborating with Morphnex, detailing billing milestones, deposits, and delivery terms.'
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
          <nav style="margin-bottom: 20px;"><a href="/blog/" style="color: #C9A96E; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px;">&larr; Back to Blog</a></nav>
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
          <nav style="margin-bottom: 20px;"><a href="/case-studies/" style="color: #C9A96E; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px;">&larr; Back to Case Studies</a></nav>
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
              <h2 style="font-size: 24px; font-weight: 900; margin: 10px 0; text-transform: uppercase;"><a href="/blog/${post.slug}/" style="color: #FFFFFF; text-decoration: none;">${post.title}</a></h2>
              <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 20px;">${post.excerpt}</p>
              <a href="/blog/${post.slug}/" style="color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Read Full Article &rarr;</a>
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
              <h2 style="font-size: 24px; font-weight: 900; margin: 10px 0; text-transform: uppercase;"><a href="/case-studies/${study.slug}/" style="color: #FFFFFF; text-decoration: none;">${study.title}</a></h2>
              <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 20px;">${study.challenge}</p>
              <a href="/case-studies/${study.slug}/" style="color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Read Case Study &rarr;</a>
            </article>
          `).join('')}
        </section>
      </main>
    `;
  }

  if (route.path === 'about') {
    return `
      <main style="max-width: 900px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px;">About <span style="color: #C9A96E;">Morphnex</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 20px; line-height: 1.6; max-width: 700px; margin: 0 auto 50px auto;">We design and engineer bespoke software solutions, high-performance cloud architectures, and intelligent digital products for ambitious enterprises worldwide.</p>
        
        <section style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 40px; margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 900; color: #FFFFFF; margin-top: 0; margin-bottom: 20px; text-transform: uppercase;">Our Core Mission</h2>
          <p style="color: #A0A0A0; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">At Morphnex Technologies, we bridge the gap between visionary product strategy and world-class software execution. From scalable web systems to resilient cloud deployments, our team focuses on technical perfection and measurable business results.</p>
        </section>

        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 50px;">
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 25px;">
            <h3 style="color: #C9A96E; font-size: 18px; margin-top: 0; font-weight: bold; text-transform: uppercase;">Engineering Excellence</h3>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Clean code, automated testing pipelines, and zero-compromise architecture standards.</p>
          </div>
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 25px;">
            <h3 style="color: #C9A96E; font-size: 18px; margin-top: 0; font-weight: bold; text-transform: uppercase;">Zero-Trust Security</h3>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Built-in data privacy, PCI-DSS compliance, and encrypted infrastructure by default.</p>
          </div>
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 25px;">
            <h3 style="color: #C9A96E; font-size: 18px; margin-top: 0; font-weight: bold; text-transform: uppercase;">Rapid Delivery</h3>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Modern DevOps and CI/CD pipelines to turn complex requirements into production software fast.</p>
          </div>
        </section>

        <div style="text-align: center;">
          <a href="/contact/" style="display: inline-block; border: 1px solid #C9A96E; background: #C9A96E; color: #0F0F0F; padding: 14px 36px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 13px; letter-spacing: 0.1em;">Partner With Us</a>
        </div>
      </main>
    `;
  }

  if (route.path === 'team') {
    return `
      <main style="max-width: 900px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px;">Meet The <span style="color: #C9A96E;">Team</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 20px; line-height: 1.6; max-width: 700px; margin: 0 auto 50px auto;">Meet the engineers, architects, and product designers building high-impact enterprise applications at Morphnex.</p>

        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 50px;">
          <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px; text-align: center;">
            <h2 style="font-size: 22px; font-weight: 900; color: #FFFFFF; margin-bottom: 5px;">Laxit Jangid</h2>
            <span style="color: #C9A96E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em;">Founder & Lead Architect</span>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6; margin-top: 15px;">Full-stack software architect specializing in scalable microservices, cloud deployments, and high-performance Web applications.</p>
          </article>
          <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px; text-align: center;">
            <h2 style="font-size: 22px; font-weight: 900; color: #FFFFFF; margin-bottom: 5px;">Morphnex Engineering Team</h2>
            <span style="color: #C9A96E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em;">Cloud & AI Specialists</span>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6; margin-top: 15px;">Elite frontend specialists, cloud architects, and machine learning engineers dedicated to enterprise software mastery.</p>
          </article>
        </section>
      </main>
    `;
  }

  if (route.path === 'services') {
    return `
      <main style="max-width: 900px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px;">Our <span style="color: #C9A96E;">Services</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 20px; line-height: 1.6; max-width: 700px; margin: 0 auto 50px auto;">Comprehensive software engineering solutions tailored to propel your business forward.</p>

        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 50px;">
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
            <h2 style="color: #FFFFFF; font-size: 20px; font-weight: 900; margin-top: 0; margin-bottom: 10px; text-transform: uppercase;">Web Development</h2>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">High-speed React, Next.js, and Node.js applications with pixel-perfect responsive UI and SEO optimization.</p>
          </div>
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
            <h2 style="color: #FFFFFF; font-size: 20px; font-weight: 900; margin-top: 0; margin-bottom: 10px; text-transform: uppercase;">Cloud Architecture & DevOps</h2>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">AWS cloud migrations, Kubernetes cluster orchestration, Terraform IaC, and zero-downtime CI/CD pipelines.</p>
          </div>
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
            <h2 style="color: #FFFFFF; font-size: 20px; font-weight: 900; margin-top: 0; margin-bottom: 10px; text-transform: uppercase;">AI & Machine Learning</h2>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Integrating LLMs, predictive telemetry models, and intelligent AI agents directly into enterprise workflows.</p>
          </div>
          <div style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
            <h2 style="color: #FFFFFF; font-size: 20px; font-weight: 900; margin-top: 0; margin-bottom: 10px; text-transform: uppercase;">Mobile Development</h2>
            <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Cross-platform iOS and Android mobile apps powered by React Native with offline sync and high security.</p>
          </div>
        </section>
      </main>
    `;
  }

  if (route.path === 'career') {
    return `
      <main style="max-width: 900px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px;">Careers at <span style="color: #C9A96E;">Morphnex</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 20px; line-height: 1.6; max-width: 700px; margin: 0 auto 50px auto;">Work on high-impact enterprise software projects alongside an elite team of engineers and designers.</p>

        <section style="margin-bottom: 50px;">
          <h2 style="font-size: 28px; font-weight: 900; color: #FFFFFF; margin-bottom: 30px; text-transform: uppercase;">Open Positions</h2>
          
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
              <span style="color: #C9A96E; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em;">Engineering • Full-Time</span>
              <h3 style="font-size: 22px; font-weight: 900; color: #FFFFFF; margin: 10px 0;">Senior Full-Stack Engineer</h3>
              <p style="color: #A0A0A0; font-size: 15px; line-height: 1.6;">Experience with React, Node.js, TypeScript, PostgreSQL, and cloud infrastructure. Lead complex web projects and mentor junior developers.</p>
              <a href="mailto:laxitjangid2k5@gmail.com?subject=Application:%20Senior%20Full-Stack%20Engineer" style="display: inline-block; margin-top: 15px; color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Apply Now &rarr;</a>
            </article>

            <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
              <span style="color: #C9A96E; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em;">DevOps & Infrastructure • Full-Time</span>
              <h3 style="font-size: 22px; font-weight: 900; color: #FFFFFF; margin: 10px 0;">Cloud Architecture Specialist</h3>
              <p style="color: #A0A0A0; font-size: 15px; line-height: 1.6;">Experience with AWS, Kubernetes, Docker, Terraform, and automated deployment pipelines for enterprise applications.</p>
              <a href="mailto:laxitjangid2k5@gmail.com?subject=Application:%20Cloud%20Architecture%20Specialist" style="display: inline-block; margin-top: 15px; color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Apply Now &rarr;</a>
            </article>

            <article style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px;">
              <span style="color: #C9A96E; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em;">Design • Full-Time</span>
              <h3 style="font-size: 22px; font-weight: 900; color: #FFFFFF; margin: 10px 0;">Lead UI/UX Designer</h3>
              <p style="color: #A0A0A0; font-size: 15px; line-height: 1.6;">Design high-end luxury digital interfaces, interactive design systems, and responsive web/mobile user flows.</p>
              <a href="mailto:laxitjangid2k5@gmail.com?subject=Application:%20Lead%20UI/UX%20Designer" style="display: inline-block; margin-top: 15px; color: #C9A96E; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">Apply Now &rarr;</a>
            </article>
          </div>
        </section>
      </main>
    `;
  }

  if (route.path === 'contact') {
    return `
      <main style="max-width: 800px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px;">Contact <span style="color: #C9A96E;">Morphnex</span></h1>
        <p style="text-align: center; color: #A0A0A0; font-size: 20px; line-height: 1.6; margin-bottom: 50px;">Ready to start your next enterprise project? Get in touch with our engineering team today.</p>

        <section style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 40px; margin-bottom: 40px;">
          <h2 style="font-size: 24px; font-weight: 900; color: #FFFFFF; margin-top: 0; margin-bottom: 25px; text-transform: uppercase;">Direct Contact Information</h2>
          <p style="color: #A0A0A0; font-size: 16px; margin-bottom: 15px;"><strong>Location:</strong> Jodhpur, Rajasthan, India</p>
          <p style="color: #A0A0A0; font-size: 16px; margin-bottom: 15px;"><strong>Phone:</strong> <a href="tel:+917878429752" style="color: #C9A96E; text-decoration: none;">+91 7878429752</a></p>
          <p style="color: #A0A0A0; font-size: 16px; margin-bottom: 15px;"><strong>Email:</strong> <a href="mailto:laxitjangid2k5@gmail.com" style="color: #C9A96E; text-decoration: none;">laxitjangid2k5@gmail.com</a></p>
        </section>
      </main>
    `;
  }

  if (route.path === 'terms') {
    return `
      <main style="max-width: 800px; margin: 0 auto; padding: 60px 20px; font-family: system-ui, -apple-system, sans-serif; background: #0F0F0F; color: #FFFFFF;">
        <h1 style="font-size: 42px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; margin-bottom: 20px;">Terms & <span style="color: #C9A96E;">Conditions</span></h1>
        <p style="color: #A0A0A0; font-size: 16px; line-height: 1.8; margin-bottom: 30px;">Read the official terms and conditions governing engagement with Morphnex Technologies.</p>

        <section style="background: #1A1A1A; border: 1px solid rgba(255,255,255,0.08); padding: 30px; line-height: 1.8; color: #A0A0A0;">
          <h2 style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin-top: 0;">1. Scope of Services</h2>
          <p>Morphnex delivers custom software development, cloud engineering, and strategic IT consulting as outlined in individual project proposals and client contracts.</p>

          <h2 style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin-top: 25px;">2. Intellectual Property</h2>
          <p>Upon full milestone payment, clients receive exclusive ownership rights to customized deliverable application source code.</p>

          <h2 style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin-top: 25px;">3. Confidentiality & NDAs</h2>
          <p>We treat all client business data, product plans, and proprietary algorithms under strict non-disclosure agreements.</p>
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

function generateJsonLd(route, blogPosts, caseStudies) {
  const canonicalUrl = route.path ? `https://morphnex.in/${route.path}/` : 'https://morphnex.in/';

  if (route.path.startsWith('blog/')) {
    const slug = route.path.substring(5);
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.excerpt,
        'image': post.image,
        'author': {
          '@type': 'Person',
          'name': post.author
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Morphnex Technologies',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://morphnex.in/images/logo.webp'
          }
        },
        'datePublished': '2026-03-01',
        'url': canonicalUrl
      });
    }
  }

  if (route.path.startsWith('case-studies/')) {
    const slug = route.path.substring(13);
    const study = caseStudies.find(c => c.slug === slug);
    if (study) {
      return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': study.title,
        'description': study.challenge,
        'image': study.image,
        'publisher': {
          '@type': 'Organization',
          'name': 'Morphnex Technologies'
        },
        'url': canonicalUrl
      });
    }
  }

  if (route.path === 'career') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      'title': 'Senior Full-Stack Engineer',
      'description': 'Senior Full-Stack Engineer at Morphnex Technologies focusing on React, Node.js, and cloud systems.',
      'hiringOrganization': {
        '@type': 'Organization',
        'name': 'Morphnex Technologies',
        'sameAs': 'https://morphnex.in/'
      },
      'jobLocation': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Jodhpur',
          'addressRegion': 'Rajasthan',
          'addressCountry': 'IN'
        }
      }
    });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': route.title,
    'description': route.description,
    'url': canonicalUrl,
    'publisher': {
      '@type': 'Organization',
      'name': 'Morphnex Technologies',
      'url': 'https://morphnex.in/'
    }
  });
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

  // Also prerender the root index.html to ensure it has the correct canonical tag and JSON-LD
  let rootHtml = template;
  rootHtml = rootHtml.replace(/<link(?: id="canonical-link")? rel="canonical" href="[^"]*"\s*(?:data-rh="true")?\s*\/?>/, '<link rel="canonical" href="https://morphnex.in/" />');
  
  const rootSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Morphnex Technologies',
    'url': 'https://morphnex.in/',
    'logo': 'https://morphnex.in/images/logo.webp',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-7878429752',
      'contactType': 'customer support',
      'email': 'laxitjangid2k5@gmail.com'
    }
  });

  rootHtml = rootHtml.replace('</head>', `<script type="application/ld+json">${rootSchema}</script></head>`);
  fs.writeFileSync(TEMPLATE_PATH, rootHtml, 'utf8');
  console.log('✓ Prerendered root (/)');

  routes.forEach(route => {
    let html = template;
    const url = `https://morphnex.in/${route.path}/`;

    // 1. Replace Title
    html = html.replace(/<title>[^<]*<\/title>/g, `<title>${route.title}</title>`);

    // 2. Replace Description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Replace Canonical Link
    html = html.replace(
      /<link(?: id="canonical-link")? rel="canonical" href="[^"]*"\s*(?:data-rh="true")?\s*\/?>/g,
      `<link rel="canonical" href="${url}" />`
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

    // 6. Inject JSON-LD Schema
    const jsonLd = generateJsonLd(route, blogPosts, caseStudies);
    html = html.replace('</head>', `<script type="application/ld+json">${jsonLd}</script></head>`);

    // 7. Generate and Inject Semantic Body Content
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
