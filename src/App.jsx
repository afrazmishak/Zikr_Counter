import './App.css'

function WelcomeBanner () {
  return (
    <div className="WelcomeBannerContainer">
      <input type="image" src="./src/assets/Assalamu Alaikum Banner.png" alt="" />
    </div>
  )
}

function MenuBar () {
  return (
    <>
      <ul className="HomeMenuBar">
        <li className="HomeMenuBarListItems">Home</li>
        <li className="HomeMenuBarListItems">Home</li>
        <li className="HomeMenuBarListItems">Home</li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
      </ul>
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
    </>
  )
}

export default App
