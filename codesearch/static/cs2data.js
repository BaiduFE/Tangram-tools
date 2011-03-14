var data = {
    "functions": {
        "baidu.ajax.form": {
            "dependencies": [
                "baidu.ajax",
                "baidu.ajax.request"
            ],
            "description": "将一个表单用ajax方式提交",
            "doc": "baidu_ajax_form.html",
            "status": "0"
        },
        "baidu.ajax.get": {
            "dependencies": [
                "baidu.ajax",
                "baidu.ajax.request"
            ],
            "description": "发送一个get请求",
            "doc": "baidu_ajax_get.html",
            "status": "0"
        },
        "baidu.ajax.post": {
            "dependencies": [
                "baidu.ajax",
                "baidu.ajax.request"
            ],
            "description": "发送一个post请求",
            "doc": "baidu_ajax_post.html",
            "status": "0"
        },
        "baidu.ajax.request": {
            "dependencies": ["baidu.ajax"],
            "description": "发送一个ajax请求",
            "doc": "baidu_ajax_request.html",
            "status": "0"
        },
        "baidu.array.each": {
            "dependencies": ["baidu.array"],
            "description": "遍历数组中所有元素",
            "doc": "baidu_array_each.html",
            "status": "0"
        },
        "baidu.array.filter": {
            "dependencies": ["baidu.array"],
            "description": "从数组中筛选符合条件的元素",
            "doc": "baidu_array_filter.html",
            "status": "0"
        },
        "baidu.array.find": {
            "dependencies": ["baidu.array"],
            "description": "从数组中寻找符合条件的第一个元素",
            "doc": "baidu_array_find.html",
            "status": "0"
        },
        "baidu.array.indexOf": {
            "dependencies": ["baidu.array"],
            "description": "查询数组中指定元素的索引位置",
            "doc": "baidu_array_indexOf.html",
            "status": "0"
        },
        "baidu.array.lastIndexOf": {
            "dependencies": ["baidu.array"],
            "description": "从后往前，查询数组中指定元素的索引位置",
            "doc": "baidu_array_lastIndexOf.html",
            "status": "0"
        },
        "baidu.array.remove": {
            "dependencies": ["baidu.array"],
            "description": "移除数组中的项",
            "doc": "baidu_array_remove.html",
            "status": "0"
        },
        "baidu.array.removeAt": {
            "dependencies": ["baidu.array"],
            "description": "移除数组中的项",
            "doc": "baidu_array_removeAt.html",
            "status": "0"
        },
        "baidu.array.unique": {
            "dependencies": ["baidu.array"],
            "description": "过滤数组中的相同项",
            "doc": "baidu_array_unique.html",
            "status": "0"
        },
        "baidu.browser.chrome": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_chrome.html",
            "status": "0"
        },
        "baidu.browser.firefox": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_firefox.html",
            "status": "0"
        },
        "baidu.browser.ie": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_ie.html",
            "status": "0"
        },
        "baidu.browser.isGecko": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_isGecko.html",
            "status": "0"
        },
        "baidu.browser.isStrict": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_isStrict.html",
            "status": "0"
        },
        "baidu.browser.isWebkit": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_isWebkit.html",
            "status": "0"
        },
        "baidu.browser.maxthon": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_maxthon.html",
            "status": "0"
        },
        "baidu.browser.opera": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_opera.html",
            "status": "0"
        },
        "baidu.browser.safari": {
            "dependencies": ["baidu.browser"],
            "description": "",
            "doc": "baidu_browser_safari.html",
            "status": "0"
        },
        "baidu.cookie.get": {
            "dependencies": ["baidu.cookie.getRaw"],
            "description": "\"获取cookie的值，用decodeURIComponent解码\"",
            "doc": "baidu_cookie_get.html",
            "status": "0"
        },
        "baidu.cookie.getRaw": {
            "dependencies": ["baidu.cookie"],
            "description": "获取cookie的值，不对值进行解码",
            "doc": "baidu_cookie_getRaw.html",
            "status": "0"
        },
        "baidu.cookie.remove": {
            "dependencies": ["baidu.cookie.setRaw"],
            "description": "删除cookie的值",
            "doc": "baidu_cookie_remove.html",
            "status": "0"
        },
        "baidu.cookie.set": {
            "dependencies": ["baidu.cookie.setRaw"],
            "description": "\"设置cookie的值，用encodeURIComponent编码\"",
            "doc": "baidu_cookie_set.html",
            "status": "0"
        },
        "baidu.cookie.setRaw": {
            "dependencies": ["baidu.cookie"],
            "description": "设置cookie的值，不对值进行编码",
            "doc": "baidu_cookie_setRaw.html",
            "status": "0"
        },
        "baidu.date.format": {
            "dependencies": [
                "baidu.date",
                "baidu.number.pad"
            ],
            "description": "对目标日期对象进行格式化",
            "doc": "baidu_date_format.html",
            "status": "0"
        },
        "baidu.date.parse": {
            "dependencies": ["baidu.date"],
            "description": "将目标字符串转换成日期对象",
            "doc": "baidu_date_parse.html",
            "status": "0"
        },
        "baidu.dom._styleFilter.color": {
            "dependencies": ["baidu.dom._styleFilter"],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFilter.filter": {
            "dependencies": ["baidu.dom._styleFilter"],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFilter.px": {
            "dependencies": ["baidu.dom._styleFilter"],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFixer.display": {
            "dependencies": [
                "baidu.dom._styleFixer",
                "baidu.browser.ie",
                "baidu.browser.firefox"
            ],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFixer.float": {
            "dependencies": [],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFixer.opacity": {
            "dependencies": [
                "baidu.dom._styleFixer",
                "baidu.browser.ie"
            ],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom._styleFixer.textOverflow": {
            "dependencies": [
                "baidu.dom._styleFixer",
                "baidu.browser.firefox",
                "baidu.browser.opera"
            ],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.dom.addClass": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.string.trim"
            ],
            "description": "为目标元素添加className",
            "doc": "baidu_dom_addClass.html",
            "status": "0"
        },
        "baidu.dom.children": {
            "dependencies": ["baidu.dom"],
            "description": "获取目标元素的子元素列表",
            "doc": "baidu_dom_children.html",
            "status": "0"
        },
        "baidu.dom.contains": {
            "dependencies": ["baidu.dom.g"],
            "description": "判断一个元素是否包含另一个元素",
            "doc": "baidu_dom_contains.html",
            "status": "0"
        },
        "baidu.dom.first": {
            "dependencies": ["baidu.dom._matchNode"],
            "description": "获取目标元素的第一个元素节点",
            "doc": "baidu_dom_first.html",
            "status": "0"
        },
        "baidu.dom.g": {
            "dependencies": ["baidu.dom"],
            "description": "获取元素",
            "doc": "baidu_dom_g.html",
            "status": "0"
        },
        "baidu.dom.getAncestorBy": {
            "dependencies": ["baidu.dom.g"],
            "description": "获取目标元素符合条件的最近的祖先元素",
            "doc": "baidu_dom_getAncestorBy.html",
            "status": "0"
        },
        "baidu.dom.getAncestorByClass": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.string.trim"
            ],
            "description": "获取目标元素指定元素className最近的祖先元素",
            "doc": "baidu_dom_getAncestorByClass.html",
            "status": "0"
        },
        "baidu.dom.getAncestorByTag": {
            "dependencies": ["baidu.dom.g"],
            "description": "获取目标元素指定标签的最近的祖先元素",
            "doc": "baidu_dom_getAncestorByTag.html",
            "status": "0"
        },
        "baidu.dom.getAttr": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom._NAME_ATTRS"
            ],
            "description": "获取目标元素的attribute值",
            "doc": "baidu_dom_getAttr.html",
            "status": "0"
        },
        "baidu.dom.getDocument": {
            "dependencies": ["baidu.dom.g"],
            "description": "获取目标元素所属的document对象",
            "doc": "baidu_dom_getDocument.html",
            "status": "0"
        },
        "baidu.dom.getPosition": {
            "dependencies": [
                "baidu.dom.getDocument",
                "baidu.dom.g",
                "baidu.dom.getStyle",
                "baidu.browser.ie",
                "baidu.browser.opera",
                "baidu.browser.isWebkit",
                "baidu.browser.isGecko",
                "baidu.browser.isStrict"
            ],
            "description": "获取目标元素相对于整个文档左上角的位置",
            "doc": "baidu_dom_getPosition.html",
            "status": "0"
        },
        "baidu.dom.getStyle": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom._styleFixer",
                "baidu.dom._styleFilter.filter",
                "baidu.string.toCamelCase"
            ],
            "description": "获取目标元素的style",
            "doc": "baidu_dom_getStyle.html",
            "status": "0"
        },
        "baidu.dom.getWindow": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom.getDocument"
            ],
            "description": "获取目标元素所属的window对象",
            "doc": "baidu_dom_getWindow.html",
            "status": "0"
        },
        "baidu.dom.hide": {
            "dependencies": ["baidu.dom.g"],
            "description": "隐藏目标元素",
            "doc": "baidu_dom_hide.html",
            "status": "0"
        },
        "baidu.dom.insertAfter": {
            "dependencies": ["baidu.dom.g"],
            "description": "将目标元素添加到基准元素之后",
            "doc": "baidu_dom_insertAfter.html",
            "status": "0"
        },
        "baidu.dom.insertBefore": {
            "dependencies": ["baidu.dom.g"],
            "description": "将目标元素添加到基准元素之前",
            "doc": "baidu_dom_insertBefore.html",
            "status": "0"
        },
        "baidu.dom.insertHTML": {
            "dependencies": ["baidu.dom.g"],
            "description": "在目标元素的指定位置插入HTML代码",
            "doc": "baidu_dom_insertHTML.html",
            "status": "0"
        },
        "baidu.dom.intersect": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom.getPosition"
            ],
            "description": "检查两个元素是否相交",
            "doc": "baidu_dom_intersect.html",
            "status": "0"
        },
        "baidu.dom.last": {
            "dependencies": ["baidu.dom._matchNode"],
            "description": "获取目标元素的最后一个元素节点",
            "doc": "baidu_dom_last.html",
            "status": "0"
        },
        "baidu.dom.next": {
            "dependencies": ["baidu.dom._matchNode"],
            "description": "获取目标元素的下一个兄弟元素节点",
            "doc": "baidu_dom_next.html",
            "status": "0"
        },
        "baidu.dom.prev": {
            "dependencies": ["baidu.dom._matchNode"],
            "description": "获取目标元素的上一个兄弟元素节点",
            "doc": "baidu_dom_prev.html",
            "status": "0"
        },
        "baidu.dom.q": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.string.trim",
                "baidu.string.escapeReg"
            ],
            "description": "通过className获取元素",
            "doc": "baidu_dom_q.html",
            "status": "0"
        },
        "baidu.dom.ready": {
            "dependencies": [
                "baidu.browser.safari",
                "baidu.browser.ie",
                "baidu.browser.opera"
            ],
            "description": "使函数在页面dom节点加载完毕时调用",
            "doc": "baidu_dom_ready.html",
            "status": "0"
        },
        "baidu.dom.remove": {
            "dependencies": [
                "baidu.browser.ie",
                "baidu.dom.g"
            ],
            "description": "移除一个元素",
            "doc": "baidu_dom_remove.html",
            "status": "0"
        },
        "baidu.dom.removeClass": {
            "dependencies": [
                "baidu.string.trim",
                "baidu.dom.g"
            ],
            "description": "移除目标元素的className",
            "doc": "baidu_dom_removeClass.html",
            "status": "0"
        },
        "baidu.dom.setAttr": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom._NAME_ATTRS"
            ],
            "description": "设置目标元素的attribute值",
            "doc": "baidu_dom_setAttr.html",
            "status": "0"
        },
        "baidu.dom.setAttrs": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom.setAttr"
            ],
            "description": "批量设置目标元素的attribute值",
            "doc": "baidu_dom_setAttrs.html",
            "status": "0"
        },
        "baidu.dom.setStyle": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom._styleFixer",
                "baidu.dom._styleFilter.filter",
                "baidu.string.toCamelCase"
            ],
            "description": "设置目标元素的style",
            "doc": "baidu_dom_setStyle.html",
            "status": "0"
        },
        "baidu.dom.setStyles": {
            "dependencies": [
                "baidu.dom.g",
                "baidu.dom.setStyle"
            ],
            "description": "批量设置目标元素的style",
            "doc": "baidu_dom_setStyles.html",
            "status": "0"
        },
        "baidu.dom.show": {
            "dependencies": ["baidu.dom.g"],
            "description": "显示目标元素",
            "doc": "baidu_dom_show.html",
            "status": "0"
        },
        "baidu.dom.toggle": {
            "dependencies": ["baidu.dom.g"],
            "description": "改变目标元素的显示/隐藏状态",
            "doc": "baidu_dom_toggle.html",
            "status": "0"
        },
        "baidu.event.EventArg": {
            "dependencies": ["baidu.event"],
            "description": "",
            "doc": "baidu_event_EventArg.html",
            "status": "0"
        },
        "baidu.event.get": {
            "dependencies": ["baidu.event.EventArg"],
            "description": "获取扩展的EventArg对象",
            "doc": "baidu_event_get.html",
            "status": "0"
        },
        "baidu.event.getKeyCode": {
            "dependencies": ["baidu.event"],
            "description": "获取键盘事件的键值",
            "doc": "baidu_event_getKeyCode.html",
            "status": "0"
        },
        "baidu.event.getPageX": {
            "dependencies": ["baidu.event"],
            "description": "获取鼠标事件的鼠标x坐标",
            "doc": "baidu_event_getPageX.html",
            "status": "0"
        },
        "baidu.event.getPageY": {
            "dependencies": ["baidu.event"],
            "description": "获取鼠标事件的鼠标y坐标",
            "doc": "baidu_event_getPageY.html",
            "status": "0"
        },
        "baidu.event.getTarget": {
            "dependencies": ["baidu.event"],
            "description": "获取事件的触发元素",
            "doc": "baidu_event_getTarget.html",
            "status": "0"
        },
        "baidu.event.on": {
            "dependencies": ["baidu.event._listeners"],
            "description": "为目标元素添加事件监听器",
            "doc": "baidu_event_on.html",
            "status": "0"
        },
        "baidu.event.preventDefault": {
            "dependencies": ["baidu.event"],
            "description": "阻止事件的默认行为",
            "doc": "baidu_event_preventDefault.html",
            "status": "0"
        },
        "baidu.event.stop": {
            "dependencies": [
                "baidu.event.stopPropagation",
                "baidu.event.preventDefault"
            ],
            "description": "停止事件",
            "doc": "baidu_event_stop.html",
            "status": "0"
        },
        "baidu.event.stopPropagation": {
            "dependencies": ["baidu.event"],
            "description": "阻止事件传播",
            "doc": "baidu_event_stopPropagation.html",
            "status": "0"
        },
        "baidu.event.un": {
            "dependencies": ["baidu.event._listeners"],
            "description": "为目标元素移除事件监听器",
            "doc": "baidu_event_un.html",
            "status": "0"
        },
        "baidu.json.decode": {
            "dependencies": ["baidu.json.parse"],
            "description": "将字符串解析成json对象",
            "doc": "baidu_json_decode.html",
            "status": "0"
        },
        "baidu.json.encode": {
            "dependencies": ["baidu.json.stringify"],
            "description": "将json对象序列化",
            "doc": "baidu_json_encode.html",
            "status": "0"
        },
        "baidu.json.parse": {
            "dependencies": ["baidu.json"],
            "description": "将字符串解析成json对象",
            "doc": "baidu_json_parse.html",
            "status": "0"
        },
        "baidu.json.stringify": {
            "dependencies": ["baidu.json"],
            "description": "将json对象序列化",
            "doc": "baidu_json_stringify.html",
            "status": "0"
        },
        "baidu.lang.Class": {
            "dependencies": [
                "baidu.lang._instances",
                "baidu.lang._insCounter"
            ],
            "description": "",
            "doc": "baidu_lang_Class.html",
            "status": "0"
        },
        "baidu.lang.Event": {
            "dependencies": ["baidu.lang.Class"],
            "description": "",
            "doc": "baidu_lang_Event.html",
            "status": "0"
        },
        "baidu.lang.inherits": {
            "dependencies": ["baidu.lang"],
            "description": "为类型构造器建立继承关系",
            "doc": "baidu_lang_inherits.html",
            "status": "0"
        },
        "baidu.lang.instance": {
            "dependencies": ["baidu.lang._instances"],
            "description": "",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.isArray": {
            "dependencies": ["baidu.lang"],
            "description": "判断目标参数是否Array对象",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.isElement": {
            "dependencies": ["baidu.lang"],
            "description": "判断目标参数是否Element对象",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.isNumber": {
            "dependencies": ["baidu.lang"],
            "description": "判断目标参数是否number类型或Number对象",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.isObject": {
            "dependencies": ["baidu.lang"],
            "description": "判断目标参数是否Object对象",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.isString": {
            "dependencies": ["baidu.lang"],
            "description": "判断目标参数是否string类型或String对象",
            "doc": "",
            "status": "0"
        },
        "baidu.lang.module": {
            "dependencies": ["baidu.lang"],
            "description": "模块扩展",
            "doc": "baidu_lang_module.html",
            "status": "0"
        },
        "baidu.number.comma": {
            "dependencies": ["baidu.number"],
            "description": "为目标数字添加逗号分隔",
            "doc": "baidu_number_comma.html",
            "status": "0"
        },
        "baidu.number.pad": {
            "dependencies": ["baidu.number"],
            "description": "对目标数字进行0补齐处理",
            "doc": "baidu_number_pad.html",
            "status": "0"
        },
        "baidu.object.clone": {
            "dependencies": ["baidu.object"],
            "description": "对一个object进行深度拷贝",
            "doc": "baidu_object_clone.html",
            "status": "0"
        },
        "baidu.object.extend": {
            "dependencies": ["baidu.object"],
            "description": "将源对象的所有属性拷贝到目标对象中",
            "doc": "baidu_object_extend.html",
            "status": "0"
        },
        "baidu.object.keys": {
            "dependencies": ["baidu.object"],
            "description": "获取目标对象的键名列表",
            "doc": "baidu_object_keys.html",
            "status": "0"
        },
        "baidu.object.values": {
            "dependencies": ["baidu.object"],
            "description": "获取目标对象的值列表",
            "doc": "baidu_object_values.html",
            "status": "0"
        },
        "baidu.page.getHeight": {
            "dependencies": ["baidu.page"],
            "description": "获取页面高度",
            "doc": "",
            "status": "0"
        },
        "baidu.page.getScrollLeft": {
            "dependencies": ["baidu.page"],
            "description": "获取横向滚动量",
            "doc": "",
            "status": "0"
        },
        "baidu.page.getScrollTop": {
            "dependencies": ["baidu.page"],
            "description": "获取纵向滚动量",
            "doc": "",
            "status": "0"
        },
        "baidu.page.getViewHeight": {
            "dependencies": ["baidu.page"],
            "description": "获取页面视觉区域高度",
            "doc": "",
            "status": "0"
        },
        "baidu.page.getViewWidth": {
            "dependencies": ["baidu.page"],
            "description": "获取页面视觉区域宽度",
            "doc": "",
            "status": "0"
        },
        "baidu.page.getWidth": {
            "dependencies": ["baidu.page"],
            "description": "获取页面宽度",
            "doc": "",
            "status": "0"
        },
        "baidu.page.loadCssFile": {
            "dependencies": ["baidu.page"],
            "description": "动态在页面上加载一个外部css文件",
            "doc": "",
            "status": "0"
        },
        "baidu.page.loadJsFile": {
            "dependencies": ["baidu.page"],
            "description": "动态在页面上加载一个外部js文件",
            "doc": "",
            "status": "0"
        },
        "baidu.sio.callByBrowser": {
            "dependencies": ["baidu.sio"],
            "description": "通过script标签加载数据，加载完成由浏览器端触发回调",
            "doc": "baidu_sio_callByBrowser.html",
            "status": "0"
        },
        "baidu.sio.callByServer": {
            "dependencies": ["baidu.sio"],
            "description": "通过script标签加载数据，加载完成由服务器端触发回调",
            "doc": "baidu_sio_callByServer.html",
            "status": "0"
        },
        "baidu.string.decodeHTML": {
            "dependencies": ["baidu.string"],
            "description": "对目标字符串html解码",
            "doc": "baidu_string_decodeHTML.html",
            "status": "0"
        },
        "baidu.string.encodeHTML": {
            "dependencies": ["baidu.string"],
            "description": "对目标字符串进行html编码",
            "doc": "baidu_string_encodeHTML.html",
            "status": "0"
        },
        "baidu.string.escapeReg": {
            "dependencies": ["baidu.string"],
            "description": "将目标字符串中可能会影响正则表达式构造的字符串进行转义",
            "doc": "baidu_string_escapeReg.html",
            "status": "0"
        },
        "baidu.string.format": {
            "dependencies": ["baidu.string"],
            "description": "对目标字符串进行格式化",
            "doc": "baidu_string_format.html",
            "status": "0"
        },
        "baidu.string.getByteLength": {
            "dependencies": ["baidu.string"],
            "description": "获取目标字符串在gbk编码下的字节长度",
            "doc": "baidu_string_getByteLength.html",
            "status": "0"
        },
        "baidu.string.subByte": {
            "dependencies": ["baidu.string.getByteLength"],
            "description": "对目标字符串按gbk编码截取字节长度",
            "doc": "baidu_string_subByte.html",
            "status": "0"
        },
        "baidu.string.toCamelCase": {
            "dependencies": ["baidu.string"],
            "description": "将目标字符串进行驼峰化处理",
            "doc": "baidu_string_toCamelCase.html",
            "status": "0"
        },
        "baidu.string.toHalfWidth": {
            "dependencies": ["baidu.string"],
            "description": "将目标字符串中常见全角字符转换成半角字符",
            "doc": "baidu_string_toHalfWidth.html",
            "status": "0"
        },
        "baidu.string.trim": {
            "dependencies": ["baidu.string"],
            "description": "删除目标字符串两端的空白字符",
            "doc": "baidu_string_trim.html",
            "status": "0"
        },
        "baidu.string.wbr": {
            "dependencies": ["baidu.string"],
            "description": "为目标字符串添加wbr软换行",
            "doc": "baidu_string_wbr.html",
            "status": "0"
        },
        "baidu.swf.create": {
            "dependencies": ["baidu.swf.createHTML"],
            "description": "在页面中创建一个flash对象",
            "doc": "baidu_swf_create.html",
            "status": "0"
        },
        "baidu.swf.createHTML": {
            "dependencies": ["baidu.swf.version"],
            "description": "创建flash对象的html字符串",
            "doc": "baidu_swf_createHTML.html",
            "status": "0"
        },
        "baidu.swf.getMovie": {
            "dependencies": ["baidu.swf"],
            "description": "获得flash对象的实例",
            "doc": "baidu_swf_getMovie.html",
            "status": "0"
        },
        "baidu.swf.version": {
            "dependencies": ["baidu.swf"],
            "description": "",
            "doc": "baidu_swf_version.html",
            "status": "0"
        },
        "baidu.url.escapeSymbol": {
            "dependencies": ["baidu.url"],
            "description": "对字符串进行%&+/#=和空格七个字符进行url转义",
            "doc": "baidu_url_escapeSymbol.html",
            "status": "0"
        },
        "baidu.url.getQueryValue": {
            "dependencies": [
                "baidu.url",
                "baidu.string.escapeReg"
            ],
            "description": "根据参数名从目标URL中获取参数值",
            "doc": "baidu_url_getQueryValue.html",
            "status": "0"
        },
        "baidu.url.jsonToQuery": {
            "dependencies": ["baidu.url.escapeSymbol"],
            "description": "将json对象解析成query字符串",
            "doc": "baidu_url_jsonToQuery.html",
            "status": "0"
        },
        "baidu.url.queryToJson": {
            "dependencies": ["baidu.url"],
            "description": "解析目标URL中的参数成json对象",
            "doc": "baidu_url_queryToJson.html",
            "status": "0"
        }
    },
    "packages": [
        {
            "functions": [],
            "packageName": "baidu"
        },
        {
            "functions": [
                "baidu.ajax.form",
                "baidu.ajax.get",
                "baidu.ajax.post",
                "baidu.ajax.request"
            ],
            "packageName": "baidu.ajax"
        },
        {
            "functions": [
                "baidu.array.each",
                "baidu.array.filter",
                "baidu.array.find",
                "baidu.array.indexOf",
                "baidu.array.lastIndexOf",
                "baidu.array.remove",
                "baidu.array.removeAt",
                "baidu.array.unique"
            ],
            "packageName": "baidu.array"
        },
        {
            "functions": [
                "baidu.browser.chrome",
                "baidu.browser.firefox",
                "baidu.browser.ie",
                "baidu.browser.isGecko",
                "baidu.browser.isStrict",
                "baidu.browser.isWebkit",
                "baidu.browser.maxthon",
                "baidu.browser.opera",
                "baidu.browser.safari"
            ],
            "packageName": "baidu.browser"
        },
        {
            "functions": [
                "baidu.cookie.get",
                "baidu.cookie.getRaw",
                "baidu.cookie.remove",
                "baidu.cookie.set",
                "baidu.cookie.setRaw"
            ],
            "packageName": "baidu.cookie"
        },
        {
            "functions": [
                "baidu.date.format",
                "baidu.date.parse"
            ],
            "packageName": "baidu.date"
        },
        {
            "functions": [
                "baidu.dom.addClass",
                "baidu.dom.children",
                "baidu.dom.contains",
                "baidu.dom.first",
                "baidu.dom.g",
                "baidu.dom.getAncestorBy",
                "baidu.dom.getAncestorByClass",
                "baidu.dom.getAncestorByTag",
                "baidu.dom.getAttr",
                "baidu.dom.getDocument",
                "baidu.dom.getPosition",
                "baidu.dom.getStyle",
                "baidu.dom.getWindow",
                "baidu.dom.hide",
                "baidu.dom.insertAfter",
                "baidu.dom.insertBefore",
                "baidu.dom.insertHTML",
                "baidu.dom.intersect",
                "baidu.dom.last",
                "baidu.dom.next",
                "baidu.dom.prev",
                "baidu.dom.q",
                "baidu.dom.ready",
                "baidu.dom.remove",
                "baidu.dom.removeClass",
                "baidu.dom.setAttr",
                "baidu.dom.setAttrs",
                "baidu.dom.setStyle",
                "baidu.dom.setStyles",
                "baidu.dom.show",
                "baidu.dom.toggle"
            ],
            "packageName": "baidu.dom"
        },
        {
            "functions": [
                "baidu.dom._styleFilter.color",
                "baidu.dom._styleFilter.filter",
                "baidu.dom._styleFilter.px"
            ],
            "packageName": "baidu.dom._styleFilter"
        },
        {
            "functions": [
                "baidu.dom._styleFixer.display",
                "baidu.dom._styleFixer.float",
                "baidu.dom._styleFixer.opacity",
                "baidu.dom._styleFixer.textOverflow"
            ],
            "packageName": "baidu.dom._styleFixer"
        },
        {
            "functions": [
                "baidu.event.EventArg",
                "baidu.event.get",
                "baidu.event.getKeyCode",
                "baidu.event.getPageX",
                "baidu.event.getPageY",
                "baidu.event.getTarget",
                "baidu.event.on",
                "baidu.event.preventDefault",
                "baidu.event.stop",
                "baidu.event.stopPropagation",
                "baidu.event.un"
            ],
            "packageName": "baidu.event"
        },
        {
            "functions": [
                "baidu.json.decode",
                "baidu.json.encode",
                "baidu.json.parse",
                "baidu.json.stringify"
            ],
            "packageName": "baidu.json"
        },
        {
            "functions": [
                "baidu.lang.Class",
                "baidu.lang.Event",
                "baidu.lang.inherits",
                "baidu.lang.instance",
                "baidu.lang.isArray",
                "baidu.lang.isElement",
                "baidu.lang.isNumber",
                "baidu.lang.isObject",
                "baidu.lang.isString",
                "baidu.lang.module"
            ],
            "packageName": "baidu.lang"
        },
        {
            "functions": [
                "baidu.number.comma",
                "baidu.number.pad"
            ],
            "packageName": "baidu.number"
        },
        {
            "functions": [
                "baidu.object.clone",
                "baidu.object.extend",
                "baidu.object.keys",
                "baidu.object.values"
            ],
            "packageName": "baidu.object"
        },
        {
            "functions": [
                "baidu.page.getHeight",
                "baidu.page.getScrollLeft",
                "baidu.page.getScrollTop",
                "baidu.page.getViewHeight",
                "baidu.page.getViewWidth",
                "baidu.page.getWidth",
                "baidu.page.loadCssFile",
                "baidu.page.loadJsFile"
            ],
            "packageName": "baidu.page"
        },
        {
            "functions": [
                "baidu.sio.callByBrowser",
                "baidu.sio.callByServer"
            ],
            "packageName": "baidu.sio"
        },
        {
            "functions": [
                "baidu.string.decodeHTML",
                "baidu.string.encodeHTML",
                "baidu.string.escapeReg",
                "baidu.string.format",
                "baidu.string.getByteLength",
                "baidu.string.subByte",
                "baidu.string.toCamelCase",
                "baidu.string.toHalfWidth",
                "baidu.string.trim",
                "baidu.string.wbr"
            ],
            "packageName": "baidu.string"
        },
        {
            "functions": [
                "baidu.swf.create",
                "baidu.swf.createHTML",
                "baidu.swf.getMovie",
                "baidu.swf.version"
            ],
            "packageName": "baidu.swf"
        },
        {
            "functions": [
                "baidu.url.escapeSymbol",
                "baidu.url.getQueryValue",
                "baidu.url.jsonToQuery",
                "baidu.url.queryToJson"
            ],
            "packageName": "baidu.url"
        }
    ]
}