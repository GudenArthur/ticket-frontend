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
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
        <input type="date" name="fecha" onChange={handleChange} required style={styles.input} />
        <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>Comprar</button>
      </form>
      <p style={styles.error}>{mensaje}</p>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    color: "#333", // Texto oscuro
    border: "1px solid #999",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  }
};
