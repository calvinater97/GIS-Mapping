var view;
require(["esri/Map","esri/layers/FeatureLayer", "esri/PopupTemplate", "esri/views/MapView", "dojo/domReady!"], function(
    Map,
    FeatureLayer,
    PopupTemplate,
    MapView
)   {
    //Creating the map
    var map = new Map({
        basemap: "national-geographic"
    });
    view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 4,
        center: [-99.14725260912257, 36.48617178360141]
    });

    //First layer
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
            title: "Calvin Wood",
            content: "hello world",
            mediaInfos: [{
                value: {
                    sourceURL: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                    linkURL: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
                }
            }]
        },
        renderer: {  // overrides the layer's default renderer
          type: "simple",
          symbol: {
            type: "text",
            color: "#7A003C",
            text: "\ue60a",
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

//new layer
var features = [
    {
      geometry: {
        type: "point",
        x: -97.477640,
        y: 38.565271
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layers = new FeatureLayer({
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
        text: "\ue60a",
        font: {
          size: 20,
          family: "CalciteWebCoreIcons"
        }
      }
    }
  });
  view.when(function() {
    map.add(layers);
  });
      
});