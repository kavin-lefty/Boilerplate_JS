import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button
        className="bg-blue-600 text-white p-2"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}
