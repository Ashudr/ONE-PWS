"use strict";

/*==================================================
            ONEPWS DATABASE ENGINE
            Version 1.0
==================================================*/

const DATABASE_KEY = "ONEPWS_DATABASE";

/*==================================================
            LOAD DATABASE
==================================================*/

function loadDatabase() {

    let db = localStorage.getItem(DATABASE_KEY);

    if (db === null) {

        db = {

            projects: [],

            customers: [],

            users: [],

            notifications: []

        };

        localStorage.setItem(
            DATABASE_KEY,
            JSON.stringify(db)
        );

        return db;

    }

    return JSON.parse(db);

}

/*==================================================
            SAVE DATABASE
==================================================*/

function saveDatabase(database) {

    localStorage.setItem(

        DATABASE_KEY,

        JSON.stringify(database)

    );

}

/*==================================================
            SAVE PROJECT
==================================================*/

function saveProject(project) {

    let db = loadDatabase();

    db.projects.push(project);

    saveDatabase(db);

}

/*==================================================
            GET ALL PROJECTS
==================================================*/

function getProjects() {

    let db = loadDatabase();

    return db.projects;

}

/*==================================================
            CLEAR DATABASE
            (Development Only)
==================================================*/

function clearDatabase() {

    localStorage.removeItem(DATABASE_KEY);

}