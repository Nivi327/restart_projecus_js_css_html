document.getElementById('user').addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();
    console.log(xhr);


    // type - file/url, async
    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(xhr.responseText);
            var output = ''
            output += `<ul>
            <li>USER ID: ${user.id}</li>
            <li>USER Name: ${user.name}</li>
            <li>USER EMAIL: ${user.email}</li>
            </ul>`
            document.getElementById('user-data').innerHTML = output;
        }else if(this.status == 404){
            document.getElementById('user-data').innerHTML = '<h1>NOT FOUND</h1>'
        }
    }

    xhr.send()
})

document.querySelector('#users').addEventListener('click', ()=>{
    var xhr2 = new XMLHttpRequest()
    console.log(xhr2)

    xhr2.open('GET', 'users.json', true);

    xhr2.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(xhr2.responseText);
            output = ''
            for(let user of users){
                output += `<ul>
                <li>USER ID: ${user.id}</li>
                <li>USER Name: ${user.name}</li>
                <li>USER EMAIL: ${user.email}</li>
                </ul><br>`
            }
            document.getElementById('users-data').innerHTML = output;
        }
        else if(this.status == 404){
            document.getElementById('users-data').innerHTML = '<h1>Data Not Found</h1>';
        }
    }

    xhr2.send();
})