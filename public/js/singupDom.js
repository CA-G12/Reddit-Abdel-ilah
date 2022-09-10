const username = document.querySelector('#username')
const password = document.querySelector('#passowrd')
const emailSignup = document.querySelector('#email_signup')
const usernameSignup = document.querySelector('#username_signup')
const passwordSignup = document.querySelector('#password_signup')
const imgUrlSignup = document.querySelector('#image_signup')
const signupButton = document.querySelector('#form_signup')
console.log(signupButton);

signupButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailSignup.value,
            username: usernameSignup.value,
            password: passwordSignup.value,
            imag: imgUrlSignup.value 
        })
    }).then(() => {
        window.location.href='../pages/login.html'
    }).catch(console.log)
})

