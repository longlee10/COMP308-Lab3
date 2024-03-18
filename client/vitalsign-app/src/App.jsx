import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import VitalSign from "./components/VitalSign";

const client = new ApolloClient({
  uri: "http://localhost:4002/graphql", // Set this to your actual GraphQL endpoint
  cache: new InMemoryCache(),
  credentials: "include",
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <VitalSign />
      </ApolloProvider>
    </div>
  );
}

export default App;
