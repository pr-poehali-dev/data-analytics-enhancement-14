export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">А</span>
              </div>
              <span className="font-semibold">АвтоМастер</span>
            </div>
            <p className="text-sm text-background/70">Профессиональный автосервис: ТО, диагностика и ремонт авто любых марок.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Записаться
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Техобслуживание (ТО)
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Компьютерная диагностика
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Ремонт ходовой
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Шиномонтаж
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+70000000000" className="hover:text-background transition">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li>
                <span>г. Москва, ул. Автомобильная, 1</span>
              </li>
              <li>
                <span>Ежедневно 9:00 – 21:00</span>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Записаться онлайн
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2026 АвтоМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}