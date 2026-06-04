let currentTrackIndex = 0;

const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4?si=84ec8fd443d04d2b",   // Shape of You
        name: "snowfall",
        artist: "Oneheart",
        type: "track"
    },
    {
        id: "4uLU6hMCjMI75M1A2tKUQC",
        name: "Blinding Lights",
        artist: "The Weeknd",
        type: "track"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    
    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    const embedContainer = document.getElementById('spotifyEmbed');
    
    let embedUrl = '';
    if (track.type === "playlist") {
        embedUrl = `https://open.spotify.com/embed/playlist/${track.id}?utm_source=generator&theme=0`;
    } else {
        embedUrl = `https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`;
    }

    embedContainer.innerHTML = `
        <iframe 
            src="${embedUrl}" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    `;
}

// Кнопки управления
document.getElementById('playBtn').addEventListener('click', () => {
    // Spotify embed не позволяет легко управлять снаружи, поэтому просто сообщение
    alert("Нажми кнопку Play прямо в плеере Spotify ↑");
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
});

// Меню
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('favoritesSidebar').classList.add('open');
});
document.getElementById('closeFavorites').addEventListener('click', () => {
    document.getElementById('favoritesSidebar').classList.remove('open');
});

loadTrack(0);
