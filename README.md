# Happy Hundies

**[happyhundies.com](https://happyhundies.com)**

A film recommendation site focused on films 100 minutes or fewer. Browse and filter by genre, decade, runtime, language, and IMDB score, or get a random recommendation.

Built with Flask, SQLite, and Jinja2 templates. Deployed on Fly.io.

## Running locally

```bash
pip install -r requirements.txt
python applauncher.py
```

The app will start on `http://localhost:8080`. It expects `HHActualTest.db` in the project root when running locally.

## Deployment

The app is deployed on Fly.io with a persistent volume for the SQLite database.

**Deploy:**

```bash
fly deploy
```

**Update the database:**

```bash
fly ssh sftp put HHActualTest.db /app/data/HHActualTest.db
fly machine restart <machine-id>
```

## Admin

There is an admin area at `/admin` for adding and deleting films. Credentials are stored in the `users` table of the database.
