
import {saveTask, getTasks,onGetTasks, deleteTask,getTask, updateTask  } from'./firebase.js'
const taskForm = document.getElementById('task-form')
 const tasksContainer = document.getElementById('tasks-container')

let editStatus  = false
let id  = ''
window.addEventListener ('DOMContentLoaded', async () => { 
  
  const querySnapshot = await getTasks ()
  onGetTasks((querySnapshot)  => {

  })

  let html  =''

  querySnapshot.forEach((doc) => { 
   const task =doc.data()
   console.log(doc.id)
    html += ` 
    <div> 
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class ='btn-delete'data-id ="${doc.id}">Delete</button>
        <button class ='btn-'data-id ="${doc.id}">Edit</button>
        
    </div>
    `
    
  })

  tasksContainer.innerHTML = html

 const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
btnsDelete.forEach(btn => {
  btn.addEventListener('click',({target: {dataset}}) => {
   deleteTask(dataset.id)
  })
} )

const btnsEdit = tasksContainer.querySelectorAll('.btn-edit') 
btnsEdit.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const doc = await getTask (e.target.dataset.id)
     const task = doc.data()

     taskForm['task-title'].value = task.title
     taskForm['task-description'].value = task.description
     editStatus  = true
     id = doc.id
     taskForm['btn-task-save'].innerTex = 'update'
  })
})
})

       

taskForm.addEventListener('submit',(e)  => { 
    e.preventDefault()

   const title = taskForm['task-title']
   const description = taskForm['task-description']
   
   if (!editStatus) { 
  }else{ 
    updateTask(id, title.value, description.value)

editStatus = false
 
    saveTask(title.value, description.value)
  }

   saveTask(title.value, description.value)

   taskForm.reset()
})