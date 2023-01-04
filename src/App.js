import Authentication from "./components/Authentication";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
