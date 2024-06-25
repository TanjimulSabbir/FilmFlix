export default function SearchedSuggestions({ keyWords }) {
    console.log(keyWords);
    return (
        <div className="h-screen overflow-y-visible overflow-scroll rounded-lg">
            {keyWords.map(keyword => (
                <div key={keyword.id} className="topSlider border-y bg-[#000000dc] text-green-600 py-2 px-3 cursor-pointer">
                    {keyword?.name}
                </div>
            ))}
        </div>
    );
}
