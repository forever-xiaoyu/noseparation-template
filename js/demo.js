$(function () {
  $.get('../tpl/demo.tpl',function(data){
    var html = template.compile(data)
    $('body').html(html)

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
})
