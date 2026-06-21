git add .
@echo off
:: Fetch a reliable, region-independent timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I

:: Extract date and hour components
set year=%datetime:~2,2%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
set hour=%datetime:~8,2%

:: Build the commit message string
set msg=commit %day%-%month%-%year% #%hour%

:: Run the Git commands
git commit -m "%msg%"
git push origin main

echo "\n\nhttps://vaibhavishwakarma.github.io/checklist/"