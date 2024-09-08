import logo from '../../assets/logo.png'
import { IoCreate } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className='py-padding_md flex items-center justify-between shadow-md p-padding_base rounded-rounded_base'>
            <div>
                <img src={logo} className='w-w_logo' alt="" />
            </div>
            <div className='flex gap-gap_base'>
                <button className="relative flex items-center py-padding_small px-padding_base rounded-rounded_primary  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-hover_primary transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-full"></span>
                    <span className="relative z-10 flex items-center text-white">
                        <IoCreate size={25} className="mx-1" />
                        Create
                    </span>
                </button>
                <button className="relative flex items-center py-padding_small px-padding_base rounded-rounded_primary  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-hover_secondary transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="relative z-10 flex items-center text-white">
                        <IoLogIn size={25} className="mx-1" />
                        Log in
                    </span>
                </button>
                <button className="relative flex items-center py-padding_small px-padding_base rounded-rounded_primary  overflow-hidden group active:scale-95 transition-all ease-linear">
                    <span className="absolute inset-0 bg-hover_secondary transition-all duration-300 ease-in-out "></span>
                    <span className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out group-hover:-translate-x-full"></span>
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