const params = new URLSearchParams(window.location.search);
const key = params.get("note");
const noteContent = localStorage.getItem(key);

noteContainer = document.getElementById("noteContainer");
notes = document.createElement("div");
notes.className = "noteDisplay";
notes.id = "noteDisplayID";
console.log(key);
console.log(noteContent);
notes.innerHTML = `<h2>${key}</h2><p>${noteContent}</p>`;
noteContainer.appendChild(notes);
