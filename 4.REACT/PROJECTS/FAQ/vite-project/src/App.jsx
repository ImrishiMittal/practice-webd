import React, { useState } from 'react';
import styles from './Accordion.module.css'; // ✅ import the styles

const faqData = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is useState?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'Why use keys in lists?',
    answer: 'Keys help React identify which items have changed, are added, or are removed.',
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📘 FAQ</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => handleToggle(index)}
            className={styles.questionBtn}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className={styles.answerBox}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
