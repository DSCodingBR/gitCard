let user = document.querySelector("usuario-github");
let botaoBuscar = document.querySelector("buscar-github");
const link = document.querySelector("a");

let avatar_link = document.querySelector(".avatar");
let avatar_img = avatar_link.querySelector("img");
let content = document.querySelector(".content b1");
let total_repo = document.querySelector(".status li a strong")[0];
let total_glist = document.querySelector(".status li a strong")[1];
let total_seg = document.querySelector(".status li a strong")[2];

const getGitHubInfo = function (username) {
    var url = 'https://api.github.com/users/' + username;
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            content.innerText = ajax.name;
            total_seg.innerText=ajax.followers
            total_repo.innerText=ajax.public_repos
            total_glist.innerText=ajax.public_gists
            avatar_img.src=ajax.avatar_url;
            link_href = ajax.html_url;
            console.log(ajax)
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

botaoBuscar.addEventListener("click" , e =>{
    e.preventDefault();
    getGitHubInfo(user, value);
})
