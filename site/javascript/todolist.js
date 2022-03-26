const inputBox = document.querySelector(".inputAlani input");
const eklebuton = document.querySelector(".inputAlani button");
const todoList = document.querySelector(".todoList");
inputBox.onkeyup = ()=>{
    let userData=inputBox.value;
    if(userData.trim() !=0){
        eklebuton.classList.add("active");
    }else{
        eklebuton.classList.remove("active");
    }
}
showList();
eklebuton.onclick = () =>{
    let userData=inputBox.value;
    let getLocalStorage = localStorage.getItem("New todo");
    if (getLocalStorage==null){
        listArr=[];

    }else{
        listArr= JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showList();
    eklebuton.classList.remove("active");

}
function showList(){
    let getLocalStorage = localStorage.getItem("New todo");
    if (getLocalStorage==null){
        listArr=[];

    }else{
        listArr= JSON.parse(getLocalStorage);
    }
    let newLiTag='';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick = "sil(${index})";><i class="fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML=newLiTag;
    inputBox.value="";
}
function sil(index){
    let getLocalStorage = localStorage.getItem("New todo");
    listArr= JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showList();
}
