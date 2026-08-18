export type TeamMember = {
  name: string;
  roleId: string;
  image?: string;
};

export type TeamDepartment = {
  id: string;
  members: TeamMember[];
};

export const leadership: TeamMember[] = [
  { name: "Mossiur Rahman Riyad", roleId: "founder-chairman", image: "/team/ceo.png" },
  { name: "Motiur Rahman Jidan", roleId: "ceo-web-developer", image: "/team/jidan-vai.png" },
  { name: "Yeasin Arafat", roleId: "cto-head-software", image: "/team/arafat.png" },
  { name: "Fajle Rabby", roleId: "cfo-hr-manager", image: "/team/fajle-rabby.png" },
];

export const teamDepartments: TeamDepartment[] = [
  {
    id: "management",
    members: [
      { name: "Md Abid Hasan", roleId: "project-manager", image: "/team/abid.png" },
      { name: "Al Amin", roleId: "project-manager", image: "/team/al-amin2.png" },
      { name: "Saikat Kumar Das", roleId: "business-analyst-erp-automation" },
    ],
  },
  {
    id: "development",
    members: [
      { name: "Manik Chandra Roy", roleId: "erp-systems-developer", image: "/team/manik-file.png" },
      { name: "Md Al-Mamun", roleId: "ecommerce-developer", image: "/team/md-al-mamun.png" },
      { name: "Sahos Mia", roleId: "fullstack-web-developer", image: "/team/sahos.png" },
      { name: "Full Kumar Roy", roleId: "software-developer", image: "/team/full-kumar-roy.png" },
      { name: "Md. Sujad-ud Doula", roleId: "fullstack-dotnet-developer-erp", image: "/team/sujad.png" },
      { name: "Rayhan Islam", roleId: "qa-engineer" },
    ],
  },
  {
    id: "cloud-infrastructure",
    members: [{ name: "Md. Fahim Ahmed", roleId: "cloud-devops-engineer" }],
  },
  {
    id: "cyber-security",
    members: [{ name: "Abdullah Al Noman", roleId: "cybersecurity-analyst" }],
  },
  {
    id: "ai-automation",
    members: [
      { name: "Mehedi Hasan", roleId: "ai-engineer" },
      { name: "Sajjad Arif", roleId: "ai-automation-engineer" },
      { name: "Tasnim Jahan", roleId: "client-support-specialist" },
    ],
  },
  {
    id: "seo-marketing",
    members: [
      { name: "Jannatul Moriyom Anni", roleId: "seo-content-strategist", image: "/team/anni.png" },
      { name: "Sheikh MD Maruf Hossain", roleId: "digital-marketing-expert", image: "/team/maruf.png" },
      { name: "Tamim AL Hasan", roleId: "technical-seo-expert", image: "/team/tamin.png" },
      { name: "Uzzwal Kumar Biswas", roleId: "digital-marketing-executive", image: "/team/uzzwal.png" },
      { name: "Md. Munir Husen Munna", roleId: "conversion-campaign-executive", image: "/team/munna.png" },
      { name: "Mehjabin Nesa", roleId: "content-writer-strategist" },
    ],
  },
  {
    id: "graphics-design",
    members: [
      { name: "Md. Al-amin", roleId: "graphics-designer", image: "/team/al-amin.png" },
      { name: "Topan Roy", roleId: "graphics-designer-video-editor", image: "/team/tapon.png" },
    ],
  },
  {
    id: "marketing",
    members: [
      { name: "Tarshid Alam", roleId: "marketing-manager-ads", image: "/team/fahim.png" },
      { name: "Md Rifat Mia", roleId: "ads-campaign-specialist", image: "/team/rifat1.png" },
    ],
  },
];
