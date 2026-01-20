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

document.querySelectorAll(".note").forEach((button) => {
  button.addEventListener("click", () => {
    const noteKey = button.dataset.noteKey;
    const encodedKey = encodeURIComponent(noteKey);
    window.location.href = `/NotesApp/NoteRead/NoteRead.html?note=${encodedKey}`;
  });
});
