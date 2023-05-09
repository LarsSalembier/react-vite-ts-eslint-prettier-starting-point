import viteJsLogo from './assets/vitejs.svg';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/typescript.svg';
import swcLogo from './assets/swc.png';
import eslintLogo from './assets/eslint.svg';
import prettierLogo from './assets/prettier.svg';
import tailwindLogo from './assets/tailwindcss.svg';

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <div className="flex justify-center items-center mb-4 space-x-16">
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            <img src={viteJsLogo} alt="Vite logo" width="100" height="100" />
            <div className="sr-only">Vite</div>
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} alt="React logo" width="100" height="100" />
            <div className="sr-only">React</div>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <img src={typescriptLogo} alt="TypeScript logo" width="100" height="100" />
            <div className="sr-only">TypeScript</div>
          </a>
          <a href="https://swc.rs/" target="_blank" rel="noopener noreferrer">
            <img src={swcLogo} alt="SWC logo" width="100" height="100" />
            <div className="sr-only">SWC</div>
          </a>
          <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
            <img src={eslintLogo} alt="ESLint logo" width="100" height="100" />
            <div className="sr-only">ESLint</div>
          </a>
          <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
            <img src={prettierLogo} alt="Prettier logo" width="100" height="100" />
            <div className="sr-only">Prettier</div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <img src={tailwindLogo} alt="Tailwind CSS logo" width="100" height="100" />
            <div className="sr-only">Tailwind CSS</div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
