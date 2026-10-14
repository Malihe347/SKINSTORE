import { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [rules, setRules] = useState({
    nameValid: false,
    emailValid: false,
    messageNotEmpty: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setRules({
      nameValid: formData.name.length > 0 && nameRegex.test(formData.name),
      emailValid: emailRegex.test(formData.email),
      messageNotEmpty: formData.message.trim().length > 0
    });
  }, [formData]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rules.nameValid || !rules.emailValid || !rules.messageNotEmpty) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-green-950 font-medium mb-2">Contact us</p>
          <h1 className="text-3xl font-semibold text-gray-900">We'd love to hear from you</h1>
        </div>

        {/* پیام‌های موفقیت یا خطا */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
            ✓ Your message has been sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
            ✕ Something went wrong. Please try again later.
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-green-950 focus:ring-1 focus:ring-green-950 transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-green-950 focus:ring-1 focus:ring-green-950 transition"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="4"
              className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-green-950 focus:ring-1 focus:ring-green-950 transition"
            />
          </div>

          <button
            type="submit"
            disabled={!rules.nameValid || !rules.emailValid || !rules.messageNotEmpty || isSubmitting}
            className={`w-full rounded-lg py-3 text-sm font-medium text-white transition-all active:scale-[0.98] ${
              !rules.nameValid || !rules.emailValid || !rules.messageNotEmpty || isSubmitting
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-950 hover:bg-green-900'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Dynamic Checklist */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-900 mb-3">
              Submission Requirements
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className={`mr-2 ${rules.nameValid ? 'text-green-600' : 'text-red-500'}`}>
                  {rules.nameValid ? '✓' : '✕'}
                </span>
                <span className={rules.nameValid ? 'text-gray-700' : 'text-red-500'}>
                  Name must be letters only
                </span>
              </li>

              <li className="flex items-center text-sm">
                <span className={`mr-2 ${rules.emailValid ? 'text-green-600' : 'text-red-500'}`}>
                  {rules.emailValid ? '✓' : '✕'}
                </span>
                <span className={rules.emailValid ? 'text-gray-700' : 'text-red-500'}>
                  Enter a valid email address
                </span>
              </li>

              <li className="flex items-center text-sm">
                <span className={`mr-2 ${rules.messageNotEmpty ? 'text-green-600' : 'text-red-500'}`}>
                  {rules.messageNotEmpty ? '✓' : '✕'}
                </span>
                <span className={rules.messageNotEmpty ? 'text-gray-700' : 'text-red-500'}>
                  Message cannot be empty
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
