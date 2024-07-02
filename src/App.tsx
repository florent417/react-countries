import { Header } from './components/Header';
import { Countries } from './views/Countries';

function App() {
  return (
    <div className="dark:text-white">
      <Header />
      <main className="flex justify-center pt-8 dark:bg-very-dark-blue-bg">
        <Countries />
      </main>
    </div>
  );
}

export default App;
