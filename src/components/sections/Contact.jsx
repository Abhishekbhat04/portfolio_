import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import { personal } from "../../data/portfolio";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Best for professional inquiries",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Abhishek Bhat P",
    href: personal.linkedin,
    description: "Connect professionally",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@Abhishekbhat04",
    href: personal.github,
    description: "See my open-source work",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: form.name,
          email: form.email,
          subject: form.subject || "New Contact from Portfolio",
          message: form.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error("Form error:", result);
        alert("Failed to send message. Please make sure you have added your Web3Forms Access Key.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's create something meaningful."
            subtitle="Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you."
            align="center"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact methods — sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="paper-card p-5 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-terra/10 text-terra flex items-center justify-center flex-shrink-0 group-hover:bg-terra group-hover:text-white transition-all duration-200">
                    <method.icon size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-muted mb-0.5">
                      {method.label}
                    </p>
                    <p className="font-body font-medium text-charcoal text-sm group-hover:text-terra transition-colors">
                      {method.value}
                    </p>
                    <p className="font-body text-xs text-muted mt-0.5">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact form — main area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="paper-card p-8 md:p-10">
                {/* Stationery header lines */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                      To: Abhishek Bhat P
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto mb-4">
                      <FiSend size={24} />
                    </div>
                    <h3 className="font-editorial font-bold text-charcoal text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-body text-muted text-sm">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[10px] tracking-wider uppercase text-muted mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-bg font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] tracking-wider uppercase text-muted mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-bg font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-wider uppercase text-muted mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry, collaboration, or just saying hi..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-bg font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-wider uppercase text-muted mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or how I can help..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-bg font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Bottom rule before submit */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex-1 h-px bg-border" />
                      <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                        From: You
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
