@echo off
chcp 65001 > nul
title Lien Quan Mobile - Web Gacha & Phan Tich Ban Pick
echo Dang khoi dong Web Server va mo trinh duyet...
python server.py
if %errorlevel% neq 0 (
    echo [!] Gap loi khi khoi dong server. Dang thu mo truc tiep index.html...
    start index.html
)
