function BannerText01({ movie }) {
  const { original_title, release_date, adult } = movie || {}
  return (
    <div className="w-1/2">
      <h2 className="text-3xl shadow-md mb-4">{original_title}</h2>
      <div className="">
        <p className="">{release_date}</p>
        <p className="">15+</p>
        <p className="">02 hours 20min</p>
        <p className="">Mystrious</p>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, tempora necessitatibus. Accusantium obcaecati facilis fugiat aspernatur consectetur, illum hic aut?</p>

      <div>
        <button>Buy ticket</button>
        <button>Add Watchlist</button>
      </div>
    </div>
  )
}

export default BannerText01;