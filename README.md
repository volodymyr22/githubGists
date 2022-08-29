 - Run "yarn" for installing dependencies 
 - Run "nest start --watch" to launch the app
 - use postman or similar app to make requests
 - the request should looks like "HOST:PORT?username=<username>"(fro example localhost:3000?username=JohnDoe)

 *DOCKER Deploying*
 - run "docker build -t app ."
 - run "docker run -p <HOST>:<PORT> app"
 - run similar command "aws ecr get-login-password --region use-east-2 | docker login --username AWS --password-stdin 762488692892.dkr.ecr.us-east-2.amazonaws.com/app"
change region, username, password and digits to appropriate credentials for login
 - run "docker tag app 762488692892.dkr.ecr.us-east-2.amazonaws.com/app" with appropriate digits
 - run docker push 762488692892.dkr.ecr.us-east-2.amazonaws.com/app"
 - start work with aws fargate

