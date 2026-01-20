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
  const descriptionElement = document.getElementById("description");
  const descriptionCode =
    "466543466466553465643566543565463526135526646332556146538564";
  const titleCode =
    "237852572457426578624756274651450185316584168484638419849849684651651"; //unique code to separate title from description
  const titleText = titleElement.innerText.trim() + titleCode;
  //get title end

  const descriptionText = titleElement.innerText.trim() + descriptionCode; //key for description storage
  localStorage.setItem(titleText, Editor.innerHTML); //key:value pair for note
  localStorage.setItem(
    descriptionText, //key for description
    descriptionElement.innerHTML, //value for description
  );
  Editor.innerHTML = "";
  titleElement.innerHTML = "";
  descriptionElement.innerHTML = "";
});

//save button end

//clear button
document.getElementById("clearBtnID").addEventListener("click", () => {
  Notes.textContent = "";
  titleElement.textContent = "";
  descriptionElement.textContent = "";
});
//clear button end
