//get notes from local storage
function renderNotes() {
  let notes = JSON.parse(localStorage.getItem("notes") || []);
  const notesContainer = document.getElementById("NotesContainer");
  notesContainer.innerHTML = "";
  notes.forEach((noteText) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "noteLoaded";
    noteDiv.innerText = noteText;
    notesContainer.appendChild(noteDiv);
  });
}
renderNotes();
document.getElementById("BackBtnID").addEventListener("click", () => {
  window.location.href = "../index.html";
});
