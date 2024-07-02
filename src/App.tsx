import { Header } from './components/Header';
import { Countries } from './views/Countries';

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <Countries />
      </main>
    </>
  );
}

export default App;
