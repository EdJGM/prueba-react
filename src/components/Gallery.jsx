import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

const Gallery = () => {
    const [data, setData] = useState([])
    const [popup, setPopup] = useState(false)
    const [popupData, setPopupData] = useState("")

    const getData = async (count) => {
        try {
            const api = await fetch(`https://picsum.photos/v2/list?limit=${count}`)
            setData(await api.json())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(12)
    }, [])

    return (
        <div className='w-full h-full bg-slate-900 flex justify-center py-2 overflow-hidden relative'>
            <div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-2 w-11/12 box-border">
                {data.length > 0 ? data.map((item) => (
                    <img
                        key={item.id}
                        src={item.download_url}
                        onClick={(e) => {
                            setPopupData(e.target.src)
                            setPopup(true)
                        }}
                        alt="gallery"
                        className='w-full mb-2 rounded-xl hover:scale-110 shadow-2xl hover:shadow-slate-900 transition'
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
    )
}

export default Gallery
