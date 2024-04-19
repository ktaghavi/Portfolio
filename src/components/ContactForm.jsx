import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formRef.current) {
      emailjs.sendForm('service_a6n2omv', 'template_jjwiq4d', formRef.current, 'GnFOd6Uy2ueeZbLly')
        .then((result) => {
            alert('Message sent!');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
        }, (error) => {
            console.log('EmailJS error:', error);
            alert('Failed to send message!');
        });
    } else {
      console.log('Form reference is not set correctly.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg w-full p-6 rounded shadow-lg bg-white">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
          </button>
          <a href="https://calendly.com/kamyart" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          📆 Book a Call
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;