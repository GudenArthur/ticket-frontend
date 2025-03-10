import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "100px", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h1 style={styles.title}>PANACA</h1>
      <button onClick={() => router.push("/comprar")} style={styles.button}>Compra Aquí</button>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#333", // Texto oscuro
    marginBottom: "20px",
  },
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
