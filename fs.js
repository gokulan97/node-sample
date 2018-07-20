var fs = require('fs');
var content = 'initial';

fs.readFile('package.json', function(err, data){
	if(err) console.log(err);
	else console.log(data.toString());
});

fs.readFile('package.json').then((err, data) =>{
	if(err) console.log(err);
	else console.log(data);
})

console.log(content);