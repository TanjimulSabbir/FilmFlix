import { Outlet } from 'react-router-dom'


export default function MoreLayout({ more }) {
    console.log(more, "from more layout")
    return (
        <div className=''>
            <Outlet />
        </div>
    )
}
