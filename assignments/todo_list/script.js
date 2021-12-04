var key=0;
const div = document.getElementsByClassName('todos')[0];
const AddButton = document.getElementsByTagName('button')[0];


AddButton.addEventListener('click', () => {
    var newtask = document.createElement('p');
    var task = document.querySelector('input');
    newtask.innerHTML = task.value;
    
    var att1 = document.createAttribute("key");
    att1.value = key;
    newtask.setAttributeNode(att1);
    
    div.append(newtask);
    key = key+1;
    
    newtask.addEventListener('click', function(){del(this)}, false);
})

function del(elem){
    removeP = elem;
    removeP.remove();

}