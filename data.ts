import {
  Achievement,
  Experience,
  FrontPage,
  Game,
  Photo,
  Project,
  Social,
  TechCategory,
} from "@/typings";

export const frontPage: FrontPage = {
  name: "Devansh Jain",
  firstName: "Devansh",
  lastName: "Jain",
  initials: "DJ",
  photo: "/images/memoji.png",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "React & .NET Developer",
  ],
  description:
    "Started with R&D at Ericsson, levelled up at Incedo, now building mission-critical systems at Sagitec. Three years in — still the most curious person in the room.",
  resumeURL: "/files/resume.pdf",
  location: "Pune, India",
  email: "devansh2000.official@gmail.com",
  available: true,
  about:
    "I\'m a software engineer who genuinely cares about the craft — not just shipping features, but building things that are clean, fast, and hold up under real load. I studied at VIT Vellore, picked up a GPA of 8.54, and spent the years since working across the stack at Ericsson, Incedo, and now Sagitec, where I help run systems that 250,000+ people depend on. Outside of work I\'m either clashing, chasing light with a camera, or going deep on something I don\'t fully understand yet.",
};

export const socials: Social[] = [
  { _id: "social-1", title: "GitHub", url: "https://github.com/Devansh-DJ007" },
  { _id: "social-2", title: "LinkedIn", url: "https://www.linkedin.com/in/devansh-jain-b11b9918a" },
  { _id: "social-3", title: "Instagram", url: "https://www.instagram.com/devansh_.dj/" },
  { _id: "social-4", title: "Twitter", url: "https://twitter.com/DevanshDJ2000" },
];

export const experiences: Experience[] = [
  {
    _id: "exp-1",
    company: "Sagitec Solutions",
    image: "/images/experience/sagitec.jfif",
    position: "Software Engineer",
    timeline: "Oct 2024 – Present",
    type: "full-time",
    description:
      "Designing and developing high-performance modules for the TCRS Pension Administration System — a mission-critical platform serving a state-wide user base.",
    highlights: [
      "Built scalable modules for a pension system serving 250,000+ users",
      "Architected RESTful APIs for cross-service integration in a BPM-driven system",
      "Worked on ASP.NET Core Web API with C# in a microservices architecture",
    ],
    skills: ["C#", "ASP.NET Core", "REST APIs", "SQL", "Git"],
  },
  {
    _id: "exp-2",
    company: "Incedo Inc.",
    image: "/images/experience/incedo.png",
    position: "Software Engineer",
    timeline: "Jul 2023 – Sep 2024",
    type: "full-time",
    description:
      "Built a Knowledge Management Portal from the ground up, integrated Azure AD, and managed CI/CD on Linux servers.",
    highlights: [
      "Reduced user search time by 30% via optimised portal architecture",
      "Designed 10+ scalable REST APIs consumed by 3 internal teams",
      "Integrated Azure Active Directory for enterprise SSO",
      "Managed CI/CD pipelines on Linux production servers",
    ],
    skills: ["React.js", "ASP.NET Core", "Azure AD", "Linux", "CI/CD", "Git"],
  },
  {
    _id: "exp-3",
    company: "Ericsson Global",
    image: "/images/experience/ericsson.jpg",
    position: "R&D Intern",
    timeline: "Jan 2023 – Jul 2023",
    type: "internship",
    description:
      "Enhanced telecom dimensioning infrastructure by integrating a custom SMSC Simulator into the test pipeline.",
    highlights: [
      "Achieved 15% increase in message delivery success rate",
      "Cut dimensioning time by 8% through simulator integration",
      "Improved per-test-case efficiency by 5%",
    ],
    skills: ["Java", "Linux", "Shell Scripting", "Git"],
  },
  {
    _id: "exp-4",
    company: "IEEE PCS, VIT Vellore",
    image: "/images/experience/IEEE PCS.png",
    position: "Technical Lead",
    timeline: "Feb 2021 – Jul 2022",
    type: "chapter",
    description:
      "Led technical and editorial initiatives for the IEEE Professional Communication Society chapter at VIT.",
    highlights: [
      "Organised 'Place It' event at Gravitas tech fest",
      "Mentored junior chapter members on technical communication",
      "Coordinated cross-functional teams for events and publications",
    ],
    skills: ["Leadership", "Event Management", "Technical Writing"],
  },
];

// Tech icon map — maps tech name → local SVG/PNG path
export const TECH_ICONS: Record<string, string> = {
  "Next.js":      "/images/skills/nextjs_new.svg",
  "React.js":     "/images/skills/react_new.svg",
  "Tailwind CSS": "/images/skills/tailwind_new.svg",
  "TypeScript":   "/images/skills/typescript_new.svg",
  "JavaScript":   "/images/skills/javascript_new.svg",
  "HTML":         "/images/skills/html_new.svg",
  "CSS":          "/images/skills/css_new.svg",
  "ASP.NET Core": "/images/skills/dotnet_new.svg",
  "Java":         "/images/skills/java_new.svg",
  "Git":          "/images/skills/git_new.svg",
  "Linux":        "/images/skills/linux_new.svg",
  "Bash":         "/images/skills/bash_new.svg",
  "C++":          "/images/skills/cpp_new.svg",
  "Sanity CMS":   "/images/skills/sanity.png",
  "Stripe":       "/images/skills/stripe.svg",
  "Azure Functions": "/images/skills/azure.svg",
  "OpenAI":       "/images/skills/openai.svg",
  "Shadcn/ui":    "/images/skills/reactjs.svg",
  "TMDB API":     "/images/skills/services.svg",
};

export const projects: Project[] = [
  {
    _id: "proj-1",
    title: "Shopify",
    image: "/images/projects/shopify_real.jpg",
    description:
      "Full-stack e-commerce app with real-time Stripe payments, a product carousel, and cart management. Sanity CMS handles inventory — no manual redeploys needed.",
    tech: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Devansh-DJ007",
    live: "https://shopify-beige-mu.vercel.app/",
    featured: true,
  },
  {
    _id: "proj-2",
    title: "StreamScape",
    image: "/images/projects/streamscape_real.jpg",
    description:
      "Movie discovery app powered by TMDB APIs and OpenAI via Azure Functions. Features AI-driven suggestions, fast data caching, and dark mode.",
    tech: ["Next.js", "Shadcn/ui", "TMDB API", "OpenAI", "Azure Functions"],
    github: "https://github.com/Devansh-DJ007",
    live: "https://streamscape.vercel.app/",
    featured: true,
  },
];

export const techCategories: TechCategory[] = [
  {
    _id: "cat-1",
    category: "Frontend",
    items: [
      { _id: "ts-1", title: "React.js", image: "/images/skills/react_new.svg" },
      { _id: "ts-2", title: "Next.js", image: "/images/skills/nextjs_new.svg" },
      { _id: "ts-3", title: "JavaScript", image: "/images/skills/javascript_new.svg" },
      { _id: "ts-4", title: "HTML", image: "/images/skills/html_new.svg" },
      { _id: "ts-5", title: "CSS", image: "/images/skills/css_new.svg" },
      { _id: "ts-6", title: "Tailwind CSS", image: "/images/skills/tailwind_new.svg" },
    ],
  },
  {
    _id: "cat-2",
    category: "Backend",
    items: [
      { _id: "ts-7", title: "ASP.NET Core", image: "/images/skills/dotnet_new.svg" },
      { _id: "ts-8", title: "Java", image: "/images/skills/java_new.svg" },
      { _id: "ts-9", title: "C++", image: "/images/skills/cpp_new.svg" },
      { _id: "ts-10", title: "REST APIs", image: "/images/skills/services.svg" },
    ],
  },
  {
    _id: "cat-3",
    category: "Tools & Infra",
    items: [
      { _id: "ts-11", title: "Git", image: "/images/skills/git_new.svg" },
      { _id: "ts-12", title: "Linux", image: "/images/skills/linux_new.svg" },
      { _id: "ts-13", title: "Bash", image: "/images/skills/bash_new.svg" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    _id: "ach-1",
    title: "Star Award",
    org: "Sagitec Solutions",
    description:
      "Recognised for demonstrating core company values — adapting quickly to new technologies, consistently delivering high-quality results, and fostering a positive and ethical work environment.",
    year: "2025",
    icon: "⭐",
  },
  {
    _id: "ach-2",
    title: "Capstone Project Winner",
    org: "Incedo Inc.",
    description:
      "Led a team of 5 to build InvestEase — an investment portal for portfolio tracking, real-time reporting, and secure transactions. Won the internal Capstone competition company-wide.",
    year: "2024",
    icon: "🏆",
  },
  {
    _id: "ach-3",
    title: "B.Tech — Computer Science",
    org: "VIT Vellore",
    description:
      "Bachelor of Technology in Computer Science and Engineering. GPA: 8.54 / 10.",
    year: "2019 – 2023",
    icon: "🎓",
  },
];

export const photos: Photo[] = [
  { _id: "ph-1", src: "/images/photography/bir.jpg", location: "Bir", rotate: -5 },
  { _id: "ph-2", src: "/images/photography/pune.jpeg", location: "Pune", rotate: 3 },
  { _id: "ph-3", src: "/images/photography/kashmir.jpeg", location: "Kashmir", rotate: -2 },
  { _id: "ph-4", src: "/images/photography/chopta.jpeg", location: "Chopta", rotate: 6 },
  { _id: "ph-5", src: "/images/photography/bombay.jpeg", location: "Bombay", rotate: -4 },
  { _id: "ph-6", src: "/images/photography/shangarh.jpeg", location: "Shangarh", rotate: 2 },
];

export const games: Game[] = [
  {
    _id: "game-1",
    name: "Clash of Clans",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/20/Clash_of_Clans_Loading_Screen.png",
    playerName: "DevanshDJ",
    level: "Town Hall 14",
    stats: [
      { label: "Trophies", value: "4,820" },
      { label: "War Stars", value: "1,240" },
      { label: "Clan", value: "Elite Warriors" },
    ],
    color: "#E8A400",
  },
  {
    _id: "game-2",
    name: "Clash Royale",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Clash_Royale_key_art.jpg",
    playerName: "DevanshDJ",
    level: "King Level 42",
    stats: [
      { label: "Trophies", value: "7,300" },
      { label: "Cards", value: "186 collected" },
      { label: "Win Rate", value: "58%" },
    ],
    color: "#7B4FD4",
  },
  {
    _id: "game-3",
    name: "PUBG Mobile",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/35/PUBG_Mobile_icon.png",
    playerName: "DevanshDJ",
    level: "Platinum III",
    stats: [
      { label: "K/D Ratio", value: "3.8" },
      { label: "Matches", value: "1,450" },
      { label: "Top 10 Rate", value: "72%" },
    ],
    color: "#F5A623",
  },
];
