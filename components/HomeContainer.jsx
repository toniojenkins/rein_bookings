import React from 'react';
import CustomerProp from './CustomerProp';
import Featured from './Featured';
import PropertyList from './PropertyList';

const HomeContainer = () => {
    return (
        <div className="mt-[50px] flex flex-col items-center gap-[30px]">
            <Featured />
            <h1 className="w-[1024px] text-[20px]">Browse by property type</h1>
            <PropertyList />
            <h1>Home guests love</h1>
            <CustomerProp />
        </div>
    );
};

export default HomeContainer;
