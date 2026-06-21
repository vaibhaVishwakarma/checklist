git add .
@echo off

:: Use PowerShell safely to grab and format the date & time
for /f "usebackq tokens=*" %%i in (`powershell -NoProfile -Command "Get-Date -Format 'dd-MM-yy #HH'"`) do set "git_date=%%i"

:: Construct the message
set "msg=commit %git_date%"

:: Run your Git commands
git commit -m "%msg%"

git push origin main

echo "\n\nhttps://vaibhavishwakarma.github.io/checklist/"