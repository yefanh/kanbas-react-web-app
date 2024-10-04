// src/Labs/Lab2/Flex.tsx
export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red">Column 3</div>
      </div>

      {/* the last column can expand into the empty space to its right */}
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">
            Column 1</div>
          <div className="wd-bg-color-blue">
            Column 2</div>
          <div className="wd-bg-color-red
                          wd-flex-grow-1">
            Column 3</div>
        </div>
      </div>

      {/* have specific widths to fit the content 75???????????????????*/}
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow 
                          wd-width-75px">   
            Column 1</div>
          <div className="wd-bg-color-blue">
            Column 2</div>
          <div className="wd-bg-color-red
                          wd-flex-grow-1">
            Column 3</div>
        </div>
      </div>

    </div>
  );
}

