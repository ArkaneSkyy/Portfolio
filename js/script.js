const homeMenu = document.querySelector('#home-page');
if (window.innerWidth > 1200) {
homeMenu.classList.add('highlight');
}

window.addEventListener('scroll', () => {
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    if (window.innerWidth > 1200 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1200 && scrollPos < 1300) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1200 && scrollPos < 2500) {
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        projectMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1200 && scrollPos < 2900) {
        projectMenu.classList.add('highlight')
        skillsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
      } else if (window.innerWidth > 1200 && scrollPos < 4000) {
        contactMenu.classList.add('highlight');
        projectMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
      } 
})

    
   
