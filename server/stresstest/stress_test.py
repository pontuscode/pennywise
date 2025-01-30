import random
from locust import HttpUser, between, task


class WebsiteUser(HttpUser):
    wait_time = between(5, 15)


    # def on_start(self):
        # with self.client.post("/websites", json={"url": "www.google.com"}, catch_response=True) as response:
          #   print(response[])
        # self.client.post("/websites", json={"url": "www.google.com"})
        # self.client.post("/websites", json={"url": "www.yahoo.com"})

    @task
    def all_websites(self):
        self.client.get("/websites")

    @task
    def website_by_id(self):
        random_id = random.choice((1, 4))
        self.client.get(f"/websites/{random_id}")
