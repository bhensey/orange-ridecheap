from lyft_rides.auth import ClientCredentialGrant
from lyft_rides.session import Session
from lyft_rides.client import LyftRidesClient
import config as config

class lyft:
    def getLyftEstimate():
        auth_flow = ClientCredentialGrant(
            config.lyft['client_id'],
            config.lyft['client_secret'],
            config.lyft['scope']
            )
        
        session = auth_flow.get_session()
        client = LyftRidesClient(session)
        response = client.get_cost_estimates(
            start_latitude=37.770,
            start_longitude=-122.411,
            end_latitude=37.791,
            end_longitude=-122.405
        )

        ride_types = response.json.get('cost_estimates')
        return ride_types
