import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-myIndigo min-h-screen px-6 py-3 flex flex-col gap-16 md:py-10 md: px-13 md: justify-center lg:px-9 lg:py-9 xl:px-19 py-13">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
