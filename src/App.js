import "./App.css";
import { lazy, Suspense } from "react";
import "@material/react-linear-progress/dist/linear-progress.css";
import LinearProgress from "@material/react-linear-progress";

const LazyComponent = lazy(() => import("./components/mainRouter"));

function App() {
  return (
    <Suspense
      fallback={<LinearProgress buffer={0.9} thickness={1} progress={0.8} />}
    >
      <LazyComponent />
    </Suspense>
  );
}

export default App;
