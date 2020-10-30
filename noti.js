var request = 	require('request');

var sendMessage = function(device, message){
	var restKey = 'ZDM2OWM1MzQtZWVmMi00MjQ1LWI5M2EtZDcxNTE2ZDczNWEx';
	var appID = '21698834-8a37-4202-8fe7-789328572b71';
	request(
		{
			method:'POST',
			uri:'https://onesignal.com/api/v1/notifications',
			headers: {
				"authorization": "Basic "+restKey,
				"content-type": "application/json"
			},
			json: true,
			body:{
				'app_id': appID,
				'contents': {en: message},
                'include_player_ids': Array.isArray(device) ? device : [device]
			}
		},
		function(error, response, body) {
			if(!body.errors){
				console.log(body);
			}else{
				console.error('Error:', body.errors);
			}
			
		}
	);
}

sendMessage('21698834-8a37-4202-8fe7-789328572b71', 'Hello!');