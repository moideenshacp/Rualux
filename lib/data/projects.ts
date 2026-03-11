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
  area?: string
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
    client: "Mr. Yoosaf kodakkat",
    area: "8000 sqft",
    location: "Kerala"
  },
  {
    id: "2",
    title: "Modern Contemporary Vernacular",
    category: "Residential",
    description: "A sophisticated residence that redefines luxury with its striking gable rooflines, expansive windows, and meticulously crafted interiors.",
    image: "/residentiall/res3.png",
    images: ["/residentiall/res3.png", "/residentiall/res4.png", "/residentiall/res6.png"],
    date: "2025",
    client: "Mr. Muhammed Niyas Thottiyil ",
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
    title: "Geometric and Sleek Facades",
    category: "Commercial",
    description: "A commercial space featuring a sophisticated facade with modern architectural elements, warm lighting, and an inviting glass storefront.",
    image: "/commercial/commercial1.jpeg",
    images: ["/commercial/commercial1.jpeg", "/commercial/commercial2.jpeg", "/commercial/commercial3.jpeg"],
    date: "2025",
    client: "Almas Gold and Diamonds",
    area: "980 sqft",
    location: "Kerala"
  },
  {
    id: "5",
    title: "Modern Two Story",
    category: "Residential",
    description: "A modern two story house featuring a sophisticated facade with modern architectural elements, warm lighting, and an inviting glass storefront.",
    image: "/commercial/commercial5.jpeg",
    date: "2025",
    client: "Mr. Abdul Rasheed Ambalancheeri",
    area: "5600 sqft",
    location: "Kerala"
  },
]

export const projectCategories = ["All", "Residential", "Commercial", "Interiors"]
