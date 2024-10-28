import { useSelector } from "react-redux"
import languageConstants from "../utils/languageContants"

const GPTSearchBar = ()=>{
    const languageSelector = useSelector((store)=>store.languageConfig?.lang)

    return (
        <div className="pt-[10%]  flex justify-center pb-10">
            
            <form className="grid grid-cols-12 w-1/2 justify-center">
            {/* <input type="text" placeholder={languageConstants[languageSelector].gptSearchPlaceHolder} className=" p-4 m-4 bg-white border  border-red-700 text-black col-span-9 rounded-md"/> */}
            <input type="text" placeholder={languageConstants[languageSelector].gptSearchPlaceHolder} className=" p-4 m-4 bg-white border  border-red-700 text-white col-span-9 rounded-md"/>  
            <button className=" bg-netflix_red text-white col-span-3 m-4 p-4 hover:bg-red-600 rounded-md">{languageConstants[languageSelector].search}</button>
       
       
        </form>
        </div>
        
    )
}
export default GPTSearchBar