import { Button } from "@/components/ui/button"

export function Booking() {
  const handleCalendlyClick = () => {
    alert("Заявка отправлена! Мы перезвоним вам для подтверждения.")
  }

  const handlePaymentClick = () => {
    alert("Полный прайс-лист скоро будет доступен.")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы записаться?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Запишитесь на обслуживание</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Выберите услугу и удобное время — мастер примет ваш автомобиль без очереди
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Оставьте заявку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                placeholder="Марка и модель авто"
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Техническое обслуживание (ТО)</option>
                <option>Компьютерная диагностика</option>
                <option>Ремонт двигателя</option>
                <option>Ремонт ходовой части</option>
                <option>Шиномонтаж</option>
                <option>Другое</option>
              </select>
              <Button
                onClick={handleCalendlyClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Записаться
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Перезвоним в течение 15 минут для подтверждения времени
              </p>
            </form>
          </div>

          {/* Price List */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Цены на услуги</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Компьютерная диагностика</span>
                <span className="font-semibold text-foreground">от 1 500 ₽</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Замена масла и фильтров (ТО)</span>
                <span className="font-semibold text-foreground">от 2 000 ₽</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Ремонт тормозной системы</span>
                <span className="font-semibold text-foreground">от 3 500 ₽</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Ремонт ходовой части</span>
                <span className="font-semibold text-foreground">от 4 000 ₽</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Шиномонтаж (4 колеса)</span>
                <span className="font-semibold text-foreground">от 2 400 ₽</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="font-semibold text-foreground">Осмотр перед покупкой</span>
                <span className="text-2xl font-bold text-accent">2 900 ₽</span>
              </div>
            </div>
            <Button
              onClick={handlePaymentClick}
              variant="outline"
              className="w-full mt-6 border-border text-foreground hover:bg-muted bg-transparent text-base py-6"
            >
              Полный прайс-лист
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              ✓ Точную стоимость согласуем после диагностики • ✓ Без скрытых доплат
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}