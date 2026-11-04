@echo off
echo ========================================================
echo   Launching Zupee E-Commerce & Affiliate Platform
echo ========================================================
echo.
echo Starting Backend API on http://localhost:5000...
start "Zupee Backend Server" cmd /k "cd server && node server.js"

echo Starting Frontend Dev Server on http://localhost:5173...
start "Zupee Frontend Client" cmd /k "cd client && npm run dev"

echo.
echo Both servers are launching!
echo Customer Website:  http://localhost:5173
echo Admin Login:       http://localhost:5173/admin/login
echo Admin Phone Alert: +91 9497088200
echo ========================================================

