import React, { useState } from "react";
import properties from "../../properties.json";
import PropertyList from "../Property List/PropertyList";
import { FaSearch } from "react-icons/fa";
import "./SearchItem.css";

function SearchItem() {
  const [propertyType, setPropertyType] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyBedrooms, setPropertyBedrooms] = useState("");
  const [propertyBathrooms, setPropertyBathrooms] = useState("");
  const [value, setValue] = useState("");
  const [searchedProperties, setSeachedProperties] = useState(properties);

  const handleSearch = () => {
    setSeachedProperties(
      properties.filter((property) =>
        property.location.toLowerCase().includes(value)
      )
    );
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePropertyPriceChange = (event) => {
    setPropertyPrice(event.target.value);
  };

  const handlePropertyBedroomsChange = (event) => {
    setPropertyBedrooms(event.target.value);
  };

  const handlePropertyBathroomsChange = (event) => {
    setPropertyBathrooms(event.target.value);
  };

  const filteredProperties = searchedProperties.filter((property) => {
    if (propertyType && property.type !== propertyType) {
      return false;
    }
    if (propertyPrice && property.price > parseInt(propertyPrice)) {
      return false;
    }
    if (propertyBedrooms && property.bedrooms < parseInt(propertyBedrooms)) {
      return false;
    }
    if (propertyBathrooms && property.bathrooms < parseInt(propertyBathrooms)) {
      return false;
    }
    return true;
  });

  return (
    <div className="App">
      <div className="flex justify-between p-7 mx-28">
        <div>
          <h1 className="text-3xl font-semibold">Search Properties to rent</h1>
          <h2 className="font-medium text-lg mt-2">in India, France, USA, UK, Canada</h2>
        </div>
        <div className="headerSearchItem flex flex-row justify-center items-center border-2 border-[#183A1D] px-4 bg-white">
          <input
            type="text"
            placeholder="What's your location ?"
            className="w-72 text-black border-none outline-none py-3 pl-2 bg-transparent"
            onChange={(e) => {
              setValue(e.target.value.toLowerCase());
            }}
            // For Enter key
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <FaSearch
            className="cursor-pointer text-orange"
            onClick={() => {
              handleSearch();
            }}
          />
        </div>
      </div>

      <div className="flex justify-center p-5 gap-x-10 text-lg items-center bg-white mx-28 border-[#183A1D] border-2">
        <div className="border-r-2 border-[#183A1D] pr-4">
          <label htmlFor="type" className="font-semibold">
            Property Type:
          </label>
          <select
            id="type"
            value={propertyType}
            onChange={handlePropertyTypeChange}
            className="border-none outline-none"
          >
            <option value="" className="text-center">
              Any
            </option>
            <option value="House" className="text-center">
              House
            </option>
            <option value="Apartment" className="text-center">
              Apartment
            </option>
            <option value="Villa" className="text-center">
              Villa
            </option>
          </select>
        </div>
        <div className="border-r-2 border-[#183A1D] pr-4">
          <label htmlFor="price" className="font-semibold">
            Max Price:
          </label>
          <select
            id="price"
            value={propertyPrice}
            onChange={handlePropertyPriceChange}
            className="border-none outline-none"
          >
            <option value="" className="text-center">
              Any
            </option>
            <option value="500" className="text-center">
              500
            </option>
            <option value="1000" className="text-center">
              1000
            </option>
            <option value="1500" className="text-center">
              1500
            </option>
            <option value="2000" className="text-center">
              2000
            </option>
            <option value="2500" className="text-center">
              2500
            </option>
          </select>
        </div>
        <div className="border-r-2 border-[#183A1D] pr-4">
          <label htmlFor="bedrooms" className="font-semibold">
            Min Bedrooms:
          </label>
          <select
            id="bedrooms"
            value={propertyBedrooms}
            onChange={handlePropertyBedroomsChange}
            className="border-none outline-none"
          >
            <option value="" className="text-center">
              Any
            </option>
            <option value="1" className="text-center">
              1
            </option>
            <option value="2" className="text-center">
              2
            </option>
            <option value="3" className="text-center">
              3
            </option>
            <option value="4" className="text-center">
              4
            </option>
            <option value="5" className="text-center">
              5
            </option>
          </select>
        </div>
        <div className="border-r-2 border-[#183A1D] pr-4">
          <label htmlFor="bathrooms" className="font-semibold">
            Min Bathrooms:
          </label>
          <select
            id="bathrooms"
            value={propertyBathrooms}
            onChange={handlePropertyBathroomsChange}
            className="border-none outline-none"
          >
            <option value="" className="text-center">
              Any
            </option>
            <option value="1" className="text-center">
              1
            </option>
            <option value="2" className="text-center">
              2
            </option>
            <option value="3" className="text-center">
              3
            </option>
            <option value="4" className="text-center">
              4
            </option>
            <option value="5" className="text-center">
              5
            </option>
          </select>
        </div>
        <div>
          <button
            type="search"
            className="text-center py-2 px-4 bg-[#183A1D] text-white hover:bg-transparent hover:text-[#183A1D] transition-all ease-in-out border-2 border-[#183A1D]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center p-14 px-28">
        <PropertyList properties={filteredProperties} />
      </div>
    </div>
  );
}

export default SearchItem;
