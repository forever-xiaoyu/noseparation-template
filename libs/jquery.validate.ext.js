$.validator.addMethod(
  "card",
  function (value, element, params) {
    var reg = /^\d{15}(\d{2}[\dX])?$/i;
    return reg.test(value);
  },
  "Please confirm the accuracy of the card"
);
