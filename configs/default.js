/**
 * Created by rain on 2016/12/27.
 */

module.exports = {
    "db": {
      "url" : "mongodb://localhost/sognare",
      "host" : "localhost",
      "port": 27017,
      "dbname": "sognare",
      "pool": 5
    },
    "session": {
        "timeout": 720,// 24 * 30 a month
        "secret": "sognare",
        "key": "sognare.sid"
    }
}