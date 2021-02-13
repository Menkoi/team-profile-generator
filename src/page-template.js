function pageTemplate(data) {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>My Team</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>

<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">My Team</h1>
    </div>
</div>
</div>
${data.managerName},

${data.managerId},

${data.managerEmail},

${data.managerOfficeNumber},

<h1>
${data.engineerName},

${data.engineerId},

${data.engineerEmail},

${data.engineerOfficeNumber}

github.com/${data.engineerGithub}
</h1>

<h2>
${data.internName},

${data.internId},

${data.internEmail},

${data.internOfficeNumber},
</h2>

</body>

</html>
  `
};

module.exports = pageTemplate;