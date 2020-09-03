import router from './routes';

// evento que escucha cuando carge la data
window.addEventListener('load', router);
// escucha las rutas o hash al cual me voy a mover
window.addEventListener('hashchange', router);