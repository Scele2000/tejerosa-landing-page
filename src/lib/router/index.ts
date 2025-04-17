import { writable } from 'svelte/store';

type Route = {
  path: string;
  name: string;
};

export const routes: Route[] = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/contacto',
    name: 'contact'
  },
  {
    path: '/admin/productos',
    name: 'admin'
  }
];

// Store para la ruta actual
export const currentRoute = writable<string>(window.location.pathname);

// Función para navegar a una ruta
export function navigate(path: string) {
  window.history.pushState({ path }, '', path);
  currentRoute.set(path);
}

// Inicializar el router
export function initRouter() {
  // Manejar eventos de navegación del navegador (botones atrás/adelante)
  window.addEventListener('popstate', (event) => {
    const state = event.state as { path: string } | null;
    currentRoute.set(state?.path || window.location.pathname);
  });
  
  // Manejar clics en enlaces internos
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('target')) {
      event.preventDefault();
      const path = anchor.pathname;
      navigate(path);
    }
  });
} 