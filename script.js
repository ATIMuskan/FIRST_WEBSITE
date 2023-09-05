const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const buttonPopup=document.querySelector('.buttonLogin-popup');

registerLink.addEventListener('click',()=>{
wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });
    buttonPopup.addEventListener('click',()=>{
        wrapper.classList.add('active-popup');
        });