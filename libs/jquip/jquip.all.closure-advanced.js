var o=void 0,t=!0,u=null,y=!1;
window.$=window.jquip=function(){function b(a,d,e){if(a===d)return e;for(a=a.nextSibling;a;){if(a===d)return-1;a=a.nextSibling}return 1}function B(a,d){for(var e,i=0,Ba=X.length;i<Ba;i++)if(X[i].apply(this,arguments))return this;if(!a)return this;if(g(a))return ga?a():Y.push(a),this;if(p(a))return this.make(a);if(a.nodeType||h(a))return this.make([a]);if("body"==a&&!d&&x.body)return this.context=a.context,this[0]=x.body,this.length=1,this.selector=a,this;if(a.selector!==o)return this.context=a.context,
this.selector=a.selector,this.make(a);a=E(a)&&"<"===a.charAt(0)?(e=Ca.exec(a))?(a=[x.createElement(e[1])])&&w(d)?c.fn.attr.call(a,d)&&a:a:Z(a).childNodes:v(a,d);return this.make(a)}function c(a,d){return new B(a,d)}function A(a,d,e){d=d||0;if(g(d))return J(a,function(a,i){return!!d.call(a,i,a)===e});if(d.nodeType)return J(a,function(a){return a===d===e});if(E(d)){var i=":"==d.charAt(0)&&c.Expr[d.substring(1)];return J(a,function(a){return i?i(a):a.parentNode&&0<=C(v(d,a.parentNode),a)})}return J(a,
function(a){return 0<=C(d,a)===e})}function m(a,d){var e=c.data(a,"_J");if("undefined"===typeof d)return e&&Q[e]&&Q[e].display;e||c.data(a,"_J",e=++Q.id);return(Q[e]||(Q[e]={})).display=d}function r(a){if(!aa[a]){var d=c("<"+a+">").appendTo(x.body),e=c.css&&c.css(d[0],"display")||d[0].style.display;d.remove();aa[a]=e}return aa[a]}function n(a,d){for(var d=" "+d+" ",e=0,i=a.length;e<i;e++)if(f(a[e],d))return t;return y}function f(a,d){return 1===a.nodeType&&-1<(" "+a.className+" ").replace(ha," ").indexOf(d)}
function j(a,d,e){d=d||x;e=e||[];1==d.nodeType&&a(d)&&e.push(d);for(var d=d.childNodes,i=0,g=d.length;i<g;i++){var b=d[i];1==b.nodeType&&j(a,b,e)}return e}function v(a,d,e){if(a&&E(a)){d instanceof c&&(d=d[0]);var d=d||x,e=e||c.query,i=a.charAt(0),g=a.substring(1),b=Da.test(g),h;try{return b?F.call(e(a,d)):b?F.call(e(a,d)):"#"==i?(h=x.getElementById(g))?[h]:ia:L("."==i?d.getElementsByClassName?d.getElementsByClassName(g):e(a,d):d.getElementsByTagName(a))}catch(p){H(p)}}return 1==a.nodeType||9==a.nodeType?
[a]:ia}function D(a,d,e){var i=x.head||x.getElementsByTagName("head")[0]||ba,g=x.createElement("script"),b;if(e)g.async="async";g.onreadystatechange=function(){if(!(b=g.readyState)||"loaded"==b||"complete"==b)g.onload=g.onreadystatechange=u,i&&g.parentNode&&i.removeChild(g),g=o,d&&d()};g.onload=d;g.src=a;i.insertBefore(g,i.firstChild)}function H(a){M.console&&M.console.warn(arguments)}function s(a,d,e){if(a!=u)if(ja&&a.forEach===ja)a.forEach(d,e);else if(a.length===+a.length)for(var i=0,g=a.length;i<
g&&!(i in a&&d.call(e,a[i],i,a)===ka);i++);else for(i in a)if(U.call(a,i)&&d.call(e,a[i],i,a)===ka)break}function k(a,d){return a&&"INPUT"===a.nodeName&&"text"===a.type&&"value"===d?a.value:a?a.getAttribute(d)||(d in a?a[d]:o):u}function z(a,d){var e=[],i,g,b,c;for(i=0,g=ca.length;i<g&&!(c=ca[i].exec(a));i++);if(i<ca.length)for(g=0;b=d[g];g++)(0==i&&c[1]==b.id||1==i&&R(c[1],b.tagName)||2==i&&f(b,c[1])||3==i&&c[2]==k(b,c[1]))&&e.push(b);else H(a+" not supported");return e}function C(a,d){if(a==u)return-1;
var e,i;if(la&&a.indexOf===la)return a.indexOf(d);for(e=0,i=a.length;e<i;e++)if(a[e]===d)return e;return-1}function G(a,d,e){for(var i=[],a=a[d];a&&9!==a.nodeType&&(e===o||1!==a.nodeType||!c(a).T(e));)1===a.nodeType&&i.push(a),a=a[d];return i}function N(a,d,e){for(var d=d||1,i=0;a&&!(1===a.nodeType&&++i===d);a=a[e]);return a}function S(a,d){for(var e=[];a;a=a.nextSibling)1===a.nodeType&&a!==d&&e.push(a);return e}function J(a,d,e){for(var i=[],g,e=!!e,b=0,c=a.length;b<c;b++)g=!!d(a[b],b),e!==g&&i.push(a[b]);
return i}function O(a,d,e){var i,g,b=[],h=0,w=a.length;if(a instanceof c||"number"==typeof w&&(0<w&&a[0]&&a[w-1]||0===w||p(a)))for(;h<w;h++)i=d(a[h],h,e),i!=u&&(b[b.length]=i);else for(g in a)i=d(a[g],g,e),i!=u&&(b[b.length]=i);return b.concat.apply([],b)}function K(a,d,e){if(!a)return{};if(d&&e)return a.setAttribute(d,e),u;var i={};s(T(a),function(a,d){0===d.indexOf("data-")&&a&&(i[d.substr(5)]=a)});return E(d)?i[d]:i}function T(a){for(var d={},e=0,a=a.attributes,i=a.length;e<i;e++)d[a.item(e).nodeName]=
a.item(e).nodeValue;return d}function R(a,d){return!a||!d?a==d:a.toLowerCase()===d.toLowerCase()}function I(a){return a==u?""+a:ma[Ea.call(a)]||"object"}function E(a){return"string"==typeof a}function g(a){return"function"==typeof a||"function"===I(a)}function p(a){return"array"===I(a)}function h(a){return a&&"object"==typeof a&&"setInterval"in a}function w(a){if(!a||"object"!==I(a)||a.nodeType||h(a))return y;try{if(a.constructor&&!U.call(a,"constructor")&&!U.call(a.constructor.prototype,"isPrototypeOf"))return y}catch(d){return y}for(var e in a);
return e===o||U.call(a,e)}function P(a,d){var e=a.length,i=0;if("number"==typeof d.length)for(var g=d.length;i<g;i++)a[e++]=d[i];else for(;d[i]!==o;)a[e++]=d[i++];a.length=e;return a}function na(){var a,d,e,i,b,c=arguments,h=c[0]||{},f=1,k=c.length,n=y;"boolean"==typeof h&&(n=h,h=c[1]||{},f=2);"object"!=typeof h&&!g(h)&&(h={});k===f&&(h=this,--f);for(;f<k;f++)if((a=c[f])!=u)for(d in a)e=h[d],i=a[d],h!==i&&(n&&i&&(w(i)||(b=p(i)))?(b?(b=y,e=e&&p(e)?e:[]):e=e&&w(e)?e:{},h[d]=na(n,e,i)):i!==o&&(h[d]=
i));return h}function L(a,d){var e=d||[];if(a!=u){var i=I(a);a.length==u||"string"==i||"function"==i||"regexp"===i||h(a)?oa.call(e,a):P(e,a)}return e}function Z(a,d,e){d=d||x||d.ownerDocument||d[0]&&d[0].ownerDocument||x;e=e||d.createDocumentFragment();if(!E(a)&&"number"==typeof a.length){var i=e,g=[],b,c;for(b=0;(c=a[b])!=u;b++)E(c)&&(c=pa(c,d)),c.nodeType?g.push(c):g=P(g,c);if(i)for(b=0;b<g.length;b++)g[b].nodeType&&i.appendChild(g[b]);return g&&e}for(a=pa(a);a.firstChild;)e.appendChild(a.firstChild);
return e}function pa(a,d){var e=(d||x).createElement("div"),i=(Fa.exec(a)||["",""])[1].toLowerCase(),i=qa[i]||qa.i,g=i[0];for(e.innerHTML=i[1]+a+i[2];g--;)e=e.lastChild;return e}function V(a){if(da&&(W=Ga,a.sort(da),W))for(var d=1;d<a.length;d++)a[d]===a[d-1]&&a.splice(d--,1);return a}function Ha(){if(!x.body)return u;var a=x.createElement("div");x.body.appendChild(a);a.style.width="20px";a.style.padding="10px";var d=a.offsetWidth;x.body.removeChild(a);return 40==d}function ra(a,d){sa.push({url:a,
g:d})}function ta(){s(Y,function(a){a()});ga=t}var M=window,x=document,ba=x.documentElement,Y=[],sa=[],ga,Ia=/Until$/,Ja=/,/,Ka=/^(?:parents|prevUntil|prevAll)/,Fa=/<([\w:]+)/,ha=/[\n\t\r]/g,ua=/\s+/,La=/\d/,Ma=/\r\n/g,Ca=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,va=/\r?\n/g,Na=/^(?:select|textarea)/i,Oa=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,wa=String.prototype.trim,ea,xa=/^\s+/,ya=/\s+$/,fa,da,Pa={children:t,S:t,next:t,Y:t},Ea=Object.prototype.toString,
ma={},W=y,Ga=t,qa={W:[1,"<select multiple='multiple'>","</select>"],U:[1,"<fieldset>","</fieldset>"],ba:[1,"<table>","</table>"],ca:[2,"<table><tbody>","</tbody></table>"],aa:[3,"<table><tbody><tr>","</tr></tbody></table>"],R:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],O:[1,"<map>","</map>"],i:[0,"",""]},Da=/[,\s.#\[>+]/,ia=[],ka={},q=Array.prototype,U=Object.prototype.hasOwnProperty,F=q.slice,oa=q.push,za=q.indexOf,ja=q.forEach,Aa=q.filter,la=q.indexOf;/\S/.test("\u00a0")&&(xa=/^[\s\xA0]+/,
ya=/[\s\xA0]+$/);var X=[],Qa=0,Q={N:0},aa={},q=B.prototype=c.prototype=c.fn={constructor:c,selector:"",length:0,d:function(a,d,e){var d=a[0],i;if(d&&this[0]){if(!(a=3===d.nodeType&&d))if(a=(a=d&&d.parentNode)&&11===a.nodeType&&a.childNodes.length===this.length?a:Z(d),d=a.firstChild,1===a.childNodes.length&&(a=d),!d)return this;for(i=0,d=this.length;i<d;i++)e.call(this[i],a)}return this},a:function(a,d,e){var i=this.constructor();p(a)?oa.apply(i,a):P(i,a);i.Z=this;i.j=this.j;if("find"===d)i.p=this.selector+
(this.selector?" ":"")+e;else if(d)i.p=this.selector+"."+d+"("+e+")";return i}};q.make=function(a){this.length=a&&a.length||0;if(0!=this.length)for(var d=0,e=a.length;d<e;d++)this[d]=a[d];return this};q.toArray=function(){return F.call(this,0)};q.get=function(a){return a==u?this.toArray():0>a?this[this.length+a]:this[a]};q.add=function(a,d){var e="string"==typeof a?c(a,d):L(a&&a.nodeType?[a]:a),i=P(this.get(),e);return this.a(!e[0]||!e[0].parentNode||11==e[0].parentNode.nodeType||!i[0]||!i[0].parentNode||
11==i[0].parentNode.nodeType?i:V(i))};q.each=function(a){if(!g(a))return this;for(var d=0,e=this.length;d<e;d++)a.call(this[d],d,this[d]);return this};q.attr=function(a,d){var e=this[0];return E(a)&&d===o?k(e,a):this.each(function(e){var b=this.nodeType;if(3!==b&&8!==b&&2!==b)if("object"==typeof a)for(var c in a)d===u?this.removeAttribute(a):this.setAttribute(c,a[c]);else this.setAttribute(a,g(d)?d.call(this,e,this.getAttribute(a)):d)})};q.removeAttr=function(a){return this.each(function(){this.removeAttribute(a)})};
q.data=function(a,d){return K(this[0],a,d)};q.append=function(){return this.d(arguments,t,function(a){1===this.nodeType&&this.appendChild(a)})};q.prepend=function(){return this.d(arguments,t,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild)})};q.before=function(){return this.d(arguments,y,function(a){this.parentNode.insertBefore(a,this)})};q.after=function(){return this[0]&&this[0].parentNode?this.d(arguments,y,function(a){this.parentNode.insertBefore(a,this.nextSibling)}):this};
q.hide=function(){return this.each(function(){m(this,this.style.display);this.style.display="none"})};q.show=function(){return this.each(function(){this.style.display=m(this)||r(this.tagName)})};q.toggle=function(){return this.each(function(){this.style.display=c.Expr.hidden(this)?m(this)||r(this.tagName):(m(this,this.style.display),"none")})};q.eq=function(a){return-1===a?this.slice(a):this.slice(a,+a+1)};q.first=function(){return this.eq(0)};q.last=function(){return this.eq(-1)};q.slice=function(){return this.a(F.apply(this,
arguments),"slice",F.call(arguments).join(","))};q.map=function(a){return this.a(O(this,function(d,e){return a.call(d,e,d)}))};q.find=function(a){var d=this,e,i;if(!E(a))return c(a).filter(function(){for(e=0,i=d.length;e<i;e++)if(fa(d[e],this))return t});var g=this.a("","find",a),b,h,p;for(e=0,i=this.length;e<i;e++)if(b=g.length,P(g,c(a,this[e])),0==e)for(h=b;h<g.length;h++)for(p=0;p<b;p++)if(g[p]===g[h]){g.splice(h--,1);break}return g};q.not=function(a){return this.a(A(this,a,y),"not",a)};q.filter=
function(a){return this.a(A(this,a,t),"filter",a)};q.indexOf=function(a){return C(this,a)};q.is=function(a){return 0<this.length&&0<c(this[0]).filter(a).length};q.remove=function(){for(var a=0,d;(d=this[a])!=u;a++)d.parentNode&&d.parentNode.removeChild(d);return this};q.closest=function(a,d){var e=[],g;for(g=0,l=this.length;g<l;g++)for(cur=this[g];cur;)if(0<z(a,[cur]).length){e.push(cur);break}else if(cur=cur.parentNode,!cur||!cur.ownerDocument||cur===d||11===cur.nodeType)break;e=1<e.length?V(e):
e;return this.a(e,"closest",a)};q.val=function(a){return a==u?this[0]&&this[0].value||"":this.each(function(){this.value=a})};q.html=function(a){return a==u?this[0]&&this[0].innerHTML||"":this.each(function(){this.innerHTML=a})};q.text=function(a){var d=this[0],e;return"undefined"==typeof a?d&&(e=d.nodeType)?1===e||9===e?"string"==typeof d.textContent?d.textContent:d.innerText.replace(Ma,""):3===e||4===e?d.nodeValue:u:u:this.empty().append((d&&d.ownerDocument||x).createTextNode(a))};q.empty=function(){for(var a=
0,d;(d=this[a])!=u;a++)for(;d.firstChild;)d.removeChild(d.firstChild);return this};q.addClass=function(a){var d,e,i,b,h,p,f;if(g(a))return this.each(function(d){c(this).addClass(a.call(this,d,this.className))});if(a&&E(a)){d=a.split(ua);for(e=0,i=this.length;e<i;e++)if((b=this[e])&&1===b.nodeType)if(!b.className&&1===d.length)b.className=a;else{h=" "+b.className+" ";for(p=0,f=d.length;p<f;p++)~h.indexOf(" "+d[p]+" ")||(h+=d[p]+" ");b.className=ea(h)}}return this};q.removeClass=function(a){var d,e,
b,h,p,f,w;if(g(a))return this.each(function(d){c(this).removeClass(a.call(this,d,this.className))});if(a&&E(a)||a===o){d=(a||"").split(ua);for(e=0,b=this.length;e<b;e++)if(h=this[e],1===h.nodeType&&h.className)if(a){p=(" "+h.className+" ").replace(ha," ");for(f=0,w=d.length;f<w;f++)p=p.replace(" "+d[f]+" "," ");h.className=ea(p)}else h.className=""}return this};q.hasClass=function(a){return n(this,a)};q.fadeIn=function(){this.each(function(){c(this).show()})};q.fadeOut=function(){this.each(function(){c(this).hide()})};
q.serializeArray=function(){return this.map(function(){return this.elements?L(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Na.test(this.nodeName)||Oa.test(this.type))}).map(function(a,d){var e=c(this).val();return e==u||p(e)?O(e,function(a){return{name:d.name,value:a.replace(va,"\r\n")}}):{name:d.name,value:e.replace(va,"\r\n")}}).get()};c.Expr={hidden:function(a){return 0===a.offsetWidth||0==a.offsetHeight||"none"===(c.css&&c.css(a,"display")||a.style.display)},
visible:function(a){return!c.Expr.hidden(a)}};c.hasClass=n;c.walk=j;c.$$=v;c.setQuery=function(a){c.query=function(d,e){return v(d,e,a||function(a,d){return d.querySelectorAll(a)})}};q=M.Sizzle||M.qwery;c.setQuery(q||function(a,d){return x.querySelectorAll?L((d||x).querySelectorAll(a)):[]});c.loadScript=D;c.each=function(a,d,e){var b,h=0,c=a.length,p=c===o||g(a);if(e)if(p)for(b in a){if(d.apply(a[b],e)===y)break}else for(;h<c&&!(d.apply(a[h++],e)===y););else if(p)for(b in a){if(d.call(a[b],b,a[b])===
y)break}else for(;h<c&&!(d.call(a[h],h,a[h++])===y););return a};c._each=s;var ca=[/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/];c.filter=z;c._indexOf=C;c._defaults=function(a){s(F.call(arguments,1),function(d){for(var e in d)a[e]==u&&(a[e]=d[e])});return a};c._filter=function(a,d,e){var g=[];if(a==u)return g;if(Aa&&a.filter===Aa)return a.filter(d,
e);s(a,function(a,b,h){d.call(e,a,b,h)&&(g[g.length]=a)});return g};c.proxy=function(a,d){if("string"==typeof d)var e=a[d],d=a,a=e;if(g(a)){var b=F.call(arguments,2),e=function(){return a.apply(d,b.concat(F.call(arguments)))};e.f=a.f=a.f||e.f||Qa++;return e}};c.dir=G;c.nth=N;c.sibling=S;c.grep=J;c.map=O;c.data=K;c.attrs=T;c.eqSI=R;c.trim=ea=wa?function(a){return a==u?"":wa.call(a)}:function(a){return a==u?"":a.toString().replace(xa,"").replace(ya,"")};c.indexOf=c.inArray=function(a,d){if(!d)return-1;
if(za)return za.call(d,a);for(var e=0,g=d.length;e<g;e++)if(d[e]===a)return e;return-1};s("Boolean Number String Function Array Date RegExp Object".split(" "),function(a){ma["[object "+a+"]"]=a.toLowerCase();return this});c.type=I;c.isFunction=g;c.isArray=Array.isArray||p;c.isWindow=h;c.isNaN=function(a){return a==u||!La.test(a)||isNaN(a)};c.merge=P;c.extend=c.fn.extend=na;c.makeArray=L;c.htmlFrag=Z;fa=c.contains=ba.contains?function(a,d){return a!==d&&(a.contains?a.contains(d):t)}:function(){return y};
da=ba.compareDocumentPosition?(fa=function(a,d){return!!(a.compareDocumentPosition(d)&16)})&&function(a,d){return a===d?(W=t,0):!a.compareDocumentPosition||!d.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(d)&4?-1:1}:function(a,d){if(a===d)return W=t,0;if(a.sourceIndex&&d.sourceIndex)return a.sourceIndex-d.sourceIndex;var e,g,h=[],c=[];e=a.parentNode;g=d.parentNode;var p=e;if(e===g)return b(a,d);if(e){if(!g)return 1}else return-1;for(;p;)h.unshift(p),p=p.parentNode;
for(p=g;p;)c.unshift(p),p=p.parentNode;e=h.length;g=c.length;for(p=0;p<e&&p<g;p++)if(h[p]!==c[p])return b(h[p],c[p]);return p===e?b(a,c[p],-1):b(h[p],d,1)};c.unique=V;s({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:u},parents:function(a){return G(a,"parentNode")},parentsUntil:function(a,d,e){return G(a,"parentNode",e)},next:function(a){return N(a,2,"nextSibling")},prev:function(a){return N(a,2,"previousSibling")},nextAll:function(a){return G(a,"nextSibling")},prevAll:function(a){return G(a,
"previousSibling")},nextUntil:function(a,d,e){return G(a,"nextSibling",e)},prevUntil:function(a,d,e){return G(a,"previousSibling",e)},siblings:function(a){return S(a.parentNode.firstChild,a)},children:function(a){return S(a.firstChild)},contents:function(a){return"iframe"===a.nodeName?a.contentDocument||a.contentWindow["document "]:L(a.childNodes)}},function(a,d){c.fn[d]=function(e,g){var b=O(this,a,e),h=F.call(arguments);Ia.test(d)||(g=e);"string"==typeof g&&(b=z(g,b));b=1<this.length&&!Pa[d]?V(b):
b;if((1<this.length||Ja.test(g))&&Ka.test(d))b=b.reverse();return this.a(b,d,h.join(","))}});s({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after"},function(a,d){c.fn[d]=function(e){var g=[],e=c(e),b,h,p;if((b=1===this.length&&this[0].parentNode)&&11===b.nodeType&&1===b.childNodes.length&&1===e.length)return e[a](this[0]),this;for(b=0,p=e.length;b<p;b++)h=(0<b?this.Q(t):this).get(),c(e[b])[a](h),g=g.concat(h);return this.a(g,d,e.selector)}});(function(){var a=document.createElement("div");
a.style.display="none";a.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";a=a.getElementsByTagName("a")[0];c.support={P:u,opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat};var a=/(opera)(?:.*version)?[ \/]([\w.]+)/,d=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/,g=navigator.userAgent.toLowerCase(),a=/(webkit)[ \/]([\w.]+)/.exec(g)||a.exec(g)||d.exec(g)||0>g.indexOf("compatible")&&e.exec(g)||[];(c.browser=
{version:a[2]||"0"})[a[1]||""]=t})();c.scriptsLoaded=function(a){g(a)&&Y.push(a)};c.loadAsync=ra;!q&&!x.querySelectorAll&&ra("http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",function(){c.setQuery(M.Sizzle||M.qwery)});c.init=y;c.onload=function(){if(!c.init)try{c.support.boxModel=Ha();var a=0;s(sa,function(d){a++;D(d.url,function(){try{d.g&&d.g()}catch(g){}--a||ta()})});c.init=t;a||ta()}catch(d){H(d)}};x.body&&!c.init&&setTimeout(c.onload,1);c.hook=function(a){X.push(a)};c.plug=function(a,
d){d=g(a)?a:d;if(!g(d))throw"Plugin fn required";d(c)};return c}();
$.plug("ajax",function(b){function B(){if(r!=u)return r();for(var b=0,c=m.length;b<c;b++)try{var j=m[b],v=j();if(v!=u)return r=j,v}catch(D){}return function(){}}function c(b,c){c=(c||b.getResponseHeader("Content-Type").split(";")[0]).toLowerCase();return 0<=c.indexOf("json")?window.JSON?window.JSON.parse(b.responseText):eval(b.responseText):0<=c.indexOf("script")?eval(b.responseText):0<=c.indexOf("xml")?b.responseXML:b.responseText}function A(n,f){var j=B(),m,D=0;"object"===typeof n?f=n:f.url=n;f=
b._defaults(f,{userAgent:"XMLHttpRequest",lang:"en",type:"GET",data:u,contentType:"application/x-www-form-urlencoded",dataType:u,processData:t,headers:{"X-Requested-With":"XMLHttpRequest"}});f.timeout&&(m=setTimeout(function(){j.abort();f.q&&f.q(f.url)},f.timeout));var r=b(f.context||document);j.onreadystatechange=function(){if(4==j.readyState){m&&clearTimeout(m);if(300>j.status){var b=c(j,f.dataType);f.success&&f.success(b);r.trigger("ajaxSuccess",[j,b,f])}else f.error&&f.error(j,j.status,j.statusText),
r.trigger(r,"ajaxError",[j,j.statusText,f]);f.complete&&f.complete(j,j.statusText);r.trigger(r,"ajaxComplete",[j,f])}else f.progress&&f.progress(++D)};var n=f.url,s=u,k="POST"==f.type||"PUT"==f.type;f.data&&f.processData&&"object"==typeof f.data&&(s=b.formData(f.data));!k&&s&&(n+="?"+s);j.open(f.type,n);try{for(var z in f.headers)j.setRequestHeader(z,f.headers[z])}catch(C){console.log(C)}k&&j.setRequestHeader("Content-Type",f.contentType);j.send(s)}var m=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")},
function(){return new ActiveXObject("MSXML2.XMLHTTP.3.0")},function(){return new ActiveXObject("MSXML2.XMLHTTP")}],r=u;b.xhr=B;b._xhrResp=c;b.formData=function(b){var c=[],j=/%20/g,m;for(m in b)c.push(encodeURIComponent(m).replace(j,"+")+"="+encodeURIComponent(b[m].toString()).replace(j,"+"));return c.join("&")};b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(c,f){b.fn[f]=function(b){return this.bind(f,b)}});b.ajax=A;b.getJSON=function(c,f,j){b.isFunction(f)&&
(j=f,f=u);A({url:c,data:f,success:j,dataType:"json"})};b.get=function(c,f,j,m){b.isFunction(f)&&(m=j,j=f,f=u);A({url:c,type:"GET",data:f,success:j,dataType:m||"text/plain"})};b.post=function(c,f,j,m){b.isFunction(f)&&(m=j,j=f,f=u);A({url:c,type:"POST",data:f,success:j,dataType:m||"text/plain"})};b.getScript=function(c,f){return b.get(c,o,f,"script")};window.JSON||b.loadAsync("http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js")});
$.plug("css",function(b){function B(b,c){return c.toUpperCase()}function c(g,c,h){var w="width"===c?g.offsetWidth:g.offsetHeight,c="width"===c?J:O;return 0<w?("border"!==h&&b.each(c,function(){h||(w-=parseFloat(m(g,"padding"+this))||0);w="margin"===h?w+(parseFloat(m(g,h+this))||0):w-(parseFloat(m(g,"border"+this+"Width"))||0)}),w+"px"):""}function A(g,c,h,w){if(g&&!(3===g.nodeType||8===g.nodeType||!g.style)){var f,k=n(c),m=g.style,j=b.cssHooks[k],c=b.cssProps[k]||k;if(h!==o){if(!("number"===typeof h&&
isNaN(h)||h==u))if("number"===typeof h&&!b.cssNumber[k]&&(h+="px"),!j||!("set"in j)||(h=j.set(g,h))!==o)try{m[c]=h}catch(z){}}else return j&&"get"in j&&(f=j.get(g,y,w))!==o?f:m[c]}}function m(g,c,h){var w,f=n(c),k=b.cssHooks[f],c=b.cssProps[f]||f;if(k&&"get"in k&&(w=k.get(g,t,h))!==o)return w;if(K)return K(g,c,f)}function r(b,c,h){var f={},k;for(k in c)f[k]=b.style[k],b.style[k]=c[k];h.call(b);for(k in c)b.style[k]=f[k]}function n(b){return b.replace(k,B)}function f(g,c,h,k,j,m){var z=g.length;if("object"===
typeof c){for(var n in c)f(g,n,c[n],k,j,h);return g}if(h!==o){k=!m&&k&&b.isFunction(h);for(n=0;n<z;n++)j(g[n],c,k?h.call(g[n],n,j(g[n],c)):h,m);return g}return z?j(g[0],c):o}function j(g){return b.isWindow(g)?g:9===g.nodeType?g.defaultView||g.parentWindow:y}var v=document,D=v.documentElement,H=/alpha\([^)]*\)/i,s=/opacity=([^)]*)/,k=/-([a-z])/ig,z=/([A-Z])/g,C=/^-?\d+(?:px)?$/i,G=/^-?\d/,N=/^(?:body|html)$/i,S={position:"absolute",visibility:"hidden",display:"block"},J=["Left","Right"],O=["Top","Bottom"],
K,T,R;b.cssHooks={opacity:{get:function(b,c){if(!c)return b.style.opacity;var h=K(b,"opacity","opacity");return""===h?"1":h}}};b._each(["height","width"],function(g){b.cssHooks[g]={get:function(b,h,k){var f;if(h){if(0!==b.offsetWidth)return c(b,g,k);r(b,S,function(){f=c(b,g,k)});return f}},set:function(b,g){if(C.test(g)){if(g=parseFloat(g),0<=g)return g+"px"}else return g}}});b.support.opacity||(b.support.opacity={get:function(b,c){return s.test((c&&b.currentStyle?b.currentStyle.filter:b.style.filter)||
"")?parseFloat(RegExp.$1)/100+"":c?"1":""},set:function(g,c){var h=g.style;h.zoom=1;var k=b.isNaN(c)?"":"alpha(opacity="+100*c+")",f=h.filter||"";h.filter=H.test(f)?f.replace(H,k):h.filter+" "+k}});v.defaultView&&v.defaultView.getComputedStyle&&(T=function(g,c,h){var k,h=h.replace(z,"-$1").toLowerCase();if(c=g.ownerDocument.defaultView){if(c=c.getComputedStyle(g,u))k=c.getPropertyValue(h),""===k&&!b.contains(g.ownerDocument.documentElement,g)&&(k=b.style(g,h));return k}});v.documentElement.currentStyle&&
(R=function(b,c){var h,k=b.currentStyle&&b.currentStyle[c],f=b.runtimeStyle&&b.runtimeStyle[c],j=b.style;if(!C.test(k)&&G.test(k)){h=j.left;if(f)b.runtimeStyle.left=b.currentStyle.left;j.left="fontSize"===c?"1em":k||0;k=j.pixelLeft+"px";j.left=h;if(f)b.runtimeStyle.left=f}return""===k?"auto":k});K=T||R;b.fn.css=function(b,c){return 2===arguments.length&&c===o?this:f(this,b,c,t,function(b,c,g){return g!==o?A(b,c,g):m(b,c)})};b.cssNumber={zIndex:t,fontWeight:t,opacity:t,zoom:t,lineHeight:t};b.cssProps=
{"float":b.support.cssFloat?"cssFloat":"styleFloat"};b.style=A;b.css=m;b.swap=r;b.camelCase=n;var I,E;b.fn.offset=function(){var c=this[0],k;if(!c||!c.ownerDocument)return u;if(c===c.ownerDocument.body){k=c.offsetTop;var h=c.offsetLeft;if(!I){var f=v.body,z=v.createElement("div"),n,C,r=parseFloat(m(f,"marginTop"))||0;b.extend(z.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});z.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
f.insertBefore(z,f.firstChild);n=z.firstChild;C=n.firstChild;C.style.position="fixed";C.style.top="20px";C.style.position=C.style.top="";n.style.overflow="hidden";n.style.position="relative";E=f.offsetTop!==r;f.removeChild(z);I=t}E&&(k+=parseFloat(m(c,"marginTop"))||0,h+=parseFloat(m(c,"marginLeft"))||0);return{top:k,left:h}}try{k=c.getBoundingClientRect()}catch(s){}if(!k||!b.contains(D,c))return k?{top:k.top,left:k.left}:{top:0,left:0};c=v.body;h=j(v);return{top:k.top+(h.pageYOffset||b.support.boxModel&&
D.scrollTop||c.scrollTop)-(D.clientTop||c.clientTop||0),left:k.left+(h.pageXOffset||b.support.boxModel&&D.scrollLeft||c.scrollLeft)-(D.clientLeft||c.clientLeft||0)}};b.fn.position=function(){if(!this[0])return u;var b=this[0],c=this.offsetParent(),h=this.offset(),k=N.test(c[0].nodeName)?{top:0,left:0}:c.offset();h.top-=parseFloat(m(b,"marginTop"))||0;h.left-=parseFloat(m(b,"marginLeft"))||0;k.top+=parseFloat(m(c[0],"borderTopWidth"))||0;k.left+=parseFloat(m(c[0],"borderLeftWidth"))||0;return{top:h.top-
k.top,left:h.left-k.left}};b.fn.offsetParent=function(){return this.map(function(){for(var b=this.offsetParent||v.body;b&&!N.test(b.nodeName)&&"static"===m(b,"position");)b=b.offsetParent;return b})};b._each(["Height","Width"],function(c){var k=c.toLowerCase();b.fn["inner"+c]=function(){var b=this[0];return b&&b.style?parseFloat(m(b,k,"padding")):u};b.fn["outer"+c]=function(b){var c=this[0];return c&&c.style?parseFloat(m(c,k,b?"margin":"border")):u};b.fn[k]=function(h){var f=this[0];if(!f)return h==
u?u:this;if(b.isFunction(h))return this.each(function(c){var g=b(this);g[k](h.call(this,c,g[k]()))});if(b.isWindow(f)){var j=f.document.documentElement["client"+c],z=f.document.body;return"CSS1Compat"===f.document.compatMode&&j||z&&z["client"+c]||j}if(9===f.nodeType)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);return h===o?(f=m(f,k),j=parseFloat(f),b.isNaN(j)?f:j):this.css(k,"string"===typeof h?h:h+
"px")}});b._each(["Left","Top"],function(c,k){var h="scroll"+c;b.fn[h]=function(c){var g,f;if(c===o){g=this[0];return!g?u:(f=j(g))?"pageXOffset"in f?f[k?"pageYOffset":"pageXOffset"]:b.support.boxModel&&f.document.documentElement[h]||f.document.body[h]:g[h]}return this.each(function(){(f=j(this))?f.scrollTo(!k?c:b(f).scrollLeft(),k?c:b(f).scrollTop()):this[h]=c})}})});
$.plug("custom",function(b){for(var B={},c=window.location.search.substring(1).split("&"),A=0;A<c.length;A++){var m=c[A].split("=");B[m[0]]=unescape(m[1])}b.queryString=function(b){return B[b]};var r=b.Key=function(b){this.keyCode=b};r.n={s:8,L:9,A:13,K:16,u:17,r:18,I:19,t:20,B:27,H:33,G:34,z:35,C:36,F:37,M:38,J:39,w:40,D:45,v:46};b._each(r.n,function(b,c){r.prototype["is"+c]=function(){return this.keyCode===b}});b.key=function(b){b=b||window.event;return new r(b.keyCode||b.which)};b.cancelEvent=
function(b){if(!b)b=window.event;b.cancelBubble=t;b.returnValue=y;b.stopPropagation&&(b.stopPropagation(),b.preventDefault());return y};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,m:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b._template=function(c,f){var j=b.templateSettings,j="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+c.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(j.escape,function(b,c){return"',_.escape("+c.replace(/\\'/g,"'")+"),'"}).replace(j.m,
function(b,c){return"',"+c.replace(/\\'/g,"'")+",'"}).replace(j.evaluate||u,function(b,c){return"');"+c.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",m=new Function("obj","$",j);return f?m(f,b):function(c){return m(c,b)}}});
$.plug("docready",function(b){function B(){if(!j){try{m.documentElement.doScroll("left")}catch(b){setTimeout(B,1);return}c()}}function c(c){c===t&&v--;if(!v||c!==t&&!j){if(!m.body)return setTimeout(r,1);j=t;if(!(c!==t&&0<--v)&&f){var n=0,r=f;for(f=u;c=r[n++];)c.call(m,b);b.fn.trigger&&b(m).trigger("ready").unbind("ready")}}}var A=window,m=document,r,n,f=[],j=y,v=1;b.hook(function(b){if("function"==typeof b)return this.ready(b),t});b.ready=c;r=m.addEventListener?function(){m.removeEventListener("DOMContentLoaded",
r,y);c()}:function(){"complete"===m.readyState&&(m.detachEvent("onreadystatechange",r),c())};b.bindReady=function(){if(!n){n=t;if("complete"===m.readyState)return setTimeout(c,1);if(m.addEventListener)m.addEventListener("DOMContentLoaded",r,y),A.addEventListener("load",c,y);else if(m.attachEvent){m.attachEvent("onreadystatechange",r);A.attachEvent("onload",c);var b=y;try{b=window.frameElement==u}catch(f){}m.documentElement.doScroll&&b&&B()}}};b.fn.ready=function(c){b.bindReady();j?c.call(m,b):f&&
f.push(c);return this};b.init||b(document).ready(b.onload)});
$.plug("events",function(b){function B(b,c,f){b.addEventListener?b.addEventListener(c,f,y):(b["e"+c+f]=f,b[c+f]=function(){b["e"+c+f](window.event)},b.attachEvent("on"+c,b[c+f]))}function c(b,c,f){b.removeEventListener?b.removeEventListener(c,f,y):(b.detachEvent("on"+c,b[c+f]),b[c+f]=u)}function A(b){b=(""+b).split(".");return{c:b[0],e:b.slice(1).sort().join(" ")}}function m(c,f,j,m){f=A(f);if(f.e)var n=RegExp("(?:^| )"+f.e.replace(" "," .* ?")+"(?: |$)");return b._filter(v[c.b||(c.b=D++)]||[],function(b){return b&&
(!f.c||b.c==f.c)&&(!f.e||n.test(b.e))&&(!j||b.h==j)&&(!m||b.o==m)})}function r(c,f,j,m,n){var r=c.b||(c.b=D++),s=v[r]||(v[r]=[]);b._each(f.split(/\s/),function(f){f=b.extend(A(f),{h:j,o:m,k:n,l:s.length});s.push(f);B(c,f.c,n||j)});c=u}function n(f,j,n,r){var s=f.b||(f.b=D++);b._each((j||"").split(/\s/),function(j){b._each(m(f,j,n,r),function(b){delete v[s][b.l];c(f,b.c,b.k||b.h)})})}function f(c){var f=b.extend({X:c},c);b._each(H,function(b){f[b]=function(){return c[b].apply(c,arguments)}});return f}
var j=document,v={},D=1;b.bind=B;b.unbind=c;var H=["preventDefault","stopImmediatePropagation","stopPropagation"],s=b.fn;b._each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(b){s[b]=function(c,f){return 0<arguments.length?this.bind(b,c,f):this.trigger(b)}});s.bind=function(b,c){return this.each(function(){r(this,b,c)})};s.unbind=function(b,
c){return this.each(function(){n(this,b,c)})};s.one=function(b,c){return this.each(function(){var f=this;r(this,b,function(){c();n(f,b,arguments.callee)})})};s.delegate=function(c,j,m){return this.each(function(n,s){r(s,j,m,c,function(j){for(var n=j.target,r=b.$$(c,s);n&&0>r.indexOf(n);)n=n.parentNode;n&&n!==s&&n!==document&&m.call(n,b.extend(f(j||window.event),{currentTarget:n,V:s}))})})};s.undelegate=function(b,c,f){return this.each(function(){n(this,c,f,b)})};s.live=function(c,f){b(j.body).delegate(this.selector,
c,f);return this};s.die=function(c,f){b(j.body).undelegate(this.selector,c,f);return this};s.trigger=function(b){return this.each(function(){if(("click"==b||"blur"==b||"focus"==b)&&this[b])return this[b]();if(j.createEvent){var c=j.createEvent("Events");this.dispatchEvent(c,c.initEvent(b,t,t))}else if(this.fireEvent)try{"ready"!==b&&this.fireEvent("on"+b)}catch(f){}})};b.init||b(window).bind("load",b.onload)});