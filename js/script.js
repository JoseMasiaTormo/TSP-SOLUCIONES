window.onload = function () {
  document.getElementById("tooltip").addEventListener("mouseover", toolTip);
  document.getElementById("tooltip").addEventListener("mouseout", toolTip);
};

// Insertar ToolTip (Primer formulario) /JavaScript/
function toolTip(elEvento) {
  var evento = elEvento || window.event;
  if (evento.type === "mouseover") {
    return overlib(
      "Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento."
    );
  } else if (evento.type === "mouseout") {
    return nd();
  }
}
