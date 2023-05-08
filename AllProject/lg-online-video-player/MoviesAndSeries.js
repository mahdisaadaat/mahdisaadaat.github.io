const urls = [
  {
    id: 1,
    movieName: "Nato E3",
    url: "https://ir51.uploadboy.com/d/72fdftnz5vfn/r5ndinwdjdfx3pohkqxhzs6z4s7i6ncml63s64n2p3qsy4jujelz32dlmwngnmcvwwomhqpc/Naato03-1080.mp4",
    img: "https://gahar.ir/wp-content/uploads/2023/05/naato-e3.jpg",
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
