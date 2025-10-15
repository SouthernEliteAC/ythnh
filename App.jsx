import React from 'react';
import Logo from './assets/SEA_LOGO.png';

const CTAButton = ({ href, children }) => (
  <a href={href} className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold shadow-md transition transform hover:-translate-y-0.5">
    {children}
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Southern Elite AC logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-lg font-semibold">Southern Elite A/C & Appliances LLC</h1>
              <p className="text-xs text-gray-500">A/C • Appliance Repair • Installation • Maintenance</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#contact" className="hover:text-sky-600">Service Request</a>
            <a href="tel:+1234567890" className="ml-4 rounded-full px-4 py-2 bg-sky-600 text-white">(123) 456-7890</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Reliable Air Conditioning & Appliance Repair You Can Trust</h2>
            <p className="mt-4 text-gray-600">Southern Elite A/C & Appliances provides expert HVAC and appliance repair services with a dedication to honesty, quality, and customer satisfaction. We take pride in helping our community stay comfortable year-round.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="#contact">Create Service Order</CTAButton>
              <a href="#services" className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold border">View Services</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-sky-50 to-white p-6 flex justify-center items-center">
            <img src={Logo} alt="Southern Elite AC logo" className="max-w-xs" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-14">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="text-gray-600 mt-2">From quick appliance fixes to full HVAC installations — our technicians are trained, licensed, and ready to help.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AC Repair', desc: 'Fast, reliable repairs to restore your comfort quickly.' },
              { title: 'Appliance Repair', desc: 'Expert service for refrigerators, ovens, washers, and more.' },
              { title: 'Installation', desc: 'Professional installation for new systems and appliances.' },
              { title: 'Preventative Maintenance', desc: 'Seasonal tune-ups to improve efficiency and extend equipment life.' },
              { title: 'Commercial Service', desc: 'Trusted by local businesses for HVAC and appliance support.' },
              { title: '24/7 Emergency Service', desc: 'On-call technicians for after-hours breakdowns.' },
            ].map((s) => (
              <article key={s.title} className="p-6 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-2">About Southern Elite A/C & Appliances LLC</h3>
          <p className="text-gray-700 leading-relaxed">
            Southern Elite A/C & Appliances is a locally owned company built on a commitment to customer care and reliable service. For over two years, our dedicated team has worked together to deliver exceptional air conditioning and appliance repair throughout the community.
            <br /><br />
            Our technicians are highly trained, trustworthy professionals who take pride in their craft — ensuring every repair is done right the first time. We believe in treating every home with respect, because your comfort and safety are always our top priorities.
          </p>
        </section>

        {/* Contact / Service Order Form */}
        <section id="contact" className="mt-14 bg-sky-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Create a Service Order</h3>
          <p className="text-gray-700 mb-6">Fill out the form below to schedule your service request. A member of our team will contact you to confirm your appointment.</p>

          {/* Replace the action URL with your Formspree endpoint */}
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <input type="hidden" name="_replyto" value="rjecdaigle@gmail.com" />
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" name="name" required className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input type="tel" name="phone" required className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="(123) 456-7890" />
            </div>
            <div>
              <label className="text-sm font-medium">Address</label>
              <input type="text" name="address" required className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="123 Main St, City, State" />
            </div>
            <div>
              <label className="text-sm font-medium">Service Needed</label>
              <input type="text" name="service" className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="AC repair, refrigerator issue, etc." />
            </div>
            <div>
              <label className="text-sm font-medium">Preferred Appointment Time</label>
              <input type="text" name="time" className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="e.g., Tomorrow 2 PM" />
            </div>
            <div>
              <label className="text-sm font-medium">Additional Details</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-gray-200 shadow-sm" placeholder="Describe the issue or special requests"></textarea>
            </div>
            <button type="submit" className="rounded-full px-6 py-2 bg-sky-600 text-white font-semibold">Submit Service Order</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-14 py-8 text-sm text-gray-600">
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Southern Elite A/C & Appliances LLC — All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="underline">Privacy</a>
              <a href="#terms" className="underline">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
