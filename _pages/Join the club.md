---
layout: page
title: Join the Club
permalink: /join-the-club/
description: Joining the Paris RNA Club
nav: true
nav_order: 2
---

<style>
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
    }
    .container {
        max-width: 800px;
        margin: auto;
        overflow: hidden;
        padding: 20px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
        color: #0073e6;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    label {
        margin-bottom: 5px;
    }
    input[type="text"], input[type="email"] {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    input[type="submit"] {
        padding: 10px;
        border: none;
        border-radius: 4px;
        background: #0073e6;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
    input[type="submit"]:hover {
        background: #005bb5;
    }
</style>

<div class="container">
    <h2>Joining the Club</h2>
    <p>The Paris RNA Club keeps members up to date with relevant information through email newsletters. This includes details for attending future meetings, on the guest speakers and their talks, as well as other news and events of interest.</p>
    <p>If you would like to join the club and subscribe to the newsletter, please fill in the required information below. We look forward to seeing you at the next meeting!</p>
    
    <form action="/submit_form" method="post">
        <label for="name">Name <span style="color: red;">(required)</span></label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email <span style="color: red;">(required)</span></label>
        <input type="email" id="email" name="email" required>
        
        <input type="submit" value="Submit">
    </form>
</div>
