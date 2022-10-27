import Image from 'next/image';
import React from 'react';
const CustomerProp = () => {
    return (
        <div className="w-[100%] max-w-[1024px] flex justify-between gap-[20px]">
            <div className="fp-Item">
                <Image
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fp-Img"
                    height={150}
                    width={150}
                />
                <span className="fp-Name">Aparthotel Stare Miasto</span>
                <span className="fp-City">Madrid</span>
                <span className="fp-Price">Starting from $120</span>
                <div className="fp-Rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fp-Item">
                <Image
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fp-Img"
                    height={150}
                    width={150}
                />
                <span className="fp-Name">Comfort Suites Airport</span>
                <span className="fp-City">Austin</span>
                <span className="fp-Price">Starting from $140</span>
                <div className="fp-Rating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fp-Item">
                <Image
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fp-Img"
                    height={150}
                    width={150}
                />
                <span className="fp-Name">Four Seasons Hotel</span>
                <span className="fp-City">Lisbon</span>
                <span className="fp-Price">Starting from $99</span>
                <div className="fp-Rating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fp-Item">
                <Image
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="fp-Img"
                    height={150}
                    width={150}
                />
                <span className="fp-Name">Hilton Garden Inn</span>
                <span className="fp-City">Berlin</span>
                <span className="fp-Price">Starting from $105</span>
                <div className="fp-Rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerProp;
