function AboutBox() {
  return (
    <main>
      <div className="container my-4">
        <article />
        <div className="about-container container">
          <h2>
            The Academy of Thinkers is a site where people can discuss different
            philosophical topics and engage in critical debates to improve their
            understanding of the world.
          </h2>

          <div className="about-container-2">
            <form action="/">
              <button className="go-back-btn" type="return">
                Go Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export { AboutBox };