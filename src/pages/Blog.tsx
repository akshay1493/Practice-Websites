import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  ChevronRight, 
  Clock, 
  Tag,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Mail
} from 'lucide-react';
import Section from '@/src/components/Section';
import { motion } from 'motion/react';

const posts = [
  {
    id: 'cash-flow-mistakes',
    title: '5 Cash Flow Mistakes That Kill Scaling Startups (And How to Fix Them)',
    excerpt: 'Most startups fail not because of a lack of revenue, but because of poor cash flow management. Learn the common pitfalls and how to avoid them.',
    category: 'Growth',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/cashflow/800/600',
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    id: 'd2c-tax-season',
    title: 'How to Prepare Your D2C Brand for Tax Season (Without the Stress)',
    excerpt: 'Tax season doesn’t have to be a nightmare. We’ve built a checklist specifically for D2C brands to stay compliant and save money.',
    category: 'Compliance',
    date: 'Oct 5, 2023',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/tax/800/600',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 'series-a-metrics',
    title: '3 Financial Metrics Every Funded Startup Must Track to Secure Series A',
    excerpt: 'Investors look for specific financial indicators before committing to a Series A. Are you tracking the right metrics for your next round?',
    category: 'Fundraising',
    date: 'Sep 28, 2023',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/startup/800/600',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'saas-compliance',
    title: 'Compliance Hacks for SaaS Startups Entering New Markets',
    excerpt: 'Entering new markets brings a host of regulatory challenges. Here’s how to navigate international compliance without slowing down.',
    category: 'SaaS',
    date: 'Sep 15, 2023',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/saas/800/600',
    icon: <Users className="w-5 h-5" />
  }
];

export default function Blog() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Financial Insights & Growth Hacks</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advice on scaling your business, managing cash flow, and staying compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card p-0 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2 text-xs font-bold text-navy-secondary shadow-sm">
                  {post.icon}
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-secondary mb-4 leading-tight hover:text-emerald-accent transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-navy-secondary font-bold hover:text-emerald-accent transition-colors group"
                >
                  Read Full Post
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-emerald-accent/5 rounded-2xl flex items-center justify-center text-emerald-accent mx-auto">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-navy-secondary">Get Growth Insights in Your Inbox</h2>
          <p className="text-lg text-gray-600">
            Join 5,000+ founders who get our weekly financial growth hacks and compliance updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 outline-none transition-all"
            />
            <button type="submit" className="btn-primary py-4 px-8 whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
          <p className="text-xs text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Scale With Clarity?</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Don't let financial chaos hold your business back—book your free strategy call today.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-10 py-4">
          Book Your Free Strategy Call
        </Link>
      </Section>
    </div>
  );
}


