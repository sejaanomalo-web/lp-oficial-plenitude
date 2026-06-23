import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#001735] text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Company Info */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} viewport={{
            once: true
          }}>
              <div className="footer-logo mb-6">
                <img src="https://horizons-cdn.hostinger.com/af5a13d9-5d1d-4d49-b399-53ece728ed36/b25517415e9c33cb589dc0cb6ff45cf4.png" alt="Plenitude Logo" />
              </div>
              
              <p className="font-inter text-gray-300 mb-6 leading-relaxed max-w-md">
                Cuidamos do seu condomínio com eficiência e transparência. 
                Mais de 15 anos de experiência em administração predial e 
                assessoria documental imobiliária.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#cdaa39]" />
                <a href="https://wa.me/5545999420297" target="_blank" rel="noopener noreferrer" className="font-inter text-gray-300 hover:text-[#cdaa39] transition-colors">(45) 99942-0297</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#cdaa39]" />
                <a href="mailto:cascavel@plenitudeadm.com.br" className="font-inter text-gray-300 hover:text-[#cdaa39] transition-colors">cascavel@plenitudeadm.com.br</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#cdaa39] mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-300">
                  Avenida Brasil, 5337, Centro, Cascavel-PR, 85802-770
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-[#cdaa39]" />
                <span className="font-inter text-gray-300">CNPJ: 59.167.696/0001-98</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} className="font-inter text-gray-400 text-sm text-center">
            © {currentYear} Plenitude Administradora. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>;
};
export default Footer;