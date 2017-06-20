  
function changeText() {
    var t = $("span.imp"),
        e = sentences[counter],
        n = t.text(),
        a = setInterval(function() {
            0 != n.length ? (n = n.slice(0, -1), t.text(n)) : (setTimeout(function() {
                var n = setInterval(function() {
                    t.text().length != e.length ? t.text(e.slice(0, t.text().length + 1)) : (setTimeout(function() {
                        counter >= sentences.length - 1 ? counter = 0 : counter++, changeText()
                    }, 3e3), clearInterval(n))
                }, 60)
            }, 60), clearInterval(a))
        }, 60)
}

var sentences = ["Web Designing is so much fun ", "Missing Me..?? Aww... Love you too.. :* ", "This text is subjected to change.. ", "This page is a script within a script. ","Destroying Boundaries and Pushing Expectations ", "Copyright. All Rights Reserved. ", "See Ya! ", "Made By Dewansh Rawat and possibly Sublime Text "],
    counter = 0;
setTimeout(changeText, 3e3), $(".hide_children").each(function() {
    var t = 0;
    $(this).children().each(function() {
        $(this).css({
            "transition-delay": t.toString() + "s"
        }), t += .2
    })
}),
$
