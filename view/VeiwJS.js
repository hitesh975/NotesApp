function renderNotes(key) {
  const notesContainer = document.getElementById("NotesContainer");
  const noteContent = localStorage.getItem(key);
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.innerHTML = noteContent;
  notesContainer.appendChild(noteDiv);
}
TitleList = Object.keys(localStorage);

if (TitleList.length > 0) {
  TitleList.forEach((title) => {
    renderNotes(title);
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
