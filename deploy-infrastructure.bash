#!/bin/bash -ex

cd infrastructure
terraform init
terraform plan -var-file jch254.com.tfvars
terraform apply -var-file jch254.com.tfvars
cd ..
