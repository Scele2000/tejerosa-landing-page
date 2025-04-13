<script>
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let formSubmitted = false;
  let formError = false;
  
  function handleSubmit() {
    // Aquí iría la lógica para enviar el formulario
    // Simulamos el envío para esta demo
    if (formData.name && formData.email && formData.message) {
      formSubmitted = true;
      formError = false;
      
      // Reiniciar el formulario
      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      formError = true;
    }
  }
</script>

<div class="min-h-screen pt-16 pb-10">
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-4 text-center">Contacto</h1>
      <p class="text-gray-700 text-center max-w-xl mx-auto mb-12">
        Estamos encantados de responder a tus preguntas y ayudarte con cualquier consulta. 
        Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div class="md:col-span-3">
          <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E27990] focus:border-[#E27990] outline-none transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E27990] focus:border-[#E27990] outline-none transition-colors"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E27990] focus:border-[#E27990] outline-none transition-colors"
                placeholder="¿En qué podemos ayudarte?"
                required
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea 
                id="message" 
                name="message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E27990] focus:border-[#E27990] outline-none transition-colors"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            
            <div class="flex items-start">
              <input 
                type="checkbox" 
                id="privacy" 
                name="privacy"
                class="mt-1 accent-[#E27990]"
                required
              />
              <label for="privacy" class="ml-2 text-sm text-gray-600">
                He leído y acepto la <a href="#" class="text-[#E27990] hover:underline">política de privacidad</a>
              </label>
            </div>
            
            <div>
              <button 
                type="submit"
                class="w-full sm:w-auto px-6 py-3 bg-[#E27990] hover:bg-[#C95775] text-white font-medium rounded-md transition-colors shadow-sm"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
        
        <div class="md:col-span-2">
          <div class="bg-[#F7F5F8] p-6 rounded-lg">
            <h2 class="text-xl font-serif text-[#C95775] mb-4">Información de contacto</h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F2B5C8] text-[#C95775]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm font-medium text-gray-800">Dirección</h3>
                  <p class="text-sm text-gray-600">Valencia, España</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F2B5C8] text-[#C95775]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm font-medium text-gray-800">Email</h3>
                  <p class="text-sm text-gray-600">contacto@tejerosa.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F2B5C8] text-[#C95775]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm font-medium text-gray-800">Teléfono</h3>
                  <p class="text-sm text-gray-600">+34 123 456 789</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-sm font-medium text-gray-800 mb-3">Horario de atención</h3>
              <ul class="text-sm text-gray-600 space-y-1">
                <li><span class="font-medium">Lunes a Viernes:</span> 9:00 - 18:00</li>
                <li><span class="font-medium">Sábados:</span> 10:00 - 14:00</li>
                <li><span class="font-medium">Domingos:</span> Cerrado</li>
              </ul>
            </div>
            
            <div class="mt-8">
              <h3 class="text-sm font-medium text-gray-800 mb-3">Síguenos</h3>
              <div class="flex space-x-4">
                <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-[#E27990] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Pinterest" class="text-gray-600 hover:text-[#E27990] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" class="text-gray-600 hover:text-[#E27990] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 p-6 bg-[#F2B5C8]/10 rounded-lg border border-[#F2B5C8]/30">
        <h2 class="text-xl font-serif text-[#C95775] mb-4">Preguntas frecuentes</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium text-gray-800 mb-1">¿Realizan envíos internacionales?</h3>
            <p class="text-gray-600">Sí, realizamos envíos a la mayoría de países. Los gastos de envío se calculan en función del destino.</p>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-800 mb-1">¿Puedo solicitar una pieza personalizada?</h3>
            <p class="text-gray-600">¡Por supuesto! Nos encanta crear piezas a medida. Contáctanos con tus ideas y te responderemos con un presupuesto.</p>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-800 mb-1">¿Cuál es el tiempo de entrega?</h3>
            <p class="text-gray-600">Para productos en stock, el tiempo de entrega es de 3-5 días hábiles. Para piezas personalizadas, el tiempo puede variar entre 2-4 semanas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>