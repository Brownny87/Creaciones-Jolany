# Configuration
$sourceDir = "C:\Users\John Brown\Documents\trae_projects\CJ"
$destDir = "C:\Users\John Brown\Documents\GitHub\Creaciones-Jolany"

Write-Host "Updating repository at $destDir from $sourceDir..."

# Ensure destination exists
if (!(Test-Path -Path $destDir)) {
    Write-Error "Destination directory does not exist: $destDir"
    exit 1
}

# Clean destination (excluding .git)
Write-Host "Cleaning destination directory (keeping .git)..."
Get-ChildItem -Path $destDir -Exclude ".git" | Remove-Item -Recurse -Force

# Copy files
Write-Host "Copying new files..."
Copy-Item -Path "$sourceDir\*" -Destination $destDir -Recurse -Force -Exclude "node_modules", ".git", "update_repo.ps1"

Write-Host "Update complete! You can now commit and push from $destDir."
