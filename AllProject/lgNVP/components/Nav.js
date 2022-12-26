export const Nav = (name) => {
  return `
    <div class="row navbar">
        <h1>Designed By ${name}</h1>
        <div class="input-group rounded search">
            <input type="search" class="form-control rounded search-input" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0 search-icon" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div>
        <div class="navButtons">
            <button type="button" class="btn btn-outline-danger"><a class="btn-outline-danger" href="../index.html">Home</a></button>
            <button type="button" class="btn btn-outline-success"><a class="btn-outline-success" href="../pages/addMovie.html">Add Movie</a></button>
        </div>
    </div>`;
};
