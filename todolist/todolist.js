var todoList=[];

function addbutton(){
    var input= document.querySelector(".input-box");
    var inputValue = input.value;
    var dateInput = document.querySelector(".datebox");
    var dueDateValue = dateInput.value;
    if(inputValue===""){
        alert("please enter a valid task");
    }
    else{
        todoList.push({task:inputValue, dueDate:dueDateValue});
        alert("task added");
        input.value="";
        
    }
    return;

}

function deletebtn(index){
    todoList.splice(index, 1);
    alert("task deleted");


}

function displayList(){
    var list= '';
    if(todoList.length===0){
        alert("no tasks to display");
        document.querySelector(".listdis").innerHTML=list;
        return;
    }
    else{
        
        for(var i=0;i<todoList.length;i++){
            var itemObj= todoList[i];
            const itemObjTask= itemObj.task;
            const itemObjDueDate= itemObj.dueDate;
            var listitem= `<div>${itemObjTask} </div> <div>${itemObjDueDate}</div> <button class="delbtn" onclick="deletebtn(${i})"> delete  </button>`;
            list=list+listitem;

        }
        document.querySelector(".listdis").innerHTML=list;
    }

    return;
}