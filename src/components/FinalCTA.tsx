import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const faqSection = document.getElementById("faq")
    faqSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-accent py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-accent-foreground mb-6 text-balance">
          Доверьте свой автомобиль профессионалам
        </h2>
        <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Запишитесь на ТО, диагностику или ремонт прямо сейчас. Честные цены, гарантия на работы
          и внимательное отношение к каждому клиенту.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleBookSession}
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent text-base"
          >
            Записаться на ремонт
          </Button>
          <Button
            onClick={handleLearnMore}
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
          >
            Частые вопросы
          </Button>
        </div>
        <p className="text-sm text-accent-foreground/80 mt-8">
          Запись онлайн • Перезвоним для подтверждения в течение 15 минут
        </p>
      </div>
    </section>
  )
}