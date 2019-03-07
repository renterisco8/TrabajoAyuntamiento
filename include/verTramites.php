<?php
    // ESTABLECE LA CONEXIÓN CON LA BASE DE DATOS
    $link = new PDO('mysql:host=localhost;dbname=ayuntamiento', 'root', '');
?>

	<script type="text/javascript" src="js/jspdf.min.js"></script>

    <script type="text/javascript" src="js/genPDF.js"></script>

    <div class="tabla_tramites">
    <?php foreach ($link->query('SELECT * from tramites') as $row){ ?>
        <a  href="javascript: <?php echo $row['contenido_tramite'] ?>">
        <div class="divGenerar">
            <div>
                <p>
                <?php echo $row['nombre_tramite'] ?>
                <?php echo " " ?>
                <!-- <?php //echo $row['contenido_tramite'] ?> -->
            </div>
            <div class="generar">
                <p><img src="img/documento.png">
            </div>
        </div>
    </a>
    <?php } ?> 
</div>