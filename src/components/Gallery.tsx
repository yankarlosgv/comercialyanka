import corte1 from "../assets/corte1.jpg";
import corte2 from "../assets/corte2.jpg";
import corte3 from "../assets/corte3.jpg";

export const Gallery = () => {
const photos = [
    {
    src: corte1,
    alt: "Corte de cabello estilo fade",
    },
    {
    src: corte2,
    alt: "Corte moderno de barbería",
    },
    {
    src: corte3,
    alt: "Corte clásico de barbería",
    },
];

return (
    <section id="galeria" className="gallery-section">
    <h2>GALERÍA</h2>

    <p className="gallery-description">
        Conoce algunos de nuestros mejores trabajos y 
        descubre el estilo perfecto para tu próximo corte.
    </p>

    <div className="gallery-grid">
        {photos.map((photo, index) => (
        <div className="gallery-item" key={index}>
            <img src={photo.src} alt={photo.alt} />
        </div>
        ))}
    </div>
    </section>
);
};