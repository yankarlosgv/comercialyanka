export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>YANKA-STYLE</h1>
            </div>

            <nav className="nav-links">
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#citas">Citas</a>
                <a href="#galeria">Galeria</a>


                <a
                    href="https://www.instagram.com/yanka_stylee/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <a
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contacto
                </a>
            </nav>
        </header>
    );
};