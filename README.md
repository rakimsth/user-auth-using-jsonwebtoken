# user-auth-using-jsonwebtoken

user authentication check in route using jsonwebtoken

# Step

1. Create a config folder inside the project
2. Inside the config folder, create local.json
3. Paste the following code in json file

```sh
   {
   "app": {
   "name": "user-auth",
   "port": 3000,
   "secret": "6E4(WdnI5ukyHDaqy-AKEZvT$7JDnrUG",
   "db": "mongodb://localhost:27017/user-auth"
   },
   "jwt": {
   "duration": 3600,
   "duration_long": 604800000
   }
   }
```

4. yarn install in the terminal
5. yarn start to run the project
