import './App.css';

function App() {

  const handleCardClick = (title) => {
    alert(`${title} feature clicked 🚀`);
  };

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">
          Startup<span>X</span>
        </h2>

        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>
          Build Faster <span>With StartupX</span>
        </h1>
        <p>
          A modern platform to help teams design, build, and scale products with
          speed and confidence.
        </p>
        <div className="hero-buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="card" onClick={() => handleCardClick("Fast")}>
          <div className="icon">⚡</div>
          <h3>Fast</h3>
          <p>Optimized performance for modern applications.</p>
        </div>

        <div className="card" onClick={() => handleCardClick("Secure")}>
          <div className="icon">🔒</div>
          <h3>Secure</h3>
          <p>Built with best security practices in mind.</p>
        </div>

        <div className="card" onClick={() => handleCardClick("Scalable")}>
          <div className="icon">📈</div>
          <h3>Scalable</h3>
          <p>Grows easily with your business needs.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 StartupX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
