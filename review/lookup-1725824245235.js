(function(window, undefined) {
  var dictionary = {
    "5751631f-e299-4b29-9f19-ff4c385ef126": "documents",
    "0d89672b-d346-47b2-a680-2f915b34ae39": "Screen 2",
    "7f70a889-8fdb-4352-895f-b12b26742640": "Student Info",
    "9aab5479-3824-4fc9-b48e-b25e525eabb6": "Screen 3",
    "b612266f-1d17-4dc9-b143-19d283898509": "Settings",
    "946981d4-70aa-4c8c-abd2-20ae31222f5f": "chat bot ai",
    "8a4bc014-af33-41a1-afca-c8fccbff7fff": "Screen 4",
    "f1dc5438-0f0e-4dc5-bf1a-16f555b6162b": "optional",
    "2b376fa4-5221-490c-a61d-5b3f3ceae457": "teachers_1",
    "2d0cf8f0-c503-4ba8-bed8-c234f76a4549": "calendar",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);