!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(e){"use strict";var t,n,i,s;String.prototype.includes||(t={}.toString,n=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),i="".indexOf,s=function(e){if(null==this)throw new TypeError;var n=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var s=n.length,o=String(e),a=o.length,l=arguments.length>1?arguments[1]:void 0,r=l?Number(l):0;return r!=r&&(r=0),!(a+Math.min(Math.max(r,0),s)>s)&&-1!=i.call(n,o,r)},n?n(String.prototype,"includes",{value:s,configurable:!0,writable:!0}):String.prototype.includes=s),String.prototype.startsWith||function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),t={}.toString,n=function(e){if(null==this)throw new TypeError;var n=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var i=n.length,s=String(e),o=s.length,a=arguments.length>1?arguments[1]:void 0,l=a?Number(a):0;l!=l&&(l=0);var r=Math.min(Math.max(l,0),i);if(o+r>i)return!1;for(var d=-1;++d<o;)if(n.charCodeAt(r+d)!=s.charCodeAt(d))return!1;return!0};e?e(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n}(),Object.keys||(Object.keys=function(e,t,n){for(t in n=[],e)n.hasOwnProperty.call(e,t)&&n.push(t);return n});var o={useDefault:!1,_set:e.valHooks.select.set};e.valHooks.select.set=function(t,n){return n&&!o.useDefault&&e(t).data("selected",!0),o._set.apply(this,arguments)};var a=null;function l(t){return e.each([{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}],function(){t=t?t.replace(this.re,this.ch):""}),t}e.fn.triggerNative=function(e){var t,n=this[0];n.dispatchEvent?("function"==typeof Event?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),n.dispatchEvent(t)):n.fireEvent?((t=document.createEventObject()).eventType=e,n.fireEvent("on"+e,t)):this.trigger(e)},e.expr.pseudos.icontains=function(t,n,i){var s=e(t).find("span.dropdown-item-inner");return(s.data("tokens")||s.text()).toString().toUpperCase().includes(i[3].toUpperCase())},e.expr.pseudos.ibegins=function(t,n,i){var s=e(t).find("span.dropdown-item-inner");return(s.data("tokens")||s.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())},e.expr.pseudos.aicontains=function(t,n,i){var s=e(t).find("span.dropdown-item-inner");return(s.data("tokens")||s.data("normalizedText")||s.text()).toString().toUpperCase().includes(i[3].toUpperCase())},e.expr.pseudos.aibegins=function(t,n,i){var s=e(t).find("span.dropdown-item-inner");return(s.data("tokens")||s.data("normalizedText")||s.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())};var r=function(e){var t=function(t){return e[t]},n="(?:"+Object.keys(e).join("|")+")",i=RegExp(n),s=RegExp(n,"g");return function(e){return e=null==e?"":""+e,i.test(e)?e.replace(s,t):e}},d=r({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}),h=r({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"}),c=function(t,n){o.useDefault||(e.valHooks.select.set=o._set,o.useDefault=!0),this.$element=e(t),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=n,null===this.options.title&&(this.options.title=this.$element.attr("title"));var i=this.options.windowPadding;"number"==typeof i&&(this.options.windowPadding=[i,i,i,i]),this.val=c.prototype.val,this.render=c.prototype.render,this.refresh=c.prototype.refresh,this.setStyle=c.prototype.setStyle,this.selectAll=c.prototype.selectAll,this.deselectAll=c.prototype.deselectAll,this.destroy=c.prototype.destroy,this.remove=c.prototype.remove,this.show=c.prototype.show,this.hide=c.prototype.hide,this.init()};function p(t){var n,i=arguments,s=t;[].shift.apply(i);var o=this.each(function(){var t=e(this);if(t.is("select")){var o=t.data("selectpicker"),a="object"==typeof s&&s;if(o){if(a)for(var l in a)a.hasOwnProperty(l)&&(o.options[l]=a[l])}else{var r=e.extend({},c.DEFAULTS,e.fn.selectpicker.defaults||{},t.data(),a);r.template=e.extend({},c.DEFAULTS.template,e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{},t.data().template,a.template),t.data("selectpicker",o=new c(this,r))}"string"==typeof s&&(n=o[s]instanceof Function?o[s].apply(o,i):o.options[s])}});return void 0!==n?n:o}c.VERSION="1.12.2",c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default btn-light",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"fa",tickIcon:"fa-check",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},c.prototype={constructor:c,init:function(){var t=this,n=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),void 0!==n&&(this.$button.attr("data-id",n),e('label[for="'+n+'"]').click(function(e){e.preventDefault(),t.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){t.$menuInner.attr("aria-expanded",!1),t.$element.trigger("hide.bs.select",e)},"hidden.bs.dropdown":function(e){t.$element.trigger("hidden.bs.select",e)},"show.bs.dropdown":function(e){t.$menuInner.attr("aria-expanded",!0),t.$element.trigger("show.bs.select",e)},"shown.bs.dropdown":function(e){t.$element.trigger("shown.bs.select",e)}}),t.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){t.$button.addClass("bs-invalid").focus(),t.$element.on({"focus.bs.select":function(){t.$button.focus(),t.$element.off("focus.bs.select")},"shown.bs.select":function(){t.$element.val(t.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&t.$button.removeClass("bs-invalid"),t.$element.off("rendered.bs.select")}})}),setTimeout(function(){t.$element.trigger("loaded.bs.select")})},createDropdown:function(){var t=this.multiple||this.options.showTick?" show-tick":"",n=this.$element.parent().hasClass("input-group")?" input-group-btn":"",i=this.autofocus?" autofocus":"",s=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",o=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+d(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",a=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default btn-light">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default btn-light">'+this.options.deselectAllText+"</button></div></div>":"",l=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default btn-light">'+this.options.doneButtonText+"</button></div></div>":"",r='<div class="btn-group bootstrap-select'+t+n+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+i+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+s+o+a+'<div class="dropdown-menu inner" role="listbox" aria-expanded="false"></div>'+l+"</div></div>";return e(r)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("div.inner")[0].innerHTML=t,e},reloadLi:function(){var e=this.createLi();this.$menuInner[0].innerHTML=e},createLi:function(){var t=this,n=[],i=0,s=document.createElement("option"),o=-1,a=function(e,t,n,i){return'<a tabindex="0"'+(void 0!==(n="dropdown-item "+(n||""))&&""!==n?' class="'+n+'"':"")+(null!=t?' data-original-index="'+t+'"':"")+(null!=i?'data-optgroup="'+i+'"':"")+">"+e+"</a>"},r=function(e,t,n){return"<div"+(void 0!==t&&""!==t?' class="'+t+'"':"")+(null!=n?' data-optgroup="'+n+'"':"")+">"+e+"</div>"},h=function(n,i,s,o){return"<span"+(void 0!==(i="dropdown-item-inner "+(i||""))?' class="'+i+'"':"")+(s?' style="'+s+'"':"")+(t.options.liveSearchNormalize?' data-normalized-text="'+l(d(e(n).html()))+'"':"")+(void 0!==o||null!==o?' data-tokens="'+o+'"':"")+' role="option">'+n+'<span class="'+t.options.iconBase+" "+t.options.tickIcon+' check-mark"></span></span>'};if(this.options.title&&!this.multiple&&(o--,!this.$element.find(".bs-title-option").length)){var c=this.$element[0];s.className="bs-title-option",s.innerHTML=this.options.title,s.value="",c.insertBefore(s,c.firstChild),void 0===e(c.options[c.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected")&&(s.selected=!0)}var p=this.$element.find("option");return p.each(function(s){var l=e(this);if(o++,!l.hasClass("bs-title-option")){var c,u=this.className||"",m=d(this.style.cssText),f=l.data("content")?l.data("content"):l.html(),v=l.data("tokens")?l.data("tokens"):null,g=void 0!==l.data("subtext")?'<small class="text-muted">'+l.data("subtext")+"</small>":"",b=void 0!==l.data("icon")?'<span class="'+t.options.iconBase+" "+l.data("icon")+'"></span> ':"",$=l.parent(),x="OPTGROUP"===$[0].tagName,w=x&&$[0].disabled,C=this.disabled||w;if(""!==b&&C&&(b="<span>"+b+"</span>"),t.options.hideDisabled&&(C&&!x||w))return c=l.data("prevHiddenIndex"),l.next().data("prevHiddenIndex",void 0!==c?c:s),void o--;if(l.data("content")||(f=b+'<span class="text">'+f+g+"</span>"),x&&!0!==l.data("divider")){if(t.options.hideDisabled&&C){if(void 0===$.data("allOptionsDisabled")){var y=$.children();$.data("allOptionsDisabled",y.filter(":disabled").length===y.length)}if($.data("allOptionsDisabled"))return void o--}var S=" "+$[0].className||"";if(0===l.index()){i+=1;var k=$[0].label,E=void 0!==$.data("subtext")?'<small class="text-muted">'+$.data("subtext")+"</small>":"";k=($.data("icon")?'<span class="'+t.options.iconBase+" "+$.data("icon")+'"></span> ':"")+'<span class="text">'+d(k)+E+"</span>",0!==s&&n.length>0&&(o++,n.push(r("","dropdown-divider",i+"div"))),o++,n.push(r(k,"dropdown-header"+S,i))}if(t.options.hideDisabled&&C)return void o--;n.push(a(h(f,"opt "+u+S,m,v),s,"",i))}else if(!0===l.data("divider"))n.push(r("","dropdown-divider",i+"div"));else if(!0===l.data("hidden"))c=l.data("prevHiddenIndex"),l.next().data("prevHiddenIndex",void 0!==c?c:s),n.push(a(h(f,u,m,v),s,"hidden is-hidden"));else{var I=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!I&&t.options.hideDisabled&&void 0!==(c=l.data("prevHiddenIndex"))){var T=p.eq(c)[0].previousElementSibling;T&&"OPTGROUP"===T.tagName&&!T.disabled&&(I=!0)}I&&(o++,n.push(r("","dropdown-divider",i+"div"))),n.push(a(h(f,u,m,v),s))}t.liObj[s]=o}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),n.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("a, .dropdown-header, .dropdown-divider")),this.$lis},render:function(t){var n,i=this,s=this.$element.find("option");!1!==t&&s.each(function(e){var t=i.findLis().eq(i.liObj[e]);i.setDisabled(e,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,t),i.setSelected(e,this.selected,t)}),this.togglePlaceholder(),this.tabIndex();var o=s.map(function(){if(this.selected){if(i.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var t,n=e(this),s=n.data("icon")&&i.options.showIcon?'<i class="'+i.options.iconBase+" "+n.data("icon")+'"></i> ':"";return t=i.options.showSubtext&&n.data("subtext")&&!i.multiple?' <small class="text-muted">'+n.data("subtext")+"</small>":"",void 0!==n.attr("title")?n.attr("title"):n.data("content")&&i.options.showContent?n.data("content").toString():s+n.html()+t}}).toArray(),a=this.multiple?o.join(this.options.multipleSeparator):o[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var l=this.options.selectedTextFormat.split(">");if(l.length>1&&o.length>l[1]||1==l.length&&o.length>=2){n=this.options.hideDisabled?", [disabled]":"";var r=s.not('[data-divider="true"], [data-hidden="true"]'+n).length;a=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(o.length,r):this.options.countSelectedText).replace("{0}",o.length.toString()).replace("{1}",r.toString())}}null==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(a=this.options.title),a||(a=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",h(e.trim(a.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(a),this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var n=e||this.options.style;"add"==t?this.$button.addClass(n):"remove"==t?this.$button.removeClass(n):(this.$button.removeClass(this.options.style),this.$button.addClass(n))},updatePosition:function(){var e=this.$menu.get(0).ownerDocument.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),this.$menu.get(0).ownerDocument.dispatchEvent(e)},liHeight:function(t){if(t||!1!==this.options.size&&!this.sizeInfo){var n=document.createElement("div"),i=document.createElement("div"),s=document.createElement("ul"),o=document.createElement("a"),a=document.createElement("a"),l=document.createElement("span"),r=document.createElement("span"),d=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,h=this.options.liveSearch?document.createElement("div"):null,c=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,p=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(r.className="text",n.className=this.$menu[0].parentNode.className+" show open",i.className="dropdown-menu open show",s.className="dropdown-menu inner",o.className="dropdown-divider",l.className="dropdown-item-inner",r.appendChild(document.createTextNode("Inner text")),l.appendChild(r),a.appendChild(l),s.appendChild(a),s.appendChild(o),d&&i.appendChild(d),h){var u=document.createElement("input");h.className="bs-searchbox",u.className="form-control",h.appendChild(u),i.appendChild(h)}c&&i.appendChild(c),i.appendChild(s),p&&i.appendChild(p),n.appendChild(i),document.body.appendChild(n);var m=l.offsetHeight,f=d?d.offsetHeight:0,v=h?h.offsetHeight:0,g=c?c.offsetHeight:0,b=p?p.offsetHeight:0,$=e(o).outerHeight(!0),x="function"==typeof getComputedStyle&&getComputedStyle(i),w=x?null:e(i),C={vert:parseInt(x?x.paddingTop:w.css("paddingTop"))+parseInt(x?x.paddingBottom:w.css("paddingBottom"))+parseInt(x?x.borderTopWidth:w.css("borderTopWidth"))+parseInt(x?x.borderBottomWidth:w.css("borderBottomWidth")),horiz:parseInt(x?x.paddingLeft:w.css("paddingLeft"))+parseInt(x?x.paddingRight:w.css("paddingRight"))+parseInt(x?x.borderLeftWidth:w.css("borderLeftWidth"))+parseInt(x?x.borderRightWidth:w.css("borderRightWidth"))},y={vert:C.vert+parseInt(x?x.marginTop:w.css("marginTop"))+parseInt(x?x.marginBottom:w.css("marginBottom"))+2,horiz:C.horiz+parseInt(x?x.marginLeft:w.css("marginLeft"))+parseInt(x?x.marginRight:w.css("marginRight"))+2};document.body.removeChild(n),this.sizeInfo={liHeight:m,headerHeight:f,searchHeight:v,actionsHeight:g,doneButtonHeight:b,dividerHeight:$,menuPadding:C,menuExtras:y}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t,n,i,s,o,a,l,r,d=this,h=this.$menu,c=this.$menuInner,p=e(window),u=this.$newElement[0].offsetHeight,m=this.$newElement[0].offsetWidth,f=this.sizeInfo.liHeight,v=this.sizeInfo.headerHeight,g=this.sizeInfo.searchHeight,b=this.sizeInfo.actionsHeight,$=this.sizeInfo.doneButtonHeight,x=this.sizeInfo.dividerHeight,w=this.sizeInfo.menuPadding,C=this.sizeInfo.menuExtras,y=this.options.hideDisabled?".disabled":"",S=function(){var t,n=d.$newElement.offset(),i=e(d.options.container);d.options.container&&!i.is("body")?((t=i.offset()).top+=parseInt(i.css("borderTopWidth")),t.left+=parseInt(i.css("borderLeftWidth"))):t={top:0,left:0};var s=d.options.windowPadding;o=n.top-t.top-p.scrollTop(),a=p.height()-o-u-t.top-s[2],l=n.left-t.left-p.scrollLeft(),r=p.width()-l-m-t.left-s[1],o-=s[0],l-=s[3]};if(S(),"auto"===this.options.size){var k=function(){var p,u=function(t,n){return function(i){return n?i.classList?i.classList.contains(t):e(i).hasClass(t):!(i.classList?i.classList.contains(t):e(i).hasClass(t))}},x=d.$menuInner[0].getElementsByTagName("a"),y=Array.prototype.filter?Array.prototype.filter.call(x,u("d-none",!1)):d.$lis.not(".d-none"),k=Array.prototype.filter?Array.prototype.filter.call(y,u("dropdown-header",!0)):y.filter(".dropdown-header");S(),t=a-C.vert,n=r-C.horiz,d.options.container?(h.data("height")||h.data("height",h.height()),i=h.data("height"),h.data("width")||h.data("width",h.width()),s=h.data("width")):(i=h.height(),s=h.width()),d.options.dropupAuto&&d.$newElement.toggleClass("dropup",o>a&&t-C.vert<i),d.$newElement.hasClass("dropup")&&(t=o-C.vert),"auto"===d.options.dropdownAlignRight&&h.toggleClass("dropdown-menu-right",l>r&&n-C.horiz<s-m),p=y.length+k.length>3?3*f+C.vert-2:0,h.css({"max-height":t+"px",overflow:"hidden","min-height":p+v+g+b+$+"px"}),c.css({"max-height":t-v-g-b-$-w.vert+"px","overflow-y":"auto","min-height":Math.max(p-w.vert,0)+"px"})};k(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",k),p.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",k)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(y).length>this.options.size){var E=this.$lis.not(".dropdown-divider").not(y).children().slice(0,this.options.size).last().parent().index(),I=this.$lis.slice(0,E+1).filter(".dropdown-divider").length;t=f*this.options.size+I*x+w.vert,d.options.container?(h.data("height")||h.data("height",h.height()),i=h.data("height")):i=h.height(),d.options.dropupAuto&&this.$newElement.toggleClass("dropup",o>a&&t-C.vert<i),h.css({"max-height":t+v+g+b+$+"px",overflow:"hidden","min-height":""}),c.css({"max-height":t-w.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),t=this.options.container?this.$newElement.clone().appendTo("body"):e,n=e.children(".dropdown-menu").outerWidth(),i=t.css("width","auto").children("button").outerWidth();e.remove(),t.remove(),this.$newElement.css("width",Math.max(n,i)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');var t,n,i,s=this,o=e(this.options.container),a=function(e){s.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),o.is("body")?n={top:0,left:0}:((n=o.offset()).top+=parseInt(o.css("borderTopWidth"))-o.scrollTop(),n.left+=parseInt(o.css("borderLeftWidth"))-o.scrollLeft()),i=e.hasClass("dropup")?0:e[0].offsetHeight,s.$bsContainer.css({top:t.top-n.top+i,left:t.left-n.left,width:e[0].offsetWidth})};this.$button.on("click",function(){var t=e(this);s.isDisabled()||(a(s.$newElement),s.$bsContainer.appendTo(s.options.container).toggleClass("open",!t.hasClass("open")).append(s.$menu))}),e(window).on("resize scroll",function(){a(s.$newElement)}),this.$element.on("hide.bs.select",function(){s.$menu.data("height",s.$menu.height()),s.$bsContainer.detach()})},setSelected:function(e,t,n){n||(this.togglePlaceholder(),n=this.findLis().eq(this.liObj[e])),n.toggleClass("selected",t).find("span.dropdown-item-inner").attr("aria-selected",t)},setDisabled:function(e,t,n){n||(n=this.findLis().eq(this.liObj[e])),t?n.addClass("disabled").children("span.dropdown-item-inner").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):n.removeClass("disabled").children("span.dropdown-item-inner").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},togglePlaceholder:function(){var e=this.$element.val();this.$button.toggleClass("bs-placeholder",null===e||""===e||e.constructor===Array&&0===e.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var t=this,n=e(document);n.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&n.data("spaceSelect")&&(e.preventDefault(),n.data("spaceSelect",!1))}),this.$button.on("click",function(){t.setSize()}),this.$element.on("shown.bs.select",function(){if(t.options.liveSearch||t.multiple){if(!t.multiple){var e=t.liObj[t.$element[0].selectedIndex];if("number"!=typeof e||!1===t.options.size)return;var n=t.$lis.eq(e)[0].offsetTop-t.$menuInner[0].offsetTop;n=n-t.$menuInner[0].offsetHeight/2+t.sizeInfo.liHeight/2,t.$menuInner[0].scrollTop=n}}else t.$menuInner.find("a.selected").focus()}),this.$menuInner.on("click","a",function(n){var i=e(this).find("span.dropdown-item-inner"),s=i.parent().data("originalIndex"),o=t.$element.val(),l=t.$element.prop("selectedIndex"),r=!0;if(t.multiple&&1!==t.options.maxOptions&&n.stopPropagation(),n.preventDefault(),!t.isDisabled()&&!i.parent().hasClass("disabled")){var d=t.$element.find("option"),h=d.eq(s),c=h.prop("selected"),p=h.parent("optgroup"),u=t.options.maxOptions,m=p.data("maxOptions")||!1;if(t.multiple){if(h.prop("selected",!c),t.setSelected(s,!c),i.blur(),!1!==u||!1!==m){var f=u<d.filter(":selected").length,v=m<p.find("option:selected").length;if(u&&f||m&&v)if(u&&1==u)d.prop("selected",!1),h.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected"),t.setSelected(s,!0);else if(m&&1==m){p.find("option:selected").prop("selected",!1),h.prop("selected",!0);var g=i.parent().data("optgroup");t.$menuInner.find('[data-optgroup="'+g+'"]').removeClass("selected"),t.setSelected(s,!0)}else{var b="string"==typeof t.options.maxOptionsText?[t.options.maxOptionsText,t.options.maxOptionsText]:t.options.maxOptionsText,$="function"==typeof b?b(u,m):b,x=$[0].replace("{n}",u),w=$[1].replace("{n}",m),C=e('<div class="notify"></div>');$[2]&&(x=x.replace("{var}",$[2][u>1?0:1]),w=w.replace("{var}",$[2][m>1?0:1])),h.prop("selected",!1),t.$menu.append(C),u&&f&&(C.append(e("<div>"+x+"</div>")),r=!1,t.$element.trigger("maxReached.bs.select")),m&&v&&(C.append(e("<div>"+w+"</div>")),r=!1,t.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){t.setSelected(s,!1)},10),C.delay(750).fadeOut(300,function(){e(this).remove()})}}}else d.prop("selected",!1),h.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected").find("span.dropdown-item-inner").attr("aria-selected",!1),t.setSelected(s,!0);!t.multiple||t.multiple&&1===t.options.maxOptions?t.$button.focus():t.options.liveSearch&&t.$searchbox.focus(),r&&(o!=t.$element.val()&&t.multiple||l!=t.$element.prop("selectedIndex")&&!t.multiple)&&(a=[s,h.prop("selected"),c],t.$element.triggerNative("change"))}}),this.$menu.on("click","a.disabled span.dropdown-item-inner , .popover-title, .popover-title :not(.close)",function(n){n.currentTarget==this&&(n.preventDefault(),n.stopPropagation(),t.options.liveSearch&&!e(n.target).hasClass("close")?t.$searchbox.focus():t.$button.focus())}),this.$menuInner.on("click",".dropdown-divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),t.options.liveSearch?t.$searchbox.focus():t.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){t.$button.click()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(n){t.options.liveSearch?t.$searchbox.focus():t.$button.focus(),n.preventDefault(),n.stopPropagation(),e(this).hasClass("bs-select-all")?t.selectAll():t.deselectAll()}),this.$element.change(function(){t.render(!1),t.$element.trigger("changed.bs.select",a),a=null})},liveSearchListener:function(){var t=this,n=e('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){t.$menuInner.find(".active").removeClass("active"),t.$searchbox.val()&&(t.$searchbox.val(""),t.$lis.not(".is-hidden").removeClass("d-none"),n.parent().length&&n.remove()),t.multiple||t.$menuInner.find(".selected").addClass("active"),setTimeout(function(){t.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(t.$lis.not(".is-hidden").removeClass("d-none"),t.$lis.filter(".active").removeClass("active"),n.remove(),t.$searchbox.val()){var i,s=t.$lis.not(".is-hidden, .dropdown-divider, .dropdown-header");if((i=t.options.liveSearchNormalize?s.not(":a"+t._searchStyle()+'("'+l(t.$searchbox.val())+'")'):s.not(":"+t._searchStyle()+'("'+t.$searchbox.val()+'")')).length===s.length)n.html(t.options.noneResultsText.replace("{0}",'"'+d(t.$searchbox.val())+'"')),t.$menuInner.append(n),t.$lis.addClass("d-none");else{i.addClass("d-none");var o,a=t.$lis.not(".d-none");a.each(function(t){var n=e(this);n.hasClass("dropdown-divider")?void 0===o?n.addClass("d-none"):(o&&o.addClass("d-none"),o=n):n.hasClass("dropdown-header")&&a.eq(t+1).data("optgroup")!==n.data("optgroup")?n.addClass("d-none"):o=null}),o&&o.addClass("d-none"),s.not(".d-none").first().addClass("active"),t.$menuInner.scrollTop(0)}t.updatePosition()}})},_searchStyle:function(){return{begins:"ibegins",startsWith:"ibegins"}[this.options.liveSearchStyle]||"icontains"},val:function(e){return void 0!==e?(this.$element.val(e),this.render(),this.$element):this.$element.val()},changeAll:function(t){if(this.multiple){void 0===t&&(t=!0),this.findLis();var n=this.$element.find("option"),i=this.$lis.not(".dropdown-divider, .dropdown-header, .disabled, .d-none"),s=i.length,o=[];if(t){if(i.filter(".selected").length===i.length)return}else if(0===i.filter(".selected").length)return;i.toggleClass("selected",t);for(var a=0;a<s;a++){var l=i[a].getAttribute("data-original-index");o[o.length]=n.eq(l)[0]}e(o).prop("selected",t),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click")},keydown:function(t){var n,i,s,o,a=e(this),l=(a.is("input")?a.parent().parent():a.parent()).data("this"),r=":not(.disabled, .d-none, .dropdown-header, .dropdown-divider)",d={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(!(o=l.$newElement.hasClass("open")||l.$newElement.hasClass("show"))&&(t.keyCode>=48&&t.keyCode<=57||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=65&&t.keyCode<=90))return l.options.container?l.$button.trigger("click"):(l.setSize(),l.$menu.parent().addClass("open show"),o=!0),void l.$searchbox.focus();if(l.options.liveSearch&&/(^9$|27)/.test(t.keyCode.toString(10))&&o&&(t.preventDefault(),t.stopPropagation(),l.$menuInner.click(),l.$button.focus()),/(38|40)/.test(t.keyCode.toString(10))){if(!(n=l.$lis.filter(r)).length)return;i=l.options.liveSearch?n.index(n.filter(".active")):n.index(n.filter(":focus")),s=l.$menuInner.data("prevIndex"),38==t.keyCode?(!l.options.liveSearch&&i!=s||-1==i||i--,i<0&&(i+=n.length)):40==t.keyCode&&((l.options.liveSearch||i==s)&&i++,i%=n.length),l.$menuInner.data("prevIndex",i),l.options.liveSearch?(t.preventDefault(),a.hasClass("dropdown-toggle")||(n.removeClass("active").eq(i).addClass("active").children("span.dropdown-item-inner").focus(),a.focus())):n.eq(i).focus()}else if(!a.is("input")){var h,c=[];(n=l.$lis.filter(r)).each(function(n){e.trim(e(this).children("span.dropdown-item-inner").text().toLowerCase()).substring(0,1)==d[t.keyCode]&&c.push(n)}),h=e(document).data("keycount"),h++,e(document).data("keycount",h),e.trim(e(":focus").text().toLowerCase()).substring(0,1)!=d[t.keyCode]?(h=1,e(document).data("keycount",h)):h>=c.length&&(e(document).data("keycount",0),h>c.length&&(h=1)),n.eq(c[h-1]).children("span.dropdown-item-inner").focus()}if((/(13|32)/.test(t.keyCode.toString(10))||/(^9$)/.test(t.keyCode.toString(10))&&l.options.selectOnTab)&&o){if(/(32)/.test(t.keyCode.toString(10))||t.preventDefault(),l.options.liveSearch)/(32)/.test(t.keyCode.toString(10))||(l.$menuInner.find("a.active").click(),a.focus());else{var p=e(":focus");p.click(),p.focus(),t.preventDefault(),e(document).data("spaceSelect",!0)}e(document).data("keycount",0)}(/(^9$|27)/.test(t.keyCode.toString(10))&&o&&(l.multiple||l.options.liveSearch)||/(27)/.test(t.keyCode.toString(10))&&!o)&&(l.$menu.parent().removeClass("open"),l.options.container&&l.$newElement.removeClass("open"),l.$button.focus())},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var u=e.fn.selectpicker;e.fn.selectpicker=p,e.fn.selectpicker.Constructor=c,e.fn.selectpicker.noConflict=function(){return e.fn.selectpicker=u,this},e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(e){e.stopPropagation()}),e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var t=e(this);p.call(t,t.data())})})}(e)});