<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /> -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"> -->
  <link rel="icon" href="{{ asset('/icon-head.png') }}">
  <!-- <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'> -->
  @vite('resources/js/app.jsx')
  @vite('resources/css/app.css')
  @inertiaHead
  <style>
  body {
    background-color: #1f1f1f;
    /* font-family: 'Poppins'; */
  }
  </style>
</head>

<body>

  @inertia

</body>

</html>