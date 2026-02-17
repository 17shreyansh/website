@echo off
echo ========================================
echo RSD Bharti Industries Website Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies
    echo Please make sure Node.js is installed
    pause
    exit /b 1
)

echo.
echo [2/3] Installation complete!
echo.
echo [3/3] Starting development server...
echo.
echo The website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
