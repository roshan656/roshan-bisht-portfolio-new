import React, { useState, useEffect } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Initialize EmailJS on component load
  useEffect(() => {
    emailjs.init("GZXCfdPwl94xfjIGo"); // ⚠️ Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields! 🙏");
      return;
    }

    try {
      await emailjs.send(
        "service_shesu5b", // ⚠️ Replace with your actual service ID
        "template_c5l93ck", // ⚠️ Replace with your actual template ID
        formData
      );
      toast.success("Thank you! Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0e1124] text-white py-16 px-6 md:px-20 pt-32 md:pt-40 min-h-screen scroll-mt-32"
    >
      <Toaster />
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 space-y-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            <Typewriter
              words={["DO YOU HAVE A PROJECT TO DISCUSS?"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-xl font-medium flex items-center gap-2">
            GET IN TOUCH <span className="text-2xl">💬</span>
          </p>

          <div>
            <h2 className="text-sm font-semibold mb-1 tracking-wide">
              CONTACT
            </h2>
            <a
              href="mailto:roshansinghbisht256@gmail.com"
              className="text-blue-400 hover:underline transition duration-200 break-all"
            >
              roshansinghbisht256@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/roshansinghbisht/"
              target="_blank"
              rel="noreferrer"
              className="text-[#0077B5] hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/roshan656/roshan656"
              target="_blank"
              rel="noreferrer"
              className="text-[#4267B2] hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/7820030940"
              target="_blank"
              rel="noreferrer"
              className="text-[#25D366] hover:scale-110 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="transition-transform duration-300 hover:scale-105">
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="transition-transform duration-300 hover:scale-105">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="transition-transform duration-300 hover:scale-105">
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            SEND
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
