!function($,e,t,n){function i(e){e.each(function(){var e=$(this);e.css({height:"auto",minHeight:0}),e.hasClass("section")&&0===e.find(".gallery").length&&!e.hasClass("section-download")?e.css({minHeight:f}):0===e.find(".gallery").length&&(568>=f&&e.outerHeight()<=f&&!e.hasClass("slide")?e.css({height:e.outerHeight()}):568>=f&&e.find(".container:eq(0)").outerHeight()>=f&&!e.hasClass("slide")?e.css({height:e.find(".container:eq(0)").outerHeight()+40}):(p>=600&&!e.hasClass("section-download")&&!e.parents(".section-download").length||568>=p&&e.hasClass("slide")||p>=600&&e.hasClass("section-download-alt")||p>=600&&e.parents(".section-download-alt").length||p>=992&&e.hasClass("section-download")||p>=992&&e.parents(".section-download").length)&&e.css({height:f}))})}function o(e){e.each(function(){var e=$(this);p>=768?e.css({height:f/2}):e.removeAttr("style")})}function a(e){e.each(function(){var e=$(this),t=e.find("[data-fs-image]");e.addClass("fs-background").css({backgroundImage:"url("+t.attr("src")+")"}),t.remove()})}function s(){var e=new google.maps.Geocoder,t=$(".map");t.length&&t.each(function(){var t=this,n=$(this),i=n.data("address"),o,a,s;e.geocode({address:i},function(e,n){n==google.maps.GeocoderStatus.OK?o=new google.maps.LatLng(e[0].geometry.location.lat(),e[0].geometry.location.lng()):(console.log("Geocoding unsuccessful. Reason: "+n),o=new google.maps.LatLng(48.104786,16.049149));var i=new google.maps.StyledMapType(z,{name:"Styled Map"});a=new google.maps.Map(t,{center:o,zoom:17,disableDefaultUI:!0}),a.mapTypes.set("map_style",i),a.setMapTypeId("map_style"),s=new google.maps.Marker({position:o,map:a,icon:"images/google-map/map-pin.png"})})})}function r(t){this.$container=t.$container,this.$items=t.$items,this.$win=$(e),this.currentItem=0,this.mode="mobile",this.mobileInit=!1,this.desktopInit=!1,this.animating=!1,this.firstInit=!0,this.bind(),this.determineMode(),this.init()}function l(e){this.$item=e,this.start=0,this.end=e.data("number"),this.current=this.start,this.time=1500,this.speed=this.end/this.time,this["int"]=null}function u(e){return e.hasClass("slide-from-top")||e.hasClass("slide-from-bottom")?m>=e.offset().top-e.height()/2:m>=e.offset().top}var c=$(e),d=$(t),p,f,m,h,F,g,y,v,C,b,D,w,k,x,T,I,S;c.load(function(){$(".preloader-text").addClass("pre-animate"),$(".status").delay(3e3).fadeOut(),$(".preloader").delay(3500).fadeOut("slow")}),d.ready(function(){function t(){var t=$(e).scrollTop();n(t),P=t,E=!1}function n(e){P-e>O?z.removeClass("is-hidden"):e-P>O&&e>H&&z.addClass("is-hidden")}p=c.width(),f=c.height(),m=c.scrollTop()+f,h=new M({linksContainerSelector:"#scroll-spy",sectionSelector:".section:not(.section-intro):not(.section-download-alt):not(.section-gallery)"}),h.init(),F=$("html"),g=$(".section, .section-body, .slider-intro .slide"),y=$(".half-height"),v=$("[data-fs-container]"),b=$(".slider-intro ul, .slider-about ul"),C=$(".gallery ul"),w=$(".carousel"),k=$(".link-video"),x=$(".link-photo"),T=$(".slide-from-bottom, .slide-from-right, .slide-from-left, .slide-from-top, .fade-in"),I=$(".counter span[data-number]"),S=$(".logo"),F.toggleClass("mobile-device",$.browser.mobile),S.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},800)}),c.on("load resize",function(e){p=c.width(),f=c.height(),i(g),o(y),"load"===e.type?C.isotope({itemSelector:".gallery-item",layoutMode:"packery"}).addClass("gallery-loaded"):setTimeout(function(){C.isotope("layout")},700),h.refreshPositions()}),C.on("arrangeComplete",function(){h.refreshPositions()}),c.on("load resize scroll",function(){m=c.scrollTop()+f,p>=768&&T.each(function(){var e=$(this);!e.hasClass("in-viewport")&&u(e)&&e.addClass("in-viewport")}),I.each(function(){var e=$(this);if(!e.hasClass("in-viewport")&&u(e)){e.addClass("in-viewport");var t=new l(e);t.init()}}),w.each(function(){var e=$(this);!e.hasClass("in-viewport")&&u(e)&&e.addClass("in-viewport")})}),i(g),o(y),a(v),b.owlCarousel({singleItem:!0,slideSpeed:600,paginationSpeed:600,rewindSpeed:1e3,autoPlay:!0}),$(".slider-intro ul").data("owlCarousel").play(),D=$(".slider-testimonials ul").owlCarousel({itemsMobile:[479,1],itemsTablet:!1,itemsDesktopSmall:[992,2],itemsDesktop:!1,items:2,slideSpeed:600,rewindSpeed:1e3,autoPlay:!1,pagination:!1}).data("owlCarousel");var s=$(".link-prev"),d=$(".link-next");s.on("click",function(e){e.preventDefault(),D.prev()}),d.on("click",function(e){e.preventDefault(),D.next()}),w.length&&w.each(function(){var e=$(this).find("ul"),t=e.find("li"),n=new r({$container:e,$items:t})}),k.magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:300,callbacks:{open:function(){$(".slider-intro ul").data("owlCarousel").stop()}}}),x.magnificPopup({type:"image",mainClass:"mfp-with-zoom",removalDelay:300,zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}},gallery:{enabled:!0}});var z=$(".header"),A=z.height(),E=!1,P=0,q=0,O=0,H=150;$(e).on("scroll",function(){E||(E=!0,e.requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,250))}),$(e).on("resize",function(){A=z.height()})});var z=[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#6b6b6b"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#525252"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#848484"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#848484"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]}];e.initMaps=s,r.prototype.determineMode=function(){var e=this;e.$win.width()>767?e.mode="desktop":e.mode="mobile"},r.prototype.init=function(){var e=this;"mobile"===e.mode&&(e.desktopInit&&e.cleanupDesktop(),e.rearrange(),e.currentItem-=2,e.currentItem<0&&(e.currentItem=0),e.$container.owlCarousel({singleItem:!0,slideSpeed:600,rewindSpeed:1e3,autoPlay:!1,pagination:!1,mouseDrag:!0,afterMove:function(t,n){e.currentItem=e.$container.data("owlCarousel").currentItem}}),e.$container.data("owlCarousel").goTo(e.currentItem),e.bindMobile()),"desktop"===e.mode&&(e.mobileInit&&e.cleanupMobile(),e.rearrange(),e.currentItem+=2,e.currentItem>e.$items.length-1&&(e.currentItem=e.$items.length-1),e.goToSlide(e.currentItem),e.bindDesktop()),e.firstInit=!1},r.prototype.bind=function(){var e=this;e.$win.resize(function(){e.determineMode(),(e.mobileInit&&"desktop"===e.mode||e.desktopInit&&"mobile"===e.mode)&&e.init()})},r.prototype.bindMobile=function(){var e=this;e.mobileInit=!0},r.prototype.bindDesktop=function(){var e=this;e.$items.on("click.carousel",function(t){t.preventDefault();var n=$(this).index();e.currentItem=n,e.goToSlide(n)}),e.desktopInit=!0},r.prototype.cleanupMobile=function(){var e=this;e.$container.data("owlCarousel").destroy(),e.mobileInit=!1},r.prototype.cleanupDesktop=function(){var e=this;e.desktopInit=!1},r.prototype.rearrange=function(){var e=this,t=e.$container,n=e.$items;if("desktop"===e.mode){for(var i=0;i<n.length;i++)if(i===n.length-1){var o=n.eq(i);t.prepend(o.prev()),t.prepend(o)}}else if(!e.firstInit&&"mobile"===e.mode)for(var i=0;i<n.length;i++)if(2>i){var o=n.eq(i);t.append(o)}e.$items=t.find("li")},r.prototype.goToSlide=function(e){var t=this,n=t.$items;t.$items.each(function(t){var n=$(this);n.attr("class",""),t===e-2&&n.addClass("carousel-item1"),t===e-1&&n.addClass("carousel-item2"),t===e&&n.addClass("carousel-item3"),t===e+1&&n.addClass("carousel-item4"),t===e+2&&n.addClass("carousel-item5")})},l.prototype.init=function(){var e=this;e["int"]=setInterval(function(){e.current++,e.$item.text(e.current),e.current===e.end&&clearInterval(e["int"])},this.speed)};var M=function(e){var t=this;t.linksContainerSelector=e.linksContainerSelector,t.sectionSelector=e.sectionSelector,t.$linksContainer=$(t.linksContainerSelector),t.$links=t.$linksContainer.find("a"),t.$sections=$(t.sectionSelector),t.headerOffset=e.headerOffset,t.current,t.data={}};M.prototype.getPositions=function(){var e=this,t=e.data;e.$links.each(function(){var e=$(this),n=$(e.attr("href"));t[n.attr("id")]=n.offset().top})},M.prototype.refreshPositions=function(){var e=this,t=e.data;e.$links.each(function(){var e=$(this),n=$(e.attr("href"));t[n.attr("id")]=n.offset().top})},M.prototype.getCurrentSection=function(){var t=this,n=t.data,i=$(e).scrollTop();for(var o in n){var a=$("#"+o),s=a.next(".section");(i>=a.offset().top-f/5&&s.length>0&&s.offset().top>=i||i>=a.offset().top-f/5&&0===s.length)&&(t.current="#"+o)}t.setCurrent()},M.prototype.setCurrent=function(){var e=this;e.$links.parents("ul:eq(0)").find(".active").removeClass("active"),e.$linksContainer.find('a[href="'+e.current+'"]').length&&e.$linksContainer.find('a[href="'+e.current+'"]').addClass("active")},M.prototype.scrollToCurrentSection=function(){var e=this,t=$(e.current),n=t.offset().top;768>p&&(n+=$(".header").height()),$("html, body").animate({scrollTop:n},{duration:700,queue:!1})},M.prototype.bindEvents=function(){var e=this;e.$links.on("click.scrollSpy",function(t){t.preventDefault(),e.current=$(this).attr("href"),e.scrollToCurrentSection(),$(".navbar-collapse").hasClass("in")&&$(".navbar-toggle").trigger("click")}),c.on("scroll.scrollSpy",function(){e.getCurrentSection()})},M.prototype.init=function(){var e=this;e.getPositions(),e.getCurrentSection(),e.setCurrent(),e.bindEvents()},$("#contact-form").submit(function(e){function t(e){var t=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return t.test(e)}e.preventDefault();var n=$("#name").val(),i=$("#email").val(),o=$("#message").val(),a="name="+n+"&email="+i+"&message="+o;return t(i)&&o.length>1&&n.length>1?$.ajax({type:"POST",url:"sendmail.php",data:a,success:function(){$(".success").fadeIn(1e3),$(".error").fadeOut(500)}}):($(".error").fadeIn(1e3),$(".success").fadeOut(500)),!1})}(jQuery,window,document);