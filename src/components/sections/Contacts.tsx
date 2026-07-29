import ContactForm from '../ui/ContactForm';
import { MapPin, Mail, Phone, Clock, CalendarDays, MessageSquare } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'Location', value: 'Miramar Beach, FL' },
  { icon: Mail, label: 'Email', value: 'good-luck.tattoo@gmail.com' },
  { icon: Phone, label: 'Phone', value: '850-424-6584' },
  { icon: Clock, label: 'Hours', value: 'Sun – Sat: 1PM – 9PM' },
];

const Contacts = () => {
  return (
    <section id="contacts" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-darkOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darkOrange/10 border border-darkOrange/20 mb-4">
            <MessageSquare className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Book Your <span className="text-gradient-gold">Session</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg max-w-xl mt-4 font-light">
            Ready to start your ink journey? Reach out and we&apos;ll create something extraordinary.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-darkOrange to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Booking Form */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-darkOrange/15 border border-darkOrange/30 text-darkOrange">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Online Booking
                </h3>
                <p className="font-syne text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  We respond within 24 hours
                </p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Contact Info Cards */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
              <h3 className="font-cinzel text-2xl font-bold text-white mb-6">
                Studio <span className="text-darkOrange">Info</span>
              </h3>
              <div className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-darkOrange group-hover:border-darkOrange/40 group-hover:bg-darkOrange/10 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-syne text-xs uppercase tracking-widest text-gray-500 font-semibold">
                        {label}
                      </div>
                      <div className="font-sans text-base text-white font-medium mt-0.5">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map / CTA card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-darkOrange/10 to-transparent">
              <h4 className="font-cinzel text-lg font-bold text-white mb-2">
                Visit Our Studio
              </h4>
              <p className="font-sans text-sm text-gray-400 font-light mb-4">
                Walk-ins welcome during studio hours. For custom pieces, booking a consultation is recommended.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-darkOrange font-bold hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
