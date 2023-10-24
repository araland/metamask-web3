import { useRoutes } from "react-router-dom";

import { Buffer } from "buffer";
import { Layout } from "antd";

import HeaderMenu from "./components/layout/HeaderMenu";

import routes from "./router";

import "./App.scss";

const styles = {
  layout: {
    width: "100%",
    minHeight: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif"
  }
} as const;

function App() {
  const content = useRoutes(routes);

  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <Layout style={styles.layout}>
      <HeaderMenu />
      {content}
    </Layout>
  );
}

export default App;
