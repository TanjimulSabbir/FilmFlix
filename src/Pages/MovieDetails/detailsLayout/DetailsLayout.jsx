import { Outlet } from 'react-router-dom'


export default function MoreLayout({ more }) {
    return (
        <div>
            <Outlet />
        </div>
    )
}
