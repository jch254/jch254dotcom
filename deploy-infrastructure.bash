export TF_VAR_route53_zone_id=$ROUTE53_ZONE_ID
export TF_VAR_acm_arn=$ACM_ARN

cd infrastructure
terraform remote config -backend=s3 \
  -backend-config="bucket=603-terraform-remote-state" \
  -backend-config="key=jch254.com.tfstate" \
  -backend-config="region=ap-southeast-2" \
  -backend-config="encrypt=true"

terraform plan -var-file jch254.com.tfvars
terraform apply -var-file jch254.com.tfvars
cd ..
