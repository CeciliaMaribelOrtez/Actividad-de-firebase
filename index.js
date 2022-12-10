import{savetask} from'./firebase.js';                          
window.addEventListener ('DOMContentLoaded', ( ) => {

} )
const tasksform = document.getElementById('task-form')
tasksform.addEventListener(Submit', (e) =>  {
e.preventDefault()
 const title =tasksform['task-title']
const description =tasksform['tasks-description']

console.log('title.value,description.value' )
})