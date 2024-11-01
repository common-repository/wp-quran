!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(14);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(15),a=r(10);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){function r(e,t,r,n,a,c,u){try{var o=e[c](u),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var u=e.apply(t,n);function o(e){r(u,a,c,o,i,"next",e)}function i(e){r(u,a,c,o,i,"throw",e)}o(void 0)}))}}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(11),c=r(1),u=r(3),o={quranEditions:{type:"array",default:[]},surahOptions:{type:"array",default:[]},currentEdition:{type:"string",default:"fr.hamidullah"},currentSurah:{type:"string",default:"1"},currentSurahText:{type:"string",default:""},currentAyahNumberInSurah:{type:"string",default:"0"},currentAyahNumberInQuran:{type:"integer",default:0},currentAyahText:{type:"string",default:""},currentAyahTextInArabic:{type:"string",default:""},currentSurahAyahs:{type:"array",default:[]},showVerseInArabic:{type:"boolean",default:!1}},i=r(12),s=r.n(i),l=r(2),p=r.n(l),f=r(9),h=r.n(f),b=r(5),y=r.n(b),d=r(6),m=r.n(d),O=r(10),v=r.n(O),j=r(7),g=r.n(j),x=r(8),w=r.n(x),_=r(4),S=r.n(_),E=r(13);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S()(e);if(t){var a=S()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return w()(this,r)}}var P=function(e){g()(r,e);var t=A(r);function r(){return y()(this,r),t.apply(this,arguments)}return m()(r,[{key:"render",value:function(){var e=this.props,t=e.setAttributes,r=e.attributes,a=r.showVerseInArabic,o=r.currentSurahAyahs,i=e.editionSelect,s=e.surahSelect,l=e.ayahSelect;return Object(n.createElement)(E.InspectorControls,null,Object(n.createElement)(u.PanelBody,{title:"Block options"},i,s,o.length>0&&Object(n.createElement)(n.Fragment,null,l),Object(n.createElement)(u.ToggleControl,{label:Object(c.__)("Display the verse in arabic","wpquran"),help:a?Object(c.__)("Verse displayed in arabic.","wpquran"):Object(c.__)("Verse not displayed in arabic.","wpquran"),checked:a,onChange:function(e){t({showVerseInArabic:e})}})))}}]),r}(n.Component);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S()(e);if(t){var a=S()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return w()(this,r)}}var I=function(e){g()(l,e);var t,r,a,o,i,s=C(l);function l(){var e;return y()(this,l),(e=s.apply(this,arguments)).onAyahChange=e.onAyahChange.bind(v()(e)),e.getSurahOptions(),e.getQuranEditions(),e}return m()(l,[{key:"getSurahOptions",value:(i=h()(p.a.mark((function e(){var t,r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setAttributes,r=[],e.next=4,fetch("https://api.alquran.cloud/v1/surah");case 4:return n=e.sent,e.next=7,n.json();case 7:200===(a=e.sent).code&&"OK"===a.status&&(a.data.forEach((function(e){r.push({value:""+e.number,label:e.number+" - "+e.englishName+" - "+e.name})})),t({surahOptions:r}));case 9:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getQuranEditions",value:(o=h()(p.a.mark((function e(){var t,r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setAttributes,r=[],e.next=4,fetch("https://api.alquran.cloud/v1/edition");case 4:return n=e.sent,e.next=7,n.json();case 7:200===(a=e.sent).code&&"OK"===a.status&&(a.data.forEach((function(e,t){r.push(e),r[t].value=e.identifier,r[t].label=e.format+" - "+e.language+" - "+e.englishName})),t({quranEditions:r}));case 9:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"onSurahChange",value:(a=h()(p.a.mark((function e(t,r){var n,a,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=r.setAttributes)({currentSurah:t}),n({currentSurahText:r.attributes.surahOptions[t-1].label}),a=[],e.next=6,fetch("https://api.alquran.cloud/v1/surah/"+t+"/"+r.attributes.currentEdition);case 6:return c=e.sent,e.next=9,c.json();case 9:200===(u=e.sent).code&&"OK"===u.status&&(u.data.ayahs.forEach((function(e,t){a.push({value:t,verseId:e.number,label:e.text})})),n({currentSurahAyahs:a}));case 11:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"onEditionChange",value:(r=h()(p.a.mark((function e(t,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,r.setAttributes)({currentEdition:t});case 2:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"onAyahChange",value:(t=h()(p.a.mark((function e(t){var r,n,a,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.props,n=r.setAttributes,a=r.attributes,n({currentAyahText:a.currentSurahAyahs[t].label,currentAyahNumberInSurah:t}),e.next=4,fetch("https://api.alquran.cloud/v1/ayah/"+a.currentSurah+":"+ ++t+"/ar");case 4:return c=e.sent,e.next=7,c.json();case 7:200===(u=e.sent).code&&"OK"===u.status&&n({currentAyahTextInArabic:u.data.text,currentAyahNumberInQuran:u.data.number});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,r=t.attributes,a=r.surahOptions,o=r.quranEditions,i=r.currentSurah,s=r.currentEdition,l=r.currentSurahText,p=r.currentSurahAyahs,f=r.currentAyahNumberInSurah,h=r.currentAyahNumberInQuran,b=r.currentAyahText,y=r.showVerseInArabic,d=r.currentAyahTextInArabic,m=t.className,O=Object(n.createElement)(u.SelectControl,{label:Object(c.__)("Edition","wpquran"),value:s,options:o,onChange:function(t){e.onEditionChange(t,e.props)}}),v=Object(n.createElement)(u.SelectControl,{label:Object(c.__)("Surah","wpquran"),value:i,options:a,onChange:function(t){e.onSurahChange(t,e.props)}}),j=Object(n.createElement)(u.SelectControl,{label:Object(c.__)("Verse","wpquran"),value:f,options:p,onChange:this.onAyahChange}),g=Object(c.sprintf)(Object(c.__)("Verse %s, Surah %s","wp-quran"),f,l);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(P,q(q({},this.props),{},{surahSelect:v,ayahSelect:j,editionSelect:O})),Object(n.createElement)("div",{className:m},b.length<1&&Object(n.createElement)(u.Placeholder,{icon:"book",label:Object(c.__)("Qu'ran verses.","wpquran"),instructions:Object(c.__)("Please select one of the 114 surah.","wpquran")},O,v,p.length>0&&Object(n.createElement)(n.Fragment,null,j)),b.length>0&&Object(n.createElement)("div",null,Object(n.createElement)("p",{className:"translated-ayah"},b),y&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("p",{className:"arabic-ayah"},d),Object(n.createElement)("audio",{controls:!0,src:"http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/".concat(h,"/high")})),Object(n.createElement)("p",{className:"translated-surah"},g))))}}]),l}(n.Component);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S()(e);if(t){var a=S()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return w()(this,r)}}var T=function(e){g()(r,e);var t=N(r);function r(){return y()(this,r),t.apply(this,arguments)}return m()(r,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.className,a=Object(c.sprintf)(Object(c.__)("Verse %s, Surah %s","wp-quran"),t.currentAyahNumberInSurah,t.currentSurahText);return Object(n.createElement)("div",{className:r},t.currentAyahText.length>0&&t.currentSurahText&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("p",{className:"translated-ayah"},t.currentAyahText),t.showVerseInArabic&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("p",{className:"arabic-ayah"},t.currentAyahTextInArabic),Object(n.createElement)("audio",{controls:!0,src:"http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/".concat(t.currentAyahNumberInQuran,"/high")})),Object(n.createElement)("p",{className:"translated-surah"},a)))}}]),r}(n.Component);Object(a.registerBlockType)("wpmuslim/wp-quran",{title:Object(c.__)("Wp Quran","wpmuslim"),description:Object(c.__)("Display Quran verses with ease.","wpmuslim"),category:"common",icon:{background:"rgba(157,254,128,0.52)",src:Object(n.createElement)(u.Icon,{icon:"book",size:"24"})},keywords:[Object(c.__)("quran"),Object(c.__)("coran"),Object(c.__)("verse"),Object(c.__)("ayah"),Object(c.__)("islam"),Object(c.__)("muslim"),Object(c.__)("holy")],supports:{html:!1},attributes:o,edit:I,save:T})}]);