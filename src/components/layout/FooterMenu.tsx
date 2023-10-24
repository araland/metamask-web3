import { Layout } from "antd";

const { Footer } = Layout;

const styles = {
  footer: {
    position: "relative",
    textAlign: "center",
    width: "100%",
    color: "#999",
    backgroundColor: "#f2f8fe",
    padding: "30px 0",
    boxShadow: "0px 0px 5px 0px rgb(0, 0, 0, 0.2)"
  }
} as const;

function FooterMenu() {
  return (
    <Footer style={styles.footer}>
      <div>Copyright @ 2023 PEPE Sushi Foundation All rights reserved.</div>
    </Footer>
  );
}

export default FooterMenu;
