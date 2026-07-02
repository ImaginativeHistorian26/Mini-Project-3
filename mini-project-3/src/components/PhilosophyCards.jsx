import React from 'react';

const famousPhilosophers = [
  { image: "../public/Plato.png", title: 'Platonism' },
  { image: "../public/Aristotle.png", title: 'Aristotelianism' },
  { image: "../public/Plotinus.png", title: 'Neo-Platonism' },
  { image: "../public/Aquinas.png", title: 'Scholasticism' },
  { image: "../public/Kant.png", title: 'Kantianism' },
  { image: "../public/Kierkegaard.png", title: 'Existentialism' },
];

function PhilosophyCards() {
  return (
    <div className="container">
      <div id="cards-container" className="row justify-content-center g-4">
        {famousPhilosophers.map((p, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img src={p.image} className="card-img-top img-fluid" alt={p.title} />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title my-3">{p.title}</h3>
                <p className="card-text">{p.text}</p>
                <a href="#" className="btn btn-primary w-100 mx-auto mt-auto">Check it out!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PhilosophyCards };