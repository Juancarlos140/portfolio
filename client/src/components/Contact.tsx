// src/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-3 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" className="p-3 rounded bg-gray-700 text-white h-32" />
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 py-3 rounded text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
