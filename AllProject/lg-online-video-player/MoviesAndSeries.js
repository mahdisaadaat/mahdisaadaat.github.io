const urls = [
  {
    id: 1,
    movieName: "ashiqui 2",
    url: "https://cdn.irdanlod.ir/?s=4&f=/files/Movie/2013/A/Aashiqui.2.2013.1080p.Farsi.Subbed.mkv",
    img: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
    movieSubtitle: "Aashiqui.2.vtt",
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
