(this["webpackJsonpdata-visualisation-test"]=this["webpackJsonpdata-visualisation-test"]||[]).push([[0],{19:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var o,i,a=e(0),c=e.n(a),r=e(10),l=e.n(r),s=(e(19),e(2)),u=e(6),d=e.n(u),h=e(11),b=e.n(h),f=e(3),g=e(1),p=f.a.header(o||(o=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #282c34;\n  min-height: 10vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),x=function(){return Object(g.jsx)(p,{children:"Data visualisation tool"})},j=e(8),m=function(t,n){return(t[n]||[]).map((function(t,n){return[Date.now()+864e5*n,t]}))},v={DM:{colour:"124, 181, 236"},TV:{colour:"67, 67, 72"},OOH:{colour:"144, 237, 125"},PPC:{colour:"247, 163, 92"}},O=function(t){var n;return(null===(n=v[t])||void 0===n?void 0:n.colour)||"200, 100, 150"},y=f.a.div(i||(i=Object(s.a)(["\n  text-align: center;\n  background-color: teal;\n  height: 100vh;\n"]))),C=Object.keys(j),k=function(){var t={chart:{zoomType:"x"},title:{text:"Stock data"},tooltip:{backgroundColor:"rgba(169, 222, 183, 0.75)",borderColor:"rgb(95, 186, 119)"},credits:{enabled:!1},xAxis:{categories:"datetime",labels:{format:"{value: %Y-%m-%d}"}},series:C.map((function(t){return{name:t,type:"area",data:m(j,t),gapSize:5,tooltip:{valueDecimals:2},fillOpacity:.75,fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgb(".concat(O(t),")")],[1,"rgba(".concat(O(t),", 0.1)")]]},lineWidth:.75,threshold:null}}))};return Object(g.jsxs)(y,{children:[Object(g.jsx)(x,{}),Object(g.jsx)(b.a,{highcharts:d.a,options:t})]})},D=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),o(t),i(t),a(t),c(t)}))};l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),D()},8:function(t){t.exports=JSON.parse('{"DM":[0,0,0,0,123,0,0,45,0,0,0,43,0,123,0,0,43,0,0,0,0,43,0,0,0,43,0,0,0,0,32,0,0,0,54,0,0,0,232,32,0,212,0,0,43,0,23,0,0,0,12,0],"TV":[52.2909,26.4449,16.7054,8.7704,3.5397,2.7876,6.7211,2.8077,0.7437,1.0504,1.6137,0.6969,0.5165,0.4017,0.239,0.2001,0.1516,0.0348,0.0443,0.0286,0.0217,0.0181,0.0122,0.0131,0.0031,0.0065,16686.9304,12610.8165,49872.3664,21321.155,33705.2063,54887.3542,32077.976,17994.7266,15847.4785,24065.34,7971.773,3930.3123,3294.6206,1925.8107,2113.6292,2353.2807,448.5209,1307.2341,343.6484,567.8189,405.3052,79.4946,212.0314,81.9343,100.1345,61.209],"OOH":[0,0,0,0,0,213,0,43,0,0,0,0,0,0,0,0,0,0,40,0,0,0,60,0,0,0,0,100,0,0,0,0,0,0,65,0,0,78,0,0,90,0,0,0,12,0,0,43,0,0,0,0],"PPC":[5613.5638,4018.1524,2782.8912,2223.0685,859.3159,1092.8524,6106.947,2236.1713,811.9827,1642.5207,5930.5772,2876.2958,3231.4032,3190.6772,2563.7517,4262.5525,4031.1007,682.8778,2327.1964,2100.0363,2425.7081,2369.4146,3155.9515,2829.6594,918.8314,3467.2555,3559.1161,1466.975,4802.0379,1910.0191,2593.348,4772.5789,2503.5062,1633.5984,1994.0311,5839.1324,2152.2181,902.1712,1233.78,1399.3437,2307.5043,3974.9305,942.2388,4584.5575,1802.5456,4606.8556,5108.2835,1111.4571,5088.5189,2394.1285,4773.9491,3483.375]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.fe68310f.chunk.js.map