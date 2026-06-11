<div align="center">

# 🚀 E-Inventory Web Application  
### UAS Pemrograman Web 2 - Decoupled Architecture Project

<img src="https://img.shields.io/badge/Project-UAS%20Web%202-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Developer-Aflah%20Athallah-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/NIM-312410280-orange?style=for-the-badge" />

<br><br>

<img src="https://img.shields.io/badge/Backend-CodeIgniter%204-red?style=flat-square&logo=codeigniter&logoColor=white" />
<img src="https://img.shields.io/badge/Frontend-VueJS%203-42b883?style=flat-square&logo=vue.js&logoColor=white" />
<img src="https://img.shields.io/badge/Database-MySQL-blue?style=flat-square&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/UI-TailwindCSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/API-RESTful-black?style=flat-square" />
<img src="https://img.shields.io/badge/Auth-Bearer%20Token-yellow?style=flat-square" />

<br><br>

> Sistem Manajemen Inventaris Barang berbasis **CodeIgniter 4 RESTful API** dan **VueJS 3 SPA**  
> dengan fitur login admin, token authentication, dashboard, dan CRUD data barang.

</div>

# UAS Pemrograman Web 2

## Sistem Manajemen Inventaris Barang (E-Inventory)

## 🧑‍💻 Developer Profile

| Information      | Detail                                    |
| ---------------- | ----------------------------------------- |
| **Name**         | Aflah Athallah                            |
| **Student ID**   | 312410280                                 |
| **Course**       | Pemrograman Web 2                         |
| **Assignment**   | Ujian Akhir Semester (UAS) - Proyek Akhir |
| **Project**      | Sistem Manajemen Inventaris Barang        |
| **Architecture** | Decoupled Architecture                    |
| **Role**         | Fullstack Web Developer                   |

---

## 1. Deskripsi Proyek

Proyek ini merupakan aplikasi **Sistem Manajemen Inventaris Barang (E-Inventory)** yang dikembangkan untuk memenuhi tugas Ujian Akhir Semester mata kuliah Pemrograman Web 2.

Aplikasi ini digunakan untuk mengelola data inventaris barang, kategori barang, supplier, serta stok barang. Sistem dibangun menggunakan arsitektur terpisah atau **Decoupled Architecture**, yaitu backend dan frontend dibuat secara terpisah.

Backend dikembangkan menggunakan **CodeIgniter 4** sebagai RESTful API server, sedangkan frontend dikembangkan menggunakan **VueJS 3** berbasis CDN dengan dukungan **Vue Router**, **Axios**, dan **TailwindCSS** untuk membangun antarmuka Single Page Application (SPA).

---

## 2. Tema Studi Kasus

Tema yang dipilih:

**Sistem Manajemen Inventaris Barang (E-Inventory)**

Fitur utama aplikasi:

* Login administrator
* Logout administrator
* Dashboard admin
* Menampilkan data barang
* Menambahkan data barang
* Mengedit data barang
* Menghapus data barang
* Menampilkan data kategori
* Menampilkan data supplier
* Proteksi endpoint API menggunakan Bearer Token
* Validasi akses halaman menggunakan Vue Router Navigation Guard
* Penyimpanan token login menggunakan localStorage
* Pengiriman token otomatis menggunakan Axios Interceptor

---

## 3. Teknologi yang Digunakan

### Backend

* PHP 8.2
* CodeIgniter 4
* RESTful API
* MySQL / MariaDB
* CodeIgniter Filter
* Bearer Token Authentication
* CORS Filter

### Frontend

* HTML
* VueJS 3 CDN
* Vue Router CDN
* Axios CDN
* TailwindCSS CDN
* JavaScript Modular Component

### Tools

* XAMPP
* phpMyAdmin
* Visual Studio Code
* Browser
* PowerShell / CMD
* Git dan GitHub

---

## 4. Arsitektur Aplikasi

Aplikasi ini menggunakan arsitektur terpisah antara backend dan frontend.

```text
Frontend VueJS SPA
        |
        | Axios HTTP Request
        |
Backend CodeIgniter 4 RESTful API
        |
        | Query Database
        |
Database MySQL / MariaDB
```

Backend berjalan pada:

```text
http://localhost:8080
```

Frontend berjalan melalui:

```text
http://localhost/UAS_Web2_312410280_Aflah_Athallah/frontend-spa/index.html
```

---

## 5. Struktur Folder Proyek

```text
UAS_Web2_312410280_Aflah_Athallah/
│
├── backend-api/
│   ├── app/
│   │   ├── Config/
│   │   ├── Controllers/
│   │   ├── Filters/
│   │   └── Models/
│   ├── public/
│   ├── system/
│   ├── writable/
│   ├── vendor/
│   ├── .env
│   ├── composer.json
│   └── spark
│
├── frontend-spa/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   └── Barang.js
│   ├── app.js
│   └── index.html
│
└── README.md
```

---

## 6. Struktur Database

Nama database:

```sql
uas_web2_inventory
```

Tabel yang digunakan:

1. `users`
2. `categories`
3. `suppliers`
4. `items`
5. `stock_histories`

Relasi antar tabel:

```text
categories      → items
suppliers       → items
items           → stock_histories
```

Penjelasan relasi:

* Satu kategori dapat memiliki banyak barang.
* Satu supplier dapat memasok banyak barang.
* Satu barang dapat memiliki banyak histori stok.

---

## 7. Skema Relasi Database

Tambahkan screenshot skema relasi tabel dari phpMyAdmin pada bagian ini.

```markdown
![Skema Relasi Database](screenshots/skema-database.png)
```

Contoh tabel yang digunakan:

```text
users
categories
suppliers
items
stock_histories
```

---

## 8. Akun Login Administrator

Gunakan akun berikut untuk login sebagai admin:

```text
Username : admin
Password : admin123
```

---

## 9. Endpoint API Backend

Base URL:

```text
http://localhost:8080
```

### Auth Endpoint

| Method | Endpoint  | Keterangan           |
| ------ | --------- | -------------------- |
| POST   | `/login`  | Login administrator  |
| POST   | `/logout` | Logout administrator |

### Category Endpoint

| Method | Endpoint           | Keterangan                  | Proteksi Token |
| ------ | ------------------ | --------------------------- | -------------- |
| GET    | `/categories`      | Menampilkan semua kategori  | Tidak          |
| GET    | `/categories/{id}` | Menampilkan detail kategori | Tidak          |
| POST   | `/categories`      | Menambah kategori           | Ya             |
| PUT    | `/categories/{id}` | Mengedit kategori           | Ya             |
| DELETE | `/categories/{id}` | Menghapus kategori          | Ya             |

### Supplier Endpoint

| Method | Endpoint          | Keterangan                  | Proteksi Token |
| ------ | ----------------- | --------------------------- | -------------- |
| GET    | `/suppliers`      | Menampilkan semua supplier  | Tidak          |
| GET    | `/suppliers/{id}` | Menampilkan detail supplier | Tidak          |
| POST   | `/suppliers`      | Menambah supplier           | Ya             |
| PUT    | `/suppliers/{id}` | Mengedit supplier           | Ya             |
| DELETE | `/suppliers/{id}` | Menghapus supplier          | Ya             |

### Item Endpoint

| Method | Endpoint      | Keterangan                | Proteksi Token |
| ------ | ------------- | ------------------------- | -------------- |
| GET    | `/items`      | Menampilkan semua barang  | Tidak          |
| GET    | `/items/{id}` | Menampilkan detail barang | Tidak          |
| POST   | `/items`      | Menambah barang           | Ya             |
| PUT    | `/items/{id}` | Mengedit barang           | Ya             |
| DELETE | `/items/{id}` | Menghapus barang          | Ya             |

---

## 10. Sistem Keamanan API

Backend menggunakan sistem keamanan sederhana berbasis **Bearer Token**.

Alur autentikasi:

1. Admin melakukan login melalui endpoint `/login`.
2. Server memvalidasi username dan password.
3. Jika login berhasil, server membuat token.
4. Token disimpan ke database pada tabel `users`.
5. Token dikirim ke frontend.
6. Frontend menyimpan token ke `localStorage`.
7. Axios Interceptor menyisipkan token secara otomatis ke setiap request.
8. Endpoint `POST`, `PUT`, dan `DELETE` hanya bisa diakses jika request membawa token valid.

Format header token:

```text
Authorization: Bearer TOKEN_LOGIN
```

---

## 11. Screenshot Pengujian API 401 Unauthorized

Endpoint manipulasi data akan gagal jika tidak membawa token.

Contoh request tanpa token:

```text
POST http://localhost:8080/categories
```

Hasil:

```text
401 Unauthorized
Token tidak ditemukan
```

Tambahkan screenshot pengujian API gagal tanpa token pada bagian ini.

```markdown
![API Error 401 Unauthorized](screenshots/api-401-unauthorized.png)
```

---

## 12. Screenshot API Berhasil Menampilkan Data

Contoh endpoint:

```text
GET http://localhost:8080/items
```

Tambahkan screenshot hasil JSON dari endpoint `/items`.

```markdown
![API Items](screenshots/api-items.png)
```

---

## 13. Tampilan Aplikasi

### Halaman Login

```markdown
![Halaman Login](screenshots/halaman-login.png)
```

### Dashboard Admin

```markdown
![Dashboard Admin](screenshots/dashboard-admin.png)
```

### Tabel Data Barang

```markdown
![Tabel Data Barang](screenshots/tabel-data-barang.png)
```

### Modal Tambah Barang

```markdown
![Modal Tambah Barang](screenshots/modal-tambah-barang.png)
```

### Modal Edit Barang

```markdown
![Modal Edit Barang](screenshots/modal-edit-barang.png)
```

### Hasil CRUD Barang

```markdown
![Hasil CRUD Barang](screenshots/hasil-crud-barang.png)
```

---

## 14. Fitur Frontend

Frontend dibangun menggunakan VueJS 3 berbasis CDN dengan konsep Single Page Application.

Fitur frontend:

* Routing halaman menggunakan Vue Router
* Halaman Beranda
* Halaman Login
* Halaman Dashboard Admin
* Halaman Data Barang
* Form tambah barang
* Form edit barang
* Hapus data barang
* Logout
* Penyimpanan token menggunakan localStorage
* Proteksi halaman admin menggunakan Navigation Guard
* Penyisipan token otomatis menggunakan Axios Interceptor
* Penanganan error 401 Unauthorized secara global

---

## 15. Hak Akses Pengguna

### Public / Pengunjung

Pengunjung tanpa login hanya dapat mengakses:

* Halaman Beranda
* Halaman Login

### Administrator

Administrator yang sudah login dapat mengakses:

* Dashboard Admin
* Data Barang
* Form tambah barang
* Form edit barang
* Hapus barang
* Logout

---

## 16. Cara Instalasi dan Menjalankan Project

### A. Persiapan

Pastikan perangkat sudah memiliki:

* XAMPP
* PHP
* Composer
* Browser
* Visual Studio Code

---

### B. Menjalankan Database

1. Buka XAMPP Control Panel.
2. Jalankan Apache dan MySQL.
3. Buka phpMyAdmin:

```text
http://localhost/phpmyadmin
```

4. Buat database:

```sql
uas_web2_inventory
```

5. Import atau jalankan SQL untuk membuat tabel:

```sql
CREATE DATABASE IF NOT EXISTS uas_web2_inventory;
USE uas_web2_inventory;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    token VARCHAR(255) DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NULL,
    address TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    supplier_id INT NOT NULL,
    item_code VARCHAR(50) NOT NULL UNIQUE,
    item_name VARCHAR(150) NOT NULL,
    stock INT DEFAULT 0,
    unit VARCHAR(50) DEFAULT 'pcs',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_items_category 
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT fk_items_supplier 
        FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE stock_histories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    type ENUM('IN', 'OUT') NOT NULL,
    quantity INT NOT NULL,
    note TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_stock_item 
        FOREIGN KEY (item_id) REFERENCES items(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users (name, username, password) VALUES
('Administrator', 'admin', '$2y$12$O4EFixFnNLSya5f6qobOfuqmUEBToW36DKddhLFQBW3sq4ubGE6Qe');

INSERT INTO categories (name, description) VALUES
('Elektronik', 'Kategori barang elektronik'),
('ATK', 'Alat tulis kantor'),
('Furniture', 'Perlengkapan meja, kursi, dan lemari');

INSERT INTO suppliers (name, phone, address) VALUES
('PT Sumber Jaya', '081234567890', 'Jl. Merdeka No. 10'),
('CV Maju Bersama', '082345678901', 'Jl. Sudirman No. 22');

INSERT INTO items (category_id, supplier_id, item_code, item_name, stock, unit) VALUES
(1, 1, 'BRG001', 'Laptop Lenovo', 10, 'unit'),
(2, 2, 'BRG002', 'Pulpen Hitam', 100, 'pcs'),
(3, 1, 'BRG003', 'Kursi Kantor', 15, 'unit');

INSERT INTO stock_histories (item_id, type, quantity, note) VALUES
(1, 'IN', 10, 'Stok awal laptop'),
(2, 'IN', 100, 'Stok awal pulpen'),
(3, 'IN', 15, 'Stok awal kursi');
```

---

### C. Menjalankan Backend

Masuk ke folder backend:

```bash
cd C:\xampp\htdocs\UAS_Web2_312410280_Aflah_Athallah\backend-api
```

Jalankan server CodeIgniter 4:

```bash
php spark serve --port 8080
```

Jika berhasil, akan muncul:

```text
CodeIgniter development server started on http://localhost:8080
```

Cek endpoint:

```text
http://localhost:8080/items
```

---

### D. Konfigurasi File `.env`

Pastikan file `.env` pada folder `backend-api` memiliki konfigurasi database berikut:

```env
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = localhost
database.default.database = uas_web2_inventory
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
database.default.DBPrefix =
database.default.port = 3306
```

---

### E. Menjalankan Frontend

Pastikan Apache XAMPP aktif.

Buka frontend melalui browser:

```text
http://localhost/UAS_Web2_312410280_Aflah_Athallah/frontend-spa/index.html
```

Login menggunakan akun:

```text
Username : admin
Password : admin123
```

---

## 17. Pengujian Login

Request login:

```text
POST http://localhost:8080/login
```

Body JSON:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Response berhasil:

```json
{
  "status": true,
  "message": "Login berhasil",
  "token": "token_login",
  "user": {
    "id": "1",
    "name": "Administrator",
    "username": "admin"
  }
}
```

---

## 18. Pengujian Proteksi Token

Request tanpa token:

```text
POST http://localhost:8080/categories
```

Response gagal:

```json
{
  "status": false,
  "message": "Token tidak ditemukan"
}
```

Status response:

```text
401 Unauthorized
```

Request dengan token:

```text
POST http://localhost:8080/categories
Authorization: Bearer TOKEN_LOGIN
```

Response berhasil:

```json
{
  "status": true,
  "message": "Kategori berhasil ditambahkan"
}
```

---

## 19. Link Demo Aplikasi

Tambahkan link demo aplikasi pada bagian ini:

```text
Link Demo: -
```

Jika belum menggunakan hosting, bagian ini dapat diisi dengan keterangan:

```text
Demo dijalankan secara lokal melalui localhost.
```

---

## 20. Link Video Presentasi

Tambahkan link video presentasi pada bagian ini:

```text
Link Video Presentasi: -
```

Format video presentasi:

* Durasi maksimal 7 menit
* Menampilkan wajah presenter
* Diawali dengan perkenalan
* Menjelaskan proyek yang dibuat
* Menampilkan demo aplikasi
* Menampilkan proses login dan CRUD
* Menampilkan pengujian API error 401 Unauthorized

---

## 21. Kesimpulan

Aplikasi E-Inventory ini berhasil dibuat dengan menerapkan arsitektur terpisah antara backend dan frontend.

Backend menggunakan CodeIgniter 4 sebagai RESTful API server yang terhubung dengan database MySQL. Frontend menggunakan VueJS 3 sebagai Single Page Application dengan dukungan Vue Router, Axios, dan TailwindCSS.

Aplikasi ini telah memenuhi kebutuhan utama, yaitu login administrator, dashboard, pengelolaan data barang, CRUD data, penyimpanan token di localStorage, proteksi endpoint menggunakan Bearer Token, serta penanganan CORS agar frontend dan backend dapat saling terhubung.

---

## 22. Status Project

Status pengerjaan:

```text
Selesai
```

Fitur yang sudah berjalan:

* Backend CodeIgniter 4 RESTful API
* Database MySQL
* Relasi tabel database
* Login administrator
* Bearer Token Authentication
* CORS Filter
* Endpoint GET, POST, PUT, DELETE
* Frontend VueJS SPA
* Vue Router
* Axios Interceptor
* Navigation Guard
* TailwindCSS UI
* CRUD Data Barang
* Logout Administrator

```
```

---

<div align="center">

## 👨‍💻 Developed By

<img src="https://img.shields.io/badge/Aflah%20Athallah-Fullstack%20Web%20Developer-blueviolet?style=for-the-badge" />

<br><br>

<img src="https://img.shields.io/badge/CodeIgniter%204-Backend%20API-red?style=flat-square&logo=codeigniter&logoColor=white" />
<img src="https://img.shields.io/badge/VueJS%203-Frontend%20SPA-42b883?style=flat-square&logo=vue.js&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-Database-blue?style=flat-square&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCSS-Modern%20UI-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" />

<br><br>

**UAS Pemrograman Web 2**  
**Universitas Pelita Bangsa**  
**2026**

<br>

<img src="https://img.shields.io/badge/Made%20with-PHP%20%7C%20VueJS%20%7C%20MySQL%20%7C%20TailwindCSS-success?style=for-the-badge" />

</div>
