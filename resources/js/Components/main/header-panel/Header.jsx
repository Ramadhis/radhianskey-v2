import React from "react";

const Header = () => {
    return (
        <div className="text-white w-full h-full ms-2 flex justify-between items-center">
            <div className="w-40 text-lg font-semibold">Radhians-Keys</div>
            <div className="px-2 bg-[#1f1f1f] w-80 h-7 lg:block md:block hidden relative overflow-hidden group rounded-sm hover:scale-110 delay-150 ease-in-out duration-300">
                <div className="animate-spin-slow group-hover:animate-none transition-all group-hover:delay-100 group-hover::duration-150 w-96 h-20 m-auto -left-3 right-0 bg-white absolute"></div>
                <a
                    href="#"
                    className="inset-[1px] bg-[#1c1e20] absolute flex justify-center items-center text-[11px] rounded-sm "
                >
                    Test your keyboard here...
                </a>
            </div>{" "}
            {/*Test your keyboard here...*/}
            <div className="h-full flex items-center group">
                <div className="me-2 text-sm font-semibold">Ramadhiansyah</div>
                <a href="#" className="pe-6">
                    <img
                        alt="name"
                        src="https://i.stack.imgur.com/HgkK0.png"
                        className="object-none w-8 h-8 rounded-full inline border-2"
                    />
                </a>
                <div className="bg-[#1f1f1f] border border-zinc-300  w-36 h-20 z-30 absolute top-9 right-5 rounded text-black hidden group-hover:block group-hover:transition">
                    <div className="hover:bg-[#2c508a] mt-2 text-zinc-300 ps-2">
                        <a href="#">Account setting</a>
                    </div>
                    <div className="hover:bg-[#2c508a] mt-2 text-zinc-300 ps-2">
                        <a href="#">Sign out</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
