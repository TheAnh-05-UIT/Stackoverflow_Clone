# # Stage 1
# FROM node:14-alpine as build-stage

# WORKDIR /usr/frontend-nhom22
# COPY stackFE/ .

# RUN npm install

# RUN npm run build

# # Stage 2
# FROM nginx:1.23

# WORKDIR /usr/share/nginx/html

# # Remove default nginx static assets
# RUN rm -rf ./*

# COPY --from=build-stage /usr/frontend-nhom22/build /usr/share/nginx/html

# CMD nginx -g 'daemon off;'


# --- Stage 1: Build React App ---
FROM node:14-alpine as build-stage

WORKDIR /usr/frontend-nhom22

# 1. Chỉ copy file khai báo thư viện trước (Tối ưu Cache Docker)
COPY stackFE/package*.json ./

# 2. Cài đặt thư viện nhanh, bỏ qua audit để tránh lỗi mạng
RUN npm install --no-audit --no-fund --loglevel=error

# 3. Copy toàn bộ source code Frontend
COPY stackFE/ .

# 4. Build ra thư mục tĩnh (build)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:1.23

WORKDIR /usr/share/nginx/html

# Xóa các file mặc định của Nginx
RUN rm -rf ./*

# Copy folder 'build' từ Stage 1 sang thư mục chạy của Nginx
COPY --from=build-stage /usr/frontend-nhom22/build /usr/share/nginx/html

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]