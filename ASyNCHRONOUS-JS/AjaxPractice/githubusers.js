document.getElementById('github-btn').addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true)

    xhr.onload = function(){
        if(xhr.status == 200){
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            output = ''
            for(let user of users){
                output += `
                <h1>${user.login}</h1>
                <ul>
                <img width=40 height=40 src=${user.avatar_url}>
                <li>${user.login}</li>
                <li>${user.node_id}</li>
                </ul>
                `
            }
            document.querySelector('#display-users').innerHTML = output;
        }else if(this.status == 404){
            document.querySelector('#display-users').innerHTML = 'NOT Found';
        }
    }

    xhr.send();
})