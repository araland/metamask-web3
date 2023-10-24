import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function SuspenseLoader() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        flex: "1 0 auto",
        backgroundColor: "#080a30"
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
}

export default SuspenseLoader;
