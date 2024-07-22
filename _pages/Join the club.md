---
layout: page
title: join the club
permalink: /join-the-club/
description: joining the Paris RNA Club
nav: true
nav_order: 2
---

If you would like to join the club and subscribe to the newsletter, please fill in the required information below. We look forward to seeing you at the next meeting!

<style>
    .join-club-form {
        max-width: 800px;
        margin: auto;
        overflow: hidden;
        padding: 20px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .join-club-form h2 {
        color: #0073e6;
    }
    .join-club-form form {
        display: flex;
        flex-direction: column;
    }
    .join-club-form label {
        margin-bottom: 5px;
        color: #000; /* Change label text color to black */
    }
    .join-club-form input[type="text"], .join-club-form input[type="email"] {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .join-club-form input[type="submit"] {
        padding: 10px;
        border: none;
        border-radius: 4px;
        background: #0073e6;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
    .join-club-form input[type="submit"]:hover {
        background: #005bb5;
    }
</style>

<div class="join-club-form">
    <h2>Joining the Club</h2>
    <form action="/submit_form" method="post">
        <label for="name">Name <span style="color: red;">(required)</span></label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email <span style="color: red;">(required)</span></label>
        <input type="email" id="email" name="email" required>
        
        <input type="submit" value="Submit">
    </form>
</div>
