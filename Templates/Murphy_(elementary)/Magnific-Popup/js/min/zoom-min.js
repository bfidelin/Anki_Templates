var hasMozTransform,getHasMozTransform=function(){return void 0===hasMozTransform&&(hasMozTransform=void 0!==document.createElement("p").style.MozTransform),hasMozTransform};$.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t=mfp.st.zoom,o=".zoom",e;if(t.enabled&&mfp.supportsTransition){var n=t.duration,i=function(o){var e=o.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+t.duration/1e3+"s "+t.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},m="transition";return i["-webkit-"+m]=i["-moz-"+m]=i["-o-"+m]=i[m]=n,e.css(i),e},m=function(){mfp.content.css("visibility","visible")},r,f;_mfpOn("BuildControls"+o,function(){if(mfp._allowZoom()){if(clearTimeout(r),mfp.content.css("visibility","hidden"),e=mfp._getItemToZoom(),!e)return void m();f=i(e),f.css(mfp._getOffset()),mfp.wrap.append(f),r=setTimeout(function(){f.css(mfp._getOffset(!0)),r=setTimeout(function(){m(),setTimeout(function(){f.remove(),e=f=null,_mfpTrigger("ZoomAnimationEnded")},16)},n)},16)}}),_mfpOn(BEFORE_CLOSE_EVENT+o,function(){if(mfp._allowZoom()){if(clearTimeout(r),mfp.st.removalDelay=n,!e){if(e=mfp._getItemToZoom(),!e)return;f=i(e)}f.css(mfp._getOffset(!0)),mfp.wrap.append(f),mfp.content.css("visibility","hidden"),setTimeout(function(){f.css(mfp._getOffset())},16)}}),_mfpOn(CLOSE_EVENT+o,function(){mfp._allowZoom()&&(m(),f&&f.remove(),e=null)})}},_allowZoom:function(){return"image"===mfp.currItem.type},_getItemToZoom:function(){return!!mfp.currItem.hasSize&&mfp.currItem.img},_getOffset:function(t){var o;o=t?mfp.currItem.img:mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem);var e=o.offset(),n=parseInt(o.css("padding-top"),10),i=parseInt(o.css("padding-bottom"),10);e.top-=$(window).scrollTop()-n;var m={width:o.width(),height:(_isJQ?o.innerHeight():o[0].offsetHeight)-i-n};return getHasMozTransform()?m["-moz-transform"]=m.transform="translate("+e.left+"px,"+e.top+"px)":(m.left=e.left,m.top=e.top),m}}});