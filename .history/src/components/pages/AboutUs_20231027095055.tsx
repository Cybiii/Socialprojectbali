import React, { useState } from 'react';

export default function AboutUs() {
    const [section, setSection] = useState('about');

    const renderSection = () => {
        switch(section) {
            case 'mission':
                return (
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold text-violet-950">OUR MISSION</h2>
                        <p className="text-lg text-black">
                            Mission content here...
                        </p>
                    </div>
                );
            case 'vision':
                return (
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold text-violet-950">OUR VISION</h2>
                        <p className="text-lg text-black">
                            Vision content here...
                        </p>
                    </div>
                );
            case 'join':
                return (
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold text-violet-950">JOIN US</h2>
                        <p className="text-lg text-black">
                            Join us content here...
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center p-16 space-y-12 bg-white w-full">
            <div className="text-center space-y-4 w-3/4">
                <h1 className="text-4xl font-bold text-violet-950">ABOUT US</h1>
                <p className="text-center mx-auto">
                    Lorem ultricies, lorem quis bibendum auctor...
                </p>
                <div className="flex space-x-4">
                    <button onClick={() => setSection('mission')} className="bg-violet-950 text-white text-lg py-2 px-4">MISSION</button>
                    <button onClick={() => setSection('vision')} className="bg-violet-950 text-white text-lg py-2 px-4">VISION</button>
                    <button onClick={() => setSection('join')} className="bg-violet-950 text-white text-lg py-2 px-4">JOIN US</button>
                </div>
            </div>
            <div className="flex space-x-8 w-3/4">
                <img src="images/AboutUs_Image.png" alt="Mountain Image" className="w-1/3 rounded-lg shadow-md"/>
                {renderSection()}
            </div>
        </div>
    );
}
