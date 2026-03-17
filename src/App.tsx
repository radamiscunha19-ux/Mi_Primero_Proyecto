import HTMLFlipBook from "react-pageflip";
import Page from "./Components/Page";
import { Capa, Page1, Page2 } from "./Components/Pages";

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
      <div className="book-container">
        <FlipBook
          width={300}
          height={360}
          size="stretch"
          minWidth={100}
          maxWidth={500}
          minHeight={150}
          maxHeight={610}
          showCover={true}
        >
          <Page>
            <Capa />
          </Page>
          <Page><Page1 /></Page>
          <Page><Page2 /></Page>
          <Page>Pagina3</Page>
          <Page>Pagina4</Page>
          <Page>Pagina5</Page>
          <Page>Contracapa</Page>
        </FlipBook>
      </div>
    </>
  );
}
