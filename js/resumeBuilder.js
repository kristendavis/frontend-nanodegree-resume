/*
Final Project: FEND Resume
Author: Kristen Davis
Date: July 2016
*/

// initialize bio object
var bio = {
  "name" :"Kristen Davis",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "678-485-2387",
    "email": "davischie@gmail.com",
    "linkedin": "www.linkedin.com/in/kristen-davis-b0b60711b",
    "github": "kristendavis",
    "location": "Atlanta, Georgia"},
  "welcomeMessage": "I've never even been to New York City although, one of my favorite people is named Charlotte.",
  "skills": ["Programming", "Teaching", "Python", "HTML", "CSS", "Ruby", "JavaScript", "PostgreSQL"],
  "biopic": "images/pic.jpg",
// @description Appends bio information to various divs within webpage
  display: function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    formattedLinkedin = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedin);
    formattedLinkedin = formattedLinkedin.replace("%contact%", "LinkedIn");
    $("#footerContacts").append(formattedLinkedin);
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    if (bio["skills"].length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill){
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
      });
    };
  }
};

// calls display function from bio JSON to append bio information
bio.display();

// initialize education object
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
    "dates": "March 2016-July 2016",
    "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
  }, {
    "title": "Ruby",
    "school": "Codecademy",
    "dates": "September 2015-October 2015",
    "url": "https://www.codecademy.com/learn/ruby"
  }, {
    "title": "HTML & CSS",
    "school": "Codecademy",
    "dates": "October 2015-November 2015",
    "url": "https://www.codecademy.com/learn/web"
  }, {
    "title": "Learn the Command Line",
    "school": "Codecademy",
    "dates": "September 2015-October 2015",
    "url": "https://www.codecademy.com/learn/learn-the-command-line"
  }],
// @description Appends education information to education div
  display: function() {
    if (education.schools.length > 0) {
      education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        formattedName = formattedName.replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajors);
      });
      if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
          $("#education").append(HTMLschoolStart);
          var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
          formattedTitle = formattedTitle.replace("#", course.url);
          var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
          var formattedTitleSchool = formattedTitle + formattedSchool;
          $(".education-entry:last").append(formattedTitleSchool);
          var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
          $(".education-entry:last").append(formattedDates);
          var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        });
      };
    };
  }
};

// calls display function from education JSON to append education information
education.display();

// initialize work object
var work = {
  "jobs" : [{
    "employer": "The Tutoring Center",
    "title": "Tutor",
    "location": "Sugar Hill, Georgia",
    "dates": "2014-2015",
    "description": "Tutoring students K-12 in Language Arts, Math and Reading",
    "url": "http://sugarhill.tutoringcenter.com/"
  }, {
    "employer": "Gwinnett County Public Schools",
    "title": "Teacher",
    "location": "Lawrenceville, Georgia",
    "dates": "2008-2014",
    "description": "Teaching grades K-5, implementing curriculum using instructional technology",
    "url": "http://publish.gwinnett.k12.ga.us/gcps/home/public"
  }],
// @description Appends work information to workExperience div
  display: function() {
    if (work["jobs"].length > 0) {
      work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedEmployer = formattedEmployer.replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
      });
    };
  }
};

// calls display function from work JSON to append work information
work.display();

// initialize projects object
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
  }],
// @description Appends project information to projects div
  display: function() {
    if (projects.projects.length > 0) {
      projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        formattedTitle = formattedTitle.replace("#", project.github);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        project.images.forEach(function(image) {
          var formattedImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedImage);
        });
      });
    };
  }
};

// calls display function from projects JSON to append projects information
projects.display();

// @description Log click locations
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y)
});

// add internationalize button to main div
$('#main').append(internationalizeButton);

/*
@description Format fullName to be internationalized
@returns Reformatted name for replacement on page
*/
var inName = function(fullName) {
  var nameArray = fullName.trim().split(' ');
  nameArray[1] = nameArray[1].toUpperCase();
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  internationalizedName = nameArray[0] + ' ' + nameArray[1];
  return internationalizedName;
};

// call internationalize function
inName(bio.name);

// append Google Map to map div
$('#mapDiv').append(googleMap);

// TODO: add extra js interactivity
// TODO: go back over the rubric before submission
// TODO: fix the sassafrassin map to show only one location bubble at a time
// TODO: update site style
// TODO: add icons to different features of the resume