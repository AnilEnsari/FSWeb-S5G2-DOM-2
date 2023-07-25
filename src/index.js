import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
document.querySelector(".intro img").addEventListener("mouseover", (e) => {
  document
    .querySelector(".intro img")
    .setAttribute(
      "src",
      "https://hlkiurt3.rocketcdn.com/news/bd3b79729bfb4298bc913bbe9cf23b83.jpeg"
    );
});
document.querySelector(".intro img").addEventListener("click", (e) => {
  document
    .querySelector(".intro img")
    .setAttribute("src", "http://localhost:9000/img/fun-bus.jpg");
});
const altBaslik = document.querySelector("h2");
altBaslik.addEventListener("dblclick", (e) => {
  altBaslik.innerHTML = "ZAAHAHAHAHA";
});

document.body.addEventListener("keydown", (e) => {
  document.querySelector("h1").innerHTML = "ŞAMPİYON GALATASARAY";
});
document.body.addEventListener("scroll", (e) => {
  document.querySelector("nav a").innerHTML = "MAURO";
});
