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

function send(codes, element) {
	if (document.getElementsByTagName("html")[0].classList.contains("lock")) {
		console.log ("I cant do that sir (currently sending the previous command)")
	} else {
		var xhttp = new XMLHttpRequest();
		element.classList.add("lock")
		element.innerHTML = "<img src='http://www.ottawacityrafting.com/media/img/static/scan-wristband.gif' id='transmitter'>" + element.innerHTML
		document.getElementsByTagName("html")[0].classList.add("lock")
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				element.classList.remove("lock")
				document.getElementById("transmitter").outerHTML = ""
				delete document.getElementById("transmitter")
				document.getElementsByTagName("html")[0].classList.remove("lock")
			}
		};
		xhttp.open("GET", config.ip2ir_backend_server + "/?buttons=" + codes, true);
		xhttp.send();
	}
}

function resetFilters () {
	document.getElementsByTagName("body")[0].className=""

	var anchors = document.getElementsByTagName("a")
	for (i = 0; i < anchors.length; i++) {
		if (anchors[i].classList.contains ("filter-option")) {
			anchors[i].parentElement.classList.remove("selected")
		}
	}
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
