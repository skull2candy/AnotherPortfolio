import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Priyanshu Lochab",
  initials: "PL",
  url: "https://priyanshu-kappa.vercel.app/",
  location: "Delhi , IN",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Engineer Turned Forex Trader",
  summary:
    "Passionate about crafting visually appealing web experiences and leveraging data-driven strategies in the financial markets.I combine creativity with analytical thinking to bring innovative solutions to life.",
  avatarUrl: "/20.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "priyanshu456789@gmail.com",
    tel: "+917291090827",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/skull2candy",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-lochab-5a19471b9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PRIYANSHUL52759",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MicroTech Services",
      href: "",
      badges: [],
      location: "Haryana, IN",
      title: "FrontEnd Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2022",
      end: "August 2022",
      description:
        "Developed and optimized user interfaces for web applications, enhancing user experience at MicroTech Services, Haryana, IN.",
    },
  ],
  education: [
    {
      school: "Manav Rachna International University",
      href: "https://manavrachna.edu.in/",
      degree: "Btech. CSE",
      logoUrl: "https://manavrachna.edu.in/assets/images/logo.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Kendriya Vidhyala",
      href: "https://newmehrauliroadjnu.kvs.ac.in/",
      degree: "XIIth",
      logoUrl: "https://newmehrauliroadjnu.kvs.ac.in/sites/all/themes/school/images/kvslogo.jpg",
      start: "2007",
      end: "2019",
    },
 
  ],
  
  projects: [
    {
      title: "Slide Talk",
      href: "https://chatcollect.com",
      dates: "Jan 2023 - June 2023",
      active: true,
      description:
        "**Slide Talk** is a Discord bot that leverages the OpenAI API to help users create presentations directly within their Discord server. By providing a topic, users can generate slides with key points, summaries, and even design elements, making it easy to collaborate and build professional presentations in real time. Perfect for quick brainstorming sessions or collaborative content creation, Slide Talk brings the power of AI to your fingertips, streamlining the presentation-making process.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Magic UI Portfolio",
      href: "https://priyanshu-kappa.vercel.app/about",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "**My Personal Portfolio** is a showcase of my skills and projects, enhanced by the use of Magic UI components. These components provide a sleek, interactive, and visually appealing interface, making the portfolio not just a static collection of work but an engaging experience. Each section is carefully crafted to highlight my expertise, with dynamic animations and intuitive navigation, offering visitors a seamless journey through my professional achievements.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

  hackathons: [
    
  ],
} as const;
