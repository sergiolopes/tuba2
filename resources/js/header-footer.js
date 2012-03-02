(function() {

	function getParams() {
		var params = {};
		window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
		params[key] = decodeURIComponent(value);
		});
		return params;
	}

	function applyTemplate(template, context) {
		var result = template;
		for (var key in context) {
			if (context[key])
			result = result.replace('\['+key+'\]',context[key]);
		}
		return result;
	}

	window.addEventListener('load', function() {
		var params = getParams();

		// even? odd?
		if (parseInt(params.page) % 2 == 0) {
			document.body.className += " odd";
		} else {
			document.body.className += " even";
		}

		// any chapter starts here?
		if (chaptersStarts.indexOf('|' + params.page + '|') !== -1 || parseInt(params.page) === 0) {
			document.body.className += " openchapter";
		}

		// parse special vars
		document.body.innerHTML = applyTemplate(document.body.innerHTML, params);
	});

})();
