// Import authentic assets for site data
import solarDeployment from "@/assets/gallery/solar-deployment.png";
import rooftopTelecom from "@/assets/gallery/rooftop-telecom.png";
import civilExcavation from "@/assets/gallery/civil-excavation.png";
import infraLogistics from "@/assets/gallery/infrastructure-logistics.png";
import siteSurveyor from "@/assets/gallery/site-surveyor.png";
import towerClimber from "@/assets/gallery/tower-climber.png";
import turnkeyEngineer from "@/assets/gallery/turnkey-engineer.png";
import equipmentCabinet from "@/assets/gallery/equipment-cabinet.jpg";
import microwaveDish from "@/assets/gallery/microwave-dish.png";
import powerTransformer from "@/assets/gallery/power-transformer.png";
import onsiteSafety from "@/assets/gallery/onsite-safety.png";
import towerLattice from "@/assets/gallery/telecom-tower-lattice.jpg";
import towerLandscape from "@/assets/gallery/telecom-tower-landscape.jpg";
import siteBase from "@/assets/gallery/telecom-site-base.jpg";

// ── Services ───────────────────────────────────────────────────
export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  fullDesc: string;
  features: string[];
  icon: string;
  imageUrl?: string;
}

export const services: Service[] = [
  {
    slug: "site-survey-and-acquisition",
    title: "Site Survey and Acquisition",
    shortDesc: "Identifying optimal locations for network expansion.",
    description:
      "Conducting comprehensive site surveys for telecom and power projects. Identifying suitable locations for network expansion with detailed feasibility assessments.",
    fullDesc: "Our site survey and acquisition service is the foundation of any successful network expansion. We combine geographic analysis with regulatory expertise to secure the best possible locations for your infrastructure.",
    features: [
      "Technical Feasibility Studies",
      "Legal & Regulatory Clearance",
      "Landlord Liaison & Leasing",
      "Topographical Surveys",
      "RFI (Radio Frequency Interference) Analysis",
      "Power Availability Assessment"
    ],
    icon: "map-pin",
    imageUrl: siteSurveyor, // Targeted Surveyor visual
  },
  {
    slug: "turnkey-services",
    title: "Turnkey Services",
    shortDesc: "Full turnkey solutions for seamless project execution.",
    description:
      "Providing complete Full Turnkey (FTK) solutions for telecom and power projects. Managing everything from planning to commissioning.",
    fullDesc: "Meach Group delivers end-to-end turnkey projects, taking the burden of coordination off our clients. We manage the entire lifecycle from greenfield site acquisition to final network optimization.",
    features: [
      "Project Planning & Design",
      "Material Procurement & Logistics",
      "Civil Works & Construction",
      "Equipment Installation & Integration",
      "Testing & Commissioning",
      "Handover & Documentation"
    ],
    icon: "key",
    imageUrl: turnkeyEngineer, // Targeted Turnkey Project Engineer visual
  },
  {
    slug: "cwti-civil-works-tower-installation",
    title: "CW/TI (Civil Works & Tower Installation)",
    shortDesc: "Building telecom towers and infrastructure.",
    description:
      "Constructing telecom infrastructure, including towers and shelters. Ensuring structural integrity across diverse terrain.",
    fullDesc: "We specialize in the complex civil engineering required for telecom towers. Whether it's a rooftop site in a dense city or a lattice tower on a remote mountain peak, we ensure safe and durable construction.",
    features: [
      "Foundation Design & Construction",
      "Tower Assembly & Erection",
      "Rooftop Infrastructure Setup",
      "Shelter & Guardroom Construction",
      "Security Fencing & Access Gates",
      "Earthing & Lightning Protection Systems"
    ],
    icon: "tower-control",
    imageUrl: towerClimber, // Targeted Tower/Climber visual
  },
  {
    slug: "telecommunications-equipment-installation",
    title: "Telecommunications Equipment Installation & Commissioning",
    shortDesc: "Setting up and optimizing network components.",
    description:
      "Setting up, testing, and launching telecom equipment such as BTS, antennas, and routers.",
    fullDesc: "Our highly trained technicians handle the precision installation of advanced telecom electronics. We ensure every component is configured correctly and integrated seamlessly into the existing network matrix.",
    features: [
      "BTS/NodeB/eNodeB Installation",
      "Microwave Link Installation",
      "Antenna & Feeder Cable Setup",
      "Power & Battery Backup Integration",
      "Software Configuration & Testing",
      "Network Connectivity Verification"
    ],
    icon: "radio",
    imageUrl: microwaveDish, // Targeted Microwave/Equipment visual
  },
  {
    slug: "core-networks",
    title: "Core Networks (BSC, MSC, DWDM, etc.)",
    shortDesc: "Managing critical telecom network infrastructure.",
    description:
      "Installing and maintaining core telecom network components like Base Station Controllers (BSC) and Mobile Switching Centers (MSC).",
    fullDesc: "The core network is the brain of the system. We provide specialized installation and maintenance services for high-capacity nodes, switching centers, and long-haul transmission systems like DWDM.",
    features: [
      "BSC/RNC Installation",
      "MSC/Core Node Setup",
      "DWDM/Transmission Equipment",
      "Data Center Rack & Power Setup",
      "Optical Cross-Connect Systems",
      "High-Availability Monitoring"
    ],
    icon: "server",
    imageUrl: equipmentCabinet, // High-Fidelity Core Server/Cabinet visual
  },
  {
    slug: "power-solar-grid-backup",
    title: "Power (Solar, Grid connection, backup)",
    shortDesc: "Reliable power solutions for isolated network sites.",
    description:
      "Implementing comprehensive power solutions including solar systems, grid connectivity, and battery backups for network resilience.",
    fullDesc: "Power reliability is critical for network uptime. We specialize in bringing stable electricity to remote sites through grid extensions and hybrid solar energy solutions.",
    features: [
      "Solar Panel Array Installation",
      "Hybrid Power Controllers",
      "Deep-Cycle Battery Storage",
      "Grid Transformer Setup",
      "Emergency Generator Integration",
      "Remote Power Monitoring"
    ],
    icon: "zap",
    imageUrl: solarDeployment, // Authentic Solar Deployment Aerial
  },
  {
    slug: "optical-fiber-network",
    title: "Optical Fiber Network",
    shortDesc: "High-speed backhaul and transmission solutions.",
    description:
      "Deploying and maintaining long-haul and metro optical fiber networks for high-capacity data transmission.",
    fullDesc: "We provide end-to-end fiber deployment services, including trenching, ducting, and high-precision splicing for both underground and aerial networks across Nepal.",
    features: [
      "Underground Fiber Trenching",
      "Aerial Fiber Deployment",
      "Metro & Long-Haul Optics",
      "Fusion Splicing & Testing",
      "Fiber Distribution Hubs",
      "Transmission Link Optimization"
    ],
    icon: "activity",
    imageUrl: civilExcavation, // Authentic Fiber Trenching/Civil Works
  },
  {
    slug: "drive-test-and-network-optimization",
    title: "Drive Test and Network Optimization",
    shortDesc: "Assessing and optimizing network coverage and quality.",
    description:
      "Conducting drive tests to assess network coverage and quality. Optimizing network performance for better user experience.",
    fullDesc: "We ensure your network delivers on its promises. Using advanced probes and analysis tools, we pinpoint dead zones, interference, and handover issues to maintain peak network quality.",
    features: [
      "RF Coverage Drive Testing",
      "Throughput & QoS Benchmarking",
      "Neighbor List Optimization",
      "Interference Analysis",
      "Capacity Planning Updates",
      "Post-Launch Performance Reports"
    ],
    icon: "gauge",
    imageUrl: siteSurveyor, // High-Fidelity Drive Test visual
  },
  {
    slug: "supply-of-tower-fencing-grounding",
    title: "Supply of Tower, Fencing, Grounding & Electrical Material",
    shortDesc: "Providing telecom towers, grounding, and materials.",
    description:
      "Providing telecom towers, grounding solutions, fencing materials, and electrical components.",
    fullDesc: "Meach Group maintains a robust supply chain to provide high-quality materials for infrastructure projects. We source only certified components to ensure the longevity of your deployment.",
    features: [
      "Lattice & Monopole Towers",
      "High-Quality Fencing Systems",
      "Copper/Chemical Earthing Kits",
      "Cables, Conduits & Connectors",
      "Aviation Warning Lights",
      "Climate Control Enclosures"
    ],
    icon: "package",
    imageUrl: infraLogistics, // Authentic Supply & Logistics
  },
  {
    slug: "operation-and-maintenance-of-networks",
    title: "Operation and Maintenance of Networks",
    shortDesc: "Managing O&M of telecom networks.",
    description:
      "Managing the operation and maintenance (O&M) of telecom networks to ensure smooth functionality. Proactive monitoring and repair.",
    fullDesc: "Our O&M team acts as the first line of defense for your network. We provide scheduled preventive maintenance and 24/7 reactive repair services to keep downtime to an absolute minimum.",
    features: [
      "24/7 Troubleshooting & Repair",
      "Preventive Maintenance Schedules",
      "Site Cleaning & Security Audits",
      "Generator Servicing & Fueling",
      "Spares Inventory Management",
      "Environmental Monitoring"
    ],
    icon: "wrench",
    imageUrl: onsiteSafety, // Professional Field Maintenance
  },
  {
    slug: "operation-and-maintenance-of-optical-fiber",
    title: "Operation and Maintenance of Optical Fiber",
    shortDesc: "Inspecting and maintaining optical fiber networks.",
    description:
      "Regular inspection, maintenance, and troubleshooting of optical fiber networks.",
    fullDesc: "Fiber networks are vulnerable to accidental cuts and environmental stress. We provide specialized fiber O&M to ensure that your high-speed backbone remains resilient and fast.",
    features: [
      "Fiber Route Surveillance",
      "Rapid Fiber Cut Repair",
      "Optical Power Monitoring",
      "Manhole/Bunker Maintenance",
      "Emergency Splicing Teams",
      "Signal Quality Audits"
    ],
    icon: "activity",
    imageUrl: civilExcavation, // Authentic Fiber Maintenance
  },
  {
    slug: "reverse-engineering-and-site-upgradation",
    title: "Reverse Engineering and Site Infrastructure Upgradation",
    shortDesc: "Upgrading existing telecom site infrastructure.",
    description:
      "Analyzing and upgrading existing telecom site infrastructure for improved performance and capacity.",
    fullDesc: "As technology evolves, sites need to handle more load. We analyze legacy site designs and provide strategic upgrades to structural and power systems, enabling the deployment of 5G and beyond.",
    features: [
      "Structural Integrity Analysis",
      "Tower Reinforcement & Loading",
      "Power Capacity Upgradation",
      "Space Optimization Services",
      "Modernization Feasibility Studies",
      "Retrofitting Legacy Systems"
    ],
    icon: "refresh-cw",
    imageUrl: rooftopTelecom, // Detailed Site Upgradation visual
  },
  {
    slug: "site-management-and-resource-optimization",
    title: "Site Management & Resource Optimization",
    shortDesc: "Streamlining site operations for maximum efficiency.",
    description:
      "Comprehensive management of telecom sites, ensuring optimal resource allocation and uninterrupted service delivery.",
    fullDesc: "Effective site management is the key to network stability. We provide end-to-end oversight of site resources, including power systems, physical security, and environmental controls to ensure 99.9% uptime.",
    features: [
      "Operational Resource Tracking",
      "Power Utility Management",
      "Security & Access Control",
      "Inventory Audits",
      "Cost Optimization Reports"
    ],
    icon: "clipboard-list",
    imageUrl: onsiteSafety,
  },
  {
    slug: "equipment-building-and-fencing",
    title: "Equipment Building & Fencing Construction",
    shortDesc: "Building secure enclosures for network protection.",
    description:
      "Design and construction of specialized equipment buildings and secure fencing to protect critical infrastructure.",
    fullDesc: "We build robust, weather-resistant shelters and high-security fencing systems designed to protect sensitive telecom electronics from environmental hazards and unauthorized access.",
    features: [
      "Prefabricated Shelter Assembly",
      "High-Security Perimeter Fencing",
      "Weatherproofing & Insulation",
      "Security Gate Installation",
      "Civil Base Construction"
    ],
    icon: "shield-check",
    imageUrl: rooftopTelecom, // Authentic Equipment Building visual
  },
  {
    slug: "infrastructure-logistics-and-relocation",
    title: "Infrastructure Logistics & Relocation Services",
    shortDesc: "Expert handling and transport of telecom assets.",
    description:
      "Professional logistics management for the transport and relocation of heavy telecom and power infrastructure assets.",
    fullDesc: "Transporting infrastructure in Nepal's difficult terrain requires specialized expertise. We manage the end-to-end logistics of relocating towers, shelters, and power systems with zero damage.",
    features: [
      "Heavy Asset Transportation",
      "Rigging & Crane Operations",
      "Terrain-Specific Logistics",
      "Insurance & Risk Management",
      "Temporary Storage Solutions"
    ],
    icon: "truck",
    imageUrl: infraLogistics,
  },
];

// ── Projects ───────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  status: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    title: "Site Relocation and Solution Change",
    description:
      "Comprehensive site relocation services including dismantling, transportation, and reinstallation of telecom equipment at new locations.",
    category: "Telecom",
    image: infraLogistics,
    location: "Various Locations, Nepal",
    status: "Completed",
    completionDate: "2024"
  },
  {
    title: "Grid Power Connection and Related Services",
    description:
      "Establishing reliable grid power connections for telecom sites, including transformer installation and power line extensions.",
    category: "Power",
    image: powerTransformer,
    location: "Terai Region, Nepal",
    status: "Completed",
    completionDate: "2023"
  },
  {
    title: "High-Altitude Solar Power Installation",
    description:
      "Designing and implementing autonomous solar power systems for remote telecom towers in high-altitude Himalayan regions.",
    category: "Solar",
    image: solarDeployment,
    location: "Western Region, Nepal",
    status: "Completed",
    completionDate: "2024"
  },
  {
    title: "Kathmandu Metro Fiber Deployment",
    description:
      "Laying high-capacity underground optical fiber networks across the dense urban environment of Kathmandu Valley.",
    category: "Optical Fiber",
    image: civilExcavation,
    location: "Kathmandu Valley",
    status: "Ongoing",
    completionDate: "2025"
  },
  {
    title: "Nationwide Passive Maintenance",
    description:
      "Providing comprehensive operation and maintenance services for thousands of telecom sites across all provinces of Nepal.",
    category: "Maintenance",
    image: towerClimber,
    location: "Nationwide, Nepal",
    status: "Ongoing",
    completionDate: "Ongoing"
  },
  {
    title: "Eastern Region Tower Rollout",
    description:
      "Large-scale deployment of new ground-based towers to expand network coverage in the Eastern hills and plains.",
    category: "Telecom",
    image: towerLattice,
    location: "Eastern Region, Nepal",
    status: "Completed",
    completionDate: "2023"
  },
  {
    title: "Pokhara Smart City Connectivity",
    description:
      "Installing high-speed wireless backhaul and smart city infrastructure in the tourism hub of Pokhara.",
    category: "Smart City",
    image: turnkeyEngineer,
    location: "Pokhara Valley",
    status: "Completed",
    completionDate: "2024"
  },
  {
    title: "Lumbini Power Grid Modernization",
    description:
      "Upgrading aging power distribution infrastructure in the Lumbini Province to support increased demand and industrial growth.",
    category: "Power",
    image: towerLandscape,
    location: "Lumbini Province",
    status: "Ongoing",
    completionDate: "2025"
  },
  {
    title: "Underground Electricity Distribution Network",
    description:
      "Design and construction of underground electricity distribution networks for reliable power supply.",
    category: "Power",
    image: siteBase,
    location: "Gandaki Province",
    status: "Completed",
    completionDate: "2023"
  },
  {
    title: "Eastern Nepal Microwave Backbone Upgrade",
    description:
      "High-capacity microwave link deployment to strengthen core transmission networks in the eastern border regions.",
    category: "Transmission",
    image: microwaveDish,
    location: "Koshi Province",
    status: "Completed",
    completionDate: "2024"
  },
  {
    title: "Remote Village Off-Grid Power Solution",
    description:
      "Integrated solar and battery backup systems for isolated community network hubs in the Karnali region.",
    category: "Solar",
    image: solarDeployment,
    location: "Karnali Province",
    status: "Ongoing",
    completionDate: "2025"
  },
  {
    title: "Urban Fiber Ring Expansion - Kathmandu",
    description:
      "Expansion of the metro fiber ring to provide redundant high-speed backhaul for corporate and residential hubs.",
    category: "Optical Fiber",
    image: civilExcavation,
    location: "Kathmandu Metro",
    status: "Completed",
    completionDate: "2024"
  },
];

// ── Testimonials ───────────────────────────────────────────────
export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Robert Lewis",
    title: "Regional Manager, Ncell",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Meach Group has been an exceptional partner in our telecom infrastructure projects. Their expertise in site relocation and network deployment has significantly improved our operational efficiency. Highly recommended!",
  },
  {
    name: "Erica Adams",
    title: "Project Director, Nepal Telecom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "Meach Group's commitment to quality and innovation is evident in their work. Their expertise in drive testing and network optimization has made a noticeable difference in our network performance.",
  },
  {
    name: "Daniel Wright",
    title: "CTO, Smart Cell",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "We partnered with Meach Group for power installation and site management. Their turnkey solutions have helped us streamline our operations and maintain uninterrupted service.",
  },
  {
    name: "Jessica Turner",
    title: "Infrastructure Lead, DishHome",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "The team at Meach Group is highly professional and dedicated. Their underground optical fiber network construction has greatly enhanced our connectivity and service reliability.",
  },
];

// ── Blog Posts ──────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-future-of-telecommunications-in-nepal",
    title: "The Future of Telecommunications in Nepal: Trends and Innovations",
    excerpt:
      "Explore the evolving landscape of telecommunications in Nepal, including 5G readiness, fiber expansion, and digital transformation initiatives.",
    content:
      "Nepal's telecommunications sector is undergoing rapid transformation with advances in 5G technology, nationwide fiber optic expansion, and increasing mobile penetration. As infrastructure providers like Meach Group continue to deploy cutting-edge solutions, the country is positioned for a digital revolution that will enhance connectivity across urban and rural areas alike.",
    date: "2025-06-03",
    category: "Technology",
    author: "Meach Group Team",
  },
  {
    slug: "importance-of-power-backup-solutions",
    title: "Importance of Power Backup Solutions in Telecommunications",
    excerpt:
      "Understanding why reliable power backup is critical for maintaining uninterrupted telecom services in Nepal's challenging terrain.",
    content:
      "Power reliability is a cornerstone of telecommunications infrastructure. In Nepal, where grid power can be inconsistent, deploying robust backup solutions — including rectifiers, batteries, and generators — is essential. Meach Group specializes in power installation services that keep networks running 24/7, ensuring seamless connectivity for millions of users.",
    date: "2025-05-15",
    category: "Infrastructure",
    author: "Meach Group Team",
  },
  {
    slug: "revolutionizing-infrastructure-development",
    title: "How Meach Group is Revolutionizing Infrastructure Development in Nepal",
    excerpt:
      "A look at Meach Group's end-to-end approach to building Nepal's telecom and power infrastructure.",
    content:
      "Since our establishment in 2011, Meach Group has been at the forefront of Nepal's infrastructure development. From site survey and acquisition to turnkey solutions and ongoing maintenance, we provide comprehensive services that have earned the trust of leading telecom operators. Our commitment to quality, safety, and innovation drives every project we undertake.",
    date: "2025-04-20",
    category: "Company",
    author: "Meach Group Team",
  },
  {
    slug: "ehs-ppe-safety-standards",
    title: "EHS/PPE: Safety Standards in Telecom Infrastructure",
    excerpt:
      "How Meach Group ensures the highest standards of Environment, Health, and Safety across all project sites.",
    content:
      "Safety is non-negotiable at Meach Group. We enforce strict EHS protocols and PPE requirements across all project sites. Our comprehensive safety training programs, regular audits, and commitment to international standards ensure that every team member returns home safely while delivering exceptional infrastructure projects.",
    date: "2025-03-10",
    category: "Safety",
    author: "Meach Group Team",
  },
];

// ── Jobs ────────────────────────────────────────────────────────
export interface Job {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "telecom-site-engineer",
    title: "Telecom Site Engineer",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description:
      "Lead the installation and commissioning of telecom equipment at various sites across Nepal. Ensure quality standards and timely project delivery.",
    responsibilities: [
      "Install and commission BTS, antennas, and telecom equipment",
      "Conduct site surveys and feasibility assessments",
      "Coordinate with project managers and clients",
      "Ensure compliance with safety and quality standards",
      "Document installation progress and generate reports",
    ],
    requirements: [
      "Bachelor's degree in Telecommunications or Electrical Engineering",
      "3+ years experience in telecom infrastructure",
      "Knowledge of 2G/3G/4G/LTE technologies",
      "Willingness to travel to project sites across Nepal",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Competitive salary package",
      "Professional development opportunities",
      "Health insurance coverage",
      "Performance bonuses",
      "Travel allowances",
    ],
  },
  {
    slug: "fiber-optic-technician",
    title: "Fiber Optic Technician",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description:
      "Install, splice, and maintain optical fiber networks for both aerial and underground deployments across Nepal.",
    responsibilities: [
      "Lay and splice optical fiber cables",
      "Perform OTDR testing and fiber characterization",
      "Maintain and repair fiber optic networks",
      "Install FTTH equipment at customer premises",
      "Follow safety protocols during all field operations",
    ],
    requirements: [
      "Diploma or degree in Electronics/Telecommunications",
      "2+ years experience in fiber optic installation",
      "Proficiency with fiber splicing equipment and OTDR",
      "Physical fitness for field work",
      "Valid driving license preferred",
    ],
    benefits: [
      "Competitive salary",
      "Skill development training",
      "Health and accident insurance",
      "Field allowances",
      "Career growth opportunities",
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager – Telecom Infrastructure",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description:
      "Oversee end-to-end delivery of telecom infrastructure projects, managing timelines, budgets, and stakeholder communication.",
    responsibilities: [
      "Plan and manage telecom infrastructure projects",
      "Coordinate with clients, vendors, and field teams",
      "Monitor project budgets and timelines",
      "Prepare and present project status reports",
      "Ensure quality and safety compliance",
    ],
    requirements: [
      "Bachelor's degree in Engineering or Project Management",
      "5+ years experience managing telecom projects",
      "Strong leadership and communication skills",
      "Proficiency in project management tools",
      "PMP certification is a plus",
    ],
    benefits: [
      "Attractive compensation package",
      "Leadership development programs",
      "Comprehensive health insurance",
      "Annual performance bonuses",
      "Flexible working arrangements",
    ],
  },
];
// ── Partners ───────────────────────────────────────────────────
export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    name: "Huawei",
    logo: "https://www.vectorlogo.zone/logos/huawei/huawei-ar21.svg",
  },
  {
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png",
  },
  {
    name: "ZTE",
    logo: "/zte-logo.svg",
  },
];
