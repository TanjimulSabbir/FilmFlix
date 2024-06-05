import style from "../style/welcomeText.module.css"
export default function WelComeText() {
    return (
        <div className="absolute inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-85 z-50">
            <p className={style.Text}>Flim Flex</p>
        </div>
    )
}
