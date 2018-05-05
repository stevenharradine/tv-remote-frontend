var categories = []
var languages = []

document.write("<ul class='channelList'>")
for (var i = 0; i < channels.length; i++) {
	var channel = channels[i]

	document.write("<li data-filter='" + channel.language + "," + arrayRemoveSpaces(channel.category) + "'><a onclick=\"send('" + commaify (channel.channel) + "', this)\"><img class='logo' src='" + getIcon (channel.icon) + "' />" + channel.name + "</a></li>")

	// collect filter options as we are parsing the array
	categories = arrayUnique(categories.concat(channel.category))
	languages = arrayUnique(languages.concat(channel.language))
}
document.write("</ul>")

drawFilter ("Categories", categories)
drawFilter ("Language", languages)

function getIcon (icon) {
	if (icon !== null) {
		if (icon.indexOf("lookup:") === 0) {
			return logos[icon.split(":")[1]]
		} else {
			return icon
		}
	}
}

function drawFilter (name, arrayItems) {
	var buffer = ""
	buffer += "<h4>" + name + "</h4>"
	buffer += "<ul class='filters'>"
	for (var i = 0; i < arrayItems.length; i++) {
		var item = arrayItems[i]

		buffer += "<li><a class='filter-option' onclick='javascript: toggleFilter (\"" + removeSpaces(item) + "\"); this.parentElement.classList.toggle(\"selected\");'>" + item + "</a></li>"
	}
	buffer += "</ul>"

	document.getElementById("filters").innerHTML += buffer
}

function commaify (channel_number) {
	channel_number_str = channel_number.toString()
	comma_channel_number_str = ""

	for (var i = 0; i < channel_number_str.length; i++) {
		comma_channel_number_str += channel_number_str.charAt(i) + (i < channel_number_str.length - 1 ? "," : "")
	}

	return comma_channel_number_str
}

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

function arrayRemoveSpaces (inArray) {
	var newArray = Array()

	for (var i = 0; i < inArray.length; i++) {
		newArray.push (removeSpaces(inArray[i]))
	}

	return newArray
}

function removeSpaces (str) {
	return str.replace(/\s/g, '')
}