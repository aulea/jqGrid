/**
 * @license ContextMenu - jQuery plugin for right-click context menus
 *
 * Author: Chris Domigan
 * Contributors: Dan G. Switzer, II
 * Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: r2
 * Date: 16 July 2007
 *
 * For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/
 *
 * Updated: include support jQuery UI CSS classes existing starting with version 1.8
 *          and the currents modified CSS classes of version jQuery UI 1.9
 * by Oleg Kiriljuk, oleg.kiriljuk@ok-soft.gmbh.com
 * Date: 24 December 2011
 *
 * Updated by Oleg Kiriljuk to support jQuery UI 1.10 and 1.11
 * Date: 17 March 2015
 */
!function(t,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e,t.document)}):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e||window)),n(t,e.document),t}:n(jQuery,t.document)}("undefined"!=typeof window?window:this,function(d,u){"use strict";var r,c,m,h,S,e=null!=d.ui&&"string"==typeof d.ui.version?/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(d.ui.version):[],y=null!=e&&4===e.length&&"1"===e[1]&&e[2]<11,i={menuClasses:"ui-menu ui-widget ui-widget-content ui-corner-all",menuIconClasses:"ui-menu-icons ui-menu ui-widget ui-widget-content ui-corner-all",menuDivStyle:{position:"absolute",zIndex:"500"},menuStyle:{width:"100%"},itemClasses:"ui-menu-item",itemStyle:{},itemHoverStyle:{},itemAnchorClasses:"ui-corner-all",itemAnchorStyle:{position:"relative",paddingRight:"0"},itemIconAnchorStyle:{paddingLeft:"2em"},itemIconSpanStyle:{left:".2em",top:".3em",marginRight:".5em",position:"absolute",float:"left"},itemHoverAnchorClasses:"ui-state-hover",eventPosX:"pageX",eventPosY:"pageY",shadow:!0,menuShadowClasses:"ui-widget-shadow",menuShadowStyle:{position:"absolute",zIndex:"499",margin:"0",padding:"1px 0 0 6px"},onContextMenu:null,onShowMenu:null};d.fn.contextMenu=function(e,t){function a(){r.hide().attr("aria-hidden","true"),c.hide().attr("aria-hidden","true")}(h=h||[]).push({id:e,menuDivStyle:d.extend({},i.menuDivStyle,t.menuDivStyle||{}),menuStyle:d.extend({},i.menuStyle,t.menuStyle||{}),menuShadowStyle:d.extend({},i.menuShadowStyle,t.menuShadowStyle||{}),itemStyle:d.extend({},i.itemStyle,t.itemStyle||{}),itemHoverStyle:d.extend({},i.itemHoverStyle,t.itemHoverStyle||{}),menuClasses:t.menuClasses||i.menuClasses,menuIconClasses:t.menuIconClasses||i.menuIconClasses,menuShadowClasses:t.menuShadowClasses||i.menuShadowClasses,itemClasses:t.itemClasses||i.itemClasses,itemAnchorClasses:t.itemAnchorClasses||i.itemAnchorClasses,itemAnchorStyle:d.extend({},i.itemAnchorStyle,t.itemAnchorStyle||{}),itemIconSpanStyle:d.extend({},i.itemIconSpanStyle,t.itemIconSpanStyle||{}),itemIconAnchorStyle:d.extend({},i.itemIconAnchorStyle,t.itemIconAnchorStyle||{}),itemHoverAnchorClasses:t.itemHoverAnchorClasses||i.itemHoverAnchorClasses,bindings:t.bindings||{},shadow:t.shadow||!1===t.shadow?t.shadow:i.shadow,onContextMenu:t.onContextMenu||i.onContextMenu,onShowMenu:t.onShowMenu||i.onShowMenu,eventPosX:t.eventPosX||i.eventPosX,eventPosY:t.eventPosY||i.eventPosY});var n=h.length-1;return r||(r=d('<div class="jqContextMenu"></div>').hide().attr("aria-hidden","true").css(h[n].menuDivStyle).appendTo("body").bind("click",function(e){e.stopPropagation()}).mouseleave(function(e){-1===e.pageX&&-1===e.pageY||a()})),c||(c=d("<div></div>").addClass(h[n].menuShadowClasses).css(h[n].menuShadowStyle).appendTo("body").hide().attr("aria-hidden","true")),d(this).bind("contextmenu",function(e){var t=!h[n].onContextMenu||h[n].onContextMenu(e);return S=e.target,t?(function(e,n,t){var i,s=h[e];m=d("#"+s.id).find("ul:first").clone(!0),r.html(m),s.onShowMenu&&(r=s.onShowMenu(t,r)),s.menuClasses&&(s.menuIconClasses&&0<m.find(".ui-icon").length?m.addClass(s.menuIconClasses):m.addClass(s.menuClasses)),d.isEmptyObject(s.menuStyle)||m.css(s.menuStyle),i=m.attr("role","menu").find("li"),s.itemClasses&&i.addClass(s.itemClasses).attr("role",y?"presentation":"menuitem"),d.isEmptyObject(s.itemStyle)||i.css(s.itemStyle),s.itemAnchorClasses&&(y?i.children("a").addClass(s.itemAnchorClasses).filter(":not([role])").attr("role","menuitem"):i.addClass(s.itemAnchorClasses)),d.isEmptyObject(s.itemAnchorStyle)||(y?i.children("a").css(s.itemAnchorStyle):i.css(s.itemAnchorStyle)),d.isEmptyObject(s.itemIconSpanStyle)||(y?i.children("a").children("span.ui-icon").css(s.itemIconSpanStyle).parent("a").css(s.itemIconAnchorStyle):i.children("span.ui-icon").css(s.itemIconSpanStyle)),d.isEmptyObject(s.itemHoverStyle)?i.hover(function(){(y?d(this).children("a"):d(this)).addClass(s.itemHoverAnchorClasses)},function(){(y?d(this).children("a"):d(this)).removeClass(s.itemHoverAnchorClasses)}):d.isEmptyObject(s.itemHoverStyle)||i.hover(function(){d(this).css(s.itemHoverStyle)},function(){d(this).css(s.itemStyle)}),i.find("img").css({verticalAlign:"middle",paddingRight:"2px"}),d.each(s.bindings,function(e,t){d("#"+e,r).bind("click",function(){a(),t(n,S)})}),r.css({left:t[s.eventPosX],top:t[s.eventPosY],"white-space":"pre"}).show().removeAttr("aria-hidden"),s.shadow&&c.css({width:r.width(),height:r.height(),left:t.pageX+2,top:t.pageY+2}).show().removeAttr("aria-hidden");var o=r.offset(),l=0;o.top+r.height()>d(window).scrollTop()+window.innerHeight&&(l=d(window).scrollTop()-o.top-r.height()+window.innerHeight,o.top+=l,r.offset(o),(o=c.offset()).top+=l,c.offset(o)),d(u).one("click",a)}(n,this,e),!1):(a(),!0)}),this},d.contextMenu={defaults:function(e){d.each(e,function(e,t){"object"==typeof t&&i[e]?d.extend(i[e],t):i[e]=t})}},d(function(){d("div.contextMenu").hide().attr("aria-hidden","true")})});
//# sourceMappingURL=jquery.contextmenu-ui.js.map