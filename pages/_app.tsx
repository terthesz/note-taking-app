import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState<boolean>();

  function setDarkMode(dark_mode: boolean) {
    localStorage.setItem('dark-mode', dark_mode.toString());

    if (dark_mode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    setDark(dark_mode);
  }

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('dark-mode') || 'false'));
  }, []);

  return (
    <div className='relative w-screen h-screen'>
      <Component {...pageProps} />

      <div
        onClick={() => setDarkMode(!dark)}
        className={
          'absolute right-10 bottom-10 flex justify-center items-center rounded-full w-[3.2rem] h-[3.2rem] cursor-pointer transition-all duration-100 hover:scale-105 active:scale-100 ' +
          (dark ? 'bg-orange-400 text-gray-800' : 'text-orange-400 bg-gray-800')
        }
      >
        {!dark ? <BsFillSunFill size='30px' /> : <BsFillMoonFill size='25px' />}
      </div>
    </div>
  );
}

export default App;
