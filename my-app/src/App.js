// import "./App.css";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import JuegoProvider from "./componentes/Contexto/JuegoProvider";
import ItemListContainer from "./componentes/itemListConteiner/ItemListContainer";
import Layout from "./componentes/Layout/Layout";
import Tiendita from "./componentes/Paginas/Tiendita";
import MasInfo from "./componentes/Utils/MasInfo";

var listaAccion = [
  {
    id: "callOfDuty",
    img: "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg",
    titulo: "Call of duty",
    descripcion: "un juegito de tiros",
  },
  {
    id: "tekken",
    img: "https://image.api.playstation.com/cdn/UP0700/CUSA05972_00/4yfeeKKfJdD5WzDQsoiM3xrcqPlpDLm7.png",
    titulo: "Tekken",
    descripcion: "un juegito de piñas",
  },
  {
    id: "residentEvil",
    img: "https://media.revistagq.com/photos/5efedc2009f9a6fc5dffb3b4/16:9/w_1280,c_limit/Resident-Evil-4-Remake.jpg",
    titulo: "Resident Evil",
    descripcion: "un juegito de zombies",
  },
];

var listaRpg = [
  {
    id: "eldenRing",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
    titulo: "Elden Ring",
    descripcion: "un juegito GOTY",
  },
  {
    id: "finalFantasy",
    img: "https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d",
    titulo: "Final Fantasy",
    descripcion: "un juegito de sefirots",
  },
  {
    id: "genchinImact",
    img: "https://media.vandal.net/i/1200x630/75962/genshin-impact-202092819311747_1.jpg",
    titulo: "Genshin impact",
    descripcion: "un juegito de waifus",
  },
];

var listaCarrera = [
  {
    id: "needForSpeed",
    img: "https://media.contentapi.ea.com/content/dam/need-for-speed/images/2017/06/nfspgenkeyartrgbhorz-16x9.jpg.adapt.crop191x100.1200w.jpg",
    titulo: "Need for speed",
    descripcion: "un juegito de nitrogeno",
  },
  {
    id: "forza",
    img: "https://store-images.s-microsoft.com/image/apps.65321.14229724971193324.2000000000016103639.34ab69bf-6ea4-4bf1-b7b9-8c1a1659dbfa",
    titulo: "Forza",
    descripcion: "un juegito de chocarse",
  },
  {
    id: "f1",
    img: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/06/news-standardedition-featuredimage-1920.jpg.adapt.crop191x100.1200w.jpg",
    titulo: "f1",
    descripcion: "un juegito de verstappen",
  },
];

var listaDeportes = [
  {
    id: "fifa",
    img: "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop16x9.1023w.png",
    titulo: "fifa",
    descripcion: "un juegito de futbol",
  },
  {
    id: "madden",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1017/OZhuYhL3xJibJZzpwkzGsFyY.png",
    titulo: "Madden",
    descripcion: "un juegito de yankis",
  },
  {
    id: "nba2k22",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQcjCh3Qg8ssmrKGj_jnC1o7hU8ESenabKWXr9iC0mp3Kig9FBOw-k-ooamIxiEf2H4o&usqp=CAU",
    titulo: "nba 2k22",
    descripcion: "un juegito de basquet",
  },
];

function App() {
  return (
    <React.StrictMode>
      <JuegoProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<ItemListContainer />} />
            <Route
              path="/accion"
              element={<Tiendita lista={listaAccion}></Tiendita>}
            ></Route>
            <Route
              path="/accion/:vacaPolaca"
              element={<MasInfo lista={listaAccion} />}
            ></Route>
            <Route
              path="/rpg"
              element={<Tiendita lista={listaRpg}></Tiendita>}
            ></Route>
            <Route
              path="/rpg/:vacaPolaca"
              element={<MasInfo lista={listaRpg}></MasInfo>}
            ></Route>
            <Route
              path="/carreras"
              element={<Tiendita lista={listaCarrera}></Tiendita>}
            ></Route>
            <Route
              path="/carreras/:vacaPolaca"
              element={<MasInfo lista={listaCarrera}></MasInfo>}
            ></Route>
            <Route
              path="/deportes"
              element={<Tiendita lista={listaDeportes}></Tiendita>}
            ></Route>
            <Route
              path="/deportes/:vacaPolaca"
              element={<MasInfo lista={listaDeportes}></MasInfo>}
            ></Route>
          </Routes>
        </Layout>
      </JuegoProvider>
    </React.StrictMode>
  );
}

export default App;

{
  /* <>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <ItemListContainer mensaje="MiRA UNA VACA POLACA"></ItemListContainer>
  </main>
  <footer></footer>
</> */
}
