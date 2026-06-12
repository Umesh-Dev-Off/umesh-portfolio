@echo off
title Umesh Rautgol Portfolio Dev Server
echo ===================================================
echo   Starting Umesh Rautgol's Portfolio Server
echo ===================================================
echo.
echo [1/2] Checking and installing npm dependencies...
call npm install
echo.
echo [2/2] Launching Vite development server...
echo.
call npm run dev
pause
