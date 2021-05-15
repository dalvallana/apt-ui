// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Buefy from 'buefy';
import DefaultLayout from '@/layouts/Default';

export default (Vue, { head }) => {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,400;1,700&family=Newsreader:ital,wght@0,400;0,700;1,400;1,700',
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Buefy);
};
