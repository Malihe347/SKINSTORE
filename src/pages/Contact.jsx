
function Contact() {
  return (
    <section className="px-10 py-20">
      <div className="mx-auto max-w-xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em]">
          Contact us
        </p>

        <h1 className="mb-6 text-4xl font-semibold">
          We'd love to hear from you.
        </h1>

        <p className="mb-10 text-gray-500">
          Have a question about our products? Send us a message.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border bg-gray-200 border-gray-400 hover:bg-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl border bg-gray-200 border-gray-400 hover:bg-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <textarea
            placeholder="Your message"
            rows="5"
            className="w-full resize-none rounded-xl border bg-gray-200 border-gray-400 hover:bg-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <button
            type="submit"
            className="rounded-full bg-green-950 px-7 py-3 text-sm text-white hover:opacity-80"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;



