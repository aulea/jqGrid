(function(b){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jsonxml"],b):"object"===typeof module&&module.exports?module.exports=function(g,a){g||(g=window);void 0===a&&(a="undefined"!==typeof window?require("jquery"):require("jquery")(g));require("./grid.base");require("./jsonxml");b(a);return a}:b(jQuery)})(function(b){var g=b.jgrid;b.jgrid.extend({jqGridImport:function(a){a=b.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"roots>grid",
data:"roots>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},a||{});return this.each(function(){var d=this,f=function(a,c){var e=b(c.xmlGrid.config,a)[0],l=b(c.xmlGrid.data,a)[0],h,f;if(xmlJsonClass.xml2json){e=xmlJsonClass.xml2json(e," ");e=b.parseJSON(e);for(f in e)e.hasOwnProperty(f)&&(h=e[f]);void 0!==h&&(l?(l=e.grid.datatype,e.grid.datatype="xmlstring",e.grid.datastr=a,b(d).jqGrid(h).jqGrid("setGridParam",{datatype:l})):b(d).jqGrid(h))}else(null!=g.defaults&&b.isFunction(g.defaults.fatalError)?
g.defaults.fatalError:alert)("xml2json or parse are not present")},c=function(a,c){if(a&&"string"===typeof a){var e=b.parseJSON(a),f=e[c.jsonGrid.config],e=e[c.jsonGrid.data],g;e?(g=f.datatype,f.datatype="jsonstring",f.datastr=e,b(d).jqGrid(f).jqGrid("setGridParam",{datatype:g})):b(d).jqGrid(f)}},k;switch(a.imptype){case "xml":b.ajax(b.extend({url:a.impurl,type:a.mtype,data:a.impData,dataType:"xml",context:a,complete:function(a){!(300>a.status||304===a.status)||0===a.status&&4===a.readyState||(f(a.responseXML,
this),b(d).triggerHandler("jqGridImportComplete",[a,this]),b.isFunction(this.importComplete)&&this.importComplete(a))}},a.ajaxOptions));break;case "xmlstring":a.impstring&&"string"===typeof a.impstring&&(k=b.parseXML(a.impstring))&&(f(k,a),b(d).triggerHandler("jqGridImportComplete",[k,a]),b.isFunction(a.importComplete)&&a.importComplete(k),a.impstring=null);break;case "json":b.ajax(b.extend({url:a.impurl,type:a.mtype,data:a.impData,dataType:"json",context:a,complete:function(a){try{!(300>a.status||
304===a.status)||0===a.status&&4===a.readyState||(c(a.responseText,this),b(d).triggerHandler("jqGridImportComplete",[a,this]),b.isFunction(this.importComplete)&&this.importComplete(a))}catch(m){}}},a.ajaxOptions));break;case "jsonstring":a.impstring&&"string"===typeof a.impstring&&(c(a.impstring,a),b(d).triggerHandler("jqGridImportComplete",[a.impstring,a]),b.isFunction(a.importComplete)&&a.importComplete(a.impstring),a.impstring=null)}})},jqGridExport:function(a){a=b.extend({exptype:"xmlstring",
root:"grid",ident:"\t"},a||{});var d=null;this.each(function(){if(this.grid){var f,c=b.extend(!0,{},b(this).jqGrid("getGridParam"));c.rownumbers&&(c.colNames.splice(0,1),c.colModel.splice(0,1));c.multiselect&&(c.colNames.splice(0,1),c.colModel.splice(0,1));c.subGrid&&(c.colNames.splice(0,1),c.colModel.splice(0,1));c.knv=null;if(c.treeGrid)for(f in c.treeReader)c.treeReader.hasOwnProperty(f)&&(c.colNames.splice(c.colNames.length-1),c.colModel.splice(c.colModel.length-1));switch(a.exptype){case "xmlstring":d=
"<"+a.root+">"+xmlJsonClass.json2xml(c,a.ident)+"</"+a.root+">";break;case "jsonstring":d="{"+xmlJsonClass.toJson(c,a.root,a.ident,!1)+"}",void 0!==c.postData.filters&&(d=d.replace(/filters":"/,'filters":'),d=d.replace(/\}\]\}"/,"}]}"))}}});return d},excelExport:function(a){a=b.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},a||{});return this.each(function(){var d;this.grid&&"remote"===a.exptype&&(d=b.extend({},this.p.postData,a.exportOptions),d[a.oper]=a.tag,d=jQuery.param(d),
d=-1!==a.url.indexOf("?")?a.url+"&"+d:a.url+"?"+d,window.location=d)})}})});
//# sourceMappingURL=grid.import.map
