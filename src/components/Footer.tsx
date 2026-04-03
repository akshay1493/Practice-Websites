import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Virtual CFO', href: '/services#cfo' },
      { name: 'Accounting', href: '/services#accounting' },
      { name: 'Compliance', href: '/services#compliance' },
      { name: 'Financial Analysis', href: '/services#analysis' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Virtual <span className="text-emerald-accent">GGC</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your dedicated virtual finance team for startups, SMEs, and growing brands—turning chaos into clarity, compliance, and scale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-emerald-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-emerald-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-emerald-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 text-sm hover:text-emerald-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Virtual GGC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-400 text-xs">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>hello@virtualggc.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
