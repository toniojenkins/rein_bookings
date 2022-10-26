import React from 'react';

const Navbar = () => {
    return (
        <div className="h-[50px] bg-color flex justify-center">
            <div className="w-[100%] max-w-[1024px] text-white flex items-center justify-between">
                <span className="font-medium">Reign Bookings</span>
                <div>
                    <button className="button">Register</button>
                    <button className="button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
