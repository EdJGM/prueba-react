import React, { useEffect, useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [imageCount, setImageCount] = useState(13); // Default to 13 images
    const [modal, setModal] = useState(false);

    // Arreglo de números del 20 al 32
    const numbers = Array.from({ length: imageCount }, (_, i) => i + 20);

    const getData = useCallback(async () => {
        try {
            const api = await fetch(`https://picsum.photos/v2/list?limit=100`);
            const images = await api.json();

            // Obtener las imágenes correspondientes a los números seleccionados
            const selectedImages = numbers.map(num => images[num]).filter(image => image !== undefined);

            setData(selectedImages);
        } catch (error) {
            console.log(error);
        }
    }, [numbers]);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleImageCountChange = (e) => {
        setImageCount(Number(e.target.value));
    };

    return (
        <div className='w-full h-full bg-slate-900 flex flex-col items-center py-2 overflow-hidden relative mt-16' id='gallery-section'>
            <div className="flex items-center mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                    onClick={() => setModal(true)}
                >
                    Indica el número de imágenes
                </button>
                {modal && (
                    <div className="bg-white px-4 py-1 rounded shadow-lg flex items-center mr-4">
                        <h2 className="text-lg mr-4">Establecer número de imágenes</h2>
                        <input
                            type="number"
                            value={imageCount}
                            onChange={handleImageCountChange}
                            className="border px-4 py-1 mr-4"
                        />
                        <button
                            className="bg-red-500 text-white px-4 py-1 rounded mr-2"
                            onClick={() => setModal(false)}
                        >
                            Salir
                        </button>
                    </div>
                )}
            </div>
            <div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-2 w-11/12 box-border">
                {data.length > 0 ? data.map((item) => (
                    <LazyLoadImage
                        key={item.id}
                        src={item.download_url}
                        alt="gallery"
                        effect="blur"
                        className="w-full h-64 mb-2 rounded-xl shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                )) : "No images found"}
            </div>
        </div>
    );
};

export default Gallery;