const urls = [
  {
    id: 1,
    movieName: "Nato E1",
    url: "https://ir31.uploadboy.com/d/659a3oa4qwn0/rnnbay6ejdfx3pohlyxgdr4d7l6ift6i46ox54hrckjn3aqznwmcslhfbhsbxvfqttxv3wnj/Naato-01-1080.mp4",
    img: "https://benameiran.golf/wp-content/uploads/2023/04/Naato-S01E01.jpg",
    movieSubtitle: "",
  },
  {
    id: 2,
    movieName: "rahayam kon E2",
    url: "https://ir71.uploadboy.com/d/traj03noiuv5/sfnody6djdfx3pohkexdthoq7cn5bdieqh5mhxuk7lftwzewkt74d5xnf5nn7mdd3mgajyak/Actor-e15-1080.mp4",
    img: "https://static.cdn.asset.filimo.com/flmt/mov_131436_53684-m.jpg",
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
