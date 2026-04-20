import React, { useState, useRef } from "react";
import Anim from "../components/Anim";
import emailjs from "emailjs-com";

export default function Contact({ visible }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  setStatus("sending");

  try {
    const res = await emailjs.send(
      "service_04d9t0o",
      "template_spb0wdc",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Portfolio Contact",
        message: form.message,
      },
      "EzwR_mUhFi6uL0d9L"
    );

    console.log("SUCCESS:", res);

    setStatus("sent");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setStatus("idle"), 4000);

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }
};

  return (
    <section className="page contact-page">
      <div className="contact-grid">
        <div className="contact-left">
          <Anim visible={visible} delay={80}>
            <div className="eyebrow">— Get In Touch</div>
          </Anim>
          <Anim visible={visible} delay={180}>
            <h2 className="contact-title">
              Let's <em>Connect.</em>
            </h2>
          </Anim>
          <Anim visible={visible} delay={280}>
            <p className="body-text">
              Whether you have a project idea, internship offer, or just want to
              talk tech — my inbox is always open.
            </p>
          </Anim>
          <Anim visible={visible} delay={360}>
            <div className="contact-info-list">
              {[
                {
                  label: "Email",
                  val: "mishant9166@gmail.com",
                  href: "mailto:mishant9166@gmail.com",
                },
                {
                  label: "LinkedIn",
                  val: "ishant-mittal",
                  href: "https://www.linkedin.com/in/ishant-mittal-b43498329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                },
                {
                  label: "GitHub",
                  val: "mishant9166-del",
                  href: "https://github.com/mishant9166-del/",
                },
                { label: "Location", val: "UPES Dehradun, Uttarakhand" },
              ].map(({ label, val, href }, i) => (
                <div key={i} className="ci-row" data-hover>
                  <span className="ci-label">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="ci-val"
                    >
                      {val} ↗
                    </a>
                  ) : (
                    <span className="ci-val">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </Anim>
        </div>

        <div className="contact-right">
          <Anim visible={visible} delay={280}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="form-row-2">
                <div className="form-field">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project / Internship / Collaboration"
                />
              </div>
              <div className="form-field">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  rows={5}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button
                type="submit"
                className={`submit-btn${status === "sending" ? " sending" : ""}${status === "sent" ? " sent" : ""}`}
                disabled={status === "sending"}
                data-hover
                
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <span className="arr-icon">↗</span>
                  </>
                )}
                {status === "sending" && <span>Sending...</span>}
                {status === "sent" && <span>✓ Message Sent!</span>}
              </button>

              <p className="form-note">
                * Clicking Send will open your email client with the message
                pre-filled to mishant9166@gmail.com
              </p>
            </form>
          </Anim>
        </div>
      </div>

      <div className="footer-bar">
        <span className="footer-logo">ISHANT MITTAL.</span>
        <span className="footer-copy">
          © 2025 · Full Stack Developer · B.Tech CS · UPES Dehradun
        </span>
        <span className="footer-pg">05 / 05</span>
      </div>
    </section>
  );
}
