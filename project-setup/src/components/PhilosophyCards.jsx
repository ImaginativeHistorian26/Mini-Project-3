import { useEffect, useState } from "react";

const famousPhilosophers = [
  { image: "/Plato.png", title: "Platonism" },
  { image: "/Aristotle.png", title: "Aristotelianism" },
  { image: "/Plotinus.png", title: "Neo-Platonism" },
  { image: "/Aquinas.png", title: "Scholasticism" },
  { image: "/Kant.png", title: "Kantianism" },
  { image: "/Kierkegaard.png", title: "Existentialism" },
];

function PhilosophyCards() {
  const [cards, setCards] = useState(famousPhilosophers);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        const enriched = famousPhilosophers.map((card) => {
          const fetched = data.philosophers?.find(
            (item) => item.title === card.title
          );
          return fetched ? { ...card, text: fetched.text, id: fetched.id } : card;
        });
        setCards(enriched);
      })
      .catch((err) => {
        console.error("Could not load card descriptions:", err);
      });
  }, []);

  return (
    <div className="container">
      <div id="cards-container" className="row justify-content-center g-4">
        {cards.map((p) => (
          <div key={p.title} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img
                  src={p.image}
                  className="card-img-top img-fluid"
                  alt={p.title}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title my-3">{p.title}</h3>
                {p.text && <p className="card-text">{p.text}</p>}
                <a href="#" className="btn btn-primary w-100 mx-auto mt-auto">
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PhilosophyCards };