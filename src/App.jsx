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
                     <div className="container-fluid carousel-section mx-0 p-0">
                        <Carousels/>
                     </div>
                     <WelcomeSection/>
                     <VideoSection/>
                     <ServiceSection/>
         

                            
            </div>
        </>
    )
}

export default App