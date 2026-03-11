"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service?",
    answer: "Booking a service is easy! Simply browse our categories, select the service you need, choose a qualified professional, and pick a convenient time slot. You can pay securely through our app."
  },
  {
    question: "How do you vet your service providers?",
    answer: "Every service professional on Danfe undergoes a rigorous multi-step vetting process. This includes background checks, verification of professional licenses, and practical skill assessments to ensure you get top-quality service."
  },
  {
    question: "What service areas do you currently cover?",
    answer: "We are currently operating throughout the Kathmandu Valley (including Lalitpur and Bhaktapur) and plan to expand to other major cities like Pokhara and Butwal very soon."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority. If you're not happy with the service provided, please report it through the app within 24 hours. We'll investigate and either arrange a redo or provide a partial/full refund based on the situation."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, we believe in transparent pricing. The price you see includes the service fee. Any additional material costs required for the job will be discussed and approved by you before the work begins."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50/50" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl  font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Find answers to common questions about our services and how we work to provide you with the best home maintenance experience.
            </p>
          </motion.div>
        </div>

        <div className="max-w-px-2 mx-auto max-w-4xl">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-teal-600" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Still have questions?{" "}
            <a href="/contact" className="text-teal-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
