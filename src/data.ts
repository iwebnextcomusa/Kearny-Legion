import { EventItem, NewsPost, LeaderOfficer } from "./types";

export const LEADER_OFFICERS: LeaderOfficer[] = [
  {
    name: "Ramon Rivera",
    role: "Post Commander",
    serviceBranch: "U.S. Army Veteran",
    bio: "Serving Kearny and fellow veterans with honor. Ramon coordinates community partnerships and leads local advocacy efforts.",
    image: "🎖️"
  },
  {
    name: "Thomas O'Connor",
    role: "Vice Commander",
    serviceBranch: "U.S. Navy Vet",
    bio: "Dedicated to membership growth and organizing flag services. Thomas ensures our historic post traditions are well maintained.",
    image: "🧭"
  },
  {
    name: "Marisol Henderson",
    role: "Adjutant & Service Officer",
    serviceBranch: "U.S. Air Force Retired",
    bio: "Assists veterans in navigate free benefit claims, medical services, and counseling. Marisol keeps the administrative gears turning.",
    image: "📋"
  },
  {
    name: "David Vance",
    role: "Finance Officer",
    serviceBranch: "U.S. Marine Corps Veteran",
    bio: "Guarantees full transparency of donations, organizing veteran relief funds and educational scholarships.",
    image: "⚓"
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Monthly Post Meeting & Dinner",
    date: "2026-07-08",
    time: "7:00 PM - 9:00 PM",
    location: "Kearny Legion Memorial Hall",
    description: "Connect with fellow veterans, discuss upcoming service programs, and join us for a complimentary post-meeting family dinner.",
    category: "community"
  },
  {
    id: "e2",
    title: "Veterans VA Claims & Welfare Workshop",
    date: "2026-07-15",
    time: "10:00 AM - 2:00 PM",
    location: "Kearny Legion Vet Center",
    description: "Get free personalized assistance from certified VSO Service Officers to file or appeal VA disability claims, pensions, and healthcare records.",
    category: "veteran"
  },
  {
    id: "e3",
    title: "Youth Americanism Scholarship Ceremony",
    date: "2026-08-02",
    time: "5:00 PM - 7:30 PM",
    location: "Kearny Public Auditorium",
    description: "Celebrating local scholarship essay winners and announcing Jersey Boys State sponsorships for future community leaders.",
    category: "youth"
  },
  {
    id: "e4",
    title: "Annual Veteran Relief Fundraiser BBQ",
    date: "2026-08-22",
    time: "12:00 PM - 5:00 PM",
    location: "Rowland Memorial Park",
    description: "Join our local community for local BBQ, live music, and family games. 100% of proceeds go directly to supporting local servicemembers in crisis.",
    category: "fundraiser"
  },
  {
    id: "e5",
    title: "Kearny Memorial Day Parade Assembly",
    date: "2026-09-07",
    time: "9:00 AM - 1:00 PM",
    location: "Kearny Town Hall Plaza",
    description: "March with the Legion color guard and veterans. Honoring all fallen comrades of Jersey and New Hudson county.",
    category: "community"
  }
];

export const NEWS_POSTS: NewsPost[] = [
  {
    id: "n1",
    title: "Kearny Legion Expands Free Mental Health and Peer Counseling Programs",
    date: "June 12, 2026",
    excerpt: "In partnership with local mental health networks, our post is introducing bi-weekly peer counseling circles for veterans returning from deployment.",
    content: "The Kearny American Legion Post has proudly partnered with local counseling professionals to expand our free peer support services. Meeting every other Thursday, safe spaces are made available for veterans to talk about transitions, PTSD, and life struggles. No registrations required, veterans eat and commune together.",
    category: "Resource",
    author: "Ramon Rivera"
  },
  {
    id: "n2",
    title: "Jersey Boys State Selection Announced for Local Kearny Students",
    date: "May 28, 2026",
    excerpt: "Three outstanding local high school juniors have been sponsored by our Legion to attend the prestigious leadership camp this summer.",
    content: "Continuing our century-long tradition of civic engagement, Kearny Legion has fully sponsored three outstanding students from Kearny High School to participate in the American Legion Boys State Program. Here, they will experience full hands-on simulations of local and state governance structures, building key civil values.",
    category: "Youth Program",
    author: "Thomas O'Connor"
  },
  {
    id: "n3",
    title: "Veterans PACT Act Enrollment In Hudson County Guide",
    date: "April 15, 2026",
    excerpt: "Important updates on benefit eligibility for toxic exposure under the federal PACT Act. Get guided filing help at our veteran workshop.",
    content: "Many veterans are unaware they qualify for new, increased disability and health compensation for toxic exposures under recent federal PACT Act extensions. Our Post Service Officers are trained and equipped to help local Kearny and Harrison veterans file applications with zero fees.",
    category: "VA Benefits",
    author: "Marisol Henderson"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    title: "Color Guard at Kearny Veterans Day Memorial",
    category: "ceremony" as const,
    description: "Our historic Color Guard leading the state flag protocol at the town memorial plaza.",
    icon: "🇺🇸"
  },
  {
    id: "g2",
    title: "Community Outreach & Food Drive",
    category: "community" as const,
    description: "Kearny Legion officers distributing meals to homebound elderly veterans and local families.",
    icon: "🍎"
  },
  {
    id: "g3",
    title: "Annual Boys State Sponsorship Workshop",
    category: "outreach" as const,
    description: "Legion leaders advising brilliant local high school delegates on civic leadership principles.",
    icon: "🎓"
  },
  {
    id: "g4",
    title: "Post Veteran Day Breakfast Reunion",
    category: "ceremony" as const,
    description: "Welcoming generations of military veterans for our annual appreciation morning breakfast.",
    icon: "🍳"
  },
  {
    id: "g5",
    title: "Kearny Youth Scout Troop Sponsorship",
    category: "community" as const,
    description: "Joint ceremony with Jersey Boy Scouts installing our post's flag retirement station.",
    icon: "🏕️"
  },
  {
    id: "g6",
    title: "Kearny Legion Benefit Golf Outing",
    category: "outreach" as const,
    description: "Outstanding fundraiser event supporting veteran medical support and emergency housing programs.",
    icon: "⛳"
  }
];
