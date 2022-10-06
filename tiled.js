(function (name, data) {
   if (typeof onTileMapLoaded === 'undefined') {
      if (typeof TileMaps === 'undefined') TileMaps = {};
      TileMaps[name] = data;
   } else {
      onTileMapLoaded(name, data);
   }
   if (typeof module === 'object' && module && module.exports) {
      module.exports = data;
   }
})("collision",
   {
      "compressionlevel": -1,
      "height": 9,
      "infinite": false,
      "layers": [
         {
            "data": [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
            "height": 9,
            "id": 5,
            "name": "Background",
            "opacity": 1,
            "type": "tilelayer",
            "visible": true,
            "width": 16,
            "x": 0,
            "y": 0
         },
         {
            "data": [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 27, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 28, 41,
               41, 42, 135, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 137, 40, 41,
               41, 42, 154, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 156, 40, 41,
               41, 42, 173, 174, 174, 174, 174, 174, 174, 174, 174, 174, 174, 175, 40, 41,
               41, 46, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 47, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
               41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
            "height": 9,
            "id": 1,
            "name": "Tiles",
            "opacity": 1,
            "type": "tilelayer",
            "visible": true,
            "width": 16,
            "x": 0,
            "y": 0
         },
         {
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 271, 272, 271, 272, 271, 272, 271, 272, 271, 272, 0, 0, 0, 0,
               0, 0, 278, 279, 278, 279, 278, 279, 278, 279, 278, 279, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 9,
            "id": 4,
            "name": "Decorations",
            "opacity": 1,
            "type": "tilelayer",
            "visible": true,
            "width": 16,
            "x": 0,
            "y": 0
         },
         {
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
               0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
               0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
               0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
               0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 9,
            "id": 2,
            "name": "Collisions",
            "opacity": 0.19,
            "type": "tilelayer",
            "visible": true,
            "width": 16,
            "x": 0,
            "y": 0
         },
         {
            "draworder": "topdown",
            "id": 3,
            "name": "Misc",
            "objects": [
               {
                  "class": "",
                  "gid": 291,
                  "height": 32,
                  "id": 23,
                  "name": "",
                  "rotation": 0,
                  "visible": true,
                  "width": 44,
                  "x": 149.369,
                  "y": 384.81
               },
               {
                  "class": "",
                  "gid": 291,
                  "height": 32,
                  "id": 24,
                  "name": "",
                  "rotation": 0,
                  "visible": true,
                  "width": 44,
                  "x": 127.975,
                  "y": 384.81
               },
               {
                  "class": "",
                  "gid": 291,
                  "height": 32,
                  "id": 25,
                  "name": "",
                  "rotation": 0,
                  "visible": true,
                  "width": 44,
                  "x": 138.672,
                  "y": 354.058
               },
               {
                  "class": "",
                  "height": 1.51103,
                  "id": 27,
                  "name": "",
                  "rotation": 0,
                  "visible": true,
                  "width": 0,
                  "x": 376.247,
                  "y": 604.412
               }],
            "opacity": 1,
            "type": "objectgroup",
            "visible": true,
            "x": 0,
            "y": 0
         }],
      "nextlayerid": 6,
      "nextobjectid": 28,
      "orientation": "orthogonal",
      "renderorder": "right-down",
      "tiledversion": "1.9.2",
      "tileheight": 64,
      "tilesets": [
         {
            "firstgid": 1,
            "source": "C:\/Users\/Bigbe\/Desktop\/tiled\/tilesets\/Main.tsx"
         },
         {
            "firstgid": 248,
            "source": "C:\/Users\/Bigbe\/Desktop\/tiled\/tilesets\/Decorations.tsx"
         },
         {
            "firstgid": 290,
            "source": "C:\/Users\/Bigbe\/Desktop\/tiled\/tilesets\/Misc.tsx"
         }],
      "tilewidth": 64,
      "type": "map",
      "version": "1.9",
      "width": 16
   });