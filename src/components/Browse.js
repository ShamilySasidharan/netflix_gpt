
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./Secondarycontainer"

const  Browse = ()=>{
// CUSTOMHOOK FOR FETCHING THE API 
useNowPlayingMovies()
    return (
        <div>
         <Header/>
         <div>
         <MainContainer/>
         <SecondaryContainer/>
         </div>
        
        
        </div>
    )
}
export default Browse