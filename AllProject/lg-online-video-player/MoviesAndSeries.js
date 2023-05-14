const urls = [
  {
    id: 1,
    movieName: "Newcamp E1",
    url: "https://ir71.uploadboy.com/d/o73u6x4g0xgk/sfnjwagdjdfx3pohk4xgfhuewronmnvpnekpo2spuha4fjhm6l5vto5rafe4km53fnyx4vty/Newcamp-e01-720.mp4",
    img: "https://www.doostihaa.com/img/uploads/2023/05/Actor-E16.jpg",
    movieSubtitle: "",
  },
  {
    id: 2,
    movieName: "Tnt",
    url: "https://ir31.uploadboy.com/d/9piuhror16rl/rnndqnwdjdfx3pohkqxhvx4exowfegdu5ve53cqmg36nk6fzpexc6jxoe7qo3ixlgvta2d4j/TNT05-720.mp4",
    img: "https://vipofilm.com/wp-content/uploads/2023/05/Actor-E15.jpg",
    movieSubtitle: "",
  },
];

let ul = $("ul.rig");
for (let i = 0; i <= urls.length - 1; i++) {
  ul.append(
    `<li class="movies"><img id="movie-img${[i]}" class="poster" src="${
      urls[i].img
    }" /><button id=${[
      i,
    ]} onclick="playLink(this.id)" class="link-url btn btn-primary"><p class="subtitle d-none" id="subtitle-url${[
      i,
    ]}">${urls[i].movieSubtitle}</p><p class="d-none" id="link-url${[i]}">${
      urls[i].url
    }</p>${urls[i].movieName}</button></li>`
  );
}
