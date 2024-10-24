// The provided course information.
const courseInfo = { id: 451, name: " Intro to JavaScript " };
 
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

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

}

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  let results = [];
  
   console.log("Course Info:", courseInfo);
   console.log("Assignment Group:", assignmentGroup);
   console.log("Learner Submission", learnerSubmissions)
  }

// This code is to check if the course is the correct assignment course

function correctCourseAssignment(CourseInfo, AssignmentGroup) {
let courseId = CourseInfo.id;
let assignmentCourseId = AssignmentGroup.course_id;
 if (courseId === assignmentCourseId) {
    return true;
  } else {
    return false;
  }
}

// This is calculating the weighted average of a learner's scores.

function calculateWeightedAverage(learnerData) {
  let totalScore = learnerData.totalScore;
    let totalWeight = learnerData.totalWeight;
  return (learnerData.totalScore / learnerData.totalWeight) * 100;
}

// This section is grabbing the provided data by going through each learners submission and processeing it into an array. I will check if the assignment group is in the correct course and checking if the submission is due

function processLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){

} 
  
  // check if AssignmentGroup is in the correct course
  if (CourseInfo.id !== AssignmentGroup.course_id) {
     throw new Error("Incorrect AssignmentGroup ");
  }
  
    const assignments = AssignmentGroup.assignments;
    const assignmentScores = [];
    const learnerData = [];

  
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    const submission = LearnerSubmissions[i];
    const learnerID = submission.learner_id;  
    const assignmentID = submission.assignment_id;  
    const assignment = assignments.find(a => a.id === assignmentID);
    
  
    //checking if the assignment is due, if not due it should not be included.
    
   if (Date(submission.submission.submitted_at) > Date(assignment.due_at)) {
      console.log("Submission in not due.");
      continue;  
    }
    // if assignment is due/correct include data in array

    const score = submission.submission.score;
    const pointsPossible = assignment.points_possible;
    
    let learner = false;
    for (let j = 0; j < learnerData.length; j++) {
      if (learnerData[j].id === learnerID) {
        learner = true;
        learnerData[j].totalScore += score;
        learnerData[j].totalWeight += pointsPossible;
        break;  
      }
    }

    // Find the learner and push calculated weighted scores and store in array
    if (!learner) {
      learnerData.push({
        id: learnerID,
        totalScore: score,
        totalWeight: pointsPossible
      });
    }
    assignmentScores.push({
      assignmentID: assignmentID,
      percentage: (score / pointsPossible) * 100
    });

    return { learnerData, assignmentScores };
  }
