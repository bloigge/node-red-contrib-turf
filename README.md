# node-red-contrib-turf

<p>A node which exposes all the awesome features of the <a target="_blank" href="http://turfjs.org/">Turf</a> Library for spatial analysis. It includes traditional spatial operations, helper functions for creating GeoJSON data, and data classification and statistics tools. <br>
    Turf uses GeoJSON for all geographic data. Turf expects the data to be standard WGS84 longitude, latitude coordinates. Check out <a target="_blank" href="geojson.io">geojson.io</a> for a tool to easily create this data. <br>
    Most Turf functions work with GeoJSON features. These are are pieces of data that represent a collection of properties (ie: population, elevation, zipcode, etc.) along with a geometry. GeoJSON has several geometry types such as:
    <ul>
      <li>Point</li>
      <li>LineString</li>
      <li>Polygon</li>
    </ul>
    <br>
    The input messge must contain a <code>msg.topic</code> which sets the turf function (<a target="_blank" href ="http://turfjs.org/static/docs/">Turf Functions</a>).<br>
    The <code>mgs.payload</code> must be an array of input parameters. <br>
    <br>
    Example: <br>
    Input-msg for generating 100 random points within a given bounding box (<a target="_blank" href="http://turfjs.org/static/docs/module-turf_random.html">example from the docs</a>):
    <pre>
    msg.topic = "random";
    msg.payload = ['points', 100, {bbox: [-70, 40, -60, 60]}];
    </pre>
    
    </p>
