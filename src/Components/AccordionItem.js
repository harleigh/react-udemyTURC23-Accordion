export function AccordionItem({
  number, //faq number (starting at 1)
  title, //question of the faq
  contents, //answer of faq
  isOpen, //is this faq opened?
  setSelected, //tells parent that this is the selected faq
}) {
  const displayNumber = () => {
    return number < 9 ? "0" + number.toString() : number.toString();
  };

  const displayIcon = () => {
    return isOpen === true ? "-" : "+";
  };

  //Note: this sets state in the parent, which will cause a refresh :)
  const handleClick = () => {
    setSelected(number - 1);
  };

  return (
    <div
      className={`accordionItem ${isOpen === true ? "open" : ""}`}
      onClick={handleClick}
    >
      <p className="accordionNumber">{displayNumber()}</p>
      <p className="accordionTitle">{title}</p>
      <p className="accordionIcon">{displayIcon()}</p>
      {isOpen === true && <div className="accordionContents">{contents}</div>}
    </div>
  );
}
