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
    title: "Modern Loft",
    category: "Residential",
    description: "A stunning transformation of an industrial loft into a modern living space with exposed brick, custom furniture, and ambient lighting.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    client: "Private Client",
    date: "2024",
    location: "New York, NY"
  },
  {
    id: "2",
    title: "Coastal Villa",
    category: "Residential",
    description: "Beach-inspired interior featuring natural textures, ocean-blue accents, and open-concept living areas that blend indoor and outdoor spaces.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    client: "The Morrison Family",
    date: "2024",
    location: "Malibu, CA"
  },
  {
    id: "3",
    title: "Urban Penthouse",
    category: "Residential",
    description: "Luxurious penthouse design with panoramic city views, premium materials, and a seamless flow between entertainment and private spaces.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    client: "Private Client",
    date: "2023",
    location: "Chicago, IL"
  },
  {
    id: "4",
    title: "Classic Residence",
    category: "Residential",
    description: "Timeless elegance meets modern comfort in this traditional home renovation featuring custom millwork and curated art collections.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    client: "The Anderson Family",
    date: "2023",
    location: "Boston, MA"
  },
  {
    id: "5",
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    description: "A welcoming hotel lobby that combines local heritage with contemporary design, creating memorable first impressions for guests.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    client: "Grand Hotels Group",
    date: "2024",
    location: "Miami, FL"
  },
  {
    id: "6",
    title: "Tech Startup Office",
    category: "Commercial",
    description: "Dynamic workspace designed to foster creativity and collaboration, featuring flexible zones and cutting-edge technology integration.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    client: "TechVenture Inc.",
    date: "2024",
    location: "San Francisco, CA"
  },
  {
    id: "7",
    title: "Luxury Spa Resort",
    category: "Hospitality",
    description: "Serene wellness retreat featuring natural materials, calming color palettes, and thoughtfully designed relaxation spaces.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    client: "Serenity Spas",
    date: "2023",
    location: "Sedona, AZ"
  },
  {
    id: "8",
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Sophisticated executive spaces balancing professionalism with comfort, featuring premium finishes and state-of-the-art amenities.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    client: "Global Finance Corp.",
    date: "2024",
    location: "New York, NY"
  },
  {
    id: "9",
    title: "Scandinavian Apartment",
    category: "Residential",
    description: "Minimalist apartment embracing Nordic design principles with light woods, clean lines, and functional beauty.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    client: "Private Client",
    date: "2023",
    location: "Seattle, WA"
  },
  {
    id: "10",
    title: "Restaurant Interior",
    category: "Hospitality",
    description: "Farm-to-table restaurant design featuring rustic elements, warm lighting, and an inviting atmosphere for memorable dining experiences.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    client: "Harvest Kitchen",
    date: "2024",
    location: "Portland, OR"
  },
  {
    id: "11",
    title: "Art Gallery Space",
    category: "Commercial",
    description: "Contemporary gallery with flexible exhibition spaces, perfect lighting systems, and architecture that complements the art.",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80",
    client: "Modern Art Foundation",
    date: "2023",
    location: "Los Angeles, CA"
  },
  {
    id: "12",
    title: "Mountain Retreat",
    category: "Residential",
    description: "Cozy mountain home blending rustic charm with modern amenities, featuring stone fireplaces and panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    client: "Private Client",
    date: "2024",
    location: "Aspen, CO"
  }
]

export const projectCategories = ["All", "Residential", "Commercial", "Hospitality"]
