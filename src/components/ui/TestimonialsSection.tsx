import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "TaskFlow made my study routine so much smoother.",
      name: "Ananya",
      role: "CS Student",
    },
    {
      quote: "Focus Mode helped me improve productivity during my internship.",
      name: "Rohan",
      role: "Frontend Intern",
    },
    {
      quote: "The weekly insights feature keeps me motivated every Sunday!",
      name: "Sara",
      role: "MBA Student",
    },
  ]

  return (
    <section className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">What Our Users Say</h2>
          <p className="text-gray-400 text-lg">
            Join thousands of users who've transformed their productivity with TaskFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gray-700 mb-4" />

              {/* Testimonial Quote */}
              <blockquote className="mb-6">
                <p className="text-gray-300 italic text-base leading-relaxed">"{testimonial.quote}"</p>
              </blockquote>

              {/* User Info */}
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-bold text-sm mb-1">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
