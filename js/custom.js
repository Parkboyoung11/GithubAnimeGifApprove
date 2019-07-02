/* 
* Author    : 9fury
* Facebook  : fb.com/sonvuhong9fury
*/


// var refreshIntervalId = setInterval(function(){ 
// 	if (!document.getElementById("9fury_approve")) {
// 		if (review_menu = document.getElementsByClassName("pull-request-review-menu")[0]) {
// 			if(form_action = review_menu.getElementsByClassName("form-actions")[0]) {
// 				var approveButtonHTML = '<button onclick="AddAnimeGif()" id="9fury_approve" style="background-color: #007bff;background-image: linear-gradient(-180deg,#007bff,#007bff 90%);color: #fff;" class="float-left mr-1 btn-sm btn">Approve</button>';
// 				form_action.getElementsByClassName("review-title-with-count")[0].insertAdjacentHTML('beforebegin', approveButtonHTML);
// 			}
// 		}
// 	}
// }, 2000);



var refreshIntervalId = setInterval(function(){ 
	if (!document.getElementById("9fury_approve")) {
		if (review_menu = document.getElementsByClassName("pr-review-tools")[0]) {
			var approveButtonHTML = '<button id="9fury_approve" style="margin-left: 10px;background-color: #007bff;background-image: linear-gradient(-180deg,#007bff,#007bff 90%);color: #fff;" class="float-left mr-1 btn-sm btn">Approve</button>';
			review_menu.getElementsByClassName("js-reviews-container")[0].insertAdjacentHTML('afterend', approveButtonHTML);
			document.getElementById('9fury_approve').onclick = function() {
				var radios = document.getElementsByTagName('input');
				for (var i = 0; i < radios.length; i++) {
					if (radios[i].type === 'radio' && radios[i].value === 'approve') {
				    	radios[i].checked = true;
				    	var animeGifList = ['U77aUf0', 'wn0QkyJ', 'gluRu7T', 'jt2EIG3', 'W0hAGqM', 'Lxz0jlh'];
						var animeGifID = animeGifList[Math.floor(Math.random()*animeGifList.length)];
				        document.getElementById("pull_request_review_body").value = "![image](https://i.imgur.com/" + animeGifID + ".gif)"; 
				        document.getElementsByClassName("pull-request-review-menu")[0].getElementsByClassName("form-actions")[0].getElementsByClassName("btn-primary")[0].click();
				    }
				}
			};
		}
	}
}, 2000);



// var s = document.createElement('script');
// s.src = chrome.extension.getURL('js/BeautyScroll.js');
// s.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(s);





// <button type="submit" id="9fury_approve" class="btn btn-primary"> Comment</button>

// <button type="submit" id="9fury_approve" class="float-left mr-1 btn-sm btn btn-primary">Approve</button>


