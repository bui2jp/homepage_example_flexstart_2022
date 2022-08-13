# homepage_example_flexstart_2022

## 1. FlexStart

FlexStartをベースにしてHPを作成する。

## 2. Azure (Storage) にデプロイ
```
az login
az group create -n sakaiine-website-rg -l japaneast
az storage account create -n sakaiinewebstorage001 -g sakaiine-website-rg -l japaneast --sku Standard_LRS

# websiteを有効にする
az storage blob service-properties update --account-name sakaiinewebstorage001 --static-website --404-document 404.html --index-document index.html
```

```
# $webへUpload
az storage blob upload-batch -s FlexStart -d '$web' --account-name sakaiinewebstorage001 --overwrite
```
```
az storage account show -n sakaiinewebstorage001 -g sakaiine-website-rg --query "primaryEndpoints.web" --output tsv
```