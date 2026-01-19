// Navigation button event listeners for add_notes page

document.getElementById("Back").addEventListener("click", () => {
  window.location.href = "index.html";
});

//Navigation button event listeners for add_notes page end

//save button
Notes = document.getElementById("notes");
saveBtn = document.getElementById("saveBtnID");
saveBtn.addEventListener("click", () => {
  let existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  existingNotes.push(Notes.value);
  localStorage.setItem("notes", JSON.stringify(existingNotes));
  Notes.value = "";
});

//save button end

//clear button
document.getElementById("clearBtnID").addEventListener("click", () => {
  Notes.value = "";
});
