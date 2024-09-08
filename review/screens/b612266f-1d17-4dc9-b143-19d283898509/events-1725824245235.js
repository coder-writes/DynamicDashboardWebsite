jQuery("#simulation")
  .on("click", ".s-b612266f-1d17-4dc9-b143-19d283898509 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 span",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24","#s-Group_20","#s-Group_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_14 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24","#s-Group_20","#s-Group_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_12 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_14 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_4" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_4" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_4" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_4" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24","#s-Group_20","#s-Group_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_14 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_12 > .borderLayer",
                  "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9aab5479-3824-4fc9-b48e-b25e525eabb6",
                    "transition": {
                      "type": "fade",
                      "duration": 900
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9aab5479-3824-4fc9-b48e-b25e525eabb6",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F0F4F8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F0F4F8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F0F4F8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D6EFD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6B9FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_21 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_21 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6B9FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_22 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_22 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6B9FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_23 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_23 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6B9FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_20 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_20 span" ],
                    "attributes": {
                      "color": "#212529"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ null ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-b612266f-1d17-4dc9-b143-19d283898509 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Select_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#s-Group_13" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180.0"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Select_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#s-Group_16" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180.0"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("focusin", ".s-b612266f-1d17-4dc9-b143-19d283898509 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_8" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_8 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_9" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_9 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_10 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_17 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_18 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_19 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-b612266f-1d17-4dc9-b143-19d283898509 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_8" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_8 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_9" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_9 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_10 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_17 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_18 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_19 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b612266f-1d17-4dc9-b143-19d283898509 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Select_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Select_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Select_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_2 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_2 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_2 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 .s-Select_2 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Select_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Check_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Input_text_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_2" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_1" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_3" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Text_4" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Path_4" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Path_5" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Path_6" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-b612266f-1d17-4dc9-b143-19d283898509 #s-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b612266f-1d17-4dc9-b143-19d283898509 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Select_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Select_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Check_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    }
  });