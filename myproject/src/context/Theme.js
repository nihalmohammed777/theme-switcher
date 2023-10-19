import react, { useContext } from "react"

export const ThemeContext = react.createContext({
    thememode: "light",
    lighttheme: () => {},
    darktheme: () => {},
})


export const Themeprovider = ThemeContext.Provider

export const usetheme = () => {
    return useContext(ThemeContext)
}