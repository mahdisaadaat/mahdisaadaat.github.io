const urls = [
  {
    id: 1,
    movieName: "Actor 14",
    url: "https://ir31.uploadboy.com/d/ynpqh8266cq2/rnnc7bodjdfx3pohlqxhtrgt5zego5tx6bgifqyltdjwrgotg2qt5loj4xfknnicsfkvjwh3/Actor-e14-1080.mp4",
    img: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
    movieSubtitle: "",
  },{
    id: 2,
    movieName: "رهایم نکن",
    url: "https://ir31.uploadboy.com/d/0u1ywc9jnvb1/rnnc4toejdfx3pohlexgdhef6svzth6ba7dd6gvsgfzuutmveh4z23jtl2kvg4hwuq7kyeyk/rahayamkon-e10.720p.mp4",
    img: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
    movieSubtitle: "",
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
