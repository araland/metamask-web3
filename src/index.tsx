import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { createRoot } from "react-dom/client";
import ToastContainer from "./components/toastContainer";

import App from "./App";
import connectors from "./connectors";

import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Web3ReactProvider connectors={connectors}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Web3ReactProvider>
);
