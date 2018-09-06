ng build navigation-manager

Remove-Item C:\inetpub\wwwroot\QFlowHackaton\System\FileStore\CustomPage\navigation-manager -Recurse -Force

Copy-Item ./dist/navigation-manager C:\inetpub\wwwroot\QFlowHackaton\System\FileStore\CustomPage -Recurse -Force