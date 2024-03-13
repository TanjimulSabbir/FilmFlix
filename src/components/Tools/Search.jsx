import style from "../style/search.module.css"
function Search() {
    return (
        <div>
            <div className="relative mt-10">
                <input className="w-full rounded-3xl py-3 border pl-5" type="text" placeholder="Search for a movie, tv show, person..." />
                <button className={`${style.allSearchBtn}`}>Search</button>
            </div>
        </div>
    )
}

export default Search;  