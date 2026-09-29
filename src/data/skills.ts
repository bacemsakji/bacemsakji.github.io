export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "Angular", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Java", "Node.js", "REST API", "JWT / OAuth2"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL", "SQLite"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Jenkins", "Kubernetes", "Terraform", "GitHub Actions", "Vercel", "Render", "Git", "Linux", "Grafana"],
  },
  {
    category: "Cloud",
    skills: ["AWS (S3, EC2, IAM)", "Infrastructure as Code"],
  },
  {
    category: "Security",
    skills: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Wazuh", "Cryptography", "IPS", "IDS"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "Go"],
  },
];
