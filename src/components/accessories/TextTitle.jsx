import { MdOutlineArrowForwardIos } from 'react-icons/md'

export const TitleText = ({text}) => {
    return <h2 className="border-l-4 border-l-yellow-500 py-3 text-3xl pl-3 flex items-center">
        <span className="mr-4">{text}</span>
        <MdOutlineArrowForwardIos className="font-bold" />
    </h2>
}

