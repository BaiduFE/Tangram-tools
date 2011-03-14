// 接口列表
var apiData = [

	{
		'name': 'baidu.ajax',
		'desc': 'baidu.ajax 对XMLHttpRequest请求的封装。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'onStatusCode',
				'desc': '状态码触发的全局事件，function(XMLHttpRequest xhr),注意：onStatusCode中的StatusCode需用404,320等状态码替换。如on404'
			},
			{
				'name': 'onbeforerequest',
				'desc': '请求发送前触发的全局事件，function(XMLHttpRequest xhr)'
			},
			{
				'name': 'onfailure',
				'desc': '请求失败的全局事件，function(XMLHttpRequest xhr)'
			}
			,
			{
				'name': 'form',
				'desc': '将一个表单用ajax方式提交'
			},
			{
				'name': 'get',
				'desc': '发送一个get请求'
			},
			{
				'name': 'post',
				'desc': '发送一个post请求'
			},
			{
				'name': 'request',
				'desc': '发送一个ajax请求'
			}
			
		]
	},
	{
		'name': 'baidu.array',
		'desc': 'baidu.array 操作数组的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'each',
				'desc': '遍历数组中所有元素'
			},
			{
				'name': 'filter',
				'desc': '从数组中筛选符合条件的元素'
			},
			{
				'name': 'find',
				'desc': '从数组中寻找符合条件的第一个元素'
			},
			{
				'name': 'hash',
				'desc': '将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。'
			},
			{
				'name': 'indexOf',
				'desc': '查询数组中指定元素的索引位置'
			},
			{
				'name': 'lastIndexOf',
				'desc': '从后往前，查询数组中指定元素的索引位置'
			},
			{
				'name': 'map',
				'desc': '遍历数组中所有元素，将每一个元素应用方法进行转换，并返回转换后的新数组。'
			},
			{
				'name': 'reduce',
				'desc': '遍历数组中所有元素，将每一个元素应用方法进行合并，并返回合并后的结果。'
			},
			{
				'name': 'remove',
				'desc': '移除数组中的项'
			},
			{
				'name': 'removeAt',
				'desc': '移除数组中的项'
			},
			{
				'name': 'unique',
				'desc': '过滤数组中的相同项。如果两个元素相同，会删除后一个元素。'
			}
			
		]
	},
	{
		'name': 'baidu.browser',
		'desc': 'baidu.browser 判断浏览器类型和特性的属性。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'chrome',
				'desc': 'chrome版本号'
			},
			{
				'name': 'firefox',
				'desc': 'firefox版本号'
			},
			{
				'name': 'ie',
				'desc': 'ie版本号'
			},
			{
				'name': 'isGecko',
				'desc': '判断是否为gecko内核'
			},
			{
				'name': 'isStrict',
				'desc': '判断是否严格标准的渲染模式'
			},
			{
				'name': 'isWebkit',
				'desc': '判断是否为webkit内核'
			},
			{
				'name': 'maxthon',
				'desc': 'maxthon版本号'
			},
			{
				'name': 'opera',
				'desc': 'opera版本号'
			},
			{
				'name': 'safari',
				'desc': 'safari版本号'
			}
			
			
		]
	},
	{
		'name': 'baidu.cookie',
		'desc': 'baidu.cookie 操作cookie的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'get',
				'desc': '获取cookie的值，用decodeURIComponent进行解码'
			},
			{
				'name': 'getRaw',
				'desc': '获取cookie的值，不对值进行解码'
			},
			{
				'name': 'remove',
				'desc': '删除cookie的值'
			},
			{
				'name': 'set',
				'desc': '设置cookie的值，用encodeURIComponent进行编码'
			},
			{
				'name': 'setRaw',
				'desc': '设置cookie的值，不对值进行编码'
			}
			
		]
	},
	{
		'name': 'baidu.date',
		'desc': 'baidu.date 操作日期的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'format',
				'desc': '对目标日期对象进行格式化'
			},
			{
				'name': 'parse',
				'desc': '将目标字符串转换成日期对象'
			}
			
		]
	},
	{
		'name': 'baidu.dom',
		'desc': 'baidu.dom 操作dom的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'addClass',
				'desc': '为目标元素添加className'
			},
			{
				'name': 'children',
				'desc': '获取目标元素的直接子元素列表'
			},
			{
				'name': 'contains',
				'desc': '判断一个元素是否包含另一个元素'
			},
			{
				'name': 'create',
				'desc': '创建 Element 对象。'
			},
			{
				'name': 'ddManager',
				'desc': '拖曳管理器'
			},
			{
				'name': 'drag',
				'desc': '拖动指定的DOM元素'
			},
			{
				'name': 'draggable',
				'desc': '让一个DOM元素可拖拽'
			},
			{
				'name': 'droppable',
				'desc': '让一个DOM元素可以容纳被拖拽的DOM元素'
			},
			{
				'name': 'empty',
				'desc': '删除一个节点下面的所有子节点。'
			},
			{
				'name': 'first',
				'desc': '获取目标元素的第一个元素节点'
			},
			{
				'name': 'g',
				'desc': '从文档中获取指定的DOM元素'
			},
			{
				'name': 'getAncestorBy',
				'desc': '获取目标元素符合条件的最近的祖先元素'
			},
			{
				'name': 'getAncestorByClass',
				'desc': '获取目标元素指定元素className最近的祖先元素'
			},
			{
				'name': 'getAncestorByTag',
				'desc': '获取目标元素指定标签的最近的祖先元素'
			},
			{
				'name': 'getAttr',
				'desc': '获取目标元素的属性值'
			},
			{
				'name': 'getDocument',
				'desc': '获取目标元素所属的document对象'
			},
			{
				'name': 'getParent',
				'desc': '获得元素的父节点'
			},
			{
				'name': 'getPosition',
				'desc': '获取目标元素相对于整个文档左上角的位置'
			},
			{
				'name': 'getStyle',
				'desc': '获取目标元素的样式值'
			},
			{
				'name': 'getText',
				'desc': '获得元素中的文本内容。'
			},
			{
				'name': 'getWindow',
				'desc': '获取目标元素所属的window对象'
			},
			{
				'name': 'hasAttr',
				'desc': '查询一个元素是否包含指定的属性'
			},
			{
				'name': 'hasClass',
				'desc': '判断元素是否拥有指定的className'
			},
			{
				'name': 'hide',
				'desc': '隐藏目标元素'
			},
			{
				'name': 'insertAfter',
				'desc': '将目标元素添加到基准元素之后'
			},
			{
				'name': 'insertBefore',
				'desc': '将目标元素添加到基准元素之前'
			},
			{
				'name': 'insertHTML',
				'desc': '在目标元素的指定位置插入HTML代码'
			},
			{
				'name': 'intersect',
				'desc': '检查两个元素是否相交'
			},
			{
				'name': 'last',
				'desc': '获取目标元素的最后一个元素节点'
			},
			{
				'name': 'next',
				'desc': '获取目标元素的下一个兄弟元素节点'
			},
			{
				'name': 'prev',
				'desc': '获取目标元素的上一个兄弟元素节点'
			},
			{
				'name': 'q',
				'desc': '通过className获取元素'
			},
			{
				'name': 'query',
				'desc': '提供css选择器功能'
			},
			{
				'name': 'ready',
				'desc': '使函数在页面dom节点加载完毕时调用'
			},
			{
				'name': 'remove',
				'desc': '从DOM树上移除目标元素'
			},
			{
				'name': 'removeClass',
				'desc': '移除目标元素的className'
			},
			{
				'name': 'removeStyle',
				'desc': '删除元素的某个样式'
			},
			{
				'name': 'resizable',
				'desc': '使元素大小可以改变'
			},
			{
				'name': 'setAttr',
				'desc': '设置目标元素的attribute值'
			},
			{
				'name': 'setAttrs',
				'desc': '批量设置目标元素的attribute值'
			},
			{
				'name': 'setOuter',
				'desc': '设置元素的outerHeight和outerWidth，暂时只支持元素的padding/border/height/width使用同一种计量单位的情况。不支持：1. 非数字值(medium)，2. em/px在不同的属性中混用。'
			},
			{
				'name': 'setOuterHeight',
				'desc': '设置元素的outerHeight'
			},
			{
				'name': 'setOuterWidth',
				'desc': '设置元素的outerWidth'
			},
			{
				'name': 'setPosition',
				'desc': '设置目标元素的top和left值到用户指定的位置'
			},
			{
				'name': 'setStyle',
				'desc': '设置目标元素的style样式值'
			},
			{
				'name': 'setStyles',
				'desc': '批量设置目标元素的style样式值'
			},
			{
				'name': 'show',
				'desc': '显示目标元素'
			},
			{
				'name': 'toggle',
				'desc': '改变目标元素的显示/隐藏状态'
			},
			{
				'name': 'toggleClass',
				'desc': '添加或者删除一个节点中的指定class，如果已经有就删除，否则添加'
			}
			
		]
	},
	{
		'name': 'baidu.e',
		'desc': 'baidu.element 通过该方法封装的对象可使用dom、event方法集合以及each方法进行链式调用。',
		'link': 'tangram',
		'interfaces': [
			
			
		]
	},
	{
		'name': 'baidu.element',
		'desc': 'baidu.element 通过该方法封装的对象可使用dom、event方法集合以及each方法进行链式调用。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'Element',
				'desc': 'Element类，所有扩展到链条上的方法都会被放在这里面'
			},
			{
				'name': 'extend',
				'desc': '通过extend在链上扩展方法'
			}
			
		]
	},
	{
		'name': 'baidu.event',
		'desc': 'baidu.event 屏蔽浏览器差异性的事件封装。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'keyCode',
				'desc': '键盘事件的键值'
			},
			{
				'name': 'pageX',
				'desc': '鼠标事件的鼠标x坐标'
			},
			{
				'name': 'pageY',
				'desc': '鼠标事件的鼠标y坐标'
			},
			{
				'name': 'target',
				'desc': '事件的触发元素'
			}
			,
			{
				'name': 'EventArg',
				'desc': '事件对象构造器，屏蔽浏览器差异的事件类'
			},
			{
				'name': 'fire',
				'desc': '触发已经注册的事件'
			},
			{
				'name': 'get',
				'desc': '获取扩展的EventArg对象'
			},
			{
				'name': 'getKeyCode',
				'desc': '获取键盘事件的键值'
			},
			{
				'name': 'getPageX',
				'desc': '获取鼠标事件的鼠标x坐标'
			},
			{
				'name': 'getPageY',
				'desc': '获取鼠标事件的鼠标y坐标'
			},
			{
				'name': 'getTarget',
				'desc': '获取事件的触发元素'
			},
			{
				'name': 'on',
				'desc': '为目标元素添加事件监听器'
			},
			{
				'name': 'once',
				'desc': '为目标元素添加一次事件绑定'
			},
			{
				'name': 'preventDefault',
				'desc': '阻止事件的默认行为'
			},
			{
				'name': 'stop',
				'desc': '停止事件'
			},
			{
				'name': 'stopPropagation',
				'desc': '阻止事件传播'
			},
			{
				'name': 'un',
				'desc': '为目标元素移除事件监听器'
			}
			
		]
	},
	{
		'name': 'baidu.fn',
		'desc': 'baidu.fn 对方法的操作，解决内存泄露问题。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'bind',
				'desc': '为对象绑定方法和作用域'
			},
			{
				'name': 'methodize',
				'desc': '将一个静态函数变换成一个对象的方法，使其的第一个参数为this，或this[attr]'
			},
			{
				'name': 'multize',
				'desc': '对函数进行集化，使其在第一个参数为array时，结果也返回一个数组'
			}
			
		]
	},
	{
		'name': 'baidu.json',
		'desc': 'baidu.json 操作json对象的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'decode',
				'desc': '将字符串解析成json对象，为过时接口，今后会被baidu.json.parse代替'
			},
			{
				'name': 'encode',
				'desc': '将json对象序列化，为过时接口，今后会被baidu.json.stringify代替'
			},
			{
				'name': 'parse',
				'desc': '将字符串解析成json对象'
			},
			{
				'name': 'stringify',
				'desc': '将json对象序列化'
			}
			
		]
	},
	{
		'name': 'baidu.lang',
		'desc': 'baidu.lang 对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'guid',
				'desc': '对象的唯一标识'
			}
			,
			{
				'name': 'Class',
				'desc': 'Tangram继承机制提供的一个基类，用户可以通过继承baidu.lang.Class来获取它的属性及方法。'
			},
			{
				'name': 'Event',
				'desc': '自定义的事件对象。'
			},
			{
				'name': 'createClass',
				'desc': '创建一个类，包括创造类的构造器、继承基类Class'
			},
			{
				'name': 'createSingle',
				'desc': '创建一个baidu.lang.Class的单例实例'
			},
			{
				'name': 'decontrol',
				'desc': '解除instance中对指定类实例的引用关系。'
			},
			{
				'name': 'guid',
				'desc': '返回一个当前页面的唯一标识字符串。'
			},
			{
				'name': 'inherits',
				'desc': '为类型构造器建立继承关系'
			},
			{
				'name': 'instance',
				'desc': '根据参数(guid)的指定，返回对应的实例对象引用'
			},
			{
				'name': 'isArray',
				'desc': '判断目标参数是否Array对象'
			},
			{
				'name': 'isBoolean',
				'desc': '判断目标参数是否Boolean对象'
			},
			{
				'name': 'isDate',
				'desc': '判断目标参数是否为Date对象'
			},
			{
				'name': 'isElement',
				'desc': '判断目标参数是否为Element对象'
			},
			{
				'name': 'isFunction',
				'desc': '判断目标参数是否为function或Function实例'
			},
			{
				'name': 'isNumber',
				'desc': '判断目标参数是否number类型或Number对象'
			},
			{
				'name': 'isObject',
				'desc': '判断目标参数是否为Object对象'
			},
			{
				'name': 'isString',
				'desc': '判断目标参数是否string类型或String对象'
			},
			{
				'name': 'module',
				'desc': '增加自定义模块扩展,默认创建在当前作用域'
			},
			{
				'name': 'toArray',
				'desc': '将一个变量转换成array'
			}
			
		]
	},
	{
		'name': 'baidu.number',
		'desc': 'baidu.number 操作number的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'comma',
				'desc': '为目标数字添加逗号分隔'
			},
			{
				'name': 'pad',
				'desc': '对目标数字进行0补齐处理'
			},
			{
				'name': 'randomInt',
				'desc': '生成随机整数，范围是[min, max]'
			}
			
		]
	},
	{
		'name': 'baidu.object',
		'desc': 'baidu.object 操作原生对象的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'clone',
				'desc': '对一个object进行深度拷贝'
			},
			{
				'name': 'each',
				'desc': '遍历Object中所有元素，1.1.1增加'
			},
			{
				'name': 'extend',
				'desc': '将源对象的所有属性拷贝到目标对象中'
			},
			{
				'name': 'keys',
				'desc': '获取目标对象的键名列表'
			},
			{
				'name': 'map',
				'desc': '遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。'
			},
			{
				'name': 'values',
				'desc': '获取目标对象的值列表'
			}
			
		]
	},
	{
		'name': 'baidu.page',
		'desc': 'baidu.page 对页面层面的封装，包括页面的高宽属性、以及外部css和js的动态添加。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'rules',
				'desc': '当前对象的规则列表'
			}
			,
			{
				'name': 'createStyleSheet',
				'desc': '在页面中创建样式表对象'
			},
			{
				'name': 'getHeight',
				'desc': '获取页面高度'
			},
			{
				'name': 'getMousePosition',
				'desc': '获得页面里的目前鼠标所在的坐标'
			},
			{
				'name': 'getScrollLeft',
				'desc': '获取横向滚动量'
			},
			{
				'name': 'getScrollTop',
				'desc': '获取纵向滚动量'
			},
			{
				'name': 'getViewHeight',
				'desc': '获取页面视觉区域高度'
			},
			{
				'name': 'getViewWidth',
				'desc': '获取页面视觉区域宽度'
			},
			{
				'name': 'getWidth',
				'desc': '获取页面宽度'
			},
			{
				'name': 'load',
				'desc': '加载一组资源，支持多种格式资源的串/并行加载，支持每个文件有单独回调函数。'
			},
			{
				'name': 'loadCssFile',
				'desc': '动态在页面上加载一个外部css文件'
			},
			{
				'name': 'loadJsFile',
				'desc': '动态在页面上加载一个外部js文件'
			}
			
		]
	},
	{
		'name': 'baidu.sio',
		'desc': 'baidu.sio 使用动态script标签请求服务器资源，包括由服务器端的回调和浏览器端的回调。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'callByBrowser',
				'desc': '通过script标签加载数据，加载完成由浏览器端触发回调'
			},
			{
				'name': 'callByServer',
				'desc': '通过script标签加载数据，加载完成由服务器端触发回调'
			}
			
		]
	},
	{
		'name': 'baidu.string',
		'desc': 'baidu.string 操作字符串的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'decodeHTML',
				'desc': '对目标字符串进行html解码'
			},
			{
				'name': 'encodeHTML',
				'desc': '对目标字符串进行html编码'
			},
			{
				'name': 'escapeReg',
				'desc': '将目标字符串中可能会影响正则表达式构造的字符串进行转义。'
			},
			{
				'name': 'filterFormat',
				'desc': '对目标字符串进行格式化,支持过滤'
			},
			{
				'name': 'format',
				'desc': '对目标字符串进行格式化'
			},
			{
				'name': 'formatColor',
				'desc': '将各种浏览器里的颜色值转换成 #RRGGBB 的格式'
			},
			{
				'name': 'getByteLength',
				'desc': '获取目标字符串在gbk编码下的字节长度'
			},
			{
				'name': 'subByte',
				'desc': '对目标字符串按gbk编码截取字节长度'
			},
			{
				'name': 'toCamelCase',
				'desc': '将目标字符串进行驼峰化处理'
			},
			{
				'name': 'toHalfWidth',
				'desc': '将目标字符串中常见全角字符转换成半角字符'
			},
			{
				'name': 'trim',
				'desc': '删除目标字符串两端的空白字符'
			},
			{
				'name': 'wbr',
				'desc': '为目标字符串添加wbr软换行'
			}
			
		]
	},
	{
		'name': 'baidu.swf',
		'desc': 'baidu.swf 操作flash对象的方法，包括创建flash对象、获取flash对象以及判断flash插件的版本号。',
		'link': 'tangram',
		'interfaces': [
			{
				'name': 'version',
				'desc': '浏览器支持的flash插件版本'
			}
			,
			{
				'name': 'create',
				'desc': '在页面中创建一个flash对象'
			},
			{
				'name': 'createHTML',
				'desc': '创建flash对象的html字符串'
			},
			{
				'name': 'getMovie',
				'desc': '获得flash对象的实例'
			}
			
		]
	},
	{
		'name': 'baidu.url',
		'desc': 'baidu.url 操作url的方法。',
		'link': 'tangram',
		'interfaces': [
			
			{
				'name': 'escapeSymbol',
				'desc': '对字符串进行%&+/#=和空格七个字符进行url转义'
			},
			{
				'name': 'getQueryValue',
				'desc': '根据参数名从目标URL中获取参数值'
			},
			{
				'name': 'jsonToQuery',
				'desc': '将json对象解析成query字符串'
			},
			{
				'name': 'queryToJson',
				'desc': '解析目标URL中的参数成json对象'
			}
			
		]
	}
];


var shortcutData = [
	{
		'name': 'baidu.format',
		'full': 'baidu.string.format'
	}
,
	{
		'name': 'baidu.setStyles',
		'full': 'baidu.dom.setStyles'
	}
,
	{
		'name': 'baidu.inherits',
		'full': 'baidu.lang.inherits'
	}
,
	{
		'name': 'baidu.show',
		'full': 'baidu.dom.show'
	}
,
	{
		'name': 'baidu.addClass',
		'full': 'baidu.dom.addClass'
	}
,
	{
		'name': 'baidu.removeClass',
		'full': 'baidu.dom.removeClass'
	}
,
	{
		'name': 'baidu.Q',
		'full': 'baidu.dom.q'
	}
,
	{
		'name': 'baidu.hide',
		'full': 'baidu.dom.hide'
	}
,
	{
		'name': 'baidu.isString',
		'full': 'baidu.lang.isString'
	}
,
	{
		'name': 'baidu.G',
		'full': 'baidu.dom.g'
	}
,
	{
		'name': 'baidu.insertHTML',
		'full': 'baidu.dom.insertHTML'
	}
,
	{
		'name': 'baidu.setStyle',
		'full': 'baidu.dom.setStyle'
	}
,
	{
		'name': 'baidu.getAttr',
		'full': 'baidu.dom.getAttr'
	}
,
	{
		'name': 'baidu.encodeHTML',
		'full': 'baidu.string.encodeHTML'
	}
,
	{
		'name': 'baidu.trim',
		'full': 'baidu.string.trim'
	}
,
	{
		'name': 'baidu.isObject',
		'full': 'baidu.lang.isObject'
	}
,
	{
		'name': 'baidu.setAttrs',
		'full': 'baidu.dom.setAttrs'
	}
,
	{
		'name': 'baidu.un',
		'full': 'baidu.event.un'
	}
,
	{
		'name': 'baidu.on',
		'full': 'baidu.event.on'
	}
,
	{
		'name': 'baidu.q',
		'full': 'baidu.dom.q'
	}
,
	{
		'name': 'baidu.getStyle',
		'full': 'baidu.dom.getStyle'
	}
,
	{
		'name': 'baidu.each',
		'full': 'baidu.array.each'
	}
,
	{
		'name': 'baidu.g',
		'full': 'baidu.dom.g'
	}
,
	{
		'name': 'baidu.decodeHTML',
		'full': 'baidu.string.decodeHTML'
	}
,
	{
		'name': 'baidu.extend',
		'full': 'baidu.object.extend'
	}
,
	{
		'name': 'baidu.setAttr',
		'full': 'baidu.dom.setAttr'
	}
];
