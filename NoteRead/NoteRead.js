const params = new URLSearchParams(window.location.search);
const encodedKeykey = params.get("note");
console.log(encodedKeykey);
const key = decodeURIComponent(encodedKeykey);
const noteContent = localStorage.getItem(key);

noteContainer = document.getElementById("noteContainer");
notes = document.createElement("div");
notes.className = "noteDisplay";
notes.id = "noteDisplayID";
notes.innerHTML = `<h2>${key}</h2><p>${noteContent}</p>`;
noteContainer.appendChild(notes);

document.getElementById("BackBtn").addEventListener("click", () => {
  window.location.href = "../view/view.html";
});
