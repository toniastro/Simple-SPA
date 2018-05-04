
<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SPA- Laravel and React</title>
        <link href="<?php echo e(mix('css/app.css')); ?>" rel="stylesheet" type="text/css">
    </head>
    <body>
    <br>
    <h2 style="text-align: center"> <u> My Movies Listings and Ratings.</u> </h2>
    <br>
    
        <div id="root"></div>
        <script src="<?php echo e(mix('js/app.js')); ?>" ></script>
    </body>
</html>