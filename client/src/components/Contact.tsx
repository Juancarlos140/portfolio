// src/components/Contact.tsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) setSent(true);
    } catch (err) {
      console.error('Failed to send message', err);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        {sent ? (
          <p className="text-green-400">Message sent! I’ll get back to you soon.</p>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} value={form.name} placeholder="Name" className="p-3 rounded bg-gray-700 text-white" />
            <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="p-3 rounded bg-gray-700 text-white" />
            <textarea name="message" onChange={handleChange} value={form.message} placeholder="Message" className="p-3 rounded bg-gray-700 text-white h-32" />
            <button type="submit" className="bg-teal-500 hover:bg-teal-600 py-3 rounded text-white font-semibold">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
