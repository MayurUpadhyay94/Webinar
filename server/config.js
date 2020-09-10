exports.PORT = process.env.PORT || 8080

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'

exports.DB_URL = process.env.NODE_ENV === 'production' 
  ? "mongodb+srv://mayur_786:Gjmgjm12@cluster1.u2n7f.mongodb.net/Any?retryWrites=true&w=majority"
  : 'mongodb://localhost/simple-email-confirmation'