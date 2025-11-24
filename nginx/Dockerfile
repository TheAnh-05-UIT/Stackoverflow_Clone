FROM node:14-alpine as build-stage

WORKDIR /usr/frontend-nhom22

# --- TỐI ƯU HÓA 1: Chỉ copy file package.json trước ---
# Việc này giúp Docker dùng lại cache nếu bạn không sửa thư viện,
# giúp lệnh npm install chạy cực nhanh ở các lần sau.
COPY stackFE/package*.json ./

# --- TỐI ƯU HÓA 2: Cài đặt nhanh và bỏ qua check bảo mật (tránh treo) ---
RUN npm install --no-audit --no-fund --loglevel=error

# --- COPY CODE ---
# Copy toàn bộ mã nguồn Frontend vào
COPY stackFE/ .

# --- DEBUG: Kiểm tra xem file có thực sự được copy vào không ---
# Lệnh này sẽ in ra danh sách file trước khi build.
# Nếu lỗi, bạn hãy chụp màn hình kết quả dòng này gửi tôi.
RUN echo "=== DANH SACH FILE TRONG THU MUC ===" && ls -la && echo "=== BEN TRONG THU MUC PUBLIC ===" && ls -la public || echo "Khong tim thay thu muc public"

# --- BUILD ---
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.23

WORKDIR /usr/share/nginx/html

# Xóa các file mặc định của Nginx
RUN rm -rf ./*

# Copy folder 'build' từ Stage 1 sang Stage 2
COPY --from=build-stage /usr/frontend-nhom22/build /usr/share/nginx/html

# Copy file cấu hình Nginx tùy chỉnh (nếu bạn có)
# COPY nginx/config/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]