$(function() {
  var locale = window.GmApi.gmGetLocale() || "en-US";

  function getLocalizedData() {
    var localizeData = localize[locale] || localize["en-US"];
    var elem = $("[data-str-id]");
    for (var i = 0; i < elem.length; i++) {
      var stringId = elem[i].getAttribute("data-str-id");
      if (
        $(elem[i]).prop("nodeName") == "TEXTAREA" ||
        $(elem[i]).prop("nodeName") == "INPUT"
      ) {
        $(elem[i]).attr("placeholder", localizeData[stringId]);
      } else {
        $(elem[i]).html(localizeData[stringId]);
      }
    }
    window._arabica.localizedData = localizeData;
  }

  getLocalizedData();
});
