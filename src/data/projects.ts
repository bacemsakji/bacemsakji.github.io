export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  stack: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "cyberthread",
    title: "CyberThread",
    description:
      "Ongoing cybersecurity project developed during the ANCS internship to support SOC-oriented monitoring and automation workflows.",
    details: [
      "Built as an in-progress internship project at ANCS",
      "Uses Wazuh for security monitoring and alert visibility",
      "Uses n8n to automate investigation and response workflows",
      "Focused on SOC practices, alert handling, and operational efficiency",
      "Designed to connect detection signals with practical automation pipelines",
    ],
    stack: ["Wazuh", "n8n", "SOC", "Security Monitoring", "Automation"],
    github: "https://github.com/bacemsakji/cyberthread",
  },
  {
    id: "sakji-autoshop",
    title: "SakjiAutoshop",
    description:
      "Full-stack e-commerce platform built for a family auto-parts business. Handles product catalog, orders, and admin operations end-to-end.",
    details: [
      "React.js SPA frontend with a Node.js REST API backend",
      "Supabase (PostgreSQL) for auth, database, and real-time order updates",
      "Product catalog, shopping cart, and order tracking for customers",
      "Admin dashboard with role-based access control",
      "Frontend deployed on Vercel, backend on Render",
    ],
    stack: ["React.js", "Node.js", "Supabase", "PostgreSQL", "Vercel", "Render"],
    github: "https://github.com/bacemsakji",
    live: "https://sakji-auto-shop.vercel.app",
  },
  {
    id: "q-ai-hub",
    title: "Q-AI Hub",
    description:
      "Incubator & accelerator management platform connecting startups, mentors, and investors through a structured multi-phase workflow.",
    details: [
      "React.js + TypeScript frontend with a Spring Boot REST API backend",
      "JWT multi-role authentication: Admin, Mentor, Startup",
      "Multi-phase application workflow management for startup lifecycle",
      "Dockerized full stack with Docker Compose for local dev parity",
      "GitHub Actions CI/CD pipeline for automated build & deployment",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "netwatch",
    title: "NetWatch",
    description:
      "A Python-based network monitoring and intrusion detection system (NIDS) that analyzes real-time traffic to identify potential security threats.",
    details: [
      "Real-time packet sniffing and header parsing using Python and Scapy",
      "Built detection rules for common reconnaissance activity, including Nmap stealth scans (SYN/FIN/Null) and ARP spoofing",
      "Developed an interactive CLI interface visualizing network bandwidth, active sessions, and flagged alerts",
      "Exports traffic logs to JSON/CSV for integration with SIEM tools or external dashboard visualization",
      "Containerized using Docker for deployment as a headless monitoring agent on Linux systems",
    ],
    stack: ["Python", "Scapy", "Docker", "Linux", "Nmap"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "tsukuyomi",
    title: "Tsukuyomi",
    description:
      "An intelligent, automated conversational agent (bot) on Instagram designed to manage, process, and respond to Instagram Direct Messages (DMs) in real time.",
    details: [
      "Integrates Instagram Graph API for real-time DM monitoring and response handling",
      "Leverages advanced Large Language Model (LLM) for intelligent, context-aware conversations",
      "Automated message processing with natural language understanding and generation",
      "Real-time response system with low-latency message handling",
      "Scalable architecture supporting multiple concurrent conversations",
    ],
    stack: ["Instagram Graph API", "LLM", "Python", "REST API", "Real-time Processing"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "hafirewall",
    title: "HAfirewall",
    description:
      "Enterprise-grade, highly available (HA), and secure web infrastructure layer combining Virtual IP failover, Layer 4/7 Load Balancer, and Web Application Firewall array.",
    details: [
      "Virtual IP (VIP) failover mechanism for high availability and automatic failover",
      "Layer 4/7 Load Balancer for intelligent traffic distribution and optimization",
      "Web Application Firewall (WAF) array for comprehensive security protection",
      "Enterprise-grade security with DDoS mitigation and threat detection",
      "Scalable infrastructure supporting high-traffic applications",
    ],
    stack: ["VIP", "Load Balancer", "WAF", "Linux", "Network Security", "High Availability"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "aws-terraform-infrastructure",
    title: "AWS Cloud Infrastructure with Terraform",
    description:
      "Provisioned and version-controlled a multi-tier AWS environment using Terraform, enabling reproducible, one-command infrastructure deployment.",
    details: [
      "Configured IAM roles and security groups following least-privilege principles",
      "Used remote state (S3 backend) to make the setup collaboration-ready",
      "Multi-tier AWS environment with VPC, EC2, S3, and IAM components",
      "Infrastructure as Code approach for reproducible deployments",
    ],
    stack: ["Terraform", "AWS", "VPC", "EC2", "S3", "IAM", "Infrastructure as Code"],
    github: "https://github.com/bacemsakji/AWS-terraform-infrastructure",
  },
  {
    id: "devsecops-cicd-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    description:
      "Built a Jenkins pipeline to build, test, and deploy a containerized app to a Kubernetes cluster, integrating automated Trivy vulnerability scanning.",
    details: [
      "Integrated automated Trivy vulnerability scanning to block images with critical CVEs before release",
      "Wrote the pipeline as declarative code (Jenkinsfile) with staged gates — build, test, scan, deploy",
      "Failure at any stage stops the release before it reaches production",
      "Containerized application deployment to Kubernetes cluster",
    ],
    stack: ["Jenkins", "Docker", "Kubernetes", "Trivy", "CI/CD", "Security Scanning"],
    github: "https://github.com/bacemsakji/devsecops-cicd-pipeline",
  },
  {
    id: "cloud-honeypot",
    title: "Cloud-Hosted Honeypot",
    description:
      "Deployed a low-interaction honeypot on AWS EC2 to capture and log unauthorized access attempts, port scans, and brute-force traffic from real-world attackers.",
    details: [
      "Built a custom Go service to parse captured logs, fingerprint attacker IPs and tools",
      "Visualized attack patterns — turning raw traffic into an analyzable threat feed",
      "Captured real-world attack data including unauthorized access attempts and port scans",
      "Deployed on AWS EC2 with Docker containerization",
    ],
    stack: ["Go", "AWS", "Docker", "EC2", "Security", "Threat Analysis"],
    github: "https://github.com/bacemsakji/cloud-hosted-honeypot",
  },
];
