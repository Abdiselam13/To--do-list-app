const inputField = document.querySelector('.input-task');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.filter');
const tasks = document.querySelector('.tasks');
const removeAllBtn = document.querySelector('.clear-tasks');
const msgBox = document.querySelector('.msg');


form.addEventListener('submit', addTask);
tasks.addEventListener('click',removeItem);
removeAllBtn.addEventListener('click',removeAll);
searchInput.addEventListener('keyup', searchTask);

function addTask(e){
   if(inputField.value === '')
   alert('empty task')
   else{
       //greating li
       const li = document.createElement('li');
       li.classList = 'task';
       //add text to ne task
       li.appendChild(document.createTextNode(inputField.value));

       //create div
     const icons = document.createElement('div');
     icons.classList = 'icons'
     //create removelink
     const remove = document.createElement('a');
     remove.classList = 'remove';
     remove.innerHTML = 'Delete'
    
    
    const done = document.createElement('a');
        done.classList = 'done';
        done.innerHTML = 'Submit';
    
         console.log(done,remove);
         
         //appemd icons to the div
         icons.appendChild(remove);
         icons.appendChild(done);
         

         //append div in to li

         li.appendChild(icons);
        
         //append li into ul
         tasks.append(li)
            inputField.value = '';
            msgBox.style.display = 'none';

 
   }

    e.preventDefault();
}

//Delete task
function removeItem(e){
 if(e.target.classList.contains('remove')){
    e.target.parentElement.parentElement.remove();
 }else if(e.target.classList.contains('done')){
    e.target.parentElement.parentElement.style.background = '#9DD9D2';
    e.target.parentElement.parentElement.style.color = '#fff';
 }
}

//delete all task

function removeAll(e){
    if(confirm('Are you sure')){
  while(tasks.firstChild){
    tasks.removeChild(tasks.firstChild);
  }
}
}

//search
function searchTask(e){
    const textInput = e.target.value.taLowerCase();
    document.querySelectorAll('.task').forEach(
        function(items){
            const item  = items.firstChild.textContent;
            if(item.toLowerCase().indexOf(textInput) != -1){
                items.style.display = 'block';
            }else {
                items.style.display = 'none'
            }
        }

    )
}