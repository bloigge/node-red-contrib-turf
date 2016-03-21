# node-red-contrib-turf

A node which exposes all the awesome features of the [Turf](http://turfjs.org/) Library for spatial analysis.

About Turf:
-----------

Turf includes traditional spatial operations, helper functions for creating GeoJSON data, and data classification and statistics tools. 
Turf uses GeoJSON for all geographic data. Turf expects the data to be standard WGS84 longitude, latitude coordinates. Check out [geojson.io](geojson.io) for a tool to easily create this data.
Most Turf functions work with GeoJSON features. These are are pieces of data that represent a collection of properties (ie: population, elevation, zipcode, etc.) along with a geometry. GeoJSON has several geometry types such as:

 - Point
 - LineString
 - Polygon

How to use the node:
--------------------

The input message must contain a `msg.topic` which sets the turf function ([Turf Functions](http://turfjs.org/static/docs/)).
The `msg.payload` must be an array of input parameters.

Example: 
Input-msg for generating 100 random points within a given bounding box ([example from the docs](http://turfjs.org/static/docs/module-turf_random.html)):

    msg.topic = "random";
    msg.payload = ['points', 100, {bbox: [-70, 40, -60, 60]}];