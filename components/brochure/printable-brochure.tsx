"use client"

import Image from "next/image"
import Link from "next/link"
import { Printer, ArrowLeft } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"

/* ─── Decorative SVG icons for services ─── */
const ServiceIcon = ({ index }: { index: number }) => {
    const icons = [
        // Consultancy - clipboard
        <svg key="0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <rect x="14" y="8" width="36" height="48" rx="3" />
            <path d="M24 8V4h16v4" />
            <line x1="22" y1="22" x2="42" y2="22" />
            <line x1="22" y1="30" x2="42" y2="30" />
            <line x1="22" y1="38" x2="34" y2="38" />
        </svg>,
        // Visualisation - 3D cube
        <svg key="1" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M32 4L58 18V46L32 60L6 46V18L32 4Z" />
            <path d="M32 28L58 18" />
            <path d="M32 28L6 18" />
            <path d="M32 28V60" />
        </svg>,
        // Architecture - building
        <svg key="2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <rect x="8" y="20" width="48" height="40" />
            <path d="M32 4L56 20H8L32 4Z" />
            <rect x="18" y="30" width="8" height="10" />
            <rect x="38" y="30" width="8" height="10" />
            <rect x="26" y="44" width="12" height="16" />
        </svg>,
        // Interior & Exterior - home
        <svg key="3" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M8 32L32 12L56 32" />
            <path d="M14 28V56H50V28" />
            <rect x="26" y="38" width="12" height="18" />
            <path d="M20 36h8v8h-8z" />
            <path d="M36 36h8v8h-8z" />
        </svg>,
        // Landscape - tree
        <svg key="4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <circle cx="32" cy="24" r="14" />
            <line x1="32" y1="38" x2="32" y2="58" />
            <path d="M24 58h16" />
            <path d="M26 44L18 38" />
            <path d="M38 44L46 38" />
        </svg>,
    ]
    return icons[index] || icons[0]
}

/* ─── Small decorative diamond ─── */
const Diamond = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 12 12" className={`w-3 h-3 ${className}`} fill="currentColor">
        <path d="M6 0L12 6L6 12L0 6Z" />
    </svg>
)

export function PrintableBrochure() {
    const handlePrint = () => {
        window.print()
    }

    const cormorant = { fontFamily: "var(--font-cormorant), serif" }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-0 md:p-10 font-sans antialiased print:p-0 print:bg-white" style={{ fontFamily: "var(--font-urbanist), sans-serif" }}>
            {/* ── Controls (print-hidden) ── */}
            <div className="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
                <Button asChild variant="outline" className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Site
                    </Link>
                </Button>
                <Button onClick={handlePrint} className="rounded-full bg-[#B49664] text-white hover:bg-[#B49664]/90 shadow-lg shadow-[#B49664]/20">
                    <Printer className="mr-2 h-4 w-4" />
                    Download PDF
                </Button>
            </div>

            {/* ─────────────── BROCHURE PAGES ─────────────── */}
            <div className="brochure-wrapper mx-auto print:max-w-none print:shadow-none">

                {/* ═══════════ PAGE 1 — COVER ═══════════ */}
                <div className="brochure-page bg-black relative overflow-hidden break-after-page">
                    {/* Background hero image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/residentiall/res1.png"
                            alt="Luxury Interior"
                            fill
                            priority
                            className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/80" />
                    </div>

                    {/* Gold decorative top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#B49664] to-transparent z-10" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-16">
                        {/* Logo */}
                        <div className="mb-6">
                            <Image src="/Rualux-logo.png" alt="Rualux" width={220} height={80} className="mx-auto brightness-0 invert" />
                        </div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px w-16 bg-[#B49664]" />
                            <Diamond className="text-[#B49664]" />
                            <div className="h-px w-16 bg-[#B49664]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-light tracking-[0.25em] uppercase mb-4" style={cormorant}>
                            Design & Build
                        </h1>
                        <p className="text-sm uppercase tracking-[0.5em] text-white/50 font-light">
                            Architecture • Interiors • Lifestyle
                        </p>
                    </div>

                    {/* Bottom gold bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#B49664] to-transparent z-10" />
                    <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
                        <span className="text-[9px] uppercase tracking-[0.6em] text-white/30">2025 Edition</span>
                    </div>
                </div>

                {/* ═══════════ PAGE 2 — ABOUT US (Two-panel spread) ═══════════ */}
                <div className="brochure-page bg-[#111] relative overflow-hidden break-after-page">
                    <div className="h-full grid grid-cols-1 md:grid-cols-2">
                        {/* Left panel — Dark */}
                        <div className="bg-[#111] p-12 md:p-16 flex flex-col justify-center relative">
                            {/* Decorative corner */}
                            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#B49664]/30" />

                            <div className="flex items-center gap-3 mb-8">
                                <Diamond className="text-[#B49664]" />
                                <span className="text-xs uppercase tracking-[0.4em] text-[#B49664] font-semibold">About Us</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight text-white" style={cormorant}>
                                Who We Are
                            </h2>

                            <div className="space-y-6 text-white/60 leading-relaxed text-[15px] font-light">
                                <p>
                                    Rualux is a premium interior design studio specialising in high-end residential and commercial environments, delivering spaces of exceptional refinement and enduring elegance.
                                </p>
                                <p>
                                    We craft interiors defined by elevated materiality, measured luxury, and architectural precision—creating environments that feel both artfully composed and intuitively functional.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                                <div>
                                    <p className="text-4xl font-light text-[#B49664]" style={cormorant}>150<span className="text-2xl">+</span></p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Properties Delivered</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-light text-[#B49664]" style={cormorant}>12<span className="text-2xl">+</span></p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-light text-[#B49664]" style={cormorant}>69<span className="text-2xl">+</span></p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Clients Served</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-light text-[#B49664]" style={cormorant}>4.9</p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Rating Out Of 5.0</p>
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#B49664]/30" />
                        </div>

                        {/* Right panel — Image */}
                        <div className="relative min-h-[300px] md:min-h-0">
                            <Image
                                src="/residentiall/res3.png"
                                alt="Design Excellence"
                                fill
                                className="object-cover"
                            />
                            {/* Gold corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24">
                                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-[#B49664]/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-24 h-24">
                                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-tr from-[#B49664]/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════ PAGE 3 — MISSION / VISION (Two-panel) ═══════════ */}
                <div className="brochure-page bg-[#0d0d0d] relative overflow-hidden break-after-page">
                    <div className="h-full grid grid-cols-1 md:grid-cols-2">
                        {/* Left — Mission */}
                        <div className="bg-[#111] p-12 md:p-16 flex flex-col justify-center relative border-r border-white/5">
                            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#B49664]/20" />

                            <div className="flex items-center gap-3 mb-6">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#B49664]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 21L12 3L21 21H3Z" />
                                </svg>
                                <span className="text-xs uppercase tracking-[0.4em] text-[#B49664]">Our Mission</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white italic" style={cormorant}>
                                Mission
                            </h2>

                            <p className="text-white/50 leading-relaxed text-[15px] font-light mb-8">
                                To deliver design excellence that transcends the ordinary—creating spaces where every detail serves both beauty and purpose, where craftsmanship meets innovation.
                            </p>

                            <div className="h-px w-full bg-white/10 my-8" />

                            <div className="flex items-center gap-3 mb-6">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#B49664]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                                <span className="text-xs uppercase tracking-[0.4em] text-[#B49664]">Our Vision</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white italic" style={cormorant}>
                                Vision
                            </h2>

                            <p className="text-white/50 leading-relaxed text-[15px] font-light">
                                To be recognised as a leading force in architectural design—setting new standards for refined living and redefining the relationship between space, light, and human experience.
                            </p>

                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#B49664]/20" />
                        </div>

                        {/* Right — Showcase image */}
                        <div className="relative min-h-[300px] md:min-h-0">
                            <Image
                                src="/residentiall/res8.jpeg"
                                alt="Vision"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0d0d0d]/40" />
                        </div>
                    </div>
                </div>

                {/* ═══════════ PAGE 4 — SERVICES TITLE (Gold spread) ═══════════ */}
                <div className="brochure-page relative overflow-hidden break-after-page">
                    <div className="h-full grid grid-cols-1 md:grid-cols-2">
                        {/* Left — Dark with services intro */}
                        <div className="bg-[#111] p-12 md:p-16 flex flex-col justify-center items-center text-center relative">
                            <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#B49664]/20" />
                            <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#B49664]/20" />

                            {/* Service icons grid */}
                            <div className="grid grid-cols-3 gap-6 mb-12 max-w-xs">
                                {services.map((_, idx) => (
                                    <div key={idx} className="w-16 h-16 mx-auto text-[#B49664]/60">
                                        <ServiceIcon index={idx} />
                                    </div>
                                ))}
                            </div>

                            <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-light italic" style={cormorant}>
                                &quot;Excellence in every dimension&quot;
                            </p>
                        </div>

                        {/* Right — Gold panel */}
                        <div className="bg-[#B49664] p-12 md:p-16 flex flex-col justify-center items-center text-center relative">
                            <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-black/10" />
                            <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-black/10" />

                            <Diamond className="text-black/20 mb-8 !w-5 !h-5" />

                            <h2 className="text-5xl md:text-6xl font-light text-black/80 uppercase tracking-[0.15em] mb-4" style={cormorant}>
                                Our Services
                            </h2>
                            <div className="h-px w-20 bg-black/20 mb-6" />
                            <p className="text-black/50 text-sm uppercase tracking-[0.3em]">What We Offer</p>
                        </div>
                    </div>
                </div>

                {/* ═══════════ PAGE 5 & 6 — SERVICES DETAIL ═══════════ */}
                {/* Services spread 1 (first 2-3 services) */}
                <div className="brochure-page bg-[#111] relative overflow-hidden break-after-page">
                    <div className="h-full p-12 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                            {services.slice(0, 2).map((service, idx) => (
                                <div key={service.id} className="flex flex-col justify-center relative">
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className="w-12 h-12 text-[#B49664] shrink-0 mt-1">
                                            <ServiceIcon index={idx} />
                                        </div>
                                        <div>
                                            <span className="text-[#B49664] text-sm uppercase tracking-[0.3em] mb-2 block">0{idx + 1}</span>
                                            <h3 className="text-2xl font-light uppercase tracking-[0.15em] text-white" style={cormorant}>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="h-px w-full bg-[#B49664]/20 mb-6" />
                                    <p className="text-white/50 font-light leading-relaxed text-[14px] mb-6">
                                        {service.shortDescription}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="text-[12px] text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                                                <Diamond className="text-[#B49664]/50 !w-2 !h-2 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services spread 2 (remaining services) */}
                <div className="brochure-page bg-[#111] relative overflow-hidden break-after-page">
                    <div className="h-full p-12 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                            {services.slice(2, 4).map((service, idx) => (
                                <div key={service.id} className="flex flex-col justify-center relative">
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className="w-12 h-12 text-[#B49664] shrink-0 mt-1">
                                            <ServiceIcon index={idx + 2} />
                                        </div>
                                        <div>
                                            <span className="text-[#B49664] text-sm uppercase tracking-[0.3em] mb-2 block">0{idx + 3}</span>
                                            <h3 className="text-2xl font-light uppercase tracking-[0.15em] text-white" style={cormorant}>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="h-px w-full bg-[#B49664]/20 mb-6" />
                                    <p className="text-white/50 font-light leading-relaxed text-[14px] mb-6">
                                        {service.shortDescription}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="text-[12px] text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                                                <Diamond className="text-[#B49664]/50 !w-2 !h-2 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Last service centered if odd count */}
                        {services.length > 4 && (
                            <div className="mt-12 max-w-xl mx-auto">
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="w-12 h-12 text-[#B49664] shrink-0 mt-1">
                                        <ServiceIcon index={4} />
                                    </div>
                                    <div>
                                        <span className="text-[#B49664] text-sm uppercase tracking-[0.3em] mb-2 block">05</span>
                                        <h3 className="text-2xl font-light uppercase tracking-[0.15em] text-white" style={cormorant}>
                                            {services[4].title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-[#B49664]/20 mb-6" />
                                <p className="text-white/50 font-light leading-relaxed text-[14px] mb-6">
                                    {services[4].shortDescription}
                                </p>
                                <ul className="space-y-3">
                                    {services[4].features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-[12px] text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                                            <Diamond className="text-[#B49664]/50 !w-2 !h-2 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* ═══════════ PROJECT PAGES — Each project gets its own spread ═══════════ */}
                {projects.map((project, idx) => (
                    <div key={project.id} className="brochure-page bg-[#0d0d0d] relative overflow-hidden break-after-page">
                        <div className="h-full grid grid-cols-1 md:grid-cols-2">
                            {/* Image side */}
                            <div className={`relative min-h-[300px] md:min-h-0 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Gold corner frame */}
                                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#B49664]/50" />
                                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#B49664]/50" />
                            </div>

                            {/* Info side */}
                            <div className={`bg-[#111] p-12 md:p-16 flex flex-col justify-center relative ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#B49664]/20" />
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#B49664]/20" />

                                <span className="text-[#B49664] text-xs uppercase tracking-[0.5em] mb-4">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-light text-white uppercase tracking-[0.1em] mb-6 leading-snug" style={cormorant}>
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-px w-10 bg-[#B49664]" />
                                    <Diamond className="text-[#B49664]" />
                                    <div className="h-px w-10 bg-[#B49664]" />
                                </div>

                                <p className="text-white/50 font-light leading-relaxed text-[15px] mb-10">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.4em] text-[#B49664] mb-2">Location</p>
                                        <p className="text-sm text-white/70 font-light">{project.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.4em] text-[#B49664] mb-2">Year</p>
                                        <p className="text-sm text-white/70 font-light">{project.date}</p>
                                    </div>
                                </div>

                                {/* Project number marker */}
                                <div className="absolute bottom-16 right-16 text-[#B49664]/10 text-8xl font-light" style={cormorant}>
                                    0{idx + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* ═══════════ CONTACT / BACK COVER ═══════════ */}
                <div className="brochure-page relative">
                    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
                        {/* Left — Contact */}
                        <div className="bg-[#111] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#B49664]/20" />
                            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#B49664]/20" />

                            <div className="flex items-center gap-3 mb-5">
                                <Diamond className="text-[#B49664]" />
                                <span className="text-xs uppercase tracking-[0.4em] text-[#B49664] font-semibold">Get In Touch</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-tight italic" style={cormorant}>
                                Let&apos;s Create Something Extraordinary
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#B49664] mb-2">Phone</p>
                                    <p className="text-base text-white/70 font-light">+91 9656919676</p>
                                    <p className="text-base text-white/70 font-light">+91 9567967696</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#B49664] mb-2">Email</p>
                                    <p className="text-base text-white/70 font-light">rualuxdesigner@gmail.com</p>
                                    <p className="text-base text-white/70 font-light">info@rualux.com</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#B49664] mb-2">Studio</p>
                                    <p className="text-sm text-white/50 font-light leading-relaxed">
                                        Door No. 2406, 4th Floor, Phase 2,<br />
                                        Hi Lite Business Park, Palazhi,<br />
                                        Kozhikode, Kerala, India - 673014
                                    </p>
                                </div>
                            </div>

                            <div className="h-px w-16 bg-[#B49664]/30 mt-6" />
                        </div>

                        {/* Right — Gold branded panel */}
                        <div className="bg-[#B49664] p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-black/10" />
                            <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-black/10" />

                            <Image src="/Rualux-logo.png" alt="Rualux" width={180} height={70} className="mx-auto mb-6 brightness-0" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px w-12 bg-black/20" />
                                <Diamond className="text-black/30 !w-4 !h-4" />
                                <div className="h-px w-12 bg-black/20" />
                            </div>

                            <p className="text-black/60 text-sm uppercase tracking-[0.4em] mb-3">Design & Build</p>
                            <p className="text-black/40 text-xs uppercase tracking-[0.3em] italic" style={cormorant}>
                                &quot;Transforming spaces into sanctuaries&quot;
                            </p>

                            <div className="mt-10">
                                <p className="text-[9px] uppercase tracking-[0.5em] text-black/30">
                                    © 2025 Rualux • All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ─── PRINT STYLES ─── */}
            <style jsx global>{`
        .brochure-wrapper {
          max-width: 900px;
        }
        .brochure-page {
          aspect-ratio: 297 / 210;
          width: 100%;
          position: relative;
          margin-bottom: 2rem;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .brochure-page {
            aspect-ratio: auto;
            min-height: 100vh;
          }
        }
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
          }
          .brochure-wrapper {
            max-width: none !important;
          }
          .brochure-page {
            aspect-ratio: auto !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .break-after-page {
            page-break-after: always !important;
            break-after: page !important;
          }
          .fixed, .print\\:hidden {
            display: none !important;
          }
          .shadow-2xl, .shadow-lg {
            box-shadow: none !important;
          }
          @page {
            margin: 0;
          }
          /* Force backgrounds */
          .bg-\\[\\#111\\], .bg-\\[\\#0d0d0d\\], .bg-\\[\\#0a0a0a\\] {
            background-color: #111111 !important;
          }
          .bg-black {
            background-color: #000000 !important;
          }
          .bg-\\[\\#B49664\\] {
            background-color: #B49664 !important;
          }
        }
      `}</style>
        </div>
    )
}
