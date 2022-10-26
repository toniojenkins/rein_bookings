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
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleOption = (gender, op) => {
        setOptions((prev) => {
            return {
                ...prev,
                [gender]:
                    op === '+' ? options[gender] + 1 : options[gender] - 1,
            };
        });
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
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="text-[lightgray] cursor-pointer"
                        >
                            {`${format(
                                date[0].startDate,
                                'MM/dd/yyyy'
                            )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {openDate && (
                            <DateRangePicker
                                className="z-20 absolute top-[43px] left-[80px] text-black"
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
                        <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="text-[lightgray] cursor-pointer"
                        >
                            {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                        </span>
                        {openOptions && (
                            <div className="header_options">
                                <div className="header_optionItem">
                                    <span className="text-black">Adult</span>
                                    <div className="header_optionCounter">
                                        <button
                                            disabled={options.adult <= 1}
                                            onClick={() =>
                                                handleOption('adult', '-')
                                            }
                                            className="header_optionBtn"
                                        >
                                            -
                                        </button>
                                        <span>{options.adult}</span>
                                        <button
                                            onClick={() =>
                                                handleOption('adult', '+')
                                            }
                                            className="header_optionBtn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="header_optionItem">
                                    <span className="text-black">Children</span>
                                    <div className="header_optionCounter">
                                        <button
                                            disabled={options.children <= 0}
                                            onClick={() =>
                                                handleOption('children', '-')
                                            }
                                            className="header_optionBtn"
                                        >
                                            -
                                        </button>
                                        <span>{options.children}</span>
                                        <button
                                            onClick={() =>
                                                handleOption('children', '+')
                                            }
                                            className="header_optionBtn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="header_optionItem">
                                    <span className="text-black">Room</span>
                                    <div className="header_optionCounter">
                                        <button
                                            disabled={options.room <= 1}
                                            onClick={() =>
                                                handleOption('room', '-')
                                            }
                                            className="header_optionBtn "
                                        >
                                            -
                                        </button>
                                        <span>{options.room}</span>
                                        <button
                                            onClick={() =>
                                                handleOption('room', '+')
                                            }
                                            className="header_optionBtn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
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
