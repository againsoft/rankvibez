export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type TeamDepartment = {
  name: string;
  members: TeamMember[];
};

export type OpenRole = {
  title: string;
  description: string;
  icon: string;
};

export const openRoles: OpenRole[] = [
  {
    title: "AI Engineer",
    description: "Builds AI agents, automation and model integrations across client systems.",
    icon: "Bot",
  },
  {
    title: "AI Automation Engineer",
    description: "Designs workflow automation connecting business tools with AI capabilities.",
    icon: "Workflow",
  },
  {
    title: "Cloud & DevOps Engineer",
    description: "Owns cloud infrastructure, deployment pipelines and system reliability.",
    icon: "Cloud",
  },
  {
    title: "Cybersecurity Analyst",
    description: "Leads security assessments, hardening and monitoring for client infrastructure.",
    icon: "ShieldCheck",
  },
  {
    title: "QA Engineer",
    description: "Tests and validates every release across web, ERP and e-commerce systems.",
    icon: "CheckCircle2",
  },
  {
    title: "Backend Developer — ERP Systems",
    description: "Builds and maintains core ERP modules for finance, inventory and operations.",
    icon: "Database",
  },
  {
    title: "Business Analyst — ERP & Automation",
    description: "Maps client business processes into ERP and automation requirements.",
    icon: "ClipboardList",
  },
  {
    title: "Client Support Specialist",
    description: "Handles virtual assistance and day-to-day client operational support.",
    icon: "Headset",
  },
  {
    title: "Content Writer & Strategist",
    description: "Writes and plans SEO-driven content across client and internal channels.",
    icon: "PenLine",
  },
  {
    title: "PPC & Ads Specialist",
    description: "Manages Google and Meta ad campaigns from setup through optimization.",
    icon: "Target",
  },
];

export const leadership: TeamMember[] = [
  { name: "Mossiur Rahman Riyad", role: "Founder & Chairman", image: "/team/ceo.png" },
  { name: "Motiur Rahman Jidan", role: "CEO & Web Developer", image: "/team/jidan-vai.png" },
  { name: "Yeasin Arafat", role: "CTO & Head of Software", image: "/team/arafat.png" },
  { name: "Fajle Rabby", role: "CFO & HR Manager", image: "/team/fajle-rabby.png" },
];

export const teamDepartments: TeamDepartment[] = [
  {
    name: "Management",
    members: [
      { name: "Md Abid Hasan", role: "Project Manager", image: "/team/abid.png" },
      { name: "Al Amin", role: "Project Manager", image: "/team/al-amin2.png" },
    ],
  },
  {
    name: "Development",
    members: [
      { name: "Manik Chandra Roy", role: "Software Developer", image: "/team/manik-file.png" },
      { name: "Md Al-Mamun", role: "Software Developer", image: "/team/md-al-mamun.png" },
      { name: "Sahos Mia", role: "Software Developer", image: "/team/sahos.png" },
      { name: "Full Kumar Roy", role: "Software Developer", image: "/team/full-kumar-roy.png" },
      { name: "Md. Sujad-ud Doula", role: "Full-Stack .NET Developer", image: "/team/sujad.png" },
    ],
  },
  {
    name: "SEO & Digital Marketing",
    members: [
      { name: "Jannatul Moriyom Anni", role: "Digital Marketing & SEO Expert", image: "/team/anni.png" },
      { name: "Sheikh MD Maruf Hossain", role: "Digital Marketing Expert", image: "/team/maruf.png" },
      { name: "Tamim AL Hasan", role: "SEO Expert", image: "/team/tamin.png" },
      { name: "Uzzwal Kumar Biswas", role: "Digital Marketing Executive", image: "/team/uzzwal.png" },
      { name: "Md. Munir Husen Munna", role: "Digital Marketing Executive", image: "/team/munna.png" },
    ],
  },
  {
    name: "Graphics & Design",
    members: [
      { name: "Md. Al-amin", role: "Graphics Designer", image: "/team/al-amin.png" },
      { name: "Topan Roy", role: "Graphics Designer & Video Editor", image: "/team/tapon.png" },
    ],
  },
  {
    name: "Marketing",
    members: [
      { name: "Tarshid Alam", role: "Marketing Manager", image: "/team/fahim.png" },
      { name: "Md Rifat Mia", role: "Digital Marketing Expert", image: "/team/rifat1.png" },
    ],
  },
];
