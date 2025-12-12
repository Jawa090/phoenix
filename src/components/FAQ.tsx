import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const defaultFaqs = [
    {
      question: "Will our information be safe with you?",
      answer: "Yes, we keep all our client information confidential. Your project details are secure within our database. We provide the best construction estimating services Phoenix without involving third parties. Hence, we also don't share your data with third parties, keeping client privacy a priority.",
    },
    {
      question: "Can I ask for a personalized response according to my specific goals?",
      answer: "Yes, you can ask for a quote based on  your personal goals. Our team of professionals looks toward identifying unique elements of your project to help you build a plan.",
    },
    {
      question: "Through what ways can I pay securely for your services?",
      answer: "We have multiple payment options for your convenience. You can pay through a credit card, payPal or Debit Card to ensure secure payments.",
    },
    {
      question: "In what format do you give the final estimate to the clients?",
      answer: "We provide the estimates according to client demand in many formats. These include formats such as PDF, DWF and other specialized software. Among these, we ensure the data lays out in a way that is easy to understand.",
    },
    {
      question: "What is the accuracy of your estimates?",
      answer: "Our team consists of certified estimators who use industry-leading software and live pricing databases. We maintain a high accuracy rate by accounting for labor, material, and local market trends."
    },
    {
      question: "How long does it take to get an estimate?",
      answer: "We aim to provide a detailed estimate within 2-4 business days for most residential projects. For larger commercial projects, we will provide you with a timeline upon reviewing the plans."
    }
  ];

  const faqs = items || defaultFaqs;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
          </h2>

        </div>

        {/* FAQ Accordion - 2 Column Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value={`item-${index}`}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline px-6 py-6 gap-4 [&[data-state=open]]:text-primary">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors mt-0.5">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="flex-1 pr-2">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-6">
                  <div className="pl-11 border-l-2 border-primary/20 ml-4">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Contact us for more information
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
