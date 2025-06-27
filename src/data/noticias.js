export const noticias = [
  {
    id: "equipos-temporada-25-26",
    contenido: null,
    imagen: '/images/BenjaKids.JPG',
    categoria: 'Equipos',
    destacado: true,
    tieneComponenteEspecial: true
  },
  {
    id: "jornadas-tecnificacion-2025",
    contenido: `
      <div class="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl mb-6">
        <h1 class="text-2xl font-bold text-center mb-2">🏀 JORNADAS DE TECNIFICACIÓN</h1>
        <p class="text-center text-lg font-semibold mb-4">CLUB CALASANZ</p>
        <div class="space-y-4 mt-6">
          <div class="flex items-center space-x-4">
            <div class="bg-white/20 p-3 rounded-full flex-shrink-0">📅</div>
            <div>Del 18 al 31 de Agosto 2025</div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="bg-white/20 p-3 rounded-full flex-shrink-0">⏰</div>
            <div>8:30 - 13:30h (Lunes a Viernes)</div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="bg-white/20 p-3 rounded-full flex-shrink-0">⏳</div>
            <div>2 semanas intensivas</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 class="text-green-700 text-xl font-bold mb-4 text-center">📋 HORARIO DIARIO</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span class="font-bold text-green-600 bg-green-100 px-3 py-1 rounded">8:30-9:00</span>
            <span class="text-gray-700">Recepción y calentamiento</span>
          </div>
          <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span class="font-bold text-green-600 bg-green-100 px-3 py-1 rounded">9:00-11:00</span>
            <span class="text-gray-700">Técnica individual (1ª parte)</span>
          </div>
          <div class="flex justify-between items-center bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <span class="font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded">11:00-11:30</span>
            <span class="font-medium text-yellow-800">DESAYUNO 🥪</span>
          </div>
          <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span class="font-bold text-green-600 bg-green-100 px-3 py-1 rounded">11:30-13:30</span>
            <span class="text-gray-700">Técnica individual (2ª parte)</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 class="text-green-700 text-xl font-bold mb-6 text-center">📊 ADAPTACIÓN POR CATEGORÍAS</h3>
        <div class="space-y-4">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border-l-4 border-green-500">
            <span class="font-bold text-green-800 text-lg">BENJAMÍN (8-10 años)</span>
            <span class="text-sm bg-white text-green-700 px-4 py-2 rounded-full font-medium shadow-sm mt-2 md:mt-0">🎯 Enfoque lúdico y básico</span>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-center bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-l-4 border-blue-500">
            <span class="font-bold text-blue-800 text-lg">ALEVÍN (10-12 años)</span>
            <span class="text-sm bg-white text-blue-700 px-4 py-2 rounded-full font-medium shadow-sm mt-2 md:mt-0">📈 Progresión técnica elemental</span>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-center bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-xl border-l-4 border-yellow-500">
            <span class="font-bold text-yellow-800 text-lg">INFANTIL (12-14 años)</span>
            <span class="text-sm bg-white text-yellow-700 px-4 py-2 rounded-full font-medium shadow-sm mt-2 md:mt-0">🏀 Fundamentos sólidos</span>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-center bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-xl border-l-4 border-orange-500">
            <span class="font-bold text-orange-800 text-lg">CADETE (14-16 años)</span>
            <span class="text-sm bg-white text-orange-700 px-4 py-2 rounded-full font-medium shadow-sm mt-2 md:mt-0">⚡ Técnica avanzada</span>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-center bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-xl border-l-4 border-purple-500">
            <span class="font-bold text-purple-800 text-lg">JUNIOR (16-18 años)</span>
            <span class="text-sm bg-white text-purple-700 px-4 py-2 rounded-full font-medium shadow-sm mt-2 md:mt-0">🏆 Perfeccionamiento máximo</span>
          </div>
        </div>
      </div>

      <div class="bg-green-600 text-white rounded-xl shadow-lg p-6 mb-6">
        <h3 class="text-xl font-bold mb-6 text-center">💰 PRECIOS 2025</h3>
        <div class="space-y-4">
          <div class="bg-white/20 p-5 rounded-xl text-center font-bold text-lg">
            🏆 OPCIÓN COMPLETA (2 semanas): 100€
          </div>
          <div class="bg-white/20 p-5 rounded-xl text-center font-bold text-lg">
            ⚡ OPCIÓN SEMANAL (1 semana): 60€
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 class="text-green-700 text-xl font-bold mb-6 text-center">📋 INCLUYE EN EL PRECIO</h3>
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="bg-green-100 text-green-700 rounded-full p-2 mr-3 mt-1">✓</span>
            <div>
              <h4 class="font-bold text-gray-800">4 horas de entrenamiento técnico diario</h4>
              <p class="text-sm text-gray-600">Dirigido por entrenadores titulados con amplia experiencia en formación</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-green-100 text-green-700 rounded-full p-2 mr-3 mt-1">✓</span>
            <div>
              <h4 class="font-bold text-gray-800">Desayuno completo y saludable</h4>
              <p class="text-sm text-gray-600">Incluye fruta, lácteos, zumo y sandwiches</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-green-100 text-green-700 rounded-full p-2 mr-3 mt-1">✓</span>
            <div>
              <h4 class="font-bold text-gray-800">Evaluación técnica personalizada</h4>
              <p class="text-sm text-gray-600">Adaptado al progreso del jugador/a</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-green-100 text-green-700 rounded-full p-2 mr-3 mt-1">✓</span>
            <div>
              <h4 class="font-bold text-gray-800">Camiseta de participación oficial</h4>
              <p class="text-sm text-gray-600">Para cada jugador</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="bg-green-100 text-green-700 rounded-full p-2 mr-3 mt-1">✓</span>
            <div>
              <h4 class="font-bold text-gray-800">Seguro de accidentes incluido</h4>
              <p class="text-sm text-gray-600">Cobertura durante toda la duración del campus</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-green-700 text-lg font-bold mb-4">🥪 DESAYUNO INCLUIDO</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Fruta fresca de temporada</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Sandwiches variados</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Zumo natural</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Agua mineral</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Lácteos (yogur, queso, etc.)</span>
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-green-700 text-lg font-bold mb-4">🎒 QUÉ TRAER</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Ropa deportiva cómoda</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Zapatillas de baloncesto</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Botella de agua reutilizable</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Toalla personal</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">•</span>
              <span class="text-gray-700">Ropa de cambio</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-800 text-white rounded-xl shadow-lg p-8 text-center">
        <h3 class="text-2xl font-bold mb-6">📞 CONTACTO E INSCRIPCIONES</h3>
        <div class="space-y-4 text-lg">
          <p class="flex items-center justify-center">
            <span class="mr-2">📧</span>
            <a href="mailto:clubcalasanzbaloncesto@gmail.com" class="hover:underline">info@clubcalasanz.es</a>
          </p>
          <p class="flex items-center justify-center">
            <span class="mr-2">📱</span>
            <span>+34 690342138</span>
          </p>
          <p class="flex items-center justify-center">
            <span class="mr-2">📍</span>
            <span>Pabellón Calasanz, C/ P.º Canalejas, 8, 39004 Santander, Cantabria</span>
          </p>
        </div>
      </div>

      <div class="bg-green-600 text-white rounded-xl shadow-lg p-6 text-center font-bold text-lg">
        🏀 ¡EMPIEZA LA TEMPORADA A TOPE! 💪
      </div>
    `,
    imagen: '/images/basket.JPEG',
    categoria: 'Eventos',
    destacado: true,
    tieneFormulario: false,
    tipoFormulario: ''
  }
];
