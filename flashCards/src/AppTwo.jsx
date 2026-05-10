import { useState } from "react";
import "./styles_2.css";

const faqs = [
  {
    id: '01',
    isOpen: false,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: '02',
    isOpen: false,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: '03',
    isOpen: false,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [elements, setElements] = useState(faqs);

  function handelClick(id) {
    setElements((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  }

  const items = elements.map((item) => {
    const { id, isOpen, title, text } = item;
    return (
      <div
        className={`item ${isOpen ? "open" : ""}`}
        key={id}
        onClick={() => handelClick(id)}
      >
        <p className="number">{id}</p>
        <h2 className="title">{title}</h2>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && (
          <div className="content-box ">
            <p className="text">{text}</p>
          </div>
        )}
      </div>
    );
  });
  return <div className="accordion">{items}</div>;
}

//  <div className="accordion">
//     <div className={`item ${isOpen ? "open" : ""}`}>
//       <span className="number">01</span>
//       <h2>{faqs[0].title}</h2>
//       <p className="icon" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</p>
//       <div className="content-box">
//         <p className="text">{isOpen && faqs[0].text}</p>
//       </div>
//     </div>

//     <div className={`item ${isOpen2 ? "open" : ""}`}>
//       <span className="number">02</span>
//       <h2>{faqs[1].title}</h2>
//       <p className="icon" onClick={() => setIsOpen2(!isOpen2)}>{isOpen2 ? "-" : "+"}</p>
//       <div className="content-box">
//         <p p className="text">{isOpen2 && faqs[1].text}</p>
//       </div>
//     </div>

//     <div className={`item ${isOpen3 ? "open" : ""}`}>
//       <span className="number">03</span>
//       <h2>{faqs[2].title}</h2>
//       <p className="icon" onClick={() => setIsOpen3(!isOpen3)}>{isOpen3 ? "-" : "+"}</p>
//       <div className="content-box"><p className="text">{isOpen3 && faqs[2].text}</p></div>
//     </div>
//   </div>
