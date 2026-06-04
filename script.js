// Sample track data (можно добавлять свои треки)
let currentTrackIndex = 0;

const tracks = [
    {
        id: "4uLU6hMCjMI75M1A2tKUQC",
        name: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://picsum.photos/id/1015/400/400"
    },
    {
        id: "0VjIjW4GlUZ4sVIMW0fQ7e",
        name: "Levitating",
        artist: "Dua Lipa",
        cover: "https://picsum.photos/id/201/400/400"
    },
    {
        id: "7qiZfU4dY1lWllzX7mPBI3",
        name: "Shape of You",
        artist: "Ed Sheeran",
        cover: "https://picsum.photos/id/237/400/400"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    
    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;
    
    // Обновляем обложку
    const albumImg = document.querySelector('.album-art img');
    albumImg.src = track.cover;

    // Вставляем Spotify плеер
    const embedContainer = document.getElementById('spotifyEmbed');
    embedContainer.innerHTML = `
        <iframe 
            style="border-radius: 12px;" 
            src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    `;
}

// Управление кнопками
document.getElementById('playBtn').addEventListener('click', () => {
    const playIcon = document.querySelector('#playBtn i');
    if (playIcon.classList.contains('fa-play')) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
});

// Меню "Любимые треки"
const menuBtn = document.getElementById('menuBtn');
const favoritesSidebar = document.getElementById('favoritesSidebar');
const closeFavorites = document.getElementById('closeFavorites');

menuBtn.addEventListener('click', () => {
    favoritesSidebar.classList.add('open');
});

closeFavorites.addEventListener('click', () => {
    favoritesSidebar.classList.remove('open');
});

// Заполняем список любимых
function populateFavorites() {
    const list = document.getElementById('favoritesList');
    list.innerHTML = tracks.map((track, i) => `
        <div class="favorite-item" onclick="playFavorite(${i})" style="display:flex; align-items:center; gap:15px; padding:12px; border-radius:12px; cursor:pointer; transition:0.2s;">
            <img src="${track.cover}" style="width:50px; height:50px; border-radius:8px;" alt="">
            <div>
                <div style="font-weight:600;">${track.name}</div>
                <div style="opacity:0.7; font-size:0.9rem;">${track.artist}</div>
            </div>
        </div>
    `).join('');
}

window.playFavorite = function(index) {
    currentTrackIndex = index;
    loadTrack(index);
    favoritesSidebar.classList.remove('open');
};

// Инициализация
loadTrack(0);
populateFavorites();
