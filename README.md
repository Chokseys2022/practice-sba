<h1>Skill Based Assessment for JavaScript Fundamentals:</h1>

<h2>Overview</h2>
This repository contains functions designed to analyze learner submissions, calculate average scores, and handle late submissions with penalties within a course. The code is structured around key components of course information, assignment groups, assignments, and learner submissions.

<h2>Course Information</h2>
<ul>
<li>id</li>
<li>name</li>
</ul>

<h3>Assignment Group:</h3>
<ul>
<li>AssignmentGroup id</li>
<li>name</li>
<li>course_id</li>
<li>group_weight</li>
</ul>

<h3>Assignments:</h3>
<ul>
<li>id</li>
<li>name</li>
<li>due_at</li>
<li>points possible<li>
</ul>

<h3>Learner Submissions:</h3>
<ul>
<li>learner_id</li>
<li>assignment_id</li>
<li>submission</li>
<li>submitted_at<li>
<li>score</li>
</ul>

<h2>Requirements</h2>
For each learner, the following information needs to be calculated:
<ul>
<li>learner_id</li>
<li>Average score</li>
<li>Score for Assignment 1</li>
<li>Score for Assignment 2</li>
</ul>

<h2>Notes</h2>
Late submissions are penalized by deducting 10 percent of the assignment's points possible.
The code checks if the assignment points possible is zero and throws an error in such cases.
