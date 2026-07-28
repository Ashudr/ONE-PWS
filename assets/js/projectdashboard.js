<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ONEPWS | Project Dashboard</title>

<link rel="stylesheet" href="../../assets/css/style.css">
<link rel="stylesheet" href="../../assets/css/projectdashboard.css">

</head>

<body>

<div class="project-dashboard">

    <!-- ===========================
         PROJECT HEADER
    ============================ -->

    <header class="project-header">

        <div>

            <h1 id="projectName">
                Project Name
            </h1>

            <p id="projectNumber">
                SAP-2026-0001
            </p>

        </div>

        <div>

            <button id="backToBoard">
                ← Project Board
            </button>

        </div>

    </header>

    <!-- ===========================
         PROJECT INFORMATION
    ============================ -->

    <section class="project-info">

        <div class="info-card">
            <h3>Customer</h3>
            <p id="customerName">-</p>
        </div>

        <div class="info-card">
            <h3>Template</h3>
            <p id="projectTemplate">-</p>
        </div>

        <div class="info-card">
            <h3>Project Manager</h3>
            <p id="projectManager">-</p>
        </div>

        <div class="info-card">
            <h3>Priority</h3>
            <p id="projectPriority">-</p>
        </div>

        <div class="info-card">
            <h3>Start Date</h3>
            <p id="startDate">-</p>
        </div>

        <div class="info-card">
            <h3>End Date</h3>
            <p id="endDate">-</p>
        </div>

    </section>

    <!-- ===========================
         MODULES
    ============================ -->

    <section class="module-section">

        <h2>Project Modules</h2>

        <div
            class="module-grid"
            id="moduleGrid">

        </div>

    </section>

</div>

<script src="../../assets/js/database.js"></script>
<script src="../../assets/js/projectdashboard.js"></script>

</body>

</html>