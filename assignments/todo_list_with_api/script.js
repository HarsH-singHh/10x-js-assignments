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
            
            if(data[i].completed){
                li.setAttribute("style", "color:green")
            } else{
                li.setAttribute("style", "color:red")
            }
            li.innerHTML=data[i].title
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
                li.innerHTML=data[i].title
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
                li.innerHTML=data[i].title
                ul.append(li)
            }
            
        }
    }

    fetchData('https://jsonplaceholder.typicode.com/todos')

};