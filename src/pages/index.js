import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({ nombre: "", email: "", fecha: "", cantidad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://TU-API-RAILWAY.app/comprar", form);
      setMensaje(`Compra exitosa. Ticket ID: ${res.data.ticketId}`);
    } catch (error) {
      setMensaje("Error en la compra");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Compra de Tickets</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="fecha" onChange={handleChange} required />
        <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} required />
        <button type="submit">Comprar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}
