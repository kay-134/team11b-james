# the import section
import webapp2
import jinja2
import os
from models import User


# this initializes the jinja2 environment
# this will be the same in every app that uses the jinja2 templating library 
the_jinja_env = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

# other functions should go above the handlers or in a separate file


class MainHandler(webapp2.RequestHandler):
  def get(self):  # for a get request
    home_template = the_jinja_env.get_template('templates/home.html')
    self.response.write(home_template.render())

class LoginHandler(webapp2.RequestHandler):
  def get(self):  # for a get request
    login_template = the_jinja_env.get_template('templates/login.html')
    self.response.write(login_template.render())

class SignHandler(webapp2.RequestHandler):
  def get(self):  # for a get request
    sign_template = the_jinja_env.get_template('templates/sign.html')
    self.response.write(sign_template.render())

class AboutHandler(webapp2.RequestHandler):
	def get(self):
		about_template = the_jinja_env.get_template('templates/about.html')
		self.response.write(about_template.render())

class SignUp(webapp2.RequestHandler):
    def post(self):
        username = self.request.get('username')
        email = self.request.get('email')
        password = self.request.get('password')
        fullname = self.request.get('fullname')

        user = User(fullname = fullname, username = username, email = email, password = password)
        usernames = []
        for user in User.query().fetch():
			usernames.append(user.username)
        if not (user in usernames):
	        query.insert(0,user)
	        user.put()

		planner_template = the_jinja_env.get_template('templates/planner.html')
		self.response.write(planner_template.render())

user = ''
class ValidateUser(webapp2.RequestHandler):
	def post(self):

		planner_template = the_jinja_env.get_template('templates/planner.html')
		username = self.request.get('username')
		password = self.request.get('password')
		usernames = []
		for user in User.query().fetch():
			usernames.append(user.username)

		passwords = []
		for user in User.query().fetch():
			passwords.append(user.password)

		if (username in usernames) and (password in passwords):
			user = User.query().filter(User.username==username).get()
			user.islogged=True
			variable_dict={
				'message':'Hello',
				'username':user.username
			}
			self.response.write(planner_template.render(variable_dict))
		
		else:
			variable_dict={
			'message': "Your account doesn't exist, please sign up."
			}
			
			self.response.write(planner_template.render(variable_dict))

# class SignOut(webapp2.RequestHandler):
# 	def get(self):
# 		userOne.islogged=False
# 		home_template = the_jinja_env.get_template('templates/home.html')
# 		self.response.write(home_template.render())

# class Planner(webapp2.RequestHandler):
# 	def get(self):
# 		planner_template = the_jinja_env.get_template('templates/planner.html')
# 		self.response.write(planner_template.render())

class DayLayout(webapp2.RequestHandler):
	def get(self):
		day_template = the_jinja_env.get_template('templates/day.html')
		self.response.write(day_template.render())
# the app configuration section	
app = webapp2.WSGIApplication([
  #('/', MainPage),
  ('/', MainHandler),
  ('/login', LoginHandler),
  ('/sign', SignHandler),
  ('/about', AboutHandler),
  ('/uploadUser', SignUp),
  ('/validateUser',ValidateUser),
  ('/planner',Planner),
  ('/signout',SignOut),
  ('/day',DayLayout)
  ], debug=True)
