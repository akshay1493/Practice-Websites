import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Clock, 
  Zap,
  Quote
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

const caseStudies = [
  {
    id: 'ecommerce',
    title: 'D2C Skincare Brand ($1.2M Annual Revenue)',
    problem: 'Manual bookkeeping, 25% revenue lost to avoidable taxes, founder spending 18 hours/week on spreadsheets.',
    solution: 'Full Virtual CFO + Accounting service: Automated bookkeeping, quarterly tax planning, cash flow forecasting.',
    results: [
      '28% profit margin lift',
      '$300k tax savings',
      'Founder saved 18 hours/week (reinvested into product development)'
    ],
    image: 'https://picsum.photos/seed/skincare/800/600',
    stats: [
      { label: 'Profit Lift', value: '28%' },
      { label: 'Tax Savings', value: '$300k' },
      { label: 'Time Saved', value: '18h/wk' }
    ]
  }
];

export default function CaseStudies() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Results for Real Businesses</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped companies like yours scale confidently with financial clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <div className="space-y-0">
        {caseStudies.map((study, i) => (
          <Section 
            key={study.id}
            className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            align="left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent text-xs font-bold uppercase tracking-wider">
                  Case Study
                </div>
                <h2 className="text-4xl font-bold text-navy-secondary">{study.title}</h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                    <p className="text-sm font-bold text-red-500 uppercase mb-2">The Problem</p>
                    <p className="text-gray-700 font-medium leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-accent">
                    <p className="text-sm font-bold text-emerald-accent uppercase mb-2">The Solution</p>
                    <p className="text-gray-700 font-medium leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-navy-secondary">The Results</h3>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-accent" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Book a Call to Get Similar Results
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-8">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                      <p className="text-2xl font-bold text-navy-secondary mb-1">{stat.value}</p>
                      <p className="text-xs font-bold text-emerald-accent uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="card bg-white p-8 border border-gray-100 shadow-xl">
                  <p className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Growth Timeline</p>
                  <div className="flex items-end gap-2 h-32">
                    {[20, 35, 45, 60, 85, 100].map((h, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        className="flex-grow bg-emerald-accent/20 rounded-t-sm hover:bg-emerald-accent transition-colors"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Month 1</span>
                    <span>Month 12</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* CTA */}
      <Section className="bg-emerald-accent text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Be Our Next Success Story?</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Join 100+ businesses that have transformed their finances into a growth engine.
        </p>
        <Link to="/contact" className="px-10 py-4 bg-white text-emerald-accent font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl">
          Book Your Free Strategy Call
        </Link>
      </Section>
    </div>
  );
}
