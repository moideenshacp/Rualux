export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  client?: string
  date?: string
  location?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Modernist Geometric Villa",
    category: "Residential",
    description: "A bold architectural statement featuring clean geometric lines, floor-to-ceiling glass, and a seamless integration of indoor and outdoor living.",
    image: "/residentiall/res1.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "2",
    title: "Tropical Contemporary Retreat",
    category: "Residential",
    description: "Nestled amidst lush greenery, this multi-level contemporary home combines organic materials with sleek modern design for a serene living experience.",
    image: "/residentiall/res2.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "3",
    title: "Urban Architectural Manor",
    category: "Residential",
    description: "A sophisticated residence that redefines urban luxury with its striking gable rooflines, expansive windows, and meticulously crafted interiors.",
    image: "/residentiall/res3.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "4",
    title: "Luminous Modern Estate",
    category: "Residential",
    description: "An elegant family home designed to capture natural light, featuring open-plan spaces and a timeless aesthetic that glows with warmth at dusk.",
    image: "/residentiall/res4.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "5",
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    description: "A welcoming hotel lobby that combines local heritage with contemporary design, creating memorable first impressions for guests.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "6",
    title: "Tech Startup Office",
    category: "Commercial",
    description: "Dynamic workspace designed to foster creativity and collaboration, featuring flexible zones and cutting-edge technology integration.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "7",
    title: "Luxury Spa Resort",
    category: "Hospitality",
    description: "Serene wellness retreat featuring natural materials, calming color palettes, and thoughtfully designed relaxation spaces.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "8",
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Sophisticated executive spaces balancing professionalism with comfort, featuring premium finishes and state-of-the-art amenities.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "9",
    title: "Serene Minimalist Interior",
    category: "Residential",
    description: "A masterclass in restraint, this dining space focuses on pure forms, natural textures, and a calming palette to create an atmosphere of refined tranquility.",
    image: "/residentiall/res5.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "10",
    title: "Restaurant Interior",
    category: "Hospitality",
    description: "Farm-to-table restaurant design featuring rustic elements, warm lighting, and an inviting atmosphere for memorable dining experiences.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "11",
    title: "Art Gallery Space",
    category: "Commercial",
    description: "Contemporary gallery with flexible exhibition spaces, perfect lighting systems, and architecture that complements the art.",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "12",
    title: "Nocturnal Elegance Residence",
    category: "Residential",
    description: "A stunning architectural display that comes alive at night, with strategic lighting highlighting its sophisticated layers and premium finishes.",
    image: "/residentiall/res6.png",
    date: "2026",
    location: "Kerala"
  },
  {
    id: "13",
    title: "Refined Suburban Sanctuary",
    category: "Residential",
    description: "Combining architectural precision with the comfort of home, this sanctuary offers a perfect balance of privacy, space, and modern luxury.",
    image: "/residentiall/res7.png",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "14",
    title: "Grand Neoclassical Mansion",
    category: "Residential",
    description: "A stately estate that embodies timeless grandeur, featuring majestic columns, arched windows, and an imposition of classical architectural beauty.",
    image: "/residentiall/res8.jpeg",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "15",
    title: "Stately Palatial Villa",
    category: "Residential",
    description: "Exuding opulence and architectural pedigree, this palatial villa stands as a monument to refined living and classical design excellence.",
    image: "/residentiall/res9.jpeg",
    date: "2025",
    location: "Kerala"
  },
  {
    id: "16",
    title: "Imperial Living Grounds",
    category: "Residential",
    description: "The pinnacle of architectural luxury, this expansive estate offers a regal living experience with its grand facade and meticulously designed grounds.",
    image: "/residentiall/res10.jpeg",
    date: "2025",
    location: "Kerala"
  }
]

export const projectCategories = ["All", "Residential", "Commercial", "Interiors"]
