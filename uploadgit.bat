@echo off
setlocal

:: Lấy ngày tháng năm giờ hiện tại
for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set "datetime=%%I"
set "year=%datetime:~0,4%"
set "month=%datetime:~4,2%"
set "day=%datetime:~6,2%"
set "hour=%datetime:~8,2%"
set "minute=%datetime:~10,2%"
set "second=%datetime:~12,2%"

:: Tạo thông điệp commit
set "message=React Admin - %year%-%month%-%day% %hour%:%minute%:%second%"

:: Thực hiện các lệnh git
git add .
git commit -m "%message%"
git push --set-upstream origin laptop

endlocal
