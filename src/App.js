import React, { useState } from "react";
import "./App.css";
import { SideMenu } from "./components/SideMenu";
import { Navbar } from "./components/Navbar";
import { ContentBlock } from "./components/ContentBlock";
import { ProductsList } from "./components/ProductsList";
import { SummaryContent } from "./components/SummaryContent";

function App() {
  const [value, setValue] = useState("all");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="base">
      <SideMenu />
      <Navbar value={value} onChange={onChange} />
      <div className="main-content">
        <ContentBlock title="7-day summary">
          <SummaryContent />
        </ContentBlock>
        <ContentBlock title="Products list">
          <ProductsList period={value} />
        </ContentBlock>
      </div>
    </div>
  );
}

export default App;
