const urls = [
  {
    id: 1,
    movieName: "Actor 13",
    url: "https://ir31.uploadboy.com/d/5vyrdp9qa1mm/rnnfkuoejdfx3pohlaxdxwgi7zmo2uidrtiqlfxn4daev4wlpam46xox2wefqwn5gwvve7xe/Actor.e13-1080p.mp4",
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
