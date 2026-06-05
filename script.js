let currentTrackIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// === ТВОИ ТРЕКИ ===
const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi"
    }
    // Добавляй сюда новые треки
];

function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];

    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

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

// === Кнопки ===
document.getElementById('playBtn').addEventListener('click', () => {
    const icon = document.querySelector('#playBtn i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
    alert("▶ Если трек не играет — нажми Play в маленьком плеере Spotify ниже");
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
});

// === Кнопка Лайк ===
document.getElementById('likeBtn').addEventListener('click', () => {
    const current = tracks[currentTrackIndex];
    if (!favorites.some(t => t.id === current.id)) {
        favorites.push(current);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`✅ "${current.name}" добавлен в любимые!`);
    } else {
        alert('Уже в любимых ❤️');
    }
});

// === Меню Любимых ===
const menuBtn = document.getElementById('menuBtn');
const favoritesSidebar = document.getElementById('favoritesSidebar');
const closeFavorites = document.getElementById('closeFavorites');

menuBtn.addEventListener('click', () => {
    favoritesSidebar.classList.add('open');
    renderFavorites();
});

closeFavorites.addEventListener('click', () => {
    favoritesSidebar.classList.remove('open');
});

function renderFavorites() {
    const list = document.getElementById('favoritesList');
    list.innerHTML = '';

    if (favorites.length === 0) {
        list.innerHTML = '<p style="text-align:center; padding:30px; color:#888;">Пока пусто</p>';
        return;
    }

    favorites.forEach((track, i) => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.style = 'padding:15px; cursor:pointer; border-bottom:1px solid rgba(255,255,255,0.1);';
        item.innerHTML = `<strong>${track.name}</strong><br><span style="opacity:0.7">${track.artist}</span>`;
        item.onclick = () => {
            loadTrack(tracks.findIndex(t => t.id === track.id) || 0);
            favoritesSidebar.classList.remove('open');
        };
        list.appendChild(item);
    });
}

// Запуск
loadTrack(0);
