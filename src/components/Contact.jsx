const Contact = () => (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700">Have questions or want to collaborate? Reach out!</p>
      <form className="mt-4 max-w-lg mx-auto">
        <label className="block mb-2 text-gray-600">Name:</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Your name"
        />
        <label className="block mb-2 text-gray-600">Email:</label>
        <input
          type="email"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Your email"
        />
        <label className="block mb-2 text-gray-600">Message:</label>
        <textarea
          className="w-full mb-4 p-2 border rounded"
          rows="4"
          placeholder="Your message"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </section>
  );
  
  export default Contact;
  