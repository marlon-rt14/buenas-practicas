import { useLocation } from "react-router";

export default function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert">
      <p>Algo salió mal:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar de nuevo</button>
    </div>
  );
}

export function ErrorFallbackRouter({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  const location = useLocation();

  return (
    <div role="alert">
      <p>Algo salió mal en el router:</p>
      <p>{location.pathname}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar de nuevo</button>
    </div>
  );
}
