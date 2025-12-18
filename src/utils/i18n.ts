import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

i18n.translations = {
  en: {
    welcome: 'Welcome',
    home: 'Home',
    cart: 'Cart',
    profile: 'Profile',
    addToCart: 'Add to Cart',
    loading: 'Loading...',
    error: 'Error',
  },
  es: {
    welcome: 'Bienvenido',
    home: 'Inicio',
    cart: 'Carrito',
    profile: 'Perfil',
    addToCart: 'Agregar al Carrito',
    loading: 'Cargando...',
    error: 'Error',
  },
};

i18n.locale = Localization.locale;

export default i18n;