import '../styles/styles.css'
import MobileMenu from './modules/MobilMenu'

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}