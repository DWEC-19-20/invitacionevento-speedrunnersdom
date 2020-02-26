window.addEventListener("load", inicio);

function inicio() {
  for (let i = 0; i < document.getElementsByClassName("mispan").length; i++) {
    document
      .getElementsByClassName("mispan")
      [i].addEventListener("click", editar);
  }
  document.getElementById("assist").addEventListener("click", yesNo);
  document.getElementById("send").addEventListener("click", addPeople);

  for (let i = 0; i < document.getElementsByClassName("check").length; i++) {
    document
      .getElementsByClassName("check")
      [i].addEventListener("click", confirmados);
  }
  for (let i = 0; i < document.getElementsByClassName("remove").length; i++) {
    document
      .getElementsByClassName("remove")
      [i].addEventListener("click", deletePpl);
  }
}

function addPeople(e) {
  e.preventDefault();
  var invitado = document.getElementById("invite").value.trim();
  for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
    if (
      invitado == document.getElementsByTagName("span")[i].innerHTML ||
      invitado == ""
    ) {
      alert("Nombre repetido o vacio");
      return false;
    }
  }
  var li = document.createElement("li");
  var cosaUno = document.createElement("span");
  cosaUno.innerHTML = invitado;
  var labelConfirmed = document.createElement("label");
  labelConfirmed.innerHTML = "Confirmed";
  var checkBox = document.createElement("input");
  checkBox.setAttribute("class", "check");
  checkBox.setAttribute("type", "checkBox");
  checkBox.addEventListener("click", confirmados);
  var botonEdit = document.createElement("button", {
    class: "mispan"
  });

  botonEdit.addEventListener("click", editar);

  botonEdit.innerHTML = "edit";
  var botonRemove = document.createElement("button", {
    class: "remove"
  });
  botonRemove.addEventListener("click", deletePpl);
  botonRemove.innerHTML = "remove";

  li.appendChild(cosaUno);
  labelConfirmed.appendChild(checkBox);
  li.appendChild(labelConfirmed);
  li.appendChild(botonEdit);
  li.appendChild(botonRemove);
  document.getElementById("invitedList").appendChild(li);
}

function editar(e) {
  var boton = e.target;
  var elemento = boton.parentElement.getElementsByTagName("span")[0];

  elemento.setAttribute("contentEditable", true);
  elemento.focus();

  boton.innerHTML = "Guardar";

  boton.addEventListener("click", aceptar);
}

function aceptar(e) {
  var boton = e.target;
  var elemento = boton.parentElement.getElementsByTagName("span")[0];

  for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
    if (
      elemento.innerHTML.trim() ==
        document.getElementsByTagName("span")[i].innerHTML ||
      elemento.innerHTML.trim() == ""
    ) {
      elemento.setAttribute("contentEditable", true);

      editando = true;
      elemento.focus();
    } else {
      editando = false;
      elemento.setAttribute("contentEditable", false);
      elemento.parentElement.getElementsByClassName("mispan")[0].innerHTML =
        "edit";
    }
    boton.removeEventListener("click", aceptar);
  }
}

function yesNo() {
  if (document.getElementById("assist").checked) {
    for (let i = 0; i < document.getElementsByClassName("check").length; i++)
      if (!document.getElementsByClassName("check")[i].checked) {
        document.getElementsByClassName("check")[
          i
        ].parentElement.parentElement.style.display = "none";
      }
  } else {
    for (let i = 0; i < document.getElementsByClassName("check").length; i++)
      document.getElementsByClassName("check")[
        i
      ].parentElement.parentElement.style.display = "initial";
  }
}

function confirmados(e) {
  var checkBox = e.target;
  var elem = checkBox.parentElement.parentElement;

  if (checkBox.checked) {
    elem.setAttribute("class", "responded");
  } else {
    elem.setAttribute("class", "");
  }
}

function deletePpl(e) {
  var borrar = e.target;
  var elemento = borrar.parentElement;

  if (confirm("¿Deseas borrar?")) {
    elemento.setAttribute("id", "adioh");
    document
      .getElementById("invitedList")
      .removeChild(document.getElementById("adioh"));
  }
}
