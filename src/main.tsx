import { createRoot } from "react-dom/client";
import { MainPage } from "./MainPage.tsx";

const rootEl = document.getElementById("root");
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />);
