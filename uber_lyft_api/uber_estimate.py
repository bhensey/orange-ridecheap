from uber_rides.session import Session
from uber_rides.client import UberRidesClient

session = Session(server_token="gzsnR5HAFRcEA_q9AVSZX7tEGE1_7ayhiVYwZk3r")
client = UberRidesClient(session)

response = client.get_products(37.77, -122.41)
products = response.json.get('products')

response = client.get_price_estimates(
    start_latitude=37.770,
    start_longitude=-122.411,
    end_latitude=37.791,
    end_longitude=-122.405,
    seat_count=2
)

estimate = response.json.get('prices')
print(estimate)
