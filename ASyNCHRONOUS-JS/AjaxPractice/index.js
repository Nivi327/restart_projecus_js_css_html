document.getElementById('button').addEventListener('click', ()=>{

    // ReadyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request Recieved
    // 3: processing request
    // 4: request finished and response is ready

    // create XMLHttpRequest
    var xhr = new XMLHttpRequest()
    console.log(xhr);

    // Open type, url/file, async
    console.log('STATE: ', xhr.readyState);
    xhr.open('GET', 'smaple2.txt', true);

    // console.log('STATE: ', xhr.readyState);

    // OnLoad Function executes after all the states are finished
    // Whereas onreadystatechange it goes through all the states

    // xhr.onprogress = function(){
    //     console.log('STATE: ', xhr.readyState);
    // }

    // OnLoad doesnot goes through all the changes But onreadyStateChangeDoes
    xhr.onload = function(){
        // console.log('STATE: ', xhr.readyState);
        console.log(this.status);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        }else if(this.status === 404){
            document.getElementById('text').innerHTML = 'Not Found';
        }
    }

    // xhr.onreadystatechange = function(){
    //     // console.log('STATE: ', xhr.readyState);
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('An Error Occoured..');
    }

    xhr.send();
})