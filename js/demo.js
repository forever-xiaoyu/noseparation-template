$(function () {
  $.get('../tpl/demo.tpl',function(data){
    var html = template.compile(data)
    $('body').append(html)

    layui.use('carousel', function() {
      var carousel = layui.carousel
      carousel.render({
        elem: '#test1',
        width: '100%',
        arrow: 'always'
        //,anim: 'updown'
      })
    })
  })

  // validator
  $("#commentForm").validate({
    rules: {
      idcard: {
        card: true
      }
    },
    messages: {
      // idcard: {
      //   card: "invalid idcard"
      // }
    }
  });
  $(".submit-btn").click(function () {
    if ($("#commentForm").valid()) {
      alert('ok')
    }
  })


  layui.config({
    base: '../libs/layui/cropper/' //layui自定义layui组件目录
  }).use(['form','croppers'], function () {
    var $ = layui.jquery
      ,form = layui.form
      ,croppers = layui.croppers
      ,layer= layui.layer;

    croppers.render({
      elem: '.editimg'
      ,saveW: 120
      ,saveH: 120
      ,mark: 1/1
      ,area: '900px'
      ,url: "/upload"
      ,done: function (res, ele) {
        if (res.success) {
          layer.msg('upload success',{icon: 1});
          layer.closeAll('page');
          console.log($(ele))
        } else {
          layer.alert('upload failed',{icon: 2});
        }
      }
    });
  });
})
