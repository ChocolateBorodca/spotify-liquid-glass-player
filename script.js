let isPlaying = false;

const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi"
    }
];

function loadTrack() {
    const track = tracks[0];
    
    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    // Спрятанный плеер Spotify
    document.getElementById('spotifyEmbed').innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
                width="100%" height="80" frameBorder="0" allow="autoplay; encrypted-media">
        </iframe>
    `;
}

// Кнопки
document.getElementById('playBtn').addEventListener('click', () => {
    isPlaying = !isPlaying;
    const icon = document.querySelector('#playBtn i');
    
    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
    
    // Пользователь должен нажать play в маленьком плеере, если не запустилось
    alert("Нажми кнопку ▶ Play в маленьком плеере Spotify (он под обложкой)");
});

document.getElementById('nextBtn').addEventListener('click', () => {
    alert("Пока только один трек. Пришли ссылку — добавим следующий.");
});

document.getElementById('prevBtn').addEventListener('click', () => {
    alert("Это первый трек.");
});

// Запуск
loadTrack();
