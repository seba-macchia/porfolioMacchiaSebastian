let url = window.location.href;

if (!url.includes("contact")) {
  window.onload = getAll;
}

function getAll() {
  fetch("https://porfolio-personal.free.mockoapp.net/data")
    .then((resp) => {
      return resp.json();
    })
    .then((dataArray) => {
      dataArray.forEach((data) => {
        let proyectos = document.getElementById("proyectos");

        let article = document.createElement("article");
        article.className = "proyectos-proyecto";

        let title = document.createElement("h3");
        title.className = "proyectos-proyecto-titulo";
        title.innerHTML = data.title;

        let description = document.createElement("p");
        description.className = "proyectos-proyecto-descripcion";
        description.innerHTML = data.description;

        let url = document.createElement("a");
        url.className = "proyectos-proyecto-url";
        url.href = data.url;
        url.innerHTML = "Link al repositorio";

        let img = document.createElement("img");
        img.className = "proyectos-proyecto-img";
        img.src = data.image;

        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(description);
        article.appendChild(url);

        proyectos.appendChild(article);
      });
    });
}
function sendMail() {
  const form = document.getElementById("formulario");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
  });

  emailjs.init("7g16FeZAvnGlWvisP");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  emailjs
    .send("portafolioApp", "template_mail", {
      to_email: "macchiasebastianprog@gmail.com",
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(function response() {
      alert("Email enviado correctamente!");
      form.reset();
    });
}

