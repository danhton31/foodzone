# FoodZone

Bài tập website đặt đồ ăn: PHP thuần, MySQL, Tailwind CSS và JavaScript. Giao diện chỉ dùng tiếng Việt.

## Chạy website

1. Bật MySQL trong Laragon.
2. Tạo `.env` từ `.env.example` nếu chưa có, điền database và Cloudinary.
3. Mở terminal tại thư mục project:

```powershell
php scripts/setup.php
npm run dev
```

Mở [http://127.0.0.1:8877/](http://127.0.0.1:8877/). Giữ terminal mở, nhấn `Ctrl+C` để dừng.

Không có Node.js thì chạy server bằng PHP:

```powershell
php -d upload_max_filesize=10M -d post_max_size=32M -S 127.0.0.1:8877 router.php
```

Yêu cầu PHP 8.1+ có `mysqli`, `curl`, `fileinfo`, `mbstring`, `openssl`; MySQL của Laragon.

## Tài khoản mẫu

- Chủ cửa hàng: `chucuahang@gmail.com` / `123123`.
- Khách hàng: `khachhang1@gmail.com` / `123456`.
- Khách hàng khác: `khachhang2@gmail.com` / `123456`.

Dữ liệu mẫu có 26 món, 5 danh mục và 2 đơn hàng. Tạo lại dữ liệu khi cần:

```powershell
npm run db:reset
```

Lệnh `npm run db:reset` đọc `DB_NAME` trong `.env`, tạo database nếu chưa có, xóa toàn bộ bảng/view trong database đó (kể cả bảng tự thêm), rồi tạo lại cấu trúc và seed dữ liệu mẫu. Dữ liệu cũ trong database này sẽ bị xóa.

Không cần cài `node_modules` để chạy lệnh reset. Nếu không có Node.js, dùng `php scripts/setup.php --reset`.

## Các thư mục chính

- `home/`: trang chủ, thực đơn, giỏ hàng và tài khoản khách hàng.
- `admins/`: quản lý món, danh mục, khách hàng, đơn hàng và cài đặt.
- `authentication/`: đăng ký, đăng nhập, đăng xuất.
- `app/`: các hàm dùng chung cho database, đăng nhập, upload, đặt hàng và cài đặt.
- `database/`: cấu trúc bảng, dữ liệu mẫu và URL ảnh Cloudinary.
- `assets/src/`: CSS và JavaScript để chỉnh giao diện.
- `assets/dist/`: CSS, JavaScript, font và icon đã build để chạy ngay.
- `scripts/setup.php`: tạo hoặc reset database.
- `docs/`: báo cáo Word gốc.

`config.php` khởi tạo kết nối và session. `router.php` dùng khi chạy server PHP local, chặn truy cập file cấu hình và dữ liệu nội bộ.

## Ảnh và đặt hàng

Điền `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_FOLDER` trong `.env`.

Ảnh upload từ quản trị đi lên Cloudinary; database lưu URL để hiển thị. Ảnh mẫu cũng lấy từ Cloudinary, không cần ảnh gốc trong project. Giữ `.env` riêng trên máy của bạn.

Website thanh toán khi nhận hàng. Phí giao 20.000₫, miễn phí từ 200.000₫ tiền món. Tạo đơn sẽ kiểm tra lại giá và số phần, lưu đơn, trừ số phần và xóa món đã đặt khỏi giỏ.

## Sửa giao diện

CSS/JS đã build sẵn nên chạy website không cần `node_modules`. Khi sửa giao diện hoặc các class Tailwind:

```powershell
npm ci
npm run build
```

Hiệu ứng nhẹ nằm trong `input.css` và `tailwind.config.js`.
