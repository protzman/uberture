import React, { useState } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import DeckGL from "deck.gl";

const INITIAL_VIEW: Record<string, number> = {
  latitude: 38.9,
  longitude: -77.03,
  zoom: 12,
  bearing: 0,
  pitch: 0,
};

export default function Map() {
  const [viewport, setViewport] = useState<any>({
    transitionInterpolator: new FlyToInterpolator(),
    transitionDuration: 800,
    ...INITIAL_VIEW,
  });

  // let map: any;
  const MAP_ELEMENT_ID = "map-div";
  const baseLayer = {
    version: 8,
    sources: {
      "dark-tiles": {
        type: "raster",
        tiles: [
          "https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
          "https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
          "https://c.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
        ],
        tileSize: 256,
      },
    },
    glyphs: "./data/mapfonts/{fontstack}/{range}.pbf",
    layers: [
      {
        id: "background",
        type: "background",
        paint: {
          "background-color": "black",
        },
      },
      {
        id: "dark-tiles",
        type: "raster",
        source: "dark-tiles",
        minzoom: 0,
        maxzoom: 22,
      },
    ],
  };

  return (
    <div id={MAP_ELEMENT_ID} style={{ width: "100%", height: "100vh" }}>
      <ReactMapGL
        width="100%"
        height="100%"
        {...viewport}
        mapStyle={baseLayer}
        onViewportChange={(viewport) => {
          const { width, height, ...etc } = viewport;
          setViewport(etc);
        }}
        // ref={(ref) => (map = ref?.getMap())}
      >
        <DeckGL
          {...viewport}
          width="100%"
          height="100%"
          controller
          viewState={viewport}
        />
      </ReactMapGL>
    </div>
  );
}
