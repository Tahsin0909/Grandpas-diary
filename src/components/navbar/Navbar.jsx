import logo from '../../assets/logo.png'
import { IoCreate } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className='py-4 flex items-center justify-between shadow-md p-2 rounded-md'>
            <div>
                <img src={logo} className='w-72' alt="" />
            </div>
            <div className='flex gap-3'>
                <button className="relative flex items-center py-2 px-3 rounded-lg  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-[#388589] transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-[#6FAFAD] transition-all duration-300 ease-in-out group-hover:translate-x-full"></span>
                    <span className="relative z-10 flex items-center text-white">
                        <IoCreate size={25} className="mx-1" />
                        Create
                    </span>
                </button>
                <button className="relative flex items-center py-2 px-3 rounded-lg  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-[#895338] transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-[#D9825E] transition-all duration-300 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="relative z-10 flex items-center text-white">
                        <IoLogIn size={25} className="mx-1" />
                        Log in
                    </span>
                </button>
                <button className="relative flex items-center py-2 px-3 rounded-lg  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-[#895338] transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-[#D9825E] transition-all duration-300 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="relative z-10 flex items-center text-white">
                        <IoLogOut size={25} className="mx-1" />
                        Log out
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;