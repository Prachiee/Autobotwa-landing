import { Button } from "@/src/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-background dark overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                Stay on top of every task.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg text-balance leading-relaxed">
                TaskFlow helps you plan your day, track deadlines, and focus on what matters.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold px-8 py-3 h-auto flex items-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-muted-foreground/30 text-foreground hover:bg-muted rounded-lg font-semibold px-8 py-3 h-auto flex items-center gap-2 transition-colors bg-transparent"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right illustration placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Placeholder illustration container */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Illustration placeholder</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
