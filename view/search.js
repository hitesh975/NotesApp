searchBar = document.getElementById("searchbar");

searchBar.addEventListener("input", () => {
  const query = searchBar.innerText.toLowerCase();
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    const title = note.innerText.toLowerCase();
    if (title.includes(query)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});
