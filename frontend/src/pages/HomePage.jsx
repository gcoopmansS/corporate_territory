import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Get Mapbox access token from environment variables
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function HomePage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    const token = import.meta.env.VITE_MAPBOX_TOKEN;

    if (!token) {
      setError("Mapbox token is missing! Check your .env.local file.");
      return;
    }

    // Validate token before initializing map
    fetch(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v12?access_token=${token}`,
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(
              `Token validation failed: ${data.message || response.statusText}`,
            );
          });
        }
        return response.json();
      })
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error("Token validation error:", error);
        setError(
          `Token error: ${error.message}. Please check your Mapbox token in .env.local`,
        );
      });

    function initMap() {
      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-74.5, 40],
          zoom: 9,
          attributionControl: true,
        });

        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        map.current.on("load", () => {
          setMapLoaded(true);
        });

        map.current.on("error", (e) => {
          const errorMsg =
            e.error?.message || e.error?.toString() || "Map failed to load";
          setError(`Map error: ${errorMsg}`);
        });

        // Add a timeout to catch hanging loads
        const timeout = setTimeout(() => {
          if (!map.current?.loaded()) {
            setError(
              "Map loading timed out. Please check your network connection.",
            );
          }
        }, 10000);

        map.current.on("load", () => {
          clearTimeout(timeout);
        });
      } catch (error) {
        setError(`Initialization error: ${error.message}`);
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          <strong>Error:</strong> {error}
        </div>
      )}
      {!mapLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-40">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}

export default HomePage;
