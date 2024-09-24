// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1Ijoid2VuZHl6aGFuZzExMTYiLCJhIjoiY20xZ244Y3p0MDVxMTJqcHphcXI3dXNtdCJ9.82hQGvyzgTNpb4qVWjA5jg"; //YOUR KEY HERE


// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/wendyzhang1116/cm1gwru6k01d101pdfyoi0buq", //YOUR STYLE URL
  center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
  zoom: 11, // starting zoom (adjust it as you wish)
  projection: "globe", // display the map as a 3D globe
});
