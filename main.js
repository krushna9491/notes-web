//we have to storage the node text in the  localstorage
showNotes();
let addNode = document.getElementById(`addNoteBtn`);
addNode.addEventListener(`click`,function(){
    let textArea = document.getElementById(`textarea`);
    let titleText = document.getElementById(`titleText`);
    let notes = localStorage.getItem(`note`);
    if(notes == null) {
        notesObj=[];
    }
    else {
        notesObj=JSON.parse(notes);
    }
    //this is for date
    let date = new Date();
let month = [];
month[0]=`Jan`;
month[1]=`Feb`;
month[2]=`Mar`;
month[3]=`Apr`;
month[4]=`May`;
month[5]=`Jun`;
month[6]=`Jul`;
month[7]=`Aug`;
month[8]=`Sep`;
month[9]=`Oct`;
month[10]=`Nov`;
month[11]=`Dec`;

let getMonth = month[date.getMonth()];

theDate = date.getDate()+` `+getMonth
+` `+date.getFullYear()+` `+date.getHours()+`:`+date.getMinutes()+`:`+date.getSeconds();


//this is for title
if (titleText.value =='') {
    titleText.value = `title`;
}
    let myObj = {
        title: titleText.value,
        note: textArea.value,
        date: theDate
    }
    if (textArea.value!="") {
        notesObj.push(myObj);
    }

    localStorage.setItem(`note`,JSON.stringify(notesObj));
    textArea.value ='';
    titleText.value ='';
    showNotes();
    patil();
});

//now we are add the nodes inside localstorage to the page (in notecards)
function showNotes(){
    let notes = localStorage.getItem(`note`);
    if(notes == null) {
        notesObj=[];
    }
    else {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=`
        <div class="noteCards" id="noteCard">
        <h3 id="nodeCardTitle">${element.title}</h3>
        <div id="date">${element.date}</div>
        <p id="nodeText">${element.note}</p>
        <button id="${index}" onclick="deleteNode(this.id)"  class="deleteNoteBtn">Detele Node</button>
        </div>
              `
        });

    let notesContainer = document.getElementById(`notesContainer`);
    
    if (notesObj.length == 0 ) {
        notesContainer.innerHTML=`
        <div class="innerhtml" id="innerHtml">
        <h4>No note added</h4>
        <li>write your Note above</li>
        <li>click on  add Note button</li>
        </div>
        `
        notesContainer.setAttribute(`style`,`align-items: initial;`)

     }
    else{
        notesContainer.innerHTML = html;
        notesContainer.style.alignItems= 'center';
    }
    //now lets add the search feature
    let search = document.getElementById(`search`);
    let noteCards = document.getElementsByClassName(`noteCards`);
    let array = Array.from(noteCards);
        search.addEventListener(`input`, function krushna(){
    let searchvar = search.value;

    array.forEach(function(element,index){
        let noteCard = document.getElementById(`noteCard`);
        let PTag = element.getElementsByTagName(`p`)[0];
            if (PTag.innerText.includes(searchvar)) {
                element.style.display=`block`;
            }
            else{
                element.style.display=`none`;
                }
            });
         });         
}
//now lets make the  delete button in work
function deleteNode(index){
    let notes = localStorage.getItem(`note`);
        if(notes == null) {
            notesObj=[];
        }
        else {
            notesObj=JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem(`note`,JSON.stringify(notesObj));
        showNotes();
        patil();
    }
    function patil(){
        search.value = '';
     }

    
