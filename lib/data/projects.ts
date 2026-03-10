export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  images?: string[]
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
    images: ["/residentiall/res1.png", "/residentiall/res2.png"],
    date: "2025",
    client: "Client name",
    location: "Kerala"
  },
  {
    id: "2",
    title: "Urban Architectural Manor",
    category: "Residential",
    description: "A sophisticated residence that redefines urban luxury with its striking gable rooflines, expansive windows, and meticulously crafted interiors.",
    image: "/residentiall/res3.png",
    images: ["/residentiall/res3.png", "/residentiall/res4.png", "/residentiall/res6.png"],
    date: "2025",
    client: "Client name",
    location: "Kerala"
  },
  {
    id: "3",
    title: "Grand Neoclassical Mansion",
    category: "Residential",
    description: "A stately estate that embodies timeless grandeur, featuring majestic columns, arched windows, and an imposition of classical architectural beauty.",
    image: "/residentiall/res8.jpeg",
    images: ["/residentiall/res8.jpeg", "/residentiall/res9.jpeg", "/residentiall/res10.jpeg"],
    date: "2025",
    client: "Client name",
    location: "Kerala"
  },
  {
    id: "4",
    title: "Almas Jewellery Showroom",
    category: "Commercial",
    description: "A contemporary commercial space designed for Almas Jewellery, featuring a sophisticated facade with modern architectural elements, warm lighting, and an inviting glass storefront.",
    image: "/commercial/com1.jpeg",
    images: ["/commercial/com1.jpeg", "/commercial/com2.jpeg", "/commercial/com3.jpeg"],
    date: "2025",
    client: "Almas Jewellery",
    location: "Kerala"
  },
]

export const projectCategories = ["All", "Residential", "Commercial", "Interiors"]
