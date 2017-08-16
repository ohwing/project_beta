// $(document).ready(function(e){
//     $(".heart_o").click(function(){
//     $(".heart").toggle();
//     $(this).hide();
//   });
//     $(".heart").click(function(){
//     $(".heart_o").toggle();
//     $(this).hide();
//   });
  // On/Off 스위치 토글 기능
  // 알림 설정 스위치
  $(".onoffswitch-label").click(function(){
    if($(".switch").attr("disabled")) {
      $(".switch").removeAttr("disabled");
    } else {
      $(".switch").attr("disabled","disabled");
    }
  });
  // 보안 설정 스위치
  $(".onoffswitch-label2").click(function(){
    if ($(".switch2").attr("disabled")) {
      $(".switch2").removeAttr("disabled");
    } else {
      $(".switch2").attr("disabled","disabled");
    }
  });
  // On/Off 스위치 토글 기능 end
});

$('[data-toggle="popover_other_share"]').popover({
    html: true, 
	  content: function(e) {
        return $('#popover-share-other-content').html();
    }
});