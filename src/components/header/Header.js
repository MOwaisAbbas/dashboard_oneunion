import Profile from "../../assets/Ellipse 3.png"
import BellIcon from "../../assets/Vector.png"
import ChatIcon from "../../assets/message (6) 1.png"
import { PiListLight } from "react-icons/pi"
function Header({ title }) {
    return (<>
        <div className="border bg-white h-16 flex items-center justify-between md:px-10 px-5  ">
            <p className="font-bold text-xl">
                {title}
            </p>
            <button className="sm:hidden block border p-2 rounded-md">
                <PiListLight size={28} />
            </button>
            <div className="sm:flex hidden items-center justify-evenly gap-3 ">

                <div className="px-2 py-1 border   ">
                    <img className="w-3 h-4 mx-auto" src={BellIcon} />
                </div>
                <div className="px-2 py-1 border   ">
                    <img className="w-3 h-4 mx-auto" src={ChatIcon} />

                </div>
                <div className="p-3">
                    <img className="rounded-full " src={Profile} />
                </div>
                <div className="flex flex-col  p-3">
                    <p className="text-sm">
                        Jonathon Treat
                    </p>
                    <p className="text-xs">
                        lana@treat.com
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default Header;