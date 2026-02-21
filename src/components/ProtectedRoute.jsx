import { Navigate } from "react-router-dom";
import { useContextGlobal } from "../context/Context";

export default function ProtectedRoute({ children }) {
  const { user } = useContextGlobal();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
