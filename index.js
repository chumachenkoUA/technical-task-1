const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('first-name').value;
    const surname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        name: name,
        surname: surname,
        email: email,
        password: password
    }
    submit(userData);
})

function submit(userData) {
    console.log(userData);
}