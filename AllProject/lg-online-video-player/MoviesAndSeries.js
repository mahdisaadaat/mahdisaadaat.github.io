const urls = [
  {
    id: 1,
    movieName: "rahayam kon E1",
    url: "https://ir91.uploadboy.com/d/p4a6eirc76t2/snnhzhogjdfx3pohuqux5gwqxizye5hkrqabc7umhdbrfdshaxwr5me77poop3oiy47fwjle/Rahayamkon01-1080.mp4",
    img: "https://zbcdn.cloud/files/cache/46614_photo_2023-02-17_10-06-12.2d42c6.jpg",
    movieSubtitle: "",
  },{
    id: 2,
    movieName: "rahayam kon E2",
    url: "https://ir51.uploadboy.com/d/76kfvwdg2cpa/r5nit7ggjdfx3pohxauwph6z7xu4yfm3wqr5jaej5zjkzowgj2q7ayw6cb2cc2s4lv6sbbnu/Rahayamkon021080.mp4",
    img: "https://static.cdn.asset.filimo.com/flmt/mov_131436_53684-m.jpg",
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
