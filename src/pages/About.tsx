import { Link } from 'react-router-dom';
import { 
  Quote, 
  Target, 
  Settings, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

export default function About() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Trust Engineering for Growing Brands</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to give every growing business the financial clarity and strategic support they need to scale confidently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <Section className="bg-white" align="left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/priya/800/1000" 
                alt="Priya Mehta - Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block max-w-xs">
              <Quote className="w-8 h-8 text-emerald-accent mb-4" />
              <p className="text-gray-600 italic text-sm leading-relaxed">
                "Financial clarity is the difference between a business that survives and one that thrives."
              </p>
              <p className="mt-4 font-bold text-navy-secondary">Priya Mehta</p>
              <p className="text-xs text-emerald-accent font-bold uppercase tracking-widest">Founder & CEO</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent text-xs font-bold uppercase tracking-wider">
              Our Founder
            </div>
            <h2 className="text-4xl font-bold text-navy-secondary">The Story Behind Virtual GGC</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Virtual GGC was founded by Priya Mehta, a former startup CFO who spent 10 years helping founders navigate scaling chaos. She saw firsthand how financial clarity could make or break a business—and built a team to bring that clarity to every growing brand.
              </p>
              <p>
                Priya is a certified CPA with expertise in fundraising, compliance, and growth strategy. Her vision was to democratize high-level financial leadership for startups and SMEs that don't need a full-time CFO but desperately need CFO-level insights.
              </p>
            </div>
            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-accent/5 rounded-full flex items-center justify-center text-emerald-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-navy-secondary">Certified CPA & CFO</p>
                <p className="text-sm text-gray-500">Member of the American Institute of CPAs (AICPA)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card bg-white p-12 space-y-6">
            <div className="w-12 h-12 bg-emerald-accent/5 rounded-xl flex items-center justify-center text-emerald-accent">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-secondary">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To give every growing business the financial clarity and strategic support they need to scale confidently—no guesswork, no chaos.
            </p>
          </div>
          <div className="card bg-white p-12 space-y-6">
            <div className="w-12 h-12 bg-emerald-accent/5 rounded-xl flex items-center justify-center text-emerald-accent">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-secondary">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the global standard for virtual financial leadership, helping 10,000+ businesses achieve sustainable, profitable growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Systems & Processes */}
      <Section 
        title="The GrowthFirst™ Framework"
        subtitle="Our proprietary framework combines automated tools, strategic planning, and ongoing support to turn finances into a growth engine."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Automated Systems",
              desc: "We implement bank-level encrypted, automated bookkeeping and reporting tools that grow with you."
            },
            {
              title: "Strategic Planning",
              desc: "Our CFOs build 12-month growth roadmaps, cash flow forecasts, and fundraising models."
            },
            {
              title: "Ongoing Support",
              desc: "Monthly strategy calls and real-time dashboards keep you on track to hit your revenue goals."
            }
          ].map((item, i) => (
            <div key={i} className="card bg-white p-8 space-y-4">
              <div className="w-10 h-10 bg-emerald-accent text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-navy-secondary">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Signal */}
      <Section className="bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-navy-secondary">Strict Adherence to Standards</h2>
          <p className="text-lg text-gray-600">
            We take our responsibility seriously. Virtual GGC is a member of the American Institute of CPAs (AICPA) and strictly adheres to ethical and professional standards.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-12 flex items-center font-bold text-xl text-navy-secondary">AICPA</div>
            <div className="h-12 flex items-center font-bold text-xl text-navy-secondary">GDPR COMPLIANT</div>
            <div className="h-12 flex items-center font-bold text-xl text-navy-secondary">SOC 2 TYPE II</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-emerald-accent text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Scale With Clarity?</h2>
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
