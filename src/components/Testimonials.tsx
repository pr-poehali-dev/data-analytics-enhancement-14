export function Testimonials() {
  const testimonials = [
    {
      name: "Андрей Соколов",
      role: "Toyota Camry",
      image: "/professional-man-headshot.png",
      quote:
        "Записался онлайн на диагностику, приняли точно вовремя. Нашли причину стука в подвеске, сразу назвали цену и сделали за день. Никаких лишних работ не навязывали.",
    },
    {
      name: "Марина Лебедева",
      role: "Volkswagen Polo",
      image: "/professional-woman-headshot.png",
      quote:
        "Делаю ТО только здесь уже третий год. Честные цены, всё показывают и объясняют. Приятно, когда машине доверяешь спокойно.",
    },
    {
      name: "Игорь Петров",
      role: "Kia Sportage",
      image: "/professional-woman-smiling.png",
      quote:
        "Срочно понадобился ремонт тормозов перед поездкой. Записали в этот же день, всё сделали быстро и с гарантией. Рекомендую!",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Нам доверяют</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы наших клиентов</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}