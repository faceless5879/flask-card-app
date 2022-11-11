## Flask cards app 🤓

---

Flask cards app is front end repository of Flask cards project.
This project uses Reactjs and firebase to store and display flask cards.

### Install

---

**Warning** Pre-install requirements
This is just frontend of the app, you need to install backend API server to get data.

1. **Local/Dev enviroment**

- Clone this repository
- Create .env.local file in root directory. After that create a variable call `REACT_APP_API_URL` and give it your dev enviroment backend server URL. For local it should be <http://localhost:8080>
- Run below command

```
> npm install
> npm start
```

2. **Prod enviroment**
   Render.com

   - Fork this repository
   - Create a new "Static site" link to your forked repository
   - At `Enviroment` tab, create a variable call `REACT_APP_API_URL` and give it your prod enviroment API server url
   - At `Redirects/Rewrites` tab, add a new rule as below:
     | Source | Destination | Action |
     | ----------- | ----------- | ----------- |
     | /\* | /index.html | Rewrite |
   - At `Settings tab`, setting as below:
     | Branch | Root Directory | Build Command | Publish directory |
     | ----------- | ----------- | ----------- | ----------- |
     | Your prod branch | | npm run build | build |

   Other site (todo)
