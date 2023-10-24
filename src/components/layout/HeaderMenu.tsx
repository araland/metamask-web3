import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import pepe_logo from "../../assets/images/logo.webp";
import ConnectAccount from "../account/ConnectAccount";
import ChainSelector from "../ChainSelector";
import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";

const { Header } = Layout;

const styles = {
  headerRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "600"
  }
} as const;

function HeaderMenu() {
  const navigate = useNavigate();
  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 648;

  return (
    <Header className="header-menu">
      <div className="container">
        {isMobile ? (
          <img src={pepe_logo} alt="logo" width="150px" onClick={() => navigate("/home")} />
        ) : (
          <img src={pepe_logo} alt="logo" width="250px" onClick={() => navigate("/home")} />
        )}

        <div style={styles.headerRight}>
          <ChainSelector />
          <ConnectAccount />
        </div>
      </div>
    </Header>
  );
}

export default HeaderMenu;
