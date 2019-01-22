from uber_rides.session import Session
from uber_rides.client import UberRidesClient
import config
from urllib.parse import urlencode, quote

class uber:
    def getUberEstimate(startLat, startLng, endLat, endLng, startName, endName):
        session = Session(server_token=config.uber['server_token'])
        client = UberRidesClient(session)

        response = client.get_products(startLat, startLng)
        products = response.json.get('products')

        response = client.get_price_estimates(
            start_latitude=startLat,
            start_longitude=startLng,
            end_latitude=endLat,
            end_longitude=endLng,
            seat_count=2
    	)

        estimate = response.json.get('prices')
        del estimate[0]
        
        startNickname = quote(startName)
        endNickname = quote(endName)

        results = []
        for x in estimate:
          link = "https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]="+startLat+"&pickup[longitude]="+startLng+"&pickup[formatted_address]="+startNickname+"&dropoff[latitude]="+endLat+"&dropoff[longitude]="+endLng+"&dropoff[formatted_address]="+endNickname+"&product_id="+x["product_id"]+"&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383"

          obj = {
            "brand": "Uber",
            "name": x["display_name"],
            "low_estimate": x["low_estimate"],
            "high_estimate": x["high_estimate"],
            "avg_estimate": ((x["low_estimate"]+ x["high_estimate"]) / 2),
            "duration": x["duration"],
            "link": link
          }

          results.append(obj)

        return results
