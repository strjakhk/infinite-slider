## infinite-slider v2023.0.1

autor
### Juan Pablo Strack

___________________

**Slider automático con desplazamiento infinito.**

El archivo slider-styles.css no debe modificarse, y los estilos aplicados dentro tampoco.

Los estilos personalizados para los elementos dentro del slider tienen que aplicarse en una nueva clase de css (en el ejemplo de abajo, "center").

```
<div id="slider-content" class="slider-content center">
```

El ANCHO total del slider se debe definir en el contenedor principal del slider (en el ejemplo de abajo, se define un ancho en la clase "center"):

```
<style>

  .center{
    width: 70%;
    margin: auto;
  }

</style>

<div id="slider-content" class="slider-content center">
```

El ALTO total del slider se debe definir en los elementos que tengan dentro del slider, incluso los que no se muestran (en el ejemplo de abajo, se define una altura en la clase "set-height"):

```
<style>
  .set-height{
    height: 200px;
  }
</style>

<div class="slider-item set-height">1</div>
<div class="slider-item set-height">2</div>
<div class="slider-item set-height">3</div>
<div class="slider-item set-height">4</div>
```

El resto de estilos que quieran aplicar sobre los elementos del slider, también deben aplicarse sobre los elementos no mostrados (el primero y el último en el archivo index, que están entre los comentarios "INVISIBLE")
