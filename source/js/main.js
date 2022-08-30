import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordions/init-accordion';

import {preheader} from './modules/preheader';
import {header} from './modules/header';
import { banner } from './modules/banner';
import { equipment } from './modules/equipment';
import { use } from './modules/use';
import { moreBtn } from './modules/more-btn';
import { materials } from './modules/materials';
import { card } from './modules/card';
import { methods } from './modules/methods';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  preheader();
  header();
  banner();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    initAccordions();

    equipment();
    use();
    moreBtn();
    materials();
    card();
    methods();
  });
});
