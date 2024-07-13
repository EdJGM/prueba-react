import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-gray-800 relative z-10 overflow-hidden w-full">
            {/* Primera figura degradada */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            {/* Contenido del footer */}
            <div className="w-full py-4 px-4 flex justify-between relative z-10">
                <p className="text-gray-300 text-sm">
                    &copy; 2024 - Todos los derechos reservados
                </p>
                <ul className="flex">
                    <li className="mr-6">
                        <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt="Facebook" />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link to="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="Twitter" />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link to="https://github.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png" alt="YouTube" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full py-2 px-4 relative z-10">
                <p className="text-gray-300 text-sm">
                    Contacto: gallery@mail.com | Teléfono: 123-456-7890
                </p>
            </div>
            {/* Segunda figura degradada */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}

export default Footer