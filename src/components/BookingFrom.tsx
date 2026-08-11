import React, { useState } from 'react';

export const BookingForm = () => {
const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Corte Clásico / Fade',
    fecha: '',
});

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.nombre}! Tu cita para ${formData.servicio} ha sido registrada.`);
};

return (
    <section id="citas" className="booking-section">
    <h2>Reserva tu Cita</h2>
    <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="nombre">Nombre Completo</label>
        <input
            type="text"
            id="nombre"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder="Ej. Juan Pérez"
/>
        </div>

        <div className="form-group">
<label htmlFor="telefono">Teléfono</label>
        <input
            type="tel"
            id="telefono"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="Ej. 809-000-0000"
        />
        </div>

        <div className="form-group">
    <label htmlFor="servicio">Servicio</label>
        <select
            id="servicio"
            value={formData.servicio}
            onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
        >
            <option value="Corte Clásico / Fade">Corte Clásico / Fade</option>
            <option value="Corte & Barba">Corte & Barba</option>
            <option value="Perfilado de Barba">Perfilado de Barba</option>
            <option value="Diseño & Cejas">Diseño & Cejas</option>
        </select>
        </div>

        <div className="form-group">
        <label htmlFor="fecha">Fecha y Hora</label>
        <input
            type="datetime-local"
            id="fecha"
            required
            value={formData.fecha}
            onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
        />
        </div>

        <button type="submit" className="btn-primary">Confirmar Reserva</button>
    </form>
    </section>
);
};