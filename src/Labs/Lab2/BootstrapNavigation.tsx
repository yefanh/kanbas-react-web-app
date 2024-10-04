// src/Labs/Lab2/BootstrapNavigation.tsx
export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" href="/home">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/home">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/home">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="/home">Disabled</a>
        </li>
      </ul>

      {/* Navigating with cards */}
      <div id="wd-css-navigating-with-cards">
        <h2>
          Cards
        </h2>
        <div className="card"
            style={{ width: "18rem" }}>
          <img src="images/stacked.jpg"
              className="card-img-top"
              alt="Stacked starship being prepared for launch" />
          <div className="card-body">
            <h5 className="card-title">
                Stacking Starship
            </h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="/home" className="btn btn-primary">
              Boldly Go
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}