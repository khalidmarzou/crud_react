import ButtonContainer from "./components/ButtonContainer";
import Table from "./components/Table";

function App() {
  return (
    <main className="w-full h-full flex flex-col justify-between items-center py-10">
      <Table />
      <ButtonContainer />
    </main>
  );
}

export default App;
