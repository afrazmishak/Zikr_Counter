import './App.css'

function WelcomeBanner() {
  return (
    <div className="WelcomeBannerContainer">
      <input type="image" src="./src/assets/images/Assalamu Alaikum Banner.png" alt="Assalamu Alaikum Banner" />
    </div>
  )
}

function MenuBar() {
  return (
    <>
      <ul className="HomeMenuBar">
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Learn Islam</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
      </ul>
    </>
  )
}

function AboutIslam() {
  return (
    <>
      <section className="AboutIslam">
        <div className="AboutIslamContainer">
          <div className="LeftSideAboutIslamContainer">
            <img src="./src/assets/images/WhatIsIslam.jpg" alt="" className="AboutIslamContainerImages" />
          </div>

          <div className="RightSideAboutIslamContainer">
            <h1>🌿 What Is Islam? </h1>
            <p>Islam is a way of life that teaches peace, kindness, and purpose.</p>
            <p>It guides a person to worship only one God, Allah, and to live with honesty, patience, and good manners.</p>
            <p>Islam is not just a religion you practice in the mosque — it is something you carry in your heart and show through your actions.</p>
            <p>It teaches us how to speak, how to treat others, how to control our anger, how to stay humble, and how to find peace within ourselves.</p>
            <p>At its core, Islam means:</p>
            <ul>
              <li>Peace</li>
              <li>Submission to Allah</li>
              <li>Living with purpose</li>
            </ul>
            <p>Islam invites everyone to learn, think, ask questions, and grow.</p>
          </div>
        </div>
      </section>
    </>
  )
}

function Astagfirullah() {
  return (
    <button className="button-counter">
      <p className="line-one-arabic">أستغفر الله</p>
      <span className="line-one-english">"I ask God for forgiveness"</span>
    </button>
  )
}

function Count() {
  return (
    <p>Count</p>
  )
}

function App() {
  return (
    <>
      <WelcomeBanner />
      <MenuBar />
      <AboutIslam />
    </>
  )
}

export default App
