import React, { useState } from 'react';

export const BookingForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        servicio: 'Corte Clásico / Fade',
        fecha: '',
    });

    //  AQUÍ VA EL WHATSAPP DE LA BARBERÍA
    // Ejemplo: 809-123-4567 → 18091234567
    const NUMERO_WHATSAPP = '18296976345';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.nombre ||
            !formData.telefono ||
            !formData.servicio ||
            !formData.fecha
        ) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Convertir la fecha para que sea más fácil de leer
        const fechaFormateada = new Date(formData.fecha).toLocaleString(
            'es-DO',
            {
                dateStyle: 'full',
                timeStyle: 'short',
            }
        );

        // Crear el mensaje
        const mensaje =
            `NUEVA CITA - YANKA STYLE\n\n` +
            `Cliente: ${formData.nombre}\n` +
            `Teléfono: ${formData.telefono}\n` +
            `Servicio: ${formData.servicio}\n` +
            `Fecha y Hora: ${fechaFormateada}\n\n` +
            `Gracias por reservar tu cita Preparate para lucir elegante.`;

        // Codificar mensaje
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Crear enlace de WhatsApp
        const urlWhatsApp =
            `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

        // Abrir WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <section id="citas" className="booking-section">
            <h2>Reserva tu Cita</h2>

            <form className="booking-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="nombre">
                        Nombre Completo
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                nombre: e.target.value,
                            })
                        }
                        placeholder="Ej. Juan Pérez"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">
                        Teléfono
                    </label>

                    <input
                        type="tel"
                        id="telefono"
                        required
                        value={formData.telefono}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                telefono: e.target.value,
                            })
                        }
                        placeholder="Ej. 809-000-0000"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="servicio">
                        Servicio
                    </label>

                    <select
                        id="servicio"
                        value={formData.servicio}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                servicio: e.target.value,
                            })
                        }
                    >
                        <option value="Corte Clásico / Fade">
                            Corte Clásico / Fade
                        </option>

                        <option value="Corte & Barba">
                            Corte & Barba
                        </option>

                        <option value="Perfilado de Barba">
                            Perfilado de Barba
                        </option>

                        <option value="Diseño & Cejas">
                            Diseño & Cejas
                        </option>

                        <option value="corte niño">
                            Corte niño
                        </option>

                        <option value="Diseño & lineas">
                            Diseño & lineas
                        </option>

                        <option value="Limpieza Facial">
                            Limpieza Facial
                        </option>

                        <option value="Servicio VIP">
                            Servicio VIP
                        </option>
                        
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="fecha">
                        Fecha y Hora
                    </label>

                    <input
                        type="datetime-local"
                        id="fecha"
                        required
                        value={formData.fecha}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                fecha: e.target.value,
                            })
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                >
                    Confirmar Reserva
                </button>

            </form>
        </section>
    );
};