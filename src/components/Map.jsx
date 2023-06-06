import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // eslint-disable-next-line no-unused-vars
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [1526, 30, 47],
        center: [5, 31],
        scale: 800
      }}
    >
      <Geographies
        geography="/features.json"
        fill="transparent"
        stroke="#f97316"
        strokeWidth={0.6}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-50.9522, -10.9566]}
        dx={-100}
        dy={-50}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 0,
          strokeLinecap: "round"
        }}
      >
        
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
