let mysql = require("mysql");

let connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "hidroponik"
})
connection.connect((err)=>{
	if(!err)
	{
		console.log("Connected");
	}
	else
	{
		console.log("Connection Failed");
	}
});

module.exports = connection;