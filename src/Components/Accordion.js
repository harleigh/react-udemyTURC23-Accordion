import { useState } from "react";
import { faqsBank } from "../questionData";
import { AccordionItem } from "./AccordionItem";

export function Accordion() {
  //Note: Faq Number (seen by user) is 1 indexing, but selectedFaq(Question) is zero-indexing
  //this value represents the faq that is selected by the user (e.g. user selects first faq
  //then selectedFaq is 0, etc)
  const [selectedFaq, setSelectedFaq] = useState(-1);

  //we build all the accordion items in the accordion
  const buildItems = () => {
    return faqsBank.map((faq, idx) => {
      return (
        <AccordionItem
          number={idx + 1}
          title={faq.question}
          contents={faq.answer}
          isOpen={idx === selectedFaq}
          setSelected={setSelectedFaq}
          key={crypto.randomUUID()}
        />
      );
    });
  };
  return <div className="accordionCollection">{buildItems()}</div>;
}
