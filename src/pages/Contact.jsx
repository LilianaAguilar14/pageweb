import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-white py-20 mt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-black text-center mb-8">
            Contact
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Thank you for your interest in Recreational Surfacing INC! We would
            love to talk to you about your upcoming project or any questions you
            might have about our products. Feel free to give us a call or
            complete the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-black mb-4">
                Recreational Surfacing INC
              </h2>
              <p className="text-gray-700">
                166 Broadway, Greenlawn, New York 11740
              </p>
              <p className="text-gray-700">
                Phone: <a href="tel:+15162427155">(516) 242-7155</a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:jcsafetysurfacing@gmail.com"
                  className="text-blue-500 underline"
                >
                  jcsafetysurfacing@gmail.com
                </a>
              </p>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1816823345967!2d-73.36748358458595!3d40.872098979315105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82937e882a47f%3A0x2c646df5a6d3d597!2s166%20Broadway%2C%20Greenlawn%2C%20NY%2011740%2C%20USA!5e0!3m2!1sen!2ses!4v1687590903210!5m2!1sen!2ses"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition w-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
