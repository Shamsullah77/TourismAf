import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import afghanistanProvinces from "./data/afghanistan-provinces.json"; // Import the GeoJSON file

const AfghanistanMap = () => {
  return (
    <div>
      <ComposableMap 
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [65, 34], // Centering the map over Afghanistan
        }}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Renders the map with each province */}
        <Geographies geography={afghanistanProvinces}>
          {({ geographies }) =>
            geographies.map(geo => (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#CFD8DC",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      outline: "none",
                    },
                  }}
                />
                {/* Add province labels */}
                <Annotation
                  subject={[
                    geo.properties.centroid[0], 
                    geo.properties.centroid[1]
                  ]}
                  dx={0}
                  dy={0}
                  connectorProps={{
                    stroke: "#FF5722",
                    strokeWidth: 0,
                    strokeLinecap: "round",
                  }}
                >
                  <text
                    x="0"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="#000"
                    fontSize={10}
                  >
                    {geo.properties.name}
                  </text>
                </Annotation>
              </React.Fragment>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default AfghanistanMap;