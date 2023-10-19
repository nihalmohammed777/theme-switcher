import { useEffect, useState } from "react";
import { Themeprovider } from "./context/theme";
import Card from "./components/Card"
import Themebtn from "./components/ThemeBtn"

function App() {

  let [thememode, setthememode] = useState("light")

  const darktheme = () => {
    setthememode("light")
  }

   const lighttheme = () => {
     setthememode("dark");
   };

  useEffect(() =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector("html").classList.add(thememode);
   },[thememode])
  
  return (
    <Themeprovider value={{thememode,darktheme,lighttheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </Themeprovider>
  );
}

export default App
