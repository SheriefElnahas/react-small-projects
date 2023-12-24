function AccrodionItem({ faq, onToggleAccordion }) {
  const { id, title, text, isOpen } = faq;

  function handleClick() {
    onToggleAccordion(id);
  }

  return (
    <div onClick={handleClick} className={`item ${isOpen ? 'open' : ''}`}>
      <p className="number">0{id}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccrodionItem;
