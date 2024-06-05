import style from "../style/welcomeText.module.css"
import logoText from "../assets/videos/FlimFlex.gif"
export default function WelComeText() {
    return (
        <div className="absolute inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-85 z-50">
            <img src={logoText} alt="" srcSet="" />
        </div>
    )
}
