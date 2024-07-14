import React, { useEffect, useState, useCallback } from 'react';
import { IoClose } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState("");
    const [modal, setModal] = useState(false);
    const [imageCount, setImageCount] = useState(13); // Default to 13 images

    // Arreglo de números del 20 al 32
    const numbers = Array.from({ length: imageCount }, (_, i) => i + 20);

    const getData = useCallback(async () => {
        try {
            const api = await fetch(`https://picsum.photos/v2/list?limit=100`);
            const images = await api.json();

            // Obtener las imágenes correspondientes a los números seleccionados
            const selectedImages = numbers.map(num => images[num]);

            setData(selectedImages);
        } catch (error) {
            console.log(error);
        }
    }, [numbers]);

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageCount]);

    // Generar una clase de tamaño aleatoria para cada imagen
    const getRandomSizeClass = () => {
        const sizes = ['h-48', 'h-64', 'h-80'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const handleImageCountChange = (e) => {
        setImageCount(Number(e.target.value));
    };

    const handleModalSubmit = () => {
        setModal(false);
        getData();
    };

    return (
        <div className='w-full h-full bg-slate-900 flex flex-col items-center py-2 overflow-hidden relative mt-16' >
            <div className="flex items-center mb-4" id='gallery-section'>
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
                            className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                            onClick={handleModalSubmit}
                        >
                            Confirmar
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-1 rounded mr-2"
                            onClick={() => setModal(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </div>
            <div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-2 w-11/12 box-border">
                {data.length > 0 ? data.map((item) => (
                    <LazyLoadImage
                        key={item.id}
                        src={item.download_url}
                        onClick={(e) => {
                            setPopupData(e.target.src);
                            setPopup(true);
                        }}
                        alt="gallery"
                        effect="blur"
                        className={`w-full mb-2 rounded-xl hover:scale-110 shadow-2xl hover:shadow-slate-900 transition ${getRandomSizeClass()}`}
                    />
                )) : "No images found"}
            </div>

            {popup && (
                <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-900 rounded-md flex justify-center items-center z-40 transition-all duration-300 ease-in-out opacity-100">
                    <IoClose
                        className="w-16 h-16 text-white absolute right-0 top-0 z-50 cursor-pointer"
                        onClick={() => setPopup(false)}
                    />
                    <img src={popupData} className="w-full sm:w-5/6 md:w-1/2" alt="popup" />
                </div>
            )}
        </div>
    );
};

export default Gallery;