
import  {saveTask,getTasks,onGetTasks,deleteTask,getTask, savetask, updateTask} from './firebase.js'

const taskForm = document.getElementById('task-form')
const tasksContainer = document.getElementById('tasks-container')

let editstatus  = false

window.addEventListener('DOMContentLoaded', () => {
    
    onGetTasks((querySnapshot) => {

let html = ''

const task  = doc.data()
 console.log (doc.id)
    querySnapshot.forEach(doc => {
html += ´
 <div> 

     <h3>${task.title}</h3>
     <p>${task.description}</p>
     <div>
     <button class='btn- btn-primary btn-delete' data-id= "${doc.id}">Delete</button>
     <button class='btn  btn-secundary edit' data-id= "${doc.id}">Edit</button>
     </div>
 </div>
´

}) 

        console.log( doc.data () )

    })
    tasksContainer.innerHTML =html
      const btnsDelete  = tasksContainer.querySelector('.btn-delete')

    btnsDelete.forEach(btn => { 
          btn.addEventListener('click',({target:{dataset} }) =>{ 
          deleteTask(dataset.id) 
          } )
        
    })
    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnsEdit.forEach(btn => {
        btn.addEventListenre('click',async(e) => { 
       const doc =   await getTask(e.target.dataset.id)
       const Task =  doc.data()

        taskForm[ 'task-title'].value = task.title
        taskForm['task-description' ].value  = task.description
    editstatus  = true 
    id = doc.id

    taskForm[ 'btn-task-save'].innerText = 'update'
    })
    })
})
taskForm.addEventListener('submit' ,(e) => {
    e.preventDefault ()
    const title  = taskForm ['task-title' ] 
    const description  = taskForm[ 'task-description '] 
if (!editstatus) {

 
    savetask(title,value,description.value)
} else{ 
    updateTask('id', { title: title.value,
    description: description.value})
    editstatus = false 
 }

    taskForm.reset()
})

