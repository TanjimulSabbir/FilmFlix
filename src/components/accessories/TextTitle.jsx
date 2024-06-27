import { MdOutlineArrowForwardIos } from 'react-icons/md'

export default function TitleText({text}) {
    return <h2 className="border-l-4 border-l-yellow-500 py-3 text-xl lg:text-3xl pl-3 flex items-center">
        <span className="mr-4">{text}</span>
        <MdOutlineArrowForwardIos className="font-bold" />
    </h2>
}

