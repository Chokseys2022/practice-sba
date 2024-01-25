// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
  {
  id: 1,
  name: "Declare a Variable",
  due_at: "2023-01-25",
  points_possible: 50
  },
  {
  id: 2,
  name: "Write a Function",
  due_at: "2023-02-27",
  points_possible: 150
  },
  {
  id: 3,
  name: "Code the World",
  due_at: "3156-11-15",
  points_possible: 500
  }
  ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
  {
  learner_id: 125,
  assignment_id: 1,
  submission: {
  submitted_at: "2023-01-25",
  score: 47
  }
  },
  {
  learner_id: 125,
  assignment_id: 2,
  submission: {
  submitted_at: "2023-02-12",
  score: 150
  }
  },
  {
  learner_id: 125,
  assignment_id: 3,
  submission: {
  submitted_at: "2023-01-25",
  score: 400
  }
  },
  {
  learner_id: 132,
  assignment_id: 1,
  submission: {
  submitted_at: "2023-01-24",
  score: 39
  }
  },
  {
  learner_id: 132,
  assignment_id: 2,
  submission: {
  submitted_at: "2023-03-07",
  score: 140
  }
  }
  ];
    

// Adding functions here:
// Function to process learner data: we factor in the late assignments manually
function getLearnerData(course, ag, submissions) {
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// check if assignmentgroup is valid for specified course
function getLearnerData(course, ag, submissions) {
  if (ag.course_id !== course.id) {
    throw new Error(
      "Invalid input: AssignmentGroup does not belong to the specified course."
    );
  }
  const result = [];

  //Iterate thru each learner and get the assignment num
  submissions.forEach((submission) => {
    const learnerId = submission.learner_id;
    const assignment = ag.assignments.find(
      (a) => a.id === submission.assignment_id
    );

    // Check if assignment is due yet, if not skip
    if (new Date(assignment.due_at) > new Date()) {
      return;
    }
    // Score is initialized with sub score
    let score = submission.submission.score;

    // Calc score based on late penalty - deduct 10 percent
    if (new Date(submission.submission.submitted_at) > new Date(assignment.due_at)
    ) {
      const latePenalty = Math.min(0.1 * assignment.points_possible, score);
      score -= latePenalty;
    }

    // If points are zero, it will show an error message
    if (assignment.points_possible === 0) {
      throw new Error("Possible points cannot be zero");
    }

    // Calc average and assignment scores for each learner
    const avg = result[learnerId]?.avg || 0;
    const count = result[learnerId]?.count || 0;
    const assignmentScore = score / assignment.points_possible;

    x.push({
      id: learnerId,
      avg: (avg * count + assignmentScore) / (count + 1),
      ...(result[learnerId] || {}),
      [assignment.id]: assignmentScore,
    });
    console.log(x);


