import './App.css'

function WelcomeBanner() {
  return (
    <div className="WelcomeBannerContainer" id="WelcomeBannerContainer">
      <input type="image" src="./src/assets/images/Assalamu Alaikum Banner.png" alt="Assalamu Alaikum Banner" />
    </div>
  )
}

function MenuBar() {
  return (
    <>
      <ul className="HomeMenuBar">
        <li className="HomeMenuBarListItems"><a href="#WelcomeBannerContainer" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#AboutIslam" className="HomeMenuBarListItemsARef">Learn Islam</a></li>
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
      <section className="AboutIslam" id="AboutIslam">
        <div className="AboutIslamContainer">
          <div className="LeftSideAboutIslamContainer">
            <img src="./src/assets/images/WhatIsIslam.jpg" alt="" className="AboutIslamContainerImages" />
          </div>

          <div className="RightSideAboutIslamContainer">
            <h1 className="Heading1">What Is Islam? </h1>
            <p className="Paragraph Paragraph1">Islam is a complete way of life that guides a person in every moment, from how to speak, how to behave, how to treat others, and how to connect with Allah, the One who created everything.</p>
            <p className="Paragraph Paragraph2">At its root, the word “Islam” means:</p>
            <ul>
              <li>Peace</li>
              <li>Submission to Allah</li>
              <li>Living with purpose</li>
            </ul>
            <p className="Paragraph Paragraph3">This means true peace comes when a person submits their heart, mind, and life to the One who knows them better than they know themselves.</p>
            <br />
            <h1 className="Heading2">Islam Teaches One Simple Message</h1>
            <p className="Paragraph Paragraph4">Islam teaches that there is only one God, Allah, who has no partners, no children, no helpers, and no weaknesses.</p>
            <p className="Paragraph Paragraph5">He is the Creator, the Protector, and the One who gives life and takes life.</p>
            <p className="Paragraph Paragraph6">And Muhammad ﷺ is His final messenger, sent to teach humanity how to live with purpose, mercy, and justice.</p>
          </div>
        </div>

        <div className="AboutIslamContainerTwo">
          <div className="LeftSideContainerTwo">
            
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
