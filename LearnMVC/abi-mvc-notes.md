# Nama Developer: Abi
# Kelas: FSW Pagi
## 14 Februari 2021
# Learn MVC
## 1. Model
Model merupakan sebagai langkah awal setelah setup awalan, lebih lengkapnya [disini](https://github.com/nandanugg/ArticleAPIWithMVC).
Singkatnya kita mensetup database kita dengan orm pada model ini, misalnya membuat table dengan nama Articles yang memiliki beberapa attributes seperti ini:
```
sequelize model:create --name Articles --attributes content:text
```
Maka kita akan memiliki beberapa column pada Articles seperti content yang memiliki data type text. Kemudian langkah selanjutnya memindahkannya ke database kita
```
sequelize db:migrate
```
## 2. View
View merupakan hal-hal yang ditampilkan secara interface, kita bisa melihatnya secara langsung melalui tampilan html. Tampilan yang kita liat merupakan representasi dari database yang dikerjakan backend dibalik layar.
```
<body>
  <h1>Articles</h1>
  <!-- ejseach-->
  <% articles.forEach(article=> { %>
    <p>
      <!--ejsout-->
      <%= article.content %>
    </p>
    <form action="/delete" method="get">
      <input type="hidden" name="id" value="<%= article.id %> ">
      <button type="submit">delete</button>
    </form>
    <% }) %>
```
## 3. Controller
Controller merupakan sebagai hal yang biasanya berisi logic dari backend berupa response yang nantinya akan menghubungkan sesuai dengan request dari user. 
```
async index(req, res) {
    const articles = await Articles.findAll({})
    res.render('index', { articles })
  }
```