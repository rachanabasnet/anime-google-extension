async function fetchImages() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?type=tv&page=1");
  const animeList = await res.json();

  const randomValue = Math.floor(Math.random(1, 25) * 10);
  const item = animeList.data[randomValue];
  const imgElement = document.createElement("img");

  imgElement.src = item.images.jpg.large_image_url;
  document.getElementById("image1").appendChild(imgElement);

  document.getElementById("title").innerHTML = `
  <p class="title">#${item.rank} ${item.title}(${item.title_japanese})</p>
  <p> Score: ${item.score}</p>
  `;

  var genreList = document.getElementById("genres");
  for (var i = 0; i < item.genres.length; i++) {
    var genreItem = document.createElement("span");
    genreItem.textContent = `${item.genres[i].name}`;
    genreItem.className = "genre";
    genreList.appendChild(genreItem);
  }

  document.getElementById(
    "synopsis"
  ).innerHTML = `<span>${item.synopsis}</span>`;
}

fetchImages();
