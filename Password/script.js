let all = document.getElementById("login");
let btn = document.getElementById("btn");
let pass = document.getElementById("password");
const password = "My_nEw^p@ssssword?!+!<end!t@g>";

function x(){
    if(pass.value == password){
        all.style.visibility = 'hidden';
    }
}