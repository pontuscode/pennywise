import requests


def main():
    for i in range(123423):
        resp = requests.get("http://localhost:3243/websites")
        assert resp.ok
        if i % 100 == 0:
            print(i)


if __name__ == "__main__":
    main()
