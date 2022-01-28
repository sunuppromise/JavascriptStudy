'use strict';

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/EqkInfoService/getEqkMsg'; /*URL*/
var queryParams =
  '?' +
  encodeURIComponent('serviceKey') +
  '=' +
  '03ibABCYQ6752FOstUUFf2lhmCy1ao8HITv8GsTgHc44EYIBm8tWDbA6VD%2FBY%2BfScTx33qo53jaevmE868xmVQ%3D%3D'; /*Service Key*/
queryParams +=
  '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams +=
  '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams +=
  '&' +
  encodeURIComponent('fromTmFc') +
  '=' +
  encodeURIComponent('20220125'); /**/
queryParams +=
  '&' +
  encodeURIComponent('toTmFc') +
  '=' +
  encodeURIComponent('20220127'); /**/
console.log(url + queryParams);
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      'Status: ' +
        this.status +
        'nHeaders: ' +
        JSON.stringify(this.getAllResponseHeaders()) +
        'nBody: ' +
        this.responseText
    );
    console.log(JSON.stringify(this.getAllResponseHeaders()));
  }
};

xhr.send('');
