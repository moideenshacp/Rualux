import {
  Home,
  Building2,
  LayoutGrid,
  Sofa,
  ClipboardList,
  Hammer,
  Palette,
  Box // Added Cube import
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: "consultancy",
    title: "Consultancy",
    shortDescription: "We provide expert consultancy across design, feasibility, and execution—ensuring every choice aligns with vision, budget, and long-term value.",
    fullDescription: "We provide expert consultancy across design, feasibility, and execution—ensuring every choice aligns with vision, budget, and long-term value. Our team works as your strategic partner to navigate the complexities of design and build.",
    icon: ClipboardList,
    features: [
      "Design feasibility studies",
      "Budget and value engineering",
      "Execution strategy and oversight",
      "Material and vendor consultancy",
      "Long-term property value planning"
    ]
  },
  {
    id: "visualisation",
    title: "Visualisation",
    shortDescription: "Design clarity through high-end visual storytelling. Our photorealistic visuals translate concepts into compelling experiences—allowing clients to see, feel, and trust the design before it’s built.",
    fullDescription: "Design clarity through high-end visual storytelling. Our photorealistic visuals translate concepts into compelling experiences—allowing clients to see, feel, and trust the design before it’s built. We bridge the gap between imagination and reality.",
    icon: Box,
    features: [
      "Photorealistic 3D rendering",
      "Immersive virtual walkthroughs",
      "Material and finish visualization",
      "Lighting and shadow simulations",
      "Conceptual design storytelling"
    ]
  },
  {
    id: "architecture",
    title: "Architecture",
    shortDescription: "Timeless architecture shaped by purpose and precision. We design spaces that balance form, function, and emotion—rooted in context, climate, and craftsmanship.",
    fullDescription: "Timeless architecture shaped by purpose and precision. We design spaces that balance form, function, and emotion—rooted in context, climate, and craftsmanship. Every structure is conceived to be an enduring reflection of its purpose and its environment.",
    icon: Building2,
    features: [
      "Sustainable architectural design",
      "Context-aware spatial planning",
      "Structural integrity and aesthetics",
      "Climate-responsive solutions",
      "Bespoke construction documentation"
    ]
  },
  {
    id: "interior-exterior",
    title: "Interior And Exterior",
    shortDescription: "Interiors that express identity, comfort, and refined living blend seamlessly with exteriors that define character and presence. Through thoughtful use of materiality, light, spatial flow.",
    fullDescription: "Interiors that express identity, comfort, and refined living blend seamlessly with exteriors that define character and presence. Through thoughtful use of materiality, light, and spatial flow, our designs are crafted to resonate with their surroundings and the people who inhabit them.",
    icon: Home,
    features: [
      "Bespoke interior curation",
      "Facade and exterior styling",
      "Materiality and lighting design",
      "Seamless indoor-outdoor flow",
      "Identity-driven design concepts"
    ]
  },
  {
    id: "landscape",
    title: "Landscape",
    shortDescription: "Outdoor environments designed to breathe, flow, and belong. We shape landscapes that complement architecture—harmonizing nature, movement, and serenity while enhancing long-term value and aesthetics.",
    fullDescription: "Outdoor environments designed to breathe, flow, and belong. We shape landscapes that complement architecture—harmonizing nature, movement, and serenity while enhancing long-term value and aesthetics. Our landscapes are living extensions of the home.",
    icon: LayoutGrid,
    features: [
      "Eco-conscious garden design",
      "Hardscape and softscape balance",
      "Functional outdoor living spaces",
      "Native plant palette selection",
      "Sustainable drainage and irrigation"
    ]
  }
]
