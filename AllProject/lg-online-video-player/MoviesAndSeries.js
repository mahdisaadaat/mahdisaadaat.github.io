const urls = [
  {
    id: 1,
    movieName: "Actor.e16",
    url: "https://ir71.uploadboy.com/d/j2ihoo9he1k8/sfnbwt6djdfx3pohnixdxqw4xal6strv4ypyjq47rlotkcq7b52xvc43czm2wqter37lmivd/Actor.e16-1080p.mp4",
    img: "https://www.doostihaa.com/img/uploads/2023/05/Actor-E16.jpg",
    movieSubtitle: "",
  },
  {
    id: 2,
    movieName: "Sargije",
    url: "https://ir41.uploadboy.com/d/zept07shzrpf/wjnfsl6djdfx3pohkqxhjs6b7a47mvihz7iabmlhzoynimuibqf2soetydrdsmfchq4l5bjy/Sargije17-720.mp4",
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
