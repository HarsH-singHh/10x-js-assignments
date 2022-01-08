function showall(){
    const div = document.getElementsByClassName("todos")[0];
    div.innerHTML="";
    var h3 = document.createElement('h3');
    h3.innerHTML=" GREEN : COMPLETED  ||  RED : INCOMPLETE"
    div.append(h3)
    var ul = document.createElement('ul');
    div.append(ul)

    async function fetchData(url){
        const response = await fetch(url);
        var data = await response.json();
        
        for(let i=0; i < data.length; i++) {
            var li = document.createElement('li');
            //console.log(data[0].title)
            var status = "completed"

            if(data[i].completed){
                li.setAttribute("style", "margin-top:5px; color:green;")
            } else{
                li.setAttribute("style", "margin-top:5px; color:red;")
                status = "incomplete"
            }
            li.innerHTML="UserId : "+ data[i].userId + " -:- "+ "Id : " + data[i].id + " -:- " + "Title : " + data[i].title + " -:- " + "Status : " + status
            ul.append(li)
        }
    
    }

    fetchData('https://jsonplaceholder.typicode.com/todos')

};

function showcomp(){
    const div = document.getElementsByClassName("todos")[0];
    div.innerHTML="";
    var h3 = document.createElement('h3');
    h3.innerHTML=" COMPLETED TODOS"
    div.append(h3)
    var ul = document.createElement('ul');
    div.append(ul)

    async function fetchData(url){
        const response = await fetch(url);
        var data = await response.json();
        
        for(let i=0; i < data.length; i++) {
            if(data[i].completed){
                var li = document.createElement('li');
                li.setAttribute("style", "margin-top:5px;");
                li.innerHTML="UserId : "+ data[i].userId + " -:- "+ "Id : " + data[i].id + " -:- " + "Title : " + data[i].title + " -:- " + "Status : completed"
                ul.append(li)
            }
            
        }
    }

    fetchData('https://jsonplaceholder.typicode.com/todos')

};

function showincomp(){
    const div = document.getElementsByClassName("todos")[0];
    div.innerHTML="";
    var h3 = document.createElement('h3');
    h3.innerHTML=" INCOMPLETE TODOS"
    div.append(h3)
    var ul = document.createElement('ul');
    div.append(ul)

    async function fetchData(url){
        const response = await fetch(url);
        var data = await response.json();
        
        for(let i=0; i < data.length; i++) {
            if(!data[i].completed){
                var li = document.createElement('li');
                li.setAttribute("style", "margin-top:5px;");
                li.innerHTML="UserId : "+ data[i].userId + " -:- "+ "Id : " + data[i].id + " -:- " + "Title : " + data[i].title + " -:- " + "Status : incomplete"
                ul.append(li)
            }
            
        }
    }

    fetchData('https://jsonplaceholder.typicode.com/todos')

};