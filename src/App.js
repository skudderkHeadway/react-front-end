import "./styles.css";
import Container from "./layout/Container";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    </div>
  );
}
