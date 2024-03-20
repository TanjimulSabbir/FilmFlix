import style from "../../cssTricks.module.css"

function Design() {
    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-10">
            <div>
                <p>This is css Design checking component</p>
                {/* <blockquote> */}
                <p className={`${style.colorText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nisi ullam animi accusantium.</p>
                {/* </blockquote> */}
            </div>
            <div>
                <h1 className={`${style.homeTitle}`}>
                    <span>Simple text reveal with css</span>
                    <span>using pseudo elements</span>
                </h1>
            </div>
        </div>
    )
}

export default Design;