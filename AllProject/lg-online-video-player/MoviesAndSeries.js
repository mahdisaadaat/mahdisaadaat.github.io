const urls = [
  {
    id: 1,
    movieName: "Aile 1",
    url: "https://dl2.plazairan.com/series/Turkish/Aile/subbed/s1/1080p/Aile%20E01%201080p.Farsi.Subbed.Tvrooz.mkv",
    img: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
    movieSubtitle: "",
  },{
    id: 2,
    movieName: "actor 9",
    url: "https://ir31.uploadboy.com/d/drbfv5nqyp9o/rnnnl4gfjdfx3pohjixh5smcwtntez7lci275wmseca2va4c7pglcp42v3bgzbgkrobaufk7/Actor-E09.1080.mp4",
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
