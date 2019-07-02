/* 
* Author    : 9fury
* Facebook  : fb.com/sonvuhong9fury
*/



var bests = ['2018-07-22', '2018-07-28', '2018-07-29', '2018-07-30', '2018-07-31', '2018-08-01', '2018-08-02', '2018-08-03', '2018-08-04', '2018-08-05', '2018-08-09', '2018-08-11', '2018-08-15', '2018-08-19', '2018-08-21', '2018-08-23', '2018-08-26', '2018-08-27', '2018-08-31', '2018-09-02', '2018-09-08', '2018-09-09', '2018-09-15', '2018-09-25', '2018-09-29', '2018-10-02', '2018-10-03', '2018-10-04', '2018-10-05', '2018-10-06', '2018-10-13', '2018-09-30', '2018-10-23', '2018-10-27', '2018-10-30', '2018-10-31', '2018-11-01', '2018-11-02', '2018-11-03', '2018-11-07', '2018-11-13', '2018-11-20', '2018-11-10', '2018-12-04', '2018-12-08', '2018-12-09', '2018-12-11', '2018-12-12', '2018-12-13', '2018-12-14', '2018-12-15', '2018-12-22', '2019-01-01', '2019-01-07', '2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11', '2019-01-12', '2019-01-15', '2019-01-22', '2019-02-06', '2019-02-07', '2019-02-08', '2019-02-12', '2019-02-16', '2019-02-19', '2019-02-23', '2019-02-26', '2019-03-02', '2019-03-06', '2019-03-07', '2019-03-08'];
var usui = ['2018-07-09', '2018-07-11', '2018-09-19', '2018-11-18', '2019-04-01', '2019-04-13', '2019-04-15', '2019-05-07',];
// var dates = ['2018-09-25', '2018-09-29', '2018-10-02', '2018-10-03', '2018-10-04', '2018-10-05', '2018-10-06', '2018-10-13', '2018-09-30', '2018-10-23', '2018-10-27', '2018-10-30', '2018-10-31', '2018-11-01', '2018-11-02', '2018-11-03', '2018-11-07', '2018-11-13', '2018-11-20', '2018-11-10', '2018-12-04', '2018-12-08', '2018-12-09', '2018-12-11', '2018-12-12', '2018-12-13', '2018-12-14', '2018-12-15', '2018-12-22', '2019-01-01', '2019-01-07', '2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11', '2019-01-12', '2019-01-15', '2019-01-22', '2019-02-06', '2019-02-07', '2019-02-08', '2019-02-12', '2019-02-16', '2019-02-19', '2019-02-23', '2019-02-26', '2019-03-02', '2019-03-06', '2019-03-07', '2019-03-08'];
var elements = document.getElementsByClassName("day");
for (i = 0; i < elements.length; i++) {
  if(bests.includes(elements[i].dataset.date)) {
  	elements[i].style.fill = "#196127";
  }else {
  	if(usui.includes(elements[i].dataset.date)) {
  		elements[i].style.fill = "#ebedf0";
  	}
  }

  
}