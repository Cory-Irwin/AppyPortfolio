import React from "react";
import Navbar from "../fundamentalPageComponents/navbar";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Footer from "../fundamentalPageComponents/footer";

function ContactMe() {
  return (
    <>
      <Navbar />
      
      <AmbientBackground>
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <h1 className="text-5xl font-bold mb-8 text-gray-100">
            Contact Me
          </h1>

          <form className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </AmbientBackground>
      
      <Footer />
    </>
  );
}

export default ContactMe;
