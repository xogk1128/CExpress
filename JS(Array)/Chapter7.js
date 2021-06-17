var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click",addList);

//null이 아닌  경우인데 왜 null도 추가가 될까?
function addList(){
    var item = document.querySelector("#item").value;
    if(item != null){
        itemList.push(item);
        document.querySelector("#item").value="";
        document.querySelector("#item").focus();
        console.log(itemList);
    }
    
}
