# the import section
import webapp2
import jinja2
import os
from models import username


# this initializes the jinja2 environment
# this will be the same in every app that uses the jinja2 templating library 
the_jinja_env = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

# other functions should go above the handlers or in a separate file

# the handler section
def getUser(user):
    name = user
    return name

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
class getUserName(webapp2.RequestHandler):
    def post(self):
        user = self.request.get('user')
        usernam = getUser(user)
        account = username(user = usernam)
        account.put();
        planner_template = the_jinja_env.get_template('templates/planner.html')
        vars_dict = {'username' : usernam}
        self.response.write(planner_template.render(vars_dict))
# the app configuration section	
app = webapp2.WSGIApplication([
  #('/', MainPage),
  ('/', MainHandler),
  ('/login', LoginHandler),
  ('/sign', SignHandler),
  ('/about', AboutHandler),
  ('/uploadUser', getUserName)
  ], debug=True)
