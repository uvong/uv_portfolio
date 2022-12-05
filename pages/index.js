import Head from "next/head";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiPuppeteer, SiTailwindcss, SiCucumber } from "react-icons/si";
import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaGitSquare,
  FaDocker,
} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={darkMode ? "dark" : null}
    >
      <Head>
        <title>Uyen Vong</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/uv_favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className="min-h-screen">
          <nav className="flex py-5 mb-12 justify-end">
            <MdDarkMode
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer ml-5 text-xl dark:text-white"
            />
          </nav>
          <div
            className="flex items-center justify-center mx-auto rounded-full 
              bg-gradient-to-br from-teal-400/90 to-blue-400/90 w-36 h-36 md:w-48 md:h-48"
          >
            <div className="rounded-full bg-white w-32 h-32 md:w-44 md:h-44 dark:bg-slate-800">
              <Image
                src="/uyen.PNG"
                alt="an avatar of uyen"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="text-center p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Hello. I&apos;m <span className="text-teal-500">Uyen</span>
            </h1>
            <p className="text-2xl mb-4 md:text-3xl lg:text-4xl dark:text-white">
              (&quot;win&quot;)
            </p>
            <p className="py-5 mx-auto leading-7 max-w-lg md:text-lg dark:text-white">
              I am a developer looking for new opportunities to advance my
              craft. I love to create elegant and robust solutions that are
              user-friendly and delightful to use.
            </p>
          </div>
          <div className="flex justify-center text-4xl gap-10 text-gray-600">
            <a
              href="https://www.linkedin.com/in/uyen-vong-946732251/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillLinkedin className="rounded-full hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/uvong"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineGithub className="hover:text-blue-400" />
            </a>
          </div>
          <div className="text-center p-10 mb-10 shadow-lg rounded-lg">
            <h2 className="text-2xl my-2 text-teal-500">
              Technologies and Tools
            </h2>
            <p className="dark:text-white">
              Here are some of the technologies that I&apos;ve worked with
            </p>
            <div className="flex justify-center text-4xl gap-4 m-4 text-gray-500">
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaPython className="hover:text-blue-400" />
              </a>
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaJsSquare className="hover:text-blue-400" />
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaReact className="hover:text-blue-400" />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiTailwindcss className="hover:text-blue-400" />
              </a>
              <a
                href="https://pptr.dev/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiPuppeteer className="hover:text-blue-400" />
              </a>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGitSquare className="hover:text-blue-400" />
              </a>
              <a
                href="https://cucumber.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiCucumber className="hover:text-blue-400" />
              </a>
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaDocker className="hover:text-blue-400" />
              </a>
            </div>
          </div>
          <div className="text-center p-10 mb-10 shadow-lg rounded-lg">
            <h2 className="text-2xl my-2 text-teal-500">Projects</h2>
            <p className="dark:text-white">
              Here are some projects that I&apos;ve worked on
            </p>
            <div className="flex justify-center mx-auto my-4">
              <Image
                src="/indigo.png"
                alt="Indigo logo"
                width={200}
                height={200}
                className="rounded-lg absolute hover:opacity-0 hover:duration-200 hover:-z-99"
              />
              <div className="flex items-center justify-center w-[200px] h-[150px] bg-slate-900/90 text-white rounded-lg">
                <p>Savings tracker web app</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 max-h-8">
              <a
                href="https://savings-tracker-ada206.web.app"
                target="_blank"
                rel="noreferrer noopener"
                className="py-1 px-2 border-2 border-teal-400 rounded-xl hover:bg-teal-400 hover:text-white dark:text-white"
              >
                Demo
              </a>
              <a
                href="https://github.com/uvong/savings-tracker"
                target="_blank"
                rel="noreferrer noopener"
                className="py-1 px-2 border-2 border-teal-400 rounded-xl hover:bg-teal-400 hover:text-white dark:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </m.div>
  );
}
