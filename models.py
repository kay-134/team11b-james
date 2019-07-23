from google.appengine.ext import ndb

class username(ndb.Model):
    user = ndb.StringProperty(required = True)
