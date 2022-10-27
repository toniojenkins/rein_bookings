import React from 'react';

const MailList = () => {
    return (
        <div className="w-[100%] mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-[20px] p-[50px]">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">
                Sign up and we'll send the best deals to you
            </span>
            <div className="mailInputContainer">
                <input
                    className="w-[300px] h-[30px] p-[10px] border-none mr-[10px] rounded-[5px]"
                    type="text"
                    placeholder="Your Email"
                />
                <button className="h-[50px] bg-[#0071c2] text-white font-[500] border-none rounded-[5px] cursor-pointer p-[5px]">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default MailList;
