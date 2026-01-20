function renderNotes(key) {
  const notesContainer = document.getElementById("NotesContainer");
  const noteContent = localStorage.getItem(key);
  const noteBtn = document.createElement("button");
  noteBtn.className = "note";
  noteBtn.dataset.noteKey = key;
  noteBtn.innerHTML = key;
  notesContainer.appendChild(noteBtn);
}

TitleList = Object.keys(localStorage);
const titleCode =
  "237852572457426578624756274651450185316584168484638419849849684651651"; //unique code to separate title from description

const descriptionCode =
  "466543466466553465643566543565463526135526646332556146538564";
//find titles only and render titles
if (TitleList.length > 0) {
  TitleList.forEach((title) => {
    if (title.endsWith(titleCode)) {
      renderNotes(title.replace(titleCode, ""));
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

document.querySelectorAll(".note").forEach((button) => {
  button.addEventListener("click", () => {
    //title
    const noteKey = button.dataset.noteKey;
    const encodedKey = encodeURIComponent(noteKey);

    //description
    const descriptionText = noteKey.replace(titleCode, "") + descriptionCode;
    const encodedDescription = encodeURIComponent(descriptionText);
    console.log(noteKey);
    console.log(encodedKey);
    window.location.href = `/NotesApp/NoteRead/NoteRead.html?note=${encodedKey}&description=${encodedDescription}`;
  });
});
