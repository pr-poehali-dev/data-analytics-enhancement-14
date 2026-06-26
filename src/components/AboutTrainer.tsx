export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="https://cdn.poehali.dev/projects/ab395f04-1d00-4200-b964-574aeb27db3f/files/b1480d7b-20d1-482b-bcc4-0ffdf2a0c54d.jpg" alt="Мастер автосервиса" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О сервисе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Мастера, которым можно доверить авто
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 12 лет мы ремонтируем автомобили любых марок. Наша команда — сертифицированные
              механики, которые работают честно и берегут ваше время и бюджет.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Современная диагностическая аппаратура, оригинальные запчасти и проверенные аналоги.
              Перед началом работ мы всегда согласовываем стоимость — никаких скрытых доплат и
              навязанных услуг.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Сертифицированные мастера</p>
                  <p className="text-sm text-muted-foreground">Опыт работы с любыми марками авто</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">15 000+ авто</p>
                  <p className="text-sm text-muted-foreground">98% клиентов возвращаются снова</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Гарантия на работы</p>
                  <p className="text-sm text-muted-foreground">Отвечаем за качество ремонта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}