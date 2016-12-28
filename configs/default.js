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
    },
    "apiKey": {
        "STORMPATH_CLIENT_APIKEY_ID" : "4GRG4MYSGHH8XXAXIZRRMLPUB",
        "STORMPATH_CLIENT_APIKEY_SECRET" : "KsH/H78akPyhZxsgjU7xXz/lbgksJlhnWDDfjzg4lS8",
        "STORMPATH_APPLICATION_HREF" : "https://api.stormpath.com/v1/applications/5WtM7uc70XdiIrfTUEVi41"

}
}