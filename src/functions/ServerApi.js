import axios from "axios";

function saveUser(name) {
    axios.post("https://sigarretsniper.brickweb.ru/saveUser.php", {token: localStorage.getItem("token"), name: name})
        .then((res)=>{});
}

function updateUser(id, num){
    axios.post("https://sigarretsniper.brickweb.ru/updateUser.php", {id: id, token: localStorage.getItem("token"), num: num})
        .then();
}

function removeUser(id){
    axios.post("https://sigarretsniper.brickweb.ru/deleteUser.php", {id: id, token: localStorage.getItem("token")})
        .then();
}


export {saveUser, removeUser, updateUser};


//dab dab dab