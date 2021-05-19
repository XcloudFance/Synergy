function jump(domain){
      $(location).attr('href', domain);
$(window).attr('location',domain);
$(location).prop('href', domain)

}
function ajax_(type,url,success,error)
{
      $.ajax({
            //请求方式
            type : type,
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : url,
            //数据，json字符串
            //请求成功
            sync : true,
            success :success,
            //请求失败，包含具体的错误信息
            error : error
        });
}