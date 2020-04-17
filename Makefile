LAMBDA_FUNC = \
        build/TestFunc

lambda: $(LAMBDA_FUNC)

build/TestFunc: lambda/TestFunc/*.go
        env GOARCH=amd64 GOOS=linux go build -o build/TestFunc ./lambda/TestFunc
