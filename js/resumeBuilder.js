/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name":"Kristen Davis",
  "role" : "Web Developer",
  "contacts": {"phone" : "678-485-2387",
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
        "description": "Tutoring students K-12 in Language Arts, Math and Reading",
        "url": "http://sugarhill.tutoringcenter.com/"
    }, {
        "employer": "Gwinnett County Public Schools",
        "title": "Teacher",
        "dates": "2008-2014",
        "location": "Lawrenceville, Georgia",
        "description": "Teaching grades K-5, implementing curriculum using instructional technology",
        "url": "http://publish.gwinnett.k12.ga.us/gcps/home/public"
  }]
};

var education = {
  "schools": [{
        "name": "University of Georgia",
        "location": "Athens, Georgia",
        "degree": "B.S.Ed.",
        "majors": "Early Childhood Education",
        "dates": "2006-2008",
        "url": "http://www.uga.edu"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Ruby",
        "school": "Codecademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/ruby"
    }, {
        "title": "HTML & CSS",
        "school": "Codecademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/web"
    }, {
        "title": "Learn the Command Line",
        "school": "Codecademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/learn-the-command-line"
    }]
};

var projects = {
  "projects": [{
    "title": "Make a Web Page",
    "dates": "March 2016",
    "description": "A web page of notes from an Introduction to Programming course complete with a clickable Table of Contents",
    "images": ["images/p1i1.jpg", "images/p1i2.jpg"],
    "github": "https://github.com/kristendavis/intro-to-prog-site"
  }, {
    "title": "Code Your Own Quiz",
    "dates": "April 2016",
    "description": "A fill-in-the-blank quiz created as a study guide using Python",
    "images": ["images/p2i1.jpg", "images/p2i2.jpg", "images/p2i3.jpg"],
    "github": "https://github.com/kristendavis/fill-in-blanks-quiz"
  }, {
    "title": "Movie Website",
    "dates": "May 2016",
    "description": "A website that includes some of my favorite movies. Movie trailers pop up when the movie poster is clicked.",
    "images": ["images/p3i1.jpg", "images/p3i3.jpg"],
    "github": "https://github.com/kristendavis/movie-website"
  }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

bio.contacts.display = function (){
  formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
  formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedLocation);
  formattedLinkedin = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedin);
  formattedLinkedin = formattedLinkedin.replace("%contact%", "LinkedIn");
  formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formattedLinkedin);
  $("#footerContacts").append(formattedGithub);
};

bio.contacts.display();

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
      formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
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
};

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
      formattedTitle = formattedTitle.replace("#", projects.projects[project].github);
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

education.display = function() {
  if (education.schools.length > 0) {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedName = formattedName.replace("#", education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedNameDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
    }
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDates);
        // $(".education-entry:last").append(formattedURL);
        // figure out how to link the url with the course title along with other urls
      }
    }
  }
}

education.display();

$("#mapDiv").append(googleMap);