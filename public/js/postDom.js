const secPost = document.querySelector('.sec-post');
const username = document.querySelector('#username')
const password = document.querySelector('#passowrd')
const emailSignup = document.querySelector('#email_signup')
const usernameSignup = document.querySelector('#username_signup')
const passwordSignup = document.querySelector('#password_signup')
const imgUrlSignup = document.querySelector('#image_signup')
const singupLogin = document.querySelector('.singup_login')




fetch('/checkLogin').then((data) => data.json()).then(result => {
    if (result.id)
    {
        singupLogin.textContent = ''
        const h3 = document.createElement('h3')
        singupLogin.appendChild(h3)
        h3.textContent = result.username;
        const logoutButton = document.createElement('button')
        logoutButton.textContent = 'logout'
        singupLogin.appendChild(logoutButton)
        logoutButton.addEventListener('click', (e) => {
            fetch('/logout').then(console.log).catch(console.log)
        })
        const form = document.createElement('form')
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.textContent = "ADD POST"
        secPost.appendChild(form)
        form.appendChild(input)
        form.appendChild(button)
        button.addEventListener('click', (e) => {
            e.preventDefault()
            fetch('/addPost',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    userId:result.id,
                    content:input.value
                })
            }).then(data => data.json()).then(() => {
                window.location.reload()
            })
        })
    }
    
}).catch(err => console.log(err))

const post = (data) => {
        data.forEach(element => {
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
        img.src = "../images/2020-audi-a6-01-800.jpg"
        const comment = document.createElement('p')
        
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


