import { useState } from 'react';
import AccrodionItem from './AccrodionItem';

const faqsItems = [
  {
    id: 1,
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
    isOpen: true,
  },
  {
    id: 2,
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
    isOpen: false,
  },
];

function Accordion() {
  const [faqs, setFaqs] = useState(faqsItems);

  function handleToggleAccordion(accordionId) {
    setFaqs((accordions) =>
      accordions.map((accordion) => {
        if (accordion.id === accordionId) {
          return { ...accordion, isOpen: !accordion.isOpen };
        } else {
          return accordion;
        }
      })
    );
  }

  return (
    <div className="accordion">
      {faqs.map((faq) => {
        return <AccrodionItem key={faq.id} faq={faq} onToggleAccordion={handleToggleAccordion} />;
      })}
    </div>
  );
}

export default Accordion;
