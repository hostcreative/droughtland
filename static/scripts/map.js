/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize and add the map
function initMap(){
  // The location of Mural
  const mural = { lat: 5.2842077, lng: -3.9695158 };
  // The map, centered at Mural
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      mapId: "b643e5a669588a95",
      zoom: 14,
      center: mural,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: mural,
    map: map,
  });
}

window.initMap = initMap;
