if (!config){
    var config = {
        docbase:'',//html文档路径的基地址
        cswraper:'cswraper', //显示模块列表的容器id
        csfrom:'csfrom',//代码下载表单id
        csimports:'csimports',//显示imports列表的容器id
        tag:"1.3.4",
        codePath: "../source/script/code.php",
        hashPath: "../source/script/hash.php",
        /*
        dataNightlyPath : "../get/csdeps_nightly.js",
        dataStablePath : "../get/csdeps_stable.js"
        */
        project:[]
    }
}
baidu.dom.ready(function(){


	baidu.g("codeSearch").innerHTML = ['<div class="toc-outer">\
		<div class="toc">	\
			<form id="csform" action="' + config.codePath + '" method="POST">\
				<input type="submit" id="viewCodeBtn" value="查看源码" />',
				'<div class="side-title">版本：</div>',
				'<div>',
			    _getProjectOptions(),
				'</div>',
				'<div class="side-title">依赖选项：</div>',
				'<div onclick="baidu.g(\'nobase\').value=!baidu.g(\'nobaseCb\').checked">',
					'<input type="checkbox" id="nobaseCb" checked="checked" /><label for="needbase" title="base代码为baidu包不包括ui fx data等组件的基础代码">包含Base代码</label>',
				'</div>',
				'<div class="side-title">导出选项：</div>',
				'<input type="hidden" name="viewSource" id="viewSource" value="false" />',
				'<input type="hidden" name="nobase" id="nobase" value="false" />',
				'<input type="hidden" name="tag" value="src" />',
				'<input type="hidden" name="src" value="" id="imports" />',
				'<input type="hidden" name="short_key" value="" id="short_key" />',
				'<input type="hidden" name="short_value" value="" id="short_value" />',
				'<div>',
					'<input type="radio" name="compress" value="yui" id="compressYUI" checked/><label for="compressYUI">YUICompressor压缩</label> <br/>',
					'<input type="radio" name="compress" value="source" id="compressSrc"/><label for="compressSrc">源代码(UTF-8)</label>',
				'</div>',
				'<div id="codeserachExportDiv">',
					'<input type="submit" value="导出" id="codeserachExport" />',
				'</div>',
			'</form>',
			'<div class="side-title">已选模块：</div>',
			'<textarea id="csimports"></textarea>',
			'<div class="csimports_desc">这个网址记录了你当前的选项，以便下次打开</div>',
		'</div>',
	'</div>',
	'<h1 class="title" id="codesearchTitle">Tangram CodeSearch <small>'+config.tag+'</small></h1>',
	'<p id="codesearchTip">提示：选择完模块之后可以收藏这个链接以保存此次的选择。</p>\
	<div id="cswraper"></div>'].join("");
	
	var hashCode = /#hash\|(.*)/.exec(window.location.hash);
	if (hashCode && hashCode[1]) {
		baidu.ajax.request(config.hashPath, {
			data : "type=get&hash=" + hashCode[1],
			onsuccess : function(xhr) {
				window.location.hash = xhr.responseText;
				window.location.reload();
			}
		});
	} else {
		var res = /#([^|]+)|/.exec(window.location.hash),
			version = res[1] || "tangram_stable",
			dataUrl = _getPath(version);
		baidu.sio.callByBrowser(dataUrl, run);
	}
	
    function _getProjectOptions(){
            var res='<select id="versionSelect" name="version">';
            if(config.project){
                for (var i=0;i<config.project.length;i++){
                    var name=config.project[i].nickname?config.project[i].nickname:config.project[i].name;
                    var key=config.project[i].name;
					res+='<option value="'+key+'" id="versionOpt'+key+'">'+name+'</option>';
                }
            }
            res+='</select>';
            return res;
        }

    function _getPath(name){
        if (config && config.project){
            for (var i=0;i<config.project.length;i++){
                var item=config.project[i];
                if (item.name==name){

                    return item.data;
                }
            }
        }
    }
	
	function run() {
        /*
		for(var i in dataUI["packages"]) {
			if (dataUI["packages"].hasOwnProperty(i)) {
				if (data["packages"][i]["packageName"] != "baidu") {
					data["packages"].push(dataUI["packages"][i]);
				}
			}
		}
		for(var i in dataUI["functions"]) {
			if (dataUI["functions"].hasOwnProperty(i)) {
				data["functions"][i] = dataUI["functions"][i];
			}
		}
		*/
		data.packages = data.packages.sort(function(x, y) {
			return x["packageName"] > y["packageName"] ? 1 : -1;
		});

		for(var i in data["packages"]) {
			if (data["packages"].hasOwnProperty(i)) {
				data["packages"][i]["functions"] = data["packages"][i]["functions"].sort();
			}
		}
		
		baidu.on("viewCodeBtn", "click", function(e){
			baidu.event.stop(e);
			baidu.g("viewSource").value = 1;
			baidu.g("csform").submit();
		});
		
		baidu.event.on("versionSelect", "change", function(e){
			if (confirm("切换版本会清空目前所选模块，是否继续？")) {
				window.location.hash = this.value;
				window.location.reload();
			} else {
				var prevId = "versionOpt"+this.value;
				baidu.g(prevId).selected = true;
			}
		});
		baidu.event.on("csimports", "click", function(e){
			this.select();
		});
		if (version) {
			baidu.dom.g("versionOpt"+version).selected = true;
		}
		
		baidu.g("nobaseCb").disabled = true;

		
		window.cs = window.cs || {} ;
		var lastHref = window.location.toString() ;
		var subPackage = [];

		
		
		function _init(){
			for(var i in data.functions ) {
				var func = data.functions[i];
				for(var j=0 ; j<func.dependencies.length; j++ ) {
					var depFuncName = func.dependencies[j];
					var depFunc = data.functions[depFuncName];
					if(depFunc) {
						depFunc.odependencies = depFunc.odependencies ||  [] ;
						depFunc.odependencies.push(i);
					}
				}
			}
			_hashToSelection();
			setTimeout(_timmer,500);
		}

		function _timmer(){
			var href = window.location.toString();
			if(href!=lastHref){
				lastHref = href ;
				_hashToSelection();
				_update();
			}   
			setTimeout(_timmer,500) ;
		}

		function _hashToSelection(){
			for(var i in data.functions){
				data.functions[i].status=0;
			}
			var href = window.location.toString();
			var reg = /#([^\s]*)/ ;
			var res = reg.exec(href);
			if(res){
				//alert(href);
				var imports = res[1].split(';');
				for(var i=0; i<imports.length ; i++ ) {
					var funcName = imports[i];
					var func = data.functions[funcName] ;
					if( func ) {
						func.status=2;
						_updateDependencies(funcName) 
					}
				}
			}
		}
		
		

		function _render(){
			var _html = [] ;
			_html.push('<p>操作：<a href="#" onclick="window.cs.unfoldAll();return false;" >展开</a> | ',
						'<a href="#" onclick="window.cs.foldAll();return false;">折叠</a> | ',
						'<a href="#" onclick="window.cs.selectAll();return false;">全选</a> | ',
						'<a href="#" onclick="window.cs.deSelectAll();return false;">取消</a></p>',
						'<table id="cstbl" border="0" cellpadding="2" cellspacing="0"><tbody>');
						
			for(var i=0; i<data.packages.length; i++ ){
				var pkg = data.packages[i] ;
				/*
				if(pkg.packageName=="baidu")
						continue;
				*/
				if(!pkg.render){
					_html.push(_renderPackage(pkg));
				  }
			}
			_html.push('</tbody></table>');
			baidu.g(config.cswraper).innerHTML = _html.join('');
			_update();
		}
		
		function _renderPackage(pkg, indent){
				var  _html = [], _htmlSubPackage = [], styleForIndent, k;
				indent = indent ? indent : 0;
				var indentCount = indent;
				if(indent){
						styleForIndent = "function";
				}
			_html.push('<tr class="package '+styleForIndent+'" title="展开/折叠" id="'+ pkg.packageName +'" onclick="window.cs.toggleFoldPackage(arguments[0] || window.event,\''+pkg.packageName+'\')" >');

			_html.push('<td colspan="2">');
				while(indentCount -- ){
					_html.push('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
			}
			//_html.push('<div class="inline-block fold" onclick="window.cs.toggleFoldPackage(arguments[0] || window.event,\''+pkg.packageName+'\')" ></div>');
			_html.push('<div class="inline-block select" title="选择/取消" onclick="window.cs.toggleSelectPackage(arguments[0] || window.event,\''+pkg.packageName+'\')"></div>');
			_html.push( pkg.packageName );
			_html.push('</td>');
			_html.push('</tr>');
				
			for(var j=0,len1 = pkg.functions.length ; j<len1; j++) {
				var funcName = pkg.functions[j];
				if(k = _isFunctionAPackage(funcName)){
							_htmlSubPackage.push(_renderPackage(k, indent+1));
						continue;
						}
				_html.push(_renderFunction(funcName, indent+1));
			}
			_html.push(_htmlSubPackage.join(""));
				pkg.render = true;
			return _html.join("");
			
		}
		
		function _renderFunction(funcName,indent){
				indent = indent ? indent : 1;
				var  _html = [];
			var func = data.functions[funcName];
			_html.push('<tr class="function functionselect" id="'+ funcName +'" >');

			_html.push('<td width="300">');

				while(indent -- ){
					_html.push('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
			}
			_html.push('<div class="inline-block select" title="选择/取消" onclick="window.cs.toggleSelectFunction(arguments[0] || window.event,\''+funcName+'\')"><img src="static/empty.gif"></div>');
			_html.push(funcName.substring(funcName.lastIndexOf('.')+1,funcName.length) + '</td>');
			if (data.functions[funcName]["description"]) {
				_html.push('<td><a href="' + config.docbase + data.functions[funcName]["doc"]  + '" target="_blank">' + data.functions[funcName]["description"] + '</a></td>');
			} else {
				_html.push('<td></td>');
			}
			_html.push('</tr>');
			return _html.join("");
	   }
	   
	   function _isFunctionAPackage(funcName){
			for(var k=0,len2 = data.packages.length; k<len2; k++){
					if(funcName == data.packages[k].packageName){
							return data.packages[k];
					}
			}
					return false;
		}

		function _foldAll(){
			for(var i=0; i<data.packages.length ; i++ ) {
				if (data.packages[i].packageName != "baidu" && data.packages[i].packageName != "baidu.ui") {
					_foldPackage(data.packages[i].packageName);
				}
			}
		}

		function _unfoldAll(){
			for(var i=0; i<data.packages.length ; i++ ) {
				_unfoldPackage(data.packages[i].packageName);
			}
		}

		function _foldPackage(id){
			var pkgRow = baidu.g(id);
			if(pkgRow==null) return ;
			pkgRow.isFold = '1' ;
			baidu.dom.removeClass(pkgRow, 'package-unfold');
			baidu.dom.removeClass(pkgRow, 'package-fold');
			var nextRow  = baidu.dom.next(pkgRow);
			while(nextRow && baidu.dom.hasClass(nextRow, 'function')) {
				if(nextRow.id && nextRow.id.indexOf(id) == 0){
					if(baidu.dom.hasClass(nextRow, 'package')){
						nextRow.isFold = '1' ;
						baidu.dom.removeClass(nextRow, 'package-unfold');
						baidu.dom.addClass(nextRow, 'package-fold');
					}
					nextRow.style.display = 'none';
				} else {break;}
				
				nextRow = baidu.dom.next(nextRow);
			}
		}

		function _unfoldPackage(id){
			var pkgRow = baidu.g(id);
			if(pkgRow==null) return ;
			pkgRow.isFold = '0' ;
			baidu.dom.removeClass(pkgRow, 'package-fold');
			baidu.dom.addClass(pkgRow, 'package-unfold');
			var nextRow  = baidu.dom.next(pkgRow);
			while(nextRow && baidu.dom.hasClass(nextRow, 'function')) {
				
				if(nextRow.id && nextRow.id.indexOf(id) == 0){
					if(baidu.dom.hasClass(nextRow, 'package')){
						nextRow.isFold = '0';
						baidu.dom.removeClass(nextRow, 'package-fold');
						baidu.dom.addClass(nextRow, 'package-unfold');
					}
					nextRow.style.display = '';
				}
				nextRow = baidu.dom.next(nextRow);
			}   
		}

		function _toggleFoldPackage(e,id){
			var pkgRow = baidu.g(id);
			if(pkgRow==null) return ;
			if( pkgRow.isFold == '1' ) _unfoldPackage(id);
			else _foldPackage(id);
			baidu.event.stop(e);
		}

		function _getPackageByName(pkgName){
			var pkg = null ;
			for(var i=0 ; i<data.packages.length; i++ ) {
				if(pkgName == data.packages[i].packageName){
					pkg = data.packages[i] ;
					break ;
				}
			}
			return pkg;
		}

		function _selectPackage(pkg){
				var k;
			for(var i=0; i<pkg.functions.length ; i++ ) {           
				var func = data.functions[pkg.functions[i]];
				func.status = 2 ;
				var subPkg = _getPackageByName(pkg.functions[i]);
				if(subPkg){arguments.callee(subPkg)}
				_updateDependencies(pkg.functions[i]);
			}
		}

		function _deSelectPackage(pkg){
			pkg.status = 0;
			for(var i=0; i<pkg.functions.length ; i++ ) {
				var func = data.functions[pkg.functions[i]];
				func.status = 0 ;
				_deSelectFunction(pkg.functions[i]);
				var subPkg = _getPackageByName(pkg.functions[i]);
				if(subPkg){arguments.callee(subPkg)}
			}
		}

		function _toggleSelectPackage(e,id){
			var pkg = _getPackageByName(id);
			if(pkg){
				if( !pkg.status || pkg.status==1)
					_selectPackage(pkg);
				else
					_deSelectPackage(pkg);
			}
			_update();
			baidu.event.stop(e);
		}

		function _deSelectFunction(id){
			//console.debug('deSelectFunction: ' + id);
			var func = data.functions[id] ;
			//console.debug(id + '\'s odependencies: ' + func.odependencies);
			if(func.odependencies) {
				for(var i=0 ; i<func.odependencies.length ; i++ ) {
					var odepFuncName = func.odependencies[i];
					//console.debug('odepFuncName: ' + odepFuncName );
					var odepFunc = data.functions[odepFuncName];
					if(odepFunc) {
						if(odepFunc.status==2) {
							odepFunc.status = 0 ;
							_deSelectFunction(odepFuncName);      
						}
					}
				}
			}
		}

		function _renderSelectionStatus(){
			for(var i in data.functions) {
				var func = data.functions[i] ;
				var funcRow = baidu.g(i);
				if(!funcRow) continue;
				baidu.dom.removeClass(funcRow, 'function-depselect');
				baidu.dom.removeClass(funcRow, 'function-select');
				if(func.status==2) {
					 baidu.dom.addClass(funcRow, 'function-select');
				}else if(func.status==1) {
					 baidu.dom.addClass(funcRow, 'function-depselect');
				}
			}
		}

		function _renderPackageStatus(){
			for(var i=0; i<data.packages.length; i++ ) {
				var pkg = data.packages[i];
				var pkgRow = baidu.g(pkg.packageName) ;
				if(pkgRow) {
					baidu.dom.removeClass(pkgRow, 'package-select');
					baidu.dom.removeClass(pkgRow, 'package-parselect');
					if(pkg.status ==2) {
						baidu.dom.addClass(pkgRow, 'package-select');
					}else if(pkg.status==1){
						baidu.dom.addClass(pkgRow, 'package-parselect');
					}
				}
			}
		}

		function _showSelectionStatus(){
			//console.debug('--------------------------------------------------');
			for(var i in data.functions) {
				var func = data.functions[i] ;
				if(func.status==2) {
					//console.debug(i + "[selected]");
				}else if(func.status==1) {
					//console.debug(i + "[dep selected]");
				}
			}
		}

		function _showPackageStatus(){
			for(var i in data.packages) {
				var pkg = data.packages[i];
				if(pkg.status==2) {
					//console.debug(pkg.packageName + '[fully selected]');
				}else if(pkg.status==1) {
					//console.debug(pkg.packageName + '[partly selected]');
				}
			}
		}

		function _updateDependencies(i) {
			var func = data.functions[i] ;
			if(func) {
				for(var i=0 ; i<func.dependencies.length ; i++ ){
					var depFuncName = func.dependencies[i];
					var depFunc = data.functions[depFuncName] ;
					if(depFunc && !parseInt(depFunc.status)){
						if(depFunc.status == 0 || depFunc.status== '0') depFunc.status = 1 ;
						_updateDependencies(depFuncName);
					}
				}
			}
		}
		
		function _updateSelectionStatus(){
			//清空依赖选择
			for(var i in data.functions) {
				var func = data.functions[i] ;
				if(func.status==1) func.status=0;
			}
			for(var i in data.functions) {
				var func = data.functions[i] ;
				if( func.status == 2 ) {
					_updateDependencies(i);
				}
			}
		}
		
		function _updatePackageStatus(){
			for(var i =0 ; i < data.packages.length ; i++) {
				var pkg = data.packages[i];
				if(pkg.packageName=='baidu') continue ;
				if(!pkg.status ) {
					pkg.status = 0 ;
				}
				var c1 = 0 ;
				var c2 = 0 ;
				for( var j=0 ; j<pkg.functions.length; j++ ) {
					var funcName = pkg.functions[j] ;
					var func = data.functions[funcName];
					if(func.status==1 ) c1++;
					else if(func.status==2 ) c2++ ;
				}
				if( c2 == pkg.functions.length ) {
					pkg.status = 2 ;
				}else if( c1>0 || c2>0 ) pkg.status = 1 ;
				else pkg.status = 0 ;
			}
		}

		function _toggleSelectFunction(e,id){
			var func = data.functions[id];
			if(func.status==0 || func.status=='0') {
				func.status=2;
			}else if(func.status==1) {
				func.status=2;
			}
			else if(func.status==2) {
				func.status=0 ;
				//deselect depencies
				_deSelectFunction(id);
			}
			_update();
		}

		function _getSelectedFuncs(){
			var selFuncs = [] ;
			for(var i in data.functions) {
				var func = data.functions[i];
				if(func.status==2){
					selFuncs.push(i);
				}
			}
			return selFuncs;
		}

		function _renderSelectedFuncs(){
			var funcs = _getSelectedFuncs();
			var _html = [] ;
			for(var i=0; i<funcs.length; i++ ) {
				_html.push("\/\/\/import " + funcs[i] + ";<br/>");
			}
			baidu.g("imports").value = _html.join("").replace(/<br\/>/g, "\n");
		}

		function _renderUrl(){
			var funcs = _getSelectedFuncs();
			var hash = funcs.join(';');
			if(hash == "") window.location.hash = version + "|nomodule"
			else window.location.hash = version + "|modules;"+hash;
			lastHref = window.location.toString();
		}

		function _update(){
			_updateSelectionStatus();
			_updatePackageStatus();
			_showSelectionStatus();
			_showPackageStatus();
			_renderSelectionStatus();
			_renderPackageStatus();
			_renderSelectedFuncs();
			_renderUrl();
			_sentHash();
			_setNoBase();
		}
		
		function _sentHash() {
			var path = "http://" + window.location.host + window.location.pathname + "#hash|",
				hashCode = hex_md5(window.location.hash);
			baidu.g(config.csimports).innerHTML = path + hashCode;
			baidu.ajax.post(config.hashPath, "type=add&hash=" + hashCode + "&data=" + window.location.hash);
		}
		
		function _setNoBase() {
			var hash = window.location.hash;
			if (hash.indexOf("baidu.ui") > 0 || 
				hash.indexOf("baidu.fx") > 0 || 
				hash.indexOf("baidu.data") > 0) {
				
				baidu.g("nobaseCb").disabled = false;
			} else {
				baidu.g("nobaseCb").disabled = true;
			}
		}
		

		function _selectAll(){
			for(var i in data.functions) {
				data.functions[i].status = 2;
			}
			_update();
		}

		function _deSelectAll(){
			for(var i in data.functions) {
				data.functions[i].status = 0;
			}
			_update();
		}
        
		_init();
		_render();
		_foldAll();

		window.cs.foldAll = _foldAll;
		window.cs.unfoldAll = _unfoldAll;
		window.cs.foldPackage = _foldPackage;
		window.cs.unfoldPackage = _unfoldPackage;
		window.cs.toggleFoldPackage = _toggleFoldPackage ;
		window.cs.toggleSelectPackage = _toggleSelectPackage ;
		window.cs.toggleSelectFunction = _toggleSelectFunction;
		window.cs.selectAll = _selectAll;
		window.cs.deSelectAll = _deSelectAll;
	}
});
