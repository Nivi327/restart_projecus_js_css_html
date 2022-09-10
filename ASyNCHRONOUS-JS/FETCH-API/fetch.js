document.querySelector('#getText').addEventListener('click', ()=>{
    fetch('sample.txt')
    .then((res)=> res.text())
    .then((data)=> document.querySelector('#output').innerHTML = data)
    .catch((error)=> console.log(error))
})

document.querySelector('#getUsers').addEventListener('click', ()=>{
    fetch('users.json')
    .then((res)=> res.json())
    .then((users)=>{
        let div = document.querySelector('#output')
        let output = '<h2 class="mb-4">Users</h2>'
        users.forEach(user => {
            output += `
            <ul class="list-group mb-4">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">NAME: ${user.name}</li>
            <li class="list-group-item">EMAIL: ${user.email}</li>
            </ul>
            `
        });
        div.innerHTML = output;
    }).catch(error => console.log(error))
})

document.querySelector('#fetchAPI').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(posts => {
        console.log(posts)
        let div = document.querySelector('#output')
        let output = '<h2 class="mb-4">API USERS</h2>'
        posts.forEach(post => {
            output += `
            <div class="card card-body mb-4">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>
            `
        });
        div.innerHTML = output;
    })
    .catch(error => console.log(error))
})

document.querySelector('#addPost').addEventListener('submit', (e)=>{
    e.preventDefault();

    let title = document.querySelector('title').value;
    let body = document.querySelector('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })
})