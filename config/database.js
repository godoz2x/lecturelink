if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://godoz2x:paladins123@ds249079.mlab.com:49079/se18'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}