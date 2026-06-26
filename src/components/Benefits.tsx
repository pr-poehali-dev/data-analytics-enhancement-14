export function Benefits() {
  const benefits = [
    {
      icon: "🔧",
      title: "Полный спектр услуг",
      description: "ТО, диагностика, ремонт двигателя, ходовой, электрики и кузова",
    },
    {
      icon: "⏰",
      title: "Запись на удобное время",
      description: "Выбирайте свободный слот онлайн — без очередей и ожидания",
    },
    {
      icon: "💻",
      title: "Компьютерная диагностика",
      description: "Современное оборудование выявляет неисправности точно и быстро",
    },
    {
      icon: "🛡️",
      title: "Гарантия на работы",
      description: "Даём официальную гарантию на все выполненные работы",
    },
    {
      icon: "💰",
      title: "Честные цены",
      description: "Согласовываем стоимость заранее — без скрытых доплат",
    },
    {
      icon: "⚙️",
      title: "Оригинальные запчасти",
      description: "Используем оригинал и проверенные аналоги под ваш бюджет",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Заботимся о вашем автомобиле
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Полный цикл обслуживания авто в одном месте — быстро, качественно и с гарантией
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}