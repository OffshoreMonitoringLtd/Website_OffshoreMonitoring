const app = document.querySelector("#app");
const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
let cleanupHeroStory = null;

const technologies = [
  {
    title: "LADAR maritime sensing systems",
    teaser: "High-resolution detection for vessels, objects and coastal infrastructure.",
    text: "LADAR-based sensing delivers high-resolution detection and monitoring of vessels, objects, infrastructure and environmental features in demanding maritime conditions. It strengthens situational awareness around ports, platforms and coastal zones where conventional sensors alone leave gaps.",
    tags: ["Vessel detection", "Traffic monitoring", "Infrastructure", "Coastal observation"]
  },
  {
    title: "Earth observation data integration",
    teaser: "Satellite and in-situ data combined into one continuous maritime view.",
    text: "Satellite imagery is fused with in-situ sensing and analytical models to create a wider, more continuous picture of maritime and waterbody conditions. The result is broader coverage for environmental intelligence, marine navigation support and operational monitoring beyond a single sensor footprint.",
    tags: ["Satellite imagery", "Sensor networks", "Water quality", "Maritime analytics"]
  },
  {
    title: "High-accuracy maritime positioning",
    teaser: "Resilient, decimetre-level navigation beyond coastal networks.",
    text: "Galileo-enabled positioning concepts support resilient, decimetre-level navigation beyond coastal RTK networks and continuous internet connectivity. This underpins safer vessel operations, autonomous concepts and monitoring architectures that must remain trustworthy far from shore.",
    tags: ["Galileo HAS", "GNSS / INS", "Anti-spoofing", "Autonomous navigation"]
  },
  {
    title: "AI, analytics and modelling",
    teaser: "Forecasting and anomaly detection that turn signals into insight.",
    text: "Machine learning, forecasting and anomaly detection transform EO, positioning and multi-sensor measurements into operational insight and risk prediction. Models are designed to support real decisions, not just dashboards, across safety, security and environmental use cases.",
    tags: ["Deep learning", "Nowcasting", "Anomaly detection", "Risk prediction"]
  },
  {
    title: "System integration and data interfaces",
    teaser: "Secure architectures that connect sensors, EO and analytics.",
    text: "Secure architectures connect multiple sensor types, satellite observations and analytical platforms into coherent operational monitoring systems. Interfaces, dashboards and cyber-resilient design keep the stack usable for operators while remaining robust enough for safety-critical maritime environments.",
    tags: ["Data interfaces", "Dashboards", "Architecture", "Cyber resilience"]
  }
];

const applications = [
  {
    title: "Maritime and offshore security",
    text: "Monitoring technologies support protection of ports, offshore energy installations, maritime transport infrastructure and critical coastal facilities.",
    tags: ["Ports", "Offshore energy", "Critical infrastructure", "Cyber risk"]
  },
  {
    title: "Maritime safety and autonomous shipping",
    text: "Accurate detection, continuous positioning and situational-awareness analytics support safer navigation and emerging autonomous vessel concepts.",
    tags: ["Vessel detection", "Positioning", "Tracking", "Navigation safety"]
  },
  {
    title: "Environmental compliance and monitoring",
    text: "Operational intelligence supports voyage optimisation, emissions monitoring, pollution detection and environmental reporting.",
    tags: ["Voyage optimisation", "Emissions", "Reporting", "Pollution detection"]
  },
  {
    title: "Waterbody environmental management",
    text: "Earth observation, sensing and forecasting models reveal water-quality changes, ecosystem conditions and environmental anomalies.",
    tags: ["Water quality", "Forecasting", "Ecosystems", "Anomaly detection"]
  }
];

const projects = [
  {
    name: "SWIM",
    category: "Water intelligence",
    text: "A Copernicus-powered platform combining satellite EO data and WAMO in-situ measurements to monitor water quality and quantity, predict algal blooms, floods and droughts, and provide decision-ready guidance.",
    url: "https://cordis.europa.eu/project/id/101180055",
    image: "assets/site-images/swim-logo-v2.png"
  },
  {
    name: "VoyOpt™",
    category: "Voyage optimisation",
    text: "A 24/7 weather-routing service using metocean, EO and ship-performance data to optimise fuel, emissions, ETA, safety and structural stress.",
    url: "https://www.offshorenavigation.com/",
    image: "assets/site-images/project-logos-1.png"
  },
  {
    name: "MARINA",
    category: "Maritime protection",
    text: "The Ladar™ Sensor Suite for adaptable maritime security, collision prevention and surveillance around vessels, ports, platforms, pipelines and offshore assets.",
    url: "https://www.marina-project.eu/",
    image: "assets/site-images/project-logos-2.png"
  },
  {
    name: "SafeNav",
    category: "Collision prevention",
    text: "Multi-source detection and COLREG-based decision support for vessels, installations, submerged objects and marine mammals: a step toward remote and autonomous shipping.",
    url: "https://www.safenavsystem.com/",
    image: "assets/site-images/project-logos-3.png"
  },
  {
    name: "SOS",
    category: "Person overboard",
    text: "The Multi-Sensor Offshore Safety System™ detects, characterises and tracks person-overboard events in real time, providing an automated watchman at sea.",
    url: "https://www.overboardalert.com/",
    image: "assets/site-images/project-logos-4.png"
  },
  {
    name: "APS-NET",
    category: "Radar surveillance",
    text: "High-accuracy observation around ships, offshore platforms and coastal infrastructure, operating as a primary system or augmenting conventional surveillance.",
    url: "https://shipradars.com/",
    image: "assets/site-images/project-logos-5.png"
  },
  {
    name: "C3S Global Shipping",
    category: "Climate adaptation",
    text: "A coordinated project adapting the global shipping industry for climate change through Earth observation, remote sensing, environmental monitoring and professional training.",
    url: "https://climate.copernicus.eu/",
    image: "assets/site-images/project-logos-6.png"
  },
  {
    name: "E-NAV",
    category: "Smart sail planning",
    text: "An EO-powered sail-plan and training platform designed to reduce fuel use, hull fatigue, sailing time and CO₂ emissions.",
    url: "https://e-navservices.com/",
    image: "assets/site-images/project-logos-7.png"
  },
  {
    name: "EcoSail",
    category: "Route intelligence",
    text: "Advanced computational models, EO data and machine learning optimise ship routes for ETA, fuel use and passenger comfort.",
    url: "https://cordis.europa.eu/project/id/820593/reporting",
    image: "assets/site-images/project-logos-8.png"
  },
  {
    name: "SpaceNav",
    category: "Energy efficiency",
    text: "A sail-planning decision system helping masters improve energy efficiency and regulatory compliance with optimised route services.",
    url: "https://cordis.europa.eu/project/id/607371/reporting",
    image: "assets/site-images/spacenav.png"
  }
];

const team = [
  ["Founder & Chief Scientific Officer", "Dr. Sverre Dokken", "Inventor and portfolio entrepreneur with 20+ startups and 25+ years in maritime R&D projects. Tech. Ph.D. in Remote Sensing and M.B.A. in Finance and International Management.", "assets/site-images/person-1.png"],
  ["Director · Head of Projects", "Jacek Gruszka", "Successful business and project manager with 10+ years’ experience in business development and maritime R&D projects.", "assets/site-images/person-2.png"],
  ["Chief Technical Officer", "Dr. Waqas Qazi", "15+ years of expertise in remote sensing and satellite oceanography. Ph.D. in Aerospace Engineering Sciences. Develops analytical and AI-based methods for EO and maritime monitoring data in operational projects.", "assets/site-images/person-3.png"],
  ["AI Systems Design · DevOps · DevSecOps", "Majeed Hussain", "Specialist in designing AI systems, DevOps and DevSecOps, with experience in safety-critical systems and applied cybersecurity in production AI systems. 8+ years of experience in AI. MSc in Computer Vision and Robotics.", "assets/site-images/majeed-v3.png"],
  ["Head of Accounts", "Constantinos Lavithis", "Finance professional with a B.A. Hons. in Accountancy & Finance and ICAEW membership. 8 years of experience in audit, accounting, payroll, banking, budgeting and financial management, including financial coordination on R&D projects.", "assets/site-images/person-4.png"],
  ["Proposal Manager", "Rebekah Matrosova", "Skilled programme manager with 15+ years of experience in grant- and publicly funded projects in the U.S. and EU. MPA in Management.", "assets/site-images/OSM_Rebekah-resized.png"]
];

function pageHero(index, kicker, title, lead) {
  return `
    <section class="page-hero" data-index="${index}">
      <div class="page-hero-grid" aria-hidden="true"></div>
      <div class="page-hero-glow" aria-hidden="true"></div>
      <div class="wrap page-hero-inner">
        <div class="page-hero-meta reveal">
          <p class="kicker">${kicker}</p>
          <span class="page-hero-index">${index}</span>
        </div>
        <div class="page-hero-main">
          <h1 class="page-title reveal">${title}</h1>
          <p class="page-hero-lead reveal">${lead}</p>
        </div>
      </div>
    </section>`;
}

function manifestoBand(kicker, titleHtml, leftCopy, rightCopy, extra = "") {
  return `
    <section class="manifesto section">
      <div class="wrap manifesto-grid">
        <p class="kicker reveal">${kicker}</p>
        <div>
          <h2 class="reveal">${titleHtml}</h2>
          <div class="manifesto-copy reveal">
            <p>${leftCopy}</p>
            <p>${rightCopy}</p>
          </div>
          ${extra}
        </div>
      </div>
    </section>`;
}

/** Quiet label above a list; no second essay. */
function sectionLabel(label) {
  return `<p class="section-label reveal">${label}</p>`;
}

function detailRows(items) {
  return `
    <div class="detail-stack">
      ${items.map((item, index) => `
        <article class="detail-row reveal">
          <span class="num">${String(index + 1).padStart(2, "0")}</span>
          <h2>${item.title}</h2>
          <div>
            <p>${item.text}</p>
            <div class="tag-list">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
        </article>`).join("")}
    </div>`;
}

function homePage() {
  return `
    <section class="home-hero">
      <video class="hero-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
        <source src="assets/hero-video.mp4" type="video/mp4">
      </video>
      <div class="ocean-canvas"></div>
      <div class="hero-grid"></div>
      <div class="chapter-readout">
        <i></i>
        <span id="chapter-label">CH.1 · AT SEA</span>
      </div>
      <div class="hero-content">
        <p class="kicker reveal">Maritime monitoring · Sensing · Intelligence</p>
        <h1 class="display story-headline reveal">
          <span id="hero-line-1">Sensing the ocean.</span>
          <span id="hero-line-2"><em>From the surface, always watching.</em></span>
        </h1>
        <div class="hero-bottom reveal">
          <p>We connect advanced sensing, Earth observation, resilient positioning and AI to help maritime operators understand what is happening, and what comes next.</p>
          <div class="story-status">
            <span class="signal-status"><i></i>Systems online</span>
            <div class="chapter-dots" id="chapter-dots" aria-label="Video chapters"></div>
          </div>
          <span class="hero-index">35.17° N · 33.36° E</span>
        </div>
      </div>
      <span class="scroll-cue">Scroll to explore</span>
    </section>

    <section class="manifesto section">
      <div class="wrap manifesto-grid">
        <p class="kicker reveal">What we do</p>
        <div>
          <h2 class="reveal">From raw signals to a clear operational picture. <span>Engineered for the realities of life at sea.</span></h2>
          <div class="manifesto-copy reveal">
            <p>Offshore Monitoring develops sensing technologies, Earth observation analytics, high-accuracy satellite positioning and advanced modelling for maritime safety, infrastructure protection and environmental monitoring.</p>
            <p>Our monitoring architectures integrate LADAR perception, multi-sensor data and safety-conscious AI with cybersecurity practices built for demanding operational environments.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="capability-header reveal">
          <div>
            <p class="kicker">Core technologies</p>
            <h2 class="section-title">One connected sensing stack.</h2>
          </div>
          <p>From data production through analysis to secure system integration.</p>
        </div>
        <div class="capability-list">
          ${technologies.map((item, index) => `
            <div class="capability reveal">
              <span class="num">${String(index + 1).padStart(2, "0")}</span>
              <h3>${item.title}</h3>
              <p>${item.teaser}</p>
            </div>`).join("")}
        </div>
        <a class="text-link capability-cta reveal" href="#/technologies">Explore technologies <span>↗</span></a>
      </div>
    </section>

    <section class="radar-section">
      <div class="radar" aria-hidden="true"></div>
      <div class="wrap">
        <div class="radar-copy reveal">
          <p class="kicker">Operational intelligence</p>
          <h2 class="section-title">A living picture of the maritime domain.</h2>
          <p>LADAR, EO imagery, positioning and in-situ sensing fuse into decision-ready information that supports safer navigation, stronger infrastructure and healthier waters.</p>
          <div class="metrics">
            <div class="metric"><strong>360°</strong><span>Situational awareness</span></div>
            <div class="metric"><strong>24/7</strong><span>Continuous monitoring</span></div>
          </div>
          <a class="text-link" href="#/applications">Explore applications <span>↗</span></a>
        </div>
      </div>
    </section>

    <section class="project-preview section">
      <div class="wrap">
        <div class="project-preview-head reveal">
          <div>
            <p class="kicker">Research & innovation</p>
            <h2 class="section-title">Ideas tested in the real world.</h2>
          </div>
          <a class="text-link" href="#/projects">View all projects <span>↗</span></a>
        </div>
        <div class="project-cards">
          ${projects.slice(0, 3).map((project, index) => `
            <a class="project-card reveal" href="${project.url}" target="_blank" rel="noopener">
              <div class="project-meta"><span>${String(index + 1).padStart(2, "0")}</span><span>${project.category}</span></div>
              <div class="project-logo"><img src="${project.image}" alt="${project.name} project logo" loading="lazy"></div>
              <div class="project-card-copy"><h3>${project.name}</h3><p>${project.text}</p></div>
            </a>`).join("")}
        </div>
      </div>
    </section>`;
}

function technologiesPage() {
  return `
    ${pageHero("01", "Technology platform", "From sensing to certainty.", "We combine data production, advanced analysis and secure system integration to make maritime environments more observable, predictable and manageable.")}
    ${manifestoBand(
      "Point of view",
      "Certainty is not a single sensor. <span>It is a connected stack, from signal to decision.</span>",
      "A radar return, a satellite scene or a position fix only becomes useful when it is designed into one architecture with the layers around it.",
      "We build for reliability and cyber resilience from the start, so the picture operators trust at sea is coherent, not a pile of disconnected tools."
    )}
    <section class="section-tight">
      <div class="wrap">
        ${sectionLabel("Capabilities")}
        ${detailRows(technologies)}
      </div>
    </section>`;
}

function applicationsPage() {
  const concepts = [
    ["SCAN", "Remote sensing and scanning of onboard assets to identify anomalous trends and faults."],
    ["PlasticDetect", "Real-time detection, classification and tracking of marine plastic pollution."],
    ["HydroSail", "CRM-free green hydrogen and alternative-fuel production directly aboard a sea-going vessel."],
    ["GATEWAY", "Safe logistics through autonomous waterborne freight for inland and maritime transport."]
  ];
  return `
    ${pageHero("02", "Applications", "Intelligence where it matters.", "Our systems combine sensing, satellite observations, positioning and analytics to solve operational challenges in safety, security, compliance and environmental management.")}
    ${manifestoBand(
      "Point of view",
      "Technology only matters where decisions are made. <span>Under real maritime pressure, not in the abstract.</span>",
      "On a vessel bridge, in a port, or beside an offshore installation, people need clear information they can act on when conditions change and time is short.",
      "We design sensing and analytics for those moments: timely, trustworthy and usable by the people who carry the operational risk."
    )}
    <section class="section">
      <div class="wrap">
        ${sectionLabel("Applications")}
        ${detailRows(applications)}
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        ${sectionLabel("Emerging concepts")}
        <div class="concept-grid">
          ${concepts.map((concept, index) => `
            <article class="concept reveal"><span class="num">${String(index + 1).padStart(2, "0")}</span><h3>${concept[0]}</h3><p>${concept[1]}</p></article>
          `).join("")}
        </div>
      </div>
    </section>`;
}

function projectsPage() {
  return `
    ${pageHero("03", "Research & innovation", "Projects with measurable impact.", "We lead and participate in international programmes that combine sensing, EO data, modelling and AI into practical tools for maritime operations and environmental management.")}
    ${manifestoBand(
      "Point of view",
      "Impact is proven in programmes, not pitches. <span>From laboratory ambition to tools that reach open water.</span>",
      "International consortia are where architecture, partners and delivery discipline meet: research organisations, operators and technology teams building toward a shared outcome.",
      "We stay for the hard middle: technical leadership, system design and the work that turns a funded idea into capability that can leave the lab."
    )}
    <section class="section-tight">
      <div class="wrap">
        <div class="section-label-row reveal">
          ${sectionLabel("Selected programmes")}
          <a class="text-link" href="https://ec.europa.eu/info/funding-tenders/opportunities/portal/" target="_blank" rel="noopener">EC Portal profile <span>↗</span></a>
        </div>
        <div class="all-projects">
          ${projects.map((project, index) => `
            <a class="project-row reveal" href="${project.url}" target="_blank" rel="noopener">
              <span class="num">${String(index + 1).padStart(2, "0")}</span>
              <div class="project-logo"><img src="${project.image}" alt="${project.name} project logo" loading="lazy"></div>
              <span class="category">${project.category}</span>
              <div><h2>${project.name}</h2><p>${project.text}</p></div>
              <span class="arrow">↗</span>
            </a>`).join("")}
        </div>
      </div>
    </section>`;
}

function leadershipPage() {
  const services = [
    { title: "Technical project leadership", text: "Design of monitoring architectures, integration strategies and technical concepts that connect EO, positioning, sensing and analytical components.", tags: ["Architecture", "Integration strategy", "Concept design"] },
    { title: "Technology development", text: "Development, evaluation, testing and validation of sensing technologies, analytical models and operational monitoring platforms.", tags: ["Sensing", "AI models", "Testing", "Validation"] },
    { title: "Project coordination and management", text: "Coordination of international consortia involving research organisations, technology companies, operators and public institutions.", tags: ["Consortium coordination", "Work packages", "Delivery"] },
    { title: "Proposal development", text: "Technical vision, project architecture, consortium formation and partner engagement for competitive research and innovation proposals.", tags: ["Technical vision", "Partner engagement", "Proposal design"] },
    { title: "IPR management and protection", text: "Practical intellectual-property support for innovation projects, including patent landscapes, freedom-to-operate assessments and protection strategy.", tags: ["Patent landscape", "FTO", "IP strategy"] }
  ];
  return `
    ${pageHero("04", "Project leadership", "From ambitious idea to working system.", "We provide the technical direction, development discipline and consortium leadership needed to move complex maritime innovation programmes forward.")}
    ${manifestoBand(
      "Point of view",
      "Programmes succeed when leadership is technical. <span>Coordination is part of the engineering, not a layer on top of it.</span>",
      "Complex maritime innovation needs someone who can hold architecture, partners and delivery in the same frame.",
      "We work with research organisations, developers, operators and public institutions so project vision and intellectual property stay aligned with the operational outcome."
    )}
    <section class="section-tight">
      <div class="wrap">
        ${sectionLabel("How we work")}
        ${detailRows(services)}
      </div>
    </section>`;
}

function aboutPage() {
  return `
    ${pageHero("05", "About Offshore Monitoring", "Built to understand complex waters.", "We develop and integrate technologies that enable monitoring, situational awareness and operational decision-making across maritime and offshore environments.")}
    <section class="manifesto section">
      <div class="wrap manifesto-grid">
        <p class="kicker reveal">Our focus</p>
        <div>
          <h2 class="reveal">Scientific depth. Operational relevance. <span>Innovation designed to leave the lab.</span></h2>
          <div class="manifesto-copy reveal">
            <p>We combine maritime sensing, Earth observation, analytical modelling, artificial intelligence and robust system integration, with reliability and cybersecurity treated as design constraints, not afterthoughts.</p>
            <p>The aim is not more research for its own sake. It is capability that can survive contact with weather, regulation, operators and real infrastructure.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        ${sectionLabel("Collaboration")}
        <div class="intro-grid about-follow">
          <div>
            <h2 class="section-title reveal">Innovation is a team sport.</h2>
          </div>
          <div class="intro-copy reveal">
            <p class="lead">Complex waters are never solved alone.</p>
            <p>Offshore Monitoring collaborates with research institutions, technology developers, maritime operators and infrastructure managers through research partnerships, technology-development activities and operational monitoring projects.</p>
            <div class="link-row">
              <a class="text-link" href="#/team">Meet the team <span>↗</span></a>
              <a class="text-link" href="#/contact">Work with us <span>↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function teamPage() {
  return `
    ${pageHero("06", "Our team", "Experience across sea, space and software.", "A multidisciplinary leadership team bringing together remote sensing, maritime R&D, AI, project management, finance and international proposal development.")}
    <section class="section">
      <div class="wrap">
        <div class="team-grid">
          ${team.map(person => `
            <article class="person reveal">
              <div class="person-portrait"><img src="${person[3]}" alt="${person[1]}" loading="lazy"></div>
              <span class="role">${person[0]}</span>
              <h2>${person[1]}</h2>
              <p>${person[2]}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function careersPage() {
  return `
    ${pageHero("07", "Careers", "Do work that moves maritime technology forward.", "Join a multidisciplinary team developing practical sensing, intelligence and research solutions for the maritime industry.")}
    <section class="section">
      <div class="wrap">
        <div class="career-card reveal">
          <div>
            <p class="kicker">Open application</p>
            <h2>Bring your perspective aboard.</h2>
            <p>We welcome applications from professionals interested in maritime sensing, Earth observation, AI, software engineering and international R&D. Send your résumé and include the position you are applying for in the subject line.</p>
          </div>
          <a class="circle-link career-link" href="mailto:hr@offshoremonitoring.com?subject=Career%20application" aria-label="Email your resume">↗</a>
        </div>
      </div>
    </section>`;
}

function contactPage() {
  return `
    ${pageHero("08", "Contact", "Start a conversation.", "Talk to us about a research partnership, technology-development collaboration, maritime application or new sensing and analytics system.")}
    <section class="section">
      <div class="wrap contact-grid">
        <div class="reveal">
          <p class="kicker">Find us</p>
          <h2 class="section-title">Limassol,<br>Cyprus.</h2>
          <div class="contact-details">
            <div><span>Office</span><p>O.M. Offshore Monitoring Limited<br>26 Nikou Pattichi Street<br>3071 Limassol, Cyprus</p></div>
            <div><span>Call</span><a href="tel:+35725030500">+357 25 030 500</a></div>
            <div><span>Email</span><a href="mailto:info@offshoremonitoring.com">info@offshoremonitoring.com</a></div>
          </div>
        </div>
        <form class="contact-form reveal" id="contact-form">
          <div class="field"><label for="first-name">First name</label><input id="first-name" name="firstName" required autocomplete="given-name"></div>
          <div class="field"><label for="last-name">Last name</label><input id="last-name" name="lastName" required autocomplete="family-name"></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization"></div>
          <div class="field full"><label for="message">Tell us about your project</label><textarea id="message" name="message"></textarea></div>
          <button class="submit-btn" type="submit">Prepare email ↗</button>
          <span class="form-note">Submitting opens your email application. No form data is stored by this prototype.</span>
        </form>
      </div>
    </section>`;
}

const routes = {
  "/": { title: "Maritime Intelligence", render: homePage },
  "/technologies": { title: "Technologies", render: technologiesPage },
  "/applications": { title: "Applications", render: applicationsPage },
  "/projects": { title: "Projects", render: projectsPage },
  "/leadership": { title: "Project Leadership", render: leadershipPage },
  "/about": { title: "About", render: aboutPage },
  "/team": { title: "Team", render: teamPage },
  "/careers": { title: "Careers", render: careersPage },
  "/contact": { title: "Contact", render: contactPage }
};

function currentPath() {
  const hash = window.location.hash.slice(1) || "/";
  return hash.replace(/\/+$/, "") || "/";
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: "0px 0px -5% 0px" });
  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 3) * 70}ms`;
    observer.observe(item);
  });
  window.setTimeout(() => items.forEach(item => item.classList.add("visible")), 2500);
}

function initHeroStory() {
  const video = document.querySelector(".hero-video");
  const hero = document.querySelector(".home-hero");
  const lineOne = document.querySelector("#hero-line-1");
  const lineTwo = document.querySelector("#hero-line-2");
  const label = document.querySelector("#chapter-label");
  const dotsWrap = document.querySelector("#chapter-dots");
  if (!video || !hero || !lineOne || !lineTwo || !label || !dotsWrap) return;

  const chapters = [
    { start: 0, end: 2, label: "CH.1 · AT SEA", lineOne: "Sensing the ocean.", lineTwo: "From the surface, always watching." },
    { start: 2, end: 5, label: "CH.2 · SEABED TO ORBIT", lineOne: "From seabed to satellite.", lineTwo: "A continuous signal, end to end." },
    { start: 5, end: 13, label: "CH.3 · INTELLIGENCE", lineOne: "Raw signals.", lineTwo: "Turned into operational intelligence." },
    { start: 13, end: 15.05, label: "CH.4 · IMPACT", lineOne: "From idea to impact.", lineTwo: "R&D that reaches the water." }
  ];
  let activeIndex = 0;
  let transitionTimer = null;

  const dots = chapters.map((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-dot";
    button.setAttribute("aria-label", `Play ${chapter.label}`);
    button.addEventListener("click", () => {
      video.currentTime = chapter.start + .03;
      video.play().catch(() => {});
      setChapter(index);
    });
    dotsWrap.appendChild(button);
    return button;
  });

  function setChapter(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    const chapter = chapters[index];
    lineOne.parentElement.classList.add("changing");
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      lineOne.textContent = chapter.lineOne;
      lineTwo.innerHTML = `<em>${chapter.lineTwo}</em>`;
      label.textContent = chapter.label;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      lineOne.parentElement.classList.remove("changing");
    }, 260);
  }

  function chapterAt(time) {
    const index = chapters.findIndex(chapter => time >= chapter.start && time < chapter.end);
    return index < 0 ? chapters.length - 1 : index;
  }

  const onTimeUpdate = () => setChapter(chapterAt(video.currentTime || 0));
  const onCanPlay = () => video.classList.add("ready");

  video.muted = true;
  video.loop = true;
  video.addEventListener("timeupdate", onTimeUpdate);
  video.addEventListener("canplay", onCanPlay);
  if (video.readyState >= 3) onCanPlay();
  dots[0].classList.add("active");
  video.play().catch(() => {});

  const visibilityObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
  }, { threshold: 0 });
  visibilityObserver.observe(hero);

  cleanupHeroStory = () => {
    window.clearTimeout(transitionTimer);
    video.removeEventListener("timeupdate", onTimeUpdate);
    video.removeEventListener("canplay", onCanPlay);
    visibilityObserver.disconnect();
    cleanupHeroStory = null;
  };
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();
    const company = data.get("company") || "Not provided";
    const message = data.get("message") || "I would like to discuss a collaboration.";
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${data.get("email")}\nCompany: ${company}\n\n${message}`);
    window.location.href = `mailto:info@offshoremonitoring.com?subject=${subject}&body=${body}`;
  });
}

function render() {
  if (cleanupHeroStory) cleanupHeroStory();
  closeMenu();
  const path = currentPath();
  const route = routes[path];
  if (!route) {
    app.innerHTML = `<section class="not-found"><div><h1>404</h1><p>This coordinate is outside the charted area.</p><a class="text-link" href="#/">Return home <span>↗</span></a></div></section>`;
    document.title = "Page not found · Offshore Monitoring";
  } else {
    app.innerHTML = route.render();
    document.title = `${route.title} · Offshore Monitoring`;
  }
  document.querySelectorAll(".desktop-nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${path}`);
  });
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
  observeReveals();
  initHeroStory();
  initContactForm();
}

menuToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.setAttribute("aria-hidden", String(!open));
});

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
window.addEventListener("hashchange", render);
render();
