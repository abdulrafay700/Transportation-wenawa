import Header from "../src/components/header.jsx"
import Carousels from "./components/Carousels.jsx"
import WelcomeSection from "./components/WelcomeBoySection.jsx"
import VideoSection from "./components/VideoSection.jsx"
import ServiceSection from "./components/ServiceSection.jsx"




function App(){
    return(
        <>
            <div className="page-wrapper">
                     <Header/>
                    <Carousels/>
                     <WelcomeSection/>
                     <VideoSection/>
                     <ServiceSection/>
         

                            
            </div>
        </>
    )
}

export default App