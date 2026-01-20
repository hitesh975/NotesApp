//get content from local storage and display it
const params = new URLSearchParams(window.location.search);
const encodedKey = params.get("note");
const encodedDescription = params.get("description");
const key = decodeURIComponent(encodedKey);
const descriptionKey = decodeURIComponent(encodedDescription);
const noteContent = localStorage.getItem(key);
const descriptionContent = localStorage.getItem(descriptionKey);

//display title and note content

noteContainer = document.getElementById("noteContainer");
notes = document.createElement("div");
notes.className = "noteDisplay";
notes.id = "noteDisplayID";
notes.innerHTML = `<h2>${key.replace("237852572457426578624756274651450185316584168484638419849849684651651", "")}</h2>
                   <p>${noteContent}</p>
                   <p>${descriptionContent}</p>`;

noteContainer.appendChild(notes);

document.getElementById("BackBtn").addEventListener("click", () => {
  window.location.href = "../view/view.html";
});
