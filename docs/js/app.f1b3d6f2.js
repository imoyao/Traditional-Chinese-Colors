(function(r){function c(c){for(var e,l,t=c[0],a=c[1],m=c[2],g=0,i=[];g<t.length;g++)l=t[g],n[l]&&i.push(n[l][0]),n[l]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e]);f&&f(c);while(i.length)i.shift()();return b.push.apply(b,m||[]),o()}function o(){for(var r,c=0;c<b.length;c++){for(var o=b[c],e=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(e=!1)}e&&(b.splice(c--,1),r=t(t.s=o[0]))}return r}var e={},n={app:0},b=[];function l(r){return t.p+"js/"+({about:"about"}[r]||r)+"."+{about:"9f8037cf"}[r]+".js"}function t(c){if(e[c])return e[c].exports;var o=e[c]={i:c,l:!1,exports:{}};return r[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.e=function(r){var c=[],o=n[r];if(0!==o)if(o)c.push(o[2]);else{var e=new Promise(function(c,e){o=n[r]=[c,e]});c.push(o[2]=e);var b,a=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,t.nc&&m.setAttribute("nonce",t.nc),m.src=l(r),b=function(c){m.onerror=m.onload=null,clearTimeout(g);var o=n[r];if(0!==o){if(o){var e=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src,l=new Error("Loading chunk "+r+" failed.\n("+e+": "+b+")");l.type=e,l.request=b,o[1](l)}n[r]=void 0}};var g=setTimeout(function(){b({type:"timeout",target:m})},12e4);m.onerror=m.onload=b,a.appendChild(m)}return Promise.all(c)},t.m=r,t.c=e,t.d=function(r,c,o){t.o(r,c)||Object.defineProperty(r,c,{enumerable:!0,get:o})},t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,c){if(1&c&&(r=t(r)),8&c)return r;if(4&c&&"object"===typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&c&&"string"!=typeof r)for(var e in r)t.d(o,e,function(c){return r[c]}.bind(null,e));return o},t.n=function(r){var c=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(c,"a",c),c},t.o=function(r,c){return Object.prototype.hasOwnProperty.call(r,c)},t.p="/nippon-color/",t.oe=function(r){throw console.error(r),r};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],m=a.push.bind(a);a.push=c,a=a.slice();for(var g=0;g<a.length;g++)c(a[g]);var f=m;b.push([0,"chunk-vendors"]),o()})({0:function(r,c,o){r.exports=o("56d7")},"11ac":function(r,c,o){},2689:function(r,c,o){"use strict";var e=o("f28c"),n=o.n(e);n.a},2856:function(r,c,o){},"470d":function(r,c,o){},"56d7":function(r,c,o){"use strict";o.r(c);o("cadf"),o("551c"),o("097d");var e=o("2b0e"),n=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},b=[],l={mounted:function(){}},t=l,a=(o("5c0b"),o("2877")),m=Object(a["a"])(t,n,b,!1,null,null,null);m.options.__file="App.vue";var g=m.exports,f=o("8c4f"),i=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("div",{staticClass:"home"},[o("div",{staticClass:"display",class:{"color-bright":"b"===r.colorSelected.f},style:"background-color:#"+r.colorSelected.rgb+";"},[o("CopyButton",{staticClass:"copy",attrs:{"fill-color":r.colorSelected.f,copied:r.isCopied},nativeOn:{click:function(c){r.copy(r.colorSelected.rgb)}}}),o("ShareButton",{staticClass:"share",attrs:{"fill-color":r.colorSelected.f},nativeOn:{click:function(c){r.share(r.colorSelected.name)}}}),o("RandomButton",{staticClass:"random",attrs:{"fill-color":r.colorSelected.f},nativeOn:{click:function(c){return r.random(c)}}}),o("ColorSeriesPicker",{staticClass:"series",attrs:{"border-color":r.colorSelected.f},on:{colorChange:r.changeColorSeries}}),o("div",{staticClass:"kanji"},[r._v("\n      "+r._s(r.colorSelected.name||"中国传统色")+"\n    ")]),o("div",{staticClass:"romaji"},[r._v("\n      "+r._s(r.colorSelected.color||"The Traditional Colors of China")+"\n    ")]),o("div",{staticClass:"rgb-block"},r._l(["r","g","b"],function(c,e){return o("div",{key:c,class:(n={"bg-bright":"b"===r.colorSelected.f},n[c]=!0,n),style:"width:"+(r.colorSelected.Drgb?r.colorSelected.Drgb[e]/255*100:0)+"%"});var n})),r.colorSelected.Drgb?o("div",{staticClass:"rgb-number"},[r._l(["R","G","B"],function(c){return[o("div",{key:c},[r._v(r._s(c))]),o("div",{key:c+"n",staticClass:"n"},[r._v("0")])]})],2):r._e(),r.colorSelected.cmyk?o("div",{staticClass:"cmyk-number"},r._l(["c","m","y","k"],function(c){return o("div",{key:c,staticClass:"n",class:(e={},e[c]=!0,e)},[r._v("0")]);var e})):r._e()],1),o("div",{staticClass:"tab-wrapper"},[o("div",{staticClass:"tab"},r._l(r.colorList,function(c){return o("ColorTab",{key:c.name,staticClass:"js-tab-item tab-item",attrs:{kanji:c.name,rgb:c.rgb},nativeOn:{click:function(o){r.changeColor(c)}}})}))])])},A=[],y=(o("7514"),o("5a72")),s=o.n(y),D=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("div",{staticClass:"card"},[o("div",{staticClass:"color-block",style:"background-color:#"+r.rgb+";"}),o("div",{staticClass:"monji-block"},[o("div",{staticClass:"kanji"},[r._v(r._s(r.kanji))]),o("div",{staticClass:"rgb"},[r._v(r._s("#"+r.rgb))])])])},d=[],u={name:"HelloWorld",props:{kanji:{type:String,default:"-"},rgb:{type:String,default:"-"}},methods:{}},k=u,I=(o("b1a4"),Object(a["a"])(k,D,d,!1,null,"3c4e81e4",null));I.options.__file="ColorTab.vue";var C=I.exports,E=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("div",{staticClass:"picker",on:{click:r.toggle}},[r._l(r.list,function(c){return o("div",{key:c.hex,staticClass:"circle",style:"border:0.1rem solid #"+("b"===r.borderColor?"fffffb":"0c0c0c")+";background-color:#"+c.hex+";z-index:"+(c.color===r.currentColor?999:1)+";",attrs:{"data-color":c.color}})}),o("div",{staticClass:"circle linear-gradient",style:"border:0.1rem solid #"+("b"===r.borderColor?"fffffb":"0c0c0c")+";z-index:"+("all"===r.currentColor?999:1)+";",attrs:{"data-color":"all"}})],2)},S=[],O={props:{borderColor:{type:String,default:"d"}},data:function(){return{isOpen:!1,anime:null,list:[{hex:"fffffb",color:"w"},{hex:"0c0c0c",color:"b"},{hex:"8A6BBE",color:"p"},{hex:"00AA90",color:"g"},{hex:"86C166",color:"c"},{hex:"F7C242",color:"y"},{hex:"CB1B45",color:"r"}],currentColor:null}},mounted:function(){},methods:{open:function(){s()({targets:document.querySelectorAll(".circle"),translateY:["0rem",function(r,c,o){return-2*c+"rem"}],duration:100,easing:"easeInSine"})},close:function(){s()({targets:document.querySelectorAll(".circle"),translateY:[function(r,c,o){return-2*c+"rem"},"0rem"],duration:100,easing:"easeInSine"})},toggle:function(r){!1===this.isOpen?(this.open(),this.isOpen=!0):(this.close(),this.$emit("colorChange",this.currentColor=r.target.dataset.color),this.isOpen=!1)}}},p=O,B=(o("c8d6"),Object(a["a"])(p,E,S,!1,null,"d67ced04",null));B.options.__file="ColorSeriesPicker.vue";var U=B.exports,h=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("svg",{class:{"fill-bright":"b"===r.fillColor},attrs:{width:"200px",height:"200.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M888.921 63.946H131.993c-38.727 0-70.412 31.686-70.412 70.412v756.929c0 38.726 31.685 70.412 70.412 70.412h756.929c38.727 0 70.412-31.686 70.412-70.412V134.358c-0.001-38.725-31.686-70.412-70.413-70.412z m-87.278 811.193c-23.901 2.074-52.149 3.118-79.025 3.118-25.694 0-50.138-0.948-68.357-2.862C501.349 859.356 413.64 771.988 413.64 635.69V341.466c0-42.132 34.15-76.28 76.28-76.28s76.279 34.149 76.279 76.28v65.382h207.046c42.13 0 76.28 34.149 76.28 76.28s-34.15 76.28-76.28 76.28H566.2v76.28c0 28.828 0 77.067 103.986 87.974 24.566 2.576 77.935 2.991 118.251-0.511 42.056-3.479 78.951 27.425 82.596 69.396 3.645 41.973-27.423 78.952-69.39 82.592z"}})])},v=[],K={props:{fillColor:{type:String,default:"d"}}},H=K,N=(o("f560"),Object(a["a"])(H,h,v,!1,null,null,null));N.options.__file="ShareButton.vue";var M=N.exports,F=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("svg",{class:{"fill-bright":"b"===r.fillColor},attrs:{width:"200px",height:"200.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r.copied?o("path",{attrs:{d:"M512 0C229.216 0 0 229.248 0 512c0 282.784 229.216 512 512 512 282.752 0 512-229.216 512-512 0-282.752-229.248-512-512-512z m292.608 357.024l-320 384c-12.128 14.56-30.08 23.008-49.024 23.072h-0.128a63.936 63.936 0 0 1-48.992-22.88l-167.52-199.488a64 64 0 1 1 97.952-82.368l118.336 140.96 271.04-325.248a64.032 64.032 0 0 1 98.336 81.952z"}}):o("path",{attrs:{d:"M638.596211 191.936191q30.628116 0 54.62014 13.272183t41.347956 32.66999 26.544367 41.858425 9.188435 39.81655l0 576.829511q0 29.607178-11.740778 53.088734t-30.628116 39.81655-42.368893 25.52343-46.963111 9.188435l-503.322034 0q-19.397807 0-42.368893-11.230309t-42.879362-29.607178-33.180459-42.368893-13.272183-48.494516l0-568.662014q0-21.439681 10.209372-44.410768t26.544367-42.368893 37.774676-32.159521 44.921236-12.761715l515.57328 0zM578.360917 830.021934q26.544367 0 45.431705-18.376869t18.887338-44.921236-18.887338-45.431705-45.431705-18.887338l-382.851446 0q-26.544367 0-45.431705 18.887338t-18.887338 45.431705 18.887338 44.921236 45.431705 18.376869l382.851446 0zM578.360917 574.787637q26.544367 0 45.431705-18.376869t18.887338-44.921236-18.887338-45.431705-45.431705-18.887338l-382.851446 0q-26.544367 0-45.431705 18.887338t-18.887338 45.431705 18.887338 44.921236 45.431705 18.376869l382.851446 0zM759.0668 0q43.900299 0 80.654038 26.033898t63.808574 64.319043 42.368893 82.695912 15.314058 81.164506l0 542.117647q0 21.439681-12.761715 39.306082t-31.138584 30.628116-39.81655 20.418744-39.81655 7.657029l-4.083749 0 0-609.499501q-8.167498-70.444666-43.900299-108.219342t-94.947159-49.004985l-498.217348 0q1.020937-2.041874 1.020937-7.14656 0-20.418744 12.251246-41.858425t32.159521-38.795613 44.410768-28.586241 49.004985-11.230309l423.688933 0z"}})])},R=[],T={props:{fillColor:{type:String,default:"d"},copied:{type:Boolean,default:!1}}},w=T,_=(o("a004"),Object(a["a"])(w,F,R,!1,null,null,null));_.options.__file="CopyButton.vue";var x=_.exports,G=function(){var r=this,c=r.$createElement,o=r._self._c||c;return o("svg",{class:{"fill-bright":"b"===r.fillColor},attrs:{width:"200px",height:"200.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M448.836 832.527l-52.642 0c-151.843-24.867-268.081-157.088-268.081-315.97 0-53.213 13.669-103.029 36.737-147.191l39.273 54.411c28.576 39.613 90.226 28.569 103.319-18.487l31.278-112.478 43.143-155.122c10.346-37.191-17.623-73.979-56.186-73.917l-152.09 0.211L58.399 64.152c-47.46 0.076-74.915 53.878-47.121 92.389l72.256 100.16C31.188 330.002 0.151 419.56 0.151 516.557c0 224.086 164.321 409.775 378.939 442.944 5.867 0.903 11.549 0.672 17.103-0.052l0 0.775 52.641 0c34.88 0 63.168-28.301 63.168-63.206l0-1.288C512.003 860.828 483.716 832.527 448.836 832.527zM1012.729 867.458l-72.264-100.142c52.348-73.313 83.384-162.885 83.384-259.869 0-224.085-164.308-409.782-378.938-442.957-5.861-0.904-11.55-0.667-17.104 0.07l0-0.788-52.636 0c-34.886 0-63.168 28.294-63.168 63.211l0 1.281c0 34.917 28.281 63.225 63.168 63.225l52.636 0c151.843 24.854 268.087 157.082 268.087 315.957 0 53.201-13.675 103.024-36.736 147.192l-39.268-54.437c-28.582-39.588-90.237-28.557-103.325 18.507l-31.278 112.472-43.149 155.147c-10.345 37.173 17.623 73.955 56.186 73.897l152.092-0.205 115.193-0.173C1013.068 959.777 1040.517 905.964 1012.729 867.458z"}})])},Y=[],Z={props:{fillColor:{type:String,default:"d"}}},j=Z,q=(o("2689"),Object(a["a"])(j,G,Y,!1,null,null,null));q.options.__file="RandomButton.vue";var J=q.exports,W=[{name:"撫子",cmyk:"002043003000",rgb:"DC9FB4",color:"NADESHIKO",c:"r",f:"d",Drgb:[220,159,180]},{name:"紅梅",cmyk:"000073024000",rgb:"E16B8C",color:"KOHBAI",c:"r",f:"d",Drgb:[225,107,140]},{name:"蘇芳",cmyk:"051093058010",rgb:"8E354A",color:"SUOH",c:"r",f:"b",Drgb:[142,53,74]},{name:"退紅",cmyk:"000031009000",rgb:"F8C3CD",color:"TAIKOH",c:"r",f:"d",Drgb:[248,195,205]},{name:"一斥染",cmyk:"000048015000",rgb:"F4A7B9",color:"IKKONZOME",c:"r",f:"d",Drgb:[244,167,185]},{name:"桑染",cmyk:"069086065035",rgb:"64363C",color:"KUWAZOME",c:"r",f:"b",Drgb:[100,54,60]},{name:"桃",cmyk:"000055019000",rgb:"F596AA",color:"MOMO",c:"r",f:"d",Drgb:[245,150,170]},{name:"苺",cmyk:"002070038030",rgb:"B5495B",color:"ICHIGO",c:"r",f:"b",Drgb:[181,73,91]},{name:"薄紅",cmyk:"000064026000",rgb:"E87A90",color:"USUBENI",c:"r",f:"d",Drgb:[232,122,144]},{name:"今様",cmyk:"000075038020",rgb:"D05A6E",color:"IMAYOH",c:"r",f:"d",Drgb:[208,90,110]},{name:"中紅",cmyk:"005083040000",rgb:"DB4D6D",color:"NAKABENI",c:"r",f:"d",Drgb:[219,77,109]},{name:"桜",cmyk:"000017006000",rgb:"FEDFE1",color:"SAKURA",c:"w",f:"d",Drgb:[254,223,225]},{name:"梅鼠",cmyk:"048059049000",rgb:"9E7A7A",color:"UMENEZUMI",c:"r",f:"d",Drgb:[158,122,122]},{name:"韓紅花",cmyk:"015098061000",rgb:"D0104C",color:"KARAKURENAI",c:"r",f:"b",Drgb:[208,16,76]},{name:"燕脂",cmyk:"042093068006",rgb:"9F353A",color:"ENJI",c:"r",f:"b",Drgb:[159,53,58]},{name:"紅",cmyk:"000100065010",rgb:"CB1B45",color:"KURENAI",c:"r",f:"b",Drgb:[203,27,69]},{name:"鴇",cmyk:"002045027000",rgb:"EEA9A9",color:"TOKI",c:"r",f:"d",Drgb:[238,169,169]},{name:"長春",cmyk:"025070053000",rgb:"BF6766",color:"CYOHSYUN",c:"r",f:"d",Drgb:[191,103,102]},{name:"深緋",cmyk:"054075065014",rgb:"86473F",color:"KOKIAKE",c:"r",f:"b",Drgb:[134,71,63]},{name:"桜鼠",cmyk:"034046039000",rgb:"B19693",color:"SAKURANEZUMI",c:"r",f:"d",Drgb:[177,150,147]},{name:"甚三紅",cmyk:"000065046000",rgb:"EB7A77",color:"JINZAMOMI",c:"r",f:"d",Drgb:[235,122,119]},{name:"小豆",cmyk:"048078066010",rgb:"954A45",color:"AZUKI",c:"r",f:"b",Drgb:[149,74,69]},{name:"蘇芳香",cmyk:"042070058001",rgb:"A96360",color:"SUOHKOH",c:"r",f:"b",Drgb:[169,99,96]},{name:"赤紅",cmyk:"015085068000",rgb:"CB4042",color:"AKABENI",c:"r",f:"b",Drgb:[203,64,66]},{name:"真朱",cmyk:"035085070002",rgb:"AB3B3A",color:"SHINSYU",c:"r",f:"b",Drgb:[171,59,58]},{name:"灰桜",cmyk:"002012012010",rgb:"D7C4BB",color:"HAIZAKURA",c:"r",f:"d",Drgb:[215,196,187]},{name:"栗梅",cmyk:"050078068013",rgb:"904840",color:"KURIUME",c:"r",f:"b",Drgb:[144,72,64]},{name:"海老茶",cmyk:"055077068027",rgb:"734338",color:"EBICHA",c:"r",f:"b",Drgb:[115,67,56]},{name:"銀朱",cmyk:"016086070000",rgb:"C73E3A",color:"GINSYU",c:"r",f:"b",Drgb:[199,62,58]},{name:"黒鳶",cmyk:"071074069041",rgb:"554236",color:"KUROTOBI",c:"r",f:"b",Drgb:[85,66,54]},{name:"紅鳶",cmyk:"045082072011",rgb:"994639",color:"BENITOBI",c:"r",f:"b",Drgb:[153,70,57]},{name:"曙",cmyk:"000057047000",rgb:"F19483",color:"AKEBONO",c:"r",f:"d",Drgb:[241,148,131]},{name:"紅樺",cmyk:"035087079001",rgb:"B54434",color:"BENIKABA",c:"r",f:"b",Drgb:[181,68,52]},{name:"水がき",cmyk:"030054046000",rgb:"B9887D",color:"MIZUGAKI",c:"r",f:"d",Drgb:[185,136,125]},{name:"珊瑚朱",cmyk:"000065058000",rgb:"F17C67",color:"SANGOSYU",c:"r",f:"d",Drgb:[241,124,103]},{name:"紅檜皮",cmyk:"052074070018",rgb:"884C3A",color:"BENIHIWADA",c:"r",f:"b",Drgb:[136,76,58]},{name:"猩猩緋",cmyk:"000089079000",rgb:"E83015",color:"SYOJYOHI",c:"r",f:"b",Drgb:[232,48,21]},{name:"鉛丹",cmyk:"000072063007",rgb:"D75455",color:"ENTAN",c:"r",f:"d",Drgb:[215,84,85]},{name:"芝翫茶",cmyk:"037072068000",rgb:"B55D4C",color:"SHIKANCHA",c:"r",f:"b",Drgb:[181,93,76]},{name:"檜皮",cmyk:"049073070018",rgb:"854836",color:"HIWADA",c:"r",f:"b",Drgb:[133,72,54]},{name:"柿渋",cmyk:"043072071004",rgb:"A35E47",color:"KAKISHIBU",c:"r",f:"b",Drgb:[163,94,71]},{name:"緋",cmyk:"017079074000",rgb:"CC543A",color:"AKE",c:"r",f:"b",Drgb:[204,84,58]},{name:"鳶",cmyk:"058073070026",rgb:"724832",color:"TOBI",c:"r",f:"b",Drgb:[114,72,50]},{name:"紅緋",cmyk:"000075074000",rgb:"F75C2F",color:"BENIHI",c:"r",f:"d",Drgb:[247,92,47]},{name:"栗皮茶",cmyk:"058074072030",rgb:"6A4028",color:"KURIKAWACHA",c:"r",f:"b",Drgb:[106,64,40]},{name:"弁柄",cmyk:"044074075012",rgb:"9A5034",color:"BENGARA",c:"r",f:"b",Drgb:[154,80,52]},{name:"照柿",cmyk:"024072072000",rgb:"C46243",color:"TERIGAKI",c:"r",f:"b",Drgb:[196,98,67]},{name:"江戸茶",cmyk:"038070071003",rgb:"AF5F3C",color:"EDOCHA",c:"r",f:"b",Drgb:[175,95,60]},{name:"洗朱",cmyk:"000054056000",rgb:"FB966E",color:"ARAISYU",c:"r",f:"d",Drgb:[251,150,110]},{name:"百塩茶",cmyk:"061070068025",rgb:"724938",color:"MOMOSHIOCHA",c:"r",f:"b",Drgb:[114,73,56]},{name:"唐茶",cmyk:"038064065000",rgb:"B47157",color:"KARACHA",c:"r",f:"b",Drgb:[180,113,87]},{name:"ときがら茶",cmyk:"010055057000",rgb:"DB8E71",color:"TOKIGARACHA",c:"r",f:"d",Drgb:[219,142,113]},{name:"黄丹",cmyk:"000072090000",rgb:"F05E1C",color:"OHNI",c:"r",f:"b",Drgb:[240,94,28]},{name:"纁",cmyk:"000065073000",rgb:"ED784A",color:"SOHI",c:"r",f:"d",Drgb:[237,120,74]},{name:"遠州茶",cmyk:"021064067000",rgb:"CA7853",color:"ENSYUCHA",c:"r",f:"d",Drgb:[202,120,83]},{name:"樺茶",cmyk:"036072076002",rgb:"B35C37",color:"KABACHA",c:"r",f:"b",Drgb:[179,92,55]},{name:"焦茶",cmyk:"068073071040",rgb:"563F2E",color:"KOGECHA",c:"r",f:"b",Drgb:[86,63,46]},{name:"赤香",cmyk:"005055060000",rgb:"E3916E",color:"AKAKOH",c:"r",f:"d",Drgb:[227,145,110]},{name:"雀茶",cmyk:"052069073015",rgb:"8F5A3C",color:"SUZUMECHA",c:"r",f:"b",Drgb:[143,90,60]},{name:"宍",cmyk:"000047050000",rgb:"F0A986",color:"SHISHI",c:"r",f:"d",Drgb:[240,169,134]},{name:"宗伝唐茶",cmyk:"048066070006",rgb:"A0674B",color:"SODENKARACHA",c:"r",f:"b",Drgb:[160,103,75]},{name:"樺",cmyk:"026070078000",rgb:"C1693C",color:"KABA",c:"r",f:"b",Drgb:[193,105,60]},{name:"深支子",cmyk:"000053065000",rgb:"FB9966",color:"KOKIKUCHINASHI",c:"r",f:"d",Drgb:[251,153,102]},{name:"胡桃",cmyk:"051056057001",rgb:"947A6D",color:"KURUMI",c:"r",f:"b",Drgb:[148,122,109]},{name:"代赭",cmyk:"038067082003",rgb:"A36336",color:"TAISYA",c:"r",f:"b",Drgb:[163,99,54]},{name:"洗柿",cmyk:"000053067000",rgb:"E79460",color:"ARAIGAKI",c:"r",f:"d",Drgb:[231,148,96]},{name:"黄櫨染",cmyk:"055068078023",rgb:"7D532C",color:"KOHROZEN",c:"r",f:"b",Drgb:[125,83,44]},{name:"赤朽葉",cmyk:"005052070014",rgb:"C78550",color:"AKAKUCHIBA",c:"r",f:"d",Drgb:[199,133,80]},{name:"礪茶",cmyk:"048066079007",rgb:"985F2A",color:"TONOCHA",c:"r",f:"b",Drgb:[152,95,42]},{name:"赤白橡",cmyk:"006042055000",rgb:"E1A679",color:"AKASHIROTSURUBAMI",c:"r",f:"d",Drgb:[225,166,121]},{name:"煎茶",cmyk:"055066075014",rgb:"855B32",color:"SENCHA",c:"r",f:"b",Drgb:[133,91,50]},{name:"萱草",cmyk:"000049072000",rgb:"FC9F4D",color:"KANZO",c:"r",f:"d",Drgb:[252,159,77]},{name:"洒落柿",cmyk:"000036053000",rgb:"FFBA84",color:"SHAREGAKI",c:"r",f:"d",Drgb:[255,186,132]},{name:"紅鬱金",cmyk:"000052080000",rgb:"E98B2A",color:"BENIUKON",c:"y",f:"d",Drgb:[233,139,42]},{name:"梅染",cmyk:"003045062000",rgb:"E9A368",color:"UMEZOME",c:"r",f:"d",Drgb:[233,163,104]},{name:"枇杷茶",cmyk:"035058075000",rgb:"B17844",color:"BIWACHA",c:"r",f:"b",Drgb:[177,120,68]},{name:"丁子茶",cmyk:"050061076009",rgb:"96632E",color:"CHOJICHA",c:"y",f:"b",Drgb:[150,99,46]},{name:"憲法染",cmyk:"076071073047",rgb:"43341B",color:"KENPOHZOME",c:"y",f:"b",Drgb:[67,52,27]},{name:"琥珀",cmyk:"020058085000",rgb:"CA7A2C",color:"KOHAKU",c:"r",f:"b",Drgb:[202,122,44]},{name:"薄柿",cmyk:"000034052000",rgb:"ECB88A",color:"USUGAKI",c:"r",f:"d",Drgb:[236,184,138]},{name:"伽羅",cmyk:"058062072016",rgb:"78552B",color:"KYARA",c:"y",f:"b",Drgb:[120,85,43]},{name:"丁子染",cmyk:"036057079000",rgb:"B07736",color:"CHOJIZOME",c:"y",f:"b",Drgb:[176,119,54]},{name:"柴染",cmyk:"050056071005",rgb:"967249",color:"FUSHIZOME",c:"y",f:"b",Drgb:[150,114,73]},{name:"朽葉",cmyk:"007049080000",rgb:"E2943B",color:"KUCHIBA",c:"y",f:"d",Drgb:[226,148,59]},{name:"金茶",cmyk:"020056089000",rgb:"C7802D",color:"KINCHA",c:"y",f:"b",Drgb:[199,128,45]},{name:"狐",cmyk:"046057080004",rgb:"9B6E23",color:"KITSUNE",c:"y",f:"b",Drgb:[155,110,35]},{name:"煤竹",cmyk:"062063073021",rgb:"6E552F",color:"SUSUTAKE",c:"y",f:"b",Drgb:[110,85,47]},{name:"薄香",cmyk:"000034060000",rgb:"EBB471",color:"USUKOH",c:"y",f:"d",Drgb:[235,180,113]},{name:"砥粉",cmyk:"005020038015",rgb:"D7B98E",color:"TONOKO",c:"y",f:"d",Drgb:[215,185,142]},{name:"銀煤竹",cmyk:"054058076010",rgb:"82663A",color:"GINSUSUTAKE",c:"y",f:"b",Drgb:[130,102,58]},{name:"黄土",cmyk:"031045066000",rgb:"B68E55",color:"OHDO",c:"y",f:"d",Drgb:[182,142,85]},{name:"白茶",cmyk:"032040057000",rgb:"BC9F77",color:"SHIRACHA",c:"y",f:"d",Drgb:[188,159,119]},{name:"媚茶",cmyk:"058059078014",rgb:"876633",color:"KOBICHA",c:"y",f:"b",Drgb:[135,102,51]},{name:"黄唐茶",cmyk:"028048083000",rgb:"C18A26",color:"KIGARACHA",c:"y",f:"b",Drgb:[193,138,38]},{name:"山吹",cmyk:"000037087000",rgb:"FFB11B",color:"YAMABUKI",c:"y",f:"d",Drgb:[255,177,27]},{name:"山吹茶",cmyk:"017044089000",rgb:"D19826",color:"YAMABUKICHA",c:"y",f:"d",Drgb:[209,152,38]},{name:"櫨染",cmyk:"008040083000",rgb:"DDA52D",color:"HAJIZOME",c:"y",f:"d",Drgb:[221,165,45]},{name:"桑茶",cmyk:"025044083000",rgb:"C99833",color:"KUWACHA",c:"y",f:"d",Drgb:[201,152,51]},{name:"玉子",cmyk:"000029074000",rgb:"F9BF45",color:"TAMAGO",c:"y",f:"d",Drgb:[249,191,69]},{name:"白橡",cmyk:"016030060000",rgb:"DCB879",color:"SHIROTSURUBAMI",c:"y",f:"d",Drgb:[220,184,121]},{name:"黄橡",cmyk:"031044077000",rgb:"BA9132",color:"KITSURUBAMI",c:"y",f:"b",Drgb:[186,145,50]},{name:"玉蜀黍",cmyk:"004029071000",rgb:"E8B647",color:"TAMAMOROKOSHI",c:"y",f:"d",Drgb:[232,182,71]},{name:"花葉",cmyk:"000025072000",rgb:"F7C242",color:"HANABA",c:"y",f:"d",Drgb:[247,194,66]},{name:"生壁",cmyk:"058056070008",rgb:"7D6C46",color:"NAMAKABE",c:"y",f:"b",Drgb:[125,108,70]},{name:"鳥の子",cmyk:"014020039000",rgb:"DAC9A6",color:"TORINOKO",c:"y",f:"d",Drgb:[218,201,166]},{name:"浅黄",cmyk:"000017053000",rgb:"FAD689",color:"USUKI",c:"y",f:"d",Drgb:[250,214,137]},{name:"黄朽葉",cmyk:"014033075000",rgb:"D9AB42",color:"KIKUCHIBA",c:"y",f:"d",Drgb:[217,171,66]},{name:"梔子",cmyk:"000025070000",rgb:"F6C555",color:"KUCHINASHI",c:"y",f:"d",Drgb:[246,197,85]},{name:"籐黄",cmyk:"000025086000",rgb:"FFC408",color:"TOHOH",c:"y",f:"d",Drgb:[255,196,8]},{name:"鬱金",cmyk:"003029088000",rgb:"EFBB24",color:"UKON",c:"y",f:"d",Drgb:[239,187,36]},{name:"芥子",cmyk:"000016070027",rgb:"CAAD5F",color:"KARASHI",c:"y",f:"d",Drgb:[202,173,95]},{name:"肥後煤竹",cmyk:"055053082007",rgb:"8D742A",color:"HIGOSUSUTAKE",c:"y",f:"b",Drgb:[141,116,42]},{name:"利休白茶",cmyk:"036033054000",rgb:"B4A582",color:"RIKYUSHIRACHA",c:"y",f:"d",Drgb:[180,165,130]},{name:"灰汁",cmyk:"058051060001",rgb:"877F6C",color:"AKU",c:"y",f:"b",Drgb:[135,127,108]},{name:"利休茶",cmyk:"057050070003",rgb:"897D55",color:"RIKYUCHA",c:"y",f:"b",Drgb:[137,125,85]},{name:"路考茶",cmyk:"064057073010",rgb:"74673E",color:"ROKOHCHA",c:"y",f:"b",Drgb:[116,103,62]},{name:"菜種油",cmyk:"046042084000",rgb:"A28C37",color:"NATANEYU",c:"y",f:"b",Drgb:[162,140,55]},{name:"鶯茶",cmyk:"064056078016",rgb:"6C6024",color:"UGUISUCHA",c:"y",f:"b",Drgb:[108,96,36]},{name:"黄海松茶",cmyk:"057048078006",rgb:"867835",color:"KIMIRUCHA",c:"y",f:"b",Drgb:[134,120,53]},{name:"海松茶",cmyk:"068059075022",rgb:"62592C",color:"MIRUCHA",c:"y",f:"b",Drgb:[98,89,44]},{name:"刈安",cmyk:"007015074000",rgb:"E9CD4C",color:"KARIYASU",c:"y",f:"d",Drgb:[233,205,76]},{name:"菜の花",cmyk:"002011075000",rgb:"F7D94C",color:"NANOHANA",c:"y",f:"d",Drgb:[247,217,76]},{name:"黄蘗",cmyk:"000005073000",rgb:"FBE251",color:"KIHADA",c:"y",f:"d",Drgb:[251,226,81]},{name:"蒸栗",cmyk:"016015052000",rgb:"D9CD90",color:"MUSHIKURI",c:"y",f:"d",Drgb:[217,205,144]},{name:"青朽葉",cmyk:"038031076000",rgb:"ADA142",color:"AOKUCHIBA",c:"y",f:"d",Drgb:[173,161,66]},{name:"女郎花",cmyk:"016009082000",rgb:"DDD23B",color:"OMINAESHI",c:"y",f:"d",Drgb:[221,210,59]},{name:"鶸茶",cmyk:"045033076000",rgb:"A5A051",color:"HIWACHA",c:"y",f:"d",Drgb:[165,160,81]},{name:"鶸",cmyk:"032015085000",rgb:"BEC23F",color:"HIWA",c:"y",f:"d",Drgb:[190,194,63]},{name:"鶯",cmyk:"067054084014",rgb:"6C6A2D",color:"UGUISU",c:"y",f:"b",Drgb:[108,106,45]},{name:"柳茶",cmyk:"052037073000",rgb:"939650",color:"YANAGICHA",c:"y",f:"b",Drgb:[147,150,80]},{name:"苔",cmyk:"062041083002",rgb:"838A2D",color:"KOKE",c:"y",f:"b",Drgb:[131,138,45]},{name:"麹塵",cmyk:"037023063000",rgb:"B1B479",color:"KIKUJIN",c:"y",f:"d",Drgb:[177,180,121]},{name:"璃寛茶",cmyk:"072058073019",rgb:"616138",color:"RIKANCHA",c:"y",f:"b",Drgb:[97,97,56]},{name:"藍媚茶",cmyk:"076061074030",rgb:"4B4E2A",color:"AIKOBICHA",c:"y",f:"b",Drgb:[75,78,42]},{name:"海松",cmyk:"072056078020",rgb:"5B622E",color:"MIRU",c:"y",f:"b",Drgb:[91,98,46]},{name:"千歳茶",cmyk:"077061070030",rgb:"4D5139",color:"SENSAICHA",c:"y",f:"b",Drgb:[77,81,57]},{name:"梅幸茶",cmyk:"057038063000",rgb:"89916B",color:"BAIKOCHA",c:"y",f:"d",Drgb:[137,145,107]},{name:"鶸萌黄",cmyk:"056013077000",rgb:"90B44B",color:"HIWAMOEGI",c:"y",f:"d",Drgb:[144,180,75]},{name:"柳染",cmyk:"056024065000",rgb:"91AD70",color:"YANAGIZOME",c:"y",f:"d",Drgb:[145,173,112]},{name:"裏柳",cmyk:"036010045000",rgb:"B5CAA0",color:"URAYANAGI",c:"y",f:"d",Drgb:[181,202,160]},{name:"岩井茶",cmyk:"069052063007",rgb:"646A58",color:"IWAICHA",c:"b",f:"b",Drgb:[100,106,88]},{name:"萌黄",cmyk:"070023086000",rgb:"7BA23F",color:"MOEGI",c:"y",f:"b",Drgb:[123,162,63]},{name:"苗",cmyk:"057001072000",rgb:"86C166",color:"NAE",c:"g",f:"d",Drgb:[134,193,102]},{name:"柳煤竹",cmyk:"076057070017",rgb:"4A593D",color:"YANAGISUSUTAKE",c:"g",f:"b",Drgb:[74,89,61]},{name:"松葉",cmyk:"080055079020",rgb:"42602D",color:"MATSUBA",c:"g",f:"b",Drgb:[66,96,45]},{name:"青丹",cmyk:"076051075012",rgb:"516E41",color:"AONI",c:"g",f:"b",Drgb:[81,110,65]},{name:"薄青",cmyk:"057019052000",rgb:"91B493",color:"USUAO",c:"g",f:"d",Drgb:[145,180,147]},{name:"柳鼠",cmyk:"061041053000",rgb:"808F7C",color:"YANAGINEZUMI",c:"b",f:"d",Drgb:[128,143,124]},{name:"常磐",cmyk:"082000078040",rgb:"1B813E",color:"TOKIWA",c:"g",f:"b",Drgb:[27,129,62]},{name:"若竹",cmyk:"068013059000",rgb:"5DAC81",color:"WAKATAKE",c:"g",f:"d",Drgb:[93,172,129]},{name:"千歳緑",cmyk:"083055069022",rgb:"36563C",color:"CHITOSEMIDORI",c:"g",f:"b",Drgb:[54,86,60]},{name:"緑",cmyk:"086036070000",rgb:"227D51",color:"MIDORI",c:"c",f:"b",Drgb:[34,125,81]},{name:"白緑",cmyk:"044000037000",rgb:"A8D8B9",color:"BYAKUROKU",c:"g",f:"d",Drgb:[168,216,185]},{name:"老竹",cmyk:"071046060002",rgb:"6A8372",color:"OITAKE",c:"g",f:"b",Drgb:[106,131,114]},{name:"木賊",cmyk:"086046070008",rgb:"2D6D4B",color:"TOKUSA",c:"g",f:"b",Drgb:[45,109,75]},{name:"御納戸茶",cmyk:"081060068022",rgb:"465D4C",color:"ONANDOCHA",c:"g",f:"b",Drgb:[70,93,76]},{name:"緑青",cmyk:"083023063000",rgb:"24936E",color:"ROKUSYOH",c:"c",f:"b",Drgb:[36,147,110]},{name:"錆青磁",cmyk:"058030045000",rgb:"86A697",color:"SABISEIJI",c:"c",f:"d",Drgb:[134,166,151]},{name:"青竹",cmyk:"092028067000",rgb:"00896C",color:"AOTAKE",c:"c",f:"b",Drgb:[0,137,108]},{name:"ビロード",cmyk:"093054071020",rgb:"096148",color:"VELUDO",c:"c",f:"b",Drgb:[9,97,72]},{name:"虫襖",cmyk:"089055067017",rgb:"20604F",color:"MUSHIAO",c:"c",f:"b",Drgb:[32,96,79]},{name:"藍海松茶",cmyk:"089060067030",rgb:"0F4C3A",color:"AIMIRUCHA",c:"c",f:"b",Drgb:[15,76,58]},{name:"沈香茶",cmyk:"077050057004",rgb:"4F726C",color:"TONOCHA2",c:"c",f:"b",Drgb:[79,114,108]},{name:"青緑",cmyk:"088000053000",rgb:"00AA90",color:"AOMIDORI",c:"c",f:"b",Drgb:[0,170,144]},{name:"青磁",cmyk:"061014034000",rgb:"69B0AC",color:"SEIJI",c:"c",f:"d",Drgb:[105,176,172]},{name:"鉄",cmyk:"090063066030",rgb:"26453D",color:"TETSU",c:"c",f:"b",Drgb:[38,69,61]},{name:"水浅葱",cmyk:"068010033000",rgb:"66BAB7",color:"MIZUASAGI",c:"c",f:"d",Drgb:[102,186,183]},{name:"青碧",cmyk:"085035050000",rgb:"268785",color:"SEIHEKI",c:"c",f:"b",Drgb:[38,135,133]},{name:"錆鉄御納戸",cmyk:"083059060013",rgb:"405B55",color:"SABITETSUONANDO",c:"c",f:"b",Drgb:[64,91,85]},{name:"高麗納戸",cmyk:"088058061015",rgb:"305A56",color:"KORAINANDO",c:"c",f:"b",Drgb:[48,90,86]},{name:"白群",cmyk:"052000020000",rgb:"78C2C4",color:"BYAKUGUN",c:"c",f:"d",Drgb:[120,194,196]},{name:"御召茶",cmyk:"087054054005",rgb:"376B6D",color:"OMESHICHA",c:"c",f:"b",Drgb:[55,107,109]},{name:"瓶覗",cmyk:"042000011000",rgb:"A5DEE4",color:"KAMENOZOKI",c:"c",f:"d",Drgb:[165,222,228]},{name:"深川鼠",cmyk:"063038040000",rgb:"77969A",color:"FUKAGAWANEZUMI",c:"c",f:"d",Drgb:[119,150,154]},{name:"錆浅葱",cmyk:"066030034000",rgb:"6699A1",color:"SABIASAGI",c:"c",f:"d",Drgb:[102,153,161]},{name:"水",cmyk:"055006017000",rgb:"81C7D4",color:"MIZU",c:"c",f:"d",Drgb:[129,199,212]},{name:"浅葱",cmyk:"082018027000",rgb:"33A6B8",color:"ASAGI",c:"c",f:"d",Drgb:[51,166,184]},{name:"御納戸",cmyk:"092065062025",rgb:"0C4842",color:"ONANDO",c:"c",f:"b",Drgb:[12,72,66]},{name:"藍",cmyk:"095063056017",rgb:"0D5661",color:"AI",c:"c",f:"b",Drgb:[13,86,97]},{name:"新橋",cmyk:"095031030000",rgb:"0089A7",color:"SHINBASHI",c:"c",f:"b",Drgb:[0,137,167]},{name:"錆御納戸",cmyk:"087056052006",rgb:"336774",color:"SABIONANDO",c:"c",f:"b",Drgb:[51,103,116]},{name:"鉄御納戸",cmyk:"090063059021",rgb:"255359",color:"TETSUONANDO",c:"c",f:"b",Drgb:[37,83,89]},{name:"花浅葱",cmyk:"090032023000",rgb:"1E88A8",color:"HANAASAGI",c:"c",f:"b",Drgb:[30,136,168]},{name:"藍鼠",cmyk:"078057052007",rgb:"566C73",color:"AINEZUMI",c:"c",f:"b",Drgb:[86,108,115]},{name:"舛花",cmyk:"078048042000",rgb:"577C8A",color:"MASUHANA",c:"c",f:"b",Drgb:[87,124,138]},{name:"空",cmyk:"072013007000",rgb:"58B2DC",color:"SORA",c:"c",f:"d",Drgb:[88,178,220]},{name:"熨斗目花",cmyk:"092060047004",rgb:"2B5F75",color:"NOSHIMEHANA",c:"c",f:"b",Drgb:[43,95,117]},{name:"千草",cmyk:"083031017000",rgb:"3A8FB7",color:"CHIGUSA",c:"c",f:"d",Drgb:[58,143,183]},{name:"御召御納戸",cmyk:"090063051007",rgb:"2E5C6E",color:"OMESHIONANDO",c:"c",f:"b",Drgb:[46,92,110]},{name:"縹",cmyk:"100060041002",rgb:"006284",color:"HANADA",c:"c",f:"b",Drgb:[0,98,132]},{name:"勿忘草",cmyk:"052010000000",rgb:"7DB9DE",color:"WASURENAGUSA",c:"c",f:"d",Drgb:[125,185,222]},{name:"群青",cmyk:"067021000000",rgb:"51A8DD",color:"GUNJYO",c:"c",f:"d",Drgb:[81,168,221]},{name:"露草",cmyk:"073020000000",rgb:"2EA9DF",color:"TSUYUKUSA",c:"c",f:"d",Drgb:[46,169,223]},{name:"黒橡",cmyk:"092078064048",rgb:"0B1013",color:"KUROTSURUBAMI",c:"b",f:"b",Drgb:[11,16,19]},{name:"紺",cmyk:"100085050024",rgb:"0F2540",color:"KON",c:"c",f:"b",Drgb:[15,37,64]},{name:"褐",cmyk:"100086060045",rgb:"08192D",color:"KACHI",c:"b",f:"b",Drgb:[8,25,45]},{name:"瑠璃",cmyk:"097065000000",rgb:"005CAF",color:"RURI",c:"c",f:"b",Drgb:[0,92,175]},{name:"瑠璃紺",cmyk:"100085039004",rgb:"0B346E",color:"RURIKON",c:"c",f:"b",Drgb:[11,52,110]},{name:"紅碧",cmyk:"064044000000",rgb:"7B90D2",color:"BENIMIDORI",c:"c",f:"d",Drgb:[123,144,210]},{name:"藤鼠",cmyk:"069056017000",rgb:"6E75A4",color:"FUJINEZUMI",c:"c",f:"d",Drgb:[110,117,164]},{name:"鉄紺",cmyk:"080065000077",rgb:"261E47",color:"TETSUKON",c:"c",f:"b",Drgb:[38,30,71]},{name:"紺青",cmyk:"100085015000",rgb:"113285",color:"KONJYO",c:"c",f:"b",Drgb:[17,50,133]},{name:"紅掛花",cmyk:"082070014000",rgb:"4E4F97",color:"BENIKAKEHANA",c:"c",f:"b",Drgb:[78,79,151]},{name:"紺桔梗",cmyk:"100090042012",rgb:"211E55",color:"KONKIKYO",c:"c",f:"b",Drgb:[33,30,85]},{name:"藤",cmyk:"058052000000",rgb:"8B81C3",color:"FUJI",c:"c",f:"d",Drgb:[139,129,195]},{name:"二藍",cmyk:"072067021000",rgb:"70649A",color:"FUTAAI",c:"c",f:"b",Drgb:[112,100,154]},{name:"楝",cmyk:"042042000000",rgb:"9B90C2",color:"OUCHI",c:"c",f:"d",Drgb:[155,144,194]},{name:"藤紫",cmyk:"058060000000",rgb:"8A6BBE",color:"FUJIMURASAKI",c:"c",f:"d",Drgb:[138,107,190]},{name:"桔梗",cmyk:"075075010000",rgb:"6A4C9C",color:"KIKYO",c:"c",f:"b",Drgb:[106,76,156]},{name:"紫苑",cmyk:"055058001000",rgb:"8F77B5",color:"SHION",c:"c",f:"d",Drgb:[143,119,181]},{name:"滅紫",cmyk:"082080048015",rgb:"533D5B",color:"MESSHI",c:"p",f:"b",Drgb:[83,61,91]},{name:"薄",cmyk:"043051000000",rgb:"B28FCE",color:"USU",c:"p",f:"d",Drgb:[178,143,206]},{name:"半",cmyk:"055063000000",rgb:"986DB2",color:"HASHITA",c:"p",f:"d",Drgb:[152,109,178]},{name:"江戸紫",cmyk:"060074000014",rgb:"77428D",color:"EDOMURASAKI",c:"p",f:"b",Drgb:[119,66,141]},{name:"紫紺",cmyk:"088084060045",rgb:"3C2F41",color:"SHIKON",c:"b",f:"b",Drgb:[60,47,65]},{name:"深紫",cmyk:"090093043016",rgb:"4A225D",color:"KOKIMURASAKI",c:"p",f:"b",Drgb:[74,34,93]},{name:"菫",cmyk:"074083022000",rgb:"66327C",color:"SUMIRE",c:"p",f:"b",Drgb:[102,50,124]},{name:"紫",cmyk:"081087040007",rgb:"592C63",color:"MURASAKI",c:"p",f:"b",Drgb:[89,44,99]},{name:"菖蒲",cmyk:"071087014000",rgb:"6F3381",color:"AYAME",c:"p",f:"b",Drgb:[111,51,129]},{name:"藤煤竹",cmyk:"075070057025",rgb:"574C57",color:"FUJISUSUTAKE",c:"b",f:"b",Drgb:[87,76,87]},{name:"紅藤",cmyk:"038060000000",rgb:"B481BB",color:"BENIFUJI",c:"p",f:"d",Drgb:[180,129,187]},{name:"黒紅",cmyk:"086085064050",rgb:"3F2B36",color:"KUROBENI",c:"b",f:"b",Drgb:[63,43,54]},{name:"茄子紺",cmyk:"040073010073",rgb:"572A3F",color:"NASUKON",c:"r",f:"b",Drgb:[87,42,63]},{name:"葡萄鼠",cmyk:"073077054017",rgb:"5E3D50",color:"BUDOHNEZUMI",c:"r",f:"b",Drgb:[94,61,80]},{name:"鳩羽鼠",cmyk:"068064051006",rgb:"72636E",color:"HATOBANEZUMI",c:"b",f:"b",Drgb:[114,99,110]},{name:"杜若",cmyk:"077092048021",rgb:"622954",color:"KAKITSUBATA",c:"r",f:"b",Drgb:[98,41,84]},{name:"蒲葡",cmyk:"071089048012",rgb:"6D2E5B",color:"EBIZOME",c:"r",f:"b",Drgb:[109,46,91]},{name:"牡丹",cmyk:"025091008000",rgb:"C1328E",color:"BOTAN",c:"r",f:"d",Drgb:[193,50,142]},{name:"梅紫",cmyk:"045080037000",rgb:"A8497A",color:"UMEMURASAKI",c:"r",f:"b",Drgb:[168,73,122]},{name:"似紫",cmyk:"075084062042",rgb:"562E37",color:"NISEMURASAKI",c:"r",f:"b",Drgb:[86,46,55]},{name:"躑躅",cmyk:"000080003000",rgb:"E03C8A",color:"TSUTSUJI",c:"r",f:"d",Drgb:[224,60,138]},{name:"紫鳶",cmyk:"070078061030",rgb:"60373E",color:"MURASAKITOBI",c:"r",f:"b",Drgb:[96,55,62]},{name:"白練",cmyk:"000003011000",rgb:"FCFAF2",color:"SHIRONERI",c:"w",f:"d",Drgb:[252,250,242]},{name:"胡粉",cmyk:"000000002000",rgb:"FFFFFB",color:"GOFUN",c:"w",f:"d",Drgb:[255,255,251]},{name:"白鼠",cmyk:"031023028000",rgb:"BDC0BA",color:"SHIRONEZUMI",c:"w",f:"d",Drgb:[189,192,186]},{name:"銀鼠",cmyk:"052039036000",rgb:"91989F",color:"GINNEZUMI",c:"b",f:"d",Drgb:[145,152,159]},{name:"鉛",cmyk:"008000000073",rgb:"787878",color:"NAMARI",c:"b",f:"b",Drgb:[120,120,120]},{name:"灰",cmyk:"000000000070",rgb:"828282",color:"HAI",c:"b",f:"d",Drgb:[130,130,130]},{name:"素鼠",cmyk:"065053053000",rgb:"787D7B",color:"SUNEZUMI",c:"b",f:"b",Drgb:[120,125,123]},{name:"利休鼠",cmyk:"066050054001",rgb:"707C74",color:"RIKYUNEZUMI",c:"b",f:"b",Drgb:[112,124,116]},{name:"鈍",cmyk:"005000000080",rgb:"656765",color:"NIBI",c:"b",f:"b",Drgb:[101,103,101]},{name:"青鈍",cmyk:"078063062020",rgb:"535953",color:"AONIBI",c:"b",f:"b",Drgb:[83,89,83]},{name:"溝鼠",cmyk:"078065065030",rgb:"4F4F48",color:"DOBUNEZUMI",c:"b",f:"b",Drgb:[79,79,72]},{name:"紅消鼠",cmyk:"073069063030",rgb:"52433D",color:"BENIKESHINEZUMI",c:"r",f:"b",Drgb:[82,67,61]},{name:"藍墨茶",cmyk:"086072068047",rgb:"373C38",color:"AISUMICHA",c:"b",f:"b",Drgb:[55,60,56]},{name:"檳榔子染",cmyk:"079072072050",rgb:"3A3226",color:"BINROJIZOME",c:"b",f:"b",Drgb:[58,50,38]},{name:"消炭",cmyk:"000000000088",rgb:"434343",color:"KESHIZUMI",c:"b",f:"b",Drgb:[67,67,67]},{name:"墨",cmyk:"092078073066",rgb:"1C1C1C",color:"SUMI",c:"b",f:"b",Drgb:[28,28,28]},{name:"黒",cmyk:"091084074071",rgb:"080808",color:"KURO",c:"b",f:"b",Drgb:[8,8,8]},{name:"呂",cmyk:"000000000100",rgb:"0C0C0C",color:"RO",c:"b",f:"b",Drgb:[12,12,12]}];o("1c4c"),o("ac6a");function L(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,o=null;return function(){var e=new Date,n=arguments;o||(o=0);var b=e-o;c&&b>=c&&(r.apply(n),o=e)}}function P(r){var c=r.getBoundingClientRect(),o=window.innerHeight;return c.top<=o+100}function $(r){return function(){var c=document.querySelectorAll(".js-tab-item"),o=[];Array.from(c).forEach(function(r){r.isShow=!1,!r.isShow&&P(r)&&(o.push(r),r.isShow=!0)}),r(o,!0)}}function z(r){return function(){var c=document.querySelectorAll(".js-tab-item");Array.from(c).forEach(function(c){!c.isShow&&P(c)&&(r(c),c.isShow=!0)})}}function V(r){if(navigator.clipboard)return navigator.clipboard.writeText(r);var c=document.createElement("span");c.textContent=r,c.style.whiteSpace="pre";var o=document.createElement("iframe");o.sandbox="allow-same-origin",document.body.appendChild(o);var e=o.contentWindow;e.document.body.appendChild(c);var n=e.getSelection();n||(e=window,n=e.getSelection(),document.body.appendChild(c));var b=e.document.createRange();n.removeAllRanges(),b.selectNode(c),n.addRange(b);var l=!1;try{l=e.document.execCommand("copy")}catch(r){}return n.removeAllRanges(),e.document.body.removeChild(c),document.body.removeChild(o),l?Promise.resolve():Promise.reject()}var X={name:"Home",components:{ColorTab:C,ColorSeriesPicker:U,ShareButton:M,CopyButton:x,RandomButton:J},data:function(){return{colorList:[],colorSelected:{},isCopied:!1,lastEls:null}},watch:{colorList:function(){var r=this;this.$nextTick(function(){$(r.listAnime)()})},colorSelected:function(){var r=this;this.$nextTick(function(){r.displayAnime()})},$route:function(r){this.retrieveColorAndSelect(r.query.c)}},mounted:function(){this.colorList=W,this.retrieveColorAndSelect(this.$route.query.c),document.querySelector(".tab-wrapper").addEventListener("scroll",L(z(this.listAnime))),window.addEventListener("resize",L(z(this.listAnime),1e3))},methods:{retrieveColorAndSelect:function(r){if(r){var c=this.colorList.find(function(c){return c.rgb===r});this.colorSelected=c}else this.colorSelected={rgb:"ffffff"}},changeColorSeries:function(r){document.querySelector(".tab-wrapper").scrollTop=0,this.colorList="all"===r?W:W.filter(function(c){return c.c===r}),this.colorSelected=this.colorList[0]},changeColor:function(r){this.$router.push({path:"/",query:{c:r.rgb}})},share:function(r){window.open("https://github.com/imoyao/Traditional-Chinese-Colors")},copy:function(r){var c=this;this.isCopied||(V("#".concat(r)),this.isCopied=!0,setTimeout(function(){c.isCopied=!1},1e3))},random:function(){var r=W[Math.floor(Math.random()*W.length)];this.changeColor(r)},listAnime:function(r,c){this.lastEls&&c&&s.a.remove(this.lastEls),this.lastEls=r,s()({targets:r,translateY:[250,0],opacity:[0,1],easing:"easeOutSine",delay:function(r,c,o){return 80*c}})},displayAnime:function(){var r=this,c=document.querySelectorAll(".display .kanji,.romaji"),o=document.querySelectorAll(".display .rgb-number .n"),e=document.querySelectorAll(".display .cmyk-number .n");s.a.remove([c,o,e]),s()({targets:c,translateX:[150,0],opacity:[0,1],easing:"easeOutSine"}),s()({targets:o,innerHTML:function(c,o,e){return r.colorSelected.Drgb[o]},round:1,easing:"easeOutSine"}),s()({targets:e,innerHTML:function(c,o,e){return r.colorSelected.cmyk.slice(3*o,3*(o+1))},round:1,easing:"easeOutSine"})}}},Q=X,rr=(o("cf44"),Object(a["a"])(Q,i,A,!1,null,"fe617a0c",null));rr.options.__file="Home.vue";var cr=rr.exports;e["a"].use(f["a"]);var or=new f["a"]({routes:[{path:"/",name:"home",component:cr},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),er=o("2f62");e["a"].use(er["a"]);var nr=new er["a"].Store({state:{},mutations:{},actions:{}}),br=(o("f5df"),o("9483"));Object(br["a"])("".concat("/nippon-color/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(r){console.error("Error during service worker registration:",r)}});o("f284");e["a"].config.productionTip=!1,new e["a"]({router:or,store:nr,render:function(r){return r(g)}}).$mount("#app")},"5c0b":function(r,c,o){"use strict";var e=o("2856"),n=o.n(e);n.a},"614e":function(r,c,o){},a004:function(r,c,o){"use strict";var e=o("470d"),n=o.n(e);n.a},b1a4:function(r,c,o){"use strict";var e=o("11ac"),n=o.n(e);n.a},b65c:function(r,c,o){},c8d6:function(r,c,o){"use strict";var e=o("614e"),n=o.n(e);n.a},cf44:function(r,c,o){"use strict";var e=o("f7e9"),n=o.n(e);n.a},f284:function(r,c,o){},f28c:function(r,c,o){},f560:function(r,c,o){"use strict";var e=o("b65c"),n=o.n(e);n.a},f7e9:function(r,c,o){}});
//# sourceMappingURL=app.f1b3d6f2.js.map