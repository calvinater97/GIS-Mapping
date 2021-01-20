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
            title: "Paramount Rock",
            content: "Great climbing location with 14 sport routes ranging from 5.8-5.11b.",
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

//Second layer
var features = [
    {
      geometry: {
        type: "point",
        x: -111.641650,
        y: 43.599969
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
        title: "Pointless Crag",
        content: "This climbing location includes 18 different routes to choose from but also is a great spot for hiking to set up some top ropes."
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

//Third layer
var features = [
    {
      geometry: {
        type: "point",
        x: -121.140607,
        y: 44.368118
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layerss = new FeatureLayer({
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
        title: "Smith Rock",
        content: "This climbing location includes 769 different sport routes to choose from while enjoying the beauty of Oregon."
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
    map.add(layerss);
  });

//Fourth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -113.083370,
        y: 43.729610
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layersss = new FeatureLayer({
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
        title: "The Fins",
        content: "This area got it's unique name because of the fin like rock formation that is located here which makes it a perfect place for some rock climbing.  Includes 207 different sport routes."
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
    map.add(layersss);
  });

  //Fifth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -113.083370,
        y: 43.729610
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layerssss = new FeatureLayer({
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
        title: "The Fins",
        content: "This area got it's unique name because of the fin like rock formation that is located here which makes it a perfect place for some rock climbing.  Includes 207 different sport routes."
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
    map.add(layerssss);
  });

//Sixth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -119.964819,
        y: 47.027738
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layersssss = new FeatureLayer({
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
        title: "The Feathers",
        content: "Great beginner location to work your way up to more dificult climbs.  Offers 45 amazing sport climbings that test your ability in many different ways."
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
    map.add(layersssss);
  });

//Seventh layer
var features = [
    {
      geometry: {
        type: "point",
        x: -119.968699,
        y: 47.024784
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layerr = new FeatureLayer({
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
        title: "Frenchman Coulee",
        content: "When it comes time for you to move up from the feathers location this is the next place to go with a good selection of 354 sport routes to pick from."
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
    map.add(layerr);
  });

//Eighth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -111.623559,
        y: 40.265540
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layerrr = new FeatureLayer({
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
        title: "Rock Canyon",
        content: "Great location when your looking for some multi-pitches and climbs that really push your limits. Has 332 sport climbs to choose from."
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
    map.add(layerrr);
  });

  //Ninth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -112.970606,
        y: 37.257755
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layerrrr = new FeatureLayer({
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
        title: "Zion National Park",
        content: "This park offers 30 sport climbs but also includes 263 trad climbs making it a great location to spend the whole day."
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
    map.add(layerrrr);
  });

//Tenth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -111.952148,
        y: 33.464618
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layeer = new FeatureLayer({
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
        title: "Papago Park",
        content: "If you love being in the Arizona heat then this climbing location is good for you with there three execellent sport climbs."
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
    map.add(layeer);
  });

  //Eleventh layer
var features = [
    {
      geometry: {
        type: "point",
        x: -113.720260,
        y: 42.080106
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layeeer = new FeatureLayer({
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
        title: "City of Rocks",
        content: "Amazing camping location as you will be sleeping right next to great climbing areas as it does include 240 sport climbs."
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
    map.add(layeeer);
  });

  //Twelfth layer
var features = [
    {
      geometry: {
        type: "point",
        x: -115.410955,
        y: 36.088126
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layeeeer = new FeatureLayer({
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
        title: "Red Rock",
        content: "You will never run out of routes to climb here as there is 845 sport routes and 1414 trad routes."
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
    map.add(layeeeer);
  });

//13th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -105.701271,
        y: 39.707264
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layyer = new FeatureLayer({
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
        title: "Georgetown",
        content: "Ever wanted to climb in the tree?  If so this is the place for you as you will be surrounded by trees and have 11 sport routes to climb."
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
    map.add(layyer);
  });

//14th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -103.478767,
        y: 37.754062
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layyyer = new FeatureLayer({
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
        title: "Vogel Canyon",
        content: "Need a good place to climb during the winter? Then make sure to hit up these 7 sport climbs."
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
    map.add(layyyer);
  });

  //15th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -106.502220,
        y: 35.215377
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const layyyyer = new FeatureLayer({
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
        title: "Lower Juan Tabo Canyon",
        content: "Great place to do some hiking while setting up routes as they have 10 sport routes."
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
    map.add(layyyyer);
  });

  //16th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -119.262042,
        y: 37.720410
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const laayer = new FeatureLayer({
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
        title: "Yosemite National Park",
        content: "Some of the most famous climbing has been completed here and movies filmed from this location. Includes 351 sport routes but has 1411 trad routes."
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
    map.add(laayer);
  });

//17th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -120.660575,
        y: 48.508844
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const laaayer = new FeatureLayer({
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
        title: "North Cascades",
        content: "If you enjoy climbing around the snow then this is you place to climb.  Has 18 sport routes and 158 trad climbs to pick from."
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
    map.add(laaayer);
  });

//18th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -120.520636,
        y: 47.542052
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const llayer = new FeatureLayer({
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
        title: "Peshastin Pinnacles State Park",
        content: "As you get to choose from the 23 different sport routes each one will give you a great view of the surrounding area."
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
    map.add(llayer);
  });

//19th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -122.332268,
        y: 41.169866
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const lllayer = new FeatureLayer({
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
        title: "Castle Crags",
        content: "Great place to explore and climb the 14 sport routes.  Includes very short climbs but also has multi hundred feet climbs."
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
    map.add(lllayer);
  });

//20th layer
var features = [
    {
      geometry: {
        type: "point",
        x: -78.442166,
        y: 36.168999
      },
      attributes: {
        ObjectID: 1,
        DepArpt: "KATL",
        MsgTime: Date.now(),
        FltId: "UAL1"
      }
    },
   ];
const llllayer = new FeatureLayer({
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
        title: "The Trestle",
        content: "Fun area to climb as it is different from all the rest.  These climbs are up old structures but will still best your skills."
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
    map.add(llllayer);
  });
      
});