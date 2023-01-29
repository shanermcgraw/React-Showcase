import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { FilterContext } from "../../context";
import "./filter.css";

export default function Filter() {
  const [breedList, setBreedList] = useState([]);

  const { filters, addFilter, removeFilter } = useContext(FilterContext);

  const getBreeds = async () => {
    const breeds = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (breeds.data) {
      setBreedList(Object.keys(breeds.data.message));
    }
  };

  useQuery("dogBreeds", getBreeds);

  function handleSelect(value) {
    addFilter(value);
  }

  return (
    <div className="Filter-container">
      <h3 className="Filter-title">Filters</h3>
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
            <MenuItem divider dense value={breed} key={breed}>
              {breed}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="Chip-container">
        {filters.map((filter) => (
          <div className="Chip" key={filter}>
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
