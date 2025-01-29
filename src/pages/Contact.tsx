import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="p-3 bg-orange-100 rounded-full">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with our team for personalized assistance"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+916395406996"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="info@advikentures.com"
              />
              <ContactInfo
                icon={MapPin}
                title="Office"
                content="Advikentures Inc., FD-56, Kavi Nagar, Ghaziabad 201002"
              />
              <ContactInfo
                icon={Clock}
                title="Working Hours"
                content="Monday - Sunday: 10:00 AM - 7:00 PM"
              />
            </div>

            <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;