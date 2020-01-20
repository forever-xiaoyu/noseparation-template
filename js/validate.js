$(function () {
  // validator
  $("#commentForm").validate({
    rules: {
      idcard: {
        card: true
      }
    },
    messages: {
      idcard: {
        card: "invalid idcard"
      }
    }
  });
  $(".submit-btn").click(function () {
    if ($("#commentForm").valid()) {
      alert('ok')
    }
  })
})
