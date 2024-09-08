import { IoCreate} from "react-icons/io5";


const Profile = () => {
    return (
        <div className=" p-padding_md shadow-lg">
            <div className='flex items-center'>
                <div className="">
                    <img className="rounded-full w-W_base h-h_base" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                </div>
                <div className="space-y-1">
                    <p className="text-text_base font-semibold">Name: Tahsin Zaman</p>
                    <p className="text-text_base font-semibold">Email: ghost@gmail.com</p>
                </div>
            </div>
            <div className="mt-m_base ">
                <div className="flex items-center gap-1">
                    <p className="text-text_base font-semibold">My story</p>
                    <IoCreate size={25} className="mx-1 text-primary" />
                </div>
                <div className="mt-m_base flex items-start gap-gap_base w-[350px] hover:shadow-lg hover:scale-[1.02] transition-all ease-linear shadow-md p-padding_small rounded-rounded_primary">
                    <img className="w-W_base rounded-rounded_primary" src="https://img.freepik.com/free-vector/zombie-hands-rise-halloween_23-2147496536.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit.</p>
                        <p className="text-text_small text-hover_secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, nihil!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;