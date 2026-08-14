@echo off
echo Copying assets to public/images...
if not exist "public\images" mkdir "public\images"
xcopy "src\assets\*" "public\images\" /E /Y /Q
echo.
echo Removing old source files...
rmdir /S /Q "src"
del /Q "tailwind.config.js" 2>NUL
echo.
echo Deleting old node_modules and package-lock.json...
if exist "node_modules" rmdir /S /Q "node_modules"
if exist "package-lock.json" del /Q "package-lock.json"
echo.
echo Installing dependencies...
npm install
echo.
echo Setup complete! Run 'npm run dev' to start the development server.
pause
