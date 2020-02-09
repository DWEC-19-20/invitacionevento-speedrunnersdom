window.addEventListener("load", inicio);

function inicio() {
  for (let i = 0; i < document.getElementsByClassName("mispan").length; i++) {
    document.getElementsByClassName("mispan")[i].addEventListener("click", editar);
  }
  document.getElementById("assist").addEventListener("click", yesNo);
  document.getElementById("send").addEventListener("click", addPeople);

  for (let i = 0; i < document.getElementsByClassName("check").length; i++) {
    document.getElementsByClassName("check")[i].addEventListener("click", confirmados);
  }
  for (let i = 0; i < document.getElementsByClassName("remove").length; i++) {
    document.getElementsByClassName("remove")[i].addEventListener("click", deletePpl);
  }
}

function addPeople(e) {
  e.preventDefault();
  var invitado = document.getElementById("invite").value;
  for (let c = 0; c < document.getElementsByTagName("span").length; c++) {
    if (invitado == document.getElementsByTagName("span")[c].innerHTML || invitado == "") {
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
  elemento.focus();
  elemento.contentEditable = true;

  elemento.addEventListener("blur", function () {
    if (!elemento.innerHTML == "") {
      elemento.contentEditable = false;
    } else {
      elemento.focus();
    }
  });
}

function yesNo() {
  if (document.getElementById("assist").checked) {
    for (let c = 0; c < document.getElementsByClassName("check").length; c++)
      if (!document.getElementsByClassName("check")[c].checked) {
        document.getElementsByClassName("check")[c].parentElement.parentElement.style.display = "none";
      }
  } else {
    for (let c = 0; c < document.getElementsByClassName("check").length; c++)
      document.getElementsByClassName("check")[c].parentElement.parentElement.style.display = "initial";
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