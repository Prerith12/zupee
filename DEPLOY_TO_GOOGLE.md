# Deploying Zupee to Google via GitHub

This guide walks you through publishing your **Zupee** website to **GitHub** and automatically deploying it to **Google Cloud Run** (with free SSL and continuous deployment on every `git push`).

---

## 📦 Step 1: Save & Push Your Project to GitHub

A pre-packaged, clean archive without `node_modules` has been created for you at:
`C:\Users\1\.gemini\antigravity\scratch\zupee-github.zip`

### Method A: Quick Web Upload (No Git install required)
1. Go to [https://github.com/new](https://github.com/new) and log in.
2. Enter Repository Name: `zupee`
3. Set to **Public** or **Private** and click **Create repository**.
4. Click **"uploading an existing file"**.
5. Drag and drop all the files/folders from `C:\Users\1\.gemini\antigravity\scratch\zupee` (except `node_modules`) or unzip `zupee-github.zip` and drag them in.
6. Click **Commit changes**.

### Method B: Using Git in Terminal
If you have Git installed (or download it from [git-scm.com](https://git-scm.com/download/win)):
```powershell
cd C:\Users\1\.gemini\antigravity\scratch\zupee
git init
git add .
git commit -m "Initial commit: Zupee modern affiliate ecommerce platform"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/zupee.git
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Google Cloud Run (Continuous Deployment via GitHub)

Google Cloud Run runs your application container directly from your GitHub repository with free SSL and zero server management.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new Google Cloud Project (e.g. `zupee-store`).
3. In the search bar at the top, type **Cloud Run** and open the service.
4. Click **Create Service** (or **Deploy Container**).
5. Choose **"Continuously deploy from a repository"** and click **Set up with Cloud Build**.
6. Select **GitHub** as your repository provider and authorize Google Cloud.
7. Select your repository: `zupee` and branch: `^main$`.
8. Under **Build Type**, select **Dockerfile** (the repository already includes a production-ready `Dockerfile`).
9. Click **Save**.
10. Under **Service Configuration**:
    - **Service name**: `zupee-app`
    - **Region**: `asia-south1 (Mumbai)` (fastest for India)
    - **Ingress**: Select **"Allow all traffic"**
    - **Authentication**: Select **"Allow unauthenticated invocations"** (so the public can visit your website).
11. Expand **Container, Volumes, Networking, Security** -> **Environment variables**:
    - `UPI_ID`: `Prerithprabhu@slc`
    - `ADMIN_PHONE`: `9497088200`
    - `STORE_NAME`: `Zupee`
    - `JWT_SECRET`: `zupee_super_secure_jwt_2026`
    - `PORT`: `8080`
12. Click **Create**.

Google Cloud will automatically build your Docker container, link it to your GitHub repository, and give you a public production URL (e.g., `https://zupee-app-xxxxxx-el.a.run.app`). Whenever you push changes to GitHub, Google Cloud automatically rebuilds and redeploys!

---

## 🛠️ Alternative Free Hosting Options (1-Click GitHub Deploy)
If you also want instant alternatives linked to GitHub:
- **Render.com**: Connect GitHub -> New Web Service -> Build Command `npm run build` -> Start Command `node server/server.js`.
- **Railway.app**: Connect GitHub -> 1-Click Deploy.
- **Vercel**: For frontend, or fullstack serverless.

