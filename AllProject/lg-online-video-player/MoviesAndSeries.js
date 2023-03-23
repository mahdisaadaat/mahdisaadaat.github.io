const urls = [
  {
    id: 1,
    movieName: "leila brothers",
    url: "https://ir71.uploadboy.com/d/m2cy7t9833w2/sfnltmwfjdfx3pohw4uwfr6w7lktgh7dsvazu4z5re5ufurvpasz4sm64c73jb7ymrvnihve/Baradaran-e-Leila-720.mp4",
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
