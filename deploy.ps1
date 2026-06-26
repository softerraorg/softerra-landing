# Deploy the built site to Hostinger via FTP.
# Usage:  in PowerShell, from the project folder, run:
#   powershell -ExecutionPolicy Bypass -File deploy.ps1
# It will build the site, ask for your FTP password (stays on your machine),
# and upload the compiled files into public_html.

$ErrorActionPreference = 'Stop'

$ftpHost  = '195.35.38.238'
$ftpUser  = 'u362772764'
$remoteDir = 'public_html'          # where the live site lives
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$distRoot  = Join-Path $projectDir 'dist'

Write-Host "==> Building the site (npm run build)..." -ForegroundColor Cyan
Push-Location $projectDir
npm run build
Pop-Location

if (-not (Test-Path $distRoot)) { throw "dist/ folder not found after build." }

# Ask for the FTP password securely (not shown on screen, not saved anywhere)
$secure = Read-Host "Enter your Hostinger FTP password" -AsSecureString
$bstr   = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
$pass   = [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)

$base = "ftp://$ftpHost/$remoteDir"

Write-Host "==> Uploading compiled files to $base ..." -ForegroundColor Cyan
$files = Get-ChildItem -Recurse -File $distRoot
foreach ($f in $files) {
    $rel = $f.FullName.Substring($distRoot.Length).TrimStart('\') -replace '\\','/'
    $url = "$base/$rel"
    Write-Host "    uploading $rel"
    curl.exe -s --ftp-create-dirs -T "$($f.FullName)" "$url" --user "${ftpUser}:${pass}"
    if ($LASTEXITCODE -ne 0) { throw "Upload failed for $rel (curl exit $LASTEXITCODE). Check your FTP password." }
}

Write-Host "==> Done. Reload your site (Ctrl+F5 to bypass cache)." -ForegroundColor Green
