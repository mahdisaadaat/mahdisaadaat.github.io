const searchGoogle = () => {
  let searchText = document.getElementById("searchText").value;
  /*let searchShow = location.replace(
    "https://www.google.com/search?q=" + searchText + ""
  );*/
  document
    .getElementById("searchResult")
    .innerHTML(
      ("https://www.google.com/search?q=" + searchText + "")
    );
};
