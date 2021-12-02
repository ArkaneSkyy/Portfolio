window.addEventListener('scroll', () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');
    const scrollPos = window.scrollY;
   // console.log(scrollPos);
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 960 && scrollPos < 1500) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 960 && scrollPos < 2500) {
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        projectMenu.classList.remove('highlight')
        return;
      } else if (window.innerWidth > 960 && scrollPos < 3000) {
        projectMenu.classList.add('highlight')
        skillsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
      } else if (window.innerWidth > 960 && scrollPos < 4000) {
        contactMenu.classList.add('highlight');
        projectMenu.classList.remove('highlight')
      }
      
})
   
