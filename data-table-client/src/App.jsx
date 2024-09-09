import {AppContainer} from "./ui-styles/container-style.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PriceList} from "./components/price-list.jsx";
import {Provider} from "./providers/provider.jsx";
import React from "react";

export const App = ()=>  {

  return (
     <AppContainer>
         <Provider>
             <BrowserRouter>
                 <Routes>
                     <Route path={"/"} element={<div><PriceList/></div>}/>
                 </Routes>
             </BrowserRouter>
         </Provider>
     </AppContainer>
  )
}

