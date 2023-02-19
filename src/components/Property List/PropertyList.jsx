import React from "react";
import { TbChartArea, TbBath } from "react-icons/tb";
import { FaBed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function PropertyList({ properties }) {
  return (
    <div className="flex gap-10 flex-wrap flex-row justify-between">
      {properties.length ? (
        properties.map((property) => (
          <div
            key={property.id}
            className="shadow-xl flex flex-col w-[25rem] bg-white text-lg"
          >
            <div>
              <img
                src={property.image}
                alt={property.title}
                className="overflow-hidden w-[450px] h-[15vw] object-cover"
              />
            </div>
            <div className="p-4 px-6 flex flex-col gap-y-3">
              <p>
                <span className="text-orange text-3xl font-semibold">
                  ${property.price}
                </span>
                /month
              </p>
              <h3 className="text-2xl font-bold font text-[#183A1D]">
                {property.title}
              </h3>
              <p>Type: {property.type}</p>
              <p className="text-xl text-gray-500 font-medium flex items-center gap-x-2">
                <MdLocationOn className="text-black" />
                {property.location}
              </p>
              <hr className="bg-gray-700 h-[2px]" />
              <div className="flex flex-row text-orange  justify-between">
                <div className="flex items-center">
                  {" "}
                  <FaBed className="w-6 h-6 mr-2" />{" "}
                  <p className="text-black text-sm">
                    {property.bedrooms}{" "}
                    {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
                  </p>
                </div>
                <div className="flex items-center border-l-2 border-black pl-2">
                  <TbBath className="w-6 h-6 mr-2" />
                  <p className="text-black text-sm">
                    {property.bathrooms}{" "}
                    {property.bathrooms === 1 ? "bathroom" : "bathrooms"}
                  </p>
                </div>
                <div className="flex items-center border-l-2 border-black pl-2">
                  <TbChartArea className="w-6 h-6 mr-2" />
                  <p className="text-black text-sm">
                    {property.sqft} sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container flex justify-center">
          <h1 className="mx-auto text-xl flex justify-center flex-col leading-tight font-bold md:text-5xl md:text-left md:leading-tight font-primary">
            <img src="./images/error.png" alt="" />
            <div className="text-orange">Oops!!! Property not found</div>
          </h1>
        </div>
      )}
    </div>
  );
}

export default PropertyList;
