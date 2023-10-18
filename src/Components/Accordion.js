import { faqsBank } from "../questionData";
import { AccordionItem } from "./AccordionItem";

export function Accordion() {
  const buildItems = () => {
    return faqsBank.map((faq, idx) => {
      return (
        <AccordionItem
          number={idx + 1}
          title={faq.question}
          contents={faq.answer}
          key={crypto.randomUUID()}
        />
      );
    });
  };
  return <div className="accordionCollection">{buildItems()}</div>;
}
