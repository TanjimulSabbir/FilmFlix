export default function Error({ message }) {
    return (
        <div className="flex items-center justify-center mt-3">
            <p className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full text-center">
                <span className="block text-sm">{message}</span>
            </p>
        </div>
    );
}