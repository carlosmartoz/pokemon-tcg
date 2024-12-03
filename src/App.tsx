// CSS
import "./App.css";

// Axios
import axios from "axios";

// React
import { useEffect, useState } from "react";

// App
function App() {
  // Effect
  useEffect(() => {
    // Fetch Data
    const fetchData = async () => {
      // Try
      try {
        // Response
        const response = await axios.get(
          `https://api.pokemontcg.io/v2/cards?pageSize=20`,
          {
            headers: { "X-Api-Key": import.meta.env.API_KEY },
          }
        );

        // Log
        console.log("Data: ", response.data.data);

        // Set Card
        setCards(response.data.data);
      } catch (error) {
        // Log
        console.error("Error: ", error);

        // Set Loading
        setLoading(false);
      } finally {
        // Log
        console.log("Finally");

        // Set Loading
        setLoading(false);
      }
    };

    // Fetch Data
    fetchData();
  }, []);

  // Card Type
  type Card = {
    name: string;
    images: {
      large: string;
    };
  };

  // Card
  const [cards, setCards] = useState<Card[]>([]);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <main className="main">
        <article className="article">
          <section className="section">
            {loading && <p className="skeleton">Loading...</p>}

            <ul className="grid">
              {cards.map((card, index) => (
                <li key={index} className="grid__item">
                  <img
                    alt={card.name}
                    className="grid__image"
                    src={card.images.large}
                  />
                </li>
              ))}
            </ul>
            {/* <div className="container">
                <div className="card">
                  {loading ? (
                    <div className="skeleton" />
                  ) : (
                    <img
                      alt={card.name}
                      src={card.images.large}
                      className="card__image"
                    />
                  )}
                </div>
              </div> */}
          </section>
        </article>
      </main>
    </>
  );
}

// Export
export default App;
