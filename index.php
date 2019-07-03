<?php
$localhost = "den1.mysql6.gear.host";
$usuario = "anmx";
$contraseña = "Ne6gy~_Q3RXM";
$basededatos = "anmx";
$con = new mysqli("$localhost", "$usuario", "$contraseña", "$basededatos");
//$con = new mysqli("localhost", "root", "", "farmlandsdb");
//$sql = "SELECT fecha_muestra, ph, temperatura_m, humedad, presion_atmosferica FROM muestra_prueba";
//$limite = $_POST["limite"];
//$cultivo = $_POST["cultivo"];
$sql =  "SELECT * FROM anime";
$res = $con->query($sql);
$con->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="./css/style.css">
  <title>Title</title>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

  <!-- OTHER CSS THINGS-->
  <link rel="stylesheet" href="assets/fontawesome-free-5.8.2-web/css/all.css" />
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@4/themes/light.css" />
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@4/themes/light-border.css" />
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@4/themes/google.css" />
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@4/themes/translucent.css" />
</head>

<body>
  <div class="container mt-5">
    <div class="align-items-center table-responsive-xl">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">TIPO</th>
            <th scope="col">TEMPORADA</th>
            <th scope="col">TRANSMISION</th>
            <th scope="col"># DE CAPITULOS</th>
            <th scope="col">CAPITULOS VISTOS</th>
            <th scope="col">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <?php
          $cont = 0;
          while ($fila = $res->fetch_assoc()) {
            echo "<tr id='fila$cont'>";
            echo "<th name='id'>" . $fila["anime_id"] . "</th>";
            echo "<td name='nombre'>" . $fila["nombre"] . "</td>";
            echo "<td name='tipo'>" . $fila["tipo"] . "</td>";
            echo "<td name='temporada'>" . $fila["temporada"] . "</td>";
            echo "<td name='transmision'>" . $fila["transmision"] . "</td>";
            echo "<td name='capitulos'>" . $fila["capitulos"] . "</td>";
            echo "<td name='vistos'>" . $fila["vistos"] . "</td>";
            echo "<td name='estadoActual'></td>";
            echo "</tr>";
            $cont++;
          }
          ?>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td class="table-primary">@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>

            <form action="" method="POST">
              <div class="form-group">
                <th scope="row">
                  <button class="btn btn-success">
                    <i class="fas fa-plus"></i>
                  </button>
                </th>
                <td>
                  <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="" placeholder="Ingrese el nombre de la produccion" />
                </td>
                <td>
                  <select class="custom-select" id="tipo" name="tipo">
                    <option selected>Seleccione el tipo de produccion</option>
                    <option value="SERIE">SERIE</option>
                    <option value="SERIE ANIMADA">SERIE ANIMADA</option>
                    <option value="SERIE DE ANIME">SERIE DE ANIME</option>
                    <option value="PELICULA">PELICULA</option>
                    <option value="PELICULA ANIMADA">PELICULA ANIMADA</option>
                    <option value="PELICULA DE ANIME">PELICULA DE ANIME</option>
                    <option value="OVA">OVA</option>
                  </select>
                </td>
                <td>
                  <input type="number" class="form-control" name="temporada" id="temporada" min="0" value="0" />
                </td>
                <td>
                  <select class="custom-select" id="tipo" name="tipo">
                    <option selected>Seleccione estado de transmision</option>
                    <option value="EN EMISION">EN EMISION</option>
                    <option value="FINALIZADO">FINALIZADO</option>
                    <option value="NO APLICA">NO APLICA</option>
                  </select>
                </td>
                <td>
                  <input type="number" class="form-control" name="numeroCapitulos" id="numeroCapitulos" min="0" value="0" />
                </td>
                <td>
                  <input type="number" class="form-control" name="numeroVistos" id="numeroVistos" min="0" value="0" />
                </td>
              </div>
            </form>

          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="container container_help">
    <label id="uNeedHelp">Necesitas ayuda<i class="far fa-question-circle"></i></label>
    <label class="switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div class="slider round"></div>
    </label>
    <label class="checkStatus"></label>
  </div>

  <i hidden id="cont"><?php echo $cont; ?></i>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="./js/tippy.min.js"></script>
  <script src="./js/script.js"></script>
  <script src="./js/tooltips.js"></script>
</body>

</html>