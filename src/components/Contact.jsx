import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(45) 99942-0297',
      link: 'https://wa.me/5545999420297'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'cascavel@plenitudeadm.com.br',
      link: 'mailto:cascavel@plenitudeadm.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Avenida Brasil, 5337, Centro, Cascavel-PR, 85802-770',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-merriweather font-bold text-[#001735] mb-6">
            Entre em <span className="text-[#cdaa39]">Contato</span>
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender seu condomínio. Entre em contato conosco 
            e solicite um orçamento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-merriweather font-bold text-[#001735] mb-8 text-center lg:text-left">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-[#cdaa39]/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-[#cdaa39]" />
                  </div>
                  <div>
                    <h4 className="font-merriweather font-bold text-[#001735] mb-1">
                      {item.title}
                    </h4>
                    {item.link.startsWith('#') ? (
                      <p className="font-inter text-gray-600">{item.info}</p>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-gray-600 hover:text-[#cdaa39] transition-colors"
                      >
                        {item.info}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f8f9fa] rounded-2xl p-8">
              <h3 className="text-2xl font-merriweather font-bold text-[#001735] mb-6 text-center">
                Solicite um Orçamento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-[#001735] mb-2 text-left">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-[#001735] mb-2 text-left">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-inter font-medium text-[#001735] mb-2 text-left">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all"
                      placeholder="(45) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-[#001735] mb-2 text-left">
                    Qual a necessidade do seu condomínio?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all resize-none"
                    placeholder="Descreva brevemente o que você precisa..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#cdaa39] hover:bg-[#b8941f] text-[#001735] font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;