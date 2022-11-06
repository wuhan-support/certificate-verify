#!/bin/bash

rm -rf docs

yarn build
if [ $? -eq 0 ]; then
  cd docs
  cp index.html 404.html
  git init .
  git branch -M gh-pages
  git remote add origin git@github.com:wuhan-support/certificate-verify.git
  git add -f .
  git commit -m "Deploy"
  git push -f origin gh-pages
  cd ..
else
  echo "build failed"
fi
