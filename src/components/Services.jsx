import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  Wrench,
  CheckCircle,
  Briefcase,
  MessageCircle,
  FileText
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Gestão Administrativa',
      description: 'Soluções completas para a administração eficiente do seu condomínio.',
      features: [
        'Controle orçamentário',
        'Prestação de contas',
        'Assembleias e previsão orçamentária',
        'Implementação da Comunicação',
        'Síndico profissional'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Transparência e controle total sobre as finanças do condomínio.',
      features: [
        'Assessoria contábil',
        'Cobranças de taxas e de inadimplência',
        'Pagamentos de fornecedores',
        'Relatórios financeiros',
        'Balancetes mensais'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Wrench,
      title: 'Manutenção Predial',
      description: 'Cuidado e valorização do seu patrimônio com manutenções preventivas e corretivas.',
      features: [
        'Preventiva e corretiva',
        'Controle de contratações',
        'Controle de qualidade',
        'Plantão 24 horas para emergências',
        'Realização de orçamentos'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Briefcase,
      title: 'Assessoria ao Síndico',
      description: 'Apoio completo para síndicos na gestão condominial.',
      features: [
        'Orientação na tomada de decisões',
        'Apoio em assembleias',
        'Intermediação entre condôminos',
        'Suporte jurídico e administrativo',
        'Consultoria personalizada'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Atendimento ao Condômino',
      description: 'Suporte direto e personalizado para garantir a satisfação e organização no dia a dia do condomínio.',
      features: [
        'Canais de atendimento exclusivos',
        'Resolução de demandas e dúvidas',
        'Mediação de conflitos internos',
        'Comunicação clara com moradores',
        'Registro e acompanhamento de solicitações'
      ],
      color: 'bg-orange-500' // Changed color for the new service
    },
    {
      icon: FileText,
      title: 'Assessoria Documental Imobiliária',
      description: 'Segurança e organização em toda a parte documental do seu patrimônio.',
      features: [
        'Regularização de documentos',
        'Registro e atualização de atas',
        'Orientação em escrituras e contratos',
        'Suporte em transações imobiliárias',
        'Arquivamento digital'
      ],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#001735]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-merriweather font-bold text-white mb-6">
            Nossos <span className="text-[#cdaa39]">Serviços</span>
          </h2>
          <p className="text-xl font-inter text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para a administração do seu condomínio, 
            com serviços especializados que garantem eficiência e transparência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="service-card group text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl ${service.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 inline-flex`}>
                  <service.icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl font-merriweather font-bold text-[#001735] group-hover:text-[#cdaa39] transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="font-inter text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-[#cdaa39] flex-shrink-0" />
                    <span className="font-inter text-[#001735] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;