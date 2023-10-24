import HomeBannerSection from "./HomeBannerSection";
import FooterMenu from "../../components/layout/FooterMenu";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home page-content">
        <HomeBannerSection />
      </div>
      <FooterMenu />
    </>
  );
}

export default Home;
