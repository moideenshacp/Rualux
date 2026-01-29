export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    bio: "With over 20 years of experience in luxury residential design, Alexandra founded Luxe Interiors to bring world-class design to discerning clients.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  },
  {
    id: "2",
    name: "Marcus Williams",
    role: "Senior Interior Designer",
    bio: "Marcus specializes in commercial and hospitality design, bringing spaces to life with his innovative approach to form and function.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    role: "Design Director",
    bio: "Sofia's eye for detail and passion for sustainable design has earned her recognition in leading design publications worldwide.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
  },
  {
    id: "4",
    name: "James Mitchell",
    role: "Project Manager",
    bio: "James ensures every project runs smoothly from concept to completion, coordinating all aspects of the design process with precision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    id: "5",
    name: "Emma Thompson",
    role: "3D Visualization Specialist",
    bio: "Emma creates stunning photorealistic renderings that help clients envision their future spaces before construction begins.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
  {
    id: "6",
    name: "David Park",
    role: "Furniture Procurement Specialist",
    bio: "With connections to artisans and vendors worldwide, David sources unique pieces that bring each design vision to perfect completion.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
  }
]
