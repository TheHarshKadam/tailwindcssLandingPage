import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-purple-800 min-h-screen px-6 py-3 flex flex-col gap-16">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
