import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center p-16 space-y-12 bg-white">

            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-violet-950">ABOUT US</h1>
                <p className="w-3/4 text-center mx-auto">
                    Lorem ultricies, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-violet-950 text-white py-2 px-4 rounded-full">MISSION</button>
                    <button className="bg-violet-950 text-white py-2 px-4 rounded-full">VISION</button>
                    <button className="bg-violet-950 text-white py-2 px-4 rounded-full">SPONSORS</button>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-4 w-3/4">
                <img src="images/AboutUs_1.png" alt="Mountain Image" className="w-full rounded-lg shadow-md"/>
                <h2 className="text-3xl font-bold violet-950">SED AC URNA SIT AMET LOREM</h2>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque. Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi suscipit neque, sit amet lobortis sem quam sed ipsum.
                </p>
                <p className="text-lg text-gray-700">
                    Fusce maximus, eros ac luctus facilisis, turpis metus accumsan libero, sed tincidunt urna ex vitae turpis. Sed at velit in ex pellentesque vehicula.
                </p>
            </div>

        </div>
    );
}
