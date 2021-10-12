#!/bin/bash

args=()

while [[ "$#" -gt 0 ]]; do
  case $1 in
  -h | --help)
    echo "-h, --help    display this help and exit"
    echo "-u, --update  update image snapshots when running tests"
    exit 0
    ;;
  -u | --update)
    args+=('-u')
    ;;
  esac
  shift
done

docker build --build-arg VERDACCIO_FORTO_IO_TOKEN=${VERDACCIO_FORTO_IO_TOKEN} -f visual.dockerfile -t visual-test .
docker run -v $PWD/image-snapshots:/app/image-snapshots visual-test sh -c "yarn image-snapshots ${args[@]}"
