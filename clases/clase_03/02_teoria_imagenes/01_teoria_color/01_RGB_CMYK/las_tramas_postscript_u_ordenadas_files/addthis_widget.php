/* (c) 2008, 2009, 2010 Add This, LLC */
var addthis_conf={ver:120};function addthis_to(a){return addthis_sendto(a)}function addthis_onmouseover(b,f,d,c,h,a,g){if(h){addthis_config.username=h}if(a){addthis_language=a}addthis_content=g||"";return addthis_open(b,"share",d,c)}function addthis_onmouseout(){addthis_close()}function addthis_invoke(e,c,d,f){addthis_config.username=f||_ate.pub();addthis_share.url=(c||b.addthis_url);addthis_share.title=(d||b.addthis_title);var b=window,g=addthis_share.url.toLowerCase(),a=addthis_share.title.toLowerCase();if(g===""||g==="[url]"){addthis_share.url=location.href}if(a===""||a==="[title]"){addthis_share.title=document.title}_ate.as(e);return false};if(!window._ate){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_atn="//l.addthiscdn.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atc={dr:0,ver:250,loc:0,enote:"",cwait:500,tamp:-1,xamp:0,camp:1,vamp:1,famp:0.02,pamp:0.2,damp:1,abf:!!window.addthis_do_ab};(function(){try{var F=window.location;if(F.protocol.indexOf("file")===0){_atr="http:"+_atr}if(F.hostname.indexOf("localhost")!=-1){_atc.loc=1}}catch(L){}var J=navigator.userAgent.toLowerCase(),M=document,t=window,H=M.location,O={win:/windows/.test(J),xp:/windows nt 5.1/.test(J)||/windows nt 5.2/.test(J),osx:/os x/.test(J),chr:/chrome/.test(J),iph:/iphone/.test(J),ipa:/ipad/.test(J),saf:/safari/.test(J),web:/webkit/.test(J),opr:/opera/.test(J),msi:(/msie/.test(J))&&!(/opera/.test(J)),ffx:/firefox/.test(J),ff2:/firefox\/2/.test(J),ie6:/msie 6.0/.test(J),ie7:/msie 7.0/.test(J),mod:-1},f={vst:[],rev:"79292",bro:O,show:1,dl:H,upm:!!t.postMessage&&(""+t.postMessage).toLowerCase().indexOf("[native code]")!==-1,camp:_atc.camp-Math.random(),xamp:_atc.xamp-Math.random(),vamp:_atc.vamp-Math.random(),pamp:_atc.pamp-Math.random(),afamp:_atc.afamp-Math.random(),ab:"-",seq:1,inst:1,wait:500,tmo:null,cvt:[],avt:null,sttm:new Date().getTime(),max:4294967295,sid:0,sub:!!window.at_sub,dbm:0,uid:null,spt:"static/r07/widget21.png",api:{},imgz:[],hash:window.location.hash};M.ce=M.createElement;M.gn=M.getElementsByTagName;window._ate=f;var u=function(r,p,q,d){if(!r){return q}if(r instanceof Array||(r.length&&(typeof r!=="function"))){for(var l=0,a=r.length,b=r[0];l<a;b=r[++l]){q=p.call(d||r,q,b,l,r)}}else{for(var e in r){q=p.call(d||r,q,r[e],e,r)}}return q},A=Array.prototype.slice,C=function(b){return A.apply(b,A.call(arguments,1))},B=function(a){return(""+a).replace(/(^\s+|\s+$)/g,"")},K=function(a,b){return u(C(arguments,1),function(e,d){return u(d,function(p,l,i){if(p){p[i]=l}return p},e)},a)},m=function(b,a){return u(b,function(i,e,d){d=B(d);if(d){i.push(_euc(d)+"="+_euc(B(e)))}return i},[]).join(a||"&")},j=function(b,a){return u((b||"").split(a||"&"),function(p,r){try{var l=r.split("="),i=B(_duc(l[0])),d=B(_duc(l.slice(1).join("=")));if(i){p[i]=d}}catch(q){}return p},{})},Q=function(){var a=C(arguments,0),d=a.shift(),b=a.shift();return function(){return d.apply(b,a.concat(C(arguments,0)))}},G=function(b,e,a,d){if(!e){return}if(we){e[(b?"detach":"attach")+"Event"]("on"+a,d)}else{e[(b?"remove":"add")+"EventListener"](a,d,false)}},k=function(d,a,b){G(0,d,a,b)},g=function(d,a,b){G(1,d,a,b)},c={reduce:u,slice:C,strip:B,extend:K,toKV:m,fromKV:j,bind:Q,listen:k,unlisten:g};f.util=c;K(f,c);(function(r,w,R){var p,T=r.util;function s(W,V,Y,U,X){this.type=W;this.triggerType=V||W;this.target=Y||U;this.triggerTarget=U||Y;this.data=X||{}}T.extend(s.prototype,{constructor:s,bubbles:false,preventDefault:T.noop,stopPropagation:T.noop,clone:function(){return new this.constructor(this.type,this.triggerType,this.target,this.triggerTarget,T.extend({},this.data))}});function i(U,V){this.target=U;this.queues={};this.defaultEventType=V||s}function a(U){var V=this.queues;if(!V[U]){V[U]=[]}return V[U]}function q(U,V){this.getQueue(U).push(V)}function e(V,W){var X=this.getQueue(V),U=X.indexOf(W);if(U!==-1){X.splice(U,1)}}function b(U,Y,X,W){var V=this;if(!W){setTimeout(function(){V.dispatchEvent(new V.defaultEventType(U,U,Y,V.target,X))},10)}else{V.dispatchEvent(new V.defaultEventType(U,U,Y,V.target,X))}}function S(V){for(var W=0,Y=V.target,X=this.getQueue(V.type),U=X.length;W<U;W++){X[W].call(Y,V.clone())}}function d(V){if(!V){return}for(var U in l){V[U]=T.bind(l[U],this)}return V}var l={constructor:i,getQueue:a,addEventListener:q,removeEventListener:e,dispatchEvent:S,fire:b,decorate:d};T.extend(i.prototype,l);r.event={PolyEvent:s,EventDispatcher:i}})(f,f.api,f);f.ed=new f.event.EventDispatcher(f);var n={isBound:0,isReady:0,readyList:[],onReady:function(){if(!n.isReady){n.isReady=1;var a=n.readyList.concat(window.addthis_onload||[]);for(var b=0;b<a.length;b++){a[b].call(window)}n.readyList=[]}},addLoad:function(a){var b=t.onload;if(typeof t.onload!="function"){t.onload=a}else{t.onload=function(){if(b){b()}a()}}},bindReady:function(){if(x.isBound||_atc.xol){return}x.isBound=1;if(M.addEventListener&&!O.opr){M.addEventListener("DOMContentLoaded",x.onReady,false)}var a=window.addthis_product;if(a&&a.indexOf("f")>-1){x.onReady();return}if(O.msi&&window==top){(function(){if(x.isReady){return}try{M.documentElement.doScroll("left")}catch(d){setTimeout(arguments.callee,0);return}x.onReady()})()}if(O.opr){M.addEventListener("DOMContentLoaded",function(){if(x.isReady){return}for(var d=0;d<M.styleSheets.length;d++){if(M.styleSheets[d].disabled){setTimeout(arguments.callee,0);return}}x.onReady()},false)}if(O.saf){var b;(function(){if(x.isReady){return}if(M.readyState!="loaded"&&M.readyState!="complete"){setTimeout(arguments.callee,0);return}if(b===undefined){var d=M.gn("link");for(var e=0;e<d.length;e++){if(d[e].getAttribute("rel")=="stylesheet"){b++}}var l=M.gn("style");b+=l.length}if(M.styleSheets.length!=b){setTimeout(arguments.callee,0);return}x.onReady()})()}x.addLoad(x.onReady)},append:function(b,a){x.bindReady();if(x.isReady){b.call(window,[])}else{x.readyList.push(function(){return b.call(window,[])})}}},x=n,P=f;K(f,{plo:[],lad:function(a){f.plo.push(a)}});K(f,{pub:function(){return _euc((window.addthis_config||{}).username||window.addthis_pub||"")},igv:function(a,b){if(!t.addthis_share){t.addthis_share={}}if(!addthis_share.url){addthis_share.url=(t.addthis_url||a||"").split("#{").shift()}if(!addthis_share.title){addthis_share.title=(t.addthis_title||b||"").split("#{").shift()}if(!t.addthis_config){t.addthis_config={username:t.addthis_pub}}else{if(addthis_config.data_use_cookies===false){_atc.xck=1}}}});if(!_atc.ost){if(!t.addthis_conf){t.addthis_conf={}}for(var I in addthis_conf){_atc[I]=addthis_conf[I]}_atc.ost=1}(function(b,l,e){var q,p=document,a=b.util;b.ckv=a.fromKV(p.cookie,";");function i(d){return a.fromKV(p.cookie,";")[d]}if(!b.cookie){b.cookie={}}b.cookie.rck=i})(f,f.api,f);K(f,{qtp:[],xtp:function(){var b=f,d;while(d=b.qtp.pop()){b.trk(d)}},pcs:[],apc:function(b){b=b.split("-").shift();for(var a=0;a<f.pcs.length;a++){if(f.pcs[a]==b){return}}f.pcs.push(b)},gat:function(){},atf:null,get_atssh:function(){var e=document,b=f,i=e.getElementById("_atssh");if(!i){i=e.ce("div");i.style.visibility="hidden";i.id="_atssh";b.opp(i.style);e.body.insertBefore(i,e.body.firstChild)}return i},ctf:function(i){var p=document,e=window,b=f,s,l=Math.floor(Math.random()*1000),q=b.get_atssh();if(!b.bro.msi){s=p.ce("iframe");s.id="_atssh"+l}else{if(b.bro.ie6&&!i&&p.location.protocol.indexOf("https")==0){i="javascript:''"}q.innerHTML='<iframe id="_atssh'+l+'" width="1" height="1" name="_atssh'+l+'" '+(i?'src="'+i+'"':"")+">";s=p.getElementById("_atssh"+l)}b.opp(s.style);s.frameborder=s.style.border=0;s.style.top=s.style.left=0;return s},off:function(){return Math.floor((new Date().getTime()-f.sttm)/100).toString(16)},oms:function(d){var b=f;if(d&&d.data&&d.data.service){if(!b.upm){if(b.dcp){return}b.dcp=1}b.trk({gen:300,sh:d.data.service})}},omp:function(b,d,e){var a={};if(b){a.sh=b}if(d){a.cm=d}if(e){a.cs=e}f.img("sh","3",null,a)},trk:function(e){var d=f,i=d.dr,b=(d.rev||"");if(!e){return}if(i){i=i.split("http://").pop()}e.xck=_atc.xck?1:0;e.xxl=1;e.sid=d.ssid();e.pub=d.pub();e.ssl=d.ssl||0;e.du=d.tru(d.du||d.dl.href);if(d.dt){e.dt=d.dt}if(d.cb){e.cb=d.cb}e.lng=d.lng();e.ver=_atc.ver;if(!d.upm&&d.uid){e.uid=d.uid}e.pc=d.pcs.join(",");if(i){e.dr=d.tru(i)}if(d.dh){e.dh=d.dh}if(b){e.rev=b}if(d.xfr){if(d.upm){if(d.atf){d.atf.contentWindow.postMessage(m(e),"*")}}else{var l=d.get_atssh();base="static/r07/sh21.html"+(false?"?t="+new Date().getTime():"");if(d.atf){l.removeChild(l.firstChild)}d.atf=d.ctf();d.atf.src=_atr+base+"#"+m(e);l.appendChild(d.atf)}}else{f.qtp.push(e)}},img:function(l,r,b,p,q){if(!window.at_sub&&!_atc.xtr){var d=f,e=p||{};e.evt=l;if(b){e.ext=b}d.avt=e;if(q===1){d.xmi(true)}else{d.sxm(true)}}},cuid:function(){return((f.sttm/1000)&f.max).toString(16)+("00000000"+(Math.floor(Math.random()*(f.max+1))).toString(16)).slice(-8)},ssid:function(){if(f.sid===0){f.sid=f.cuid()}return f.sid},sta:function(){var b=f;return"AT-"+(b.pub()?b.pub():"unknown")+"/-/"+b.ab+"/"+b.ssid()+"/"+(b.seq++)+(b.uid!==null?"/"+b.uid:"")},cst:function(a){return"CXNID=2000001.521545608054043907"+(a||2)+"NXC"},fcv:function(b,a){return _euc(b)+"="+_euc(a)+";"+f.off()},cev:function(b,a){f.cvt.push(f.fcv(b,a));f.sxm(true)},sxm:function(a){if(f.tmo!==null){clearTimeout(f.tmo)}if(a){f.tmo=f.sto("_ate.xmi(false)",f.wait)}},xmi:function(r){var b=f,p=b.dl?b.dl.hostname:"";if(b.cvt.length>0||b.avt){b.sxm(false);if(_atc.xtr){return}var l=b.avt||{};l.ce=b.cvt.join(",");b.cvt=[];b.avt=null;b.trk(l);if(r){var q=document,e=q.ce("iframe");e.id="_atf";f.opp(e.style);q.body.appendChild(e);e=q.getElementById("_atf")}}}});K(f,{_rec:[],rec:function(e){if(!e){return}var q=j(e),b=f,d=b.atf,l=b._rec,w;if(q.ssh){b.ssh(q.ssh)}if(q.uid){b.uid=q.uid}if(q.dbm){b.dbm=q.dbm}if(q.rdy){b.xfr=1;b.xtp();return}for(var R=0;R<l.length;R++){l[R](q)}},xfr:!f.upm||!f.bro.ffx,ssh:function(b){f.gssh=1;var a=window.addthis_ssh=_duc(b);f._ssh=a.split(",")},com:function(a){if(window.parent&&window.postMessage){window.parent.postMessage(a,"*")}else{f.ifm(a)}},ifm:function(b){if(addthis_wpl){var d=(addthis_wpl.split("#"))[0];window.parent.location.href=d+"#at"+b}return false},pmh:function(a){if(a.origin.slice(-12)==".addthis.com"){f.rec(a.data)}}});K(f,{lng:function(){return window.addthis_language||(window.addthis_config||{}).ui_language||(f.bro.msi?navigator.userLanguage:navigator.language)},iwb:function(a){var b={th:1,pl:1,sl:1,gl:1,hu:1,is:1,nb:1,se:1,su:1};return !!b[a]},ivl:function(a){var b={af:1,afr:"af",ar:1,ara:"ar",az:1,aze:"az",be:1,bye:"be",bg:1,bul:"bg",bn:1,ben:"bn",bs:1,bos:"bs",ca:1,cat:"ca",cs:1,ces:"cs",cze:"cs",cy:1,cym:"cy",da:1,dan:"da",de:1,deu:"de",ger:"de",el:1,gre:"el",ell:"ell",es:1,esl:"es",spa:"spa",et:1,est:"et",eu:1,fa:1,fas:"fa",per:"fa",fi:1,fin:"fi",fo:1,fao:"fo",fr:1,fra:"fr",fre:"fr",ga:1,gae:"ga",gdh:"ga",gl:1,glg:"gl",he:1,heb:"he",hi:1,hin:"hin",hr:1,cro:"hr",hu:1,hun:"hu",id:1,ind:"id",is:1,ice:"is",it:1,ita:"it",ja:1,jpn:"ja",ko:1,kor:"ko",ku:1,lb:1,ltz:"lb",lt:1,lit:"lt",lv:1,lav:"lv",mk:1,mac:"mk",mak:"mk",mn:1,ml:1,ms:1,msa:"ms",may:"ms",nb:1,nl:1,nla:"nl",dut:"nl",no:1,nn:1,nno:"no",oc:1,oci:"oc",pl:1,pol:"pl",pt:1,por:"pt",ro:1,ron:"ro",rum:"ro",ru:1,rus:"ru",sk:1,slk:"sk",slo:"sk",sl:1,slv:"sl",sq:1,alb:"sq",sr:1,se:1,ser:"sr",su:1,sv:1,sve:"sv",sw:1,swe:"sv",ta:1,tam:"ta",te:1,teg:"te",th:1,tha:"th",tl:1,tgl:"tl",tr:1,tur:"tr",uk:1,ukr:"uk",ur:1,urd:"ur",vi:1,vie:"vi","zh-hk":1,"chi-hk":"zh-hk","zho-hk":"zh-hk","zh-tr":1,"chi-tr":"zh-tr","zho-tr":"zh-tr","zh-tw":1,"chi-tw":"zh-tw","zho-tw":"zh-tw",zh:1,chi:"zh",zho:"zh"};if(b[a]){return b[a]}a=a.split("-").shift();if(b[a]){if(b[a]===1){return a}else{return b[a]}}return 0},gvl:function(a){var b=f.ivl(a)||"en";if(b===1){b=a}return b},alg:function(e,d){var a=(e||f.lng()||"en").toLowerCase(),b=f.ivl(a);if(a.indexOf("en")!==0&&(!f.pll||d)){if(b){if(b!==1){a=b}f.pll=f.ajs("static/r07/lang03/"+a+".js")}}}});K(f,{trim:function(a,b){try{a=a.replace(/^[\s\u3000]+|[\s\u3000]+$/g,"");if(b){a=_euc(a)}}catch(b){}return a||""},trl:[],tru:function(b,a){var d="";if(b){d=b.substr(0,300);if(d!=b){f.trl.push(a)}}return d},sto:function(b,a){return setTimeout(b,a)},opp:function(a){a.width=a.height="1px";a.position="absolute";a.zIndex=100000},jlr:{},ajs:function(b,a){if(!f.jlr[b]){var e=M.ce("script"),d=M.gn("head")[0]||M.documentElement;e.src=(a?"":_atr)+b;d.insertBefore(e,d.firstChild);f.jlr[b]=1;return e}return 1},jlo:function(){try{var q=document,b=f,p=b.lng(),i=function(d){var a=new Image();f.imgz.push(a);a.src=d};b.alg(p);if(!b.pld){if(b.bro.ie6){i(_atr+b.spt);i(_atr+"static/t00/logo1414.gif");i(_atr+"static/t00/logo88.gif");if(window.addthis_feed){i("static/r05/feed00.gif",1)}}if(b.pll&&!window.addthis_translations){b.sto(function(){b.pld=b.ajs("static/r07/menu58.js")},10)}else{b.pld=b.ajs("static/r07/menu58.js")}}}catch(l){}},ao:function(b,l,i,d,e,a){f.lad(["open",b,l,i,d,e,a]);f.jlo();return false},ac:function(){},as:function(b,d,a){f.lad(["send",b,d,a]);f.jlo()}});(function(e,l,q){var w=document,r=1,a=["cbea","kkk","zvys","phz"];function b(d){return d.replace(/[a-zA-Z]/g,function(i){return String.fromCharCode((i<="Z"?90:122)>=(i=i.charCodeAt(0)+13)?i:i-26)})}for(var p=0;p<a.length;p++){a[p]=" "+b(a[p])+" "}function s(i){var T=0,S;i=(i||"").toLowerCase()+" ";if(!i){return T}for(var d=0;d<a.length;d++){S=a[d];if(i==S.replace(/ /g,"")||i.indexOf(S)>-1||i.indexOf(S.replace(/^ /g,""))===0){T|=r}}return T}function R(){var V=(t.addthis_title||w.title),S=s(V),U=w.all?w.all.tags("META"):w.getElementsByTagName?w.getElementsByTagName("META"):new Array();if(U&&U.length){for(var T=0;T<U.length;T++){var d=U[T]||{},X=(d.name||"").toLowerCase(),W=d.content;if(X=="description"||X=="keywords"){S|=s(W)}}}return S}if(!e.ad){e.ad={}}e.ad.cla=R})(f,f.api,f);(function(l,p,q){var e,s=document,S=l.util,b=l.event.EventDispatcher,w=25,i=[];function r(V,X,U){var d=[];function d(){d.push(arguments)}function W(){U[V]=X;while(d.length){X.apply(U,d.shift())}}d.ready=W;return d}function R(V){if(V&&V instanceof a){i.push(V)}for(var d=0;d<i.length;){var U=i[d];if(U&&U.test()){i.splice(d,1);a.fire("load",U,{resource:U})}else{d++}}if(i.length){setTimeout(R,w)}}function a(X,U,W){var d=this,V=new b(d);V.decorate(V).decorate(d);this.ready=false;this.loading=false;this.id=X;this.url=U;if(typeof(W)==="function"){this.test=W}else{this.test=function(){return(!!_window[W])}}a.addEventListener("load",function(Y){var Z=Y.resource;if(!Z||Z.id!==d.id){return}d.loading=false;d.ready=true;V.fire(Y.type,Z,{resource:Z})})}S.extend(a.prototype,{load:function(){if(this.url.substr(this.url.length-4)==".css"){var d=s.ce("link"),U=(s.gn("head")[0]||s.documentElement);d.rel="stylesheet";d.type="text/css";d.href=this.url;d.media="all";U.insertBefore(d,U.firstChild)}else{f.ajs(this.url,1)}this.loading=true;a.monitor(this)}});var T=new b(a);T.decorate(T).decorate(a);S.extend(a,{known:{jquery:new a("jquery","//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js","jQuery"),ga:new a("ga","//www.google-analytics.com/ga.js",function(){var d=_window._gat;return !!(d&&(typeof(d._getTracker)==="function"))})},loading:i,monitor:R});l.resource={Resource:a,ApiQueueFactory:r}})(f,f.api,f);var t=window,N=t.addthis_config||{},o=new f.resource.Resource("widgetcss",_atr+"static/r07/widget41.css",function(){return true});function h(){try{if(_atc.xol&&!_atc.xcs){o.load()}var ae=f,q=ae.bro.msi,b=0,T=M.title,U=M.referer||M.referrer||"",S=H?H.href:null,r=S,ab=H.hostname,ad=S?S.indexOf("sms_ss"):-1,X=(f.lng().split("-")).shift(),p=(H.href.indexOf(_atr)==-1&&!ae.sub),Y=M.gn("link"),d=_atr+"static/r07/sh21.html#",V=S&&S.indexOf("https")===0?1:0,s,af,R=function(){if(!f.pcs.length){var a=window.addthis_product||("men-"+_atc.ver);f.pcs.push(a)}af.pc=f.pcs.join(",")};if(window.addthis_product){f.pcs.push(addthis_product)}for(var Z=0;Z<Y.length;Z++){var W=Y[Z];if(W.rel&&W.rel=="canonical"&&W.href){r=W.href}}r=r.split("#{").shift();ae.igv(r,M.title||"");ae.dr=ae.tru(U,"fr");ae.du=ae.tru(r,"fp");ae.dt=T=t.addthis_share.title;ae.cb=ae.ad.cla();ae.dh=H.hostname;ae.ssl=V;af={cb:ae.cb,ab:ae.ab,dh:ae.dh,dr:ae.dr,du:ae.du,dt:T,inst:ae.inst,lng:ae.lng(),pc:t.addthis_product||"men",pub:ae.pub(),ssl:V,sid:f.ssid(),srd:_atc.damp,srf:_atc.famp,srp:_atc.pamp,srx:_atc.xamp,ver:_atc.ver,xck:_atc.xck||0};if(ae.trl.length){af.trl=ae.trl.join(",")}if(ae.rev){af.rev=ae.rev}if(ad>-1&&S.indexOf(_atd+"book")==-1){var w=[];var aa=S.substr(ad);aa=aa.split("&").shift().split("#").shift().split("=").pop();af.sr=aa;if(ae.vamp>=0&&!ae.sub&&aa.length){w.push(ae.fcv("plv",Math.round(1/_atc.vamp)));w.push(ae.fcv("rsc",aa));af.ce=w.join(",")}}if(ae.upm){af.xd=1;if(f.bro.ffx){af.xld=1}}if(p){if(ae.upm){if(q){f.sto(function(){R();ae.atf=s=ae.ctf(d+m(af))},f.wait);t.attachEvent("onmessage",ae.pmh)}else{s=ae.ctf();t.addEventListener("message",ae.pmh,false)}if(f.bro.ffx){s.src=d;f.qtp.push(af)}else{if(!q){f.sto(function(){R();s.src=d+m(af)},f.wait)}}}else{s=ae.ctf();f.sto(function(){R();s.src=d+m(af)},f.wait)}if(s){ae.atf=s=ae.get_atssh().appendChild(s)}}if(t.addthis_language||N.ui_language){ae.alg()}if(ae.plo.length>0){ae.jlo()}}catch(ac){}}f.ed.addEventListener("addthis.menu.share",f.oms);t._ate=P;t._adr=x;try{var E=M.gn("script"),v=E[E.length-1],y=v.src.indexOf("#")>-1?v.src.replace(/^[^\#]+\#?/,""):v.src.replace(/^[^\?]+\??/,""),z=j(y);if(z.pub||z.username){t.addthis_pub=_duc(z.pub?z.pub:z.username)}if(t.addthis_pub&&t.addthis_config){t.addthis_config.username=t.addthis_pub}if(z.domready){_atc.dr=1}if(z.async){_atc.xol=1}if(_atc.ver===120){var D="atb"+f.cuid();M.write('<span id="'+D+'"></span>');f.igv();f.lad(["span",D,addthis_share.url||"[url]",addthis_share.title||"[title]"])}if(t.addthis_clickout){f.lad(["cout"])}if(!_atc.xol&&!_atc.xcs&&N.ui_use_css!==false){o.load()}}catch(L){if(window.console){console.log("main",L)}}n.bindReady();n.append(h);(function(i,p,q){var r=document,U=function(){var V=r.gn("link"),X={};for(var W=0;W<V.length;W++){var d=V[W];if(d.href&&d.rel){X[d.rel]=d.href}}return X},R=U(),e=function(){var d=r.location.protocol;if(d=="file:"){d="http:"}return d+"//"+_atd},T=function(){if(f.dr){return"&pre="+_euc(f.dr)}else{return""}},b=function(W,X,V,d){return e()+(X?"feed.php":"bookmark.php")+"?v="+(_atc.ver)+"&winname=addthis&"+l(W,X,V,d)+"&"+f.cst(4)+T()+"&tt=0"},l=function(ae,X,ah,am){var ab=f.trim,aj=window,af=f.pub(),Z=window._atw||{},aa=ab((ah&&ah.url?ah.url:(Z.share&&Z.share.url?Z.share.url:addthis_url)),1),al,W=function(an){if(aa&&aa!=""){var d=aa.indexOf("%23at"+an);if(d>-1){aa=aa.substr(0,d)}}};if(!am){am=Z.conf||{}}else{for(var ag in Z.conf){if(!(am[ag])){am[ag]=Z.conf[ag]}}}if(!ah){ah=Z.share}else{for(var ag in Z.share){if(!(ah[ag])){ah[ag]=Z.share[ag]}}}al=am.services_custom;W("pro");W("opp");W("cle");W("clb");W("abc");if(aa.indexOf("addthis.com/static/r07/ab")>-1){aa=_duc(aa);aa=aa.split("&");for(var ai=0;ai<aa.length;ai++){var ac=aa[ai].split("=");if(ac.length==2){if(ac[0]=="url"){aa=ab(ac[1],1);break}}}}if(al instanceof Array){for(var ai=0;ai<al.length;ai++){if(al[ai].code==ae){al=al[ai];break}}}var ak=((ah&&ah.templates&&ah.templates[ae])?ah.templates[ae]:""),V=((ah&&ah.modules&&ah.modules[ae])?ah.modules[ae]:""),ad=(am.product||aj.addthis_product||("men-"+_atc.ver)),Y="";if(ah.email_vars){for(var ag in ah.email_vars){Y+=(Y==""?"":"&")+_euc(ag)+"="+_euc(ah.email_vars[ag])}}if(Z.mck>1||(Z.mck==1&&ae!=="e")){ad=ad.replace("men","max")}return"pub="+af+"&source="+ad+"&lng="+(f.lng()||"xx")+"&s="+ae+(am.ui_508_compliant?"&u508=1":"")+(X?"&h1="+ab((ah.feed||ah.url).replace("feed://",""),1)+"&t1=":"&url="+aa+"&title=")+ab(ah.title||aj.addthis_title,1)+(_atc.ver<200?"&logo="+ab(aj.addthis_logo,1)+"&logobg="+ab(aj.addthis_logo_background,1)+"&logocolor="+ab(aj.addthis_logo_color,1):"")+"&ate="+f.sta()+(window.addthis_ssh&&addthis_ssh.indexOf(ae)>-1?"&ips=1":"")+(f.uid?"&uid="+_euc(f.uid):"")+(ah.email_template?"&email_template="+_euc(ah.email_template):"")+(Y?"&email_vars="+_euc(Y):"")+(ah.description?"&description="+ab(ah.description,1):"")+(ah.html?"&html="+ab(ah.html,1):(ah.content?"&html="+ab(ah.content,1):""))+(ah.screenshot?"&screenshot="+ab(ah.screenshot,1):"")+(ah.swfurl?"&swfurl="+ab(ah.swfurl,1):"")+(ah.iframeurl?"&iframeurl="+ab(ah.iframeurl,1):"")+(ah.width?"&width="+ah.width:"")+(ah.height?"&height="+ah.height:"")+(am.data_track_p32?"&p32="+am.data_track_p32:"")+(am.data_track_clickback||am.data_track_linkback||!af||af=="AddThis"?"&sms_ss=1":"")+((al&&al.url)?"&acn="+_euc(al.name)+"&acc="+_euc(al.code)+"&acu="+_euc(al.url):"")+(ak?"&template="+ab(ak,1):"")+(V?"&module="+ab(V,1):"")+(am.ui_cobrand?"&ui_cobrand="+ab(am.ui_cobrand,1):"")+(am.ui_header_color?"&ui_header_color="+ab(am.ui_header_color,1):"")+(am.ui_header_background?"&ui_header_background="+ab(am.ui_header_background,1):"")},s=function(W,d){var V=f.pub();return"mailto:?subject="+_euc(W.title?W.title:W.url)+"&body="+_euc(W.title?W.title:"")+(W.title?"%0D%0A":"")+_euc(W.url+(d.data_track_clickback||d.data_track_linkback||!V||V=="AddThis"?((W.url.indexOf("?")>-1)?"&":"?")+"sms_ss=mailto":""))+"%0D%0A%0D%0AShared via AddThis.com"},S=[],a=function(X,Y,W,V){var d;if(X=="email"){d=b(W,V)}else{d=b(X,Y,W,V)}S.push(f.ajs(d,1))},w=function(V,d){return e()+"tellfriend.php?&fromname=aaa&fromemail="+_euc(d.from)+"&frommenu=1&tofriend="+_euc(d.to)+(V.email_template?"&template="+_euc(V.email_template):"")+(d.vars?"&vars="+_euc(d.vars):"")+(window.addthis_ssh.indexOf("email")>-1?"&ips=1":"")+"&lng="+(f.lng()||"xx")+"&note="+_euc(d.note)+"&"+l("e")};i.share={uadd:l,genurl:b,geneurl:w,genieu:s,svcurl:e,track:a,links:R}})(f,f.api,f)})();function addthis_open(){if(typeof iconf=="string"){iconf=null}return _ate.ao.apply(_ate,arguments)}function addthis_close(){_ate.ac()}function addthis_sendto(){_ate.as.apply(_ate,arguments);return false}if(_atc.dr){_adr.onReady()}}else{_ate.inst++}if(_atc.abf){addthis_open(document.getElementById("ab"),"emailab",window.addthis_url||"[URL]",window.addthis_title||"[TITLE]")};