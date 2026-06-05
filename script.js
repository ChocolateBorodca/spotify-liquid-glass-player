let currentTrackIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Твои треки (добавляй сюда)
const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi"
    }
    // Добавляй новые треки сюда
];

function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];

    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    // Spotify embed
    document.getElementById('spotifyEmbed').innerHTML = `
        <iframe 
            src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
            width="100%" 
            height="120" 
            frameBorder="0" 
            allow="autoplay; encrypted-media; clipboard-write">
        </iframe>
    `;
}

// === Кнопки управления ===
document.getElementById('playBtn').addEventListener('click', () => {
    const icon = document.querySelector('#playBtn i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
    
    alert("▶ Нажми кнопку Play в пле
