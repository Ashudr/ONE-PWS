/*==========================================================
    ONEPWS PROJECT BOARD
    PROJECT BOARD SPECIFIC STYLE
==========================================================*/


/*==========================================================
    PROJECT BOARD LAYOUT
==========================================================*/

.app-container{

    display:flex;

    min-height:100vh;

}


/*==========================================================
    SIDEBAR
==========================================================*/

.app-container .sidebar{

    width:260px;

    min-width:260px;

    min-height:100vh;

    background:#ffffff;

    border-right:1px solid #e2e8f0;

    padding:18px 0;

    flex-shrink:0;

}


/*==========================================================
    SIDEBAR TITLE
==========================================================*/

.menu-title{

    padding:12px 28px 16px;

    font-family:'Poppins',sans-serif;

    font-size:11px;

    font-weight:600;

    letter-spacing:1.4px;

    color:#94a3b8;

}


/*==========================================================
    SIDEBAR MENU ITEM
==========================================================*/

.menu-item{

    display:flex;

    align-items:center;

    gap:16px;

    margin:6px 16px;

    padding:14px 18px;

    min-height:48px;

    border-radius:12px;

    background:transparent;

    color:#334155;

    text-decoration:none;

    font-family:'Poppins',sans-serif;

    font-size:15px;

    font-weight:500;

    transition:all .2s ease;

}


/*==========================================================
    SIDEBAR ICON
==========================================================*/

.menu-item i{

    width:20px;

    min-width:20px;

    text-align:center;

    font-size:16px;

}


/*==========================================================
    SIDEBAR HOVER
==========================================================*/

.menu-item:hover{

    background:#f1f5ff;

    color:#2563eb;

}


/*==========================================================
    ACTIVE SIDEBAR ITEM
==========================================================*/

.menu-item.active{

    background:#2563eb;

    color:#ffffff;

    box-shadow:0 8px 20px rgba(37,99,235,.20);

}


/*==========================================================
    ACTIVE HOVER
==========================================================*/

.menu-item.active:hover{

    background:#2563eb;

    color:#ffffff;

}


/*==========================================================
    LOGOUT
==========================================================*/

.menu-item.logout{

    margin-top:25px;

}


.menu-item.logout:hover{

    background:#fff1f2;

    color:#e11d48;

}


/*==========================================================
    MAIN CONTENT
==========================================================*/

.app-container .main-content{

    flex:1;

    min-width:0;

    padding:30px;

    background:#f5f7fb;

    overflow-x:auto;

}


/*==========================================================
    HEADER
==========================================================*/

.top-header{

    height:75px;

    background:#ffffff;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 30px;

    box-shadow:0 2px 10px rgba(0,0,0,.06);

}


/*==========================================================
    LOGO AREA
==========================================================*/

.logo-area{

    display:flex;

    align-items:center;

    gap:15px;

}


.logo-area img{

    height:42px;

    width:auto;

}


.logo-area h2{

    margin:0;

    color:#1e293b;

    font-size:22px;

}


.logo-area p{

    margin:3px 0 0;

    font-size:13px;

    color:#64748b;

}


/*==========================================================
    HEADER ACTIONS
==========================================================*/

.header-actions{

    display:flex;

    align-items:center;

    gap:12px;

}


.header-actions input{

    width:260px;

    padding:11px 15px;

    border:1px solid #dbe3ef;

    border-radius:10px;

    outline:none;

    background:#ffffff;

}


.header-actions input:focus{

    border-color:#2563eb;

}


.header-actions button{

    border:none;

    background:#ffffff;

    cursor:pointer;

    padding:10px 14px;

    border-radius:10px;

}


.header-actions button:hover{

    background:#f1f5ff;

}


/*==========================================================
    PAGE HEADER
==========================================================*/

.page-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:25px;

}


.page-header h1{

    margin:0;

    font-size:28px;

    color:#172033;

}


/*==========================================================
    NEW PROJECT BUTTON
==========================================================*/

#newProject{

    background:#2563eb;

    color:#ffffff;

    border:none;

    padding:12px 22px;

    border-radius:10px;

    cursor:pointer;

    font-family:'Poppins',sans-serif;

    font-weight:600;

}


#newProject:hover{

    background:#1d4ed8;

}


/*==========================================================
    KPI
==========================================================*/

.kpi-container{

    display:grid;

    grid-template-columns:repeat(4,minmax(0,1fr));

    gap:20px;

    margin-bottom:25px;

}


.kpi-box{

    background:#ffffff;

    border-radius:14px;

    padding:22px;

    box-shadow:0 4px 15px rgba(15,23,42,.06);

}


.kpi-box h3{

    margin:0 0 10px;

    color:#64748b;

    font-size:15px;

}


.kpi-box h2{

    margin:0;

    color:#2563eb;

    font-size:28px;

}


/*==========================================================
    FILTERS
==========================================================*/

.filter-row{

    display:flex;

    flex-wrap:wrap;

    gap:14px;

    margin-bottom:30px;

}


.filter-row select{

    padding:10px 15px;

    min-width:150px;

    border-radius:9px;

    border:1px solid #dbe3ef;

    background:#ffffff;

    color:#334155;

}


/*==========================================================
    PROJECT GRID
==========================================================*/

.project-grid{

    display:grid;

    grid-template-columns:

        repeat(auto-fill,minmax(300px,1fr));

    gap:22px;

}


/*==========================================================
    PROJECT CARD
==========================================================*/

.project-card{

    background:#ffffff;

    border-radius:15px;

    padding:24px;

    box-shadow:0 5px 18px rgba(15,23,42,.07);

    transition:transform .2s ease,
               box-shadow .2s ease;

}


.project-card:hover{

    transform:translateY(-3px);

    box-shadow:0 9px 24px rgba(15,23,42,.10);

}


/*==========================================================
    PROJECT PROGRESS
==========================================================*/

.project-progress{

    width:100px;

    height:100px;

    margin:0 auto 20px;

    border-radius:50%;

    border:8px solid #2563eb;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:24px;

    font-weight:700;

}


/*==========================================================
    PROJECT TEXT
==========================================================*/

.project-card h2{

    margin-bottom:12px;

    color:#172033;

}


.project-card p{

    margin:8px 0;

    color:#64748b;

}


/*==========================================================
    OPEN PROJECT
==========================================================*/

.openProject{

    width:100%;

    margin-top:20px;

    background:#1e293b;

    color:#ffffff;

    border:none;

    padding:12px;

    border-radius:9px;

    cursor:pointer;

}


.openProject:hover{

    background:#2563eb;

}


/*==========================================================
    RESPONSIVE
==========================================================*/

@media(max-width:900px){

    .app-container .sidebar{

        width:220px;

        min-width:220px;

    }

    .kpi-container{

        grid-template-columns:
            repeat(2,minmax(0,1fr));

    }

}


@media(max-width:700px){

    .app-container .sidebar{

        width:190px;

        min-width:190px;

    }

    .menu-item{

        margin:4px 10px;

        padding:12px;

    }

    .menu-item span{

        font-size:13px;

    }

    .main-content{

        padding:20px;

    }

}