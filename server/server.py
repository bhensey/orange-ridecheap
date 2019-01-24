from flask import Flask, jsonify, request
from flask_cors import CORS
from lyft import lyft
from uber import uber
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/v1/lyft", methods=['GET'])
def lyftestimate():
  startLongitude = request.args.get("startLongitude")
  startLatitude = request.args.get("startLatitude")
  endLongitude = request.args.get("endLongitude")
  endLatitude = request.args.get("endLatitude")

  lyftresponse = lyft.getLyftEstimate(startLatitude, startLongitude, endLatitude, endLongitude)
  response = jsonify(lyftresponse)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response

@app.route("/api/v1/uber", methods=['GET'])
def uberestimate():
  startLongitude = request.args.get("startLongitude")
  startLatitude = request.args.get("startLatitude")
  endLongitude = request.args.get("endLongitude")
  endLatitude = request.args.get("endLatitude")
  startName = request.args.get("startName")
  endName = request.args.get("endName")

  uberresponse = uber.getUberEstimate(startLatitude, startLongitude, endLatitude, endLongitude, startName, endName)

  response = jsonify(uberresponse)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response


if __name__ == '__main__':
  app.run(debug=True, port=os.environ.get('PORT', 5000))
