# Project Name:ChatBot

## Custom Domain Setup for Development

In the development environment, we've configured the app to be accessible via the custom domain `www.omidbank.com` instead of `localhost`. This change is done for consistency with the production environment and easier testing with a real domain name.

### Steps Taken:

1. **Changed the Base URL:**
   - Updated the `vite.config.js` file to set the base path for the app:
     ```js
     export default {
       base: '/my-app/', // The app will now be served from this path
     };
     ```

2. **Set the Development Server Host to `www.moha.com`:**
   - The Vite development server has been configured to listen on the custom domain instead of `localhost`:
     ```js
     server: {
       host: 'www.moha.com', // Custom domain for local development
       port: 5173, // The port for the development server
     };
     ```

3. **Configured Local Hosts File:**
   - To map `www.MOHA.com` to the local machine (`127.0.0.1`), update the local `hosts` file:
     - **MacOS/Linux**: Add `127.0.0.1 www.omidbank.com` to `/etc/hosts`.
     - **Windows**: Add `127.0.0.1 www.omidbank.com` to `C:\Windows\System32\drivers\etc\hosts`.

4. **Configured Api:**
   -// apiService.js
     ```js
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
};     ```

### Running the Development Server

After the changes, run the development server as usual:

```bash
npm run dev
# or
yarn dev
