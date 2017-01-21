/*
2017-01-21 22:45
2dfa843b02427819d8bdf8271bb84a3c md5 hash karşılığı alparslan olarak dönüştürülmüştür. (Kullanıcı adı)
Orjinal fonksiyon değiştirilerek şifre ekrana yazılıyor.
*/

function logit(log) {
$("#govde").html($("#govde").html()+log+"<br>");
  
}

$(document)['ready'](function() {
     $('#loginform')['submit'](function(_0x34b0x1) {
         _0x34b0x1['preventDefault']();
         var _0x34b0x2 = true;
         var _0x34b0x3 = $('input[name="username"]')['val']();
         var _0x34b0x4 = $('input[name="password"]')['val']();
         var _0x34b0x5 = new Array('b5', '1c44', 'c6', '24c1', 'e6', '2b93', 'da', '1fd4', 'b1');
         if (CryptoJS.MD5(_0x34b0x3).toString() === '2dfa843b02427819d8bdf8271bb84a3c' && _0x34b0x4['length'] === (18 / 3 + 6 - 3)) {
             for (i = 0; i < _0x34b0x3['length']; i++) {
                 if (i % 2 === 0) {
                   logit(_0x34b0x3['charAt'](i) +"(user["+i+"]) "+ _0x34b0x4['charAt'](i)+"(pass["+i+"]) !== "+_0x34b0x5[i]);
                   logit(i+": "+((_0x34b0x3['charAt'](i)['charCodeAt'](0)) +"(user["+i+"]-decimal) "+ "+" +(_0x34b0x4['charAt'](i)['charCodeAt'](0))).toString(16)+"(pass["+i+"]-decimal) !== "+_0x34b0x5[i]+" dec:"+parseInt(_0x34b0x5[i], 16));
         			code=parseInt(_0x34b0x5[i], 16)-(_0x34b0x3['charAt'](i)['charCodeAt'](0))
                    logit("<h5 style='color:green'>"+String.fromCharCode(code)+"</h5>")
                   if (((_0x34b0x3['charAt'](i)['charCodeAt'](0)) + (_0x34b0x4['charAt'](i)['charCodeAt'](0))).toString(16) !== _0x34b0x5[i]) {
                         _0x34b0x2 = false;
                     }
                 } else {
                   logit(i+": "+_0x34b0x5[i]+" !== "+((_0x34b0x3['charAt'](i)['charCodeAt'](0)) +"user["+i+"]-decimal *"+ (_0x34b0x4['charAt'](i)['charCodeAt'](0))).toString(16)+"pass["+i+"]-decimal");
         			code=parseInt(_0x34b0x5[i], 16)/(_0x34b0x3['charAt'](i)['charCodeAt'](0))
                    logit("<h5 style='color:green'>"+String.fromCharCode(code)+"</h5>")
                   if (_0x34b0x5[i] !== ((_0x34b0x3['charAt'](i)['charCodeAt'](0)) * (_0x34b0x4['charAt'](i)['charCodeAt'](0))).toString(16)) {
                         _0x34b0x2 = false;
                     }
                 }
             };
             if (_0x34b0x2) {
                 alert('Ba\u015Far\u0131l\u0131 i\u015Flem')
             } else {
                 alert('Hatal\u0131 i\u015Flem')
             };
         } else {
             alert('Kullan\u0131c\u0131 ad\u0131 veya \u015Fifre yanl\u0131\u015F')
         };
     })
 });
