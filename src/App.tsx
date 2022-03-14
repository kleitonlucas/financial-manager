import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
/**Parei em 1:13:00 */

/**
 * Próximos passos: 
 * - Adicionar novas transações
 * - Mostrar tabela
 */