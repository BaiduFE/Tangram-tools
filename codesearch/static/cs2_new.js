(function(){
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
        handleHash();
        
        //_hashToSelection();
        //setTimeout(_timmer,500);
    }
    
    function handleHash(){
    	var href = window.location.toString(),
        	reg = /#([^\s]*)/ ,
        	res = reg.exec(href),
        	key;
        if(!(res && res[1])) return;
        key = res[1];
        if((key.length == 32) && (key.indexOf(".") == -1)){//md5
        	//$('md5key').value = key;
        	baidu.ajax.get('../get/tangram/shortkey.py?key=' + key,function(xhr,value){
        		if(!value)return;
        		selectByString(value);
        		_update();
        	});
        }else {
        	selectByString(key);
        	_update();
        }
        
    }
	/*
    function _timmer(){
        var href = window.location.toString();
        if(href!=lastHref){
            lastHref = href ;
            _hashToSelection();
            _update();
        }   
        setTimeout(_timmer,500) ;
    }
    */
    function selectByString(str){
    	for(var i in data.functions){
            data.functions[i].status=0;
        }
        var imports = str.split(';');
        for(var i=0; i<imports.length ; i++ ) {
            var funcName = imports[i];
            var func = data.functions[funcName] ;
            if( func ) {
                func.status=2;
                _updateDependencies(funcName) 
            }
        }
    }
    
    var apiMap = {};
    var apiExtraMap = {
        'baidu.dom._styleFilter.filter'     : 'getStyle和setStyle的值过滤处理器',
        'baidu.dom._styleFilter.color'      : '对getStyle和setStyle的颜色值进行处理',
        'baidu.dom._styleFilter.px'         : '对getStyle和setStyle的px值进行处理',
        'baidu.dom._styleFixer.display'     : '对display样式的获取和设置进行处理',
        'baidu.dom._styleFixer.float'       : '对float样式的获取和设置进行处理',
        'baidu.dom._styleFixer.opacity'     : '对透明度样式的获取和设置进行处理',
        'baidu.dom._styleFixer.textOverflow': '对textOverflow样式的获取和设置进行处理'
    };

    function initApiMap() {
        for (var i = 0, l = apiData.length; i < l; i++) {
            var pItem = apiData[i], interfaces = pItem['interfaces'], name = pItem['name'],link = pItem['link'];
            apiMap[name] = pItem['desc'];
            for (var j = 0, l2 = interfaces.length; j < l2; j++) {
                var iItem = interfaces[j];
                apiMap[name + "." + iItem['name']] = iItem['desc'];
            }
        }
    }
    initApiMap();

    function getApiDesc(name) {
        var re = apiMap[name] || '',
                                    link;
                                    var nameIndex = /baidu\.fx|baidu\.ui|baidu\.dd/;
                                    if (nameIndex.test(name)){
                                        link = "../tangram-component/";
                                    }else{
                                        link = "../tangram/";
                                    }
        if (re) {
            re = '<a href="' + link + name.replace(/\./g, '_') + '.html" target="_blank">' + re + '</a>';
        } else if (apiExtraMap[name]) {
            re = apiExtraMap[name];
        }
        return re;
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
            if(pkg.packageName=="baidu")
                    continue;
            if(!pkg.render){
                _html.push(_renderPackage(pkg));
              }
        }
        _html.push('</tbody></table>');
        $(config.cswraper).innerHTML = _html.join('');
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
        _html.push('<td>' + getApiDesc(funcName) + '</td>');
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
            _foldPackage(data.packages[i].packageName);
        }
    }

    function _unfoldAll(){
        for(var i=0; i<data.packages.length ; i++ ) {
            _unfoldPackage(data.packages[i].packageName);
        }
    }

    function _foldPackage(id){
        var pkgRow = $(id);
        if(pkgRow==null) return ;
        pkgRow.isFold = '1' ;
        pkgRow.removeClassName('package-unfold');
        pkgRow.addClassName('package-fold');
        var nextRow  = pkgRow.next();
        while(nextRow && nextRow.hasClassName('function')) {
        	if(nextRow.id && nextRow.id.indexOf(id) == 0){
        		if(nextRow.hasClassName('package')){
        			nextRow.isFold = '1' ;
        			nextRow.removeClassName('package-unfold');
        			nextRow.addClassName('package-fold');
        		}
	            nextRow.style.display = 'none';
        	} else {break;}
        	
	        nextRow = nextRow.next();
        }
    }

    function _unfoldPackage(id){
        var pkgRow = $(id);
        if(pkgRow==null) return ;
        pkgRow.isFold = '0' ;
        pkgRow.removeClassName('package-fold');
        pkgRow.addClassName('package-unfold');
        var nextRow  = pkgRow.next();
        while(nextRow && nextRow.hasClassName('function')) {
        	
        	if(nextRow.id && nextRow.id.indexOf(id) == 0){
        		if(nextRow.hasClassName('package')){
        			nextRow.isFold = '0';
        			nextRow.removeClassName('package-fold');
        			nextRow.addClassName('package-unfold');
        		}
	            nextRow.style.display = '';
        	}
	        nextRow = nextRow.next();
        }   
    }

    function _toggleFoldPackage(e,id){
        var pkgRow = $(id);
        if(pkgRow==null) return ;
        if( pkgRow.isFold == '1' ) _unfoldPackage(id);
        else _foldPackage(id);
        Event.stop(e);
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
        Event.stop(e);
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
            var funcRow = $(i);
            if(!funcRow) continue;
            funcRow.removeClassName('function-depselect');
            funcRow.removeClassName('function-select');
            if(func.status==2) {
                funcRow.addClassName(  'function-select' );
            }else if(func.status==1) {
                funcRow.addClassName(  'function-depselect' );
            }
        }
    }

    function _renderPackageStatus(){
        for(var i=0; i<data.packages.length; i++ ) {
            var pkg = data.packages[i];
            var pkgRow = $(pkg.packageName) ;
            if(pkgRow) {
                pkgRow.removeClassName('package-select');
                pkgRow.removeClassName('package-parselect');
                if(pkg.status ==2) {
                    pkgRow.addClassName('package-select');
                }else if(pkg.status==1){
                    pkgRow.addClassName('package-parselect');
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
        $(config.csimports).innerHTML = _html.join("").replace(/\/\/\/import\s+/g, '').replace(/;/g, '');
        $("imports").value = _html.join("").replace(/<br\/>/g, "\n");
        $("short_key").value = hex_md5(funcs.join(';'));
        $("short_value").value = funcs.join(';');
    }

    function _renderUrl(){
        var funcs = _getSelectedFuncs();
        var hash = funcs.join(';');
        if(hash=="" ){ 
        	//hash="";
        	//baidu.g('md5key').value = "";
        } else {
        	hash = hex_md5(hash);
        	//baidu.g('md5key').value = hash;
        }
        window.location.hash = hash;
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
    //_unfoldAll();
    //_foldPackage('baidu.ajax');
    //_unfoldPackage('baidu.ajax');

    window.cs.foldAll = _foldAll;
    window.cs.unfoldAll = _unfoldAll;
    window.cs.foldPackage = _foldPackage;
    window.cs.unfoldPackage = _unfoldPackage;
    window.cs.toggleFoldPackage = _toggleFoldPackage ;
    window.cs.toggleSelectPackage = _toggleSelectPackage ;
    window.cs.toggleSelectFunction = _toggleSelectFunction;
    window.cs.selectAll = _selectAll;
    window.cs.deSelectAll = _deSelectAll;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 })();
