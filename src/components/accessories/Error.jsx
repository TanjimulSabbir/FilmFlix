export default function Error({ error }) {
    return (
        <div className="container mx-auto flex items-center justify-center text-red-700">{error?.status}</div>
    )
}
