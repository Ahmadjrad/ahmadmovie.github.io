
const db_username = "ahmad";
const db_password = "123";

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);

    if(!username || !password){
        window.alert("username or password are empty!")
    }else {
        if(username === db_username && password === db_password)
            window.location.href = 'movie.html';
        else    
            window.alert("invalid credentials !!!")
    }

   
}