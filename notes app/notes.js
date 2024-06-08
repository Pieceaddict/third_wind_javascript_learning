
/* const  notesEl = document.querySelector('.notes');
const editbtn = document.querySelector('.edit');
const deletebtn = document.querySelector('.delete');

const main = notesEl.querySelector(".main");
const textarea = notesEl.querySelector('.textarea');




editbtn.addEventListener('click',()=>{
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");

});

textarea.addEventListener('input',(e)=>{
   const { value } = e.target;

   main.innerHTML = marked(value);
}); */




function popup(){
    const popupcontainer = document.createElement("div")
    popupcontainer.innerHTML = `
    <div id ="popupcontainer">
        <h1>New Note</h1>
        <textarea  id="notetext" placeholder="Enter your note..."></textarea>
<div id="btncontainer">
    <button id="submitbtn" onclick="createnote()">Create Note</button>
    <butt id="closebtn" onclick="closepopup()">close</butt>
</div>

    </div>`;
    document.body.appendChild(popupcontainer);
}

function closepopup(){
const popupcontainer = document.getElementById("popupcontainer");
if(popupcontainer){
    popupcontainer.remove();
}
}

function createnote(){
    const popupcontainer = document.getElementById("popupcontainer");
const notetext = document.getElementById('notetext').value;
if(notetext.trim() !== ''){
    const note = {
        id: new Date().getTime(),
        text: notetext
    };
    const existingnotes = JSON.parse(localStorage.getItem('notes'))||[];
    existingnotes.push(note);
    localStorage.setItem('notes',JSON.stringify(existingnotes));
    document.getElementById('notetext').value = '';
    popupcontainer.remove();
    displaynotes();
}
}


function displaynotes(){
    const noteslist = document.getElementById('noteslist');
    noteslist.innerHTML ='';
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const listitem = document.createElement('li');
        listitem.innerHTML= ` <span>${note.text}</span>
    <div id="notebtncontainr">
        <button id="editbtn" onclick="editnote(${note.id})">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button id="delbtn" onclick="deletenote(${note.id})">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;
    noteslist.appendChild(listitem);
    });
}
function editnote(noteid) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notetoedit = notes.find(note => note.id == noteid);
    const notetext = notetoedit ? notetoedit.text : '';
    const editingpopup = document.createElement("div");
    
    editingpopup.innerHTML = `
    <div id="editingcontainer" datanoteid="${noteid}">
        <h1>Edit Note</h1>
        <textarea id="notetext">${notetext}</textarea>
        <div id="btncontainer">
            <button id="submitbtn" onclick="updatenote()">Done</button>
            <button id="closebtn" onclick="closeeditpopup()">Cancel</button>
        </div>
    </div>
    `;

    document.body.appendChild(editingpopup);
}

function closeeditpopup(){
    const editingpopup = document.getElementById("editcontainer");
    if(editingpopup){
        editingpopup.remove(); 
    }
}
function updatenote() {
    const notetext = document.getElementById('notetext').value.trim();
    const editingpopup = document.getElementById('editingcontainer');

    if (notetext !== '') {
        const noteid = editingpopup.getAttribute('datanoteid');
        let notes = JSON.parse(localStorage.getItem('notes')) || [];

        // Find the note to update
        const updatednotes = notes.map(note => {
            if (note.id == noteid) {
                return { id: note.id, text: notetext };
            }
            return note;
        });

        // Update the notes in local storage
        localStorage.setItem('notes', JSON.stringify(updatednotes));

        // Close the editing popup
        editingpopup.remove();

        // Refresh the displayed notes
        displaynotes();
    }
}

/*************************************************************************
 * Delete Note Logic
 **************************************************************************/

function deletenote(noteid) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== noteid);

    localStorage.setItem('notes', JSON.stringify(notes));
    displaynotes();
}

displaynotes();