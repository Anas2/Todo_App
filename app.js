function del(element) {
    element.parentNode.remove();
    console.log(element.parentNode);
  }
function editFunc(element){
    
    var inputVal = element.parentNode.childNodes[0].nodeValue;
    var equal = prompt("Enter Value" , inputVal);
    element.parentNode.childNodes[0].nodeValue = equal;
}
function deleteAll(element){

    var childNodes = document.getElementById('appenddiv').childNodes;
    for(var i=childNodes.length-1;i >= 0;i--){
        var childNode = childNodes[i];
        // console.log(childNode.nodeName == 'LI');
        if(childNode.nodeName == 'LI'){
            childNode.parentNode.removeChild(childNode);
        }
    }

}
function add(){

//===== GET BY ID'S =====

// Add 
   var input = document.getElementById('inp').value
   var appenddiv = document.getElementById('appenddiv');
   if(input != "")
//===== CREATE ELEMENTS =====

// Add 
   var createli = document.createElement('LI');
// Button 
   var editButton = document.createElement('BUTTON');
   var deleteButton = document.createElement('BUTTON');


//====== SET ATTRIBUTES ===== 

    // For Edit 
    editButton.setAttribute('class','editBtn');
    editButton.setAttribute('onclick','editFunc(this)');
    // For Delete
    deleteButton.setAttribute('class','deleteBtn');
    deleteButton.setAttribute('onclick','del(this)');
    // For Li 
    createli.setAttribute('class','liclass');
    // createli.setAttribute('id','liclassid');


//===== CREATE TEXT NODES: =====

//  Add
    var tN = document.createTextNode(input);
//  Button 
    var btnText = document.createTextNode('Edit');
    var deleteButtonText = document.createTextNode('Delete');

//===== APPEN IN LI TAG ===== 
//  Add
    createli.appendChild(tN)
    appenddiv.appendChild(createli);
//  Button
    editButton.appendChild(btnText);
    createli.appendChild(editButton);
    deleteButton.appendChild(deleteButtonText);
    createli.appendChild(deleteButton);
    

// After This Line Of Code Input Field Will Be Empty
     createli.parentNode.parentNode.childNodes[3].value = "";
    
}
  
   
