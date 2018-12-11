#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

if [ -z $1 ]
  then
    echo -e $RED"Publish error:" $NC "plesase provide a newversion string [ major | minor | patch ]"
    exit 1
fi

newVersion=$1
echo -e $BLUE"Publishing a new" $newVersion "version"$NC

npm run build:lib &&\
  npm version $newVersion && \
  cd ./lib && \
  npm publish $newVersion && \
  cd ../
