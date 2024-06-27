function Popularity({ popularity }) {
    const thresholds = { niche: 500, mainstream: 1000, blockbuster: 1500 };
    const level = popularity < thresholds.niche ? 'Niche' :
        popularity < thresholds.mainstream ? 'Mainstream' : 'Blockbuster';

    const levelColors = { Niche: 'text-red-500', Mainstream: 'text-sky-500', Blockbuster: 'text-green-500' };
    const levelColor = levelColors[level] || 'text-black';

    return (
        <div>
            <p className="lg:uppercase text-[#279bf9]">Popularity</p>
            <p className={`${levelColor} font-bold`}>{level}</p>
        </div>
    );
}

export default Popularity;
