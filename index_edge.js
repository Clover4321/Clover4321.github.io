/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'_4_',
            type:'image',
            rect:['-374px','-552px','1786px','1857px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background.jpg",'-0.18px','0.2px','2020px','2100px']
         },
         {
            id:'Image',
            type:'image',
            rect:['0px','511px','1054px','257px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mountain.png",'50%','50%','1035.05px','257px']
         },
         {
            id:'card',
            type:'rect',
            rect:['395px','125px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'card',
            symbolName:'card'
         }
         ]
      },
   states: {
      "Base State": {
         "${__4_}": [
            ["style", "top", '-552px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1871px'],
            ["style", "background-position", [-0.18,0.2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-374px'],
            ["style", "width", '1800px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Image}": [
            ["style", "top", '511px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '257px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1054px']
         ],
         "${_card}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '125px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '395px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid125", tween: [ "transform", "${__4_}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid38", tween: [ "transform", "${_card}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid40", tween: [ "transform", "${_card}", "scaleX", '1', { fromValue: '1.05'}], position: 125, duration: 125 },
            { id: "eid39", tween: [ "transform", "${_card}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid41", tween: [ "transform", "${_card}", "scaleY", '1', { fromValue: '1.05'}], position: 125, duration: 125 }         ]
      }
   }
},
"card": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['22px','57px','195px','327px','auto','auto'],
      id: 'Image3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/card.png','0px','0px']
   },
   {
      rect: ['62px','115px','116px','106px','auto','auto'],
      transform: [[],['-6']],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(255,255,255,1.00)','500','none',''],
      id: 'Text',
      text: 'Click<br>Me~',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['-84px','-17px','401px','508px','auto','auto'],
      id: 'back_end_card3',
      transform: [[],[],[],['0']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/back_end_card3.png','0px','0px']
   },
   {
      rect: ['-916px','33px','907px','336px','auto','auto'],
      align: 'center',
      font: ['Arial Black, Gadget, sans-serif',100,'rgba(255,255,255,1.00)','700','none','normal'],
      id: 'Text3',
      text: 'Happy<br>April Fool\'s Day!',
      textShadow: ['rgba(0,0,0,0.65)',5,6,3],
      type: 'text'
   },
   {
      rect: ['-410px','-173px','1048px','1614px','auto','auto'],
      id: 'words3',
      transform: [[],[],[],['0','0']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/words.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_words3}": [
            ["style", "top", '-193px'],
            ["transform", "scaleY", '0'],
            ["style", "height", '1614px'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '-410px'],
            ["style", "width", '1048px']
         ],
         "${_Image3}": [
            ["style", "top", '57px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '327px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '22px'],
            ["style", "width", '195px']
         ],
         "${_Text}": [
            ["transform", "rotateZ", '-6deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '62px'],
            ["style", "font-size", '44px'],
            ["style", "top", '115px'],
            ["style", "text-align", 'center'],
            ["style", "width", '116px'],
            ["style", "height", '106px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '441px'],
            ["style", "width", '263px']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '5px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-916px'],
            ["style", "font-size", '0px'],
            ["style", "top", '33px'],
            ["subproperty", "textShadow.offsetV", '6px'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["transform", "scaleX", '0'],
            ["style", "width", '2071px']
         ],
         "${_back_end_card3}": [
            ["style", "top", '33px'],
            ["style", "height", '508px'],
            ["style", "background-size", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["style", "left", '-69px'],
            ["style", "width", '401px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         timeline: [
            { id: "eid58", tween: [ "style", "${_back_end_card3}", "left", '-69px', { fromValue: '-69px'}], position: 1250, duration: 0, easing: "easeInQuad" },
            { id: "eid184", tween: [ "style", "${_words3}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_back_end_card3}", "opacity", '1', { fromValue: '1'}], position: 250, duration: 0, easing: "easeInQuart" },
            { id: "eid99", tween: [ "style", "${_Text3}", "font-size", '100px', { fromValue: '0px'}], position: 250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid128", tween: [ "style", "${_Text3}", "font-size", '200px', { fromValue: '100px'}], position: 3000, duration: 500, easing: "easeOutQuad" },
            { id: "eid193", tween: [ "style", "${_words3}", "top", '-967px', { fromValue: '-193px'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "transform", "${_back_end_card3}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 111, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "transform", "${_back_end_card3}", "scaleX", '-1', { fromValue: '1'}], position: 361, duration: 111, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "transform", "${_back_end_card3}", "scaleX", '1', { fromValue: '-1'}], position: 472, duration: 111, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "transform", "${_back_end_card3}", "scaleX", '-1', { fromValue: '1'}], position: 583, duration: 111, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "transform", "${_back_end_card3}", "scaleX", '1', { fromValue: '-1'}], position: 694, duration: 111, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "transform", "${_back_end_card3}", "scaleX", '-1', { fromValue: '1'}], position: 806, duration: 111, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "transform", "${_back_end_card3}", "scaleX", '1', { fromValue: '-1'}], position: 917, duration: 111, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "transform", "${_back_end_card3}", "scaleX", '-1', { fromValue: '1'}], position: 1028, duration: 111, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "transform", "${_back_end_card3}", "scaleX", '1', { fromValue: '-1'}], position: 1139, duration: 111, easing: "easeOutQuad" },
            { id: "eid1", tween: [ "transform", "${_Image3}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid15", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 250, duration: 0, easing: "easeInQuart" },
            { id: "eid189", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0, easing: "easeOutQuad" },
            { id: "eid135", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "transform", "${_Text}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_back_end_card3}", "top", '33px', { fromValue: '33px'}], position: 1250, duration: 0, easing: "easeInQuad" },
            { id: "eid187", tween: [ "transform", "${_words3}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "transform", "${_words3}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_back_end_card3}", "background-size", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 1000, easing: "easeInQuad" },
            { id: "eid87", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 111, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "transform", "${_Text3}", "scaleX", '-1', { fromValue: '1'}], position: 361, duration: 111, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '-1'}], position: 472, duration: 111, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "transform", "${_Text3}", "scaleX", '-1', { fromValue: '1'}], position: 583, duration: 111, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '-1'}], position: 694, duration: 111, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "transform", "${_Text3}", "scaleX", '-1', { fromValue: '1'}], position: 806, duration: 111, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '-1'}], position: 917, duration: 111, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "transform", "${_Text3}", "scaleX", '-1', { fromValue: '1'}], position: 1028, duration: 111, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '-1'}], position: 1139, duration: 111, easing: "easeOutQuad" }         ]
      }
   }
},
"first": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','508px','53px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1.00)','500','none','normal'],
      id: 'Text4',
      text: '亲爱的前程老人：',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['96px','67px','280px','68px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text5',
      text: '您好！',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['77px','144px','976px','216px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text8',
      text: '        值此愚人佳节来临之际，复旦大学前程协会全体成员向您送来最诚挚的问候。尽管对于前程而言，这并不是一个特别的日子——在曾经的岁月里，因为有您，愚人节我们每天都过。',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['77px','388px','976px','204px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text9',
      text: '作为一名前程人，您曾以谆谆教诲告诉我们难得糊涂，您曾也身体力行教会我们吃亏是福，您更用坚毅执着为我们演示现代版愚公移山。感谢您为前程而糊涂而吃亏，感谢您对愚人精神的发扬！',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '592px'],
            ["style", "width", '1053px']
         ],
         "${_Text5}": [
            ["style", "left", '96px'],
            ["style", "top", '67px']
         ],
         "${_Text9}": [
            ["style", "height", '204px'],
            ["style", "top", '388px'],
            ["style", "left", '77px'],
            ["style", "width", '976px']
         ],
         "${_Text8}": [
            ["style", "top", '144px'],
            ["style", "text-align", 'left'],
            ["style", "height", '216px'],
            ["style", "left", '77px'],
            ["style", "width", '976px']
         ],
         "${_Text4}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: false,
         timeline: [
            { id: "eid148", tween: [ "style", "${_Text4}", "left", '1056px', { fromValue: '0px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_Text4}", "left", '2096px', { fromValue: '1056px'}], position: 7000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid147", tween: [ "style", "${_Text9}", "top", '384px', { fromValue: '388px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid149", tween: [ "style", "${_Text4}", "top", '-4px', { fromValue: '0px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_Text5}", "left", '1152px', { fromValue: '96px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid151", tween: [ "style", "${_Text5}", "left", '2192px', { fromValue: '1152px'}], position: 7000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid145", tween: [ "style", "${_Text5}", "top", '63px', { fromValue: '67px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_Text8}", "top", '140px', { fromValue: '144px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_Text8}", "left", '1133px', { fromValue: '77px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid150", tween: [ "style", "${_Text8}", "left", '2173px', { fromValue: '1133px'}], position: 7000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_Text9}", "left", '1133px', { fromValue: '77px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_Text9}", "left", '2173px', { fromValue: '1133px'}], position: 7000, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"second": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['8px','121px','930px','132px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text12',
      text: '也许我们曾为您唱过几支送别歌谣，纵使它常常跑音、跑调和跑感情；',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','930px','101px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text10',
      text: '也许前程曾给您一双翅膀助您飞翔，无论它是微辣、中辣或是变态辣；',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['20px','250px','894px','101px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text13',
      text: '但我们一直深深地牵挂着您——',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','330px','914px','101px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text14',
      text: '不是挂念着那一对翅，而是记着那一段情；',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['2px','420px','930px','101px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text15',
      text: '不是害怕丢那一次脸，而是念着那一个人。',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text15}": [
            ["style", "top", '420px'],
            ["style", "left", '2px']
         ],
         "${_Text12}": [
            ["style", "top", '121px'],
            ["style", "left", '8px'],
            ["style", "width", '930px']
         ],
         "${_Text13}": [
            ["style", "left", '20px'],
            ["style", "top", '250px']
         ],
         "${symbolSelector}": [
            ["style", "height", '521px'],
            ["style", "width", '938px']
         ],
         "${_Text14}": [
            ["style", "left", '0px'],
            ["style", "top", '330px']
         ],
         "${_Text10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13000,
         autoPlay: false,
         timeline: [
            { id: "eid155", tween: [ "style", "${_Text12}", "top", '118px', { fromValue: '121px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid164", tween: [ "style", "${_Text14}", "left", '1018px', { fromValue: '0px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid171", tween: [ "style", "${_Text14}", "left", '2036px', { fromValue: '1018px'}], position: 12000, duration: 1000, easing: "easeInCubic" },
            { id: "eid165", tween: [ "style", "${_Text14}", "top", '327px', { fromValue: '330px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid156", tween: [ "style", "${_Text13}", "left", '1038px', { fromValue: '20px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid167", tween: [ "style", "${_Text13}", "left", '2056px', { fromValue: '1038px'}], position: 12000, duration: 1000, easing: "easeInCubic" },
            { id: "eid154", tween: [ "style", "${_Text12}", "left", '1026px', { fromValue: '8px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid166", tween: [ "style", "${_Text12}", "left", '2044px', { fromValue: '1026px'}], position: 12000, duration: 1000, easing: "easeInCubic" },
            { id: "eid161", tween: [ "style", "${_Text10}", "top", '-3px', { fromValue: '0px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid160", tween: [ "style", "${_Text10}", "left", '1018px', { fromValue: '0px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid169", tween: [ "style", "${_Text10}", "left", '2036px', { fromValue: '1018px'}], position: 12000, duration: 1000, easing: "easeInCubic" },
            { id: "eid163", tween: [ "style", "${_Text15}", "top", '417px', { fromValue: '420px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid162", tween: [ "style", "${_Text15}", "left", '1020px', { fromValue: '2px'}], position: 7000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid170", tween: [ "style", "${_Text15}", "left", '2038px', { fromValue: '1020px'}], position: 12000, duration: 1000, easing: "easeInCubic" },
            { id: "eid157", tween: [ "style", "${_Text13}", "top", '247px', { fromValue: '250px'}], position: 7000, duration: 1000, easing: "easeOutQuart" }         ]
      }
   }
},
"third": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','938px','304px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text16',
      text: '也许您今天难免会遇上一堆恶意骚扰、故意发错的邮件，但这张海报不在其列。因为这是一张只有前程人才能看见的海报，是愚人节里唯一不愚人的节目；它不似那皇帝的新衣，但却充满着家的暖意。',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','304px','921px','304px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',44,'rgba(0,0,0,1)','500','none','normal'],
      id: 'Text17',
      text: '再次感激那些“愚您同乐”的时光。我们愿真诚地祝福您——在未来的日子里，智也罢愚也罢，愿您把快乐当作第一要素，成为一个幸福的“傻瓜”；也愿您有时间常回家看看，让我们继续与您同愚同乐！',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text17}": [
            ["style", "top", '304px'],
            ["style", "left", '0px'],
            ["style", "width", '921px']
         ],
         "${_Text16}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "text-align", 'left'],
            ["style", "width", '938px']
         ],
         "${symbolSelector}": [
            ["style", "height", '608px'],
            ["style", "width", '938px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16000,
         autoPlay: false,
         timeline: [
            { id: "eid172", tween: [ "style", "${_Text16}", "left", '1030px', { fromValue: '0px'}], position: 12000, duration: 1000, easing: "easeOutCubic" },
            { id: "eid174", tween: [ "style", "${_Text16}", "left", '2048px', { fromValue: '1030px'}], position: 15000, duration: 1000, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_Text17}", "left", '1030px', { fromValue: '0px'}], position: 12000, duration: 1000, easing: "easeOutCubic" },
            { id: "eid175", tween: [ "style", "${_Text17}", "left", '2048px', { fromValue: '1030px'}], position: 15000, duration: 1000, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-101902818");
