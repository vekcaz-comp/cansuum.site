window.onload = () => {
  const heart = document.getElementById('heart');
  const splashText = document.getElementById('splashText');
  const music = document.getElementById('bg-music');
  const footer = document.getElementById('footer');

  heart.addEventListener('click', () => {
    // Kalbi gizle
    heart.style.display = 'none';

    // Yazıyı göster
    splashText.style.display = 'block';

    // Müzik başlasın
    music.muted = false; // mute aç
    music.play(); // müziği başlat

    // Footer'ı göster
    footer.style.display = 'block';
  });
};
