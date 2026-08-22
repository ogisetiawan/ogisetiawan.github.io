import type { ImageMetadata } from "astro";

// Project images (optimized via astro:assets)
import webMonitoringSalesImg from "../assets/projects/web-monitoring-sales.png";
import webKpiImg from "../assets/projects/web-kpi.png";
import elearningImg from "../assets/projects/elearning.png";
import redpineImg from "../assets/projects/redpine.png";
import webMonitoringReturImg from "../assets/projects/web-monitoring-retur.png";
import webRndImg from "../assets/projects/web-rnd.png";
import webFakturPajakImg from "../assets/projects/web-faktur-pajak.png";
import webSalesDashboardImg from "../assets/projects/web-sales-dashboard.png";
import webStockPositionImg from "../assets/projects/web-stockposition.png";
import webInvoiceSoaImg from "../assets/projects/web-invoice_soa.png";
import webKorImg from "../assets/projects/web-kor-maha.png";
import webPrImg from "../assets/projects/web-pr.png";
import webHitsrecordsImg from "../assets/projects/web-hitsrecords.png";
import webStarhitsImg from "../assets/projects/web-starhits.png";
import projectPlaceholderImg from "../assets/projects/project-placeholder.svg";
import profileImg from "../assets/images/ogi-setiawan.png";
import webManagementDashboardImg from "../assets/projects/web-management-dashboard.png";
import webCustomerPortalImg from "../assets/projects/web-customer-portal.png";
import webWidgetTicketingImg from "../assets/projects/web-widget-ticket.png";
import webAccountSwitcherImg from "../assets/projects/account-switcher.png";
export interface Profile {
  name: string;
  heroText: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string;
  about: string;
  about2: string;
  birthDate: string;
  experienceStartDate: string;
  education: string;
  freelanceAvailable: boolean;
  location: string;
  images: {
    profile: ImageMetadata;
    cover: string;
    logoIcon: string;
  };
}

export interface Contact {
  address: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface Service {
  name: string;
  icon: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  coursework: string;
  certificate?: string | null;
}

export interface ProgrammingSkill {
  name: string;
  level: string;
}

export interface RatedSkill {
  name: string;
  level: string;
}

export interface Skills {
  programming: ProgrammingSkill[];
  hardSkills: RatedSkill[];
  softSkills: string[];
  languages: RatedSkill[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  image: ImageMetadata;
  description: string;
  /** Short callouts for featured/large cards — distilled from description */
  highlights?: string[];
  features: string[];
  technologies: string[];
  url: string | null;
  period?: string;
  featured?: boolean;
}

/** Dummy testimonials — replace with real LinkedIn recommendations when available */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  relationship: string;
}

export interface PortfolioData {
  profile: Profile;
  contact: Contact;
  social: SocialLink[];
  services: Service[];
  interests: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  skills: Skills;
  testimonials: Testimonial[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "I'm Ogi Setiawan",
    // heroText: "Turning complex business requirements into scalable digital solutions.",
    heroText: "Building Enterprise Web Applications, Business Automation & AI-powered solutions",
    title: "Full Stack Software Engineer",
    roles: [
      "Full Stack Software Engineer",
      "Project Management",
      "AI-integrated development",
      "UI/UX & Frontend Developer",
    ],
    tagline:"I bridge legacy infrastructure with modern web technologies & transform complex business requirements into scalable web solutions",
    bio: "Experienced in project management, system architecture, and software development, with a proven ability to transform complex technical challenges into clear, actionable strategies. Proficient in Javascript, Node.js, Laravel/PHP, and other key technologies, I bring specialized expertise to every project. Passionate about staying ahead of industry trends and continuously expanding my skill set to remain at the forefront of IT innovation. I thrive in cross-functional teams, delivering impactful solutions that align technology with business objectives. Let's connect and explore how we can collaborate to drive technological excellence and create meaningful change!",
    about: "I'm a Full stack Software Engineer with 12+ years of experience building enterprise web applications and AI-powered automation solutions.",
    about2: "I build enterprise web applications, business automation systems, and AI-powered solutions that help organizations simplify complex workflows and improve operational efficiency. I specialize in designing and developing robust enterprise applications using React, NestJS, TypeScript, SQL Server, Laravel, and modern web technologies.",
    birthDate: "1995-10-16",
    experienceStartDate: "2014-07-01",
    education: "Bachelor's Degree",
    freelanceAvailable: true,
    location: "South Tangerang, Banten, Indonesia",
    images: {
      profile: profileImg,
      cover: "assets/images/ogi-14-2000x1798.jpeg",
      logoIcon: "assets/images/logo-icon.png",
    },
  },
  contact: {
    address: "South Tangerang, Banten, Indonesia",
    email: "ogisetiawan21@gmail.com",
    phone: "+62 899 809 1065",
    whatsapp: "628998091065",
    status: "Available",
  },
  social: [
    {
      platform: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/ogi-setiawan-software-engineer/",
    },
    {
      platform: "GitHub",
      icon: "github",
      url: "https://github.com/ogisetiawan",
    },
    {
      platform: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/ogisetiawann",
    },
    {
      platform: "Stack Overflow",
      icon: "stack-overflow",
      url: "https://stackoverflow.com/users/8886506/ogi-setiawan",
    },
    {
      platform: "DEV",
      icon: "dev",
      url: "https://dev.to/ogisetiawan",
    },
  ],
  services: [
    {
      name: "Bridging legacy infrastructure with modern technologies",
      icon: "code",
      description:
        "Connect and modernize legacy systems with contemporary web stacks.",
    },
    {
      name: "Enterprise integrations (AI powered Solutions, Bitrix24, SAP Integration, REST APIs)",
      icon: "world",
      description:
        "Integrate AI powered solutions, Bitrix24, SAP Integration  , REST APIs, and other enterprise systems.",
    },
    {
      name: "Fullstack modern development (React, Node.js, PHP, TypeScript, Python)",
      icon: "desktop",
      description:
        "End-to-end development across React, Node.js, PHP, and TypeScript.",
    },
    {
      name: "Project Management and Delivery",
      icon: "users",
      description:
        "Lead delivery with stakeholders across engineering, product, and business teams. Project Management and Delivery.",
    },
  ],
  interests: ["Programming", "Robotics", "Games", "Design"],
  experience: [
    {
      role: "Regional Web Developer",
      company: "Behn Meyer Group",
      startDate: "April 2023",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Built and maintained web applications and AI-powered automation solutions for regional markets across multiple business units [Metric: serving regional markets with a shared platform instead of fragmented, ad-hoc solutions]",
        "Translated stakeholder business requirements into technical solutions and delivered them end-to-end (frontend + backend) [Metric: owning the full development cycle in-house]",
        "Collaborated cross-functionally with business analysts, designers, and QA testers [Metric: on-time delivery and alignment between technical implementation and business goals]",
        "Integrated multiple external data sources and APIs into web applications [Metric: expanding functionality beyond the base system]",
        // "Established internal unit testing before releases, reducing the risk of post-deployment bugs reaching production",
        // "Prepared servers and managed the deployment process, ensuring reliable application rollout",
      ],
    },
    {
      role: "Software Engineer Specialist",
      company: "Maha",
      startDate: "October 2022",
      endDate: "April 2023",
      current: false,
      responsibilities: [
        "Designed and developed software solutions aligned with user needs and coding standards [Metric: reliable applications that met business requirements]",
        "Executed comprehensive testing protocols (unit, integration, system) [Metric: identifying and resolving bugs early and improving overall software reliability]",
        "Authored complete technical documentation and user guides [Metric: accelerating onboarding for new team members and long-term maintainability]",
        "Collaborated cross-functionally with business analysts, designers, and QA testers [Metric: on-time project delivery and technical–business alignment]",
      ],
    },
    {
      role: "Web Development Specialist",
      company: "Maha Chemicals (Asia) Pte Ltd",
      startDate: "March 2020",
      endDate: "October 2022",
      current: false,
      responsibilities: [
        "Developed and maintained Bitrix24 CRM platform, customizing interfaces and workflows [Metric: matching business processes and improving user adoption]",
        "Engineered RESTful API integration between Bitrix24 and SAP Business One (SAP B1) [Metric: automating data sync and eliminating manual data entry]",
        "Integrated Bitrix24 with multiple internal systems [Metric: a unified ecosystem with less process fragmentation]",
        "Delivered end-to-end CRM solutions [Metric: supporting sales, customer service, and operations in daily workflows]",
      ],
    },
    {
      role: "Software Developer",
      company: "StarHits",
      startDate: "April 2022",
      endDate: "June 2022",
      current: false,
      responsibilities: [
        "Architected and built custom CMS from scratch with multi-language support [Metric: managing dynamic content across regions and expanding market reach]",
        "Analyzed client challenges and designed tailored software solutions [Metric: systems that met specific business requirements and improved efficiency]",
        "Integrated diverse data sources and third-party systems [Metric: seamless data flow and less manual data handling]",
        "Provided accurate cost and timeline estimates [Metric: projects delivered on schedule with strong client satisfaction]",
        // "Delivered post-implementation support and maintenance, ensuring long-term system stability and addressing evolving client needs",
      ],
    },
    {
      role: "Software Developer",
      company: "StarHits",
      startDate: "August 2021",
      endDate: "November 2021",
      current: false,
      responsibilities: [
        "Analyzed client challenges and designed software solutions with supporting documentation [Metric: maintainable systems ready for future updates]",
        "Built a custom CMS from scratch [Metric: a tailored content platform instead of a generic off-the-shelf tool]",
        "Performed data integration work connecting the CMS with required external data sources [Metric: connected content workflows]",
        "Provided accurate cost and timeline estimates [Metric: projects delivered on schedule with strong client satisfaction]",
      ],
    },
    {
      role: "Web Developer",
      company: "PT Kaldu Sari Nabati Indonesia",
      startDate: "February 2019",
      endDate: "March 2020",
      current: false,
      responsibilities: [
        "Developed internal web applications from scratch using CodeIgniter 3 (frontend + backend) [Metric: supporting critical business operations]",
        "Designed intuitive user interfaces [Metric: better UX and higher adoption among operational staff]",
        "Integrated multiple data sources and APIs [Metric: expanded functionality and data-driven decision making]",
        // "Optimized application performance through code refactoring and database query improvements, reducing page load times and improving system responsiveness",
        "Maintained application security and efficiency through regular updates and bug fixes [Metric: stable operations for end users]",
        // "Collaborated with development team to deliver features aligned with business requirements",
      ],
    },
    {
      role: "Web Programmer",
      company: "PT Kaldu Sari Nabati Indonesia",
      startDate: "November 2018",
      endDate: "February 2019",
      current: false,
      responsibilities: [
        "Built application features using CodeIgniter 3, HTML, CSS, jQuery, and JavaScript [Metric: working functionality within the framework]",
        "Integrated databases into web applications [Metric: storage and retrieval of business data]",
        "Optimized application performance through code improvements [Metric: smoother runtime for users]",
        "Performed regular maintenance and collaborated with the development team [Metric: consistent delivery]",
      ],
    },
    {
      role: "Web Programmer",
      company: "Incore System Solution",
      startDate: "November 2017",
      endDate: "February 2018",
      current: false,
      responsibilities: [
        "Developed web applications using the Yii2 framework [Metric: functioning Yii2-based applications]",
        "Updated content and product material on the web platform [Metric: current product information for users]",
        "Supported the IT training team in conducting sessions [Metric: successful training delivery]",
        "Provided accurate cost and timeline estimates [Metric: projects delivered on schedule with strong client satisfaction]",
      ],
    },
    {
      role: "IT Trainer",
      company: "Incore System Solution",
      startDate: "September 2016",
      endDate: "November 2017",
      current: false,
      responsibilities: [
        "Delivered training and development sessions with prepared materials [Metric: participants equipped with the skills covered]",
        "Assessed training needs and monitored participant progress [Metric: delivery tailored to skill gaps]",
        "Presented applications to end users [Metric: supporting adoption of the systems introduced]",
        "Provided accurate cost and timeline estimates [Metric: projects delivered on schedule with strong client satisfaction]",
      ],
    },
    {
      role: "Head of Competition",
      company: "Racer Robotic",
      startDate: "June 2015",
      endDate: "July 2016",
      current: false,
      responsibilities: [
        "Led and managed robotics competition team, formulating strategies and coordinating efforts [Metric: stronger competition performance]",
        "Programmed robotics systems using C language (PICAXE) [Metric: functional robots for competition and educational demos]",
        "Taught robotics and science to elementary, middle, and high school students [Metric: custom projects and syllabi that foster STEM skills]",
        "Developed robotics projects for teaching and demo purposes [Metric: richer learning experiences in technology and engineering]",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree",
      field: "Informatics Engineering",
      institution: "Pamulang University",
      startDate: "2013",
      endDate: "2017",
      description: [
        "Earned Bachelor's Degree in Informatics Engineering with focus on Software Architecture and Programming",
        "Achieved GPA 3.33, demonstrating strong academic performance in technical coursework",
        "Developed foundational skills in software development, algorithms, and system design that supported professional career in web development",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS AI Academy",
      issuer: "AWS AI Academy",
      date: "July 2026",
      coursework: "Python, Machine Learning, Deep Learning, Spec Driven - Kiro",
      certificate: "https://drive.google.com/file/d/1_0cZ6D7p5T1LKFb3bVqblcDwl__Z7mw0/view",
    },
    {
      name: "Google Project Management",
      issuer: "Google",
      date: "July 2024",
      coursework: "Project Planning, Project Scope, Agile & Scrum Master, Risk Management ",
      certificate: "https://www.coursera.org/account/accomplishments/specialization/R4EE68GSQ29N",
    },
    {
      name: "Back-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Dec 2023",
      coursework: "CI/CD, Automation Test, Microservices, Node JS, AWS",
      certificate: "https://www.dicoding.com/certificates/2VX3O6YJVZYQ",
    },
    // {
    //   name: "Belajar Fundamental Aplikasi Back-End",
    //   issuer: "Dicoding Indonesia",
    //   date: "Jul 2023",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/0LZ09MRNNZ65",
    // },
    {
      name: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Mar 2023",
      coursework: "Web Applications (PWAs), React.js, Node.js, Tailwind",
      certificate: "https://www.dicoding.com/certificates/L4PQ6NRE4PO1",
    },
    // {
    //   name: "Belajar Fundamental Front-End Web Development",
    //   issuer: "Dicoding Indonesia",
    //   date: "Dec 2022",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/L4PQ650M2PO1",
    // },
    // {
    //   name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    //   issuer: "Dicoding Indonesia",
    //   date: "Nov 2022",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/1RXYO6DV3PVM",
    // },
    // {
    //   name: "Belajar Membuat Front-End Web untuk Pemula",
    //   issuer: "Dicoding Indonesia",
    //   date: "Sep 2022",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/1RXYMG04KXVM",
    // },
    // {
    //   name: "Belajar Membuat Aplikasi Web dengan React",
    //   issuer: "Dicoding Indonesia",
    //   date: "Aug 2022",
    //   coursework: "React.js, Express.js, Webpack",
    //   certificate: "https://www.dicoding.com/certificates/EYX42NJ1RZDL",
    // },
    // {
    //   name: "Belajar Dasar Pemrograman JavaScript",
    //   issuer: "Dicoding Indonesia",
    //   date: "Aug 2022",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/2VX31L65NZYQ",
    // },
    // {
    //   name: "Belajar Dasar Pemrograman Web",
    //   issuer: "Dicoding Indonesia",
    //   date: "Jul 2022",
    //   coursework: "",
    //   certificate: "https://www.dicoding.com/certificates/4EXG53YWEXRL",
    // },
    // {
    //   name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    //   issuer: "Dicoding Indonesia",
    //   date: "Jun 2021",
    //   coursework: "AWS Cloud, Cloud Computing",
    //   certificate: "https://www.dicoding.com/certificates/98XW6DNMWXM3",
    // },
    // {
    //   name: "Vue JS",
    //   issuer: "PT. Babastudio",
    //   date: "Dec 2020",
    //   coursework: "Vue.js, Bootstrap, Javascript",
    //   certificate: "https://api-kartuprakerja.babastudio.com/certificates/287903_249833_103_print.pdf",
    // },
  ],
  skills: {
    programming: [
      { name: "JavaScript / ES6 / jQuery", level: "Expert" },
      { name: "PHP Laravel Framework", level: "Expert" },
      { name: "PHP CodeIgniter Framework", level: "Expert" },
      { name: "Node.js / Express.js", level: "Expert" },
      { name: "React.js", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Docker", level: "Beginner" },
      { name: "Astro", level: "Proficient" },
      { name: "Github", level: "Proficient" },
      { name: "NestJS", level: "Proficient" },
      { name: "NextJS", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Proficient" },
      { name: "RESTful API", level: "Proficient" },
      { name: "Python", level: "Beginner" },
      { name: "AWS", level: "Beginner" },
      { name: "Linux", level: "Beginner" },
      { name: "GitLab", level: "Proficient" },
      { name: "Redis", level: "Beginner" },
      { name: "SQL Server", level: "Proficient" },
      { name: "Notion", level: "Proficient" },
    ],
    hardSkills: [
      { name: "API Development", level: "Proficient" },
      { name: "SEO", level: "Proficient" },
      { name: "Amazon Web Services (AWS)", level: "Intermediate" },
      { name: "Progressive Web Applications (PWAs)", level: "Proficient" },
      { name: "GIT / CI&CD", level: "Proficient" },
    ],
    softSkills: [
      "Proactive",
      "Visual Thinking",
      "Problem Solving",
      "Organization Skills",
      "Creativity",
      "Communication",
      "Leadership",
      "Enthusiasm",
      "Business Research",
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Professional" },
    ],
  },
  // TODO: replace with real recommendations (e.g. from LinkedIn)
  testimonials: [
    {
      id: "dummy-1",
      name: "Yohan Paulus",
      role: "IT Manager",
      company: "PT Kaldu Sari Nabati Indonesia",
      relationship: "Managed Ogi directly",
      quote:
        "Ogi consistently delivers solid full-stack solutions—from Laravel backends to clean frontends. He translates complex business needs into clear technical plans and ships on time. His work on our regional web apps, including SAP integrations, made a real impact on day-to-day operations.",
    },
    {
      id: "dummy-2",
      name: "Hendik Ariyanto",
      role: "Business Analyst",
      company: "Maha Chemicals",
      relationship: "Worked with Ogi on the same team",
      quote:
        "What stands out is Ogi’s ability to bridge system analysis and hands-on development. Whether customizing Bitrix24, building REST APIs, or preparing UAT, he stays proactive, communicates clearly, and always thinks about how technology supports the business.",
    },
    {
      id: "dummy-3",
      name: "Sendy Andika",
      role: "Freelance Client",
      company: "Independent Project",
      relationship: "Hired Ogi as a freelancer",
      quote:
        "Working with Ogi was smooth from kickoff to launch. He owns frontend and backend, cares about UI/UX, and documents his work well. If you need a reliable web developer for PHP/Laravel or modern JavaScript stacks, I highly recommend him.",
    },
  ],
  projects: [
    {
      id: "restaurant-app",
      title: "Restaurant App",
      shortTitle: "Restaurant App",
      category: "Web Application",
      image: projectPlaceholderImg,
      description: "A restaurant web application.",
      features: [],
      technologies: [
        "React JS",
        "Jest",
        "EcmaScript",
        "NodeJS",
        "HTML5 & CSS3",
        "CI/CD",
        "GIT",
      ],
      url: "https://restoerant.netlify.app/",
      period: "May 2023 – Aug 2023",
    },
    {
      id: "movie-catalogue",
      title: "Movie Catalogue",
      shortTitle: "Movie Catalogue",
      category: "Web Application",
      image: projectPlaceholderImg,
      description:
        "A movie catalog web app with push notifications, using CI/CD techniques for the deployment process to the host.",
      features: ["Push notifications", "CI/CD deployment"],
      technologies: [
        "EcmaScript",
        "NodeJS",
        "HTML5 & CSS3",
        "Socket.IO",
        "CI/CD",
        "GIT",
      ],
      url: null,
      period: "Sep 2022 – Jan 2023",
    },
    {
      id: "customer-portal-behn-meyer",
      title: "Customer Portal at Behn Meyer",
      shortTitle: "Customer Portal",
      category: "Web Application",
      image: webCustomerPortalImg,
      description:
        "Behn Meyer Customer Portal is a B2B web application designed to digitalize and streamline customer-facing business processes. The platform provides customers with centralized access to their account and transaction information, including credit limits, quotations, order tracking, and support requests, while enabling more direct communication with Behn Meyer’s sales teams.The portal improves customer self-service capabilities, transaction visibility, and coordination between customers and internal commercial teams by bringing key business interactions into a single digital platform",
      features: [
        "Real-time report",
        "Integrated SAP BW",
        "Multi-level users and roles and more",
      ],
      technologies: ["Node.js", "SQL", "React JS", "TypeScript", "RESTful API", "Microservices"],
      url: "null",
    },
    {
      id: "dashboard-management-behn-meyer",
      title: "Dashboard Management at Behn Meyer",
      shortTitle: "Dashboard Management",
      category: "Web Application",
      image: webManagementDashboardImg,
      description:
        "Developed and maintained a web-based Management Dashboard for Behn Meyer, designed as a centralized internal platform for authenticated users to access and manage business-related information. The application implements secure user authentication using email and password credentials, along with an account recovery workflow that allows users to reset forgotten passwords through email verification.`The project focused on building a structured and user-friendly management interface, implementing authentication and access control mechanisms, integrating front-end and back-end processes, and providing a reliable foundation for internal business management functions`The system was developed to support efficient access to organizational information through a centralized web application while maintaining controlled access for authorized users",
      features: [
        "Real-time report",
        "Integrated SAP BW",
        "Mailer",
        "Multi-level users and roles and more",
      ],
      technologies: [
        "Laravel",
        "Bootstrap",
        "Javascript",
        "RESTful API",
        "GIT",
        "SQL Server",
      ],
      url: null,
    },
    {
      id: "salesforecast-maha",
      title: "Salesforecast at Maha",
      shortTitle: "Salesforecast",
      category: "Web Application",
      image: projectPlaceholderImg,
      description:
        "A website that can help salespeople to predict their sales revenue and turnover in a certain period to be able to make better decisions.",
      features: [
        "Predict algorithm",
        "Approval system",
        "Mailer notification",
        "Integrated SAP-B1",
      ],
      technologies: [
        "PHP 7",
        "Laravel",
        "HTML5 & CSS3",
        "Datatables Details Rows",
        "jQuery",
        "JavaScript",
      ],
      url: null,
      period: "Mar 2022 – Nov 2022",
    },
    {
      id: "web-monitoring-sales",
      title: "Web Monitoring Sales ( Area and Depo )",
      shortTitle: "Web Monitoring Sales",
      category: "Web Application",
      image: webMonitoringSalesImg,
      description:
        "Website Monitoring Sales Transactions for Promo, LBP, Kasbank and Inventory modules each Group Region, Region and Area. Connected with third-party applications Syclla and SAP Business World with real-time synchronization.",
      features: [
        "Exporting Document XLS, Word and PDF",
        "Realtime monitoring",
        "Dynamic Dropdown-list",
        "Server-side Rendering",
        "Responsive and Clean Design",
        "Consolidatation data SAP",
      ],
      technologies: [
        "Codeigniter 3 HMVC",
        "Bootstrap 4",
        "Jquery",
        "AJAX",
        "Javascript",
        "Datatables",
        "REST API",
        "PHP",
      ],
      url: "https://pinusmerahabadi.co.id/portal/monitoring/",
      period: "Mar 2019 – Jun 2019",
    },
    {
      id: "e-invoice-soa",
      title: "E-Invoice and SOA at Maha",
      shortTitle: "E-Invoice & SOA",
      category: "Web Application",
      image: webInvoiceSoaImg,
      description:
        "A website that can send invoices directly and see SOA of customers via email from the Bitrix24 Platform and view log reports of every email sent to customers.",
      features: [
        "Multiple sent-out Invoices",
        "Preview Invoice Details",
        "Mailer attachment",
        "Integrated SAP-B1",
      ],
      technologies: [
        "PHP 7",
        "Javascript",
        "jQuery",
        "PHPMailer",
        "Dompdf",
        "Bitrix24",
      ],
      url: null,
      period: "Sep 2021 – Mar 2022",
    },
    {
      id: "hitsrecords",
      title: "HITS Records and SwaraBintang at StarHits",
      shortTitle: "HITS Records",
      category: "Web Application",
      image: webHitsrecordsImg,
      description:
        "Developed a Website Content Management System for Hitsrecords (POP Genre) and SwaraBintang (Dangdut Genre), members of the MNC Groups.",
      highlights: [
        "CMS for two MNC music labels — Hitsrecords (POP) and SwaraBintang (Dangdut)",
        "Clean, responsive UI with server-side rendering",
        "Multi-level login and Facebook Comments integration",
      ],
      features: [
        "Clean and Responsive Design",
        "Server-side Rendering",
        "Facebook Comments",
        "Multi-Level Login",
      ],
      technologies: [
        "Laravel 8",
        "Tailwind CSS",
        "JavaScript",
        "AJAX",
        "jQuery",
        "PJAX",
        "OWL Carousel",
      ],
      url: "https://hitsrecords.co.id/",
      period: "Oct 2021 – Dec 2021",
      featured: true,
    },
    {
      id: "web-purchase-request",
      title: "Purchase Request at Maha",
      shortTitle: "Purchase Request",
      category: "Web Application",
      image: webPrImg,
      description:
        "A website that can help several divisions that can carry out approval of the purchasing process of each supplier.",
      features: [
        "Notify Email & Bitrix24 Platform",
        "Multiple Adding Product/Item",
        "Sync data with SAP-B1",
      ],
      technologies: [
        "PHP 7",
        "Javascript",
        "jQuery",
        "PHPMailer",
        "Dompdf",
        "Bitrix24",
      ],
      url: null,
      period: "May 2021 – Aug 2021",
    },
    {
      id: "web-kor",
      title: "KOR at Maha",
      shortTitle: "KOR",
      category: "Web Application",
      image: webKorImg,
      description:
        "Built a website for individual performance calculation, especially for Sales Persons in each country.",
      features: [
        "Inline Editing",
        "Clean & Responsive Design UI",
        "Interactive UX",
        "Integrated SAP-B1",
        "Multi-Login",
      ],
      technologies: [
        "Laravel 6",
        "jQuery UI",
        "JavaScript",
        "HTML5 & CSS3",
        "jQuery",
        "Materialize CSS Framework",
        "Rest-full API",
      ],
      url: null,
      period: "Oct 2020 – Dec 2020",
    },
    {
      id: "web-stock-position",
      title: "Stock Position Product at Maha",
      shortTitle: "Stock Position",
      category: "Web Application",
      image: webStockPositionImg,
      description:
        "A website providing information on stock levels, aging stock, free stock, and incoming stock for each warehouse Maha.",
      features: [
        "Exporting data to XLS, Word, PDF",
        "RESTFull API",
        "Inline Editing Remark",
        "Server-side Rendering",
      ],
      technologies: [
        "PHP 7",
        "AJAX",
        "jQuery",
        "JavaScript",
        "SAP - B1",
        "Bitrix24",
      ],
      url: "https://bitrix.mahachem.com/maha/logistics_menu/sub/stock_position.php",
      period: "Apr 2020 – May 2020",
    },
    {
      id: "web-sales-dashboard",
      title: "Sales Dashboard Apps at Maha",
      shortTitle: "Sales Dashboard",
      category: "Web Application",
      image: webSalesDashboardImg,
      description:
        "Developed a Sales Dashboard website for monitoring product sales and budgets for each salesperson.",
      features: [
        "Real-time monitoring Dashboard",
        "REST Client API",
        "Dynamic Filtering",
      ],
      technologies: [
        "HTML5 & CSS3",
        "Bootstrap 4",
        "PHP 7",
        "jQuery",
        "AJAX",
        "JavaScript",
        "MariaDB",
      ],
      url: null,
      period: "Mar 2020",
    },
    {
      id: "web-rnd",
      title: "Web RnD at PT Kaldu Sari Nabati",
      shortTitle: "Web RnD",
      category: "Web Application",
      image: webRndImg,
      description:
        "A website for managing and developing new products, covering idea formation, detailed formulas, and final packaging.",
      features: [
        "Dynamic Input",
        "Email Notify",
        "Approval System",
        "Integration",
      ],
      technologies: [
        "Materialize",
        "CodeIgniter",
        "PHP",
        "REST API",
        "jQuery",
        "AJAX",
        "JavaScript",
        "PHP Mailer",
        "SAP",
      ],
      url: "https://rndwap.nabatisnack.co.id/",
      period: "Feb 2020 – Mar 2020",
    },
    {
      id: "web-faktur-pajak",
      title: "Web Faktur Pajak at PT Kaldu Sari Nabati",
      shortTitle: "Web Faktur Pajak",
      category: "Web Application",
      image: webFakturPajakImg,
      description:
        "Developed an approval and information website for exchanging tax data between areas/depots and the Head-Office for each product.",
      features: [
        "Exporting Document XLS & PDF",
        "Email Notification",
        "Uploading file Document, Image, etc.",
      ],
      technologies: [
        "CodeIgniter 3 HMVC",
        "PHP",
        "JavaScript",
        "AJAX",
        "Bootstrap",
      ],
      url: "https://pinusmerahabadi.co.id/pmafaktur/",
      period: "Oct 2019 – Nov 2019",
    },
    {
      id: "dashboard-monitoring-faktur",
      title: "Dashboard Faktur Batal at PT Kaldu Sari Nabati",
      shortTitle: "Dashboard Faktur Batal",
      category: "Web Application",
      image: webMonitoringReturImg,
      description:
        "Integrated website with SAP-Business Warehouse, providing current information on the number of invoices sent from salesmen to stores throughout Indonesia.",
      features: [
        "Real-time Dashboard",
        "Synchronization SAP-BW",
        "Downloading Data to PDF file",
        "Responsive and Clean Design UI",
      ],
      technologies: [
        "CodeIgniter 3",
        "Bootstrap 4",
        "OWL Carousel",
        "HTML5 & CSS3",
        "JavaScript",
        "AJAX",
        "jQuery",
      ],
      url: "https://pinusmerahabadi.co.id/monitoringfaktur/",
      period: "Dec 2019 – Jan 2020",
    },
    {
      id: "web-kpi",
      title: "Web KPI at PT Kaldu Sari Nabati",
      shortTitle: "Web KPI",
      category: "Web Application",
      image: webKpiImg,
      description:
        "Developed a KPI website to calculate employee performance across various departments, such as Sales, IT, Finance & Accounting, Human Capital, etc.",
      features: [
        "Uploading data Master",
        "System Approval",
        "Email Notification",
        "Inline Editing",
      ],
      technologies: [
        "CodeIgniter 3",
        "Bootstrap 4",
        "HTML5 & CSS3",
        "JavaScript",
        "AJAX",
        "jQuery",
      ],
      url: "https://pinusmerahabadi.co.id/pma_dev/kpi/",
      period: "Nov 2018 – Jan 2019",
    },
    {
      id: "web-elearning",
      title: "Web Elearning",
      shortTitle: "Web Elearning",
      category: "Web Application",
      image: elearningImg,
      description:
        "E-learning Website is learning media for each employee that is accessed online such as information about the company, organizational structure, question and answer forums, quizzes and others.",
      features: [
        "Quiz with time session",
        "Forum question-answer",
        "Upload question for user or departement",
      ],
      technologies: ["PHP 5 ( OOP )", "Bootstrap 3", "Javascript"],
      url: "https://pinusmerahabadi.co.id/portal/e-learningpma/index.php?class=index",
      period: "Feb 2019 – Mar 2019",
    },
    {
      id: "e-redpine",
      title: "E-Redpine",
      shortTitle: "E-Redpine",
      category: "Web Application",
      image: redpineImg,
      description:
        "A website that can provide reports, promo transactions, setting the number of promos for each area.",
      features: ["Approval System", "Upload data"],
      technologies: ["PHP 5 ( OOP )", "Bootstrap 3", "Javascript"],
      url: "https://pinusmerahabadi.co.id/portal/redpinereport",
      period: "May 2019 – Aug 2019",
    },
    {
      id: "web-proman",
      title: "Web Proman",
      shortTitle: "Web Proman",
      category: "Web Application",
      image: projectPlaceholderImg,
      description:
        "A project management tools website that can manage projects, tasks, subtasks, and project deadlines.",
      features: ["Project management", "Task & subtask", "Deadline tracking"],
      technologies: [
        "HTML5 & CSS3",
        "Bootstrap 3",
        "AJAX",
        "CodeIgniter 3",
        "JavaScript",
        "jQuery",
        "PHP",
      ],
      url: null,
      period: "Jul 2017 – Feb 2018",
    },
    {
      id: "web-portofolio",
      title: "Web Portofolio",
      shortTitle: "Web Portofolio",
      category: "Website",
      image: projectPlaceholderImg,
      description:
        "Personal portfolio website with information about experience, portfolio, skills, contact, and social media.",
      features: [
        "Dynamic Menu Rendering",
        "SEO Optimize",
        "Clean and Responsive Design",
      ],
      technologies: ["HTML5 & CSS3", "JavaScript", "jQuery"],
      url: "https://ogisetiawan.github.io/",
      period: "Oct 2015",
    },
    {
      id: "starhits",
      title: "Starhits.id",
      shortTitle: "Starhits.id",
      category: "Web Application",
      image: webStarhitsImg,
      description:
        "Centralized digital ecosystem for StarHits business services, creator networks, production capabilities, campaigns, and media content.",
      highlights: [
        "MCN services, influencer management, and creative digital campaigns",
        "News publishing, authentication, and business project submission",
        "Responsive, structured platform for creators, brands, and partners",
      ],
      features: [
        "Clean and Responsive Design",
        "Server side rendering",
        "Facebook Comments",
        "Multi Level Login",
      ],
      technologies: [
        "Laravel 5",
        "Bootstrap",
        "Javascript",
        "AJAX",
        "Mysql",
        "OWL Carousel",
      ],
      url: "https://starhits.id",
      period: "Apr 2022 – Jul 2022",
      featured: true,
    },
    {
      id: "widget-ticketing",
      title: "Widget Ticketing Form",
      shortTitle: "Widget Ticketing",
      category: "Web Application",
      image: webWidgetTicketingImg,
      description: "Developed an integrated Ticketing Support Widget designed to provide a centralized support channel that can be embedded into multiple internal and customer-facing applications. The widget enables users to create and track support tickets directly from the application they are using, without requiring access to a separate support system. Users can submit different types of requests, including bug reports, technical assistance, special requests, and customer support inquiries, along with detailed descriptions and supporting file attachments. Built using React for the interactive frontend and Laravel for backend services and ticket processing, the widget is designed as a reusable and flexible component that can be integrated across different web applications. The ticketing workflow is integrated with email notifications to ensure relevant teams are immediately informed when new requests are submitted or updated. It is also connected with Notion to centralize ticket documentation, issue tracking, status monitoring, and collaboration between technical and business teams.",
      features: [
        "Notion Integration ",
        "Email Notifications",
        "Ticket Management",
        "File Upload",
      ],
      technologies: [
        "Node.js",
        "React JS",
        "TypeScript",
        "RESTful API",
        "Tailwind CSS",
        "GIT",
      ],
      url: null,
      period: "Aug 2025 – Nov 2025",
    },
    {
      id: "account-switcher",
      title: "Account Switcher",
      shortTitle: "Account Switcher",
      category: "Extension",
      image: webAccountSwitcherImg,
      description:
        "A privacy-focused browser extension that lets users save and switch between multiple authenticated website sessions without logging out and back in.",
      highlights: [
        "Captures cookies, localStorage, and sessionStorage for one-click account switching",
        "Built for UAT/QA, multi-account SaaS, client demos, and support workflows",
        "Privacy-first architecture — session data stays local, no backend or cloud sync",
        "Chrome & Firefox support with Manifest V3, TypeScript, and esbuild",
      ],
      features: [
        "Multiple Accounts Sessions Management",
        "Import/Export Sessions ",
        "Light, dark & system themes",
        "Keyboard Shortcuts",
        "Quick Switch",
      ],
      technologies: [
        "Node.js",
        "React JS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Manifest V3",
        "esbuild",
        "Local Session Management",
        "Automatic Session Synchronization",
        "Privacy-First Architecture",
        "GIT",
      ],
      url: "https://ogisetiawan.github.io/account-switcher/",
      period: "Aug 2025 – Nov 2025",
      featured: true,
    },
  ],
};

/** Manual featured order — first ID = large hero card, rest = side cards. */
export const featuredProjectOrder = [
  "account-switcher",
  "hitsrecords",
  "starhits",
] as const;

export default portfolioData;
