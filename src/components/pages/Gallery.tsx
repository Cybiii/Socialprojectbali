const Gallery = () => {
    const images = [
        { src: 'images/Slider_1.png', alt: 'Image 1' , description: 'Community Service'},
        { src: 'images/Slider_2.png', alt: 'Image 2' , description: 'Humanitarian work'},
        { src: 'images/Slider_3.png', alt: 'Image 2' , description: 'Social Service'},
        { src: 'images/Slider_4.png', alt: 'Image 2' , description: 'Engagement with the community'},
        { src: 'images/Slider_5.png', alt: 'Image 2' , description: 'Volunteerism'},
        { src: 'images/History_2.jpg', alt: 'Image 2' , description: 'Volunteer work'},
        { src: 'images/History_1.jpg', alt: 'Image 2' , description: 'Aiding people in need'},
        { src: 'images/Volunteer_Home.png', alt: 'Image 2' , description: 'Outreach'},
        
    ];

    return (
        <div className="bg-indigo-900 p-6 min-h-screen bg-opacity-90">
          <h1 className="text-6xl text-center text-white font-bold py-3 mt-6 mb-6">Featured Gallery</h1>
            <div className="max-w-7xl mx-auto text-center s pb-11">
                <div className="grid grid-cols-4 grid-rows-2 gap-6 mt-8 h-[calc(100vh-3rem)]">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-xl">{image.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;