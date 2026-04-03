import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Zap,
  Settings,
  ChevronRight
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

const services = [
  {
    id: 'cfo',
    icon: <Users className="w-12 h-12 text-emerald-accent" />,
    title: 'Virtual CFO Service',
    problem: 'You’re growing fast but lack strategic financial leadership to forecast cash flow or prepare for funding.',
    agitation: 'Blind decisions could cost you thousands in lost profit or missed funding opportunities.',
    solution: 'Fractional CFO support to build scalable finance frameworks and growth roadmaps.',
    outcome: '20-30% profit margin lift, investor-ready reports, and eliminated cash flow gaps.',
    features: [
      'Monthly strategy calls',
      'Cash flow forecasting',
      'Fundraising support',
      'Team training'
    ],
    who: 'Funded startups, scaling SMEs, D2C brands ($500k+ annual revenue).',
    cta: 'Book Your Virtual CFO Strategy Call'
  },
  {
    id: 'accounting',
    icon: <BarChart3 className="w-12 h-12 text-emerald-accent" />,
    title: 'Accounting & Bookkeeping',
    problem: 'Manual bookkeeping is slow, error-prone, and gives you zero real-time visibility.',
    agitation: 'Inaccurate books lead to bad decisions and major headaches during tax season.',
    solution: 'Automated, accurate bookkeeping that gives you real-time financial health visibility.',
    outcome: '100% accurate books, real-time dashboards, and 10+ hours saved per week.',
    features: [
      'Automated data entry',
      'Monthly financial statements',
      'Accounts payable/receivable',
      'Real-time profit tracking'
    ],
    who: 'Early-stage startups, SMEs, and digital agencies looking for clarity.',
    cta: 'Get Your Books in Order'
  },
  {
    id: 'compliance',
    icon: <ShieldCheck className="w-12 h-12 text-emerald-accent" />,
    title: 'Compliance & Taxation',
    problem: 'Taxes feel like a costly surprise every quarter, not a planned expense.',
    agitation: 'Non-compliance risks can lead to heavy penalties and legal issues.',
    solution: 'Proactive tax planning and compliance to keep you legal and save money.',
    outcome: 'Zero tax surprises, minimized tax liability, and full regulatory compliance.',
    features: [
      'Quarterly tax planning',
      'GST/VAT compliance',
      'Annual tax filing',
      'Regulatory audits'
    ],
    who: 'Any business looking to eliminate tax stress and stay compliant.',
    cta: 'Eliminate Tax Stress'
  },
  {
    id: 'analysis',
    icon: <TrendingUp className="w-12 h-12 text-emerald-accent" />,
    title: 'Financial Planning & Analysis',
    problem: 'You have data, but you don’t know how to turn it into growth actions.',
    agitation: 'Wasted budgets and missed ROI opportunities are holding back your scale.',
    solution: 'Custom reports to optimize budgets, maximize ROI, and hit revenue goals faster.',
    outcome: 'Data-driven growth, optimized spending, and clear revenue targets.',
    features: [
      'Budget optimization',
      'ROI analysis',
      'Revenue forecasting',
      'Custom KPI dashboards'
    ],
    who: 'Growth-focused brands ready to optimize their performance.',
    cta: 'Turn Data Into Growth'
  }
];

export default function Services() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Outcome-Focused Financial Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide the strategic leadership and automated systems you need to turn your finances into a growth engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="space-y-0">
        {services.map((service, i) => (
          <Section 
            key={service.id}
            id={service.id}
            className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            align="left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="inline-flex p-4 bg-emerald-accent/5 rounded-2xl">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-navy-secondary">{service.title}</h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                    <p className="text-sm font-bold text-red-500 uppercase mb-2">The Problem</p>
                    <p className="text-gray-700 font-medium">{service.problem}</p>
                    <p className="text-gray-500 text-sm mt-2 italic">{service.agitation}</p>
                  </div>
                  
                  <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-accent">
                    <p className="text-sm font-bold text-emerald-accent uppercase mb-2">The Solution</p>
                    <p className="text-gray-700 font-medium">{service.solution}</p>
                    <p className="text-emerald-700 font-bold mt-2">Outcome: {service.outcome}</p>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-navy-secondary mb-8">What You Get</h3>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase mb-3 tracking-widest">Who It's For</p>
                  <p className="text-navy-secondary font-medium">{service.who}</p>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* Trust Section */}
      <Section className="bg-navy-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Not Sure Which Service You Need?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Book a free 30-minute strategy call and we'll help you map out the best path for your business growth.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-10 py-4">
          Book Your Free Strategy Call
        </Link>
      </Section>
    </div>
  );
}
