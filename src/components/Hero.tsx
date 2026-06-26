import { Button } from "@/components/ui/button"

export function Hero() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Запись онлайн за 1 минуту</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              ТО, диагностика и ремонт вашего автомобиля
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Профессиональный автосервис с современным оборудованием. Запишитесь онлайн на удобное
              время — честные цены, гарантия на работы и оригинальные запчасти.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleBookSession}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Записаться на ремонт
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Наши услуги
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">15 000+</p>
                <p className="text-muted-foreground">Авто отремонтировано</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5</p>
                <p className="text-muted-foreground">Оценка клиентов</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">12+</p>
                <p className="text-muted-foreground">Лет на рынке</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/ab395f04-1d00-4200-b964-574aeb27db3f/files/b83c6aa4-26fb-4a75-8fd1-0c6d77ef499b.jpg"
              alt="Автосервис — ремонт и диагностика автомобилей"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}