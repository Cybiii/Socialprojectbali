import React, { useState } from 'react';

export default function AboutUs() {
    const [section, setSection] = useState('about');

    const renderSection = () => {
        switch(section) {
            case 'mission':
                return (
                    <>
                        <img src="images/AboutUs_1.png" alt="Mission Image" className="w-2/5 h-120 overflow-hidden rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-4xl font-bold text-violet-950">OUR MISSION</h2>
                            <p className="text-2xl text-black">
                            At Social Project Bali, our vision is to create a harmonious and interconnected community, fostering synergy and collaboration among diverse communities and individuals passionate about Education, Environment, and Social Humanity.
                            We believe that by uniting our efforts, we can magnify the power of positive change.
                            </p>
                        </div>
                    </>
                );
            case 'vision':
                return (
                    <>
                        <img src="images/AboutUs_2.png" alt="Vision Image" className="w-2/5 h-120 overflow-hidden rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-4xl font-bold text-violet-950">OUR VISION</h2>
                            <p className="text-2xl text-black">
                                Our mission is clear and resolute: to promote synergy and collaboration in the realms of Education, Environment, and Social Humanity. 
                                We are dedicated to facilitating meaningful partnerships, leveraging collective knowledge, and channeling resources effectively to drive impactful initiatives in these vital areas.
                            </p>
                        </div>
                    </>
                );
            case 'join':
                return (
                    <>
                        <img src="images/AboutUs_3.png" alt="Join Us Image" className="w-2/5 h-4/5 overflow-hidden rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-4xl font-bold text-violet-950">JOIN US</h2>
                            <p className="text-2xl text-black">
                            Join us on this inspiring journey as we work together to transform lives, enhance educational opportunities, protect our environment, and contribute to the well-being of our local and global communities.
                            Together, we can create a brighter and more sustainable future.
                            </p>
                        </div>
                    </>
                );
            default:
                return <img src="images/AboutUs_1.png" alt="About Us Image" className="w-1/3 rounded-lg shadow-md"/>;
        }
    };

    return (
        <div className="flex flex-col items-center p-16 space-y-16 bg-white w-full">
            <div className="text-center space-y-8 border-b pb-8 w-3/4">
                <h1 className="text-5xl font-bold text-violet-950">ABOUT US</h1>
                <p className="text-center text-black text-2xl mx-auto">
                    Social Project Bali is a dedicated non-profit organization situated amidst the natural beauty of Bali, Indonesia.
                    We're on a mission to foster positive change in key areas, including education, environmental conservation, and social welfare.
                </p>
                <div className="flex space-x-4 justify-center mt-8">
                    <button onClick={() => setSection('mission')} className="bg-violet-950 hover:bg-violet-800 text-white text-2xl py-3 px-5 rounded">MISSION</button>
                    <button onClick={() => setSection('vision')} className="bg-violet-950 hover:bg-violet-800 text-white text-2xl py-3 px-5 rounded">VISION</button>
                    <button onClick={() => setSection('join')} className="bg-violet-950 hover:bg-violet-800 text-white text-2xl py-3 px-5 rounded">JOIN US</button>
                </div>
            </div>
            <div className="flex space-x-8 w-3/4">
                {renderSection()}
            </div>
        </div>
    );
}
