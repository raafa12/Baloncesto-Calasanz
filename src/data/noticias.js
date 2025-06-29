export const noticias = [
  {
    id: "equipos-temporada-25-26",
    titulo: 'CALASANZ EQUIPOS - Temporada 2025/2026',
    contenido: null,
    imagen: '/images/BenjaKids.JPG',
    categoria: 'Equipos',
    destacado: true,
    tieneComponenteEspecial: true,
    oculta: true
  },
  {
    id: "jornadas-tecnificacion-2025",
    titulo: 'Jornadas de Tecnificación 2025 - Pretemporada',
    contenido: `
    <div class="min-h-screen bg-gradient-to-br from-green-950 via-gray-900 to-green-950 text-white relative overflow-hidden">
      <!-- Patrón de puntos sutiles -->
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <!-- Contenedor principal para todo el contenido -->
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <!-- Hero Section Optimizado para móvil -->
      <div class="relative overflow-hidden bg-gradient-to-r from-green-900/90 via-green-800/90 to-green-900/90 rounded-2xl shadow-2xl my-8">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative px-4 py-8 sm:py-12 text-center">
          <div class="animate-bounce mb-4 sm:mb-6">
            <span class="text-4xl sm:text-5xl">🏀</span>
          </div>
          <p class="text-lg sm:text-xl font-semibold mb-6 text-green-300 tracking-wider">CLUB CALASANZ</p>
          
          <!-- Info Cards optimizadas para móvil -->
          <div class="grid grid-cols-2 gap-3 max-w-md mx-auto sm:max-w-4xl sm:grid-cols-4 sm:gap-4">
            <div class="bg-green-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-800/50 hover:transform hover:scale-105 transition-transform duration-200">
              <p class="font-bold text-sm sm:text-base text-green-300 leading-tight">18-31 Agosto</p>
              <p class="text-xs sm:text-sm text-green-200 mt-1">2025</p>
            </div>
            <div class="bg-green-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-800/50 hover:transform hover:scale-105 transition-transform duration-200">
              <p class="font-bold text-sm sm:text-base text-green-300 leading-tight">8:30-13:30h</p>
              <p class="text-xs sm:text-sm text-green-200 mt-1">lunes a viernes</p>
            </div>
            <div class="bg-green-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-800/50 hover:transform hover:scale-105 transition-transform duration-200">
              <p class="font-bold text-sm sm:text-base text-green-300 leading-tight">2 semanas</p>
              <p class="text-xs sm:text-sm text-green-200 mt-1">Intensivas</p>
            </div>
            <div class="bg-green-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-800/50 hover:transform hover:scale-105 transition-transform duration-200">
              <p class="font-bold text-sm sm:text-base text-green-300 leading-tight">8-18 años</p>
              <p class="text-xs sm:text-sm text-green-200 mt-1">5 categorías</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-8 sm:py-12 space-y-8">
        <!-- Schedule Section -->
        <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-lg">
          <div class="bg-gradient-to-r from-green-700/80 to-green-800/90 p-4 sm:p-5">
            <h3 class="text-2xl sm:text-3xl font-bold text-center text-green-100 tracking-tight">HORARIO DIARIO</h3>
          </div>
          <div class="p-4 sm:p-6">
            <div class="space-y-3 sm:space-y-4">
              <div class="bg-green-800/40 border border-green-700/50 rounded-xl p-4 sm:p-5 flex items-center space-x-4 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-3xl sm:text-4xl flex-shrink-0">🏃‍♂️</span>
                <div class="flex-1 min-w-0">
                  <span class="font-bold text-base sm:text-lg block text-green-300 truncate">8:30 - 9:00</span>
                  <span class="text-green-100 text-sm sm:text-base">Recepción y calentamiento</span>
                </div>
              </div>
              <div class="bg-green-800/40 border border-green-700/50 rounded-xl p-4 sm:p-5 flex items-center space-x-4 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-3xl sm:text-4xl flex-shrink-0">🏀</span>
                <div class="flex-1 min-w-0">
                  <span class="font-bold text-base sm:text-lg block text-green-300 truncate">9:00 - 11:00</span>
                  <span class="text-green-100 text-sm sm:text-base">Técnica individual (1ª parte)</span>
                </div>
              </div>
              <div class="bg-green-800/40 border border-green-700/50 rounded-xl p-4 sm:p-5 flex items-center space-x-4 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-3xl sm:text-4xl flex-shrink-0">🥪</span>
                <div class="flex-1 min-w-0">
                  <span class="font-bold text-base sm:text-lg block text-green-300 truncate">11:00 - 11:30</span>
                  <span class="text-green-100 font-semibold text-sm sm:text-base">Desayuno</span>
                </div>
              </div>
              <div class="bg-green-800/40 border border-green-700/50 rounded-xl p-4 sm:p-5 flex items-center space-x-4 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-3xl sm:text-4xl flex-shrink-0">🏀</span>
                <div class="flex-1 min-w-0">
                  <span class="font-bold text-base sm:text-lg block text-green-300 truncate">11:30 - 13:30</span>
                  <span class="text-green-100 text-sm sm:text-base">Técnica individual (2ª parte)</span>
                </div>
              </div>
              <div class="bg-green-800/40 border border-green-700/50 rounded-xl p-4 sm:p-5 flex items-center space-x-4 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-3xl sm:text-4xl flex-shrink-0">👋</span>
                <div class="flex-1 min-w-0">
                  <span class="font-bold text-base sm:text-lg block text-green-300 truncate">13:30 - 14:00</span>
                  <span class="text-green-100 text-sm sm:text-base">Recogida de participantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Categories Section -->
        <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-lg">
          <div class="bg-gradient-to-r from-purple-700/80 to-purple-800/90 p-4 sm:p-5">
            <h3 class="text-2xl sm:text-3xl font-bold text-center text-purple-100 tracking-tight">CATEGORÍAS</h3>
          </div>
          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              <div class="bg-green-900/50 text-center p-3 sm:p-4 rounded-xl border border-green-700/50 hover:transform hover:scale-105 transition-transform duration-200 hover:shadow-md">
                <h4 class="font-bold text-base sm:text-lg text-green-300">BENJAMÍN</h4>
                <p class="text-green-200 text-sm sm:text-base">8-10 años</p>
              </div>
              <div class="bg-green-900/50 text-center p-3 sm:p-4 rounded-xl border border-green-700/50 hover:transform hover:scale-105 transition-transform duration-200 hover:shadow-md">
                <h4 class="font-bold text-base sm:text-lg text-green-300">ALEVÍN</h4>
                <p class="text-green-200 text-sm sm:text-base">10-12 años</p>
              </div>
              <div class="bg-green-900/50 text-center p-3 sm:p-4 rounded-xl border border-green-700/50 hover:transform hover:scale-105 transition-transform duration-200 hover:shadow-md">
                <h4 class="font-bold text-base sm:text-lg text-green-300">INFANTIL</h4>
                <p class="text-green-200 text-sm sm:text-base">12-14 años</p>
              </div>
              <div class="bg-green-900/50 text-center p-3 sm:p-4 rounded-xl border border-green-700/50 hover:transform hover:scale-105 transition-transform duration-200 hover:shadow-md">
                <h4 class="font-bold text-base sm:text-lg text-green-300">CADETE</h4>
                <p class="text-green-200 text-sm sm:text-base">14-16 años</p>
              </div>
              <div class="bg-green-900/50 text-center p-3 sm:p-4 rounded-xl border border-green-700/50 hover:transform hover:scale-105 transition-transform duration-200 hover:shadow-md">
                <h4 class="font-bold text-base sm:text-lg text-green-300">JUVENIL</h4>
                <p class="text-green-200 text-sm sm:text-base">16-18 años</p>
              </div>
            </div>
          </div>
        </div>

        <!-- What's Included -->
        <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-lg">
          <div class="bg-gradient-to-r from-blue-700/80 to-blue-800/90 p-4 sm:p-5">
            <h3 class="text-2xl sm:text-3xl font-bold text-center text-blue-100 tracking-tight">¿QUÉ INCLUYE?</h3>
          </div>
          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-800/40 rounded-xl border border-green-700/50 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-2xl text-green-400 flex-shrink-0">✓</span>
                <div>
                  <span class="font-medium text-sm sm:text-base text-green-100">4 horas de entrenamiento técnico diario</span>
                  <p class="text-xs sm:text-sm text-green-300 mt-1">Con entrenadores titulados y experimentados</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-800/40 rounded-xl border border-green-700/50 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-2xl text-green-400 flex-shrink-0">✓</span>
                <div>
                  <span class="font-medium text-sm sm:text-base text-green-100">Seguro de accidentes incluido</span>
                  <p class="text-xs sm:text-sm text-green-300 mt-1">Cobertura durante las actividades</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-800/40 rounded-xl border border-green-700/50 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-2xl text-green-400 flex-shrink-0">✓</span>
                <div>
                  <span class="font-medium text-sm sm:text-base text-green-100">Desayuno saludable incluido</span>
                  <p class="text-xs sm:text-sm text-green-300 mt-1">Para reponer energías a media mañana</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-800/40 rounded-xl border border-green-700/50 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-2xl text-green-400 flex-shrink-0">✓</span>
                <div>
                  <span class="font-medium text-sm sm:text-base text-green-100">Camiseta de participación oficial</span>
                  <p class="text-xs sm:text-sm text-green-300 mt-1">Diseño exclusivo 2025</p>
                </div>
              </div>
              <div class="md:col-span-2 flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-800/40 rounded-xl border border-green-700/50 hover:bg-green-800/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <span class="text-2xl text-green-400 flex-shrink-0">✓</span>
                <div>
                  <span class="font-medium text-sm sm:text-base text-green-100">Trabajo en grupos reducidos</span>
                  <p class="text-xs sm:text-sm text-green-300 mt-1">Adaptación progresiva según las necesidades del jugador</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Precios -->
        <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-lg">
          <div class="bg-gradient-to-r from-purple-700/80 to-purple-800/90 p-4 sm:p-5">
            <h3 class="text-2xl sm:text-3xl font-bold text-center text-purple-100 tracking-tight">PRECIOS</h3>
          </div>
          <div class="p-4 sm:p-6">
            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-green-800/80 to-green-900/90 text-white rounded-2xl p-6 sm:p-8 border border-green-700/50 shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="text-center h-full flex flex-col">
                  <h3 class="text-xl sm:text-2xl font-bold mb-3 text-green-300">OPCIÓN SEMANAL</h3>
                  <div class="flex-grow flex flex-col justify-center">
                    <p class="text-4xl sm:text-5xl font-bold mb-2 text-white">90€</p>
                    <p class="text-green-200 text-base sm:text-lg">1 semana de entrenamiento</p>
                  </div>
                  <div class="mt-4 pt-4 border-t border-green-700/50">
                    <p class="text-green-100 text-sm sm:text-base">Ideal para probar la experiencia</p>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-green-700/80 to-green-800/90 text-white rounded-2xl p-6 sm:p-8 border-2 border-green-600/70 shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300 transform hover:scale-[1.02] relative">
                <!-- Badge destacado -->
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span class="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MÁS POPULAR
                  </span>
                </div>
                <div class="text-center h-full flex flex-col mt-2">
                  <h3 class="text-xl sm:text-2xl font-bold mb-3 text-green-300">OPCIÓN COMPLETA</h3>
                  <div class="flex-grow flex flex-col justify-center">
                    <p class="text-4xl sm:text-5xl font-bold mb-2 text-white">160€</p>
                    <p class="text-green-200 text-base sm:text-lg">2 semanas intensivas</p>
                  </div>
                  <div class="mt-4 pt-4 border-t border-green-600/50">
                    <div class="bg-green-600/30 rounded-lg p-2 mb-2">
                      <p class="text-green-100 text-sm font-semibold">Ahorra 20€</p>
                    </div>
                    <p class="text-green-100 text-sm sm:text-base">La mejor relación calidad-precio</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Descuento por Hermanos -->
            <div class="mt-8 bg-amber-900/30 rounded-2xl overflow-hidden border border-amber-800/50 shadow-lg">
              <div class="bg-gradient-to-r from-amber-700/80 to-amber-800/90 p-4 sm:p-5">
                <h3 class="text-xl sm:text-2xl font-bold text-center text-amber-100 tracking-tight">🎯 DESCUENTO HERMANOS</h3>
              </div>
              <div class="p-4 sm:p-6 text-center">
                <div class="flex items-center justify-center space-x-4 mb-4">
                  <span class="text-4xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p class="text-2xl sm:text-3xl font-bold text-white">-10€</p>
                    <p class="text-amber-200">Por cada hermano</p>
                  </div>
                </div>
                <div class="bg-amber-800/40 rounded-xl p-4 border border-amber-700/50">
                  <p class="text-amber-100 text-sm sm:text-base">
                    <strong>Ejemplo:</strong> 2 hermanos (opción completa) = 320€ → <span class="text-amber-300 font-bold">300€</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Método de Pago -->
            <div class="mt-6 bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg">
              <div class="bg-gradient-to-r from-slate-700/80 to-slate-800/90 p-4 sm:p-5">
                <h3 class="text-xl sm:text-2xl font-bold text-center text-slate-100 tracking-tight">💳 MÉTODO DE PAGO</h3>
              </div>
              <div class="p-4 sm:p-6 text-center">
                <div class="bg-slate-700/40 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                  <p class="text-lg sm:text-xl font-semibold text-white mb-2">
                    💰 Pago en mano el primer día
                  </p>
                  <p class="text-slate-300 text-sm sm:text-base">
                    No es necesario realizar ningún pago por adelantado.<br>
                    Solo inscríbete y paga cuando comiences las jornadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección de Contacto -->
        <div class="pt-8 pb-16">
          <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-xl">
            <div class="bg-gradient-to-r from-indigo-700/80 to-indigo-800/90 p-4 sm:p-5">
              <h3 class="text-2xl sm:text-3xl font-bold text-center text-indigo-100 tracking-tight">📞 CONTACTO E INSCRIPCIONES</h3>
            </div>
      
      <!-- Formulario de Inscripción -->
      <div class="bg-gray-800/40 rounded-xl border border-gray-700/50 p-4 sm:p-6 space-y-6">
        <h3 class="text-xl sm:text-2xl font-bold text-center text-white mb-4">Formulario de Inscripción</h3>
        <form id="inscripcionForm" class="space-y-4 sm:space-y-5" onsubmit="event.preventDefault(); enviarWhatsApp()">
          <!-- Género -->
          <div>
            <label for="genero" class="block text-sm sm:text-base font-medium text-gray-300 mb-1.5">Género</label>
            <select id="genero" name="genero" class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base">
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <!-- Categoría -->
          <div>
            <label for="categoria" class="block text-sm sm:text-base font-medium text-gray-300 mb-1.5">Categoría</label>
            <select id="categoria" name="categoria" required class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base">
              <option value="" disabled selected>Selecciona tu categoría</option>
              <option value="Benjamín (8-10 años)">Benjamín (8-10 años)</option>
              <option value="Alevín (10-12 años)">Alevín (10-12 años)</option>
              <option value="Infantil (12-14 años)">Infantil (12-14 años)</option>
              <option value="Cadete (14-16 años)">Cadete (14-16 años)</option>
              <option value="Juvenil (16-18 años)">Juvenil (16-18 años)</option>
            </select>
          </div>

          <!-- Nombre y Apellidos -->
          <div>
            <label for="nombre" class="block text-sm sm:text-base font-medium text-gray-300 mb-1.5">Nombre y Apellidos del Jugador/a</label>
            <input type="text" id="nombre" name="nombre" required 
                   class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base" 
                   placeholder="Nombre completo">
          </div>

          <!-- Teléfono de Contacto -->
          <div>
            <label for="telefono" class="block text-sm sm:text-base font-medium text-gray-300 mb-1.5">Teléfono de Contacto</label>
            <input type="tel" id="telefono" name="telefono" required 
                   class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base" 
                   placeholder="+34 600 000 000"
                   pattern="[0-9+\-\s()]{9,20}"
                   title="Por favor, introduce un número de teléfono válido">
          </div>

          <!-- Opción de Semanas -->
          <div>
            <label class="block text-sm sm:text-base font-medium text-gray-300 mb-3">Duración</label>
            <div class="grid grid-cols-2 gap-3">
              <div class="relative">
                <input type="radio" id="semana1" name="semanas" value="1" class="hidden peer" required>
                <label for="semana1" class="flex items-center justify-center p-3 sm:p-4 bg-gray-700/50 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600/50 peer-checked:border-emerald-500 peer-checked:bg-emerald-900/20 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all duration-200 hover:shadow-md">
                  <span class="text-white font-medium text-sm sm:text-base">1 Semana</span>
                </label>
              </div>
              <div class="relative">
                <input type="radio" id="semanas2" name="semanas" value="2" class="hidden peer">
                <label for="semanas2" class="flex items-center justify-center p-3 sm:p-4 bg-gray-700/50 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600/50 peer-checked:border-emerald-500 peer-checked:bg-emerald-900/20 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all duration-200 hover:shadow-md">
                  <span class="text-white font-medium text-sm sm:text-base">2 Semanas</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Botón de Envío -->
          <button type="submit" class="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20 flex items-center justify-center space-x-2 text-base sm:text-lg">
            <span>Enviar Inscripción</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </form>

        <!-- Botones de Contacto -->
        <div class="grid grid-cols-1 gap-4 mt-6">
          <!-- Botón de WhatsApp -->
          <a href="https://wa.me/34690342138" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center space-x-3 p-4 bg-emerald-600/90 hover:bg-emerald-700 rounded-xl border border-emerald-700/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.231 8.413 3.488 2.245 2.259 3.481 5.283 3.48 8.458-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.499.099-.202.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span class="text-white font-medium">Habla con nosotros por WhatsApp</span>
          </a>

          <!-- Botón de Ubicación -->
          <a href="https://maps.google.com/maps?q=Pabellon+Calasanz+P.+de+Canalejas+8+39004+Santander" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center space-x-3 p-4 bg-red-600/90 hover:bg-red-700 rounded-xl border border-red-700/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-white font-medium">P.º Canalejas, 8, 39004 Santander, Cantabria</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Script para el formulario de WhatsApp -->
  <script src="/whatsapp-form.js"></script>

  <!-- Sección ¿Qué debes traer? -->
  <div class="py-8">
    <div class="bg-green-900/30 rounded-2xl overflow-hidden border border-green-800/50 shadow-xl">
      <div class="bg-gradient-to-r from-orange-700/80 to-orange-800/90 p-4 sm:p-5">
        <h3 class="text-2xl sm:text-3xl font-bold text-center text-orange-100 tracking-tight">🎒 ¿QUÉ DEBES TRAER?</h3>
      </div>
      <div class="p-4 sm:p-6">
        <!-- ... -->
          <div class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-orange-900/20 rounded-xl hover:bg-orange-900/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <span class="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-orange-400 text-lg sm:text-xl">👕</span>
            </span>
            <span class="text-orange-100 text-sm sm:text-base">Ropa deportiva cómoda</span>
          </div>
          <div class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-orange-900/20 rounded-xl hover:bg-orange-900/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <span class="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-orange-400 text-lg sm:text-xl">👟</span>
            </span>
            <span class="text-orange-100 text-sm sm:text-base">Zapatillas de baloncesto</span>
          </div>
          <div class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-orange-900/20 rounded-xl hover:bg-orange-900/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <span class="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-orange-400 text-lg sm:text-xl">🧴</span>
            </span>
            <span class="text-orange-100 text-sm sm:text-base">Toalla y ropa de recambio</span>
          </div>
          <div class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-orange-900/20 rounded-xl hover:bg-orange-900/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <span class="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-orange-400 text-lg sm:text-xl">🧠</span>
            </span>
            <span class="text-orange-100 text-sm sm:text-base">¡Muchas ganas de aprender!</span>
          </div>
        </div>
      </div>
    </div>

      </div>
      </div>
    </div>
  </div>
</div>
`,
    imagen: '/images/basket.JPEG',
    categoria: 'Eventos',
    destacado: true,
    tieneComponenteEspecial: false,
    tieneFormulario: false,
    tipoFormulario: ''
  }
];
