export function AccordionItem({ number, title, contents }) {
  return (
    <div className="accordionItem">
      <p className="accordionNumber">{number}</p>
      <p className="accordionTitle">{title}</p>
      <p className="accordionIcon">-</p>
      <div className="accordionContents">{contents}</div>
    </div>
  );
}
