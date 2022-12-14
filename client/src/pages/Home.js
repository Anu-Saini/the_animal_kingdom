import React from "react";
import './Pages.css'
import MyCarousel from "../components/Carousel";
import { QUERY_PROFILES } from "../queries/AnimalQuery";

import { useQuery } from "@apollo/client";

function HomePage() {

  const { loading, data } = useQuery(QUERY_PROFILES);
  console.log(data)
  var randomAnimals = [];
  if (!loading && data) {
    
    const profiles = data || [];
    let len = profiles.animals.length;
    let previousIndex = -1;
    while (randomAnimals.length < 4) {
      const randomElement = Math.floor(Math.random() * len);
      if (previousIndex === randomElement) {
        continue;
      }
      randomAnimals.push(profiles.animals[randomElement]);
      previousIndex = randomElement;
    }
  }
 
    return (
     <main>

        <div className="flex-row justify-center maincontainer">
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (

              <MyCarousel data={randomAnimals}></MyCarousel>
            )}
          </div>
        </div>
      </main>

          );
  };
  
  

export default HomePage;