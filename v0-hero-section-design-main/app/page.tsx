import { MapPin, Bell, Users, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Find Blood Donors <span className="text-red-600">Anytime, Anywhere</span>
              </h1>
              <p className="text-pretty text-lg text-gray-600 sm:text-xl lg:text-2xl">
                Connecting donors and patients instantly during medical emergencies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600/50">
                Find Donor Now
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 bg-white px-8 py-4 text-base font-semibold text-red-600 transition-all hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-600/50">
                Become a Donor
              </button>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 rounded-full bg-red-50" />

              {/* Main Illustration Placeholder */}
              <div className="relative flex h-full items-center justify-center">
                <img
                  src="/blood-donation-medical-illustration-red-cross-help.jpg"
                  alt="Blood donation illustration"
                  className="relative z-10 h-full w-full object-contain p-8"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 top-1/4 h-20 w-20 rounded-full bg-red-100" />
              <div className="absolute -left-4 bottom-1/4 h-16 w-16 rounded-full bg-red-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Real-Time Donor Matching",
      description: "Instantly find nearby donors based on blood type.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get urgent notifications when blood is needed.",
    },
    {
      icon: MapPin,
      title: "Nearest Blood Bank Locator",
      description: "Quickly access verified blood banks and hospitals.",
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-red-600">RaktSetu</span>?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>

                {/* Description */}
                <p className="text-pretty text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Blood Donor",
      feedback:
        "RaktSetu made it so easy to donate blood. I received an alert and was able to help save a life within hours!",
      image: "/indian-woman-smiling.png",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Hospital Administrator",
      feedback:
        "The real-time donor matching feature is incredible. We can now find blood donors much faster during emergencies.",
      image: "/indian-male-doctor-professional-portrait.jpg",
    },
    {
      name: "Anjali Patel",
      role: "Patient Family Member",
      feedback: "When my father needed blood urgently, RaktSetu connected us with donors instantly. Truly a lifesaver!",
      image: "/indian-woman-professional-portrait.png",
    },
  ]

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-red-600">Donors & Patients</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-2xl bg-gray-50 p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Profile Image */}
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="h-20 w-20 rounded-full object-cover ring-2 ring-red-100"
              />

              {/* Feedback */}
              <p className="text-pretty text-gray-600 italic">"{testimonial.feedback}"</p>

              {/* Name & Role */}
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Section Title */}
          <div className="mb-8 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-gray-600">
              Reach out to us for support, collaboration, or queries.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">RaktSetu</h3>
            <p className="text-gray-400 text-sm">
              Connecting donors and patients instantly during medical emergencies. Saving lives, one donation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Find Donor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Become a Donor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blood Banks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@raktsetu.com" className="hover:text-white transition-colors">
                  contact@raktsetu.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RaktSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
