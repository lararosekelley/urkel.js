function urkel(a, b, el) {
    var element = typeof el === "undefined" ? document.body : el;
    var nodes = element.childNodes;
    for(var n = 0; n < nodes.length; n++) {
        if(nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = nodes[n].textContent.replace(new RegExp(a, 'gi'), b);
        } else {
            urkel(a, b, nodes[n]);
        }
    }
};

function urkelImg() {
    html = document.body.innerHTML;
    document.body.innerHTML = '<div style="position:absolute;width:400px;height:400px;z-index:10000;"><img src="http://netdna.tvovermind.com/wp-content/uploads/2012/11/steve-urkel-gif-12.gif"></div>' + html;
};

urkel('','Did I do that?');
urkelImg();