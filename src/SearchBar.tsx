function SearchBar() {
    const UsersSearch = (e) => {
        console.log(e.target.value);
  }
    return(
      <div className="App">
        <div className="container">
          <form>
            <input className="search"placeholder="Search..."onChange={UsersSearch}></input>
          </form>
          <div className="container">
            <button>
              <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Search-icon-by-Kanggraphic-580x386.jpg"alt= "search"width="45px"height="33px" />
            </button>
          </div>
        </div>

      </div>
    )
}
export default SearchBar;