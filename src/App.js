import "./styles.css";
import GraphQlTest from "./GraphQlTest";
import Container from "./components/Container";

export default function App() {
  return (
    <div className="App">
      <Container>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <GraphQlTest />
      </Container>
    </div>
  );
}
