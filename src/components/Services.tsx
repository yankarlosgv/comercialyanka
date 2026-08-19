interface ServiceItem {
id: number;
title: string;
description: string;
price: string;
}

const servicesData: ServiceItem[] = [
{ id: 1, title: 'Corte Clásico / Fade', description: 'Asesoría de imagen, perfilado e hidratación.', price: '$400.00' },
{ id: 2, title: 'Corte & Barba', description: 'Servicio completo con toalla caliente y aceites.', price: '$450.00' },
{ id: 3, title: 'Perfilado de Barba', description: 'Delineado con navaja tradicional.', price: '$350.00' },
{ id: 4, title: 'Diseño & Cejas', description: 'Líneas personalizadas y acabado limpio.', price: '$200.00' },
{ id: 5, title: 'Corte Niño ', description: 'Cortes modernos y acabado limpio, pensados especialmente para niños.', price: '$350.00' },
{ id: 6, title: 'Diseño & lineas', description: 'Agrega un toque unico y creativo a tu corte.', price: '$400.00' },
{ id: 7, title: 'Limpieza Facial', description: 'Elimina impurezas y deja tu piel suave.', price: '$300.00' },
{ id: 8, title: 'Servicio VIP', description: 'Una experiencia de lujo para clientes exclusivos.', price: '$700.00' },
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