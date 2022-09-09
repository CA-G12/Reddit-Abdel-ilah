const secPost = document.querySelector('.sec-post');
const username = document.querySelector('#username')
const password = document.querySelector('#passowrd')
const loginButton = document.querySelector('#login_button')
const emailSignup = document.querySelector('#email_signup')
const usernameSignup = document.querySelector('#username_signup')
const passwordSignup = document.querySelector('#password_signup')
const imgUrlSignup = document.querySelector('#image_signup')
const signupButton = document.querySelector('#form_signup')
console.log(signupButton);


signupButton.addEventListener('click', (e) => {
    console.log(123545845864689)
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
    }).then(console.log).catch(console.log)
})


const post = (data) => {
    data.forEach(element => {
        console.log(element)
        const divPost = document.createElement('div')
        divPost.classList.add('post')
        const divFlex = document.createElement('div')
        divFlex.classList.add('flex')
        const div = document.createElement('div')
        const username = document.createElement('h4');
        const textPost = document.createElement('p');
        textPost.textContent = element.content
        const joinButton = document.createElement('button')
        joinButton.classList.add('button')
        joinButton.textContent="JOIN"
        const imgDev = document.createElement('div');
        imgDev.classList.add('imgDev')
        const img = document.createElement('img');
        img.classList.add('img')
        img.src = "../images/71Tm5FtzDuL.jpg"
        const comment = document.createElement('p')
        // comment.textContent=
        
    div.appendChild(textPost)
    div.appendChild(username)
    divFlex.appendChild(div)
    divFlex.appendChild(joinButton)
    imgDev.appendChild(img)
    imgDev.appendChild(comment)
    divPost.appendChild(divFlex)
    divPost.appendChild(imgDev)
    secPost.appendChild(divPost)
});
}
fetch('/post').then(data => data.json()).then(result => post(result)).catch(console.log)


