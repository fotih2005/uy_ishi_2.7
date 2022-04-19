const elHeaderNav = document.querySelector('.site-header__nav')
const elHeaderBtn = document.querySelector('.js-site-header-btn')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('site-header__nav--open')
})