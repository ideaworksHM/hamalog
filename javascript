
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
    dataType: "json",
    success: callback
  });
}

$(function() {
  $(".test").click(function(){
    $(this).parent().parent().find(":text, :hidden").val('') ;
    $(this).parent().parent().find("span").html('') ;
    $(this).parent().parent().find(".xxx1, xxx2").removeClass('xxx1, xxx2') ;
  });
});
