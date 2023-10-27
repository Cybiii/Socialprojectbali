import React, { useState } from 'react';

export default function AboutUs() {
    const [section, setSection] = useState('about');

    const renderSection = () => {
        switch(section) {
            case 'mission':
                return (
                    <>
                        <img src="images/Mission_Image.png" alt="Mission Image" className="w-1/3 rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl font-bold text-violet-950">OUR MISSION</h2>
                            <p className="text-lg text-black">
                                Mission content here...
                            </p>
                        </div>
                    </>
                );
            case 'vision':
                return (
                    <>
                        <img src="images/Vision_Image.png" alt="Vision Image" className="w-1/3 rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl font-bold text-violet-950">OUR VISION</h2>
                            <p className="text-lg text-black">
                                Vision content here...
                            </p>
                        </div>
                    </>
                );
            case 'join':
                return (
                    <>
                        <img src="images/JoinUs_Image.png" alt="Join Us Image" className="w-1/3 rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl font-bold text-violet-950">JOIN US</h2>
                            <p className="text-lg text-black">
                                Join us content here...
                            </p>
                        </div>
                    </>
                );
            default:
                return <img src="images/AboutUs_1.png" alt="About Us Image" className="w-1/3 rounded-lg shadow-md"/>;
        }
    };

    return (
        <div className="flex flex-col items-center p-16 space-y-12 bg-white w-full">
            <div className="text-center space-y-4 w-3/4">
                <h1 className="text-5xl font-bold text-violet-950">ABOUT US</h1>
                <p className="text-center text-black text-2xl mx-auto">
                Social Project Bali is a dedicated non-profit organization situated amidst the natural beauty of Bali, Indonesia.
                We're on a mission to foster positive change in key areas, including education, environmental conservation, and social welfare.
                </p>
                <div className="flex space-x-4 justify-center">
                    <button onClick={() => setSection('mission')} className="bg-violet-950 hover:bg-violet-800 text-white text-lg py-2 px-4 rounded">MISSION</button>
                    <button onClick={() => setSection('vision')} className="bg-violet-950 hover:bg-violet-800 text-white text-lg py-2 px-4 rounded">VISION</button>
                    <button onClick={() => setSection('join')} className="bg-violet-950 hover:bg-violet-800 text-white text-lg py-2 px-4 rounded">JOIN US</button>
                </div>
            </div>
            <div className="flex space-x-8 w-3/4">
                {renderSection()}
            </div>
        </div>
    );
}
