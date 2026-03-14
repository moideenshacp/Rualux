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
    title: "Grand Neoclassical Mansion",
    category: "Residential",
    description: "A stately estate that embodies timeless grandeur, featuring majestic columns, arched windows, and an imposition of classical architectural beauty.",
    image: "/residentiall/res8.jpeg",
    images: ["/residentiall/res8.jpeg", "/residentiall/res9.jpeg", "/residentiall/res10.jpeg"],
    date: "2025",
    client: "Mr. Shafi",
    area: "7200 sqft",
    location: "Kerala"
  },
  {
    id: "3",
    title: "Neo Classical Mansion",
    category: "Residential",
    description: "A stunning white two-story residence that exemplifies neoclassical architectural beauty. The design features a grand pillared portico, expansive balconies, and a meticulously landscaped yard with palm trees.",
    image: "/residentiall/fathah/fr1.jpeg",
    images: ["/residentiall/fathah/fr1.jpeg", "/residentiall/fathah/fr2.jpeg", "/residentiall/fathah/fr3.jpeg", "/residentiall/fathah/fr4.jpeg", "/residentiall/fathah/fr5.jpeg", "/residentiall/fathah/fr6.jpeg"],
    date: "2025",
    client: "Mr. Abdul Fathah Anchalan",
    area: "5800 sqft",
    location: "Kerala"
  },
  {
    id: "4",
    title: "Modern Two Story",
    category: "Residential",
    description: "A modern two story house featuring a sophisticated facade with modern architectural elements, warm lighting, and an inviting glass storefront.",
    image: "/residentiall/res11.jpeg",
    date: "2025",
    client: "Mr. Abdul Rasheed Ambalancheeri",
    area: "5600 sqft",
    location: "Kerala"
  },

  {
    id: "5",
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
    id: "6",
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
    id: "7",
    title: "Modern Contemporary Vernacular",
    category: "Interiors",
    description: "A sophisticated residence that redefines luxury with its striking gable rooflines, expansive windows, and meticulously crafted interiors.",
    image: "/interiors/niyas/1.jpeg",
    images: ["/interiors/niyas/1.jpeg", "/interiors/niyas/2.jpeg", "/interiors/niyas/3.jpeg"],
    date: "2025",
    client: "Mr. Muhammed Niyas Thottiyil ",
    location: "Kerala"
  },
  {
    id: "8",
    title: "Modernist Geometric Villa",
    category: "Interiors",
    description: "A bold architectural statement featuring clean geometric lines, floor-to-ceiling glass, and a seamless integration of indoor and outdoor living.",
    image: "/interiors/yoosuf/y1.jpeg",
    images: ["/interiors/yoosuf/y1.jpeg", "/interiors/yoosuf/y2.jpeg", "/interiors/yoosuf/y3.jpeg"],
    date: "2025",
    client: "Mr. Yoosaf kodakkat",
    location: "Kerala"
  },
  {
    id: "9",
    title: "Neo Classical Mansion",
    category: "Interiors",
    description: "A stunning white two-story residence that exemplifies neoclassical architectural beauty. The design features a grand pillared portico, expansive balconies, and a meticulously landscaped yard with palm trees.",
    image: "/interiors/fathah/f4.jpeg",
    images: ["/interiors/fathah/f4.jpeg", "/interiors/fathah/f5.jpeg", "/interiors/fathah/f6.jpeg", "/interiors/fathah/f1.jpeg", "/interiors/fathah/f2.jpeg", "/interiors/fathah/f3.jpeg"],
    date: "2025",
    client: "Mr. Abdul Fathah Anchalan",
    location: "Kerala"
  },
  {
    id: "10",
    title: "Modern Office",
    category: "Interiors",
    description: "A modern office space featuring a sophisticated facade with modern architectural elements, warm lighting, and an inviting glass storefront.",
    image: "/interiors/rualux/r1.jpeg",
    images: ["/interiors/rualux/r1.jpeg", "/interiors/rualux/r2.jpeg", "/interiors/rualux/r3.jpeg", "/interiors/rualux/r4.jpeg", "/interiors/rualux/r5.jpeg"],
    date: "2025",
    client: "Rualux",
    location: "Kerala"
  },

]

export const projectCategories = ["All", "Residential", "Commercial", "Interiors"]
