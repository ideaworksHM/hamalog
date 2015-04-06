
/* ios javascript 初期化 */
window.onpageshow = function() {
  submit = false ;
}

function ajaxSearch(postdata, callback) {
  $.ajax({
    url: document.forms['_FORM'].action,
    cache: false,
    async: true,
    data: postdata,
    dataType: "text",
    success: callback
  });
}
