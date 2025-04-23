document.getElementById("heart").addEventListener("click", function() {
  const splash = document.getElementById("splash");
  const content = document.getElementById("content");
  const music = document.getElementById("bgMusic");

  // splash'ı gizle, içeriği göster
  splash.style.display = "none";
  content.style.display = "block";

  // müzik çal
  music.play().catch(error => {
    console.log("Müzik çalınamadı: ", error);
  });
});
