import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Confirmacion() {
  const router = useRouter();
  const { ticketId } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ticketId) setLoading(false);
  }, [ticketId]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h1>Compra Exitosa</h1>
      {loading ? (
        <p>Cargando información del ticket...</p>
      ) : (
        <p>Tu Ticket ID: <strong>{ticketId}</strong></p>
      )}
      <p>Recibirás un correo con la confirmación.</p>
      <button onClick={() => router.push("/")} style={styles.button}>Volver al Inicio</button>
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
