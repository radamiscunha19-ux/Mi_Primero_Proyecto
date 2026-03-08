import "../StyleCss/App.css";
import Navbar from "../Components/Navbar";
import HTMLFlipBook from "react-pageflip";
import Page from "../Components/Page";

interface FlipBookProps {
  width: number;
  height: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  showCover?: boolean;
  children?: React.ReactNode;
}

const FlipBook = HTMLFlipBook as unknown as React.ComponentType<FlipBookProps>;

export default function App() {
  return (
    <>
      <Navbar />
      <div className="book-container">
        <FlipBook
          width={300}
          height={350}
          size="stretch"
          minWidth={100}
          maxWidth={500}
          minHeight={150}
          maxHeight={600}
          showCover={true}
        >
          <Page>Capa</Page>
          <Page>Página 1</Page>
          <Page>Página 2</Page>
          <Page>Página 3</Page>
          <Page>Contracapa</Page>
        </FlipBook>
      </div>
    </>
  );
}
