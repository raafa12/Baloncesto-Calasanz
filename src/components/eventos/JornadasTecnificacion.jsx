import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Trophy, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight } from 'lucide-react';

const JornadasTecnificacion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { name: 'BENJAMÍN', age: '8-10 años', color: 'from-green-400 to-green-600', focus: '🎯 Enfoque lúdico y básico', icon: '🌟' },
    { name: 'ALEVÍN', age: '10-12 años', color: 'from-blue-400 to-blue-600', focus: '📈 Progresión técnica elemental', icon: '⚡' },
    { name: 'INFANTIL', age: '12-14 años', color: 'from-yellow-400 to-yellow-600', focus: '🏀 Fundamentos sólidos', icon: '🎯' },
    { name: 'CADETE', age: '14-16 años', color: 'from-orange-400 to-orange-600', focus: '⚡ Técnica avanzada', icon: '🔥' },
    { name: 'JUNIOR', age: '16-18 años', color: 'from-purple-400 to-purple-600', focus: '🏆 Perfeccionamiento máximo', icon: '👑' }
  ];

  const schedule = [
    { time: '8:30-9:00', activity: 'Recepción y calentamiento', color: 'bg-green-50 border-green-200', icon: '🏃‍♂️' },
    { time: '9:00-11:00', activity: 'Técnica individual (1ª parte)', color: 'bg-blue-50 border-blue-200', icon: '🏀' },
    { time: '11:00-11:30', activity: 'DESAYUNO', color: 'bg-yellow-50 border-yellow-200', icon: '🥪', special: true },
    { time: '11:30-13:30', activity: 'Técnica individual (2ª parte)', color: 'bg-orange-50 border-orange-200', icon: '🎯' }
  ];

  const includes = [
    '4 horas de entrenamiento técnico diario',
    'Desayuno completo y saludable',
    'Evaluación técnica personalizada',
    'Camiseta de participación oficial',
    'Seguro de accidentes incluido'
  ];

  const breakfast = ['Fruta fresca de temporada', 'Sandwiches variados', 'Zumo natural', 'Agua mineral', 'Lácteos variados'];
  const toBring = ['Ropa deportiva cómoda', 'Zapatillas de baloncesto', 'Botella de agua reutilizable', 'Toalla personal', 'Ropa de cambio'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-4 py-8 sm:py-12 text-white text-center">
          <div className="animate-bounce mb-4">
            <span className="text-4xl sm:text-6xl">🏀</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 leading-tight">
            JORNADAS DE TECNIFICACIÓN
          </h1>
          <p className="text-lg sm:text-xl font-semibold mb-6 opacity-90">CLUB CALASANZ</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Del 18 al 31 de Agosto</p>
              <p className="text-sm opacity-90">2025</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">8:30 - 13:30h</p>
              <p className="text-sm opacity-90">Lunes a Viernes</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">2 semanas</p>
              <p className="text-sm opacity-90">intensivas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6 max-w-6xl mx-auto">
        
        {/* Schedule Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
            <h3 className="text-xl font-bold flex items-center justify-center">
              <Clock className="w-6 h-6 mr-2" />
              HORARIO DIARIO
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className={`${item.color} border-2 rounded-2xl p-4 flex items-center space-x-4 transform hover:scale-102 transition-all duration-200`}>
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <span className="font-bold text-lg block">{item.time}</span>
                    <span className={`${item.special ? 'text-yellow-800 font-bold' : 'text-gray-700'}`}>{item.activity}</span>
                  </div>
                  {item.special && <span className="text-2xl animate-pulse">✨</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
            <h3 className="text-xl font-bold flex items-center justify-center">
              <Users className="w-6 h-6 mr-2" />
              CATEGORÍAS
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {categories.map((cat, index) => (
                <div key={index} className={`bg-gradient-to-r ${cat.color} text-white rounded-2xl p-4 shadow-lg transform hover:scale-102 transition-all duration-300`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-2xl">{cat.icon}</span>
                        <h4 className="font-bold text-lg">{cat.name}</h4>
                      </div>
                      <p className="text-sm opacity-90 mb-2">{cat.age}</p>
                      <p className="text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">{cat.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">OPCIÓN COMPLETA</h3>
              <p className="text-3xl font-bold mb-1">100€</p>
              <p className="opacity-90">2 semanas</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">OPCIÓN SEMANAL</h3>
              <p className="text-3xl font-bold mb-1">60€</p>
              <p className="opacity-90">1 semana</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <h3 className="text-xl font-bold flex items-center justify-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              QUÉ INCLUYE
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl border border-green-100">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breakfast & What to Bring */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4">
              <h3 className="text-lg font-bold text-center">🥪 DESAYUNO</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {breakfast.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
              <h3 className="text-lg font-bold text-center">🎒 QUÉ TRAER</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {toBring.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-3xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
            <Phone className="w-8 h-8 mr-3" />
            CONTACTO E INSCRIPCIONES
          </h3>
          <div className="space-y-4">
            <a href="mailto:clubcalasanzbaloncesto@gmail.com" className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Mail className="w-8 h-8 sm:w-6 sm:h-6" />
              <span className="font-medium text-sm sm:text-base">clubcalasanzbaloncesto@gmail.com</span>
            </a>
            <a href="tel:+34690342138" className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Phone className="w-8 h-8 sm:w-6 sm:h-6" />
              <span className="font-medium text-sm sm:text-base">+34 690342138</span>
            </a>
            <a href="https://maps.google.com/?q=Pabellón+Calasanz,+C/+P.º+Canalejas,+8,+39004+Santander,+Cantabria" target="_blank" rel="noopener noreferrer" className="flex items-start justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <MapPin className="w-8 h-8 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
              <span className="font-medium text-center text-sm sm:text-base">Pabellón Calasanz<br />C/ P.º Canalejas, 8<br />39004 Santander, Cantabria</span>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3">🏀</span>
            ¡EMPIEZA LA TEMPORADA A TOPE!
            <span className="ml-3">💪</span>
          </h3>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JornadasTecnificacion;
