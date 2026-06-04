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

    document.getElementById('spotifyEmbed').innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
                width="100%" 
                height="100" 
                frameBorder="0" 
                allow="autoplay; encrypted-media; clipboard-write">
        </iframe>
    `;
}

// Кнопки (пока только уведомления)
document.getElementById('playBtn').addEventListener('click', () => {
    alert("▶ Нажми кнопку Play прямо в маленьком Spotify плеере под обложкой");
});

document.getElementById('nextBtn').addEventListener('click', () => {
    alert("Пока только один трек");
});

document.getElementById('prevBtn').addEventListener('click', () => {
    alert("Это первый трек");
});

// Запуск
loadTrack();
