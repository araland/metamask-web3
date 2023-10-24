import banner_img from "../../assets/images/banner-img.webp";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}

function HomeBannerSection() {
  return (
    <div className="home-banner-section darkblue banner-pattern">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 position-u flex-align">
            <div className="banner-contain">
              <h1 className="banner-heading">
                Web3 <span>Kickstarter</span>
              </h1>
              <p className="banner-des">Metamask connection using react.js and web3.js</p>
              <a className="btn" target="_blank">
                Learn more
              </a>
              <a className="btn second" target="_blank">
                Wallet
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 position-u wow fadeInRight animated">
            <div className="banner-img">
              <img src={banner_img} fetchpriority="high" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBannerSection;
