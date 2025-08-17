var todoList=[];

function addbutton(){
    var input= document.querySelector(".input-box");
    var inputValue = input.value;
    if(inputValue===""){
        alert("please enter a valid task");
    }
    else{
        todoList.push(inputValue);
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
            var item= todoList[i];
            var listitem= `<p>${item} <button class="delbtn" onclick="deletebtn(${i})"> delete  </button></p>`;
            list=list+listitem;

        }
        document.querySelector(".listdis").innerHTML=list;
    }

    return;
}