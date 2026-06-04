let currentTrackIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Треки (добавляй сюда сколько хочешь)
const tracks = [
    {
        id: "4xF4ZBGPZKxECeDFrqSAG4",
        name: "snowfall",
        artist: "Øneheart, reidenshi"
    }
    // Добавляй новые треки сюда так:
    // { id: "ДРУГОЙ_ID", name: "Название", artist: "Артист" }
];

function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];

    document.getElementById('trackName').textContent = track.name;
    document.getElementById('artistName').textContent = track.artist;

    // Загружаем Spotify embed
    document.getElementById('spotifyEmbed').innerHTML = `
        <iframe 
            src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" 
            width="100%" 
            height="100" 
            frameBorder="0" 
            allow="autoplay; encrypted-media; clipboard-write">
        </iframe>
    `;
}

// Кнопка Play / Pause
document.getElementById('playBtn').addEventListener('click', () => {
    const icon = document.querySelector('#playBtn i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
    
    // Spotify embed иногда требует ручного нажатия, но пытаемся
    alert("▶ Попробуй нажать Play в маленьком плеере Spotify ниже, если не запустилось автоматически");
});

// Prev / Next
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        loadTrack(currentTrackIndex - 1);
    } else {
        loadTrack(tracks.length - 1); // зацикливаем
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentTrackIndex < tracks.length - 1) {
        loadTrack(currentTrackIndex + 1);
    } else {
        loadTrack(0); // зацикливаем
    }
});

// Кнопка "Добавить в любимые"
document.getElementById('likeBtn').addEventListener('click', () => {
    const currentTrack = tracks[currentTrackIndex];
    
    // Проверяем, есть ли уже в любимых
    if (!favorites.some(t => t.id === currentTrack.id)) {
        favorites.push(currentTrack);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`✅ "${currentTrack.name}" добавлен в любимые!`);
        renderFavorites();
    } else {
        alert('Уже в любимых ❤️');
    }
});

// Открытие / закрытие любимых
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

// Отображение списка любимых
function renderFavorites() {
    const list = document.getElementById('favoritesList');
    if (favorites.length === 0) {
        list.innerHTML = '<p style="text-align:center; opacity:0.6; margin-top:40px;">Пока нет любимых треков</p>';
        return;
    }

    list.innerHTML = favorites.map((track, i) => `
        <div class="favorite-item" onclick="playFromFavorites(${i})">
            <strong>${track.name}</strong><br>
            <span style="opacity:0.7">${track.artist}</span>
        </div>
    `).join('');
}

// Воспроизведение из любимых
window.playFromFavorites = function(index) {
    const favTrack = favorites[index];
    // Находим индекс в основном массиве
    const foundIndex = tracks.findIndex(t => t.id === favTrack.id);
    if (foundIndex !== -1) {
        loadTrack(foundIndex);
    } else {
        // Если трека нет в основном списке — добавляем временно
        tracks.push(favTrack);
        loadTrack(tracks.length - 1);
    }
    favoritesSidebar.classList.remove('open');
};

// Инициализация
loadTrack(0);
