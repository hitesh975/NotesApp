// Navigation button event listeners for add_notes page

document.getElementById("Back").addEventListener("click", () => {
  window.location.href = "../index.html";
});

//Navigation button event listeners for add_notes page end

//save button
document.getElementById("saveBtnID").addEventListener("click", () => {
  const Editor = document.getElementById("notes");

  //get title
  const titleElement = document.getElementById("titleID");
  const titleText = titleElement.innerText.trim();
  //get title end
  localStorage.setItem(titleText, Editor.innerHTML);
  Editor.innerHTML = "";
  titleElement.innerHTML = "";
});

//save button end

//clear button
document.getElementById("clearBtnID").addEventListener("click", () => {
  Notes.textContent = "";
});
//clear button end
