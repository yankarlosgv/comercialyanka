import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingFrom';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <section id="inicio" className="hero-section">
          <h2>CADA CORTE REFLEJA TU PERSONALIDAD.</h2>

          <p>
            Realiza tu cita de forma rápida, fácil y segura. Elige el servicio que deseas,
            selecciona el día y la hora que más te convenga y prepárate para lucir un corte impecable.
          </p>

          <a href="#citas" className="btn-primary">
            VER CITAS
          </a>
        </section>

        <Services />

        <Gallery />

        <BookingForm />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} YANKA-STYLE. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
