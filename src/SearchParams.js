import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
     setBreeds([]);
      setBreed("");

      pet.breeds(animal).then(({ breeds: apiBreeds }) => {
          const breedStrings = breeds.map(({ name }) => name);
          setBreeds(breedStrings);
      }, console.error);

      }, [animal, setBreeds, setBreeds]);
 

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
