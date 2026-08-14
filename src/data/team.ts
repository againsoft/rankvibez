export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export type TeamDepartment = {
  name: string;
  members: TeamMember[];
};

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
      { name: "Saikat Kumar Das", role: "Business Analyst — ERP & Automation" },
    ],
  },
  {
    name: "Development",
    members: [
      { name: "Manik Chandra Roy", role: "ERP Systems Developer", image: "/team/manik-file.png" },
      { name: "Md Al-Mamun", role: "E-Commerce Developer", image: "/team/md-al-mamun.png" },
      { name: "Sahos Mia", role: "Full-Stack Web Developer", image: "/team/sahos.png" },
      { name: "Full Kumar Roy", role: "Software Developer", image: "/team/full-kumar-roy.png" },
      { name: "Md. Sujad-ud Doula", role: "Full-Stack .NET Developer — ERP Systems", image: "/team/sujad.png" },
      { name: "Rayhan Islam", role: "QA Engineer" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    members: [{ name: "Md. Fahim Ahmed", role: "Cloud, DevOps & Infrastructure Engineer" }],
  },
  {
    name: "Cyber Security",
    members: [{ name: "Abdullah Al Noman", role: "Cybersecurity Analyst" }],
  },
  {
    name: "AI & Automation",
    members: [
      { name: "Mehedi Hasan", role: "AI Engineer" },
      { name: "Sajjad Arif", role: "AI Automation Engineer" },
      { name: "Tasnim Jahan", role: "Client Support Specialist" },
    ],
  },
  {
    name: "SEO & Digital Marketing",
    members: [
      { name: "Jannatul Moriyom Anni", role: "SEO & Content Strategist", image: "/team/anni.png" },
      { name: "Sheikh MD Maruf Hossain", role: "Digital Marketing Expert", image: "/team/maruf.png" },
      { name: "Tamim AL Hasan", role: "Technical SEO Expert", image: "/team/tamin.png" },
      { name: "Uzzwal Kumar Biswas", role: "Digital Marketing Executive", image: "/team/uzzwal.png" },
      { name: "Md. Munir Husen Munna", role: "Conversion & Campaign Executive", image: "/team/munna.png" },
      { name: "Mehjabin Nesa", role: "Content Writer & Strategist" },
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
      { name: "Tarshid Alam", role: "Marketing Manager — Ads Campaigns", image: "/team/fahim.png" },
      { name: "Md Rifat Mia", role: "Ads Campaign Specialist", image: "/team/rifat1.png" },
    ],
  },
];
