//$("#custId").val( base64EncodeUnicode(datestring));
// $(function () {
//   $("#datepicker").datepicker({
//     defaultDate: "-18Y",
//     changeMonth: true,
//     changeYear: true,
//     yearRange: "1900:2006",
//     dateFormat: "mm-dd-yy",
//     maxDate: "01/01/2006",
//   });
// });

function getParameters() {
  var searchString = window.location.search.substring(1),
    params = searchString.split("&"),
    hash = {};

  if (searchString == "") return {};
  for (var i = 0; i < params.length; i++) {
    var val = params[i].split("=");
    hash[unescape(val[0])] = unescape(val[1]);
  }

  return hash;
}

$("#joinForm").submit(function (e) {
  $("#CUSTOMER_ID").val($("#inputemail").val().toUpperCase() + "_DCFORM");
  $("#GENDER").val($('input[name="optradio"]:checked').val());

  if ($("#inputcountry option:selected").val() == "") {
    $("#inputcountry").addClass("invalid");
    e.preventDefault();
  }
});

$("#joinForm").change(function () {
  if ($("#inputcountry option:selected").val() != "") {
    $("#inputcountry").addClass("valid");
  }
});

$("#inputcountry").change(function () {
  if ($("#inputcountry").val() == "UK") {
    $("#STORE_ID").val("");
    $("#SALES_ORGANIZATION").val("UK01");
  }
});

var param = getParameters();
if (param.cid != undefined) {
  $("#CID").val(param.cid);
}
