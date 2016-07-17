import superagent from 'superagent';
import sequelize from './db';

var User = sequelize.define('user', {
	id: {
		primaryKey: true,
		type: Sequelize.STRING
	},
	hbname: Sequelize.STRING,
	token: Sequelize.STRING,
	refresh: Sequelize.STRING
});

export default async (ctx, next) => {
	var username = ctx.query.text.split(' ')[0];
	var password = ctx.query.text.substr(username.length + 1);
	superagent
	  	.post('https://hbv3-api-edge.herokuapp.com/oauth/token')
		.send({
			"password": password,
			"username": username,
			"grant_type": "password"
		})
  		.set('Content-Type', 'application/json; charset=utf-8')
  		.redirects(0)
  		.end(function(err, res) {
  		  	if (err || !res.ok) {
  		  		console.log('Login Error: ' + username);
  		  		// ctx.status = 404;
  		  	} else {
  		  		var newData = {
  	  				hbname: username,
	  	  			token: res.body.access_token,
	  	  			refresh: res.body.refresh_token
  	  			}

  		  	  	sequelize.sync().then(() => {
  		  	  		return User.findCreateFind({
  		  	  			where: { id: ctx.query.team_id + '/' + ctx.query.user_id },
  		  	  			defaults: newData
  		  	  		})[0];
  		  	  	}).then((user) => {
  		  	  		if(user) {
	  		  	  		console.log(user);
	  		  	  		console.log(user.changed());
  		  	  			user.update(newData).then((user) => {
  		  	  				console.log('updated');
  		  	  				// return user;
  		  	  			}).then((user) => {
  		  	  				console.log(user.get({
  		  	  					plain: true
  		  	  				}));
  		  	  			});
  		  	  		}
  		  	  	});

  		  	  	// ctx.status = 200;
  		  	  	ctx.body = "Logged In"
  		  	}
  		});
}