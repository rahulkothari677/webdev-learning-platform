# merge_essay.ps1
$srcPath = "C:\Users\Public\Downloads\phase 1\essay-1.1-html (1).html"
$destPath = Join-Path $PSScriptRoot "essays\essay-1.1.html"

Write-Host "Reading files..."
$srcContent = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)
$destContent = [System.IO.File]::ReadAllText($destPath, [System.Text.Encoding]::UTF8)

# 1. Extract CSS variables and style block from src
if ($srcContent -match "(?si)<style>(.*?)</style>") {
    $srcStyle = $Matches[1]
}

# Keep only parts of style that are NOT :root, body, html, * resets
$srcStyleLines = $srcStyle -split "`r?`n"
$filteredSrcStyle = ""
$inResetBlock = $false
$braceCount = 0

foreach ($line in $srcStyleLines) {
    $trimmed = $line.Trim()
    if ($trimmed.StartsWith(":root") -or $trimmed.StartsWith("*") -or $trimmed.StartsWith("html") -or $trimmed.StartsWith("body")) {
        $inResetBlock = $true
    }
    if ($inResetBlock) {
        if ($trimmed.Contains("{")) { $braceCount++ }
        if ($trimmed.Contains("}")) { $braceCount-- }
        if ($braceCount -eq 0 -and -not $trimmed.Contains("{")) {
            $inResetBlock = $false
        }
        continue
    }
    $filteredSrcStyle += $line + "`n"
}

# 2. Extract Javascript logic from src
if ($srcContent -match "(?si)<script>(.*?)</script>") {
    $srcScript = $Matches[1]
}

# 3. Extract the body content (Hero + Sections)
if ($srcContent -match "(?si)(<header class=`"hero`">.*?</header>)") {
    $srcHero = $Matches[1]
}

if ($srcContent -match "(?si)<main class=`"essay-body`">(.*?)</main>") {
    $srcMainContent = $Matches[1]
}

# Add id="s1" through id="s12" to each <section class="section" data-section="X">
$script:sectionCount = 1
$regex = [regex]'(?si)<section class="section" data-section="(\d+)">'
$evaluator = [System.Text.RegularExpressions.MatchEvaluator] {
    param($match)
    $idStr = "id=`"s$script:sectionCount`""
    $script:sectionCount++
    return "<section class=`"section`" $idStr data-section=`"$($match.Groups[1].Value)`">"
}
$srcMainContent = $regex.Replace($srcMainContent, $evaluator)

Write-Host "Mapped $($script:sectionCount - 1) sections to id=s1 ... id=s$($script:sectionCount - 1)"

# 4. Modify destContent
# A. Add CSS variables to :root in destContent
$destRootIndex = $destContent.IndexOf(":root {")
$destRootEndIndex = $destContent.IndexOf("}", $destRootIndex)
$originalRoot = $destContent.Substring($destRootIndex, $destRootEndIndex - $destRootIndex)

$newRootVars = @"
  --accent: #c084fc;
  --accent2: #a855f7;
  --text-dim: #4a3a5a;
  --mono: 'JetBrains Mono', monospace;
  --serif: 'Playfair Display', serif;
  --sans: 'DM Sans', sans-serif;
"@
$updatedRoot = $originalRoot + "`n" + $newRootVars
$updatedDest = $destContent.Replace($originalRoot, $updatedRoot)

# B. Append custom widget CSS inside the first stylesheet in destContent (before the first </style> tag)
$firstStyleEndIndex = $updatedDest.IndexOf("</style>")
$updatedDest = $updatedDest.Substring(0, $firstStyleEndIndex) + "`n`n/* --- NEW ESSAY CUSTOM WIDGET STYLES --- */`n" + $filteredSrcStyle + "`n" + $updatedDest.Substring($firstStyleEndIndex)

# C. Replace the Hero section in destContent
$destHeroStart = $updatedDest.IndexOf("<div class=`"hero`">")
$destLayoutStart = $updatedDest.IndexOf("<div class=`"layout`">")
$originalHero = $updatedDest.Substring($destHeroStart, $destLayoutStart - $destHeroStart)

$modifiedSrcHero = $srcHero.Replace('<header class="hero">', '<div class="hero">').Replace('</header>', '</div>')
$updatedDest = $updatedDest.Replace($originalHero, $modifiedSrcHero + "`r`n`r`n")

# D. Replace the content inside <main>...</main> in destContent
$destMainStart = $updatedDest.IndexOf("<main>") + 6
$destMainEnd = $updatedDest.IndexOf("</main>", $destMainStart)
$originalMainContent = $updatedDest.Substring($destMainStart, $destMainEnd - $destMainStart)
$updatedDest = $updatedDest.Replace($originalMainContent, "`n" + $srcMainContent + "`n  ")

# E. Replace script contents inside the first script block in destContent
$firstScriptStart = $updatedDest.IndexOf("<script>", $updatedDest.IndexOf("</main>")) + 8
$firstScriptEnd = $updatedDest.IndexOf("</script>", $firstScriptStart)
$originalScriptContent = $updatedDest.Substring($firstScriptStart, $firstScriptEnd - $firstScriptStart)

$revealScript = @"

// --- ROADMAP PRESENTATION AND REVEAL SCRIPTS ---
const revealSections = document.querySelectorAll('.section');
const revealNavItems = document.querySelectorAll('.nav-item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.04 });

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      revealNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + id) {
          item.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0, rootMargin: '-10% 0px -65% 0px' });

revealSections.forEach(s => {
  revealObserver.observe(s);
  navObserver.observe(s);
});

document.addEventListener('DOMContentLoaded', () => {
  revealSections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top < window.innerHeight) s.classList.add('visible');
  });
});

function revealStep(el) { el.classList.toggle('revealed'); }
function resetSteps() { document.querySelectorAll('.flow-step').forEach(s => s.classList.remove('revealed')); }

function switchTab(btn, panelId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

window.revealStep = revealStep;
window.resetSteps = resetSteps;
window.switchTab = switchTab;
"@

$updatedDest = $updatedDest.Replace($originalScriptContent, "`n" + $srcScript + "`n" + $revealScript + "`n")

# 5. Write merged file back
[System.IO.File]::WriteAllText($destPath, $updatedDest, [System.Text.Encoding]::UTF8)
Write-Host "Essay 1.1 merged successfully!" -ForegroundColor Green
