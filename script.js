const posterCards = document.querySelectorAll(".poster-card");
const videoViewer = document.getElementById("videoViewer");
const mainVideo = document.getElementById("mainVideo");
const backButton = document.getElementById("backButton");

/* Открываем выбранное видео */
posterCards.forEach((poster) => {
    poster.addEventListener("click", () => {
        const videoPath = poster.dataset.video;

        if (!videoPath) {
            return;
        }

        mainVideo.src = videoPath;
        videoViewer.classList.add("active");
        document.body.style.overflow = "hidden";

        mainVideo.play().catch(() => {
            // Если браузер заблокировал автозапуск,
            // пользователь сможет нажать Play вручную.
        });
    });
});

/* Возвращаемся к постерам */
function closeVideo() {
    mainVideo.pause();
    mainVideo.removeAttribute("src");
    mainVideo.load();

    videoViewer.classList.remove("active");
    document.body.style.overflow = "";
}

backButton.addEventListener("click", closeVideo);

/* ESC тоже закрывает видео */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoViewer.classList.contains("active")) {
        closeVideo();
    }
});
