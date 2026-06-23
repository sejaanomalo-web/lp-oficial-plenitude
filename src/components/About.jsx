import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'Gestão financeira transparente',
    'Atendimento personalizado',
    'Tecnologia de ponta',
    'Equipe especializada',
    'Relatórios detalhados',
    'Suporte 24/7'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-merriweather font-bold text-[#001735] mb-6">
            Por que escolher a <span className="text-[#cdaa39]">Plenitude?</span>
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa experiência e dedicação nos tornam a escolha ideal para a administração 
            do seu condomínio. Oferecemos soluções personalizadas que atendem às 
            necessidades específicas de cada cliente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              className="w-full h-auto rounded-2xl shadow-elegant"
              alt="Prédio residencial moderno com varandas e céu azul"
             src="/imoveis/predio-residencial.webp" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-merriweather font-bold text-[#001735] mb-6">
              Nossos Diferenciais
            </h3>
            <p className="text-lg font-inter text-gray-600 mb-8 leading-relaxed">
              Combinamos tecnologia, expertise e um atendimento próximo para oferecer a melhor 
              experiência em gestão condominial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-[#cdaa39] flex-shrink-0 mt-1" />
                  <span className="font-inter text-[#001735] text-left">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;