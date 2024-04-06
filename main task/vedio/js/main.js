window.onload = function() {
    const items = document.querySelectorAll('.item');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videos = [
        "../img/video_2024-02-12_21-15-37.mp4",
        "../img/video_2024-02-12_21-15-45.mp4",
        "../img/video_2024-02-12_21-15-53.mp4",
        "../img/video_2024-02-12_21-15-53.mp4"
    ];

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index < videos.length) {
                videoSource.src = videos[index];
                videoPlayer.load();
                videoPlayer.play();
            }
        });
    });
};

