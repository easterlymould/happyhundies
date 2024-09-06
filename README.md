# HappyHundiesFlaskApp

https://happyhundies.com/ 

Ambrose Pym

Description: This project is a dynamic web application submitted that I made for a university module and business competition. It is a film website that displays a database of recommended films which are 100 minutes or fewer, using Flask/Python, SQL, Html, CSS

It previously also had an admin area, where I could push information to the database and store usernames and passwords. I have removed this functionality after submitting it for uni, because I don't need or want to store user accounts with this current iteration. All the changes I need to make to the film list, I would rather do direct to the database. So this explains why there are some redundant functions in the applauncher.py.

I plan to implement a better and crucially *secure* admin area in a later iteration, but for now the website is completely open access with me in control of the database at the back end.

## Deployment Steps
Build the docker image, tag and push to the registry. 
```
docker buildx build --platform=linux/amd64 -t happyhundies .

docker tag happyhundies europe-west2-docker.pkg.dev/arctic-marking-424020-q9/happyhundies/happy

docker push europe-west2-docker.pkg.dev/arctic-marking-424020-q9/happyhundies/happy

```

Deploy to cloud run 
```
gcloud run deploy happyhundies \                         
--image europe-west2-docker.pkg.dev/arctic-marking-424020-q9/happyhundies/happy \
--platform managed \
--region europe-west2 \
--allow-unauthenticated
```

