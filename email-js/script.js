// emailjs.send("gmail", "template_ID", )
// emailjs.send("gmail", "template_Ci4vjYIX");

var myform = $("form#myform");
myform.submit(function(event) {
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "noreply";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id, template_id, myform[0]).then(
    function() {
      alert("Sent!");
      myform.find("button").text("Send");
      myform[0].reset();
    },
    function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    }
  );
  return false;
});
