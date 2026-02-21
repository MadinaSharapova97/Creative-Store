import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-base md:text-lg">
            Have questions or need help? We’re here for you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-5">
              <InfoItem
                icon={<Mail />}
                title="Email"
                value="support@yourstore.com"
              />
              <InfoItem
                icon={<Phone />}
                title="Phone"
                value="+998 90 123 45 67"
              />
              <InfoItem
                icon={<MapPin />}
                title="Address"
                value="Tashkent, Uzbekistan"
              />
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8 text-green-600">
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Send />} />
              <SocialIcon icon={<Twitter />} />
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

/* INFO ITEM */
function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-green-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ icon }) {
  return (
    <div className="p-3 rounded-full border border-green-600 hover:bg-green-600 hover:text-white transition cursor-pointer">
      {icon}
    </div>
  );
}
