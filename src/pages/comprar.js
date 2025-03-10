import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Comprar() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", fecha: "", cantidad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://TU-API-RAILWAY.app/comprar", form);
      router.push(`/confirmacion?ticketId=${res.data.ticketId}`);
    } catch (error) {
      setMensaje("Error en la compra. Intenta de nuevo.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h1>Ingrese sus Datos</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="fecha" onChange={handleChange} required />
        <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} required />
        <button type="submit" style={styles.button}>Comprar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};
