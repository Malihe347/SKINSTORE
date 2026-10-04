import { useState, useEffect } from 'react';

function Contact() {
  // ۱. تعریف استیت‌ها برای مقادیر فیلدها
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // ۲. تعریف استیت‌ها برای وضعیت قوانین (Rules)
  const [rules, setRules] = useState({
    nameValid: false,
    emailValid: false,
    messageNotEmpty: false
  });

  // ۳. تابع اصلی برای چک کردن قوانین (هر بار که formData تغییر کند اجرا می‌شود)
  useEffect(() => {
    const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setRules({
      // نام درست است اگر: خالی نباشد AND فقط حروف باشد
      nameValid: formData.name.length > 0 && nameRegex.test(formData.name),
      
      // ایمیل درست است اگر: فرمت ایمیل رعایت شده باشد
      emailValid: emailRegex.test(formData.email),
      
      // پیام درست است اگر: حداقل یک کاراکتر داشته باشد
      messageNotEmpty: formData.message.trim().length > 0
    });
  }, [formData]); // وابستگی به formData باعث می‌شود با هر تایپ، قوانین دوباره چک شوند

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-green-950 font-medium mb-2">Contact us</p>
          <h1 className="text-3xl font-semibold text-gray-900">We'd love to hear from you</h1>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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

          {/* دکمه ارسال: فقط وقتی همه قوانین true باشند فعال می‌شود */}
          <button
            type="submit"
            disabled={!rules.nameValid || !rules.emailValid || !rules.messageNotEmpty}
            className={`w-full rounded-lg py-3 text-sm font-medium text-white transition-all active:scale-[0.98] ${
              !rules.nameValid || !rules.emailValid || !rules.messageNotEmpty 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-950 hover:bg-green-900'
            }`}
          >
            Send Message
          </button>

          {/* --- بخش قوانین با تیک و ضربدر (The Dynamic Checklist) --- */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-900 mb-3">
              Submission Requirements
            </p>
            <ul className="space-y-2">
              {/* قانون اول */}
              <li className="flex items-center text-sm">
                <span className={`mr-2 ${rules.nameValid ? 'text-green-600' : 'text-red-500'}`}>
                  {rules.nameValid ? '✓' : '✕'}
                </span>
                <span className={rules.nameValid ? 'text-gray-700' : 'text-red-500'}>
                  Name must be letters only
                </span>
              </li>

              {/* قانون دوم */}
              <li className="flex items-center text-sm">
                <span className={`mr-2 ${rules.emailValid ? 'text-green-600' : 'text-red-500'}`}>
                  {rules.emailValid ? '✓' : '✕'}
                </span>
                <span className={rules.emailValid ? 'text-gray-700' : 'text-red-500'}>
                  Enter a valid email address
                </span>
              </li>

              {/* قانون سوم */}
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
          {/* ----------------------------------------------------- */}

        </form>
      </div>
    </section>
  );
}

export default Contact;
