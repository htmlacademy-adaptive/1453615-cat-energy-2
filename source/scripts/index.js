const navElement = document.querySelector('.nav');
const navTogglerElement = navElement.querySelector('.nav__toggler');
const navListElement = navElement.querySelector('.nav__list');

const jsInit = function () {
  const hiddenElements = document.querySelectorAll('[hidden]');

  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].removeAttribute('hidden');
  }
};

const navInit = function () {
  navElement.classList.remove('nav--no-js');

  if (!navTogglerElement.classList.contains('nav__toggler--closed')) {
    navTogglerElement.classList.add('nav__toggler--closed');
  }

  if (!navListElement.classList.contains('nav__list--closed')) {
    navListElement.classList.add('nav__list--closed');
  }
};

const openNav = function () {
  navTogglerElement.classList.toggle('nav__toggler--closed');
  navListElement.classList.toggle('nav__list--closed');
};

jsInit();
navInit();
navElement.addEventListener('click', openNav);
