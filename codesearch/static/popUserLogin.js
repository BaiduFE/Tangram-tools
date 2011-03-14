var Fe = Fe || {
	version :"20080809",
	emptyFn : function() {
	}
};
Fe.each = function(D, E) {
	if (typeof E != "function") {
		return D
	}
	if (D) {
		if (D.length === undefined) {
			for ( var A in D) {
				E.call(D[A], D[A], A)
			}
		} else {
			for ( var B = 0, C = D.length; B < C; B++) {
				E.call(D[B], D[B], B)
			}
		}
	}
	return D
};
Fe.body = function() {
	var F = 0, D = 0, A = 0, J = 0, I = 0, E = 0;
	var B = window, S = document, C = S.documentElement;
	F = C.clientWidth || S.body.clientWidth;
	D = B.innerHeight || C.clientHeight || S.body.clientHeight;
	J = S.body.scrollTop || C.scrollTop;
	A = S.body.scrollLeft || C.scrollLeft;
	I = Math.max(S.body.scrollWidth, C.scrollWidth || 0);
	E = Math.max(S.body.scrollHeight, C.scrollHeight || 0, D);
	return {
		scrollTop :J,
		scrollLeft :A,
		documentWidth :I,
		documentHeight :E,
		viewWidth :F,
		viewHeight :D
	}
};
Fe.extend = function(E, C) {
	if (E && C && typeof (C) == "object") {
		for ( var D in C) {
			E[D] = C[D]
		}
		var B = [ "constructor", "hasOwnProperty", "isPrototypeOf",
				"propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
		for ( var F = 0, A; F < B.length; F++) {
			A = B[F];
			if (Object.prototype.hasOwnProperty.call(C, A)) {
				E[A] = C[A]
			}
		}
	}
	return E
};
Fe.isIE = 0;
( function() {
	if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
		/MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
		Fe.isIE = parseFloat(RegExp.$1)
	}
})();
Fe.G = function() {
	for ( var C = [], A = arguments.length - 1; A > -1; A--) {
		var B = arguments[A];
		C[A] = null;
		if (typeof B == "object" && B && B.dom) {
			C[A] = B.dom
		} else {
			if ((typeof B == "object" && B && B.tagName) || B == window
					|| B == document) {
				C[A] = B
			} else {
				if (typeof B == "string" && (B = document.getElementById(B))) {
					C[A] = B
				}
			}
		}
	}
	return C.length < 2 ? C[0] : C
};
Fe.hide = function() {
	Fe.each(arguments, function(A) {
		if (A = Fe.G(A)) {
			A.style.display = "none"
		}
	})
};
Fe.show = function() {
	this.each(arguments, function(A) {
		if (A = Fe.G(A)) {
			A.style.display = ""
		}
	})
};
Fe.on = function(B, A, C) {
	if (!(B = Fe.G(B))) {
		return B
	}
	A = A.replace(/^on/, "").toLowerCase();
	if (B.attachEvent) {
		B[A + C] = function() {
			C.call(B, window.event)
		};
		B.attachEvent("on" + A, B[A + C])
	} else {
		B.addEventListener(A, C, false)
	}
	return B
};
Fe.un = function(B, A, C) {
	if (!(B = Fe.G(B))) {
		return B
	}
	A = A.replace(/^on/, "").toLowerCase();
	if (B.attachEvent) {
		B.detachEvent("on" + A, B[A + C]);
		B[A + C] = null
	} else {
		B.removeEventListener(A, C, false)
	}
	return B
};
Fe.Dom = {};
Fe.isIE = /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent) ? RegExp.$1 : 0;
Fe.isOpera = (window.opera && /Opera(\s|\/)(\d+(\.\d+)?)/
		.test(navigator.userAgent)) ? RegExp.$2 : 0;
Fe.isSafari = (navigator.userAgent.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/
		.test(navigator.userAgent)) ? RegExp.$1 : 0;
Fe.Dom.ready = function() {
	var B = false, D = false, C = [];
	function E() {
		if (!B) {
			B = true;
			for ( var I = 0, H = C.length; I < H; I++) {
				try {
					C[I]()
				} catch (F) {
				}
			}
		}
	}
	function A() {
		if (D) {
			return
		}
		D = true;
		if (document.addEventListener && !Fe.isOpera) {
			document.addEventListener("DOMContentLoaded", E, false)
		}
		if (Fe.isIE && window == top) {
			( function() {
				if (B) {
					return
				}
				try {
					document.documentElement.doScroll("left")
				} catch (H) {
					setTimeout(arguments.callee, 0);
					return
				}
				E()
			})()
		}
		if (Fe.isOpera) {
			document.addEventListener("DOMContentLoaded", function() {
				if (B) {
					return
				}
				for ( var H = 0; H < document.styleSheets.length; H++) {
					if (document.styleSheets[H].disabled) {
						setTimeout(arguments.callee, 0);
						return
					}
				}
				E()
			}, false)
		}
		if (Fe.isSafari) {
			var F;
			( function() {
				if (B) {
					return
				}
				if (document.readyState != "loaded"
						&& document.readyState != "complete") {
					setTimeout(arguments.callee, 0);
					return
				}
				if (F === undefined) {
					F = 0;
					var K = document.getElementsByTagName("style");
					var I = document.getElementsByTagName("link");
					if (K) {
						F += K.length
					}
					if (I) {
						for ( var J = 0, H = I.length; J < H; J++) {
							if (I[J].getAttribute("rel") == "stylesheet") {
								F++
							}
						}
					}
				}
				if (document.styleSheets.length != F) {
					setTimeout(arguments.callee, 0);
					return
				}
				E()
			})()
		}
		if (window.attachEvent) {
			window.attachEvent("onload", E)
		} else {
			window.addEventListener("load", E, false)
		}
	}
	return function(F) {
		if (typeof F != "function") {
			return false
		}
		A();
		if (B) {
			F()
		} else {
			C[C.length] = F
		}
	}
}();
Fe.ready = Fe.Dom.ready;
Fe.css = function(O, D) {
	if (!O || !D) {
		return null
	}
	O = typeof O == "string" ? document.getElementById(O) : O;
	var F = !window.opera && navigator.userAgent.indexOf("MSIE") != -1;
	if (D == "float") {
		D = F ? "styleFloat" : "cssFloat"
	}
	D = D.replace(/(-[a-z])/gi, function(I, H) {
		return H.charAt(1).toUpperCase()
	});
	if ("opacity" == D && F) {
		var E = O.style.filter;
		return E && E.indexOf("opacity=") >= 0 ? (parseFloat(E
				.match(/opacity=([^)]*)/)[1]) / 100)
				+ "" : "1"
	}
	var C = null;
	if (C = O.style[D]) {
		return C
	}
	if (O.currentStyle) {
		return O.currentStyle[D]
	} else {
		var B = O.nodeType == 9 ? O : O.ownerDocument || O.document;
		if (B.defaultView && B.defaultView.getComputedStyle) {
			var A = B.defaultView.getComputedStyle(O, "");
			if (A) {
				return A[D]
			}
		}
	}
	return null
};
Fe.Dom.getStyle = function(A, B) {
	return Fe.css(A, B)
};
Fe.Dom.getOwnerDocument = function(A) {
	return A.nodeType == 9 ? A : A.ownerDocument || A.document
};
Fe.isGecko = (navigator.userAgent.indexOf("Gecko") > -1
		&& navigator.userAgent.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/
		.test(navigator.userAgent)) ? RegExp.$1 : 0;
Fe.isWebkit = (navigator.userAgent.indexOf("KHTML") > -1 && /AppleWebKit\/([^\s]*)/
		.test(navigator.userAgent)) ? RegExp.$1 : 0;
Fe.isStrict = (document.compatMode == "CSS1Compat");
Fe.Dom.getOffset = function(H) {
	var B = Fe.Dom.getOwnerDocument(H);
	var A = Fe.isGecko > 0 && B.getBoxObjectFor
			&& Fe.Dom.getStyle(H, "position") == "absolute"
			&& (H.style.top === "" || H.style.left === "");
	var C = {
		left :0,
		top :0
	};
	var E = (Fe.isIE && !Fe.isStrict) ? B.body : B.documentElement;
	if (H == E) {
		return C
	}
	var F = null;
	var Q;
	if (H.getBoundingClientRect) {
		Q = H.getBoundingClientRect();
		C.left = Q.left
				+ Math.max(B.documentElement.scrollLeft, B.body.scrollLeft);
		C.top = Q.top + Math.max(B.documentElement.scrollTop, B.body.scrollTop);
		C.left -= B.documentElement.clientLeft;
		C.top -= B.documentElement.clientTop;
		if (Fe.isIE && !Fe.isStrict) {
			C.left -= 2;
			C.top -= 2
		}
	} else {
		if (B.getBoxObjectFor && !A) {
			Q = B.getBoxObjectFor(H);
			var D = B.getBoxObjectFor(E);
			C.left = Q.screenX - D.screenX;
			C.top = Q.screenY - D.screenY
		} else {
			F = H;
			do {
				C.left += F.offsetLeft;
				C.top += F.offsetTop;
				if (Fe.isWebkit > 0
						&& Fe.Dom.getStyle(F, "position") == "fixed") {
					C.left += B.body.scrollLeft;
					C.top += B.body.scrollTop;
					break
				}
				F = F.offsetParent
			} while (F && F != H);
			if (Fe.isOpera > 0
					|| (Fe.isWebkit > 0 && Fe.Dom.getStyle(H, "position") == "absolute")) {
				C.top -= B.body.offsetTop
			}
			F = H.offsetParent;
			while (F && F != B.body) {
				C.left -= F.scrollLeft;
				if (!Fe.isOpera || F.tagName != "TR") {
					C.top -= F.scrollTop
				}
				F = F.offsetParent
			}
		}
	}
	return C
};
Fe.Ajax = function(A) {
	this.url = "";
	this.data = "";
	this.async = true;
	this.duration = -1;
	this.overtime = false;
	this.username = "";
	this.password = "";
	this.method = "GET";
	if (typeof A == "object" && A) {
		for ( var B in A) {
			this[B] = A[B]
		}
	}
};
( function() {
	Fe.Ajax.prototype.request = function(F, Q) {
		var E = this, J = A(), D = J.xhr;
		J.active = true;
		E.url = F;
		if (typeof Q == "string" && Q) {
			E.data = Q
		}
		if (typeof E.onexecute == "function") {
			E.onexecute(D)
		}
		try {
			if (!E.username) {
				D.open(E.method, E.url, E.async)
			} else {
				D.open(E.method, E.url, E.async, E.username, E.password)
			}
			if (E.async) {
				D.onreadystatechange = K
			}
			if (E.method.toUpperCase() == "POST") {
				D.setRequestHeader("Content-Type",
						"application/x-www-form-urlencoded")
			}
			E.beginTime = new Date().getTime();
			if (E.duration > 0) {
				I()
			}
			D.send(E.data)
		} catch (H) {
			if (typeof E.onerror == "function") {
				E.onerror(H)
			}
		}
		if (!E.async) {
			K()
		}
		function K() {
			if (D.readyState == 4) {
				try {
					D.status
				} catch (L) {
					if (typeof E.ondisconnect == "function") {
						E.ondisconnect(D)
					}
					J.active = false;
					return
				}
				E.duration = -1;
				if (!E.overtime) {
					if (typeof E["on" + D.status] == "function") {
						E["on" + D.status](D)
					}
					if (D.status == 200 && D.statusText.toLowerCase() == "ok") {
						if (typeof E.onsuccess == "function") {
							E.onsuccess(D)
						}
					} else {
						if (typeof E.onfailure == "function") {
							E.onfailure(D)
						}
					}
				}
				J.active = false;
				D.onreadystatechange = function() {
				}
			}
		}
		function I() {
			if (E.duration == -1) {
				return
			}
			if (new Date().getTime() - E.beginTime > E.duration) {
				E.duration = -1;
				try {
					D.abort()
				} catch (L) {
				}
				E.overtime = true;
				J.active = false;
				if (typeof E.ontimeout == "function") {
					E.ontimeout(D)
				}
			}
			setTimeout( function() {
				I()
			}, 10)
		}
	};
	var B = [];
	function A() {
		var D = B;
		for ( var F = null, E = 0; E < D.length; E++) {
			F = D[E];
			if (!F.active) {
				break
			}
		}
		if (E >= D.length) {
			F = {
				active :false,
				xhr :C()
			};
			D[D.length] = F
		}
		return F
	}
	function C() {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest()
		} else {
			if (window.ActiveXObject) {
				var D = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
						"MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0",
						"Msxml2.XMLHTTP", "MSXML.XMLHttp", "Microsoft.XMLHTTP" ];
				for ( var F = 0; D[F]; F++) {
					try {
						return new ActiveXObject(D[F])
					} catch (E) {
					}
				}
				throw new Error("Your browser do not support XMLHttp")
			}
		}
	}
})();
Fe.Ajax.request = function(A, B, D) {
	if (typeof B == "object" && B) {
		D = B;
		B = null
	} else {
		if (typeof B == "function") {
			D = D || {};
			D.onsuccess = B;
			B = null
		}
	}
	var C = new Fe.Ajax(D);
	C.request(A, B);
	return C
};
Fe.Ajax.get = function(B, A) {
	return this.request(B, A)
};
Fe.Ajax.post = function(C, A, B) {
	return this.request(C, A, {
		method :"POST",
		onsuccess :B
	})
};
String.prototype.trim = function() {
	return this.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
};
String.prototype.byteLength = function() {
	return this.replace(/[^\u0000-\u007f]/g, "\u0061\u0061").length
};
String.prototype.format = function() {
	if (arguments.length == 0) {
		return this
	}
	for ( var D = this, C = 0; C < arguments.length; C++) {
		D = D.replace(new RegExp("\\$" + C + "\\$", "g"), arguments[C])
	}
	return D
};
if (! [].push) {
	Array.prototype.push = function() {
		for ( var B = 0; B < arguments.length; B++) {
			this[this.length] = arguments[B]
		}
		return this.length
	}
}
if (! [].pop) {
	Array.prototype.pop = function() {
		var B = this[this.length - 1];
		this.length--;
		return B
	}
}
if (typeof (HTMLElement) != "undefined" && !window.opera) {
	HTMLElement.prototype.__defineGetter__("innerText", function() {
		return this.textContent
	});
	HTMLElement.prototype.__defineSetter__("innerText", function(B) {
		this.textContent = B
	})
}
function bind(E, F) {
	if (arguments <= 1) {
		return E
	}
	var D = Array.prototype.slice.call(arguments, 2);
	if (D.length > 0) {
		return function() {
			E.apply(F, D.concat(Array.prototype.slice.call(arguments)))
		}
	}
	return function() {
		E.apply(F, arguments)
	}
}
function G(B) {
	return Fe.G(B)
}
function lockButton(B) {
	B = G(B);
	B.disabled = true;
	setTimeout( function() {
		B.disabled = false
	}, 3000)
}
function insertWbr(I, F) {
	if (I.length <= F) {
		return I
	}
	var K = document.createElement("textarea");
	try {
		K.innerHTML = I
	} catch (H) {
		K.value = I
	}
	var J = K.value;
	J = J.replace(new RegExp("(\\S{" + F + "})", "img"), "$1<wbr>");
	J = J.replace(/<wbr>/img, "\u0001").replace(/<br>/img, "\u0002").replace(
			/</img, "&lt;").replace(/>/img, "&gt;")
			.replace(/\u0002/img, "<br>").replace(/\u0001/img, "<wbr>");
	if (Fe.isOpera) {
		J.replace(/<wbr>/img, "<i style='margin-left:-4px;opacity: 0'> </i>")
	}
	return J
}
function addEvent(E, F, D) {
	Fe.on(E, F, D)
}
function proxy() {
	var H = [];
	for ( var I = 0, E = arguments.length; I < E; I++) {
		H[I] = arguments[I]
	}
	var F = H[0];
	H.shift();
	return function() {
		F.apply(null, H)
	}
}
function changeClassName(I, L, H) {
	var K = G(I);
	var M = new RegExp("\\b" + L + "\\b", "g");
	var J = K.className.replace(L, "");
	K.className = (H ? J + " " + L : J);
	return true
}
function addClassName(D, C) {
	changeClassName(D, C, true)
}
function removeClassName(D, C) {
	changeClassName(D, C, false)
}
function getCookie(E) {
	var F = "(?:; )?" + E + "=([^;]*);?";
	var D = new RegExp(F);
	if (D.test(document.cookie)) {
		return decodeURIComponent(RegExp["$1"])
	} else {
		return null
	}
}
function setCookie(K, J, O, N, I, L) {
	var M = K + "=" + encodeURIComponent(J);
	if (O) {
		M += "; expires=" + O.toGMTString()
	}
	if (N) {
		M += "; path=" + N
	}
	if (I) {
		M += "; domain=" + I
	}
	if (L) {
		M += "; secure"
	}
	document.cookie = M
}
function FactoryXMLHttpRequest() {
	if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP")
	} else {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest()
		} else {
			return null
		}
	}
}
function request(F, D, E) {
	Fe.Ajax.get(F, D)
}

Array.prototype.clone = function() {
	var A = [];
	for ( var B = 0; B < this.length; B++) {
		if ("object" == typeof (this[B])
				&& "undefined" != typeof (this[B].length)) {
			A[B] = this[B].clone()
		} else {
			A[B] = this[B]
		}
	}
	return A
};
String.prototype.jsdecode = function() {
	return this.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g,
			"\\t")
};
String.prototype.htmldecode = function() {
	return this.replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&gt;/g,
			">").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
};
function userLogin(B, C, A) {
	if (B) {
		onLoginSuccess = B
	} else {
		onLoginSuccess = defalutLoginSuccess
	}
	if (C) {
		onLoginFailed = C
	} else {
		onLoginFailed = defaultLoginFail
	}
	Pop.show("登录", {
		url :getActionMappingURL("/login?c="+A),
		width :400,
		height :366
	})
}

function userRegister(B, C, A) {
	if (B) {
		onLoginSuccess = B
	} else {
		onLoginSuccess = defalutLoginSuccess
	}
	if (C) {
		onLoginFailed = C
	} else {
		onLoginFailed = defaultLoginFail
	}
	Pop.show("注册", {
		url :getActionMappingURL("/login?c="+A),
		width :550,
		height :500
	})
}
var defalutLoginSuccess = function() {
	window.location.reload()
};
var onLoginSuccess = defalutLoginSuccess;
var loginSuccess = function() {
	Pop.hide();
	onLoginSuccess()
};
var defaultLoginFail = function() {
	window.location = "http://passport.baidu.com/?login&tpl=yx&u="
			+ escape("http://youxi.baidu.com/")
};
var onLoginFailed = defaultLoginFail;
var loginFailed = function() {
	Pop.hide();
	onLoginFailed()
};


var Pop = {
	onOk : function() {
	},
	onclosed : function() {
	},
	create : function() {
		if (!G("popDiv")) {
			var F = document.createElement("div");
			F.id = "shadowDiv";
			var E = document.createElement("div");
			E.id = "popDiv";
			var D = document.createElement("iframe");
			D.id = "shadowIframe";
			D.style.filter = "alpha(opacity=0)";
			D.style.opacity = "0";
			D.style.position = "absolute";
			E.style.width = E.style.height = "500px";
			E.style.border = "4px solid #e4e4e4";
			E.innerHTML = '<div style="text-align:right;"><input type="button" id="dialogBoxClose" onclick="Pop.hide();return false" title="关闭" style="display:block;width:16px;height:16px;float:right;background:url(http://img.baidu.com/img/iknow/popclose.gif) no-repeat 0 0;border:0;margin:0;padding:0;" onmouseover="this.style.backgroundPosition=\'-16px 0\'" onmouseout="this.style.backgroundPosition=\'0 0\'" /><div style="clear:both"></div></div><div id="popBody" style="display:none;text-align:center;padding:20px;font-size:14px;"></div><div id="ifrDiv" style="height:100%"><iframe id="popIframe" name="popIframe" width="100%" frameborder="0" height="95%" scrolling="no" src="about:blank"></iframe></div>';
			document.body.insertBefore(D, document.body.firstChild);
			document.body.insertBefore(E, document.body.firstChild);
			document.body.insertBefore(F, document.body.firstChild)
		}
	},
	resize : function(R, S, X) {
		Pop.create();
		var Q = Fe.body();
		var T = Q.scrollTop;
		var W = Q.documentWidth || 500;
		var P = Q.documentHeight || 500;
		var U = G("shadowDiv");
		var Z = G("popDiv");
		var a = G("shadowIframe");
		var V = S || parseInt(Z.style.width, 10) || 500;
		var c = X || parseInt(Z.style.height, 10) || 500;
		U.style.width = W + "px";
		U.style.height = P + "px";
		a.style.width = (W - 20) + "px";
		a.style.height = (P - 20) + "px";
		U.style.left = U.style.top = "0px";
		a.style.top = a.style.left = "5px";
		var Y = (Q.viewWidth - V) / 2;
		var b = (Q.viewHeight - c) / 2 + T;
		if (Y < 1) {
			Y = T
		}
		if (b < 1) {
			b = "20"
		}
		Z.style.left = Y + "px";
		Z.style.top = b + "px";
		Z.style.width = V + "px";
		Z.style.height = c + "px"
	},
	hide : function() {
		Pop.onclosed();
		try {
			G("popDiv").style.display = "none";
			G("shadowDiv").style.display = "none";
			G("shadowIframe").style.width = "0px";
			G("shadowIframe").style.height = "0px";
			G("shadowIframe").style.display = "none"
		} catch (D) {
		}
		try {
			G("popIframe").src = "about:blank"
		} catch (C) {
			try {
				document.frames.popIframe.location = "about:blank"
			} catch (C) {
			}
		}
		Fe.un(window, "resize", Pop.resize);
		Fe.un(document, "onkeydown", Pop.keyListener)
	},
	keyListener : function(D) {
		D = window.event || D;
		var C = D.which || D.keyCode;
		if (27 == C) {
			Pop.hide()
		}
	},
	config : function(I, H) {
		if (I) {
		}
		Pop.onclosed = H.onclosed || function() {
		};
		if (H.url) {
			if (H.url != true) {
				if (H.nocache) {
					H.url = H.url + (H.url.match(/\?/) ? "&" : "?") + "_t="
							+ (new Date().getTime())
				}
				try {
					G("popIframe").src = H.url
				} catch (K) {
					try {
						document.frames.popIframe.location = H.url
					} catch (K) {
					}
				}
			}
			G("ifrDiv").style.display = "block";
			G("popBody").style.display = "none"
		} else {
			if (H.info) {
				G("ifrDiv").style.display = "none";
				G("popBody").style.display = "block";
				G("popBody").innerHTML = H.info
			}
		}
		var M = H.width || 450;
		var J = H.height || 400;
		var L = G("popDiv");
		L.style.width = M + "px";
		L.style.height = J + "px"
	},
	show : function(D, C) {
		Pop.create();
		Pop.config(D, C);
		Pop.resize();
		G("popDiv").style.display = "block";
		G("shadowDiv").style.display = "block";
		G("shadowIframe").style.display = "";
		Fe.on(window, "resize", Pop.resize);
		Fe.on(document, "onkeydown", Pop.keyListener)
	},
	confirm : function(E, F) {
		Pop.onOk = proxy( function(A) {
			Pop.onclosed = function() {
			};
			Pop.hide();
			A()
		}, F.ok || Pop.hide);
		var D = "<span class='f14'>$2$</span><br><br><p align='center'><input type='button'value='$0$' onclick='Pop.onOk();'>&nbsp;&nbsp;&nbsp;&nbsp;<input type='button'value='$1$' onclick='Pop.hide()'></p>";
		D = D.format(F.okInfo || "确定", F.cancelInfo || "取消", E);
		Pop.show(F.title || "信息确认", {
			info :D,
			width :(F.width || 300),
			height :(F.height || 150),
			onclosed :F.cancel
		})
	}
};
function TopLoginSuccess() {
	window.location.reload()
}

function MyWanbaLoginSuccess() {
	window.location.href=getActionMappingURL("/my_game");
}

function DeveloperLoginSuccess() {
	window.location.href=getActionMappingURL("/dev/developer");
}

function TopLoginFail() {
	window.location = "http://passport.baidu.com/?login&tpl=yx&u="
			+ escape(location.href)
}

window.IMOld=(function(){var A=null,S=0,B=null,H=null;C.interval=30*1000;C.url="http://fetch.im.baidu.com/ihaloader?op=msgcount&charset=gbk&callback=IMOld&refer=zhidao.baidu.com";C.reset=function(){C.onchange(0);D(0);if(C.timer){clearInterval(C.timer)}I()};C.fetch=function(){A=F();H=new Date().getTime();if(A){A=A.split("|");H=parseInt(A[1],36);S=A[0];A=null}setTimeout(function(){E();I();if(S>0&&typeof(C.onchange)=="function"){C.onchange(S)}},1000)};function E(){D(S);B=document.createElement("SCRIPT");B.type="text/javascript";B.src=C.url+(C.url.indexOf("?")>0?"&":"?")+".stamp="+new Date().getTime().toString(36);document.getElementsByTagName("HEAD")[0].appendChild(B)}function D(J){var K=new Date(),L=K.getTime();K.setTime(L+3*C.interval);document.cookie="IM_old="+J+"|"+L.toString(36)+";domain=baidu.com;path=/;expires="+K.toGMTString();if(B){B.parentNode.removeChild(B);B=null}}function F(){var J=document.cookie.match(/(^| )IM_old=([^;]*)(;|$)/);if(J!=null){return unescape(J[2])}return null}function I(){C.timer=setInterval(function(){var K=F(),J=0,L=0;if(K){K=K.split("|");L=parseInt(K[1],36);J=K[0];K=null}if(Math.abs(new Date().getTime()-L)>C.interval){E()}if(S!=J){S=J;if(typeof(C.onchange)=="function"){C.onchange(J)}}},500)}function C(J){D(J)}return C})();
window.startBaiduHi=(function(){var C=navigator.userAgent.indexOf("MSIE")>-1&&!window.opera,E=navigator.userAgent.indexOf("Firefox")!=-1;function A(){var H="";try{H=new ActiveXObject("WebDetect.Detect").GetVersion()}catch(B){}try{if(typeof(navigator.mimeTypes["application/x-baiduhi"])=="object"){H=".*"}}catch(B){}return H}function F(I){var H=new Date(),B=H.getTime();H.setTime(B+30*1000);document.cookie="IM_add="+escape(I+"|zhidao.baidu.com|"+(new Date().getTime()).toString(36))+";domain=baidu.com;path=/;expires="+H.toGMTString();if(!/(^| )IM_=/.test(document.cookie)){if(F.f&&F.f.tagName=="FORM"){F.f.submit();return}var B=document.createElement("DIV");B.style.display="none";document.body.insertBefore(B,document.body.firstChild);B.innerHTML="<form name='__IM_REDIRECT_FORM' method='get' target='baidu_webim' action='http://web.im.baidu.com'></form>";F.f=document.forms.__IM_REDIRECT_FORM;F.f.submit();B=null}}function D(B){var H=[];for(prop in B){if(prop!="onim"&&prop!="onwebim"){H.push(prop+"="+B[prop])}}return(H.length>0?"&"+H.join("&"):"")}function M(H,K,I,J){var B=document.createElement("script");document.body.appendChild(B);B.src="http://im.baidu.com/nop?type="+H+"&sid="+K+"&id="+I+D(J)+"&t="+new Date().getTime()}return function(L,H,B,J){M(L,H,B,J);var I=A(),N;if(I==""){if(/active|c2cmsg|message|addcontact|addgroup|creategroup/i.test(L)){F(B);if(J&&J.onwebim){J.onwebim()}}return false}if(!(new RegExp(I.replace(/(\.)/g,"\\."),"i").test(L))){return false}var K="baidu://"+L+"/?sid="+H+"&id="+B+D(J);if(C){K=K+"&browser=IE"}else{if(E){K=K+"&browser=FF&promo=c2cmsg|message|addgroup|creategroup|addcontact"}}if(J&&J.onim){J.onim()}if(document.getElementById("__IM_REDIRECT_IFRAME")){N=document.getElementById("__IM_REDIRECT_IFRAME")}else{N=document.createElement("iframe");N.style.display="none";N.id="__IM_REDIRECT_IFRAME";document.body.appendChild(N)}N.src=K}})();
var webimIknow=(function(){var T=this;var O=null;var S=100;var P=300;var U=6;function R(){T.im=G("webimmsg");if(!T.im){return}T.im.innerHTML="&nbsp;|&nbsp;<img alt='发起即时会话' align='absmiddle' src='http://img.baidu.com/img/iknow/images/hi.gif'/>";var B=document.createElement("span");B.id="webim_msgcount";B.style.visibility="hidden";B.innerHTML="<span></span>";T.im.appendChild(B);T.imCount=B;T.userName=G("usercenter").innerHTML;var A=document.createElement("span");A.id="im_count";A.innerHTML="<span></span>";T.im.appendChild(A);T.count=A;Fe.hide(A);N();IMOld.onchange=M;IMOld.url+="&un="+T.userName;IMOld.fetch()}function N(){T.im.title=T.count.title="发起即时会话";T.im.onclick=Q}function Q(){startBaiduHi("active",T.userName,"",{clk:"icon",src:"zhidao",stat:"userbar"});S=100}function M(A){if(A>0){T.count.innerHTML="<b>"+A+"</b>";T.imCount.innerHTML="10"+A;S=0;clearInterval(O);O=setInterval(W,P)}else{V()}}function W(){Fe[S%2?"hide":"show"](T.count);S++;if(S>U){clearInterval(O);Fe.show(T.count)}}function V(){clearInterval(O);Fe.hide(T.count);T.imCount.innerHTML=""}Fe.ready(R)})();

function RedirectLoginSuccess() {
	window.location.href=getActionMappingURL("/login?c=autoRedirect");
}

function autoRedirect(reUrl){
	var urls = getActionMappingURL("/login");
	jQuery.post(urls,{c:"checkLogin",toURL:reUrl},function(txt){
		var obj=eval("("+txt+")");
		var result=obj.result;
		if(result==1){
			self.location=reUrl;
		}
		else{
			userLogin(RedirectLoginSuccess, TopLoginFail,'popLogin');
			return false;
		}
	});
}

function popHi(hiName){
	startBaiduHi("message","",hiName,{clk:"icon",src:"wanba"});
}

var Msg_loopNum = 5;
function showBaiduMsg(){
	if(typeof redmsg != 'undefined') {
		if (!redmsg || redmsg.length < 1) return;
		document.getElementById('mnum').innerHTML = redmsg;
	}else{
		if(Msg_loopNum > 0) {setTimeout(function(){showBaiduMsg();},100);Msg_loopNum--;}
	}
}

function logBehavior(logTitle) {
	var urls = "/user_behavior.xhtml";
		jQuery.post(urls, {c:logTitle}, function(data){ });
 };

var Hi=(function(){
        var contact=function(serviceHi ){
            startBaiduHi("message","",serviceHi,{
                clk:"icon",src:"lite"
            });
        }
        return {
            contact:contact
        }
})();
