var text = new Blotter.Text("regras", {
    family : "serif",
    size : 100,
    fill : "#FFFFFF"
});

var material = new Blotter.FliesMaterial();

// setting up values for the material
material.uniforms.uPointCellWidth.value = 0.012;
material.uniforms.uPointRadius.value = 0.85;
material.uniforms.uSpeed.value = 2.0;


var blotter = new Blotter(material, { texts : text });

var elem = document.getElementById("flies-rules-header");
var scope = blotter.forText(text);

scope.appendTo(elem);