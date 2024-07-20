import Header from "../src/components/header.jsx"
import Carousels from "./components/Carousels.jsx"
import WelcomeSection from "./components/WelcomeBoySection.jsx"
import VideoSection from "./components/VideoSection.jsx"
import ServiceSection from "./components/ServiceSection.jsx"
import TeamCardSection from "./components/TeamCard.jsx"
import BlogCardSection from "./components/BlogSectionCard.jsx"




function App(){
    return(
        <>
            <div className="page-wrapper">
                     <Header/>
                    <Carousels/>
                     <WelcomeSection/>
                     <VideoSection/>
                     <ServiceSection/>
                     <TeamCardSection/>
                     <BlogCardSection/>
         

                            
            </div>
        </>
    )
}

export default App