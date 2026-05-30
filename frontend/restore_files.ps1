# restore_files.ps1
$baseDir = "C:\Users\rahul4\.gemini\antigravity\scratch\The best website for web development"
$essaysDir = Join-Path $baseDir "essays"
$downloadsDir = "C:\Users\rahul4\Downloads"

if (!(Test-Path $essaysDir)) {
    New-Item -ItemType Directory -Path $essaysDir -Force
}

$mapping = @{
    "gemini-code-1779942590513.html" = "essay-1.1.html"
    "gemini-code-1779943652659.html" = "essay-1.2.html"
    "gemini-code-1779944609888.html" = "essay-1.3.html"
    "gemini-code-1779945106713.html" = "essay-2.1.html"
    "gemini-code-1779945726420.html" = "essay-2.2.html"
    "gemini-code-1779946245329.html" = "essay-2.3.html"
    "gemini-code-1779947048184.html" = "essay-2.4.html"
    "gemini-code-1779947686741.html" = "essay-2.5.html"
    "gemini-code-1779948113580.html" = "essay-2.6.html"
    "gemini-code-1779948822525.html" = "essay-3.1.html"
    "gemini-code-1779949323101.html" = "essay-3.2.html"
    "gemini-code-1779950334195.html" = "essay-3.3.html"
    "gemini-code-1779950811833.html" = "essay-3.4.html"
    "gemini-code-1779959895202.html" = "essay-3.5.html"
    "gemini-code-1779960683573.html" = "essay-3.6.html"
    "gemini-code-1779960831755.html" = "essay-3.7.html"
    "gemini-code-1779960953436.html" = "essay-3.8.html"
    "gemini-code-1779961108018.html" = "essay-3.9.html"
    "gemini-code-1779961277983.html" = "essay-4.1.html"
    "gemini-code-1779961993337.html" = "essay-4.2.html"
    "gemini-code-1779962495247.html" = "essay-4.3.html"
}

Write-Host "Restoring original essays..." -ForegroundColor Cyan

foreach ($key in $mapping.Keys) {
    $src = Join-Path $downloadsDir $key
    $dest = Join-Path $essaysDir $mapping[$key]
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dest -Force
        Write-Host "Restored essays/$($mapping[$key])" -ForegroundColor Green
    } else {
        Write-Host "Warning: Downloaded original file $key not found!" -ForegroundColor Yellow
    }
}

Write-Host "Restoration complete!" -ForegroundColor Green
