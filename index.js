// document.getElementsByClassName("vco-slider-container")[0].style.left = -1904 + "px";



// document.getElementsByClassName("vco-text-content").innerHtml.replaceAll('"<span class=" emjundefined">', "").replaceAll('</span>"').replace('<span class=" emjundefined">', "").replace('</span>',"")
// console.log(txt);
// document.getElementsByClassName("vco-text-content-container")[0].childNodes[2].textContent = "hello";

$(function() {
    var len = $(".vco-text-content").length;
    console.log("# of slides: "+ len)
    for (i=0; i < len; i ++)
    {
        // console.log($(".vco-text-content")[i])
        // console.log($(".vco-text-content")[i].textContent);
        var txt = $(".vco-text-content")[i].textContent;

        $($(".vco-text-content")[i]).empty().html(txt);
    }
});