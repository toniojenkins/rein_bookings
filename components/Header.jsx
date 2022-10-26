import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import {
    faBed,
    faCar,
    faPercent,
    faPerson,
    faPlane,
    faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Header = () => {
    const [input, setInput] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const resetInput = () => {
        setInput('');
    };

    return (
        <div className="bg-color text-white flex justify-center relative">
            <div className="w-[100%] max-w-[1024px] mt-[20px] mb-[100px]">
                <div className="flex gap-[40px] mb-[50px]">
                    <div className="headerItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1>A lifetime of discounts? It's Genius.</h1>
                <p className="my-[20px]">
                    Get rewarded for your travels - unlock instant savings of
                    10% or move with a free Reignbooking account
                </p>
                <button className="bg-[#0071c2] text-white font-medium border-none p-[10px] rounded-lg">
                    Sign in / Register
                </button>
                <div className="search">
                    <div className="headerItem">
                        <FontAwesomeIcon
                            className="text-[lightgray]"
                            icon={faBed}
                        />
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border-none outline-none text-black"
                            type="text"
                            placeholder="Where are you going?"
                        />
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon
                            className="text-[lightgray]"
                            icon={faCalendarDays}
                        />
                        <span className="text-[lightgray] cursor-pointer">
                            {`${format(
                                date[0].startDate,
                                'MM/dd/yyyy'
                            )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {openDate && (
                            <DateRangePicker
                                className="absolute top-[27px] text-black"
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                minDate={new Date()}
                                ranges={date}
                            />
                        )}
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon
                            className="text-[lightgray]"
                            icon={faPerson}
                        />
                        <span className="text-[lightgray] cursor-pointer">
                            2 adults 2 children 1 room
                        </span>
                    </div>
                    <div className="headerItem">
                        <button className="bg-[blue]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
