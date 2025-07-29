import Accordion from "../components/Accordion";

const faqs = [
  {
    question: "How does Connvo work?",
    answer: "Connvo uses AI to simulate real phone conversations. Just call the number provided and you'll be connected to an AI that can practice various scenarios with you."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Your first call is completely free with no credit card required."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a 30-day money-back guarantee for all paid plans."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              <p className="text-gray-600">{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;