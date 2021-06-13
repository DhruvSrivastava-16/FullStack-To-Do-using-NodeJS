$(function(){                       //this is executed only AFTER the page is loaded. 
                                    //We write any code which takes HTML element inside '$' as this means that all our 
                                    //html elements have already loaded. 
    let newtodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')
    console.log("Page is loaded")

    addtodoBtn.click(function(){         //Jquery will execute this function on clicking the button
        console.log("Button was clicked!")
        let newTodo = newtodoBox.val() //.val is from Jquery, can't use it withou it
        console.log(newTodo)


          //AJAX
        $.post(`            
        /todos/`,
        {task: newTodo},
        function (data){
            console.log(data)
            todoList.empty();
            for(todo of data){

                //todoList.append("WOW")
                todoList.append("<li>" + todo.task + "</li>")
            }
        }
        )                   

    })
})

console.log("some stuff")