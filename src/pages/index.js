import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", fecha: "", cantidad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("ticket-api-production-33bb.up.railway.app/comprar", form);
      router.push(`/confirmacion?ticketId=${res.data.ticketId}`);
    } catch (error) {
      setMensaje("Error en la compra. Intenta de nuevo.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h1>PANACA</h1>
      <button onClick={() => router.push("/comprar")} style={styles.button}>Compra Aquí</button>
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
