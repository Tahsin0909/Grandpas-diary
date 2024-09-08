import { useState } from "react";
import Profile from "../components/profile/Profile";

const Home = () => {

    const [filter, setFilter] = useState("all");

    return (
        <div className="mt-m_primary grid grid-cols-3 gap-gap_primary">
            <div>
                <Profile />
            </div>
            <div className="col-span-2 shadow-lg p-padding_base">
                <div className=" grid grid-cols-4 items-center justify-center">
                    <button
                        onClick={() => setFilter("all")}
                        className={`text-center active:scale-95 transition-all ease-out p-padding_small md:p-padding_medium hover:bg-primary hover:text-white ${filter === "all" ? "bg-primary text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">All Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("rockingChair")}
                        className={`text-center active:scale-95 transition-all ease-out p-padding_small md:p-padding_medium hover:bg-primary hover:text-white ${filter === "rockingChair" ? "bg-primary text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Rocking Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("sideChair")}
                        className={`text-center active:scale-95 transition-all ease-out p-padding_small md:p-padding_medium hover:bg-primary hover:text-white ${filter === "sideChair" ? "bg-primary text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Side Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("loungeChair")}
                        className={`text-center active:scale-95 transition-all ease-out p-padding_small md:p-padding_medium hover:bg-primary hover:text-white ${filter === "loungeChair" ? "bg-primary text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Lounge Chair</p>
                    </button>
                </div> 
                <div className="mt-m_primary p-padding_base grid grid-cols-2 gap-gap_primary">
                    <div className="w-[300px] rounded overflow-hidden shadow-lg">

                        <img className="w-full" src="https://img.freepik.com/free-photo/dark-fantasy-creature-scene_23-2151136226.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base text-text_small">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            </div>
                    </div>
                    <div className="w-[300px] rounded overflow-hidden shadow-lg">

                        <img className="w-full" src="https://img.freepik.com/free-photo/dark-fantasy-creature-scene_23-2151136226.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base text-text_small">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            </div>
                    </div>
                    <div className="w-[300px] rounded overflow-hidden shadow-lg">

                        <img className="w-full" src="https://img.freepik.com/free-photo/dark-fantasy-creature-scene_23-2151136226.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base text-text_small">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            </div>
                    </div>
                    <div className="w-[300px] rounded overflow-hidden shadow-lg">

                        <img className="w-full" src="https://img.freepik.com/free-photo/dark-fantasy-creature-scene_23-2151136226.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base text-text_small">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;