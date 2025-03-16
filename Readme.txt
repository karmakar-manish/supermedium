1. npm create hono@latest
2. npm run dev -> backend is running
3. take the neondb url and generate connection pool
    url from prisma acclerate
4. npm i prisma
5. npx prisma init
6. npx prisma migrate dev --name (anyname)
7. npx prisma generate --no-engine  //generate User and Todo clients
8. npm install @prisma/extension-accelerate
9. Use hono/jwt library to generate json tokens (since jsonwebtoken 
    doesnot work in cloudflare environments)
10. cloudflare link : https://backend.kaptaanjacksparrow106.workers.dev/
11. Make a common directory and put all the common files of frontend and backend
    in that folder. Publish the file in npm, then export it in the backend and frontend

12. create an .npmignore file and add src there
13. npm login

14. npm i @manish_iitg/medium-commonfiles --registry=https://registry.npmjs.org/
    in both frontend and backend
15. 

