var exLinks = document.querySelectorAll('a[href^="http"]')
console.log(exLinks);

for (var i = 0; i < exLinks.length; i++){
    // console.log(exLinks[i]);
    if (!exLinks[i].hasAttribute("target")){
        exLinks[i].setAttribute("target","_blank");

    }
}