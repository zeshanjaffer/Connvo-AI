import { FiTwitter, FiGithub, FiMail, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-[#00809D] to-[#006d85] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-[#FFD700]">Connvo</h3>
            <p className="text-[#FCF8DD] mb-6 max-w-md leading-relaxed">
              Master phone conversations with AI. Practice cold calling, interviews, and small talk in real-time. 
              Transform your communication skills with our innovative AI-powered platform.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[#FCF8DD] text-sm font-medium">Available 24/7 for practice</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-3 text-[#FCF8DD]">
              <li><a href="#modes" className="hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2">→ Practice Modes</a></li>
              <li><a href="#pricing" className="hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2">→ Pricing Plans</a></li>
              <li><a href="#features" className="hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2">→ Features</a></li>
              <li><a href="#faq" className="hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2">→ FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2">→ Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://twitter.com/connvo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#FFD700] text-[#00809D] rounded-full flex items-center justify-center hover:bg-[#D3AF37] transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com/company/connvo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#FFD700] text-[#00809D] rounded-full flex items-center justify-center hover:bg-[#D3AF37] transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FiLinkedin size={20} />
              </a>
              <a href="https://instagram.com/connvo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#FFD700] text-[#00809D] rounded-full flex items-center justify-center hover:bg-[#D3AF37] transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FiInstagram size={20} />
              </a>
              <a href="mailto:hello@connvo.com" className="w-12 h-12 bg-[#FFD700] text-[#00809D] rounded-full flex items-center justify-center hover:bg-[#D3AF37] transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FiMail size={20} />
              </a>
            </div>
            <p className="text-[#FCF8DD] text-sm">Follow us for tips & updates</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#FCF8DD] text-sm">
            &copy; {new Date().getFullYear()} Connvo. All rights reserved. | Made with passion for better communication
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-[#FCF8DD] hover:text-[#FFD700] transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="text-[#FCF8DD] hover:text-[#FFD700] transition-colors duration-300">Terms of Service</a>
            <a href="/cookies" className="text-[#FCF8DD] hover:text-[#FFD700] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
