"use client";
import React, { useState } from "react";
import { socialLinks, contactDetails } from "../../constants/contact";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        "service_zlhj8y1",
        "template_1xhmgom",
        {
          title: "Schedule Call Request",
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.inquiry,
          phone: formData.phone,
          email: formData.email,
        },
        "OwNrazBC_6bwJ5fIx"
      );
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({ fullName: "", email: "", phoneNumber: "", inquiry: "" });
      } else {
        toast.error("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen h-full w-full bg-[#0D0D0D] text-white font-sans flex items-center justify-center pt-[2.5rem]">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-18 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Have questions? Please send us a message
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                We're happy to answer any questions you may have and help you
                determine which of our services best fit your needs.
              </p>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white p-2 rounded-md hover:opacity-80 transition-opacity"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="bg-[#1C1B22] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-300">
                    {item.title}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white p-8 sm:p-10 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Schedule call
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-9">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="inquiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Inquiry About
                </label>
                <textarea
                  id="inquiry"
                  rows="4"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#FF55A5] to-[#AD59C2] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
