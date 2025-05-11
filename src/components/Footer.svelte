<script>
  const year = new Date().getFullYear();
  const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.795.218 2.168.387.528.233.983.585 1.443 1.045.46.46.812.915 1.443 1.045.46.46.812.915 1.443 1.045.373.17.996.335 2.168.387 1.266.058 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.795-.387 2.168-.233.528-.585.983-1.045 1.443-.46.46-.915.812-1.443 1.045-.373.17-.996.335-2.168.387-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.795-.218-2.168-.387-.528-.233-.983-.585-1.443-1.045-.46-.46-.812-.915-1.045-1.443-.17-.373-.335-.996-.387-2.168-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.795.387-2.168.233-.528.585.983 1.045 1.443.46.46.915.812 1.443 1.045.373.17.996.335 2.168.387C8.416 2.175 8.796 2.163 12 2.163zm0 1.8a.96.96 0 100 1.92.96.96 0 000-1.92zm-1.934 2.704a4.26 4.26 0 108.52 0 4.26 4.26 0 00-8.52 0zm6.634 0a2.37 2.37 0 11-4.74 0 2.37 2.37 0 014.74 0z" clip-rule="evenodd" /></svg>`;
  const twitterIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>`;
  const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1.5 inline-block align-text-bottom"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`;
</script>

<footer class="bg-slate-800/90 dark:bg-slate-900/90 text-white py-6 mt-16 backdrop-blur-sm">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p class="text-xl font-semibold text-pink-400 dark:text-pink-300 tracking-wide" style="font-family: 'Playfair Display', serif;">Tejerosa</p>
    <p class="text-sm text-gray-300 dark:text-gray-400 mb-4">Artesanías hechas con amor.</p>
    
    <div class="mb-5 text-sm">
      <a href="mailto:contacto@tejerosa.com" class="inline-flex items-center text-gray-300 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-300 transition-colors duration-200">
        {@html emailIcon}
        contacto@tejerosa.com
      </a>
      <!-- <p class="text-gray-400">Teléfono: Próximamente</p> -->
    </div>

    <div class="flex justify-center space-x-5 mb-5">
      <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-pink-400 dark:hover:text-pink-300 transition-colors duration-200">
        {@html instagramIcon}
      </a>
      <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-pink-400 dark:hover:text-pink-300 transition-colors duration-200">
        {@html twitterIcon}
      </a>
      <!-- Añadir más redes si es necesario -->
    </div>
    <p class="text-xs text-gray-400 dark:text-gray-500">&copy; {year} Tejerosa. Todos los derechos reservados.</p>
  </div>
</footer> 