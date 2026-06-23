import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de login - em produção, integrar com sistema de autenticação
    if (formData.username === 'admin' && formData.password === 'plenitude2024') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ username: formData.username }));
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para o portal...",
      });
      setTimeout(() => navigate('/portal'), 1000);
    } else {
      toast({
        title: "Erro no login",
        description: "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - Portal Interno | Plenitude</title>
        <meta name="description" content="Acesso restrito para funcionários da Plenitude Administradora." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#001735] to-[#003366] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="logo-container mx-auto mb-6">
                <img 
                  src="/logo-plenitude.png"
                  alt="Plenitude Logo" 
                  className="h-16 w-auto mx-auto"
                />
              </div>
              <h1 className="text-2xl font-merriweather font-bold text-[#001735] mb-2">
                Portal Interno
              </h1>
              <p className="text-[#c4c4c1] font-inter">
                Acesso restrito para funcionários
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#001735] mb-2">
                  Usuário
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#c4c4c1] h-5 w-5" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all"
                    placeholder="Digite seu usuário"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#001735] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#c4c4c1] h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-[#c4c4c1] rounded-lg focus:ring-2 focus:ring-[#cdaa39] focus:border-[#cdaa39] outline-none transition-all"
                    placeholder="Digite sua senha"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c4c4c1] hover:text-[#cdaa39] transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#cdaa39] hover:bg-[#b8941f] text-[#001735] font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/')}
                className="text-[#cdaa39] hover:text-[#b8941f] font-medium transition-colors"
              >
                ← Voltar ao site
              </button>
            </div>

            <div className="mt-8 p-4 bg-[#f8f9fa] rounded-lg">
              <p className="text-xs text-[#c4c4c1] text-center">
                <strong>Demo:</strong> usuário: admin | senha: plenitude2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;