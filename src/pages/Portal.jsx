import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Calculator, 
  Settings, 
  LogOut, 
  Download,
  Calendar,
  Building,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portal = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (!isAuthenticated || !userData) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate('/');
  };

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: `${feature} será implementado em breve!`,
    });
  };

  if (!user) {
    return <div>Carregando...</div>;
  }

  const menuItems = [
    {
      title: 'Documentos',
      description: 'Acesse contratos, atas e documentos importantes',
      icon: FileText,
      color: 'bg-blue-500',
      items: ['Contratos', 'Atas de Reunião', 'Relatórios', 'Manuais']
    },
    {
      title: 'Clientes',
      description: 'Gerencie informações dos condomínios',
      icon: Users,
      color: 'bg-green-500',
      items: ['Lista de Condomínios', 'Contatos', 'Histórico', 'Novos Clientes']
    },
    {
      title: 'Financeiro',
      description: 'Relatórios e controles financeiros',
      icon: Calculator,
      color: 'bg-yellow-500',
      items: ['Balancetes', 'Fluxo de Caixa', 'Inadimplência', 'Orçamentos']
    },
    {
      title: 'Configurações',
      description: 'Configurações do sistema e perfil',
      icon: Settings,
      color: 'bg-purple-500',
      items: ['Perfil', 'Notificações', 'Backup', 'Logs do Sistema']
    }
  ];

  const quickActions = [
    { title: 'Novo Relatório', icon: FileText, action: () => handleFeatureClick('Novo Relatório') },
    { title: 'Agenda', icon: Calendar, action: () => handleFeatureClick('Agenda') },
    { title: 'Condomínios', icon: Building, action: () => handleFeatureClick('Condomínios') },
    { title: 'Financeiro', icon: DollarSign, action: () => handleFeatureClick('Financeiro') }
  ];

  return (
    <>
      <Helmet>
        <title>Portal Interno - Dashboard | Plenitude</title>
        <meta name="description" content="Portal interno para funcionários da Plenitude Administradora." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logo-plenitude.png"
                  alt="Plenitude Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h1 className="text-xl font-merriweather font-bold text-[#001735]">
                    Portal Interno
                  </h1>
                  <p className="text-sm text-[#c4c4c1]">
                    Bem-vindo, {user.username}
                  </p>
                </div>
              </div>
              
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center space-x-2 border-[#cdaa39] text-[#cdaa39] hover:bg-[#cdaa39] hover:text-white"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-merriweather font-bold text-[#001735] mb-6">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={action.action}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#cdaa39] group"
                >
                  <action.icon className="h-8 w-8 text-[#cdaa39] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-[#001735] group-hover:text-[#cdaa39] transition-colors">
                    {action.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-merriweather font-bold text-[#001735] mb-6">
              Menu Principal
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#cdaa39] overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg ${item.color} bg-opacity-10`}>
                        <item.icon className={`h-6 w-6 ${item.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-merriweather font-bold text-[#001735] group-hover:text-[#cdaa39] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#c4c4c1] text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <button
                          key={subItem}
                          onClick={() => handleFeatureClick(subItem)}
                          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-[#001735] hover:text-[#cdaa39] flex items-center justify-between group/item"
                        >
                          <span>{subItem}</span>
                          <Download className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Sistema em Desenvolvimento
                </h3>
                <p className="text-blue-700 text-sm">
                  Este é um protótipo do portal interno. As funcionalidades completas serão implementadas 
                  conforme as necessidades específicas da empresa. Entre em contato com o administrador 
                  do sistema para mais informações.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Portal;