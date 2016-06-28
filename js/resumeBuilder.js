/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name":"Kristen Davis",
  "role" : "Web Developer",
  "contactInfo": {"phone" : "678-485-2387",
                   "email" : "davischie@gmail.com",
                   "linkedin" : "www.linkedin.com/in/kristen-davis-b0b60711b",
                   "github" : "kristendavis",
                   "location" : "Atlanta, Georgia"},
  "picture" : "images/pic.jpg",
  "welcome" : "I've never even been to New York City although, one of my favorite people is named Charlotte.",
  "skills" : ["Programming", "Teaching", "Python", "HTML", 
              "CSS", "Ruby", "JavaScript", "PostgreSQL"]
};

var work = {
  "jobs" : [{
        "employer": "The Tutoring Center",
        "title": "Tutor",
        "dates": "2014-2015",
        "location": "Sugar Hill, Georgia",
        "description": "Tutoring students K-12 in Language Arts, Math and Reading"
    }, {
        "employer": "Gwinnett County Public Schools",
        "title": "Teacher",
        "dates": "2008-2014",
        "location": "Lawrenceville, Georgia",
        "description": "Teaching grades K-5, implementing curriculum using instructional technology"
  }]
};

var education = {
  "schools": [{
        "name": "University of Georgia",
        "location": "Athens, Georgia",
        "degree": "BSEd",
        "major": "Early Childhood Education",
        "gradDate": "2008"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Introduction to Programming",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "school": "Codecademy",
        "title": "Ruby",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/ruby"
    }, {
        "school": "Codecademy",
        "title": "HTML & CSS",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/web"
    }, {
        "school": "Codecademy",
        "title": "Learn the Command Line",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/learn-the-command-line"
    }]
};

var projects = {
  "projects": [{
    "title": "Make a Web Page",
    "dates": "March 2016",
    "description": "A web page of notes from my Introduction to Programming course",
    "images": ["images/p1i1.jpg", "images/p1i2.jpg"]
  }, {
    "title": "Code Your Own Quiz",
    "dates": "April 2016",
    "description": "A fill-in-the-blank quiz created using Python as a study guide",
    "images": ["images/p2i1.jpg", "images/p2i2.jpg", "images/p2i3.jpg"]
  }, {
    "title": "Movie Website",
    "dates": "May 2016",
    "description": "A website that includes some of my favorite movies and their trailers",
    "images": ["images/p3i1.jpg", "images/p3i2.jpg", "images/p3i3.jpg"]
  }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio["skills"].length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }
}

var displayWork = function() {
  if (work["jobs"].length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y)
});

$("#main").append(internationalizeButton);

console.log(bio.name);

var inName = function(fullName) {
  var nameArray = fullName.trim().split(" ");
  nameArray[1] = nameArray[1].toUpperCase();
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  internationalizedName = nameArray[0] + " " + nameArray[1];
  return internationalizedName;
};

inName(bio.name);

projects.display = function() {
  if (projects.projects.length > 0) {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    } 
  }
};

projects.display();

$("mapDiv").append(googleMap);