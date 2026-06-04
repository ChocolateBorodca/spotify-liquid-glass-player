let currentTrackIndex = 0;

const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi",
        type: "track"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    
    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    const embedContainer = document.getElementById('spotifyEmbed');
    
    embedContainer.innerHTML = `
        <iframe 
            src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
            width="100%" 
            height="420" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    `;
}

// Наши красивые кнопки (управляют только переключением)
document.getElementById('playBtn').addEventListener('click', () => {
    alert("▶ Нажми кнопку Play прямо внутри Spotify плеера");
});

document.getElementById('nextBtn').addEventListener('click', () => {
    alert("Пока только один трек. Добавь ещё — пришлёшь ссылку.");
});

document.getElementById('prevBtn').addEventListener('click', () => {
    alert("Пока только один трек.");
});

// Меню
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('favoritesSidebar').classList.add('open');
});
document.getElementById('closeFavorites').addEventListener('click', () => {
    document.getElementById('favoritesSidebar').classList.remove('open');
});

loadTrack(0);
