function(properties, context) {
    
    var headers = {
        "Content-Type" : "application/json; charset=utf-8",
        "Authorization" : "Basic " + context.keys["API Key"]
	}
	    
    var notification = {
		"app_id": context.keys["App ID"],
      	"included_segments": [properties.segment],
        "template_id" : properties.template_id
    }
   
	var options = {
        headers: headers,
        method: "POST",
        json: notification,
        url: "https://onesignal.com/api/v1/notifications"
    }
    
    context.request(options, function(err, res, body){
        console.log("sent notification");
    });

}