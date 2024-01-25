<h1>Skill Based Assessment for JavaScript Fundamentals:</h1>

<h2>Overview</h2>
This repository contains functions designed to analyze learner submissions, calculate average scores, and handle late submissions with penalties within a course. The code is structured around key components of course information, assignment groups, assignments, and learner submissions.

<h2>Course Information</h2>
id
name

<h3>Assignment Group:</h3>
AssignmentGroup id
name
course_id
group_weight

<h3>Assignments:</h3>
id
name
due_at
points_possible

<h3>Learner Submissions:</h3>
learner_id
assignment_id
submission
submitted_at
score

<h2>What is Required</h2>
For each learner, the following information needs to be calculated:

<h3>learner_id</h3>
Average score
Score for Assignment 1
Score for Assignment 2

<h2>Notes</h2>
Late submissions are penalized by deducting 10 percent of the assignment's points possible.
The code checks if the assignment points possible is zero and throws an error in such cases.
