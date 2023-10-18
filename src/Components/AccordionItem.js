import { useState } from "react";

export function AccordionItem({ number, title, contents }) {
  const [isOpen, setIsOpen] = useState(false);

  const displayNumber = () => {
    return number < 9 ? "0" + number.toString() : number.toString();
  };

  const displayIcon = () => {
    return isOpen === true ? "-" : "+";
  };

  const handleClick = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  return (
    <div className="accordionItem" onClick={handleClick}>
      <p className="accordionNumber">{displayNumber()}</p>
      <p className="accordionTitle">{title}</p>
      <p className="accordionIcon">{displayIcon()}</p>
      {isOpen === true && <div className="accordionContents">{contents}</div>}
    </div>
  );
}
