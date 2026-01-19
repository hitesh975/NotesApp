// Navigation button event listeners for add_notes page

document.getElementById("Back").addEventListener("click", () => {
  window.location.href = "index.html";
});

//Navigation button event listeners for add_notes page end

//save button
notes = document.getElementById("notes");
saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  let notesObj = [];
  let notesData = localStorage.getItem("notes", JSON.stringify(notesObj));
});
