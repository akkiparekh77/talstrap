#!/bin/bash

readonly OUTPUT_DIRECTORY="storybook-static"
readonly BUCKET="talstrap.talview.io"
readonly PREFIX_PRODUCTION="latest"
readonly PREFIX_SANDBOX="sandbox"

FOLDER=$(cksum <<< ${CIRCLE_BRANCH} | cut -f 1 -d ' ')
PATH_SANDBOX="s3://${BUCKET}/${PREFIX_SANDBOX}/${FOLDER}/"
PATH_PRODUCTION="s3://${BUCKET}/${PREFIX_PRODUCTION}/"
DOMAIN_S3="https://s3-${AWS_DEFAULT_REGION}.amazonaws.com"
URL_SANDBOX="${DOMAIN_S3}/${BUCKET}/${PREFIX_SANDBOX}/${FOLDER}/index.html"
MESSAGE="_${CIRCLE_USERNAME}_ deployed sandbox for branch *${CIRCLE_BRANCH}*"
ATTACHMENT="{\"fallback\":\"Open sandbox at ${URL_SANDBOX}\",\"actions\":[{\"type\":\"button\",\"text\":\"Open sandbox\",\"url\":\"${URL_SANDBOX}\",\"style\":\"primary\"}]}"
SLACK_PAYLOAD="{\"text\":\"${MESSAGE}\",\"attachments\":[${ATTACHMENT}]}"

if [ "${CIRCLE_BRANCH}" == "main" ]; then
  aws s3 sync ${OUTPUT_DIRECTORY} ${PATH_PRODUCTION} --delete --acl public-read
else
  aws s3 sync ${OUTPUT_DIRECTORY} ${PATH_SANDBOX} --delete --acl public-read
  curl -H "Content-type: application/json" -X POST --data "${SLACK_PAYLOAD}" ${SLACK_WEBHOOK}
fi
