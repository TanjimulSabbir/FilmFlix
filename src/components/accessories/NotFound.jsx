import { Link } from 'react-router-dom';
import notFound from "../../assets/Logo/undraw_omega_-4-kob.svg";

export default function NotFound() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img className="h-screen" src={notFound} alt="Not Found" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-gray-100">
                <div>
                    <h1 className="text-4xl font-semibold mb-4">Oops!</h1>
                    <p className="text-lg">The page you are looking for could not be found.</p>
                    <p className="text-sm mt-2">Please check the URL or go back to the <Link className='text-green-600 cursor-pointer font-extrabold italic' to="/">homepage</Link>.</p>
                </div>
            </div>
        </div>
    );
}
