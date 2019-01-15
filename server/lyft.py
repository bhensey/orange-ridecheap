from lyft_rides.auth import ClientCredentialGrant
from lyft_rides.session import Session

class lyft:
    def getLyftEstimate():
        auth_flow = ClientCredentialGrant(
            "GArffVUTOOxq",
            "_CBjBzRxfhUqNUjEx7t0QDHx9FF12oUj",
            "public",
            )
        session = auth_flow.get_session()

        from lyft_rides.client import LyftRidesClient

        client = LyftRidesClient(session)
        response = client.get_ride_types(37.7833, -122.4167)
        ride_types = response.json.get('ride_types')
        return ride_types
