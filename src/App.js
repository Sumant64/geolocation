import { useEffect, useState } from "react";


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100wh',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    outline: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  box: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '20px',
    padding: '20px'
  }, 
  locationContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  locationButton: {
    backgroundColor: 'white',
    color: 'white',
    backgroundColor: 'green',
    border: '2px solid green',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
  },

}

function App() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };


  return (
    <>
      <div style={styles.container}>
        <button style={styles.button} onClick={getLocation}>Get Location</button>
        {location && (
          <div style={styles.box}>
            <p style={{borderBottom: '1px solid grey', margin: '0px', padding: '5px'}}>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
            <p style={{borderBottom: '1px solid grey', backgroundColor: '#e2e2e2', margin: '0px 0px 15px', padding: '5px'}}>{location.latitude},{location.longitude}</p>
            <div style={styles.locationContainer}>
              <a className="location-button" href={`https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}`}
              style={styles.locationButton}
              >Click to see location</a>

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
