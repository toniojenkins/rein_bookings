import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const HotelPage = () => {
    const router = useRouter();
    const { destination, adults, children, room } = router.query;
    const [openDate, setOpenDate] = useState(false);

    const [options, setOptions] = useState({
        adults: adults,
        children: children,
        room: room,
    });

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    return (
        <div className="">
            <div className="flex justify-center mt-[20px]">
                <div className="w-[100%] max-w-[1024px] flex gap-[20px]">
                    <div className="flex-1 bg-[#febb02] p-[10px] rounded-[10px] sticky">
                        <h1 className="text-[20px] text-[#555] mb-[10px]">
                            Search
                        </h1>
                        <div className="list-item list-none">
                            <label className="">Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="list-item list-none">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(
                                    date[0].startDate,
                                    'MM/dd/yyyy'
                                )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                            </span>
                            {openDate && (
                                <DateRangePicker
                                    editableDateInputs={true}
                                    onChange={(item) =>
                                        setDate([item.selection])
                                    }
                                    moveRangeOnFirstSelection={false}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="list-item list-none">
                            <label className="">Options </label>
                            <div className="list-option">
                                <div className="list-optionItem">
                                    <span className="list-optionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="text"
                                        className="list-optionInput"
                                    />
                                </div>
                                <div className="list-optionItem">
                                    <span className="list-optionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="text"
                                        className="list-optionInput"
                                    />
                                </div>
                                <div className="list-optionItem">
                                    <span className="list-optionText">
                                        Adult
                                    </span>
                                    <input
                                        min={1}
                                        placeholder={adults}
                                        type="text"
                                        className="list-optionInput"
                                    />
                                </div>
                                <div className="list-optionItem">
                                    <span className="list-optionText">
                                        Children
                                    </span>
                                    <input
                                        min={0}
                                        placeholder={children}
                                        type="text"
                                        className="list-optionInput"
                                    />
                                </div>
                                <div className="list-optionItem">
                                    <span className="list-optionText">
                                        Room
                                    </span>
                                    <input
                                        min={1}
                                        placeholder={room}
                                        type="text"
                                        className="list-optionInput"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="p-[10px] bg-[#0071c2] text-white border-none w-[100%] font-[500] cursor-pointer">
                            Search
                        </button>
                    </div>
                    <div className="flex-3"></div>
                </div>
            </div>
        </div>
    );
};

export default HotelPage;
