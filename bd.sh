#!/bin/bash
docker build . -t kelseybowen/personal-site
docker push kelseybowen/personal-site
kubectl delete pods -l app=ps