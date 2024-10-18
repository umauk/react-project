import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { Button, Rate, Divider } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { response } from "../../../store/api";
import "..//../style/parkList.css"

export const ParkList = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [positions, setPositions] = useState([]); // Saved locations
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null); // Current location
  const search = JSON.parse(localStorage.getItem("search"));
  const locationS = JSON.parse(localStorage.getItem("area"));
  const { userData } = useSelector((state) => state.userDetails);//use this line
  const dispatch = useDispatch();//use this line

  const maptheme=[
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#878787"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f9f5ed"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#aee0f4"
            }
        ]
    }
]

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDEtpP-w0lvW6vUUfbyJ06falh_yKY38ow", // Replace with your own API key
  });

  useEffect(() => {   //use this line
    dispatch(response());  //use this line
  }, [dispatch]);   //use this line

  useEffect(() => {
    getLocation();
    LocationFinder();
  }, []);

  const LocationFinder = async () => {
    try {
      const LocationData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationS}&appid=4618b7fb1d8b6583161cb274725ffeda`
      );
      const { lat, lon } = LocationData.data.coord;

      const a = await axios.get("http://localhost:3001/locations"); // Get saved locations
      const existingLocation = a.data.find((each) => each.name === locationS);
      if (!existingLocation) {
        await axios.post("http://localhost:3001/locations", {
          name: locationS,
          latitude: lat,
          longitude: lon,
        });
      }

      setPositions(a.data.map((loc) => ({ lat: loc.latitude, lng: loc.longitude })));
    } catch (error) {
      console.error("Error finding location:", error);
    }
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          setPosition({ lat: latitude, lng: longitude });
          setCurrentLocationMarker({ lat: latitude, lng: longitude });
        }
      });
    }
  }

  useEffect(() => {
    const fetchCoordinates = async (location) => {
      if (location === "Srikakulam") {
        setPosition({ lat: 18.2949, lng: 83.8938 });
        setCurrentLocationMarker({ lat: 18.2949, lng: 83.8938 });
      } else if (location === "Alwal") {
        setPosition({ lat: 17.4535, lng: 78.5215 }); // Hardcoded for Alwal, Hyderabad
        setCurrentLocationMarker({ lat: 17.4535, lng: 78.5215 });
      } else if (location === "Miyapur") {
        setPosition({ lat: 17.5234, lng: 78.3337 }); // Miyapur, Hyderabad
        setCurrentLocationMarker({ lat: 17.5234, lng: 78.3337 });
      }
    };
    fetchCoordinates(search);
  }, [search]);

  const styles = {

    right: { width: "70%", height: "100vh", border: "1px solid" },
  };

  return isLoaded ? (
    <div className="container">
      {/* Left Panel */}
      <div className="left">
        <h4>{search}</h4>
        {userData.map((each) => ( ///example this line
          <div key={each.id} style={{ padding: "20px", border: "1px solid #dcdcdc", borderRadius: "8px" }}>
            <h2>{each.areaName}</h2>
            <Rate defaultValue={4} disabled />
            <div style={{ marginBottom: "10px" }}>
              <EnvironmentOutlined style={{ fontSize: "24px", color: "green" }} />
              <span>{each.address}</span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>Amount:</span> 200 Rs
            </div>
            <Divider />
            <Button type="primary">Get Details</Button>
          </div>
        ))}
      </div>

      {/* Right Panel - Google Map */}
      <div style={styles.right}>
        <GoogleMap  center={position} zoom={14} mapContainerStyle={{ width: "100%", height: "100%" }} options={{
          styles:maptheme
        }}>
          {/* Current Location Marker */}
          {currentLocationMarker && (
            <Marker
              position={currentLocationMarker}
              label="You are here"
              icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", scaledSize: new window.google.maps.Size(40, 40) }}
            />
          )}

          {/* Saved Locations */}
          {positions.map((pos, index) => (
            <Marker
              key={index}
              position={pos}
              icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", scaledSize: new window.google.maps.Size(40, 40) }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
