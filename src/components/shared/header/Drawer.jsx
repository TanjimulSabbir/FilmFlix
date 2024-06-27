import SmallNavbar from "./SmallNavbar";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export default function Drawer() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={toggleDrawer} />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="bg-white text-2xl z-50 cursor-pointer"><IoMenuSharp /></label>
            </div>
            <div className={`drawer-side h-screen w-[250px] bg-[#000000dc] z-50 ${drawerOpen ? 'block' : 'hidden'}`}>
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay absolute top-2 right-5 z-50 cursor-pointer">
                    <IoMenuSharp className="text-white text-2xl" />
                </label>
                <div className="p-4">
                    <SmallNavbar />
                </div>
            </div>
        </div>
    );
}
