import { CiPlay1 } from "react-icons/ci";
import moment from "moment";

function BannerText02({ movie }) {

    const monthName = moment().month(movie?.release_date?.split('-')[2]).format('MMMM');
    console.log(monthName); // Output: "January"

    return (
        <div className="w-1/2 flex justify-end">
            <div>
                <h1 className="mb-10 leading-none">
                    <span className="mr-5">on</span>
                    <span>
                        <span>{movie?.release_date?.split('-')[1]}</span>
                        <span className="-ml-1 lowercase">th</span>
                    </span>
                    <br />
                    <span className="tracking-widest">{monthName}</span>
                </h1>

                <button className={`flex items-center space-x-2`}>
                    <CiPlay1 className="circle text-4xl text-green-600" />
                    <span>
                        Watch Trailer
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BannerText02;