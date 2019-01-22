from flask import Flask, jsonify, request
from flask_cors import CORS
from lyft import lyft
from uber import uber

app = Flask(__name__)
CORS(app)


@app.route("/api/v1/lyft", methods=['GET'])
def lyftestimate():
  startLongitude = request.args.get("startLongitude")
  startLatitude = request.args.get("startLatitude")
  endLongitude = request.args.get("endLongitude")
  endLatitude = request.args.get("endLatitude")

  lyftresponse = lyft.getLyftEstimate(startLatitude, startLongitude, endLatitude, endLongitude)
  return jsonify(lyftresponse)


@app.route("/api/v1/uber", methods=['GET'])
def uberestimate():
  startLongitude = request.args.get("startLongitude")
  startLatitude = request.args.get("startLatitude")
  endLongitude = request.args.get("endLongitude")
  endLatitude = request.args.get("endLatitude")
  startName = request.args.get("startName")
  endName = request.args.get("endName")

  uberresponse = uber.getUberEstimate(startLatitude, startLongitude, endLatitude, endLongitude, startName, endName)
  return jsonify(uberresponse)


if __name__ == '__main__':
  app.run(debug=True, port=8080)
