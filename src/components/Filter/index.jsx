import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context";
import "./filter.css";

export default function Filter() {
  const [breedList, setBreedList] = useState([]);

  const { filters, addFilter, removeFilter } = useContext(FilterContext);

  const getBreeds = async () => {
    const breeds = await fetch("https://dog.ceo/api/breeds/list/all").then(
      (res) => res.json()
    );

    setBreedList(Object.keys(breeds.message));
  };

  function handleSelect(value) {
    addFilter(value);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div className="Filter-container">
      <FormControl fullWidth>
        <InputLabel id="breed-label">Breed</InputLabel>
        <Select
          multiple
          value={filters}
          fullWidth
          label="Breed"
          labelId="breed-label"
          onChange={(e) => handleSelect(e.target.value)}
        >
          {breedList.map((breed) => (
            <MenuItem divider dense value={breed}>
              {breed}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="Chip-container">
        {filters.map((filter) => (
          <div className="Chip">
            <Chip
              label={filter}
              color="primary"
              onDelete={() => removeFilter(filter)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
