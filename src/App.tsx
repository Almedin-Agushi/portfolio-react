import "./App.css";

import Profile from "./assets/img.png";
import Project1 from "./assets/project1.png";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Almedin Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 pt-12 md:py-32 flex flex-col sm:flex-row gap-6">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Almedin Agushi,</h2>
              <h2 className="font-bold text-4xl mt-1 gradiant-text running-text">
                frontend developer.
              </h2>

              <p className="mt-4 select-none text-gray-400">
                Frontend developer.dolor sit amet consectetur adipisicing elit.
                Eum dicta harum corrupti, earum eius asperiores. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Itaque, eius!
              </p>
            </div>
            <div className="relative">
              <img src={Profile} className="w-[220px] m-auto  sm:w-[220px]" />
            </div>
          </div>
        </section>

        <section>
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold" id="projects">Projects</h2>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  freelancer landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive tailwind css layout freelancer WordPress,PHP,
                  JavaScript
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 ">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  freelancer landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive tailwind css layout freelancer WordPress,PHP,
                  JavaScript
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 ">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  freelancer landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive tailwind css layout freelancer WordPress,PHP,
                  JavaScript
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 ">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  freelancer landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive tailwind css layout freelancer WordPress,PHP,
                  JavaScript
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 ">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold" id="technologies">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2  mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">
                    Css, Sass, Bootstrap & Tailwind CSS
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">JavaScript, React Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  WordPress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick Learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-4 sm:mt-6 w-[80%]">
            
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  A1 englisht
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
            </div>
            </div>
        </section>
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold" id="about">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px] ">
                <h3 className="absolute left-0 text-lg font-semibold ">2013</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quos eligendi quaerat dignissimos amet illo? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Nam quas enim
                  consequatur quasi vitae repellat deserunt asperiores
                  recusandae maxime doloribus.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px] ">
                <h3 className="absolute left-0 text-lg font-semibold ">2013</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quos eligendi quaerat dignissimos amet illo? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Nam quas enim
                  consequatur quasi vitae repellat deserunt asperiores
                  recusandae maxime doloribus.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px] ">
                <h3 className="absolute left-0 text-lg font-semibold ">2013</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quos eligendi quaerat dignissimos amet illo? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Nam quas enim
                  consequatur quasi vitae repellat deserunt asperiores
                  recusandae maxime doloribus.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px] ">
                <h3 className="absolute left-0 text-lg font-semibold ">2013</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quos eligendi quaerat dignissimos amet illo? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Nam quas enim
                  consequatur quasi vitae repellat deserunt asperiores
                  recusandae maxime doloribus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a>
                  <img src={facebook}  />
                </a>
              </li>
              <li>
                <a>
                  <img src={linkedin}  />
                </a>
              </li>

              <li>
                <a>
                  <img src={instagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <canvas
        id="defaultCanvas0"
        className="p5Canvas"
        style={{
          width: '857px',
          height: '919px',
          position: 'absolute',
          left: '0px',
          top: '0px',
          zIndex: '-1'
        }}
        width="857"
        height="919"
      ></canvas> */}
    </>
  );
}

export default App;