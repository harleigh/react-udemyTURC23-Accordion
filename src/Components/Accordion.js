import { faqsBank } from "../questionData";
import { AccordionItem } from "./AccordionItem";

export function Accordion() {
  return (
    <div className="accordionCollection">
      <AccordionItem
        number={1}
        title={"Example Title"}
        contents={"here are the test contents"}
      />
    </div>
  );
}
