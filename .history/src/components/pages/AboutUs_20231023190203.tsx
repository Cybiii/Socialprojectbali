import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center p-16 space-y-12 mx-16 bg-gray-800">

            <div className="flex items-center space-x-12">
                <img src="images/AboutUs_1.png" alt="Mission Image" className="w-1/3 rounded-lg shadow-md"/>
                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl font-bold text-white">OUR MISSION</h1>
                    <p className="text-2xl text-white">
                    Our mission is clear and resolute: to promote synergy and collaboration in the realms of Education, Environment, and Social Humanity. We are dedicated to facilitating meaningful partnerships, leveraging collective knowledge, and channeling resources effectively to drive impactful initiatives in these vital areas.
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-12">
                <img src="images/AboutUs_2.png" alt="Vision Image" className="w-1/3 rounded-lg shadow-md"/>
                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl font-bold text-white">OUR VISION</h1>
                    <p className="text-2xl text-white"> 
                      At Social Project Bali, our vision is to create a harmonious and interconnected community, fostering synergy and collaboration among diverse communities and individuals passionate about Education, Environment, and Social Humanity. We believe that by uniting our efforts, we can magnify the power of positive change.
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <h2 className="text-4xl font-semibold text-white">JOIN US</h2>
                <p className="text-2xl text-white">
                    Embark on this captivating journey with us. By working together, we can craft a brighter, more prosperous future for all. Join us in making this vision a reality.
                </p>
            </div>
        </div>
    );
}
