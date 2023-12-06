// Inicio.js
import React from 'react';
import './Inicio.css'; // Asegúrate de tener tus estilos CSS en el mismo directorio que este componente

const Inicio = () => {
  return (
    <div className="Inicio">
      <header>
        <h1>SERVICAMPO SA.</h1>
      </header>

      <nav>
        <a href="Quienessomos.html"><img src="casa.png" alt="Quienes Somos" /> ¿Quiénes Somos?</a>
        <a href="medicamentos.html"><img src="C:\Users\Alexander Suarez\Downloads\EVIDENCIASENA\Evidencia-GA7-220501102-AA1-EV01/servicampo/src/imagenes.botiquin.png" alt="Medicamentos" /> Medicamentos</a>
        <a href="productos.html"><img src="productos.png" alt="Productos" /> Productos</a>
        <a href="accesorios.html"><img src="mascotas.png" alt="Accesorios" /> Accesorios</a>
        <a href="asesorias.html"><img src="pesos.png" alt="Ventas" /> Ventas</a>
      </nav>

      <section>
        <h2 id="quienes-somos">Especialistas en Avicultura</h2>
        <p>Distribuidor de drogas veterinarias.</p>

        {/* Agrega tu imagen aquí */}
        <img src="inicio.jpg" alt="Nuestra Empresa" />
      </section>

      <aside>
        {/* Barra lateral con buscador y redes sociales */}
        <form action="#" method="get">
          <label htmlFor="search">Buscar:</label>
          <input type="text" id="search" name="search" />
          <input type="submit" value="Buscar" />
        </form>
      </aside>

      <footer>
        {/* Información de contacto a la izquierda */}
        <div className="footer-left">
          <h3>Contacto</h3>
          <p>Dirección: [Tu dirección]</p>
          <p>Email: [Tu email]</p>
          <p>Teléfono: [Tu teléfono]</p>
        </div>

        {/* Iconos de redes sociales a la derecha */}
        <div className="footer-right">
          <h3>Encuéntranos en:</h3>
          <img src="facebook.png" alt="Facebook" />
          <img src="whatsapp.png" alt="Twitter" />
          <img src="instagram.png" alt="Instagram" />
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
