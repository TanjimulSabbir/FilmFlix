import "../../style/animation.css"
export default function Error({ message }) {
    return (
        <div className="rightSlider h-full flex items-center justify-center text-red-700">{message}</div>
    )
}
