# BISMILLAHARIHRAHMARIRAHIM - integrate_Vite_builds_with_Springboot
# KUNYE
## REF 
- [vite_official]  https://vite.dev/guide/backend-integration.html
- [github_wimdeblauwe] https://github.com/wimdeblauwe/vite-plugin-spring-boot
  
<!--------------->
Integrating Vite with Spring Boot typically involves two phases: configuring a proxy for development to avoid CORS issues and setting up the build process so Spring Boot can serve the final production assets. 

1. Development: Proxy Configuration

In development, your Vite dev server (usually localhost:5173) needs to talk to your Spring Boot backend (usually localhost:8080). 
Use the server.proxy option in your Vite configuration to redirect API calls. 

<img width="1125" height="902" alt="image" src="https://github.com/user-attachments/assets/a0ea61a2-8a4e-4ba6-87ad-4d1628d1f169" />

Any request made to /api/users from your frontend will be automatically forwarded to http://localhost:8080/api/users

2. Production: Build Integration
For production, you must bundle the frontend and place it where Spring Boot can serve it as static content. By default, Spring Boot looks in src/main/resources/static. 

Configure Output Directory: Update vite.config.js to build directly into the Spring Boot project folder.
<img width="1642" height="671" alt="image" src="https://github.com/user-attachments/assets/d09a8de4-d905-4673-a45a-ad64b1295691" />
