//constants
const titleCode =
  "237852572457426578624756274651450185316584168484638419849849684651651"; //unique code for title

const descriptionCode =
  "466543466466553465643566543565463526135526646332556146538564"; // unique code for description

function renderNotes(key) {
  const notesContainer = document.getElementById("NotesContainer"); //get notesContainer

  //view notes button
  const noteContent = localStorage.getItem(key); //get notecontent
  const noteBtn = document.createElement("button"); //create the button
  noteBtn.className = "note";
  noteBtn.dataset.noteKey = key;

  noteBtn.innerHTML = key.replace(titleCode, ""); //set the title text for the button

  //define description and get description from local storage
  const description = document.createElement("p");
  const descriptionContent = localStorage.getItem(
    key.replace(titleCode, descriptionCode),
  );

  //description overlay
  description.className = "description";
  description.innerHTML = descriptionContent;
  noteBtn.appendChild(description);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.id = "deleteButton";

  //svg icon
  //make later
  deleteButton.innerHTML = "Delete";

  notesContainer.appendChild(noteBtn);
  noteBtn.appendChild(deleteButton);
}

TitleList = Object.keys(localStorage);

//find titles only and render titles
if (TitleList.length > 0) {
  TitleList.forEach((title) => {
    if (title.endsWith(titleCode)) {
      renderNotes(title);
    }
  });
}

document.getElementById("BackBtnID").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.getElementById("clear").addEventListener("click", () => {
  localStorage.clear();
  const notesContainer = document.getElementById("NotesContainer");
  notesContainer.innerHTML = "";
});
