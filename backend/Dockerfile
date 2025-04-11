# Step 1: Build base image for runtime
FROM debian:bookworm-slim AS runtime

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends tzdata ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Step 2: Build Go application
FROM golang:1.23-bookworm AS builder

WORKDIR /app

RUN mkdir -p /go/src
WORKDIR /go/src
COPY . /go/src

RUN go version
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w -extldflags '-static'" -installsuffix cgo -trimpath -o /app ./cmd/main.go

# Step 3: Create final runtime image
FROM runtime

# ビルド済みバイナリをコピー
COPY --from=builder /app/main /app

# アプリケーション起動
ENTRYPOINT ["/app"]
