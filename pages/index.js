// Proyecto Next.js con Tailwind y Framer Motion
// Estructura base para una página de aniversario ❤️

// 1. Instala las dependencias:
// npx create-next-app@latest aniversario-web
// cd aniversario-web
// npm install tailwindcss framer-motion react-horizontal-scrolling-menu
// npx tailwindcss init -p

// Configura Tailwind en tailwind.config.js:
// content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']

// globals.css:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// pages/index.js

import { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Polaroid from '@/components/Polaroid'
import confetti from "canvas-confetti";



const timelineData = [
  { id: 1, title: "El inicio... Momos discord 💻", date: "2021-05-16", image: "/img/discord.jpg" },
  { id: 2, title: "Primer encuentro mormoriano 🥰", date: "2021-06-30", image: "/img/ovalle.jpg" },
  { id: 3, title: "04:07 ❤️", date: "2020-06-29", image: "/img/1.jpg" },
  { id: 4, title: "La migracion de la momito 🚗", date: "El momo se la robo 👀", image: "/img/bolso.jpg" },
  { id: 5, title: "Momos deserticos 🏜️", date: "Vacaciones salvadoreñas", image: "/img/salvador.jpg" },
  { id: 6, title: "Momos chambeadores 💼", date: "Primer trabajo de la tia murmur", image: "/img/chamba.jpg" },
  { id: 7, title: "Primer Aniversario ❤️", date: "2022-07-01", image: "/img/aniversario.jpg" },
  { id: 8, title: "En la abrigacion ❤️🥶", date: "Primeras chombas", image: "/img/chomba.jpg" },
  { id: 9, title: "Momos arrancaron al sol 🌞", date: "Volvieron a su norte", image: "/img/salvador2.jpg" },
  { id: 10, title: "Y la momo se puso a bailar 💃", date: "y el momo su fan viendola", image: "/img/baile.jpg" },
  { id: 11, title: "Los momos necesitan relajarse 🧘", date: "Y remojarse", image: "/img/relax.jpg" },
  { id: 12, title: "Lo importante es que siempre estan juntitos ❤️", date: "Riendo, con un cafecito ☕ y un atardecer ", image: "/img/cafe.jpg" },
  // Agrega más eventos aquí
];



export default function Home() {
  const [timeTogether, setTimeTogether] = useState("");
  const [showMemory, setShowMemory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showApp, setShowApp] = useState(false);


  const hasExploded = useRef(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const startDate = new Date("2021-07-01T00:00:00");
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether(`${days} días, ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  //effect del confeti
  useEffect(() => {
    if (isOpen && !hasExploded.current) {
      hasExploded.current = true;
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
    if (!isOpen) {
      hasExploded.current = false;
    }
  }, [isOpen]);


  // botones de flechas en slider scrolleable

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <button onClick={() => scrollPrev()} className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full shadow">
        ◀
      </button>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <button onClick={() => scrollNext()} className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full shadow">
        ▶
      </button>
    );
  };

  // handle de la musica
  const handleStart = () => {
    setShowApp(true);
    audioRef.current.play(); // Reproduce la música
  };


  return (


    <div className="relative">

      {/* Overlay de bienvenida */}
      {!showApp && (
        <div className="fixed inset-0 bg-pink-100 flex flex-col items-center justify-center z-50">
          <h1 className="text-4xl font-bold text-pink-700 mb-8">Bienvenida mi estimada Momo ❤️</h1>
          <button
            onClick={handleStart}
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl px-6 py-3 rounded-full shadow-lg transition-all"
          >
            4 Añitos 🥹
          </button>
        </div>
      )}

      {/* Audio oculto */}
      <audio ref={audioRef} src="/audio/musica.mp3" preload="auto" loop />

      {/* Contenido real del sitio */}
      {showApp && (

        <main className="p-6 space-y-12">
          <section className="mb-24">

            <div className="relative text-center mt-16">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-80 h-24 bg-pink-300 opacity-20 blur-sm rotate-[-4deg] rounded-[30%_30%_30%_30%/40%_40%_40%_40%] z-0" />

              <h1 className="text-6xl font-bold mb-16 mt-14 text-center">Historia De Momos ❤️</h1>
            </div>

            <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
              {timelineData.map((event) => (
                <div
                  key={event.id}
                  className="min-w-[270px] mx-2 rounded-2xl shadow-lg bg-white overflow-hidden"
                >
                  <img src={event.image} alt={event.title} className="w-full h-64  object-cover" />
                  <div className="p-4">
                    <h3 className=" text-xl font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </ScrollMenu>
          </section>

          <section className="text-center">
            <h2 className="text-4xl  font-semibold">De la manito siempre...</h2>
            <img
              src="/img/manito.jpeg"
              alt="Manito"
              className=" mb-36 max-w-md mx-auto rounded-xl shadow-lg"
            />

          </section>



          <section className="text-center">
            <h2 className="text-4xl font-semibold">Historia mormoriana se esta escribiendo desde hace...</h2>
            <p className="text-xl mt-2 text-pink-600 font-mono mb-36">{timeTogether}</p>
          </section>

          <section className="min-h-screen bg-gray-100 py-16">
            <h2 className="text-4xl text-center text-pink-600 font-bold mb-8">Mi persona Fav 💘🌻</h2>

            <div className="flex flex-wrap justify-center gap-8 mb-24">
              <Polaroid src="/img/momo.jpeg" caption="Mi momo preciosa como un girasol en el atardecer" />
            </div>
          </section>



          <section className="mt-16 px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-2">Nuestros viajes ✈️🌄</h2>
            <p className="mt-2 text-lg text-gray-600 italic text-center mb-16">y que sean muchos mas !</p>
            <div className="columns-2 md:columns-3 gap-4 space-y-4 mb-32">
              {[
                { src: "/img/san_pedro.jpg", caption: "San Pedro de Atacama" },
                { src: "/img/valdivia.jpg", caption: "Valdivia" },
                { src: "/img/valpo.jpg", caption: "Valpo y Viña" },
                { src: "/img/salto_laja.jpg", caption: "Salto del Laja" },
                { src: "/img/niebla.jpg", caption: "Niebla" },
                { src: "/img/valle.jpg", caption: "Vallecito" },
              ].map((foto, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src={foto.src}
                    alt={foto.caption}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center font-light tracking-wide">
                    {foto.caption}
                  </div>
                </div>
              ))}
            </div>
          </section>


          <section className="min-h-screen bg-yellow-100 py-16">
            <h2 className="text-4xl text-center text-pink-600 font-bold mb-8">Los momos chikitos forever ❤️</h2>

            <div className="flex flex-wrap justify-center gap-8 mb-24">
              <Polaroid src="/img/chikitos.jpeg" caption="" />
            </div>
          </section>


          <section className="text-center my-16">


            <img
              src="/img/pipiri.png"
              alt="Manito"
              className="mt-32 w-64 mx-auto "
            />


            <button
              onClick={() => setIsOpen(true)}
              className="  mb-40 bg-pink-600 hover:bg-pink-700 text-6xl text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
            >
              Sorpresa 🎁
            </button>



            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                <div className="bg-white rounded-xl p-6 max-w-sm mx-auto shadow-xl relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
                  >
                    &times;
                  </button>
                  <img
                    src="/img/momoia.jpeg"
                    alt="Recuerdo especial"
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <p className="mt-4 text-gray-700 text-lg italic">
                    Un regalito para la momo Chef 💖👨‍🍳
                  </p>

                  <p className="mt-4 text-gray-700 text-lg italic">
                    El momo hara la entrega oficial del regalito 🎁
                  </p>
                </div>
              </div>
            )}
          </section>




        </main>
      )}
    </div>

  );
}
