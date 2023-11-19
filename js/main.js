let socialGoToLinkedIn = document.querySelector('.linked');
let socialGoToGithub= document.querySelector('.git');
socialGoToLinkedIn.addEventListener('click',function(){
    window.location.href='https://www.linkedin.com/in/beshoy-salama-ba734427b/'
})
socialGoToGithub.addEventListener('click',function(){
    window.location.href='https://github.com/Beshoy-Edwar-Aziz'
})
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })