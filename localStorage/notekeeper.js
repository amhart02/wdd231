window.addEventListener("load", () => {
    let savedNote = localStorage.getItem("note");
    if (savedNote) {
        document.querySelector("#noteInput").value = savedNote;
    }
});

document.querySelector("#saveBtn").addEventListener("click", function() {
    let note = document.querySelector("#noteInput").value;
    // sessionStorage if wanted
    localStorage.setItem("note", note);
    alert("Note Saved");
});

document.querySelector("#clearBtn").addEventListener("click", function() {
    let note = document.querySelector("#noteInput").value = "";
    // sessionStorage if wanted
    localStorage.removeItem("note");
    alert("Note Removed");
});