sam package --template-file template.yaml --s3-bucket alno-cat-app-stack --output-template-file package.yaml
sam deploy --template-file package.yaml --stack-name cat-app-stack --capabilities CAPABILITY_IAM