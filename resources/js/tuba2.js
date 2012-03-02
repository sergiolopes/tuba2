(function() {

	function hasClass(element, className) {
			return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
	}

	function highlight() {
		// TODO SyntaxHighlighter.defaults['html-script'] = true; // use only in HTML
		SyntaxHighlighter.defaults['toolbar'] = false;
		SyntaxHighlighter.defaults['auto-links'] = false;

		var elements = document.querySelectorAll('pre.code');
		for (var i = 0; i < elements.length; i++) {
			var el = elements[i];
			var opt = { };

			console.log(el);

			if (hasClass(el, 'text')) continue;
			
			if (hasClass(el, 'numbered')) 
				opt.gutter = true;
			else
				opt.gutter = false;

			var h = el.getAttribute('data-highlight');
			if (h != undefined) {
				opt.highlight = h.split(',');
			}

			opt.brush = (" "+el.className+" ").replace(' code ','').replace(' numbered ','').replace(' ','');
			
			SyntaxHighlighter.highlight(opt, el);
		}
	}

	window.addEventListener('load', function(){
		highlight();
	});

})();