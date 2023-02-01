const urls = [
  {
    id: 1,
    movieName: "پوست شیر",
    url: "http://tb28.trainbit.com:8080/files/9708642484/v363494752654F6E3455456A683550355331564757582F446C62424B4A672F57714565484E42676E6C495434304E7045322B466B766E773D3D/poosteshir-S02E07-720.mp4",
    img: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
    movieSubtitle: "GhostraiderSub.vtt",
  },
];

let ul = $("ul.rig");
for (let i = 0; i <= urls.length - 1; i++) {
  ul.append(
    `<li class="movies"><img class="poster" src="${urls[i].img}"/><button id=${[
      i,
    ]} onclick="playLink(this.id)" class="link-url btn btn-primary"><p class="subtitle d-none" id="subtitle-url${[
      i,
    ]}">${urls[i].movieSubtitle}</p><p class="d-none" id="link-url${[i]}">${
      urls[i].url
    }</p>${urls[i].movieName}</button></li>`
  );
}
