# restore_all_essays.ps1
# This script restores the original clean essay HTML files from the Downloads folder.

$baseDir = "C:\Users\rahul4\.gemini\antigravity\scratch\The best website for web development"
$essaysDir = Join-Path $baseDir "frontend\essays"
$downloadsDir = "C:\Users\rahul4\Downloads"

Write-Host "Scanning essays directory: $essaysDir" -ForegroundColor Cyan

if (!(Test-Path $essaysDir)) {
    Write-Error "Essays directory not found at $essaysDir!"
    exit 1
}

# Get list of target essay files
$essayFiles = Get-ChildItem -Path $essaysDir -Filter "essay-*.html"

Write-Host "Found $($essayFiles.Count) essays to restore." -ForegroundColor Cyan

# Get all gemini-code files in Downloads
$downloadedFiles = Get-ChildItem -Path $downloadsDir -Filter "gemini-code-*.html"
Write-Host "Found $($downloadedFiles.Count) gemini-code files in Downloads." -ForegroundColor Cyan

$restoredCount = 0
$missingCount = 0

foreach ($targetFile in $essayFiles) {
    $fileName = $targetFile.Name
    # Extract essay number from filename (e.g. essay-1.3.html -> 1.3)
    if ($fileName -match "essay-(\d+\.\d+)\.html") {
        $essayNum = $Matches[1]
        
        # We need to find the matching gemini-code file in downloads.
        # We will inspect each downloaded file for a matching title tag like "<title>Essay X.Y"
        $matchingDownloads = @()
        
        foreach ($dlFile in $downloadedFiles) {
            try {
                $content = [System.IO.File]::ReadAllText($dlFile.FullName, [System.Text.Encoding]::UTF8)
                # Regex match pattern for title (escaped dot)
                $escapedNum = [regex]::Escape($essayNum)
                if ($content -match "(?i)<title>Essay\s+$escapedNum\b") {
                    # Extract timestamp from filename (gemini-code-TIMESTAMP.html)
                    $timestamp = 0
                    if ($dlFile.Name -match "gemini-code-(\d+)\.html") {
                        $timestamp = [long]$Matches[1]
                    }
                    $matchingDownloads += [PSCustomObject]@{
                        File = $dlFile
                        Timestamp = $timestamp
                    }
                }
            } catch {
                # Ignore read errors on individual files
            }
        }
        
        if ($matchingDownloads.Count -gt 0) {
            # Sort by Timestamp descending and pick the latest one
            $latest = $matchingDownloads | Sort-Object Timestamp -Descending | Select-Object -First 1
            $src = $latest.File.FullName
            $dest = $targetFile.FullName
            
            Copy-Item -Path $src -Destination $dest -Force
            Write-Host "Restored $fileName from $($latest.File.Name) (Timestamp: $($latest.Timestamp))" -ForegroundColor Green
            $restoredCount++
        } else {
            Write-Host "Warning: No original download found for $fileName (Essay $essayNum)" -ForegroundColor Yellow
            $missingCount++
        }
    }
}

Write-Host "Restoration summary: $restoredCount restored successfully, $missingCount missing." -ForegroundColor Green
