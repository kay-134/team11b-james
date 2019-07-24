from google.appengine.ext import ndb

class User(ndb.Model):
	fullname = ndb.StringProperty(required=True)
	username = ndb.StringProperty(required=True)
	email = ndb.StringProperty(required=True)
	password = ndb.StringProperty(required=True)
	islogged = ndb.BooleanProperty(default=False)
	
