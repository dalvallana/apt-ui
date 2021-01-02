// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default';

export default (Vue) => {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Buefy);
};
