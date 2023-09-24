import React from "react";
import Head from "next/head";

const contact = () => {
  // Sample FAQs
  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by visiting the "Order Tracking" page and entering your order number.'
    },
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows for returns within 30 days of purchase. Please refer to our "Return Policy" page for detailed instructions.'
    },
  ];

  // Function to handle the contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send an email).
  };

  return (
    <>
      <Head>
        <title>Decentrix | Support</title>
        <meta
          name="description"
          content="Blockchain based Ecommerce platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-28 text-xl text-center"> </div>

      <section className="mb-2 w-3/4 bg-white px-48 ">
        <h2 className="text-xl font-semibold mb-5">Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4 flex flex-col gap-3">
          <div>
            <label htmlFor="address" className="block mb-1 text-lg">Order Address</label>
            <input type="text" id="address" name="address" required className="w-3/4 border-2 border-gray-200 focus:border-[#ef8157] rounded p-3" />
          </div>
          {/* <div>
            <label htmlFor="email" className="block mb-1 text-lg">Email</label>
            <input type="email" id="email" name="email" required className="w-3/4 border-2 border-gray-200 focus:border-[#ef8157] rounded p-3" />
          </div> */}
          <div>
            <label htmlFor="query" className="block mb-1 text-lg">Queries</label>
            <textarea id="query" name="query" rows="4" required className="w-3/4 border-2 border-gray-200 focus:border-[#ef8157] rounded p-3"></textarea>
          </div>
          <button type="submit" className="bg-[#f0a181] hover:bg-[#ea7749] text-white font-semibold py-3 px-4 rounded w-3/4 ">
            Submit
          </button>
        </form>
      </section>

      <section className="mb-8 w-2/4 px-36">
        <h2 className="text-2xl mb-4 ml-14 mt-8">Frequently Asked Questions</h2>
        <ul className="space-y-4 ml-14">
          {faqs.map((faq, index) => (
            <li key={index}>
              <h3 className="text-lg">{faq.question}</h3>
              <p className="text-md">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default contact;