from lyft_rides.auth import ClientCredentialGrant
from lyft_rides.session import Session
from lyft_rides.client import LyftRidesClient
import config as config

class lyft:
    def getLyftEstimate(startLat, startLng, endLat, endLng):
        auth_flow = ClientCredentialGrant(
            config.lyft['client_id'],
            config.lyft['client_secret'],
            config.lyft['scope']
            )
        
        session = auth_flow.get_session()
        client = LyftRidesClient(session)
        response = client.get_cost_estimates(
            start_latitude=startLat,
            start_longitude=startLng,
            end_latitude=endLat,
            end_longitude=endLng,
        )

        ride_types = response.json.get('cost_estimates')

        results = []
        for x in ride_types:
          # TODO
          link = "lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038"

          obj = {
            "brand": "Lyft",
            "name": x["display_name"],
            "low_estimate": x["estimated_cost_cents_min"] / 100,
            "high_estimate": x["estimated_cost_cents_max"] / 100,
            "avg_estimate": (((x["estimated_cost_cents_min"] + x["estimated_cost_cents_max"]) / 2) / 100),
            "duration": x["estimated_duration_seconds"],
            "link": link
          }

          results.append(obj)

        return results
