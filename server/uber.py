from uber_rides.session import Session
from uber_rides.client import UberRidesClient
import config

class uber:
    def getUberEstimate(startLat, startLng, endLat, endLng):
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
        print(estimate)
        del estimate[0]
        print(estimate)

        results = []
        for x in estimate:
          # TODO
          link = "https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383"

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
