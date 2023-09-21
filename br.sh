#!/bin/bash
docker build . -t kelseybowen/personal-site
docker run -d -p 3000:3000 --name personal-site --rm kelseybowen/personal-site
