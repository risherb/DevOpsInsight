import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AboutFAQs() {
  const faqs = [
    {
      question: "What is DevOpsInsights?",
      answer:
        "DevOpsInsights is an AI-powered cloud monitoring and management platform for enterprise-grade infrastructure. It provides real-time insights, cost analysis, and deployment pipeline visualization to help teams optimize their DevOps processes.",
    },
    {
      question: "How do the visualizations work?",
      answer:
        "Our visualizations are powered by Chart.js, a powerful JavaScript library for creating interactive and responsive charts. We use various chart types such as line charts, bar charts, and custom SVG animations to present complex data in an easily digestible format.",
    },
    {
      question: "Is it responsive?",
      answer:
        "Yes, DevOpsInsights is fully responsive. We use CSS media queries and flexible layouts to ensure that the platform looks great and functions well on devices of all sizes, from mobile phones to large desktop monitors.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "DevOpsInsights fetches and updates data in real-time. However, the frequency of updates may vary depending on the specific metric and the configuration of your infrastructure. Most metrics are updated every few seconds to every few minutes.",
    },
    {
      question: "Can I customize the dashboard?",
      answer:
        "Currently, the dashboard layout is fixed, but we're working on a feature that will allow users to customize their dashboard by adding, removing, and rearranging widgets according to their preferences and needs.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>About DevOpsInsights</CardTitle>
        <CardDescription>Frequently Asked Questions</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

