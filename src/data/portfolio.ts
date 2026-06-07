/**
 * Central portfolio data. Supports multiple developers: add more entries to
 * `profiles` and set `currentProfileId` or use URL/selector to switch.
 */
import meetProfileImg from "@/assets/meet-profile.png";

export type SocialLink = { label: string; href: string; icon: string };

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  current: boolean;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  highlights?: string[];
  icon: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  featured: boolean;
  gradient: string;
};

export type Profile = {
  id: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedIn?: string;
  resumePdfUrl?: string;
  profileImage?: string;
  stats: { value: string; label: string }[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  certifications: CertificationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  socialLinks: SocialLink[];
  availability?: string;
  interests?: string[];
  languages?: { name: string; level: string }[];
};

const meetProfile: Profile = {
  id: "meet-shah",
  name: "Meet Shah",
  title: "Software Engineer",
  tagline: "Building Scalable Mobile Experiences",
  bio: "Software Engineer specializing in Flutter, Firebase, and scalable cross-platform applications that reach millions of users across Android & iOS.",
  email: "shahmeet1722@gmail.com",
  phone: "+91 63530 91098",
  location: "Ahmedabad, India",
  linkedIn: "https://linkedin.com/in/-meet-shah",
  resumePdfUrl: "/resume/meet/Meet-Shah-Resume.pdf",
  profileImage: meetProfileImg,
  availability: "Available for opportunities",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "2", label: "App Stores" },
    { value: "100%", label: "Passion" },
  ],
  experiences: [
    {
      role: "Software Engineer",
      company: "Savitriya Technologies",
      period: "01/2023 – Present",
      location: "Ahmedabad, India",
      description:
        "OPS CRM: Developed a responsive Flutter Web application to manage customer service operations for automotive parts and service programs. The system allows users to create and manage service responsibilities (stories), maintain customer profiles, view story history, generate part sales reports, and handle new sales prospects. Implemented using BLoC and Cubit for scalable and maintainable state management. Optimis – Office Management Mobile App: Contributed to the company's internal mobile application for managing attendance, asset tracking, report submission/approval, and project allocation. Developed core modules like Attendance and Assets using Flutter with BLoC/Cubit, ensuring smooth performance and clean architecture. PlanitEasy – Traveler App: Designed and developed a cross-platform travel itinerary application to enhance the traveler experience. Enabled users to access daily itineraries, reservation details, and travel documents shared by their advisors. Delivered a smooth, responsive UI with consistent performance across Android and iOS. Published and currently maintaining the app on both Google Play Store and Apple App Store.",
      tags: ["Flutter", "Dart", "BLoC", "Cubit", "Firebase", "REST APIs", "Play Store", "App Store"],
      current: true,
    },
    {
      role: "Intern – Flutter Developer",
      company: "InfoLabz Pvt. Ltd",
      period: "Internship",
      location: "Ahmedabad, India",
      description:
        "News App: Built a real-time news application using Flutter to fetch and display the latest updates.",
      tags: ["Flutter", "Dart", "REST APIs"],
      current: false,
    },
  ],
  educations: [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Ahmedabad Institute of Technology",
      period: "07/2020 – 04/2023",
      icon: "🎓",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Swarrnim Startup & Innovation University",
      period: "07/2017 – 04/2020",
      icon: "📚",
    },
  ],
  certifications: [
    {
      name: "Google Prompting Essentials",
      issuer: "Google",
      year: "2024",
      icon: "🏆",
    },
  ],
  skillCategories: [
    {
      title: "Mobile & Cross-Platform",
      icon: "📱",
      skills: ["Flutter", "Dart", "Android", "iOS", "Cross-Platform App Development"],
    },
    {
      title: "State Management",
      icon: "⚙️",
      skills: ["BLoC", "Cubit", "State Management", "Clean Architecture"],
    },
    {
      title: "Backend & Services",
      icon: "🔥",
      skills: ["Firebase", "Firestore", "Firebase Auth", "Firebase Realtime Database", "REST APIs"],
    },
    {
      title: "Languages",
      icon: "💻",
      skills: ["Dart", "Java", "Kotlin", "Swift"],
    },
    {
      title: "Development Practices",
      icon: "🛠️",
      skills: ["UI/UX Development", "Problem Solving & Debugging", "Agile Development", "Responsive UI"],
    },
  ],
  projects: [
    {
      title: "Karmas",
      description:
        "A dedicated platform shaping a brighter tomorrow. Currently in active development and live on the Google Play Store. A community platform built with Flutter for Android.",
      tags: ["Flutter", "Android", "Live App", "Community Platform", "Play Store"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-primary/20 to-cyan-500/10",
    },
    {
      title: "Karmas Chat Module",
      description:
        "A dedicated real-time chat module created for the Karmas platform, enabling seamless community communication and messaging.",
      tags: ["Flutter", "Realtime", "Android", "Real-time Messaging", "Community"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-violet-500/20 to-primary/10",
    },
    {
      title: "PlanitEasy – Traveler App",
      description:
        "Cross-platform travel itinerary application that enhances the traveler experience. Users can access daily itineraries, reservation details, and travel documents shared by their advisors. Published and actively maintained on both Google Play Store and Apple App Store.",
      tags: ["Flutter", "Dart", "BLoC", "iOS", "Android", "Play Store", "App Store"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-primary/20 to-cyan-500/10",
    },
    {
      title: "OPS CRM – Automotive Service Management",
      description:
        "Responsive Flutter Web application for managing customer service operations for automotive parts and service programs. Features include service responsibility management, customer profiles, story history, part sales reports, and new sales prospects. Built with BLoC/Cubit for scalable state management.",
      tags: ["Flutter Web", "Dart", "BLoC", "Cubit", "REST APIs"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-violet-500/20 to-primary/10",
    },
    {
      title: "Optimis – Office Management App",
      description:
        "Internal mobile application for managing attendance, asset tracking, report submission/approval, and project allocation. Developed core modules using Flutter with BLoC/Cubit, ensuring smooth performance and clean architecture.",
      tags: ["Flutter", "Dart", "BLoC", "Cubit", "Mobile"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-amber-500/20 to-primary/10",
    },
    {
      title: "IPO Tracker",
      description:
        "Mobile app using Flutter to display upcoming, current, and past IPOs with detailed information. Users can view IPO dates, company details, issue price, status, and key fundamental data in an organized format.",
      tags: ["Flutter", "Dart", "REST APIs"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-rose-500/20 to-primary/10",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time chat application using Flutter and Firebase Realtime Database. Enabled instant messaging, user authentication, and seamless UI for smooth communication.",
      tags: ["Flutter", "Dart", "Firebase", "Realtime Database", "Auth"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-green-500/20 to-primary/10",
    },
    {
      title: "Canteen Food Ordering",
      description:
        "Online food ordering system enabling end users to register, browse an e-menu card, and order food online. Streamlines canteen operations with a digital ordering flow.",
      tags: ["Flutter", "Dart", "Firebase"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-blue-500/20 to-primary/10",
    },
    {
      title: "News App",
      description:
        "Real-time news application built using Flutter to fetch and display the latest news updates. Developed during internship at InfoLabz Pvt. Ltd.",
      tags: ["Flutter", "Dart", "REST APIs", "News API"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "from-indigo-500/20 to-primary/10",
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/-meet-shah", icon: "💼" },
    { label: "Email", href: "mailto:shahmeet1722@gmail.com", icon: "✉️" },
  ],
  interests: ["Coding", "Volley Ball", "Basket Ball"],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "Gujarati", level: "Full Professional Proficiency" },
  ],
};

/** Single-developer build: only Meet's profile is exported. */
export const profiles: Profile[] = [meetProfile];
export const currentProfileId = "meet-shah";

export function getCurrentProfile(): Profile {
  return meetProfile;
}

export function getProfileById(id: string): Profile | undefined {
  return id === "meet-shah" ? meetProfile : undefined;
}
