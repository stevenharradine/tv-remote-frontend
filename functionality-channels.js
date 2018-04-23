function toggleFilter (filterName) {
	document.getElementsByTagName("body")[0].classList.toggle(filterName)

	areThereStillFilters()
}

function areThereStillFilters () {
	const cssFilterClassName = "filtered"
	var classList = document.getElementsByTagName("body")[0].classList

	if (classList.length === 1) {
		if (classList.contains(cssFilterClassName)) {
			classList.remove(cssFilterClassName)
		} else {
			classList.add(cssFilterClassName)
		}
	}
}

function send(codes) {
	if (document.getElementsByTagName("html")[0].classList.contains("lock")) {
		console.log ("I cant do that sir (currently sending the previous command)")
	} else {
		var xhttp = new XMLHttpRequest();
		document.getElementsByTagName("html")[0].classList.add("lock")
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				document.getElementsByTagName("html")[0].classList.remove("lock")
			}
		};
		xhttp.open("GET", "http://localhost:8080/?buttons=" + codes, true);
		xhttp.send();
	}
}

function resetFilters () {
	document.getElementsByTagName("body")[0].className=""
}

function generateCssFilters () {
	var buffer = ""
	for (i = 0; i < categories.length; i++) {
		buffer += 'body.' + categories[i] + ' li[data-filter*="' + categories[i] + '"],\n'
	}
	for (i = 0; i < languages.length; i++) {
		buffer += 'body.' + languages[i] + ' li[data-filter*="' + languages[i] + '"],\n'
	}
	console.log (buffer)
}
