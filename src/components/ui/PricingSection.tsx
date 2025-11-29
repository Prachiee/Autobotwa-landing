export default function PricingSection() {
  return (
    <section className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Choose Your Plan</h2>
          <p className="text-zinc-400 text-lg">Simple, transparent pricing for teams of all sizes</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">₹0</span>
                <span className="text-zinc-400">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Up to 3 projects</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily planning</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic focus mode</span>
              </li>
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="bg-zinc-900 rounded-2xl p-8 border-2 border-emerald-500 hover:border-emerald-400 transition-colors relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-zinc-950 text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">₹249</span>
                <span className="text-zinc-400">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority support</span>
              </li>
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
