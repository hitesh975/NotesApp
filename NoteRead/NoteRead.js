const params = new URLSearchParams(window.location.search);
const encodedKeykey = params.get("note");
console.log(encodedKeykey);
const key = decodeURIComponent(encodedKeykey);
console.log(key);
const noteContent = localStorage.getItem(key);
console.log(noteContent);

noteContainer = document.getElementById("noteContainer");
notes = document.createElement("div");
notes.className = "noteDisplay";
notes.id = "noteDisplayID";
notes.innerHTML = `<h2>${key.replace("237852572457426578624756274651450185316584168484638419849849684651651", "")}</h2><p>${noteContent}</p>`;
noteContainer.appendChild(notes);

document.getElementById("BackBtn").addEventListener("click", () => {
  window.location.href = "../view/view.html";
});
