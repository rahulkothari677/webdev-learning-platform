# generate_sitemap.ps1
$domain = "https://www.webdevpathway.com"
$frontendDir = "C:\Users\rahul4\.gemini\antigravity\scratch\The best website for web development\frontend"
$essaysDir = Join-Path $frontendDir "essays"
$sitemapPath = Join-Path $frontendDir "sitemap.xml"

Write-Host "Generating sitemap.xml for $domain..." -ForegroundColor Cyan

$xml = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>$domain/index.html</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
"@

# Scan essays and add to XML
$essayFiles = Get-ChildItem -Path $essaysDir -Filter "essay-*.html" | Sort-Object Name
foreach ($file in $essayFiles) {
    $xml += @"

  <url>
    <loc>$domain/essays/$($file.Name)</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
"@
}

$xml += "`n</urlset>"

# Write to sitemap.xml
[System.IO.File]::WriteAllText($sitemapPath, $xml, [System.Text.Encoding]::UTF8)
Write-Host "Successfully generated sitemap.xml at $sitemapPath containing $($essayFiles.Count + 1) URLs." -ForegroundColor Green
