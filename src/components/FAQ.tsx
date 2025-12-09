import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is my project information confidential?",
      answer: "Yes, we keep all our client information confidential. Your project details are secure within our database. We provide the best construction estimating services without involving third parties. We also don't share your data with third parties, keeping client privacy a priority.",
    },
    {
      question: "How do you deal with fluctuating material costs?",
      answer: "The databases we use are all updated through reliable industry resources. We take into account other factors like cost changes as well. Providing the latest labor and material rates is our focus in this regard.",
    },
    {
      question: "Are remodeling project estimations included in your services?",
      answer: "Yes! We handle projects that need complete construction as well as remodeling. We provide cost estimates on renovations, additions, and updates too. The estimates and takeoffs are reliable in our construction estimating services.",
    },
    {
      question: "In what format do you provide the final estimate?",
      answer: "We provide the estimates according to client demand in many formats. These include formats such as PDF, DWF, and other specialized software. Among these, we ensure the data lays out in a way that is easy to understand.",
    },
    {
      question: "What is your turnaround time for estimates?",
      answer: "We offer a fast turnaround time ranging from 9 to 24 hours depending on the project complexity. For urgent projects, we can expedite the process. Our team works efficiently to ensure you receive your estimates on time.",
    },
    {
      question: "What certifications do your estimators have?",
      answer: "All our team members have AACE (Association for the Advancement of Cost Engineering) and AIQS (Australian Institute of Quantity Surveyors) certifications. Our estimators undergo regular training to stay updated with industry standards.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
