## Nama Developer: Upi

## Kelas: FSW Siang

### 14 Februari 2021

# Learn MVC

### 1. Model

Model dalam design pattern MVC merupakan tempat untuk membuat sebuah konfigurasi table database, jika kita menggunakan sequelize ORM, maka kita perlu membuat model nya (misalnya model sebuah artikel) dengan menggunakan perintah berikut:

```bash
sequelize model:create --name Articles --attributes content:text
```

Dengan menjalankan perintah di atas, maka sequelize akan membuatkan sebuah model baru dengan nama articles yang di dalamnya terdapat kode untuk membuat table bernama `Articles` dan kolom bernama `content`

Kemudian migrasikan dengan menggunakan perintah berikut:

```bash
sequelize db:migrate 
```

### 2. View

View digunakan untuk meletakkan file-file yang berhubungan dengan tampilan atau UI dari sisi client, misalnya file html, css, dan lainnya. Untuk menerapkan view, cukup buat sebuah direktori baru bernama `views` dan buat file html di dalamnya, misalnya:

`index.ejs`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Learn MVC</title>
</head>
<body>
    <h1>Articles</h1>
    <div>
        <!-- ejseach -->
        <% articles.forEach(article=> { %>
            <p>
                <!-- ejsout -->
                <%= article.content %>
            </p>
            <% }) %>
    </div>
</body>
</html>
```

File HTML di atas merupakan sebuah file html dengan menggunakan template dari ejs, yang nantinya ketika dijalankan akan menampilkan daftar konten dari artikel-artikel yang ada di database

### 3. Controller

Controller berisikan logika-logika dan rangkaian proses yang akan dilakukan ketika client mengakses suatu route, misalnya ketika client mengakses route `/articles` maka request dari client akan ditangani oleh controller, contohnya jika menggunakan sequelize untuk mengambil seluruh data artikel dari database

`articleController.js`

```jsx
async get(req, res) {
        const articles = await Articles.findAll({})
        res.render('index', { articles })
}
```

Ketika client mengakses route `/articles` maka dari sisi controller akan memberikan daftar keseluruhan artikel lalu memberikan data tersebut ke dalam view