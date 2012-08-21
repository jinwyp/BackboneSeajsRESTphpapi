(function(factory) {

  if (typeof define === 'function') {
    define('#querystring/1.0.1/querystring', [], factory);
  }
  else if (typeof exports !== 'undefined') {
    factory(require, exports);
  }
  else {
    factory();
  }

})(function(require, exports) {

/*
 QueryString v1.0.1 | https://github.com/seajs/dew/tree/master/src/querystring | MIT Licensed
*/
(function(){var g;g=typeof exports!=="undefined"?exports:this.QueryString={};g.version="1.0.1";var l=Object.prototype.toString,m=Object.prototype.hasOwnProperty,n=Array.isArray||function(a){return l.call(a)==="[object Array]"},k=String.prototype.trim?function(a){return a==null?"":String.prototype.trim.call(a)}:function(a){return a==null?"":a.toString().replace(/^\s+/,"").replace(/\s+$/,"")};g.escape=encodeURIComponent;g.unescape=function(a){return decodeURIComponent(a.replace(/\+/g," "))};g.stringify=
function(a,e,f,d){if(!a||!(l.call(a)==="[object Object]"&&"isPrototypeOf"in a))return"";var e=e||"&",f=f||"=",d=d||false,h=[],c,b,i=g.escape;for(c in a)if(m.call(a,c))if(b=a[c],c=g.escape(c),b!==Object(b))h.push(c,f,i(b+""),e);else if(n(b)&&b.length)for(var j=0;j<b.length;j++)b[j]!==Object(b[j])&&h.push(c,(d?i("[]"):"")+f,i(b[j]+""),e);else h.push(c,f,e);h.pop();return h.join("")};g.parse=function(a,e,f){var d={};if(typeof a!=="string"||k(a).length===0)return d;for(var a=a.split(e||"&"),f=f||"=",
e=g.unescape,h=0;h<a.length;h++){var c=a[h].split(f),b=e(k(c[0])),c=e(k(c.slice(1).join(f))),i=b.match(/^(\w+)\[\]$/);i&&i[1]&&(b=i[1]);m.call(d,b)?(n(d[b])||(d[b]=[d[b]]),d[b].push(c)):d[b]=i?[c]:c}return d}})();


});
