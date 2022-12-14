import Image from 'next/image';

const SearchItem = () => {
    return (
        <div className="border-[1px] border-solid border-[lightgray] p-[10px] rounded-[5px] flex justify-between gap-[20px] mb-[20px]">
            <Image
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="w-[200px] h-[200px] object-cover"
                height={200}
                width={200}
            />
            <div className="flex flex-col gap-[10px] flex-2">
                <h1 className="text-[20px] text-[#0071c2]">
                    Tower Street Apartments
                </h1>
                <span className="text-xs">500m from center</span>
                <span className="text-xs bg-[#008009] text-white w-[max-content] p-[3px] rounded-[5px]">
                    Free airport taxi
                </span>
                <span className="text-xs font-bold">
                    Studio Apartment with Air conditioning
                </span>
                <span className="text-xs">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="text-xs text-[#008009] font-bold">
                    Free cancellation{' '}
                </span>
                <span className="text-xs text-[#008009]">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                    <span className="font-[500]">Excellent</span>
                    <button className="bg-[#003580] text-white p-[5px] font-bold border-none">
                        8.9
                    </button>
                </div>
                <div className="items-center flex flex-col gap-[5px]">
                    <span className="text-[24px]">$112</span>
                    <span className="text-xs text-[gray]">
                        Includes taxes and fees
                    </span>
                    <button className="bg-[#0071c2] text-white font-bold py-[10px] px-[5px] border-none cursor-pointer rounded-[5px]">
                        See availability
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
