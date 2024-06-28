import "../../style/loading.css"

export default function LoadingInline() {
    return (
        <div className="relative h-full flex items-center justify-center inset-0">
            <div className="">
                <p className="loader"></p>
            </div>
        </div>
    )
}