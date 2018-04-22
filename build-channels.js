var categories = []
var languages = []

document.write("<ul>")
for (var i = 0; i < channels.length; i++) {
	var channel = channels[i]

	document.write("<li data-filter='" + channel.language + "," + channel.category + "'><a onclick=send('" + commaify (channel.channel) + "')>" + channel.name + "</a></li>")

	// collect filter options as we are parsing the array
	categories = arrayUnique(categories.concat(channel.category))
	languages = arrayUnique(languages.concat(channel.language))
}
document.write("</ul>")

drawFilter ("Categories", categories)
drawFilter ("Language", languages)

function drawFilter (name, arrayItems) {
	document.getElementById("filters").innerHTML += "<h4>" + name + "</h4>"
	for (var i = 0; i < arrayItems.length; i++) {
		var item = arrayItems[i]

	document.getElementById("filters").innerHTML += "<a href='#' class='filter-option' onclick='javascript: toggleFilter (\"" + item + "\")'>" + item + "</a>"
	}
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