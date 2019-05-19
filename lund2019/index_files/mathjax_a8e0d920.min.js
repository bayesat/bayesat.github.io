if(document.getElementById&&document.childNodes&&document.createElement){if(!(window.MathJax&&MathJax.Hub)){if(window.MathJax){window.MathJax={AuthorConfig:window.MathJax}}
else{window.MathJax={}}
MathJax.isPacked=true;MathJax.version="2.6.1";MathJax.fileversion="2.6.1";MathJax.cdnVersion="2.6.1";MathJax.cdnFileVersions={};(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}
var PROTO=[];var OBJECT=function(def){var obj=def.constructor;if(!obj){obj=function(){}}
for(var id in def){if(id!=='constructor'&&def.hasOwnProperty(id)){obj[id]=def[id]}}
return obj;};var CONSTRUCTOR=function(){return function(){return arguments.callee.Init.call(this,arguments)};};BASE.Object=OBJECT({constructor:CONSTRUCTOR(),Subclass:function(def,classdef){var obj=CONSTRUCTOR();obj.SUPER=this;obj.Init=this.Init;obj.Subclass=this.Subclass;obj.Augment=this.Augment;obj.protoFunction=this.protoFunction;obj.can=this.can;obj.has=this.has;obj.isa=this.isa;obj.prototype=new this(PROTO);obj.prototype.constructor=obj;obj.Augment(def,classdef);return obj;},Init:function(args){var obj=this;if(args.length===1&&args[0]===PROTO){return obj}
if(!(obj instanceof args.callee)){obj=new args.callee(PROTO)}
return obj.Init.apply(obj,args)||obj;},Augment:function(def,classdef){var id;if(def!=null){for(id in def){if(def.hasOwnProperty(id)){this.protoFunction(id,def[id])}}
if(def.toString!==this.prototype.toString&&def.toString!=={}.toString)
{this.protoFunction('toString',def.toString)}}
if(classdef!=null){for(id in classdef){if(classdef.hasOwnProperty(id)){this[id]=classdef[id]}}}
return this;},protoFunction:function(id,def){this.prototype[id]=def;if(typeof def==="function"){def.SUPER=this.SUPER.prototype}},prototype:{Init:function(){},SUPER:function(fn){return fn.callee.SUPER},can:function(method){return typeof(this[method])==="function"},has:function(property){return typeof(this[property])!=="undefined"},isa:function(obj){return(obj instanceof Object)&&(this instanceof obj)}},can:function(method){return this.prototype.can.call(this,method)},has:function(property){return this.prototype.has.call(this,property)},isa:function(obj){var constructor=this;while(constructor){if(constructor===obj){return true}else{constructor=constructor.SUPER}}
return false;},SimpleSUPER:OBJECT({constructor:function(def){return this.SimpleSUPER.define(def)},define:function(src){var dst={};if(src!=null){for(var id in src){if(src.hasOwnProperty(id)){dst[id]=this.wrap(id,src[id])}}
if(src.toString!==this.prototype.toString&&src.toString!=={}.toString)
{dst.toString=this.wrap('toString',src.toString)}}
return dst;},wrap:function(id,f){if(typeof(f)!=='function'||!f.toString().match(/\.\s*SUPER\s*\(/)){return f}
var fn=function(){this.SUPER=fn.SUPER[id];try{var result=f.apply(this,arguments)}catch(err){delete this.SUPER;throw err}
delete this.SUPER;return result;}
fn.toString=function(){return f.toString.apply(f,arguments)}
return fn;}})});})("MathJax");(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}
var CALLBACK=function(data){var cb=function(){return arguments.callee.execute.apply(arguments.callee,arguments)};for(var id in CALLBACK.prototype){if(CALLBACK.prototype.hasOwnProperty(id)){if(typeof(data[id])!=='undefined'){cb[id]=data[id]}
else{cb[id]=CALLBACK.prototype[id]}}}
cb.toString=CALLBACK.prototype.toString;return cb;};CALLBACK.prototype={isCallback:true,hook:function(){},data:[],object:window,execute:function(){if(!this.called||this.autoReset){this.called=!this.autoReset;return this.hook.apply(this.object,this.data.concat([].slice.call(arguments,0)));}},reset:function(){delete this.called},toString:function(){return this.hook.toString.apply(this.hook,arguments)}};var ISCALLBACK=function(f){return(typeof(f)==="function"&&f.isCallback);}
var EVAL=function(code){return eval.call(window,code)}
var TESTEVAL=function(){EVAL("var __TeSt_VaR__ = 1");if(window.__TeSt_VaR__){try{delete window.__TeSt_VaR__;}
catch(error){window.__TeSt_VaR__=null;}}else{if(window.execScript){EVAL=function(code){BASE.__code=code;code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";window.execScript(code);var result=BASE.__result;delete BASE.__result;delete BASE.__code;if(result instanceof Error){throw result}
return result;}}else{EVAL=function(code){BASE.__code=code;code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";var head=(document.getElementsByTagName("head"))[0];if(!head){head=document.body}
var script=document.createElement("script");script.appendChild(document.createTextNode(code));head.appendChild(script);head.removeChild(script);var result=BASE.__result;delete BASE.__result;delete BASE.__code;if(result instanceof Error){throw result}
return result;}}}
TESTEVAL=null;}
var USING=function(args,i){if(arguments.length>1){if(arguments.length===2&&!(typeof arguments[0]==='function')&&arguments[0]instanceof Object&&typeof arguments[1]==='number')
{args=[].slice.call(args,i)}
else{args=[].slice.call(arguments,0)}}
if(args instanceof Array&&args.length===1){args=args[0]}
if(typeof args==='function'){if(args.execute===CALLBACK.prototype.execute){return args}
return CALLBACK({hook:args});}else if(args instanceof Array){if(typeof(args[0])==='string'&&args[1]instanceof Object&&typeof args[1][args[0]]==='function'){return CALLBACK({hook:args[1][args[0]],object:args[1],data:args.slice(2)});}else if(typeof args[0]==='function'){return CALLBACK({hook:args[0],data:args.slice(1)});}else if(typeof args[1]==='function'){return CALLBACK({hook:args[1],object:args[0],data:args.slice(2)});}}else if(typeof(args)==='string'){if(TESTEVAL)TESTEVAL();return CALLBACK({hook:EVAL,data:[args]});}else if(args instanceof Object){return CALLBACK(args);}else if(typeof(args)==='undefined'){return CALLBACK({});}
throw Error("Can't make callback from given data");};var DELAY=function(time,callback){callback=USING(callback);callback.timeout=setTimeout(callback,time);return callback;};var WAITFOR=function(callback,signal){callback=USING(callback);if(!callback.called){WAITSIGNAL(callback,signal);signal.pending++}};var WAITEXECUTE=function(){var signals=this.signal;delete this.signal;this.execute=this.oldExecute;delete this.oldExecute;var result=this.execute.apply(this,arguments);if(ISCALLBACK(result)&&!result.called){WAITSIGNAL(result,signals)}else{for(var i=0,m=signals.length;i<m;i++){signals[i].pending--;if(signals[i].pending<=0){signals[i].call()}}}};var WAITSIGNAL=function(callback,signals){if(!(signals instanceof Array)){signals=[signals]}
if(!callback.signal){callback.oldExecute=callback.execute;callback.execute=WAITEXECUTE;callback.signal=signals;}else if(signals.length===1){callback.signal.push(signals[0])}
else{callback.signal=callback.signal.concat(signals)}};var AFTER=function(callback){callback=USING(callback);callback.pending=0;for(var i=1,m=arguments.length;i<m;i++)
{if(arguments[i]){WAITFOR(arguments[i],callback)}}
if(callback.pending===0){var result=callback();if(ISCALLBACK(result)){callback=result}}
return callback;};var HOOKS=MathJax.Object.Subclass({Init:function(reset){this.hooks=[];this.remove=[];this.reset=reset;this.running=false;},Add:function(hook,priority){if(priority==null){priority=10}
if(!ISCALLBACK(hook)){hook=USING(hook)}
hook.priority=priority;var i=this.hooks.length;while(i>0&&priority<this.hooks[i-1].priority){i--}
this.hooks.splice(i,0,hook);return hook;},Remove:function(hook){for(var i=0,m=this.hooks.length;i<m;i++){if(this.hooks[i]===hook){if(this.running){this.remove.push(i)}
else{this.hooks.splice(i,1)}
return;}}},Execute:function(){var callbacks=[{}];this.running=true;for(var i=0,m=this.hooks.length;i<m;i++){if(this.reset){this.hooks[i].reset()}
var result=this.hooks[i].apply(window,arguments);if(ISCALLBACK(result)&&!result.called){callbacks.push(result)}}
this.running=false;if(this.remove.length){this.RemovePending()}
if(callbacks.length===1){return null}
if(callbacks.length===2){return callbacks[1]}
return AFTER.apply({},callbacks);},RemovePending:function(){this.remove=this.remove.sort();for(var i=this.remove.length-1;i>=0;i--){this.hooks.splice(i,1)}
this.remove=[];}});var EXECUTEHOOKS=function(hooks,data,reset){if(!hooks){return null}
if(!(hooks instanceof Array)){hooks=[hooks]}
if(!(data instanceof Array)){data=(data==null?[]:[data])}
var handler=HOOKS(reset);for(var i=0,m=hooks.length;i<m;i++){handler.Add(hooks[i])}
return handler.Execute.apply(handler,data);};var QUEUE=BASE.Object.Subclass({Init:function(){this.pending=this.running=0;this.queue=[];this.Push.apply(this,arguments);},Push:function(){var callback;for(var i=0,m=arguments.length;i<m;i++){callback=USING(arguments[i]);if(callback===arguments[i]&&!callback.called)
{callback=USING(["wait",this,callback])}
this.queue.push(callback);}
if(!this.running&&!this.pending){this.Process()}
return callback;},Process:function(queue){while(!this.running&&!this.pending&&this.queue.length){var callback=this.queue[0];queue=this.queue.slice(1);this.queue=[];this.Suspend();var result=callback();this.Resume();if(queue.length){this.queue=queue.concat(this.queue)}
if(ISCALLBACK(result)&&!result.called){WAITFOR(result,this)}}},Suspend:function(){this.running++},Resume:function(){if(this.running){this.running--}},call:function(){this.Process.apply(this,arguments)},wait:function(callback){return callback}});var SIGNAL=QUEUE.Subclass({Init:function(name){QUEUE.prototype.Init.call(this);this.name=name;this.posted=[];this.listeners=HOOKS(true);this.posting=false;this.callback=null;},Post:function(message,callback,forget){callback=USING(callback);if(this.posting||this.pending){this.Push(["Post",this,message,callback,forget]);}else{this.callback=callback;callback.reset();if(!forget){this.posted.push(message)}
this.Suspend();this.posting=true;var result=this.listeners.Execute(message);if(ISCALLBACK(result)&&!result.called){WAITFOR(result,this)}
this.Resume();this.posting=false;if(!this.pending){this.call()}}
return callback;},Clear:function(callback){callback=USING(callback);if(this.posting||this.pending){callback=this.Push(["Clear",this,callback]);}else{this.posted=[];callback();}
return callback;},call:function(){this.callback(this);this.Process()},Interest:function(callback,ignorePast,priority){callback=USING(callback);this.listeners.Add(callback,priority);if(!ignorePast){for(var i=0,m=this.posted.length;i<m;i++){callback.reset();var result=callback(this.posted[i]);if(ISCALLBACK(result)&&i===this.posted.length-1){WAITFOR(result,this)}}}
return callback;},NoInterest:function(callback){this.listeners.Remove(callback);},MessageHook:function(msg,callback,priority){callback=USING(callback);if(!this.hooks){this.hooks={};this.Interest(["ExecuteHooks",this])}
if(!this.hooks[msg]){this.hooks[msg]=HOOKS(true)}
this.hooks[msg].Add(callback,priority);for(var i=0,m=this.posted.length;i<m;i++)
{if(this.posted[i]==msg){callback.reset();callback(this.posted[i])}}
callback.msg=msg;return callback;},ExecuteHooks:function(msg){var type=((msg instanceof Array)?msg[0]:msg);if(!this.hooks[type]){return null}
return this.hooks[type].Execute(msg);},RemoveHook:function(hook){this.hooks[hook.msg].Remove(hook);}},{signals:{},find:function(name){if(!SIGNAL.signals[name]){SIGNAL.signals[name]=new SIGNAL(name)}
return SIGNAL.signals[name];}});BASE.Callback=BASE.CallBack=USING;BASE.Callback.Delay=DELAY;BASE.Callback.After=AFTER;BASE.Callback.Queue=QUEUE;BASE.Callback.Signal=SIGNAL.find;BASE.Callback.Hooks=HOOKS;BASE.Callback.ExecuteHooks=EXECUTEHOOKS;})("MathJax");(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}
var isSafari2=(navigator.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub==="undefined");var sheets=0;var HEAD=function(head){if(document.styleSheets&&document.styleSheets.length>sheets)
{sheets=document.styleSheets.length}
if(!head){head=document.head||((document.getElementsByTagName("head"))[0]);if(!head){head=document.body}}
return head;};var SCRIPTS=[];var REMOVESCRIPTS=function(){for(var i=0,m=SCRIPTS.length;i<m;i++){BASE.Ajax.head.removeChild(SCRIPTS[i])}
SCRIPTS=[];};var PATH={};PATH[BASENAME]="";BASE.Ajax={loaded:{},loading:{},loadHooks:{},timeout:15*1000,styleDelay:1,config:{root:"",path:PATH},STATUS:{OK:1,ERROR:-1},fileURL:function(file){var match=file.match(/^\[([-._a-z0-9]+)\]/i);if(match&&match[1]in PATH)
{file=(PATH[match[1]]||this.config.root)+file.substr(match[1].length+2)}
return file;},fileName:function(url){var root=this.config.root;if(url.substr(0,root.length)===root){url="["+BASENAME+"]"+url.substr(root.length)}
else{for(var id in PATH){if(PATH.hasOwnProperty(id)&&PATH[id]){if(url.substr(0,PATH[id].length)===PATH[id])
{url="["+id+"]"+url.substr(PATH[id].length);break}}}}
return url;},fileRev:function(file){var rev=BASE.cdnFileVersions[name]||BASE.cdnVersion;if(rev){rev="?rev="+rev}
return rev;},urlRev:function(file){return this.fileURL(file)+this.fileRev(file)},Require:function(file,callback){callback=BASE.Callback(callback);var type;if(file instanceof Object){for(var i in file)
{if(file.hasOwnProperty(i)){type=i.toUpperCase();file=file[i]}}}else{type=file.split(/\./).pop().toUpperCase()}
file=this.fileURL(file);if(this.loaded[file]){callback(this.loaded[file]);}else{var FILE={};FILE[type]=file;this.Load(FILE,callback);}
return callback;},Load:function(file,callback){callback=BASE.Callback(callback);var type;if(file instanceof Object){for(var i in file)
{if(file.hasOwnProperty(i)){type=i.toUpperCase();file=file[i]}}}else{type=file.split(/\./).pop().toUpperCase()}
file=this.fileURL(file);if(this.loading[file]){this.addHook(file,callback);}else{this.head=HEAD(this.head);if(this.loader[type]){this.loader[type].call(this,file,callback)}
else{throw Error("Can't load files of type "+type)}}
return callback;},LoadHook:function(file,callback,priority){callback=BASE.Callback(callback);if(file instanceof Object)
{for(var i in file){if(file.hasOwnProperty(i)){file=file[i]}}}
file=this.fileURL(file);if(this.loaded[file]){callback(this.loaded[file])}
else{this.addHook(file,callback,priority)}
return callback;},addHook:function(file,callback,priority){if(!this.loadHooks[file]){this.loadHooks[file]=MathJax.Callback.Hooks()}
this.loadHooks[file].Add(callback,priority);callback.file=file;},removeHook:function(hook){if(this.loadHooks[hook.file]){this.loadHooks[hook.file].Remove(hook);if(!this.loadHooks[hook.file].hooks.length){delete this.loadHooks[hook.file]}}},Preloading:function(){for(var i=0,m=arguments.length;i<m;i++){var file=this.fileURL(arguments[i]);if(!this.loading[file]){this.loading[file]={preloaded:true}}}},loader:{JS:function(file,callback){var name=this.fileName(file);var script=document.createElement("script");var timeout=BASE.Callback(["loadTimeout",this,file]);this.loading[file]={callback:callback,timeout:setTimeout(timeout,this.timeout),status:this.STATUS.OK,script:script};this.loading[file].message=BASE.Message.File(name);script.onerror=timeout;script.type="text/javascript";script.src=file+this.fileRev(name);this.head.appendChild(script);},CSS:function(file,callback){var name=this.fileName(file);var link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.href=file+this.fileRev(name);this.loading[file]={callback:callback,message:BASE.Message.File(name),status:this.STATUS.OK};this.head.appendChild(link);this.timer.create.call(this,[this.timer.file,file],link);}},timer:{create:function(callback,node){callback=BASE.Callback(callback);if(node.nodeName==="STYLE"&&node.styleSheet&&typeof(node.styleSheet.cssText)!=='undefined'){callback(this.STATUS.OK);}else if(window.chrome&&node.nodeName==="LINK"){callback(this.STATUS.OK);}else if(isSafari2){this.timer.start(this,[this.timer.checkSafari2,sheets++,callback],this.styleDelay);}else{this.timer.start(this,[this.timer.checkLength,node,callback],this.styleDelay);}
return callback;},start:function(AJAX,check,delay,timeout){check=BASE.Callback(check);check.execute=this.execute;check.time=this.time;check.STATUS=AJAX.STATUS;check.timeout=timeout||AJAX.timeout;check.delay=check.total=delay||0;if(delay){setTimeout(check,delay)}else{check()}},time:function(callback){this.total+=this.delay;this.delay=Math.floor(this.delay*1.05+5);if(this.total>=this.timeout){callback(this.STATUS.ERROR);return 1}
return 0;},file:function(file,status){if(status<0){BASE.Ajax.loadTimeout(file)}else{BASE.Ajax.loadComplete(file)}},execute:function(){this.hook.call(this.object,this,this.data[0],this.data[1])},checkSafari2:function(check,length,callback){if(check.time(callback))return;if(document.styleSheets.length>length&&document.styleSheets[length].cssRules&&document.styleSheets[length].cssRules.length)
{callback(check.STATUS.OK)}else{setTimeout(check,check.delay)}},checkLength:function(check,node,callback){if(check.time(callback))return;var isStyle=0;var sheet=(node.sheet||node.styleSheet);try{if((sheet.cssRules||sheet.rules||[]).length>0){isStyle=1}}catch(err){if(err.message.match(/protected variable|restricted URI/)){isStyle=1}
else if(err.message.match(/Security error/)){isStyle=1;}}
if(isStyle){setTimeout(BASE.Callback([callback,check.STATUS.OK]),0);}else{setTimeout(check,check.delay);}}},loadComplete:function(file){file=this.fileURL(file);var loading=this.loading[file];if(loading&&!loading.preloaded){BASE.Message.Clear(loading.message);clearTimeout(loading.timeout);if(loading.script){if(SCRIPTS.length===0){setTimeout(REMOVESCRIPTS,0)}
SCRIPTS.push(loading.script);}
this.loaded[file]=loading.status;delete this.loading[file];this.addHook(file,loading.callback);}else{if(loading){delete this.loading[file]}
this.loaded[file]=this.STATUS.OK;loading={status:this.STATUS.OK}}
if(!this.loadHooks[file]){return null}
return this.loadHooks[file].Execute(loading.status);},loadTimeout:function(file){if(this.loading[file].timeout){clearTimeout(this.loading[file].timeout)}
this.loading[file].status=this.STATUS.ERROR;this.loadError(file);this.loadComplete(file);},loadError:function(file){BASE.Message.Set(["LoadFailed","File failed to load: %1",file],null,2000);BASE.Hub.signal.Post(["file load error",file]);},Styles:function(styles,callback){var styleString=this.StyleString(styles);if(styleString===""){callback=BASE.Callback(callback);callback();}else{var style=document.createElement("style");style.type="text/css";this.head=HEAD(this.head);this.head.appendChild(style);if(style.styleSheet&&typeof(style.styleSheet.cssText)!=='undefined'){style.styleSheet.cssText=styleString;}else{style.appendChild(document.createTextNode(styleString));}
callback=this.timer.create.call(this,callback,style);}
return callback;},StyleString:function(styles){if(typeof(styles)==='string'){return styles}
var string="",id,style;for(id in styles){if(styles.hasOwnProperty(id)){if(typeof styles[id]==='string'){string+=id+" {"+styles[id]+"}\n";}else if(styles[id]instanceof Array){for(var i=0;i<styles[id].length;i++){style={};style[id]=styles[id][i];string+=this.StyleString(style);}}else if(id.substr(0,6)==='@media'){string+=id+" {"+this.StyleString(styles[id])+"}\n";}else if(styles[id]!=null){style=[];for(var name in styles[id]){if(styles[id].hasOwnProperty(name)){if(styles[id][name]!=null)
{style[style.length]=name+': '+styles[id][name]}}}
string+=id+" {"+style.join('; ')+"}\n";}}}
return string;}};})("MathJax");MathJax.HTML={Element:function(type,def,contents){var obj=document.createElement(type),id;if(def){if(def.hasOwnProperty("style")){var style=def.style;def.style={};for(id in style){if(style.hasOwnProperty(id))
{def.style[id.replace(/-([a-z])/g,this.ucMatch)]=style[id]}}}
MathJax.Hub.Insert(obj,def);for(id in def){if(id==="role"||id.substr(0,5)==="aria-")obj.setAttribute(id,def[id]);}}
if(contents){if(!(contents instanceof Array)){contents=[contents]}
for(var i=0,m=contents.length;i<m;i++){if(contents[i]instanceof Array){obj.appendChild(this.Element(contents[i][0],contents[i][1],contents[i][2]));}else if(type==="script"){this.setScript(obj,contents[i]);}else{obj.appendChild(document.createTextNode(contents[i]));}}}
return obj;},ucMatch:function(match,c){return c.toUpperCase()},addElement:function(span,type,def,contents){return span.appendChild(this.Element(type,def,contents))},TextNode:function(text){return document.createTextNode(text)},addText:function(span,text){return span.appendChild(this.TextNode(text))},setScript:function(script,text){if(this.setScriptBug){script.text=text}else{while(script.firstChild){script.removeChild(script.firstChild)}
this.addText(script,text);}},getScript:function(script){var text=(script.text===""?script.innerHTML:script.text);return text.replace(/^\s+/,"").replace(/\s+$/,"");},Cookie:{prefix:"mjx",expires:365,Set:function(name,def){var keys=[];if(def){for(var id in def){if(def.hasOwnProperty(id)){keys.push(id+":"+def[id].toString().replace(/&/g,"&&"));}}}
var cookie=this.prefix+"."+name+"="+escape(keys.join('&;'));if(this.expires){var time=new Date();time.setDate(time.getDate()+this.expires);cookie+='; expires='+time.toGMTString();}
try{document.cookie=cookie+"; path=/"}catch(err){}},Get:function(name,obj){if(!obj){obj={}}
var pattern=new RegExp("(?:^|;\\s*)"+this.prefix+"\\."+name+"=([^;]*)(?:;|$)");var match;try{match=pattern.exec(document.cookie)}catch(err){};if(match&&match[1]!==""){var keys=unescape(match[1]).split('&;');for(var i=0,m=keys.length;i<m;i++){match=keys[i].match(/([^:]+):(.*)/);var value=match[2].replace(/&&/g,'&');if(value==="true"){value=true}else if(value==="false"){value=false}
else if(value.match(/^-?(\d+(\.\d+)?|\.\d+)$/)){value=parseFloat(value)}
obj[match[1]]=value;}}
return obj;}}};MathJax.Localization={locale:"en",directory:"[MathJax]/localization",strings:{"ast":{menuTitle:"asturianu"},"bg":{menuTitle:"\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"},"bcc":{menuTitle:"\u0628\u0644\u0648\u0686\u06CC"},"br":{menuTitle:"brezhoneg"},"ca":{menuTitle:"catal\u00E0"},"cdo":{menuTitle:"M\u00ECng-d\u0115\u0324ng-ng\u1E73\u0304"},"cs":{menuTitle:"\u010De\u0161tina"},"da":{menuTitle:"dansk"},"de":{menuTitle:"Deutsch"},"en":{menuTitle:"English",isLoaded:true},"eo":{menuTitle:"Esperanto"},"es":{menuTitle:"espa\u00F1ol"},"fa":{menuTitle:"\u0641\u0627\u0631\u0633\u06CC"},"fi":{menuTitle:"suomi"},"fr":{menuTitle:"fran\u00E7ais"},"gl":{menuTitle:"galego"},"he":{menuTitle:"\u05E2\u05D1\u05E8\u05D9\u05EA"},"ia":{menuTitle:"interlingua"},"it":{menuTitle:"italiano"},"ja":{menuTitle:"\u65E5\u672C\u8A9E"},"kn":{menuTitle:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"},"ko":{menuTitle:"\uD55C\uAD6D\uC5B4"},"lb":{menuTitle:"L\u00EBtzebuergesch"},"lt":{menuTitle:"lietuvi\u0173"},"mk":{menuTitle:"\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"},"nl":{menuTitle:"Nederlands"},"oc":{menuTitle:"occitan"},"pl":{menuTitle:"polski"},"pt":{menuTitle:"portugus\u00EA"},"pt-br":{menuTitle:"portugu\u00EAs do Brasil"},"ru":{menuTitle:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439"},"sco":{menuTitle:"Scots"},"scn":{menuTitle:"sicilianu"},"sl":{menuTitle:"sloven\u0161\u010Dina"},"sv":{menuTitle:"svenska"},"tr":{menuTitle:"T\u00FCrk\u00E7e"},"uk":{menuTitle:"\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},"vi":{menuTitle:"Ti\u1EBFng Vi\u1EC7t"},"zh-hans":{menuTitle:"\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"}},pattern:/%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,SPLIT:("axb".split(/(x)/).length===3?function(string,regex){return string.split(regex)}:function(string,regex){var result=[],match,last=0;regex.lastIndex=0;while((match=regex.exec(string))){result.push(string.substr(last,match.index-last));result.push.apply(result,match.slice(1));last=match.index+match[0].length;}
result.push(string.substr(last));return result;}),_:function(id,phrase){if(phrase instanceof Array){return this.processSnippet(id,phrase)}
return this.processString(this.lookupPhrase(id,phrase),[].slice.call(arguments,2));},processString:function(string,args,domain){var i,m;for(i=0,m=args.length;i<m;i++){if(domain&&args[i]instanceof Array){args[i]=this.processSnippet(domain,args[i])}}
var parts=this.SPLIT(string,this.pattern);for(i=1,m=parts.length;i<m;i+=2){var c=parts[i].charAt(0);if(c>="0"&&c<="9"){parts[i]=args[parts[i]-1];if(typeof parts[i]==="number")parts[i]=this.number(parts[i]);}else if(c==="{"){c=parts[i].substr(1);if(c>="0"&&c<="9"){parts[i]=args[parts[i].substr(1,parts[i].length-2)-1];if(typeof parts[i]==="number")parts[i]=this.number(parts[i]);}else{var match=parts[i].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);if(match){if(match[1]==="plural"){var n=args[match[2]-1];if(typeof n==="undefined"){parts[i]="???";}else{n=this.plural(n)-1;var plurals=match[3].replace(/(^|[^%])(%%)*%\|/g,"$1$2%\uEFEF").split(/\|/);if(n>=0&&n<plurals.length){parts[i]=this.processString(plurals[n].replace(/\uEFEF/g,"|"),args,domain);}else{parts[i]="???";}}}else{parts[i]="%"+parts[i]}}}}
if(parts[i]==null){parts[i]="???"}}
if(!domain){return parts.join("")}
var snippet=[],part="";for(i=0;i<m;i++){part+=parts[i];i++;if(i<m){if(parts[i]instanceof Array){snippet.push(part);snippet=snippet.concat(parts[i]);part="";}else{part+=parts[i];}}}
if(part!==""){snippet.push(part)}
return snippet;},processSnippet:function(domain,snippet){var result=[];for(var i=0,m=snippet.length;i<m;i++){if(snippet[i]instanceof Array){var data=snippet[i];if(typeof data[1]==="string"){var id=data[0];if(!(id instanceof Array)){id=[domain,id]}
var phrase=this.lookupPhrase(id,data[1]);result=result.concat(this.processMarkdown(phrase,data.slice(2),domain));}else if(data[1]instanceof Array){result=result.concat(this.processSnippet.apply(this,data));}else if(data.length>=3){result.push([data[0],data[1],this.processSnippet(domain,data[2])]);}else{result.push(snippet[i]);}}else{result.push(snippet[i]);}}
return result;},markdownPattern:/(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,processMarkdown:function(phrase,args,domain){var result=[],data;var parts=phrase.split(this.markdownPattern);var string=parts[0];for(var i=1,m=parts.length;i<m;i+=8){if(parts[i+1]){data=this.processString(parts[i+2],args,domain);if(!(data instanceof Array)){data=[data]}
data=[["b","i","i"][parts[i+1].length-1],{},data];if(parts[i+1].length===3){data=["b",{},data]}}else if(parts[i+3]){data=this.processString(parts[i+4].replace(/^\s/,"").replace(/\s$/,""),args,domain);if(!(data instanceof Array)){data=[data]}
data=["code",{},data];}else if(parts[i+5]){data=this.processString(parts[i+5],args,domain);if(!(data instanceof Array)){data=[data]}
data=["a",{href:this.processString(parts[i+6],args),target:"_blank"},data];}else{string+=parts[i];data=null;}
if(data){result=this.concatString(result,string,args,domain);result.push(data);string="";}
if(parts[i+7]!==""){string+=parts[i+7]}};result=this.concatString(result,string,args,domain);return result;},concatString:function(result,string,args,domain){if(string!=""){string=this.processString(string,args,domain);if(!(string instanceof Array)){string=[string]}
result=result.concat(string);}
return result;},lookupPhrase:function(id,phrase,domain){if(!domain){domain="_"}
if(id instanceof Array){domain=(id[0]||"_");id=(id[1]||"")}
var load=this.loadDomain(domain);if(load){MathJax.Hub.RestartAfter(load)}
var localeData=this.strings[this.locale];if(localeData){if(localeData.domains&&domain in localeData.domains){var domainData=localeData.domains[domain];if(domainData.strings&&id in domainData.strings)
{phrase=domainData.strings[id]}}}
return phrase;},loadFile:function(file,data,callback){callback=MathJax.Callback(callback);file=(data.file||file);if(!file.match(/\.js$/)){file+=".js"}
if(!file.match(/^([a-z]+:|\[MathJax\])/)){var dir=(this.strings[this.locale].directory||this.directory+"/"+this.locale||"[MathJax]/localization/"+this.locale);file=dir+"/"+file;}
var load=MathJax.Ajax.Require(file,function(){data.isLoaded=true;return callback()});return(load.called?null:load);},loadDomain:function(domain,callback){var load,localeData=this.strings[this.locale];if(localeData){if(!localeData.isLoaded){load=this.loadFile(this.locale,localeData);if(load){return MathJax.Callback.Queue(load,["loadDomain",this,domain]).Push(callback||{});}}
if(localeData.domains&&domain in localeData.domains){var domainData=localeData.domains[domain];if(!domainData.isLoaded){load=this.loadFile(domain,domainData);if(load){return MathJax.Callback.Queue(load).Push(callback)}}}}
return MathJax.Callback(callback)();},Try:function(fn){fn=MathJax.Callback(fn);fn.autoReset=true;try{fn()}catch(err){if(!err.restart){throw err}
MathJax.Callback.After(["Try",this,fn],err.restart);}},resetLocale:function(locale){if(!locale)return;locale=locale.toLowerCase();while(!this.strings[locale]){var dashPos=locale.lastIndexOf("-");if(dashPos===-1)return;locale=locale.substring(0,dashPos);}
var remap=this.strings[locale].remap;this.locale=remap?remap:locale;},setLocale:function(locale){this.resetLocale(locale);if(MathJax.Menu){this.loadDomain("MathMenu")}},addTranslation:function(locale,domain,definition){var data=this.strings[locale],isNew=false;if(!data){data=this.strings[locale]={};isNew=true}
if(!data.domains){data.domains={}}
if(domain){if(!data.domains[domain]){data.domains[domain]={}}
data=data.domains[domain];}
MathJax.Hub.Insert(data,definition);if(isNew&&MathJax.Menu.menu){MathJax.Menu.CreateLocaleMenu()}},setCSS:function(div){var locale=this.strings[this.locale];if(locale){if(locale.fontFamily){div.style.fontFamily=locale.fontFamily}
if(locale.fontDirection){div.style.direction=locale.fontDirection;if(locale.fontDirection==="rtl"){div.style.textAlign="right"}}}
return div;},fontFamily:function(){var locale=this.strings[this.locale];return(locale?locale.fontFamily:null);},fontDirection:function(){var locale=this.strings[this.locale];return(locale?locale.fontDirection:null);},plural:function(n){var locale=this.strings[this.locale];if(locale&&locale.plural){return locale.plural(n)}
if(n==1){return 1}
return 2;},number:function(n){var locale=this.strings[this.locale];if(locale&&locale.number){return locale.number(n)}
return n;}};MathJax.Message={ready:false,log:[{}],current:null,textNodeBug:(navigator.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub==="undefined")||(window.hasOwnProperty&&window.hasOwnProperty("konqueror")),styles:{"#MathJax_Message":{position:"fixed",left:"1px",bottom:"2px",'background-color':"#E6E6E6",border:"1px solid #959595",margin:"0px",padding:"2px 8px",'z-index':"102",color:"black",'font-size':"80%",width:"auto",'white-space':"nowrap"},"#MathJax_MSIE_Frame":{position:"absolute",top:0,left:0,width:"0px",'z-index':101,border:"0px",margin:"0px",padding:"0px"}},browsers:{MSIE:function(browser){MathJax.Message.msieFixedPositionBug=((document.documentMode||0)<7);if(MathJax.Message.msieFixedPositionBug)
{MathJax.Hub.config.styles["#MathJax_Message"].position="absolute"}
MathJax.Message.quirks=(document.compatMode==="BackCompat");},Chrome:function(browser){MathJax.Hub.config.styles["#MathJax_Message"].bottom="1.5em";MathJax.Hub.config.styles["#MathJax_Message"].left="1em";}},Init:function(styles){if(styles){this.ready=true}
if(!document.body||!this.ready){return false}
if(this.div&&this.div.parentNode==null){this.div=document.getElementById("MathJax_Message");if(this.div){this.text=this.div.firstChild}}
if(!this.div){var frame=document.body;if(this.msieFixedPositionBug&&window.attachEvent){frame=this.frame=this.addDiv(document.body);frame.removeAttribute("id");frame.style.position="absolute";frame.style.border=frame.style.margin=frame.style.padding="0px";frame.style.zIndex="101";frame.style.height="0px";frame=this.addDiv(frame);frame.id="MathJax_MSIE_Frame";window.attachEvent("onscroll",this.MoveFrame);window.attachEvent("onresize",this.MoveFrame);this.MoveFrame();}
this.div=this.addDiv(frame);this.div.style.display="none";this.text=this.div.appendChild(document.createTextNode(""));}
return true;},addDiv:function(parent){var div=document.createElement("div");div.id="MathJax_Message";if(parent.firstChild){parent.insertBefore(div,parent.firstChild)}
else{parent.appendChild(div)}
return div;},MoveFrame:function(){var body=(MathJax.Message.quirks?document.body:document.documentElement);var frame=MathJax.Message.frame;frame.style.left=body.scrollLeft+'px';frame.style.top=body.scrollTop+'px';frame.style.width=body.clientWidth+'px';frame=frame.firstChild;frame.style.height=body.clientHeight+'px';},localize:function(message){return MathJax.Localization._(message,message);},filterText:function(text,n,id){if(MathJax.Hub.config.messageStyle==="simple"){if(id==="LoadFile"){if(!this.loading){this.loading=this.localize("Loading")+" "}
text=this.loading;this.loading+=".";}else if(id==="ProcessMath"){if(!this.processing){this.processing=this.localize("Processing")+" "}
text=this.processing;this.processing+=".";}else if(id==="TypesetMath"){if(!this.typesetting){this.typesetting=this.localize("Typesetting")+" "}
text=this.typesetting;this.typesetting+=".";}}
return text;},Set:function(text,n,clearDelay){if(n==null){n=this.log.length;this.log[n]={}}
var id="";if(text instanceof Array){id=text[0];if(id instanceof Array){id=id[1]}
try{text=MathJax.Localization._.apply(MathJax.Localization,text);}catch(err){if(!err.restart){throw err}
if(!err.restart.called){if(this.log[n].restarted==null){this.log[n].restarted=0}
this.log[n].restarted++;delete this.log[n].cleared;MathJax.Callback.After(["Set",this,text,n,clearDelay],err.restart);return n;}}}
if(this.timer){clearTimeout(this.timer);delete this.timer}
this.log[n].text=text;this.log[n].filteredText=text=this.filterText(text,n,id);if(typeof(this.log[n].next)==="undefined"){this.log[n].next=this.current;if(this.current!=null){this.log[this.current].prev=n}
this.current=n;}
if(this.current===n&&MathJax.Hub.config.messageStyle!=="none"){if(this.Init()){if(this.textNodeBug){this.div.innerHTML=text}else{this.text.nodeValue=text}
this.div.style.display="";if(this.status){window.status="";delete this.status}}else{window.status=text;this.status=true;}}
if(this.log[n].restarted){if(this.log[n].cleared){clearDelay=0}
if(--this.log[n].restarted===0){delete this.log[n].cleared}}
if(clearDelay){setTimeout(MathJax.Callback(["Clear",this,n]),clearDelay)}
else if(clearDelay==0){this.Clear(n,0)}
return n;},Clear:function(n,delay){if(this.log[n].prev!=null){this.log[this.log[n].prev].next=this.log[n].next}
if(this.log[n].next!=null){this.log[this.log[n].next].prev=this.log[n].prev}
if(this.current===n){this.current=this.log[n].next;if(this.text){if(this.div.parentNode==null){this.Init()}
if(this.current==null){if(this.timer){clearTimeout(this.timer);delete this.timer}
if(delay==null){delay=600}
if(delay===0){this.Remove()}
else{this.timer=setTimeout(MathJax.Callback(["Remove",this]),delay)}}else if(MathJax.Hub.config.messageStyle!=="none"){if(this.textNodeBug){this.div.innerHTML=this.log[this.current].filteredText}
else{this.text.nodeValue=this.log[this.current].filteredText}}
if(this.status){window.status="";delete this.status}}else if(this.status){window.status=(this.current==null?"":this.log[this.current].text);}}
delete this.log[n].next;delete this.log[n].prev;delete this.log[n].filteredText;if(this.log[n].restarted){this.log[n].cleared=true}},Remove:function(){this.text.nodeValue="";this.div.style.display="none";},File:function(file){return this.Set(["LoadFile","Loading %1",file],null,null);},Log:function(){var strings=[];for(var i=1,m=this.log.length;i<m;i++){strings[i]=this.log[i].text}
return strings.join("\n");}};MathJax.Hub={config:{root:"",config:[],styleSheets:[],styles:{".MathJax_Preview":{color:"#888"}},jax:[],extensions:[],preJax:null,postJax:null,displayAlign:'center',displayIndent:'0',preRemoveClass:'MathJax_Preview',showProcessingMessages:true,messageStyle:"normal",delayStartupUntil:"none",skipStartupTypeset:false,elements:[],positionToHash:true,showMathMenu:true,showMathMenuMSIE:true,menuSettings:{zoom:"None",CTRL:false,ALT:false,CMD:false,Shift:false,discoverable:false,zscale:"200%",renderer:null,font:"Auto",context:"MathJax",locale:null,mpContext:false,mpMouse:false,texHints:true,FastPreview:null,assistiveMML:null,inTabOrder:true,semantics:false},errorSettings:{message:["[",["MathProcessingError","Math Processing Error"],"]"],style:{color:"#CC0000","font-style":"italic"}},ignoreMMLattributes:{}},preProcessors:MathJax.Callback.Hooks(true),inputJax:{},outputJax:{order:{}},processSectionDelay:50,processUpdateTime:250,processUpdateDelay:10,signal:MathJax.Callback.Signal("Hub"),Config:function(def){this.Insert(this.config,def);if(this.config.Augment){this.Augment(this.config.Augment)}},CombineConfig:function(name,def){var config=this.config,id,parent;name=name.split(/\./);for(var i=0,m=name.length;i<m;i++){id=name[i];if(!config[id]){config[id]={}}
parent=config;config=config[id];}
parent[id]=config=this.Insert(def,config);return config;},Register:{PreProcessor:function(){return MathJax.Hub.preProcessors.Add.apply(MathJax.Hub.preProcessors,arguments)},MessageHook:function(){return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},StartupHook:function(){return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,arguments)},LoadHook:function(){return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments)}},UnRegister:{PreProcessor:function(hook){MathJax.Hub.preProcessors.Remove(hook)},MessageHook:function(hook){MathJax.Hub.signal.RemoveHook(hook)},StartupHook:function(hook){MathJax.Hub.Startup.signal.RemoveHook(hook)},LoadHook:function(hook){MathJax.Ajax.removeHook(hook)}},getAllJax:function(element){var jax=[],scripts=this.elementScripts(element);for(var i=0,m=scripts.length;i<m;i++){if(scripts[i].MathJax&&scripts[i].MathJax.elementJax)
{jax.push(scripts[i].MathJax.elementJax)}}
return jax;},getJaxByType:function(type,element){var jax=[],scripts=this.elementScripts(element);for(var i=0,m=scripts.length;i<m;i++){if(scripts[i].MathJax&&scripts[i].MathJax.elementJax&&scripts[i].MathJax.elementJax.mimeType===type)
{jax.push(scripts[i].MathJax.elementJax)}}
return jax;},getJaxByInputType:function(type,element){var jax=[],scripts=this.elementScripts(element);for(var i=0,m=scripts.length;i<m;i++){if(scripts[i].MathJax&&scripts[i].MathJax.elementJax&&scripts[i].type&&scripts[i].type.replace(/ *;(.|\s)*/,"")===type)
{jax.push(scripts[i].MathJax.elementJax)}}
return jax;},getJaxFor:function(element){if(typeof(element)==='string'){element=document.getElementById(element)}
if(element&&element.MathJax){return element.MathJax.elementJax}
if(this.isMathJaxNode(element)){if(!element.isMathJax){element=element.firstChild}
while(element&&!element.jaxID){element=element.parentNode}
if(element){return MathJax.OutputJax[element.jaxID].getJaxFromMath(element)}}
return null;},isJax:function(element){if(typeof(element)==='string'){element=document.getElementById(element)}
if(this.isMathJaxNode(element)){return 1}
if(element&&(element.tagName||"").toLowerCase()==='script'){if(element.MathJax)
{return(element.MathJax.state===MathJax.ElementJax.STATE.PROCESSED?1:-1)}
if(element.type&&this.inputJax[element.type.replace(/ *;(.|\s)*/,"")]){return-1}}
return 0;},isMathJaxNode:function(element){return!!element&&(element.isMathJax||(element.className||"")==="MathJax_MathML");},setRenderer:function(renderer,type){if(!renderer)return;if(!MathJax.OutputJax[renderer]){this.config.menuSettings.renderer="";var file="[MathJax]/jax/output/"+renderer+"/config.js";return MathJax.Ajax.Require(file,["setRenderer",this,renderer,type]);}else{this.config.menuSettings.renderer=renderer;if(type==null){type="jax/mml"}
var jax=this.outputJax;if(jax[type]&&jax[type].length){if(renderer!==jax[type][0].id){jax[type].unshift(MathJax.OutputJax[renderer]);return this.signal.Post(["Renderer Selected",renderer]);}}
return null;}},Queue:function(){return this.queue.Push.apply(this.queue,arguments);},Typeset:function(element,callback){if(!MathJax.isReady)return null;var ec=this.elementCallback(element,callback);if(ec.count){var queue=MathJax.Callback.Queue(["PreProcess",this,ec.elements],["Process",this,ec.elements]);}
return queue.Push(ec.callback);},PreProcess:function(element,callback){var ec=this.elementCallback(element,callback);var queue=MathJax.Callback.Queue();if(ec.count){var elements=(ec.count===1?[ec.elements]:ec.elements);queue.Push(["Post",this.signal,["Begin PreProcess",ec.elements]]);for(var i=0,m=elements.length;i<m;i++){if(elements[i]){queue.Push(["Execute",this.preProcessors,elements[i]])}}
queue.Push(["Post",this.signal,["End PreProcess",ec.elements]]);}
return queue.Push(ec.callback);},Process:function(element,callback){return this.takeAction("Process",element,callback)},Update:function(element,callback){return this.takeAction("Update",element,callback)},Reprocess:function(element,callback){return this.takeAction("Reprocess",element,callback)},Rerender:function(element,callback){return this.takeAction("Rerender",element,callback)},takeAction:function(action,element,callback){var ec=this.elementCallback(element,callback);var elements=ec.elements;var queue=MathJax.Callback.Queue(["Clear",this.signal]);var state={scripts:[],start:new Date().getTime(),i:0,j:0,jax:{},jaxIDs:[]};if(ec.count){var delay=["Delay",MathJax.Callback,this.processSectionDelay];if(!delay[2]){delay={}}
queue.Push(["Post",this.signal,["Begin "+action,elements]],["Post",this.signal,["Begin Math",elements,action]],["prepareScripts",this,action,elements,state],["Post",this.signal,["Begin Math Input",elements,action]],["processInput",this,state],["Post",this.signal,["End Math Input",elements,action]],delay,["prepareOutput",this,state,"preProcess"],delay,["Post",this.signal,["Begin Math Output",elements,action]],["processOutput",this,state],["Post",this.signal,["End Math Output",elements,action]],delay,["prepareOutput",this,state,"postProcess"],delay,["Post",this.signal,["End Math",elements,action]],["Post",this.signal,["End "+action,elements]]);}
return queue.Push(ec.callback);},scriptAction:{Process:function(script){},Update:function(script){var jax=script.MathJax.elementJax;if(jax&&jax.needsUpdate()){jax.Remove(true);script.MathJax.state=jax.STATE.UPDATE}
else{script.MathJax.state=jax.STATE.PROCESSED}},Reprocess:function(script){var jax=script.MathJax.elementJax;if(jax){jax.Remove(true);script.MathJax.state=jax.STATE.UPDATE}},Rerender:function(script){var jax=script.MathJax.elementJax;if(jax){jax.Remove(true);script.MathJax.state=jax.STATE.OUTPUT}}},prepareScripts:function(action,element,state){if(arguments.callee.disabled)return;var scripts=this.elementScripts(element);var STATE=MathJax.ElementJax.STATE;for(var i=0,m=scripts.length;i<m;i++){var script=scripts[i];if(script.type&&this.inputJax[script.type.replace(/ *;(.|\n)*/,"")]){if(script.MathJax){if(script.MathJax.elementJax&&script.MathJax.elementJax.hover){MathJax.Extension.MathEvents.Hover.ClearHover(script.MathJax.elementJax);}
if(script.MathJax.state!==STATE.PENDING){this.scriptAction[action](script)}}
if(!script.MathJax){script.MathJax={state:STATE.PENDING}}
if(script.MathJax.error)delete script.MathJax.error;if(script.MathJax.state!==STATE.PROCESSED){state.scripts.push(script)}}}},checkScriptSiblings:function(script){if(script.MathJax.checked)return;var config=this.config,pre=script.previousSibling;if(pre&&pre.nodeName==="#text"){var preJax,postJax,post=script.nextSibling;if(post&&post.nodeName!=="#text"){post=null}
if(config.preJax){if(typeof(config.preJax)==="string"){config.preJax=new RegExp(config.preJax+"$")}
preJax=pre.nodeValue.match(config.preJax);}
if(config.postJax&&post){if(typeof(config.postJax)==="string"){config.postJax=new RegExp("^"+config.postJax)}
postJax=post.nodeValue.match(config.postJax);}
if(preJax&&(!config.postJax||postJax)){pre.nodeValue=pre.nodeValue.replace
(config.preJax,(preJax.length>1?preJax[1]:""));pre=null;}
if(postJax&&(!config.preJax||preJax)){post.nodeValue=post.nodeValue.replace
(config.postJax,(postJax.length>1?postJax[1]:""));}
if(pre&&!pre.nodeValue.match(/\S/)){pre=pre.previousSibling}}
if(config.preRemoveClass&&pre&&pre.className===config.preRemoveClass)
{script.MathJax.preview=pre}
script.MathJax.checked=1;},processInput:function(state){var jax,STATE=MathJax.ElementJax.STATE;var script,prev,m=state.scripts.length;try{while(state.i<m){script=state.scripts[state.i];if(!script){state.i++;continue}
prev=script.previousSibling;if(prev&&prev.className==="MathJax_Error"){prev.parentNode.removeChild(prev)}
if(!script.MathJax||script.MathJax.state===STATE.PROCESSED){state.i++;continue};if(!script.MathJax.elementJax||script.MathJax.state===STATE.UPDATE){this.checkScriptSiblings(script);var type=script.type.replace(/ *;(.|\s)*/,"");var input=this.inputJax[type];jax=input.Process(script,state);if(typeof jax==='function'){if(jax.called)continue;this.RestartAfter(jax);}
jax=jax.Attach(script,input.id);this.saveScript(jax,state,script,STATE);this.postInputHooks.Execute(jax,input.id,script);}else if(script.MathJax.state===STATE.OUTPUT){this.saveScript(script.MathJax.elementJax,state,script,STATE);}
state.i++;var now=new Date().getTime();if(now-state.start>this.processUpdateTime&&state.i<state.scripts.length)
{state.start=now;this.RestartAfter(MathJax.Callback.Delay(1))}}}catch(err){return this.processError(err,state,"Input")}
if(state.scripts.length&&this.config.showProcessingMessages)
{MathJax.Message.Set(["ProcessMath","Processing math: %1%%",100],0)}
state.start=new Date().getTime();state.i=state.j=0;return null;},postInputHooks:MathJax.Callback.Hooks(true),saveScript:function(jax,state,script,STATE){if(!this.outputJax[jax.mimeType]){script.MathJax.state=STATE.UPDATE;throw Error("No output jax registered for "+jax.mimeType);}
jax.outputJax=this.outputJax[jax.mimeType][0].id;if(!state.jax[jax.outputJax]){if(state.jaxIDs.length===0){state.jax[jax.outputJax]=state.scripts;}else{if(state.jaxIDs.length===1)
{state.jax[state.jaxIDs[0]]=state.scripts.slice(0,state.i)}
state.jax[jax.outputJax]=[];}
state.jaxIDs.push(jax.outputJax);}
if(state.jaxIDs.length>1){state.jax[jax.outputJax].push(script)}
script.MathJax.state=STATE.OUTPUT;},prepareOutput:function(state,method){while(state.j<state.jaxIDs.length){var id=state.jaxIDs[state.j],JAX=MathJax.OutputJax[id];if(JAX[method]){try{var result=JAX[method](state);if(typeof result==='function'){if(result.called)continue;this.RestartAfter(result);}}catch(err){if(!err.restart){MathJax.Message.Set(["PrepError","Error preparing %1 output (%2)",id,method],null,600);MathJax.Hub.lastPrepError=err;state.j++;}
return MathJax.Callback.After(["prepareOutput",this,state,method],err.restart);}}
state.j++;}
return null;},processOutput:function(state){var result,STATE=MathJax.ElementJax.STATE,script,m=state.scripts.length;try{while(state.i<m){script=state.scripts[state.i];if(!script||!script.MathJax||script.MathJax.error){state.i++;continue}
var jax=script.MathJax.elementJax;if(!jax){state.i++;continue}
result=MathJax.OutputJax[jax.outputJax].Process(script,state);if(result!==false){script.MathJax.state=STATE.PROCESSED;if(script.MathJax.preview){script.MathJax.preview.innerHTML=""}
this.signal.Post(["New Math",jax.inputID]);}
state.i++;var now=new Date().getTime();if(now-state.start>this.processUpdateTime&&state.i<state.scripts.length)
{state.start=now;this.RestartAfter(MathJax.Callback.Delay(this.processUpdateDelay))}}}catch(err){return this.processError(err,state,"Output")}
if(state.scripts.length&&this.config.showProcessingMessages){MathJax.Message.Set(["TypesetMath","Typesetting math: %1%%",100],0);MathJax.Message.Clear(0);}
state.i=state.j=0;return null;},processMessage:function(state,type){var m=Math.floor(state.i/(state.scripts.length)*100);var message=(type==="Output"?["TypesetMath","Typesetting math: %1%%"]:["ProcessMath","Processing math: %1%%"]);if(this.config.showProcessingMessages){MathJax.Message.Set(message.concat(m),0)}},processError:function(err,state,type){if(!err.restart){if(!this.config.errorSettings.message){throw err}
this.formatError(state.scripts[state.i],err);state.i++;}
this.processMessage(state,type);return MathJax.Callback.After(["process"+type,this,state],err.restart);},formatError:function(script,err){var LOCALIZE=function(id,text,arg1,arg2){return MathJax.Localization._(id,text,arg1,arg2)};var message=LOCALIZE("ErrorMessage","Error: %1",err.message)+"\n";if(err.sourceURL||err.fileName)message+="\n"+LOCALIZE("ErrorFile","file: %1",err.sourceURL||err.fileName);if(err.line||err.lineNumber)message+="\n"+LOCALIZE("ErrorLine","line: %1",err.line||err.lineNumber);message+="\n\n"+LOCALIZE("ErrorTips","Debugging tips: use %1, inspect %2 in the browser console","'unpacked/MathJax.js'","'MathJax.Hub.lastError'");script.MathJax.error=MathJax.OutputJax.Error.Jax(message,script);if(script.MathJax.elementJax)
script.MathJax.error.inputID=script.MathJax.elementJax.inputID;var errorSettings=this.config.errorSettings;var errorText=LOCALIZE(errorSettings.messageId,errorSettings.message);var error=MathJax.HTML.Element("span",{className:"MathJax_Error",jaxID:"Error",isMathJax:true,id:script.MathJax.error.inputID+"-Frame"},[["span",null,errorText]]);MathJax.Ajax.Require("[MathJax]/extensions/MathEvents.js",function(){var EVENT=MathJax.Extension.MathEvents.Event,HUB=MathJax.Hub;error.oncontextmenu=EVENT.Menu;error.onmousedown=EVENT.Mousedown;error.onkeydown=EVENT.Keydown;error.tabIndex=HUB.getTabOrder(HUB.getJaxFor(script));});var node=document.getElementById(error.id);if(node)node.parentNode.removeChild(node);script.parentNode.insertBefore(error,script);if(script.MathJax.preview){script.MathJax.preview.innerHTML=""}
this.lastError=err;this.signal.Post(["Math Processing Error",script,err]);},RestartAfter:function(callback){throw this.Insert(Error("restart"),{restart:MathJax.Callback(callback)});},elementCallback:function(element,callback){if(callback==null&&(element instanceof Array||typeof element==='function'))
{try{MathJax.Callback(element);callback=element;element=null}catch(e){}}
if(element==null){element=this.config.elements||[]}
if(this.isHTMLCollection(element)){element=this.HTMLCollection2Array(element)}
if(!(element instanceof Array)){element=[element]}
element=[].concat(element);for(var i=0,m=element.length;i<m;i++)
{if(typeof(element[i])==='string'){element[i]=document.getElementById(element[i])}}
if(!document.body){document.body=document.getElementsByTagName("body")[0]}
if(element.length==0){element.push(document.body)}
if(!callback){callback={}}
return{count:element.length,elements:(element.length===1?element[0]:element),callback:callback};},elementScripts:function(element){var scripts=[];if(element instanceof Array||this.isHTMLCollection(element)){for(var i=0,m=element.length;i<m;i++){var alreadyDone=0;for(var j=0;j<i&&!alreadyDone;j++)
{alreadyDone=element[j].contains(element[i])}
if(!alreadyDone)scripts.push.apply(scripts,this.elementScripts(element[i]));}
return scripts;}
if(typeof(element)==='string'){element=document.getElementById(element)}
if(!document.body){document.body=document.getElementsByTagName("body")[0]}
if(element==null){element=document.body}
if(element.tagName!=null&&element.tagName.toLowerCase()==="script"){return[element]}
scripts=element.getElementsByTagName("script");if(this.msieHTMLCollectionBug){scripts=this.HTMLCollection2Array(scripts)}
return scripts;},isHTMLCollection:function(obj){return("HTMLCollection"in window&&typeof(obj)==="object"&&obj instanceof HTMLCollection);},HTMLCollection2Array:function(nodes){if(!this.msieHTMLCollectionBug){return[].slice.call(nodes)}
var NODES=[];for(var i=0,m=nodes.length;i<m;i++){NODES[i]=nodes[i]}
return NODES;},Insert:function(dst,src){for(var id in src){if(src.hasOwnProperty(id)){if(typeof src[id]==='object'&&!(src[id]instanceof Array)&&(typeof dst[id]==='object'||typeof dst[id]==='function')){this.Insert(dst[id],src[id]);}else{dst[id]=src[id];}}}
return dst;},getTabOrder:function(script){return this.config.menuSettings.inTabOrder?0:-1;},SplitList:("trim"in String.prototype?function(list){return list.trim().split(/\s+/)}:function(list){return list.replace(/^\s+/,'').replace(/\s+$/,'').split(/\s+/)})};MathJax.Hub.Insert(MathJax.Hub.config.styles,MathJax.Message.styles);MathJax.Hub.Insert(MathJax.Hub.config.styles,{".MathJax_Error":MathJax.Hub.config.errorSettings.style});MathJax.Extension={};MathJax.Hub.Configured=MathJax.Callback({});MathJax.Hub.Startup={script:"",queue:MathJax.Callback.Queue(),signal:MathJax.Callback.Signal("Startup"),params:{},Config:function(){this.queue.Push(["Post",this.signal,"Begin Config"]);if(this.params.locale){MathJax.Localization.resetLocale(this.params.locale);MathJax.Hub.config.menuSettings.locale=this.params.locale;}
if(this.params.config){var files=this.params.config.split(/,/);for(var i=0,m=files.length;i<m;i++){if(!files[i].match(/\.js$/)){files[i]+=".js"}
this.queue.Push(["Require",MathJax.Ajax,this.URL("config",files[i])]);}}
this.queue.Push(["Config",MathJax.Hub,MathJax.AuthorConfig]);if(this.script.match(/\S/)){this.queue.Push(this.script+";\n1;")}
this.queue.Push(["ConfigDelay",this],["ConfigBlocks",this],[function(THIS){return THIS.loadArray(MathJax.Hub.config.config,"config",null,true)},this],["Post",this.signal,"End Config"]);},ConfigDelay:function(){var delay=this.params.delayStartupUntil||MathJax.Hub.config.delayStartupUntil;if(delay==="onload"){return this.onload}
if(delay==="configured"){return MathJax.Hub.Configured}
return delay;},ConfigBlocks:function(){var scripts=document.getElementsByTagName("script");var last=null,queue=MathJax.Callback.Queue();for(var i=0,m=scripts.length;i<m;i++){var type=String(scripts[i].type).replace(/ /g,"");if(type.match(/^text\/x-mathjax-config(;.*)?$/)&&!type.match(/;executed=true/)){scripts[i].type+=";executed=true";last=queue.Push(scripts[i].innerHTML+";\n1;");}}
return last;},Cookie:function(){return this.queue.Push(["Post",this.signal,"Begin Cookie"],["Get",MathJax.HTML.Cookie,"menu",MathJax.Hub.config.menuSettings],[function(config){var SETTINGS=config.menuSettings;if(SETTINGS.locale)MathJax.Localization.resetLocale(SETTINGS.locale);var renderer=config.menuSettings.renderer,jax=config.jax;if(renderer){var name="output/"+renderer;jax.sort();for(var i=0,m=jax.length;i<m;i++){if(jax[i].substr(0,7)==="output/")break;}
if(i==m-1){jax.pop()}else{while(i<m){if(jax[i]===name){jax.splice(i,1);break};i++}}
jax.unshift(name);}
if(SETTINGS.CHTMLpreview!=null){if(SETTINGS.FastPreview==null)SETTINGS.FastPreview=SETTINGS.CHTMLpreview;delete SETTINGS.CHTMLpreview;}
if(SETTINGS.FastPreview&&!MathJax.Extension["fast-preview"])
MathJax.Hub.config.extensions.push("fast-preview.js");if(config.menuSettings.assistiveMML&&!MathJax.Extension.AssistiveMML)
MathJax.Hub.config.extensions.push("AssistiveMML.js");},MathJax.Hub.config],["Post",this.signal,"End Cookie"]);},Styles:function(){return this.queue.Push(["Post",this.signal,"Begin Styles"],["loadArray",this,MathJax.Hub.config.styleSheets,"config"],["Styles",MathJax.Ajax,MathJax.Hub.config.styles],["Post",this.signal,"End Styles"]);},Jax:function(){var config=MathJax.Hub.config,jax=MathJax.Hub.outputJax;for(var i=0,m=config.jax.length,k=0;i<m;i++){var name=config.jax[i].substr(7);if(config.jax[i].substr(0,7)==="output/"&&jax.order[name]==null)
{jax.order[name]=k;k++}}
var queue=MathJax.Callback.Queue();return queue.Push(["Post",this.signal,"Begin Jax"],["loadArray",this,config.jax,"jax","config.js"],["Post",this.signal,"End Jax"]);},Extensions:function(){var queue=MathJax.Callback.Queue();return queue.Push(["Post",this.signal,"Begin Extensions"],["loadArray",this,MathJax.Hub.config.extensions,"extensions"],["Post",this.signal,"End Extensions"]);},Message:function(){MathJax.Message.Init(true);},Menu:function(){var menu=MathJax.Hub.config.menuSettings,jax=MathJax.Hub.outputJax,registered;for(var id in jax){if(jax.hasOwnProperty(id)){if(jax[id].length){registered=jax[id];break}}}
if(registered&&registered.length){if(menu.renderer&&menu.renderer!==registered[0].id)
{registered.unshift(MathJax.OutputJax[menu.renderer])}
menu.renderer=registered[0].id;}},Hash:function(){if(MathJax.Hub.config.positionToHash&&document.location.hash&&document.body&&document.body.scrollIntoView){var name=document.location.hash.substr(1);var target=document.getElementById(name);if(!target){var a=document.getElementsByTagName("a");for(var i=0,m=a.length;i<m;i++)
{if(a[i].name===name){target=a[i];break}}}
if(target){while(!target.scrollIntoView){target=target.parentNode}
target=this.HashCheck(target);if(target&&target.scrollIntoView)
{setTimeout(function(){target.scrollIntoView(true)},1)}}}},HashCheck:function(target){var jax=MathJax.Hub.getJaxFor(target);if(jax&&MathJax.OutputJax[jax.outputJax].hashCheck)
{target=MathJax.OutputJax[jax.outputJax].hashCheck(target)}
return target;},MenuZoom:function(){if(MathJax.Hub.config.showMathMenu){if(!MathJax.Extension.MathMenu){setTimeout(function(){MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/MathMenu.js",{}],["loadDomain",MathJax.Localization,"MathMenu"])},1000);}else{setTimeout(MathJax.Callback(["loadDomain",MathJax.Localization,"MathMenu"]),1000);}
if(!MathJax.Extension.MathZoom){setTimeout(MathJax.Callback(["Require",MathJax.Ajax,"[MathJax]/extensions/MathZoom.js",{}]),2000);}}},onLoad:function(){var onload=this.onload=MathJax.Callback(function(){MathJax.Hub.Startup.signal.Post("onLoad")});if(document.body&&document.readyState)
if(MathJax.Hub.Browser.isMSIE){if(document.readyState==="complete"){return[onload]}}else if(document.readyState!=="loading"){return[onload]}
if(window.addEventListener){window.addEventListener("load",onload,false);if(!this.params.noDOMContentEvent)
{window.addEventListener("DOMContentLoaded",onload,false)}}
else if(window.attachEvent){window.attachEvent("onload",onload)}
else{window.onload=onload}
return onload;},Typeset:function(element,callback){if(MathJax.Hub.config.skipStartupTypeset){return function(){}}
return this.queue.Push(["Post",this.signal,"Begin Typeset"],["Typeset",MathJax.Hub,element,callback],["Post",this.signal,"End Typeset"]);},URL:function(dir,name){if(!name.match(/^([a-z]+:\/\/|\[|\/)/)){name="[MathJax]/"+dir+"/"+name}
return name;},loadArray:function(files,dir,name,synchronous){if(files){if(!(files instanceof Array)){files=[files]}
if(files.length){var queue=MathJax.Callback.Queue(),callback={},file;for(var i=0,m=files.length;i<m;i++){file=this.URL(dir,files[i]);if(name){file+="/"+name}
if(synchronous){queue.Push(["Require",MathJax.Ajax,file,callback])}
else{queue.Push(MathJax.Ajax.Require(file,callback))}}
return queue.Push({});}}
return null;}};(function(BASENAME){var BASE=window[BASENAME],ROOT="["+BASENAME+"]";var HUB=BASE.Hub,AJAX=BASE.Ajax,CALLBACK=BASE.Callback;var JAX=MathJax.Object.Subclass({JAXFILE:"jax.js",require:null,config:{},Init:function(def,cdef){if(arguments.length===0){return this}
return(this.constructor.Subclass(def,cdef))();},Augment:function(def,cdef){var cObject=this.constructor,ndef={};if(def!=null){for(var id in def){if(def.hasOwnProperty(id)){if(typeof def[id]==="function")
{cObject.protoFunction(id,def[id])}else{ndef[id]=def[id]}}}
if(def.toString!==cObject.prototype.toString&&def.toString!=={}.toString)
{cObject.protoFunction('toString',def.toString)}}
HUB.Insert(cObject.prototype,ndef);cObject.Augment(null,cdef);return this;},Translate:function(script,state){throw Error(this.directory+"/"+this.JAXFILE+" failed to define the Translate() method");},Register:function(mimetype){},Config:function(){this.config=HUB.CombineConfig(this.id,this.config);if(this.config.Augment){this.Augment(this.config.Augment)}},Startup:function(){},loadComplete:function(file){if(file==="config.js"){return AJAX.loadComplete(this.directory+"/"+file);}else{var queue=CALLBACK.Queue();queue.Push(HUB.Register.StartupHook("End Config",{}),["Post",HUB.Startup.signal,this.id+" Jax Config"],["Config",this],["Post",HUB.Startup.signal,this.id+" Jax Require"],[function(THIS){return MathJax.Hub.Startup.loadArray(THIS.require,this.directory)},this],[function(config,id){return MathJax.Hub.Startup.loadArray(config.extensions,"extensions/"+id)},this.config||{},this.id],["Post",HUB.Startup.signal,this.id+" Jax Startup"],["Startup",this],["Post",HUB.Startup.signal,this.id+" Jax Ready"]);if(this.copyTranslate){queue.Push([function(THIS){THIS.preProcess=THIS.preTranslate;THIS.Process=THIS.Translate;THIS.postProcess=THIS.postTranslate;},this.constructor.prototype]);}
return queue.Push(["loadComplete",AJAX,this.directory+"/"+file]);}}},{id:"Jax",version:"2.6.0",directory:ROOT+"/jax",extensionDir:ROOT+"/extensions"});BASE.InputJax=JAX.Subclass({elementJax:"mml",sourceMenuTitle:["Original","Original Form"],copyTranslate:true,Process:function(script,state){var queue=CALLBACK.Queue(),file;var jax=this.elementJax;if(!(jax instanceof Array)){jax=[jax]}
for(var i=0,m=jax.length;i<m;i++){file=BASE.ElementJax.directory+"/"+jax[i]+"/"+this.JAXFILE;if(!this.require){this.require=[]}
else if(!(this.require instanceof Array)){this.require=[this.require]};this.require.push(file);queue.Push(AJAX.Require(file));}
file=this.directory+"/"+this.JAXFILE;var load=queue.Push(AJAX.Require(file));if(!load.called){this.constructor.prototype.Process=function(){if(!load.called){return load}
throw Error(file+" failed to load properly");}}
jax=HUB.outputJax["jax/"+jax[0]];if(jax){queue.Push(AJAX.Require(jax[0].directory+"/"+this.JAXFILE))}
return queue.Push({});},needsUpdate:function(jax){var script=jax.SourceElement();return(jax.originalText!==BASE.HTML.getScript(script));},Register:function(mimetype){if(!HUB.inputJax){HUB.inputJax={}}
HUB.inputJax[mimetype]=this;}},{id:"InputJax",version:"2.6.0",directory:JAX.directory+"/input",extensionDir:JAX.extensionDir});BASE.OutputJax=JAX.Subclass({copyTranslate:true,preProcess:function(state){var load,file=this.directory+"/"+this.JAXFILE;this.constructor.prototype.preProcess=function(state){if(!load.called){return load}
throw Error(file+" failed to load properly");}
load=AJAX.Require(file);return load;},Register:function(mimetype){var jax=HUB.outputJax;if(!jax[mimetype]){jax[mimetype]=[]}
if(jax[mimetype].length&&(this.id===HUB.config.menuSettings.renderer||(jax.order[this.id]||0)<(jax.order[jax[mimetype][0].id]||0)))
{jax[mimetype].unshift(this)}else{jax[mimetype].push(this)}
if(!this.require){this.require=[]}
else if(!(this.require instanceof Array)){this.require=[this.require]};this.require.push(BASE.ElementJax.directory+"/"+(mimetype.split(/\//)[1])+"/"+this.JAXFILE);},Remove:function(jax){}},{id:"OutputJax",version:"2.6.0",directory:JAX.directory+"/output",extensionDir:JAX.extensionDir,fontDir:ROOT+(BASE.isPacked?"":"/..")+"/fonts",imageDir:ROOT+(BASE.isPacked?"":"/..")+"/images"});BASE.ElementJax=JAX.Subclass({Init:function(def,cdef){return this.constructor.Subclass(def,cdef)},inputJax:null,outputJax:null,inputID:null,originalText:"",mimeType:"",sourceMenuTitle:["MathMLcode","MathML Code"],Text:function(text,callback){var script=this.SourceElement();BASE.HTML.setScript(script,text);script.MathJax.state=this.STATE.UPDATE;return HUB.Update(script,callback);},Reprocess:function(callback){var script=this.SourceElement();script.MathJax.state=this.STATE.UPDATE;return HUB.Reprocess(script,callback);},Update:function(callback){return this.Rerender(callback)},Rerender:function(callback){var script=this.SourceElement();script.MathJax.state=this.STATE.OUTPUT;return HUB.Process(script,callback);},Remove:function(keep){if(this.hover){this.hover.clear(this)}
BASE.OutputJax[this.outputJax].Remove(this);if(!keep){HUB.signal.Post(["Remove Math",this.inputID]);this.Detach();}},needsUpdate:function(){return BASE.InputJax[this.inputJax].needsUpdate(this);},SourceElement:function(){return document.getElementById(this.inputID)},Attach:function(script,inputJax){var jax=script.MathJax.elementJax;if(script.MathJax.state===this.STATE.UPDATE){jax.Clone(this);}else{jax=script.MathJax.elementJax=this;if(script.id){this.inputID=script.id}
else{script.id=this.inputID=BASE.ElementJax.GetID();this.newID=1}}
jax.originalText=BASE.HTML.getScript(script);jax.inputJax=inputJax;if(jax.root){jax.root.inputID=jax.inputID}
return jax;},Detach:function(){var script=this.SourceElement();if(!script)return;try{delete script.MathJax}catch(err){script.MathJax=null}
if(this.newID){script.id=""}},Clone:function(jax){var id;for(id in this){if(!this.hasOwnProperty(id))continue;if(typeof(jax[id])==='undefined'&&id!=='newID'){delete this[id]}}
for(id in jax){if(!jax.hasOwnProperty(id))continue;if(typeof(this[id])==='undefined'||(this[id]!==jax[id]&&id!=='inputID'))
{this[id]=jax[id]}}}},{id:"ElementJax",version:"2.6.0",directory:JAX.directory+"/element",extensionDir:JAX.extensionDir,ID:0,STATE:{PENDING:1,PROCESSED:2,UPDATE:3,OUTPUT:4},GetID:function(){this.ID++;return"MathJax-Element-"+this.ID},Subclass:function(){var obj=JAX.Subclass.apply(this,arguments);obj.loadComplete=this.prototype.loadComplete;return obj;}});BASE.ElementJax.prototype.STATE=BASE.ElementJax.STATE;BASE.OutputJax.Error={id:"Error",version:"2.6.0",config:{},errors:0,ContextMenu:function(){return BASE.Extension.MathEvents.Event.ContextMenu.apply(BASE.Extension.MathEvents.Event,arguments)},Mousedown:function(){return BASE.Extension.MathEvents.Event.AltContextMenu.apply(BASE.Extension.MathEvents.Event,arguments)},getJaxFromMath:function(math){return(math.nextSibling.MathJax||{}).error},Jax:function(text,script){var jax=MathJax.Hub.inputJax[script.type.replace(/ *;(.|\s)*/,"")];this.errors++;return{inputJax:(jax||{id:"Error"}).id,outputJax:"Error",inputID:"MathJax-Error-"+this.errors,sourceMenuTitle:["ErrorMessage","Error Message"],sourceMenuFormat:"Error",originalText:MathJax.HTML.getScript(script),errorText:text}}};BASE.InputJax.Error={id:"Error",version:"2.6.0",config:{},sourceMenuTitle:["Original","Original Form"]};})("MathJax");(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}
var HUB=BASE.Hub;var STARTUP=HUB.Startup;var CONFIG=HUB.config;var HEAD=document.head||(document.getElementsByTagName("head")[0]);if(!HEAD){HEAD=document.childNodes[0]};var scripts=(document.documentElement||document).getElementsByTagName("script");if(scripts.length===0&&HEAD.namespaceURI)
scripts=document.getElementsByTagNameNS(HEAD.namespaceURI,"script");var namePattern=new RegExp("(^|/)"+BASENAME+"\\.js(\\?.*)?$");for(var i=scripts.length-1;i>=0;i--){if((scripts[i].src||"").match(namePattern)){STARTUP.script=scripts[i].innerHTML;if(RegExp.$2){var params=RegExp.$2.substr(1).split(/\&/);for(var j=0,m=params.length;j<m;j++){var KV=params[j].match(/(.*)=(.*)/);if(KV){STARTUP.params[unescape(KV[1])]=unescape(KV[2])}}}
CONFIG.root=scripts[i].src.replace(/(^|\/)[^\/]*(\?.*)?$/,'').replace(/^(https?:\/\/cdn.mathjax.org\/mathjax\/)(latest)/,"$1"+BASE.version.split(/\./).slice(0,2).join(".")+"-$2");BASE.Ajax.config.root=CONFIG.root;break;}}
var AGENT=navigator.userAgent;var BROWSERS={isMac:(navigator.platform.substr(0,3)==="Mac"),isPC:(navigator.platform.substr(0,3)==="Win"),isMSIE:("ActiveXObject"in window&&"clipboardData"in window),isEdge:("MSGestureEvent"in window&&"chrome"in window&&window.chrome.loadTimes==null),isFirefox:(!!AGENT.match(/Gecko\//)&&!AGENT.match(/like Gecko/)),isSafari:(!!AGENT.match(/ (Apple)?WebKit\//)&&!AGENT.match(/ like iPhone /)&&(!window.chrome||window.chrome.app==null)),isChrome:("chrome"in window&&window.chrome.loadTimes!=null),isOpera:("opera"in window&&window.opera.version!=null),isKonqueror:("konqueror"in window&&navigator.vendor=="KDE"),versionAtLeast:function(v){var bv=(this.version).split('.');v=(new String(v)).split('.');for(var i=0,m=v.length;i<m;i++)
{if(bv[i]!=v[i]){return parseInt(bv[i]||"0")>=parseInt(v[i])}}
return true;},Select:function(choices){var browser=choices[HUB.Browser];if(browser){return browser(HUB.Browser)}
return null;}};var xAGENT=AGENT.replace(/^Mozilla\/(\d+\.)+\d+ /,"").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,"").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,"");HUB.Browser=HUB.Insert(HUB.Insert(new String("Unknown"),{version:"0.0"}),BROWSERS);for(var browser in BROWSERS){if(BROWSERS.hasOwnProperty(browser)){if(BROWSERS[browser]&&browser.substr(0,2)==="is"){browser=browser.slice(2);if(browser==="Mac"||browser==="PC")continue;HUB.Browser=HUB.Insert(new String(browser),BROWSERS);var VERSION=new RegExp(".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|"+".*("+browser+")"+(browser=="MSIE"?" ":"/")+"((?:\\d+\\.)*\\d+)|"+"(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)");var MATCH=VERSION.exec(xAGENT)||["","","","unknown","0.0"];HUB.Browser.name=(MATCH[1]!=""?browser:(MATCH[3]||MATCH[5]));HUB.Browser.version=MATCH[2]||MATCH[4]||MATCH[6];break;}}};try{HUB.Browser.Select({Safari:function(browser){var v=parseInt((String(browser.version).split("."))[0]);if(v>85){browser.webkit=browser.version}
if(v>=538){browser.version="8.0"}
else if(v>=537){browser.version="7.0"}
else if(v>=536){browser.version="6.0"}
else if(v>=534){browser.version="5.1"}
else if(v>=533){browser.version="5.0"}
else if(v>=526){browser.version="4.0"}
else if(v>=525){browser.version="3.1"}
else if(v>500){browser.version="3.0"}
else if(v>400){browser.version="2.0"}
else if(v>85){browser.version="1.0"}
browser.webkit=(navigator.appVersion.match(/WebKit\/(\d+)\./))[1];browser.isMobile=(navigator.appVersion.match(/Mobile/i)!=null);browser.noContextMenu=browser.isMobile;},Firefox:function(browser){if((browser.version==="0.0"||AGENT.match(/Firefox/)==null)&&navigator.product==="Gecko"){var rv=AGENT.match(/[\/ ]rv:(\d+\.\d.*?)[\) ]/);if(rv){browser.version=rv[1]}
else{var date=(navigator.buildID||navigator.productSub||"0").substr(0,8);if(date>="20111220"){browser.version="9.0"}
else if(date>="20111120"){browser.version="8.0"}
else if(date>="20110927"){browser.version="7.0"}
else if(date>="20110816"){browser.version="6.0"}
else if(date>="20110621"){browser.version="5.0"}
else if(date>="20110320"){browser.version="4.0"}
else if(date>="20100121"){browser.version="3.6"}
else if(date>="20090630"){browser.version="3.5"}
else if(date>="20080617"){browser.version="3.0"}
else if(date>="20061024"){browser.version="2.0"}}}
browser.isMobile=(navigator.appVersion.match(/Android/i)!=null||AGENT.match(/ Fennec\//)!=null||AGENT.match(/Mobile/)!=null);},Chrome:function(browser){browser.noContextMenu=browser.isMobile=!!navigator.userAgent.match(/ Mobile[ \/]/);},Opera:function(browser){browser.version=opera.version()},Edge:function(browser){browser.isMobile=!!navigator.userAgent.match(/ Phone/);},MSIE:function(browser){browser.isMobile=!!navigator.userAgent.match(/ Phone/);browser.isIE9=!!(document.documentMode&&(window.performance||window.msPerformance));MathJax.HTML.setScriptBug=!browser.isIE9||document.documentMode<9;MathJax.Hub.msieHTMLCollectionBug=(document.documentMode<9);if(document.documentMode<10&&!STARTUP.params.NoMathPlayer){try{new ActiveXObject("MathPlayer.Factory.1");browser.hasMathPlayer=true;}catch(err){}
try{if(browser.hasMathPlayer){var mathplayer=document.createElement("object");mathplayer.id="mathplayer";mathplayer.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987";HEAD.appendChild(mathplayer);document.namespaces.add("m","http://www.w3.org/1998/Math/MathML");browser.mpNamespace=true;if(document.readyState&&(document.readyState==="loading"||document.readyState==="interactive")){document.write('<?import namespace="m" implementation="#MathPlayer">');browser.mpImported=true;}}else{document.namespaces.add("mjx_IE_fix","http://www.w3.org/1999/xlink");}}catch(err){}}}});}catch(err){console.error(err.message);}
HUB.Browser.Select(MathJax.Message.browsers);if(BASE.AuthorConfig&&typeof BASE.AuthorConfig.AuthorInit==="function"){BASE.AuthorConfig.AuthorInit()}
HUB.queue=BASE.Callback.Queue();HUB.queue.Push(["Post",STARTUP.signal,"Begin"],["Config",STARTUP],["Cookie",STARTUP],["Styles",STARTUP],["Message",STARTUP],function(){var queue=BASE.Callback.Queue(STARTUP.Jax(),STARTUP.Extensions());return queue.Push({});},["Menu",STARTUP],STARTUP.onLoad(),function(){MathJax.isReady=true},["Typeset",STARTUP],["Hash",STARTUP],["MenuZoom",STARTUP],["Post",STARTUP.signal,"End"]);})("MathJax");}}
(function(){'use strict';if(!$('html').data('static-site')){MathJax.Ajax.config.root=Indico.Urls.Base+"/js/lib/mathjax";}})();(function(){"use strict";var DELIMITERS=[["$","$"],["$$","$$"]];window.PageDownMathJax=(function(){var ready=false;var pending=false;var $preview=null;var ready_listeners=[];var blocks,start,end,last,braces;var math;var HUB=MathJax.Hub;HUB.Queue(function(){ready=true;HUB.processUpdateTime=50;HUB.Config({'HTML-CSS':{EqnChunk:10,EqnChunkFactor:1},'SVG':{EqnChunk:10,EqnChunkFactor:1}});_(ready_listeners).each(function(listener){listener();});});var SPLIT=/(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[\\{}$]|[{}]|(?:\n\s*)+|@@\d+@@)/i;function processMath(i,j){var block=blocks.slice(i,j+1).join("").replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">");if(HUB.Browser.isMSIE){block=block.replace(/(%[^\n]*)\n/g,"$1<br/>\n");}
while(j>i){blocks[j]="";j--;}
blocks[i]="@@"+math.length+"@@";math.push(block);start=end=last=null;}
function removeMath(text){start=end=last=null;math=[];blocks=text.replace(/\r\n?/g,"\n").split(SPLIT);for(var i=1,m=blocks.length;i<m;i+=2){var block=blocks[i];if(block.charAt(0)==="@"){blocks[i]="@@"+math.length+"@@";math.push(block);}else if(start){if(block===end){if(braces){last=i;}else{processMath(start,i);}}else if(block.match(/\n.*\n/)){if(last){i=last;processMath(start,i);}
start=end=last=null;braces=0;}else if(block==="{"){braces++;}else if(block==="}"&&braces){braces--;}}else{if(block===DELIMITERS[0][0]||block===DELIMITERS[1][0]){start=i;end=block;braces=0;}else if(block.substr(1,5)==="begin"){start=i;end="\\end"+block.substr(6);braces=0;}}}
if(last){processMath(start,last);}
return blocks.join("");}
function replaceMath(text){text=text.replace(/@@(\d+)@@/g,function(match,n){return math[n];});math=null;return text;}
function restartMJ(cb){pending=false;HUB.cancelTypeset=false;if($preview){typeset($preview.get(0));}
if(cb){HUB.Queue(cb);}}
function updateMJ(elem,cb){var mathjaxEnabled=($(elem).data('no-mathjax')===undefined);if(!mathjaxEnabled){cb();}else if(!pending&&ready){pending=true;HUB.cancelTypeset=false;HUB.Queue(restartMJ,cb);}}
function typeset(elem){if($(elem).data('no-mathjax')===undefined){HUB.Queue(["Typeset",HUB,elem]);}}
function createPreview(elem,editorObject){var converterObject=editorObject.getConverter();converterObject.hooks.chain("preConversion",removeMath);converterObject.hooks.chain("postConversion",replaceMath);function preview(){updateMJ(elem,function(){var new_height=$preview.outerHeight(),$wrapper=$preview.closest('.md-preview-wrapper'),is_empty=$preview.is(':empty');$wrapper.toggleClass('empty',is_empty);if(is_empty){$wrapper.css('height','');}else{$wrapper.css('height',new_height);}
$preview.scrollTop(new_height);});}
editorObject.hooks.chain("onPreviewRefresh",preview);typeset($preview.get(0));addListener(preview);}
function createEditor(elem){var $container=$(elem).closest('[data-field-id]');$preview=$container.find('.wmd-preview');var fieldId=$container.data('fieldId'),converter=Markdown.getSanitizingConverter();converter.hooks.chain("preBlockGamut",function block_handler(text,rbg){return text.replace(/^ {0,3}""" *\n((?:.*?\n)+?) {0,3}""" *$/gm,function(whole,inner){return"<blockquote>"+rbg(inner)+"</blockquote>\n";});});var editor=new Markdown.Editor(converter,"-f_"+fieldId,{helpButton:{handler:function(){return false;}},strings:{imagedialog:'<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg "optional title"'}});createPreview(elem,editor);editor.run();}
function mathJax(elem){typeset(elem);}
function addListener(listener){ready_listeners.push(listener);}
return{mathJax:mathJax,createEditor:createEditor};});var pd=PageDownMathJax();$.fn.mathJax=function(){$(this).each(function(){pd.mathJax(this);});return this;};$.fn.pagedown=function(arg1,arg2){function _pagedown(elem){var options={},pd_context=elem.data('pagedown'),last_change=null,$save_button=elem.siblings('.wmd-button-bar').find('.save-button');function _set_saving(){$save_button.prop('disabled',true).addClass('saved').removeClass('saving waiting-save').text($T('Saving...'));options.save(elem.val(),function(){$save_button.text($T('Saved')).addClass('saved').removeClass('saving waiting-save');});}
function _save_cycle(my_time){return function(){if(last_change<=my_time){_set_saving();}};}
if(pd_context){if(arg1==='auto-save'&&$save_button.length){_.extend(options,arg2||{});elem.on('input',function(){$save_button.addClass('waiting-save').removeClass('saving saved').text($T('Save')).prop('disabled',false);last_change=new Date().getTime();setTimeout(_save_cycle(last_change),options.wait_time||2000);});$save_button.on('click',function(){last_change=new Date().getTime();_set_saving();});}}else{pd_context=PageDownMathJax();elem.data('pagedown',pd_context);pd_context.createEditor(elem.get(0));}}
$(this).each(function(i,elem){_pagedown($(elem));});};})();