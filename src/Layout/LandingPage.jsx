import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";

function LandingPage() {
  const ToggleData = [{ title: "Today", "path": "" }, { title: "This week", path: "" }]
  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
    </div>
  )
}

export default LandingPage;