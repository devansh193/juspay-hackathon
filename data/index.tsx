import {
  Home,
  Box,
  Layers,
  Briefcase,
  Building2,
  BookOpen,
  Headphones,
  FlaskConical,
  Leaf,
  DollarSign,
  Phone,
  Cpu,
  Wrench,
  Shield,
  Users,
  Globe,
  FileText,
  BarChart3,
  Lightbulb,
  HelpCircle,
} from "lucide-react";

export const APP_DRAWER_ITEMS = [
  {
    id: "home",
    label: "Home",
    description: "Overview and latest updates",
    icon: <Home />,
    href: "/",
  },
  {
    id: "products-services",
    label: "Products & Services",
    description: "Explore our full product ecosystem",
    icon: <Box className="h-5 w-5" />,
    children: [
      {
        id: "software",
        label: "Software Solutions",
        description: "Cloud, AI, and enterprise tools",
        icon: <Cpu className="h-5 w-5" />,
        children: [
          {
            id: "cloud-platform",
            label: "Cloud Platform",
            description: "Deploy and manage workloads globally",
            icon: <Globe className="h-5 w-5" />,
          },
          {
            id: "ai-suite",
            label: "AI Suite",
            description: "Machine learning and automation APIs",
            icon: <Lightbulb className="h-5 w-5" />,
          },
          {
            id: "dev-tools",
            label: "Developer Tools",
            description: "SDKs, APIs, and CI/CD pipelines",
            icon: <Wrench className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "hardware",
        label: "Hardware Solutions",
        description: "Devices and IoT platforms",
        icon: <Layers className="h-5 w-5" />,
        children: [
          {
            id: "iot-devices",
            label: "IoT Devices",
            description: "Connected sensors and gateways",
            icon: <Cpu className="h-5 w-5" />,
          },
          {
            id: "embedded-systems",
            label: "Embedded Systems",
            description: "Custom hardware and firmware",
            icon: <Shield className="h-5 w-5" />,
          },
        ],
      },
    ],
  },
  {
    id: "industry-solutions",
    label: "Industry Solutions",
    description: "Tailored platforms for every domain",
    icon: <Briefcase className="h-5 w-5" />,
    children: [
      {
        id: "finance",
        label: "Financial Services",
        description: "Banking, insurance, and fintech APIs",
        icon: <DollarSign className="h-5 w-5" />,
        children: [
          {
            id: "digital-banking",
            label: "Digital Banking",
            description: "Online and mobile banking systems",
            icon: <Shield className="h-5 w-5" />,
          },
          {
            id: "risk-analytics",
            label: "Risk Analytics",
            description: "Fraud detection and compliance tools",
            icon: <BarChart3 className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare",
        description: "Smart health and patient management",
        icon: <Users className="h-5 w-5" />,
        children: [
          {
            id: "ehr-platform",
            label: "EHR Platform",
            description: "Secure electronic health records",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            id: "telemedicine",
            label: "Telemedicine",
            description: "Virtual consultations and diagnostics",
            icon: <Headphones className="h-5 w-5" />,
          },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    description: "Learn about our organization",
    icon: <Building2 className="h-5 w-5" />,
    children: [
      {
        id: "about-us",
        label: "About Us",
        description: "Who we are and what we do",
        icon: <Users className="h-5 w-5" />,
        children: [
          {
            id: "leadership",
            label: "Leadership",
            description: "Our executive and management team",
            icon: <Users className="h-5 w-5" />,
          },
          {
            id: "careers",
            label: "Careers",
            description: "Join our growing team",
            icon: <Briefcase className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "news",
        label: "News & Media",
        description: "Press releases and announcements",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    description: "Documentation, APIs, and guides",
    icon: <BookOpen className="h-5 w-5" />,
    children: [
      {
        id: "developer-docs",
        label: "Developer Docs",
        description: "API and SDK references",
        icon: <FileText className="h-5 w-5" />,
        children: [
          {
            id: "api-reference",
            label: "API Reference",
            description: "Detailed REST and GraphQL specs",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            id: "sdk-guides",
            label: "SDK Guides",
            description: "Integration examples and best practices",
            icon: <Cpu className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "community",
        label: "Community",
        description: "Forums, blogs, and open source projects",
        icon: <Users className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    description: "Help and customer assistance",
    icon: <Headphones className="h-5 w-5" />,
    children: [
      {
        id: "help-center",
        label: "Help Center",
        description: "Troubleshooting and guides",
        icon: <HelpCircle className="h-5 w-5" />,
        children: [
          {
            id: "faq",
            label: "FAQ",
            description: "Frequently asked questions",
            icon: <HelpCircle className="h-5 w-5" />,
          },
          {
            id: "contact-support",
            label: "Contact Support",
            description: "Get in touch with our support team",
            icon: <Phone className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "service-status",
        label: "Service Status",
        description: "Live uptime and maintenance reports",
        icon: <Shield className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "research-innovation",
    label: "Research & Innovation",
    description: "Explore emerging technologies and projects",
    icon: <FlaskConical className="h-5 w-5" />,
    children: [
      {
        id: "labs",
        label: "Innovation Labs",
        description: "Experimental R&D initiatives",
        icon: <FlaskConical className="h-5 w-5" />,
        children: [
          {
            id: "ai-lab",
            label: "AI Lab",
            description: "Advancements in artificial intelligence",
            icon: <Lightbulb className="h-5 w-5" />,
          },
          {
            id: "quantum",
            label: "Quantum Research",
            description: "Next-gen quantum computing efforts",
            icon: <Cpu className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "partnerships",
        label: "Academic Partnerships",
        description: "Collaborations with universities",
        icon: <Users className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    description: "Our commitment to the planet",
    icon: <Leaf className="h-5 w-5" />,
    children: [
      {
        id: "green-initiatives",
        label: "Green Initiatives",
        description: "Energy efficiency and waste reduction",
        icon: <Leaf className="h-5 w-5" />,
        children: [
          {
            id: "carbon-neutral",
            label: "Carbon Neutral Program",
            description: "Our roadmap to net-zero emissions",
            icon: <Globe className="h-5 w-5" />,
          },
          {
            id: "recycling",
            label: "Recycling Programs",
            description: "Reducing e-waste responsibly",
            icon: <Box className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "reports",
        label: "Sustainability Reports",
        description: "Annual environmental impact reports",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "investor-relations",
    label: "Investor Relations",
    description: "Financial reports and shareholder info",
    icon: <DollarSign className="h-5 w-5" />,
    children: [
      {
        id: "financials",
        label: "Financial Reports",
        description: "Earnings and annual reports",
        icon: <FileText className="h-5 w-5" />,
        children: [
          {
            id: "quarterly",
            label: "Quarterly Reports",
            description: "Latest quarterly performance",
            icon: <BarChart3 className="h-5 w-5" />,
          },
          {
            id: "annual",
            label: "Annual Reports",
            description: "Comprehensive yearly analysis",
            icon: <FileText className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "stock",
        label: "Stock Information",
        description: "Live market data and investor tools",
        icon: <BarChart3 className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    description: "Reach out to us directly",
    icon: <Phone className="h-5 w-5" />,
    children: [
      {
        id: "offices",
        label: "Global Offices",
        description: "Our worldwide locations",
        icon: <Globe className="h-5 w-5" />,
        children: [
          {
            id: "india-office",
            label: "India HQ",
            description: "Bangalore, India operations center",
            icon: <Building2 className="h-5 w-5" />,
          },
          {
            id: "usa-office",
            label: "US Office",
            description: "New York regional branch",
            icon: <Building2 className="h-5 w-5" />,
          },
        ],
      },
      {
        id: "inquiries",
        label: "Business Inquiries",
        description: "Partnerships and collaborations",
        icon: <Briefcase className="h-5 w-5" />,
      },
    ],
  },
];
