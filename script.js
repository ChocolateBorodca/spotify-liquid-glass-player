let currentTrackIndex = 0;
let isPlaying = false;

const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    
    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    // Большая обложка
    const albumImg = document.querySelector('.album-art img');
    albumImg.src = `https://i.scdn.co/image/ab67616d0000b273f3e7c9c8f5e5f5e5f5e5f5e5`; // можно поменять

    // Спрятанный embed (чтобы музыка могла играть)
    const embedContainer = document.getElementById('spotifyEmbed');
    embedContainer.innerHTML = `
        <iframe 
            src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; encrypted-media">
        </iframe>
    `;
}

// Кнопки
const playBtn = document.getElementById('playBtn');
const playIcon = playBtn.querySelector('i');

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        alert("▶ Музыка должна запуститься в спрятанном плеере.\nЕсли не играет — нажми Play внутри маленького плеера Spotify (он внизу)");
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    alert("Пока только один трек.\nПришли ещё ссылки — добавим.");
});

document.getElementById('prevBtn').addEventListener('click', () => {
    alert("Пока только один трек.");
});

// Запуск
loadTrack(0);
