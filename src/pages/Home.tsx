import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Settings, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Clock, 
  Zap,
  Quote,
  X,
  ChevronRight
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Users className="w-8 h-8 text-emerald-accent" />,
    title: 'Virtual CFO',
    headline: 'Scale Confidently With Strategic Leadership',
    outcome: 'Fractional CFO to build scalable frameworks, forecast growth, and eliminate cash flow gaps.',
    href: '/services#cfo'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-emerald-accent" />,
    title: 'Accounting & Bookkeeping',
    headline: 'Know Your Real Profit—Always',
    outcome: 'Automated, accurate bookkeeping that gives you real-time financial health visibility.',
    href: '/services#accounting'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-accent" />,
    title: 'Compliance & Taxation',
    headline: 'Eliminate Tax Surprises & Risks',
    outcome: 'Proactive tax planning and compliance to keep you legal and save money.',
    href: '/services#compliance'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-accent" />,
    title: 'Financial Planning & Analysis',
    headline: 'Turn Data Into Growth Actions',
    outcome: 'Custom reports to optimize budgets, maximize ROI, and hit revenue goals faster.',
    href: '/services#analysis'
  }
];

const testimonials = [
  {
    quote: "Virtual GGC helped us increase profit margins by 28% in 6 months and saved me 18 hours/week of spreadsheet work.",
    author: "Sarah K.",
    role: "Founder, D2C Skincare Brand",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "Finally, a finance team that speaks startup language—they helped us secure $2.2M in Series A funding.",
    author: "Raj P.",
    role: "Co-Founder, SaaS Startup",
    image: "https://picsum.photos/seed/raj/100/100"
  }
];

const stats = [
  { label: 'Businesses Scaled', value: '100+' },
  { label: 'Avg Profit Lift', value: '30%' },
  { label: 'Compliance Accuracy', value: '99%' }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3 mr-2" />
                Trusted by 100+ Fast-Growing Brands
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-secondary leading-[1.1] mb-8">
                Turn Your Business Finances Into a <span className="text-emerald-accent">Scalable Growth Engine</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Your dedicated virtual finance team for startups, SMEs, and growing brands—turning chaos into clarity, compliance, and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                  Book a Free Financial Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                  See How It Works
                </Link>
              </div>
              
              {/* Trust Signals */}
              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted by innovators at</p>
                <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="h-8 flex items-center font-bold text-xl text-navy-secondary">SKINCARE CO.</div>
                  <div className="h-8 flex items-center font-bold text-xl text-navy-secondary">SAASLY</div>
                  <div className="h-8 flex items-center font-bold text-xl text-navy-secondary">DIGITAL AGENCY</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-8">
                <img 
                  src="https://picsum.photos/seed/dashboard/800/600" 
                  alt="Financial Dashboard" 
                  className="rounded-xl shadow-inner w-full"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-emerald-accent text-white p-6 rounded-xl shadow-xl hidden md:block">
                  <p className="text-3xl font-bold mb-1">30%</p>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Avg Profit Lift</p>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-navy-secondary text-white p-6 rounded-xl shadow-xl hidden md:block">
                  <p className="text-3xl font-bold mb-1">99%</p>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Compliance Accuracy</p>
                </div>
              </div>
              {/* Background Shapes */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-navy-secondary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section 
        className="bg-navy-secondary text-white"
        title="You’re Growing, But Financially Blind"
        subtitle="Most founders leave 15-20% of their profit on the table because of this chaos."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              "You don’t know your real profit—just what’s left in the bank at month-end.",
              "Taxes feel like a costly surprise every quarter, not a planned expense.",
              "You’re wasting 10+ hours/week on spreadsheets instead of growing your business.",
              "Cash flow gaps are holding back your next hire or marketing campaign."
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-1 bg-red-500/20 rounded-full">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-lg text-gray-300">{point}</p>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8 overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-red-400">20%</div>
                <p className="text-xl font-medium text-gray-400">Revenue Lost to Inefficiency</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section 
        title="Your Dedicated Virtual Finance Team"
        subtitle="We don't just count beans. We help you grow them."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "🚀",
              title: "Chaos → Clarity",
              desc: "Real-time financial insights you can act on today."
            },
            {
              emoji: "🎯",
              title: "Guesswork → Data",
              desc: "Data-driven decisions that boost profit and reduce risk."
            },
            {
              emoji: "⚙️",
              title: "Manual → Automated",
              desc: "Automated, scalable finance systems that grow with you."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="card text-center"
            >
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Snapshot */}
      <Section 
        className="bg-gray-50"
        title="Outcome-Focused Services"
        subtitle="Modular solutions tailored to your growth stage."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="card flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="p-4 bg-emerald-accent/5 rounded-2xl">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-sm font-bold text-emerald-accent uppercase tracking-widest mb-2">{service.title}</h3>
                <h4 className="text-2xl font-bold text-navy-secondary mb-4">{service.headline}</h4>
                <p className="text-gray-600 mb-6">{service.outcome}</p>
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-navy-secondary font-bold hover:text-emerald-accent transition-colors group"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        title="Your Path to Financial Clarity"
        subtitle="A 3-step low-risk funnel designed for your success."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-emerald-accent/10 -z-10" />
          
          {[
            {
              step: "01",
              title: "Book Your Free Strategy Call",
              desc: "Spend 30 mins with our experts to map your pain points and growth goals. No obligation."
            },
            {
              step: "02",
              title: "Custom Financial Assessment",
              desc: "We audit your current finances, identify gaps, and share a tailored growth plan."
            },
            {
              step: "03",
              title: "Execute & Scale",
              desc: "Our team takes over your finance operations, giving you ongoing support to grow confidently."
            }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="w-16 h-16 bg-white border-4 border-emerald-accent text-emerald-accent rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-navy-secondary">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-accent/5 text-emerald-accent text-sm font-bold">
            <ShieldCheck className="w-4 h-4 mr-2" />
            No long-term contracts—cancel anytime.
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-navy-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-accent/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              What Our Clients Say
            </h2>
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
                >
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
                  <p className="text-xl italic text-gray-300 mb-8 leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-emerald-accent" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-white">{t.author}</p>
                      <p className="text-sm text-emerald-accent">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-xl">
                <p className="text-4xl font-bold text-navy-secondary mb-2">{stat.value}</p>
                <p className="text-sm font-bold text-emerald-accent uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
            <div className="bg-emerald-accent p-8 rounded-2xl text-center shadow-xl flex flex-col justify-center">
              <p className="text-white font-bold text-lg leading-tight">
                Ready to be our next success story?
              </p>
              <Link to="/contact" className="mt-4 text-white font-bold underline hover:no-underline">
                Book a call now
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Study Preview */}
      <Section 
        title="Real Results for Real Businesses"
        subtitle="See how we've helped companies like yours scale."
      >
        <div className="card overflow-hidden p-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent text-xs font-bold uppercase tracking-wider">
              E-Commerce Case Study
            </div>
            <h3 className="text-3xl font-bold text-navy-secondary">
              How a Funded E-Commerce Startup Saved $240k in Taxes
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Before</p>
                <p className="text-sm text-gray-600">Manual bookkeeping, 20% revenue lost to avoidable taxes, no cash flow forecast.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-accent uppercase mb-2">After</p>
                <p className="text-sm text-gray-600">Automated systems, $240k tax savings, 35% profit increase, 12-month growth roadmap.</p>
              </div>
            </div>
            <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-gray-100 p-12 flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-gray-400 mb-4">Profit Increase After 12 Months</p>
                <div className="flex items-end gap-4 h-48">
                  <div className="flex-grow bg-gray-100 rounded-t-lg h-1/3 relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">Before</div>
                  </div>
                  <div className="flex-grow bg-emerald-accent rounded-t-lg h-full relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-accent">+35%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Authority Section */}
      <Section 
        className="bg-gray-50"
        title="Why Trust Virtual GGC?"
        subtitle="We combine deep expertise with bank-level security."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              title: "10+ Years Experience",
              desc: "Combined startup finance & compliance expertise."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "GrowthFirst™ Framework",
              desc: "Turn financial data into actionable growth steps."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Expert Team",
              desc: "Certified CFOs, CPAs, and finance experts."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Bank-Level Security",
              desc: "GDPR/SOC 2 compliant data encryption."
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-accent">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-secondary">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about partnering with us."
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How much does this cost?",
              a: "Pricing starts at $999/month for basic accounting, up to $4999/month for full virtual CFO support. We’ll share a custom quote on your strategy call."
            },
            {
              q: "Is my data secure?",
              a: "Yes—we use bank-level encryption and never share your data with third parties without consent."
            },
            {
              q: "Can you help with fundraising?",
              a: "Absolutely—our CFOs build investor-ready financial models and pitch decks to secure funding faster."
            },
            {
              q: "How long until I see results?",
              a: "You’ll get your first clear financial report in 2 weeks; most clients see a 10-15% cash flow improvement in 3 months."
            }
          ].map((faq, i) => (
            <div key={i} className="card p-6">
              <h3 className="text-lg font-bold text-navy-secondary mb-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-accent rounded-full" />
                {faq.q}
              </h3>
              <p className="text-gray-600 pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-accent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Guessing Your Numbers. Start Scaling With Clarity.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Don’t let financial chaos hold your business back—book your free strategy call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-5 bg-white text-emerald-accent font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl">
              Book a Free Financial Strategy Call
            </Link>
            <Link to="/case-studies" className="px-10 py-5 bg-navy-secondary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-2xl">
              View Full Case Studies
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 text-white/60 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            100% satisfaction guarantee—if you’re not happy with your first month, we’ll refund your fee.
          </div>
        </div>
      </section>
    </div>
  );
}


