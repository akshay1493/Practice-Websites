import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    businessName: '',
    businessType: '',
    revenueRange: '',
    painPoint: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you shortly.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-navy-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Your Free Financial Strategy Call</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Spend 30 mins with our experts to map your growth goals and get a custom plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking & Form */}
      <Section className="bg-white" align="left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy-secondary">What to Expect</h2>
              <div className="space-y-4">
                {[
                  "Spend 30 mins with our experts to map your pain points and growth goals.",
                  "We audit your current finances and identify immediate gaps.",
                  "You'll get a tailored growth plan with no obligation.",
                  "After booking, you'll get a confirmation email with a call link."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-accent mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-navy-secondary">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <Mail className="w-5 h-5 text-emerald-accent" />
                  <span>hello@virtualggc.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone className="w-5 h-5 text-emerald-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <MapPin className="w-5 h-5 text-emerald-accent" />
                  <span>San Francisco, CA (Remote Worldwide)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
                <p className="text-3xl font-bold text-navy-secondary mb-1">100+</p>
                <p className="text-xs font-bold text-emerald-accent uppercase tracking-widest">Businesses Served</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
                <p className="text-3xl font-bold text-navy-secondary mb-1">99%</p>
                <p className="text-xs font-bold text-emerald-accent uppercase tracking-widest">Compliance Success</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card bg-white p-8 md:p-12 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-secondary mb-8">Tell Us About Your Business</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Business Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all"
                      value={formState.businessName}
                      onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Business Type</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all bg-white"
                      value={formState.businessType}
                      onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                    >
                      <option value="">Select Type</option>
                      <option value="Startup">Startup</option>
                      <option value="D2C">D2C</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Agency">Agency</option>
                      <option value="SME">SME</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Annual Revenue</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all bg-white"
                      value={formState.revenueRange}
                      onChange={(e) => setFormState({...formState, revenueRange: e.target.value})}
                    >
                      <option value="">Select Range</option>
                      <option value="<$100k">&lt;$100k</option>
                      <option value="$100k-$500k">$100k-$500k</option>
                      <option value="$500k-$2M">$500k-$2M</option>
                      <option value="$2M+">$2M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Biggest Financial Pain Point</label>
                  <textarea 
                    required
                    placeholder="e.g. Cash flow gaps, tax stress, manual bookkeeping..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all"
                    value={formState.painPoint}
                    onChange={(e) => setFormState({...formState, painPoint: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Calendly Placeholder */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
              <p className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Or Book Directly via Calendly</p>
              <div className="aspect-video bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                <p className="text-gray-400 italic">Calendly Integration Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Signal */}
      <Section className="bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <ShieldCheck className="w-12 h-12 text-emerald-accent mx-auto" />
          <h2 className="text-2xl font-bold text-navy-secondary">Your Data is Secure</h2>
          <p className="text-gray-600">
            We use bank-level encryption and never share your data with third parties without consent. Your privacy and security are our top priorities.
          </p>
        </div>
      </Section>
    </div>
  );
}
