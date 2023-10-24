import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center p-8 space-y-8">
            
            <div className="flex items-center space-x-8">
                <img src="path_to_mission_image.jpg" alt="Mission Image" className="w-1/3 rounded-lg shadow-md"/>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">OUR MISSION</h1>
                    <p className="text-base text-gray-700">
                        Our mission is clear and resolute: to create a symbiotic relationship between different sectors, ensuring that all benefit. We aim to facilitate growth and understanding, promoting unity and progress in all we do.
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-8">
                <img src="path_to_vision_image.jpg" alt="Vision Image" className="w-1/3 rounded-lg shadow-md"/>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">OUR VISION</h1>
                    <p className="text-base text-gray-700">
                        At Company Name, we envision a future where everyone works together harmoniously, understanding the value of each individual's contribution. Our efforts are dedicated to promoting a collective spirit, ensuring that all reap the benefits of shared growth.
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-semibold">JOIN US</h2>
                <p className="text-base text-gray-700">
                    Embark on this captivating journey with us. By working together, we can craft a brighter, more prosperous future for all. Join us in making this vision a reality.
                </p>
            </div>
        </div>
    );
}
