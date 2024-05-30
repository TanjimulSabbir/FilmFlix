export default function NotFoundError({ message }) {
    return (
        <div><p className="downSlider flex items-center justify-center text-red-300 text-lg py-24">No {message} found</p></div>
    )
}
