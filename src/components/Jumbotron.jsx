import { useEffect, useState } from "react"

export default function Jumbotron() {

    const imgs = [
        {
            src: "./jumboHomePage/ottica_oref1.jpg",
            title: "Ottica e Oreficeria",
            description: "UNA BRILLANTE ATTIVITÀ DI FAMIGLIA"
        },
        {
            src: "./jumboHomePage/ottica_oref2.jpg",
            title: "Ottica e Oreficeria",
            description: "CHE TI SEGUE PASSO A PASSO"
        },
        {
            src: "./jumboHomePage/ottica_oref3.jpg",
            title: "Ottica e Oreficeria",
            description: "QUALSIASI SIANO LE TUE ESIGENZE"
        },
    ]

    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(prev => (prev + 1) % imgs.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [imgs.length])

    return (
        <>
            <div className="jumbotron-slider">
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentImg * 100}%)` }}
                >
                    {imgs.map((img, i) => (
                        <div className="slide" key={i}>
                            <img src={img.src} alt={`slide-${i}`} />
                            <div className="slide-description">
                                <h2>{img.title}</h2>
                                <p>{img.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots">
                {imgs.map((_, i) => {
                    return (<button
                        key={i} className={`dot ${i === currentImg ? "active-dot" : ""}`}
                        onClick={() => setCurrentImg(i)}
                    ></button>
                    )
                })}
            </div>
        </>
    )
}