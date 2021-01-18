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
    var features = [
        {
          geometry: {
            type: "point",
            x: -111.654336,
            y: 43.637879
          },
          attributes: {
            ObjectID: 1,
            DepArpt: "KATL",
            MsgTime: Date.now(),
            FltId: "UAL1"
          }
        },
       ];
    const layer = new FeatureLayer({
        source: features,  // array of graphics objects
        objectIdField: "OBJECTID",
        fields: [{
          name: "OBJECTID",
          type: "oid"
        }, {
          name: "url",
          type: "string"
        }],
        popupTemplate: {
          content: "<img src='{url}'>"
        },
        renderer: {  // overrides the layer's default renderer
          type: "simple",
          symbol: {
            type: "text",
            color: "#7A003C",
            text: "\ue661",
            font: {
              size: 20,
              family: "CalciteWebCoreIcons"
            }
          }
        }
      });
      view.when(function() {
        map.add(layer);
      });
      
});