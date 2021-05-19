// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Buefy from 'buefy';
import DefaultLayout from '@/layouts/Default';

library.add(
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
  faLink
);

export default (Vue, { head }) => {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,400;1,700&family=Newsreader:ital,wght@0,400;0,700;1,400;1,700',
  });
  Vue.component('vue-fontawesome', FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
  });
};
