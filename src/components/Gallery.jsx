import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      type: 'image',
      title: 'Condomínio Residencial Premium',
      description: 'Gestão completa de condomínio de alto padrão'
    },
    {
      type: 'video',
      title: 'Tour Virtual - Gestão Moderna',
      description: 'Conheça nossos métodos de administração'
    },
    {
      type: 'image',
      title: 'Área de Lazer Administrada',
      description: 'Manutenção e gestão de áreas comuns'
    },
    {
      type: 'image',
      title: 'Portaria e Segurança',
      description: 'Controle de acesso e segurança predial'
    },
    {
      type: 'video',
      title: 'Depoimento de Cliente',
      description: 'Experiência com nossos serviços'
    },
    {
      type: 'image',
      title: 'Salão de Festas',
      description: 'Gestão de espaços para eventos'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-merriweather font-bold text-[#001735] mb-6">
            Nossa <span className="text-[#cdaa39]">Galeria</span>
          </h2>
          <p className="text-xl font-inter text-[#c4c4c1] max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos condomínios que administramos e veja como nossos 
            serviços fazem a diferença na gestão predial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300">
                {item.type === 'image' ? (
                  <div className="relative">
                    <img 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={item.title}
                     src="https://images.unsplash.com/photo-1684419432087-7df72ed168cd" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-merriweather font-bold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 font-inter text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ImageIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <img 
                      className="w-full h-64 object-cover"
                      alt={item.title}
                     src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
                    
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-[#cdaa39] rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-merriweather font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 font-inter text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Condomínios' },
            { number: '15+', label: 'Anos de Experiência' },
            { number: '10k+', label: 'Unidades Administradas' },
            { number: '98%', label: 'Satisfação dos Clientes' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-merriweather font-bold text-[#cdaa39] mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-[#001735] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;