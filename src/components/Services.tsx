interface ServiceItem {
id: number;
title: string;
description: string;
price: string;
}

const servicesData: ServiceItem[] = [
{ id: 1, title: 'Corte Clásico / Fade', description: 'Asesoría de imagen, perfilado e hidratación.', price: '$15.00' },
{ id: 2, title: 'Corte & Barba', description: 'Servicio completo con toalla caliente y aceites.', price: '$22.00' },
{ id: 3, title: 'Perfilado de Barba', description: 'Delineado con navaja tradicional.', price: '$10.00' },
{ id: 4, title: 'Diseño & Cejas', description: 'Líneas personalizadas y acabado limpio.', price: '$8.00' },
];

export const Services = () => {
return (
    <section id="servicios" className="services-section">
    <h2>Nuestros Servicios</h2>
    <div className="services-grid">
        {servicesData.map((service) => (
        <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
            <button className="btn-secondary">Seleccionar</button>
        </div>
        ))}
    </div>
    </section>
 );
};