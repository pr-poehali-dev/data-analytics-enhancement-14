import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С какими марками автомобилей вы работаете?",
      answer:
        "Мы обслуживаем большинство марок — отечественные, европейские, японские и корейские авто. Если сомневаетесь, позвоните нам, и мы уточним по вашей модели.",
    },
    {
      question: "Сколько времени занимает ремонт?",
      answer:
        "Это зависит от вида работ. Замена масла и ТО — от 1 часа, диагностика — 30–60 минут, сложный ремонт может занять 1–2 дня. Точные сроки назовём после осмотра.",
    },
    {
      question: "Нужно ли записываться заранее?",
      answer:
        "Запись помогает принять вас без очереди в удобное время. Оставьте заявку на сайте или позвоните — подберём свободный слот.",
    },
    {
      question: "Можно ли узнать цену до начала работ?",
      answer:
        "Да. После диагностики мы согласовываем полную стоимость работ и запчастей. Никаких скрытых доплат — вы платите ровно за то, о чём договорились.",
    },
    {
      question: "Вы используете оригинальные запчасти?",
      answer:
        "Да, мы работаем с оригинальными запчастями и проверенными аналогами. Выбор зависит от вашего бюджета — всегда предлагаем оптимальные варианты.",
    },
    {
      question: "Есть ли гарантия на выполненные работы?",
      answer:
        "Конечно! На все виды работ мы предоставляем официальную гарантию. Если возникнет вопрос по выполненному ремонту — устраним бесплатно.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}