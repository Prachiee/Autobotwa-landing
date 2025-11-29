export default function Features() {
  const features = [
    {
      title: "Smart Scheduling",
      description: "Auto-organize tasks by deadlines and energy levels.",
      iconColor: "bg-blue-500/20 border-blue-500/30",
    },
    {
      title: "Focus Mode",
      description: "Hide distractions and work on one task at a time.",
      iconColor: "bg-purple-500/20 border-purple-500/30",
    },
    {
      title: "Weekly Insights",
      description: "Get a summary of your progress and productivity patterns.",
      iconColor: "bg-emerald-500/20 border-emerald-500/30",
    },
  ]

  return (
    <section className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-3">Everything you need to stay productive</h2>
          <p className="text-zinc-400 text-lg">Powerful features designed to help you work smarter</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full ${feature.iconColor} border-2 mb-5`} />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
