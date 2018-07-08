//connect to api url https://teamtreehouse.com/username
//read data

//prints message to console
const https=require('https');
function printErr(error){
	console.error(error.message);
}
function printMessage(username,badgecount,points){
const message=`${username} has ${badgecount}	total badges and ${points} points in javascript`;
console.log(message);
}
//connect to api
function getProfile(username){
	try{
	const request = https.get(`https://teamtreehouse.com/${username}.json`,response=>{
	
	let body = "";
	response.on('data',data=>{
			
			body+=data.toString();
			
	});
	response.on('end',data=>{
			try{
			const profile=JSON.parse(body);
			printMessage(username,profile.badges.length,profile.points.JavaScript);
		} catch(error){
			console.error(error.message);
			}
	});
		

});

	request.on('error',error=>console.error(`problem with request:${error.message}`));
	}catch(error){
		console.error(error.message);
	}
}
const users=process.argv.slice(2);
users.forEach(username=>{
	getProfile(username);
});


