"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("📩 Message Sent Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900">Contact Us</h1>
      <p className="text-center text-gray-700 mt-2 text-lg">We’d love to hear from you! Fill out the form below, and we'll get back to you.</p>

      {/* ✅ Contact Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg h-32"
          required
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      {/* ✅ Contact Details */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Other Ways to Reach Us</h2>
        <p className="text-gray-600 mt-3">Email: support@aijobmatch.com</p>
        <p className="text-gray-600">Phone: +1 (234) 567-8900</p>
        <p className="text-gray-600">Address: 123 AI Job Street, New York, USA</p>
      </div>
    </div>
  );
}
