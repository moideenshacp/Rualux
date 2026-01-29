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
    id: "residential",
    title: "Residential Interior Design",
    shortDescription: "Transform your home into a personalized sanctuary that reflects your unique style and enhances daily living.",
    fullDescription: "Our residential design services encompass complete home transformations, from single rooms to entire properties. We work closely with you to understand your lifestyle, preferences, and aspirations, creating spaces that are both beautiful and functional.",
    icon: Home,
    features: [
      "Full home design and renovation",
      "Single room makeovers",
      "Custom kitchen and bathroom design",
      "Bedroom and living space optimization",
      "Home office design"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Interior Design",
    shortDescription: "Create inspiring workspaces that boost productivity, reflect your brand identity, and impress clients.",
    fullDescription: "We design commercial spaces that work as hard as you do. From offices to retail stores, our designs balance aesthetics with functionality, creating environments that enhance productivity and leave lasting impressions on clients and employees alike.",
    icon: Building2,
    features: [
      "Office space planning and design",
      "Retail store design",
      "Restaurant and hospitality spaces",
      "Healthcare facility design",
      "Brand-aligned environments"
    ]
  },
  {
    id: "space-planning",
    title: "Space Planning & Layout",
    shortDescription: "Optimize your space utilization with strategic layouts that maximize functionality and flow.",
    fullDescription: "Effective space planning is the foundation of great design. We analyze your space and needs to create layouts that maximize usability, improve traffic flow, and ensure every square foot serves a purpose.",
    icon: LayoutGrid,
    features: [
      "Traffic flow optimization",
      "Furniture arrangement planning",
      "Storage solutions",
      "Multi-functional space design",
      "Accessibility considerations"
    ]
  },
  {
    id: "3d-visualization",
    title: "3D Rendering & Visualization",
    shortDescription: "See your future space come to life with photorealistic 3D visualizations before construction begins.",
    fullDescription: "Our advanced 3D visualization services let you experience your new space before any work begins. From detailed renderings to virtual walkthroughs, we bring your vision to life with stunning accuracy.",
    icon: Box, // Updated icon to Cube
    features: [
      "Photorealistic 3D renderings",
      "Virtual reality walkthroughs",
      "Multiple design concept comparisons",
      "Material and finish previews",
      "Lighting simulations"
    ]
  },
  {
    id: "furniture-selection",
    title: "Furniture & Decor Selection",
    shortDescription: "Curated furniture and accessories that perfectly complement your space and lifestyle.",
    fullDescription: "We source and select furniture, artwork, and accessories from trusted vendors worldwide. Our extensive network ensures access to unique pieces at various price points, all carefully chosen to bring your design vision to completion.",
    icon: Sofa,
    features: [
      "Custom furniture design",
      "Antique and vintage sourcing",
      "Art and accessory curation",
      "Textile and fabric selection",
      "Vendor coordination and purchasing"
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDescription: "Seamless coordination of all aspects of your design project from concept to completion.",
    fullDescription: "We manage every detail of your project, coordinating with contractors, vendors, and artisans to ensure timely delivery and quality execution. Our comprehensive project management keeps your renovation stress-free and on schedule.",
    icon: ClipboardList,
    features: [
      "Timeline development and tracking",
      "Budget management",
      "Contractor coordination",
      "Quality control inspections",
      "Final installation oversight"
    ]
  },
  {
    id: "renovation-consulting",
    title: "Renovation Consulting",
    shortDescription: "Expert guidance on renovation feasibility, costs, and design possibilities for your property.",
    fullDescription: "Before you begin any renovation, our consulting services help you understand what's possible within your budget and timeline. We provide expert advice on structural changes, permit requirements, and design opportunities.",
    icon: Hammer,
    features: [
      "Feasibility assessments",
      "Budget estimation",
      "Permit guidance",
      "Contractor recommendations",
      "Value engineering"
    ]
  },
  {
    id: "color-consultation",
    title: "Color Consultation",
    shortDescription: "Professional color schemes that set the perfect mood and complement your design aesthetic.",
    fullDescription: "Color has the power to transform a space. Our color consultation services help you select the perfect palette that works with your lighting, furnishings, and personal style to create cohesive, harmonious interiors.",
    icon: Palette,
    features: [
      "Whole-home color schemes",
      "Paint selection assistance",
      "Color psychology guidance",
      "Lighting and color interaction",
      "Sample testing and coordination"
    ]
  }
]
