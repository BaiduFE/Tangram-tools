function g(id) {return document.getElementById(id);}

/**
* 简单的字符串格式化
* @return <String> 格式化后的字符串
*/
function format(str) {
    var argus = Array.prototype.slice.call(arguments, 1);
    return str.replace(/\{([0-9]+)\}/g, function ($0, num) {
        var str = argus[parseInt(num)];
        return typeof str == 'undefined' ? '' : str;
    });
}


function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/ /g, '&nbsp;');
}

/**
* 字符串中的tab替换
* @return <String> 处理过的字符串
*/
function convertSpace(str) {
    return str.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/ /g, '&nbsp;');
}

/**
* 语法高亮处理入口
* 遍历pre，并对标记code的进行语法高亮
*/
function highlight () {
    var texts = document.getElementsByTagName('pre'),
        len = texts.length;
    while (len--) {
        var text = texts[len],
            codeAttr = text.getAttribute('code');
        if (/^(js|javascript)$/i.test(codeAttr)) {
            doHighlight(text, jsHighlighter);
        }
    }
}

/**
* highlight处理
*
* @param <HTMLTextAreaElement> textarea元素
* @param <Function> highlighter
*/
function doHighlight(el, highlighter) {
    var code = el.innerHTML.replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>')
                            .replace(/&amp;/g, '&');

    var div = document.createElement('div');
    div.className = "js-code";
    div.innerHTML = highlighter(code);
    el.parentNode.insertBefore(div, el);
    el.parentNode.removeChild(el);
}

/**
 * Js Highlighter
 *
 * @param <String> 代码
 * @return <String> 高亮html
 */
function jsHighlighter (code) {
    /*
     * 提取出特殊的部分并标记
     */
    //提取注释
    var comment = [];
    var commentCount = 0;
    code = code.replace(/\/\*([\u0000-\uFFFF]+?)\*\/|\/\/[^\n]+/g, function ($0) {
        comment.push(escapeHTML($0));
        return '#comm' + commentCount++ + '#';
    });
    
    //提取字符串
    var str = [];
    var strCount = 0;
    code = code.replace(/'((\\'|[^'\r\n])*?)'|"((\\"|[^"\r\n])*?)"/g, function ($0) {
        str.push(escapeHTML($0));
        return '#str' + strCount++ + '#';
    });

    //提取正则直接量
    var regex = [];
    var regexCount = 0;
    code = code.replace(/([\n;.(=,|&?:])(\s*)(\/((\\\/|[^\/\r\n])+?)\/)/g, function ($0, $preOp, $blank, $regex) {
        regex.push(escapeHTML($regex));
        return $preOp + $blank + '#regex' + regexCount++ + '#';
    });

    //操作符高亮，偷懒了
    code = code.replace(/[-+*%=<>~!?:&|,\/]/g, function ($0){return '<spanpunctuator>' + $0 + '</span>'});
    code = convertSpace(code);
    code = code.replace(/<spanpunctuator>/g, '<span class="js-punctuator">');

    //关键字和保留字高亮
    code = code.replace(/([^a-z0-9A-Z]|^)(break|delete|function|return|typeof|case|do|if|switch|var|catch|else|in|this|void|continue|false|instanceof|throw|while|debugger|finally|new|true|with|default|for|null|try)([^a-z0-9A-Z])/g,
        function ($0, $1, $2, $3) {
            return $1 + '<span class="js-word">' + $2 + '</span>' + $3;
        })
    //type高亮,自作主张添加了一些特殊对象
    code = code.replace(/([^a-z0-9A-Z]|^)(window|document|Array|String|Function|Object|Date|Math|Number|Error|RegExp)([^a-z0-9A-Z])/g,
        function ($0, $1, $2, $3) {
            return $1 + '<span class="js-type">' + $2 + '</span>' + $3;
        });

    /*
     * 特殊部分高亮
     */
    //注释高亮
    for (var i = 0, l = comment.length; i < l; i++) {
        var commentArr = comment[i].split('\n');
        for (var j = 0, l2 = commentArr.length; j < l2; j++) {
            commentArr[j] = '<span class="js-comment">' + commentArr[j] + '</span>';
        }
        code = code.replace('#comm' + i + '#', commentArr.join('\n'));
    }
    //正则直接量
    for (var i = 0, l = regex.length; i < l; i++) {
        code = code.replace('#regex' + i + '#', '<span class="js-regex">' + regex[i] + '</span>');
    }
    //字符串高亮
    for (var i = 0, l = str.length; i < l; i++) {
        code = code.replace('#str' + i + '#', '<span class="js-str">' + str[i] + '</span>');
    }

   
    //按行拆分组装html,并返回
    var lineTpl = '<p>{0}</p>';
    var codeHtml = [];
    var codeArray = code.split(/\n/);
    for (var i = 0, l = codeArray.length; i < l; i++) {
        codeHtml.push(format(lineTpl, codeArray[i]));
    }

    return codeHtml.join('');
}

highlight();

g('search-input').onkeyup = function () {
    var key = this.value.replace(/^\s+|\s+$/g, ''), 
        result = [], count = 0,
        keyRegexp = new RegExp(key, "gi"),
        contentEl = g('Content'),
        resultEl = g('SearchResult');
        
    if (key) {    
        for (var i = 0, l = apiData.length; i < l; i++) {
            var item = apiData[i],
                name = item.name,
                link = item.link,
                inters = item.interfaces,
                resultInterfaces = null;
            for (var j = 0, l2 = inters.length; j < l2; j++) {
                var inter = inters[j];
                if (keyRegexp.test(inter.desc) 
                    || keyRegexp.test(inter.name) || keyRegexp.test(name)) {
                    if (!resultInterfaces) {
                        resultInterfaces = {
                            'name': name,
																													'link':link,
                            'interfaces': []
                        }
                    }
                    resultInterfaces.interfaces.push(inter);
                    count++;
                }
            }
            
            if (resultInterfaces) {
                result.push(resultInterfaces);
            }
        }
        
        var html = ["<h1>搜索结果[" + count + "]</h1>"];
        function keyReplacer($0) {
            return "<font color=\"red\">" + $0 + "</font>";
        }
        var t,_t;
        for (i = 0, l = result.length; i < l; i++) {
           t = result[i].name;
											link = result[i].link;
           _t = result[i].name.replace(/\./g,"_");           
           // html.push("<h2><a href='../"+ link +'/'+_t+".html'>" + t.replace(keyRegexp,keyReplacer) + "</a></h2>");
            html.push("<h2>" + t.replace(keyRegexp,keyReplacer) + "</h2>");
            inters = result[i].interfaces;
            for (j = 0, l2 = inters.length; j < l2; j++) {
                inter = inters[j];
                if(link == "tangram"){
                	html.push("<h3><a href='../"+ link +'/'+_t+"_"+inter.name+".html'>"+ inter.name.replace(keyRegexp, keyReplacer) 
						+ "</a></h3>");
                }else{
                	if(_t == "baidu_fx" && inter.name != "create"){
                		html.push("<h3><a href='../"+ link +'/'+_t+"_"+inter.name+"_demo.html'>"+ inter.name.replace(keyRegexp, keyReplacer) 
						+ "</a></h3>");
                	}else{
                		html.push("<h3><a href='../"+ link +'/'+_t+".html'>"+ inter.name.replace(keyRegexp, keyReplacer) 
						+ "</a></h3>");
                	}
                }
                html.push("<p>" 
                    + inter.desc.replace(keyRegexp, keyReplacer) 
                    + "</p>");
            }
        }
        resultEl.innerHTML = html.join('');
        contentEl.style.display = "none";
        resultEl.style.display = "";
    } else {
        contentEl.style.display = "";
        resultEl.style.display = "none";
        resultEl.innerHTML = "";
    }
};
