function BannerText01({movie}) {
  const {original_title,release_date,adult}=movie
  return (
    <div>
      <h2>{original_title}</h2>
      <div>
        <span>{release_date}</span>
        <span>15+</span>
        <span>02 hours 20min</span>
        <span>Mystrious</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, tempora necessitatibus. Accusantium obcaecati facilis fugiat aspernatur consectetur, illum hic aut?</p>
      </div>

      <div>
        <button>Buy ticket</button>
        <button>Add Watchlist</button>
      </div>
    </div>
  )
}

export default BannerText01;