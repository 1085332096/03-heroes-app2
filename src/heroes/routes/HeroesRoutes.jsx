import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage, SearchPage } from '../pages';


export const HeroesRoutes = () => {
  return (
   <>
    <Navbar />
      <div className="container">
        <Routes>
           {/* NAVEGA EN MARVEL Y SE REALIZA EL LLAMADO A marvelPage */}
            <Route path="marvel" element={<MarvelPage />}/>
            <Route path="dc" element={<DcPage />}/>

            <Route path="search" element={<SearchPage />}/>
            
            <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
   </>
  )
}
