var view;
require(["esri/Map","esri/layers/FeatureLayer", "esri/views/MapView", "dojo/domReady!"], function(
    Map,
    FeatureLayer,
    MapView
)   {
    var map = new Map({
        basemap: "streets"
    });
    view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 4,
        center: [-99.14725260912257, 36.48617178360141]
    });
});