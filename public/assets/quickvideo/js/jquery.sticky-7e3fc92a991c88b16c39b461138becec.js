!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},i=t(window),n=t(document),r=[],o=i.height(),s=function(){for(var e=i.scrollTop(),s=n.height(),a=s-o,c=e>a?a-e:0,p=0;p<r.length;p++){var l=r[p],d=l.stickyWrapper.offset().top,u=d-l.topSpacing-c;if(u>=e)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.parent().removeClass(l.className),l.currentTop=null);else{var h=s-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;0>h?h+=l.topSpacing:h=l.topSpacing,l.currentTop!=h&&(l.stickyElement.css("position","fixed").css("top",h),"undefined"!=typeof l.getWidthFrom&&l.stickyElement.css("width",t(l.getWidthFrom).width()),l.stickyElement.parent().addClass(l.className),l.currentTop=h)}}},a=function(){o=i.height()},c={init:function(i){var n=t.extend(e,i);return this.each(function(){var e=t(this),i=e.attr("id"),o=t("<div></div>").attr("id",i+"-sticky-wrapper").addClass(n.wrapperClassName);e.wrapAll(o),n.center&&e.parent().css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({"float":"none"}).parent().css({"float":"right"});var s=e.parent();s.css("height",e.outerHeight()),r.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:e,currentTop:null,stickyWrapper:s,className:n.className,getWidthFrom:n.getWidthFrom})})},update:s,unstick:function(){return this.each(function(){var e=t(this);removeIdx=-1;for(var i=0;i<r.length;i++)r[i].stickyElement.get(0)==e.get(0)&&(removeIdx=i);-1!=removeIdx&&(r.splice(removeIdx,1),e.unwrap(),e.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",s,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",s),window.attachEvent("onresize",a)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t.fn.unstick=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments)},t(function(){setTimeout(s,0)})}(jQuery);