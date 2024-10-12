import { Route, Routes } from "react-router-dom"

import { DcPage, HeroesRoutes, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
        
        <Routes>
            <Route path="login" element={<LoginPage />}/>
            <Route path="/*" element={<HeroesRoutes />}/>
            <Route path="/dc" element={<DcPage />}/>
            <Route path="marvel" element={<MarvelPage />}/>
            <Route path="/search" element={<SearchPage />}/>
        </Routes>
    </>
  )
}
