/** docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : null;
}

function getBackendParamsByName(cName, pName) {
	if (getCookie(cName)) {
		return getCookie(cName);
	} else if (typeof getBackendParams === 'function') {
		var obj = getBackendParams();
		return obj[pName] && obj[pName][1] ? obj[pName][1] : undefined;
	} else if (typeof requestLink === 'function') {
		var obj = requestLink();
		return obj[pName] && obj[pName][1] ? obj[pName][1] : undefined;
	}
}

function addSessionId() {
	if (!getCookie("sid") && typeof getBackendParams === 'function') {
		var e = getBackendParams(), n = document.getElementsByTagName("a");
		if (e.sessionId && e.sessionId.length > 1 && n.length) {
			for (var t = 0, s = n.length; t < s; t++) {
				if (n[t].pathname === '/web/') {
					n[t].href = '/web/?'+ e.sessionId[0] +'=' + e.sessionId[1];
				}
			}
		}
	} else if (!getCookie("sid") && typeof requestLink === 'function') {
		var e = requestLink(), n = document.getElementsByTagName("a");
		if (e.sessionId && e.sessionId.length > 1 && n.length) {
			for (var t = 0, s = n.length; t < s; t++) {
				if (n[t].pathname === '/web/') {
					n[t].href = '/web/?'+ e.sessionId[0] +'=' + e.sessionId[1];
				}
			}
		}
	}
}

docReady(function() {
	addSessionId();
});