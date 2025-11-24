import './WelcomeBanner.css'; 

export function WelcomeBanner() {
  return (
    <div className="WelcomeBannerContainer" id="WelcomeBannerContainer">
      <input
        type="image"
        src="./src/assets/images/Assalamu Alaikum Banner.png"
        alt="Assalamu Alaikum Banner"
      />
    </div>
  );
}

export default WelcomeBanner;