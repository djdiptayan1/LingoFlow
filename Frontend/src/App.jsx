import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// ALL COMPONENTS
import Hero from "../src/components/hero";
import Loading from "../src/components/loading";
import Landing_page from "../src/components/landing_page"



function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (remove this in production)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Landing_page /> // Render your actual homepage component when loading is complete
        )}
      </div>
    </>
  );
}

export default App;
