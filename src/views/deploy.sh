#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# ANPASSA DENNA RAD - byt ut <USERNAME> och <REPO>
git push -f git@github.com:<YasinElka>/<C:\Users\ÄGARE\myproject-vue\src\views>.git main:gh-pages

cd -



