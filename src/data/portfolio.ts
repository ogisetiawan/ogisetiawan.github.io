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

export interface Profile {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string;
  birthDate: string;
  experienceStartDate: string;
  education: string;
  freelanceAvailable: boolean;
  location: string;
  images: {
    profile: string;
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
  description: string;
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
  features: string[];
  technologies: string[];
  url: string | null;
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
    name: "Ogi Setiawan",
    title: "Web Developer",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Engineer",
      "Web Developer",
    ],
    tagline:
      "Frontend | Backend | Engineer | Developer with a Flair for UI/UX Design and System Analysis",
    bio: "Experienced in project management, system architecture, and software development, with a proven ability to transform complex technical challenges into clear, actionable strategies. Proficient in Javascript, Node.js, Laravel/PHP, and other key technologies, I bring specialized expertise to every project. Passionate about staying ahead of industry trends and continuously expanding my skill set to remain at the forefront of IT innovation. I thrive in cross-functional teams, delivering impactful solutions that align technology with business objectives.",
    birthDate: "1995-10-16",
    experienceStartDate: "2014-07-01",
    education: "Bachelor's Degree",
    freelanceAvailable: true,
    location: "South Tangerang, Banten, Indonesia",
    images: {
      profile: "assets/images/ogi-profile.jpg",
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
      url: "https://www.linkedin.com/in/ogisetiawan",
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
      name: "Web Development",
      icon: "code",
      description:
        "Build a web-sites modern and mobile-friendly such as single static page and complex web page that will reach your marketing.",
    },
    {
      name: "Search Engine Optimize (SEO)",
      icon: "world",
      description:
        "Process of improving the quality and quantity of website traffic to a website from search engines.",
    },
    {
      name: "Web Design",
      icon: "desktop",
      description:
        "Design of user interfaces for focus on maximizing and user experience for Digital Products.",
    },
    {
      name: "Graphic Design",
      icon: "paintbrush",
      description:
        "Create visual content to communicate messages for promote and sell products to develop a brand indentity.",
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
        "Develop and maintain robust and scalable web applications for the regional market",
        "Collaborate with stakeholders to understand business requirements and translate them into effective technical solutions",
        "Design and develop web applications from scratch, including frontend and backend elements",
        "Integrate diverse data sources and APIs into web applications to enhance functionality",
        "Preparation Internal Testing / UAT",
        "Prepare server and deployment",
      ],
    },
    {
      role: "Software Engineer Specialist",
      company: "Maha",
      startDate: "October 2022",
      endDate: "April 2023",
      current: false,
      responsibilities: [
        "Design, develop, and maintain software, taking into account user needs, system specifications, and coding standards",
        "Perform unit, integration, and system testing to ensure software quality and reliability. Troubleshoot bugs and fixing identified issues",
        "Prepare complete documentation for the developed code, including user guides and technical notes",
        "Work closely with development team members, including business analysts, designers, and software testers to achieve project goals",
        "Continuously improve technical skills and knowledge of current trends in software development through training and personal development",
      ],
    },
    {
      role: "Web Development Specialist",
      company: "Maha Chemicals (Asia) Pte Ltd",
      startDate: "March 2020",
      endDate: "October 2022",
      current: false,
      responsibilities: [
        "Develop and maintain Bitrix24 CRM",
        "Customize Bitrix24 pages",
        "Implement Restful API for Bitrix24 (SAP B1)",
        "Integrate Bitrix24 with other systems",
        "And more",
      ],
    },
    {
      role: "Software Developer",
      company: "StarHits",
      startDate: "April 2022",
      endDate: "June 2022",
      current: false,
      responsibilities: [
        "Analyze the challenges faced and provide appropriate technical advice",
        "Design effective software solutions that meet client needs",
        "Provides estimates of costs and time required for development",
        "Compile and develop software code according to the best specifications and standards",
        "Provides comprehensive documentation for the developed code, making maintenance and future use easier",
        "Provide post-implementation support and perform maintenance as per client requirements",
        "Create multi-language feature",
        "Integration data",
      ],
    },
    {
      role: "Software Developer",
      company: "StarHits",
      startDate: "August 2021",
      endDate: "November 2021",
      current: false,
      responsibilities: [
        "Analyze the challenges faced and provide appropriate technical advice",
        "Design effective software solutions that meet client needs",
        "Provides estimates of costs and time required for development",
        "Compile and develop software code according to the best specifications and standards",
        "Provides comprehensive documentation for the developed code, making maintenance and future use easier",
        "Provide post-implementation support and perform maintenance as per client requirements",
        "Build custom CMS from scratch",
        "Data integration",
      ],
    },
    {
      role: "Web Developer",
      company: "PT Kaldu Sari Nabati Indonesia",
      startDate: "February 2019",
      endDate: "March 2020",
      current: false,
      responsibilities: [
        "Design and develop web applications from scratch, including frontend and backend elements",
        "Design attractive and easy-to-use user interfaces to enhance the user experience",
        "Integrate various data sources and APIs into web applications to increase functionality",
        "Perform routine maintenance, bug fixes, and updates to keep the application efficient and secure",
      ],
    },
    {
      role: "Web Programmer",
      company: "PT Kaldu Sari Nabati Indonesia",
      startDate: "November 2018",
      endDate: "February 2019",
      current: false,
      responsibilities: [
        "Code with Codeigniter 3, CSS, HTML, Jquery and Javascript",
        "Integrate databases into web applications",
        "Optimize web application performance by improving code",
        "Perform regular maintenance, bug fixes, and updates",
        "Collaborate with team development",
      ],
    },
    {
      role: "Web Programmer",
      company: "Incore System Solution",
      startDate: "November 2017",
      endDate: "February 2018",
      current: false,
      responsibilities: [
        "Development Web with Yii2",
        "Update content and material product",
        "Support IT Team Trainer to conduct training sessions",
      ],
    },
    {
      role: "IT Trainer",
      company: "Incore System Solution",
      startDate: "September 2016",
      endDate: "November 2017",
      current: false,
      responsibilities: [
        "Responsibility is to deliver training and development sessions",
        "Developing training materials, assessing training needs, monitoring participant progress, and providing post-training support",
        "Present the application to users",
      ],
    },
    {
      role: "Head of Competition",
      company: "Racer Robotic",
      startDate: "June 2015",
      endDate: "July 2016",
      current: false,
      responsibilities: [
        "Managing the robotics team",
        "Ensuring optimal performance in competitions",
        "Formulating competition strategies",
        "Leading and coordinating the team",
      ],
    },
    {
      role: "Technical Trainer",
      company: "Racer Robotic",
      startDate: "July 2014",
      endDate: "June 2015",
      current: false,
      responsibilities: [
        "Programming Robotics with C Language (PICAXE)",
        "Teaches Robotics and Science to Elementary Middle and Senior High School",
        "Creating some Robotic Projects for teaching and demo syllabus learning",
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
      description:
        "Software Architecture. Excelled in Programming. GPA 3.4",
    },
  ],
  certifications: [
    {
      name: "Google Project Management",
      issuer: "Google",
      date: "July 2024",
      coursework: "Project Planning, Agile & Waterfall Methodologies",
      certificate: "https://www.coursera.org/account/accomplishments/specialization/R4EE68GSQ29N",
    },
    {
      name: "Architecting on Amazon Web Server",
      issuer: "Dicoding Indonesia",
      date: "July 2023",
      coursework: "Microservices, Serverless Computing",
      certificate: "https://www.dicoding.com/certificates/98XW6DNMWXM3",
    },
    {
      name: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Mar 2023",
      coursework: "Web Applications (PWAs), React.js, Node.js, Tailwind",
      certificate: "https://www.dicoding.com/certificates/L4PQ6NRE4PO1",
    },
    {
      name: "Back-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Dec 2023",
      coursework: "CI/CD, Automation Test, Security, Node JS, AWS",
      certificate: "https://www.dicoding.com/certificates/2VX3O6YJVZYQ",
    },
    {
      name: "Web Application React",
      issuer: "Dicoding Indonesia",
      date: "Aug 2022",
      coursework: "React.js, Express.js, Webpack",
      certificate: "https://www.dicoding.com/certificates/EYX42NJ1RZDL",
    },
    {
      name: "Vue JS",
      issuer: "Bobastudio",
      date: "Dec 2020",
      coursework: "Vue.js, Bootstrap, Javascript",
      certificate: "http://api-kartuprakerja.babastudio.com/certificates/287903_249833_103_print.pdf",
    },
  ],
  skills: {
    programming: [
      { name: "JavaScript / ES6 / jQuery", level: "Expert" },
      { name: "PHP Laravel Framework", level: "Expert" },
      { name: "PHP CodeIgniter Framework", level: "Proficient" },
      { name: "Node.js / Express.js", level: "Proficient" },
      { name: "React.js", level: "Proficient" },
      { name: "PostgreSQL / MySQL / MSSQL", level: "Proficient" },
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
      name: "Andi Pratama",
      role: "IT Project Manager",
      company: "Behn Meyer Group",
      relationship: "Managed Ogi directly",
      quote:
        "Ogi consistently delivers solid full-stack solutions—from Laravel backends to clean frontends. He translates complex business needs into clear technical plans and ships on time. His work on our regional web apps, including SAP integrations, made a real impact on day-to-day operations.",
    },
    {
      id: "dummy-2",
      name: "Siti Rahmawati",
      role: "Business Analyst",
      company: "Maha Chemicals",
      relationship: "Worked with Ogi on the same team",
      quote:
        "What stands out is Ogi’s ability to bridge system analysis and hands-on development. Whether customizing Bitrix24, building REST APIs, or preparing UAT, he stays proactive, communicates clearly, and always thinks about how technology supports the business.",
    },
    {
      id: "dummy-3",
      name: "Budi Santoso",
      role: "Freelance Client",
      company: "Independent Project",
      relationship: "Hired Ogi as a freelancer",
      quote:
        "Working with Ogi was smooth from kickoff to launch. He owns frontend and backend, cares about UI/UX, and documents his work well. If you need a reliable web developer for PHP/Laravel or modern JavaScript stacks, I highly recommend him.",
    },
  ],
  projects: [
    {
      id: "customer-portal-behn-meyer",
      title: "Customer Portal at Behn Meyer",
      shortTitle: "Customer Portal",
      category: "Web Application",
      image: projectPlaceholderImg,
      description:
        "An e-commerce website that can help customers make purchases on products in different countries.",
      features: [
        "Real-time report",
        "Integrated SAP BW",
        "Mailer",
        "Multi-level users and roles and more",
      ],
      technologies: ["Node.js", "SQL", "React JS", "Swagger"],
      url: null,
    },
    {
      id: "dashboard-management-behn-meyer",
      title: "Dashboard Management at Behn Meyer",
      shortTitle: "Dashboard Management",
      category: "Web Application",
      image: projectPlaceholderImg,
      description:
        "A website that can help management to view all complex reports and company performance at a certain time.",
      features: [
        "Real-time report",
        "Integrated SAP BW",
        "Mailer",
        "Multi-level users and roles and more",
      ],
      technologies: [
        "Laravel",
        "Bootstrap",
        "Javascript / jQuery",
        "Golang",
        "API service",
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
        "Multi-level roles",
        "Approval system",
        "Predict algorithm and more",
      ],
      technologies: ["Laravel", "Bootstrap", "Javascript / jQuery", "Bitrix24"],
      url: null,
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
    },
    {
      id: "hitsrecords",
      title: "HITS Records and SwaraBintang at StarHits",
      shortTitle: "HITS Records",
      category: "Web Application",
      image: webHitsrecordsImg,
      description:
        "Developed a Website Content Management System for Hitsrecords (POP Genre) and SwaraBintang (Dangdut Genre), members of the MNC Groups.",
      features: [
        "Clean and Responsive Design",
        "Server-side Rendering",
        "Facebook Comments",
        "Multi-Level Login",
      ],
      technologies: [
        "Laravel 8",
        "Bootstrap",
        "JavaScript",
        "AJAX",
        "jQuery",
        "PJAX",
        "OWL Carousel",
      ],
      url: "https://jalandong.id/hitsrecords/",
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
      url: null,
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
      url: "https://pinusmerahabadi.co.id/portal/",
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
      url: "https://pinusmerahabadi.co.id/portal/",
    },
    {
      id: "starhits",
      title: "Starhits.id",
      shortTitle: "Starhits.id",
      category: "Web Application",
      image: webStarhitsImg,
      description: "Web portal and content management system.",
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
    },
  ],
};

export default portfolioData;
