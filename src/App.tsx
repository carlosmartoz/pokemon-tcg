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
          `https://api.pokemontcg.io/v2/cards/xy1-1`,
          {
            headers: { "X-Api-Key": import.meta.env.API_KEY },
          }
        );

        // Log
        console.log("Data: ", response.data.data);

        // Set Card
        setCard(response.data.data);
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
  const [card, setCard] = useState<Card>({} as Card);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

// Export
export default App;
