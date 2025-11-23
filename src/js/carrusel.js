document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("default-carousell .track");
    const clones = track.innerHTML;
    track.innerHTML += clones;
});
