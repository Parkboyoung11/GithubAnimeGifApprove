/* 
* Author    : 9fury
* Facebook  : fb.com/sonvuhong9fury
*/

var beautyScrollHTML = '<div class="Lnk" id="beautyScroll" title="fury Scroll">Beauty Scroll</div>';
document.getElementsByClassName("MovieTabNav")[0].insertAdjacentHTML('beforeend', beautyScrollHTML);

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/BeautyScroll.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);