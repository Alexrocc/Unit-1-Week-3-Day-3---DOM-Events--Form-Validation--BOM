
window.onload = () => {
    const form = document.getElementById("taskForm")
    const inputBtn = document.getElementById("inputButton")

    form.onsubmit = function (e) {
        e.preventDefault()

        const taskInput = document.getElementById("newTask")
        const taskContent = taskInput.value

      
            const checkList = document.getElementById("checklistSection")
            
            const newTask = document.createElement("div")

            const taskH4 = document.createElement("h5")
            taskH4.innerText = taskContent
            taskH4.style = "font-size: 1.5em; display: inline-block"
            taskH4.onclick = () =>{
            taskH4.classList = "checkedTask"
            }

            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Delete task"

            deleteBtn.onclick = function(e) {
                const activeBtn = e.target
                const confirmation = confirm("Are you sure you want to delete the task?")
                if(confirmation) {
                activeBtn.parentNode.remove()
               }
            }

            newTask.appendChild(taskH4)
            newTask.appendChild(deleteBtn)

            checkList.appendChild(newTask)

          taskInput.value = ""

    }























}


