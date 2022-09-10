const username = document.querySelector('#username')
const password = document.querySelector('#passowrd')
const loginButton = document.querySelector('#login_button')
const loginErr = document.querySelector('.login_err')

fetch('/checkLogin').then((data) => data.json()).then(result => {
    if (result.id) { window.location.href = '/' }
}).catch(err => console.log(err))
loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/loginup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username.value, password: password.value })
    }).then(data => data.json()).then(result => {
        console.log(result)
        if (result.msg === 'login Successfully')
        {
            loginErr.textContent = result.msg
            window.location.href = '/'
        } else
        {
            throw result
        }
    }).catch(err => {
        console.log(err, 'err')
        loginErr.textContent = err.msg

    })
})
