import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { BookingForm } from './components/BookingFrom';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <section id="inicio" className="hero-section">
          <h2>CADA CORTE REFLEJA TU PERSONALIDAD.</h2>
          <p>
            Bienvenido a mi barbería. Aquí podrás conocer algunos de mis
            mejores trabajos, realizados con dedicación, precisión y pasión por el estilo.
          </p>
          <a href="#citas" className="btn-primary">Ver Citas</a>
        </section>

        <Services />
        <BookingForm />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} YANKA-STYLE. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
