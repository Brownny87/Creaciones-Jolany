# Configuration
$sourceDir = "C:\Users\John Brown\Documents\trae_projects\CJ"
$destDir = "C:\Users\John Brown\Documents\GitHub\Creaciones-Jolany"

Write-Host "Syncing files for deployment..."

# Ensure destination exists
if (!(Test-Path -Path $destDir)) {
    Write-Error "Destination directory does not exist: $destDir"
    exit 1
}

# Copy files (overwrite)
Write-Host "Copying updated config files..."
Copy-Item -Path "$sourceDir\package.json" -Destination "$destDir\package.json" -Force
Copy-Item -Path "$sourceDir\vite.config.js" -Destination "$destDir\vite.config.js" -Force
# Copy other potentially changed files just in case
Copy-Item -Path "$sourceDir\src\*" -Destination "$destDir\src" -Recurse -Force

Set-Location -Path $destDir

Write-Host "Installing dependencies (gh-pages)..."
npm install

Write-Host "Building and Deploying to GitHub Pages..."
npm run deploy

Write-Host "Committing changes to master branch..."
git add .
git commit -m "Setup GitHub Pages deployment"
git push

Write-Host "Deployment script finished!"
