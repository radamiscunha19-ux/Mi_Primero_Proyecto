import HTMLFlipBook from "react-pageflip";
import Page from "./Components/Page";
import { Capa, Page1, Page2, Page3, Page4, Page5, ContraCapa } from "./Components/Pages";

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
    <div className="book-container">
      <div className="container-book">
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
          <Page><Capa /></Page>
          <Page><Page1 /></Page>
          <Page><Page2 /></Page>
          <Page><Page3 /></Page>
          <Page><Page4 /></Page>
          <Page><Page5 /></Page>
          <Page><ContraCapa /></Page>
        </FlipBook>
      </div>
    </div>
  );
}
