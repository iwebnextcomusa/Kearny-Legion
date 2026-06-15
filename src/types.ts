export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "community" | "veteran" | "youth" | "fundraiser";
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
}

export interface LeaderOfficer {
  name: string;
  role: string;
  serviceBranch?: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  url: string;
  category: "community" | "ceremony" | "募款" | "outreach" | "all";
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
