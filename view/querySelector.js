document.querySelectorAll(".note").forEach((button) => {
  button.addEventListener("click", () => {
    //title
    const noteKey = button.dataset.noteKey;
    const encodedKey = encodeURIComponent(noteKey);

    //description
    const descriptionText = noteKey.replace(titleCode, "") + descriptionCode;
    const encodedDescription = encodeURIComponent(descriptionText);
    window.location.href = `/NotesApp/NoteRead/NoteRead.html?note=${encodedKey}&description=${encodedDescription}`;
  });
});
