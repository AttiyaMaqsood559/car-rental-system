import React, { useState } from "react";
import "./style.css";
function FAQ() {
  //openIndex batatae hai kon sa sawal abi open hai , starting mai null hai means koe b sawal open nahi hai
  const [openIndex, setOpenIndex] = useState(null);

  //Ek list banayi jisme sawal aur unke jawab rakhe gaye hain.
  const faqs = [
    {
      question: "1. What documents are required to rent a car?",
      answer:
        "You will need a valid driving license, national ID card/passport, and a security deposit depending on the car type.",
    },
    {
      question: "2. Can I rent a car without a driver?",
      answer:
        "Yes, we offer both self-drive and with-driver options. Just mention your preference while booking.",
    },
    {
      question: "3. Is there a mileage limit on rented cars?",
      answer:
        "Some cars have daily mileage limits. Additional charges apply if you exceed the limit. Please check details before booking.",
    },
    {
      question: "4. What if I return the car late?",
      answer:
        "Late return fees may apply. We suggest informing us in advance to avoid penalties.",
    },
    {
      question: "5. How do I cancel my booking?",
      answer:
        'You can manage or cancel your bookings using the "Manage Bookings" section. Cancellation policies may vary based on the car.',
    },
  ];

  //jab kissi question par click ho agar woa bnd hi toa open ho ajayia open hai toa band ho jayia
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {/*har question ka liya loop chala ga aray ka har element par aur index mai ham usa key assign kar raha han
        agar open hai toa active class n laga nahi open toa sirf faq-item class laga, aur jaise hi kissi 
        question par click ho answer show ho ajayia aur agar question par click hai tao icon up ho
        otherwise down  aur agar question hai state mai toa answer show karwao */}
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <i
                className={`fas fa-chevron-${
                  openIndex === index ? "up" : "down"
                }`}
              ></i>
            </div>
            <div className="faq-answer">
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
