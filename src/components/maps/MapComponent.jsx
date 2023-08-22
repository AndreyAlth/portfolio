import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import CardSkeleton from '@/components/skeletons/CardSkeleton'

function MapComponent({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  })
  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const center = {
    lat,
    lng,
  }
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={{
              lat,
              lng,
            }}
          />
        </GoogleMap>
      ) : (
        <CardSkeleton />
      )}
    </>
  )
}

export default MapComponent
