var bio, education, work, projects;

bio = {
  name: "John Doe",

  role: "Front-End Web Developer",
  
  contacts: {
    mobile: '555-5555-5555',
    email: 'john@example.com', 
    github: 'https://github.com/wiggidywouter',
    twitter: '@johndoe',
    location: 'Netherlands',
  },
  
  welcomeMessage: "<br>Welcome to my resume.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. <br><br>",
  
  skills: ["frontend"],
  
  biopic: 'http://southparkstudios.mtvnimages.com/avatar/forum_expression/happy/967135.png',
  
  display: function (){
		
    $('#header').prepend(
      HTMLheaderRole.replace('%data%', this.role) +
      HTMLheaderName.replace('%data%', this.name)
    ).append(
      HTMLbioPic.replace('%data%', this.biopic) +
      HTMLwelcomeMsg.replace('%data%', this.welcomeMessage) +
      HTMLskillsStart
    );
		
		$('#topContacts').append(
      HTMLmobile.replace('%data%', this.contacts.mobile) +
			HTMLemail.replace('%data%', this.contacts.email) +
			HTMLgithub.replace('%data%', this.contacts.github) +
			HTMLtwitter.replace('%data%', this.contacts.twitter) +
			HTMLlocation.replace('%data%', this.contacts.location)
    );
    
    for(index in this.skills){
      $("#skills").append(HTMLskills.replace('%data%', this.skills[index]));
    }
	}
};

education = {
  schools: [
    {
      name: 'John Doe College',
      location: 'London',
      degree: 'bachelor',
      majors: ['frontend'],
      dates: 2015,
      url: ''
    },
    {
      name: 'John Doe College',
      location: 'Paris',
      degree: 'master',
      majors: ['frontend'],
      dates: 2015,
      url: ''
    }
  ],
  
  onlineCourses: [
    {
      title: 'Frontend Nanodegree',
      school: 'Udacity',
      date: 2015,
      url: ''
    }
  ],
  
  display: function (){
    
    for (index in this.schools){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(
        HTMLschoolName.replace('%data%', this.schools[index].name) +
        HTMLschoolDegree.replace('%data%', this.schools[index].degree) +
        HTMLschoolDates.replace('%data%', this.schools[index].dates) +
        HTMLschoolLocation.replace('%data%', this.schools[index].location) +
        HTMLschoolMajor.replace('%data%', this.schools[index].majors[0])
      );
    }

    $("#education").append('<br>' + HTMLonlineClasses);
    
    for (index in this.onlineCourses){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(
        HTMLonlineTitle.replace('%data%', this.onlineCourses[index].title) +
        HTMLonlineSchool.replace('%data%', this.onlineCourses[index].school) +
        HTMLonlineDates.replace('%data%', this.onlineCourses[index].date) +
        HTMLonlineURL.replace('%data%', this.onlineCourses[index].url)
      );
    }
  }
};

work = {
  jobs: [
    {
      employer: 'Nike',
      title: 'Frontend developer',
      location: 'New york',
      dates: '2014 - 2015',
      description: 'Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.'
    },
    {
      employer: 'Adidas',
      title: 'Frontend developer',
      location: 'Berlin',
      dates: '2014 - 2015',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.'
    }
  ],

  display: function () {
    
    for (index in this.jobs){
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(
        HTMLworkEmployer.replace('%data%', this.jobs[index].employer) +
        HTMLworkTitle.replace('%data%', this.jobs[index].title) +
        HTMLworkDates.replace('%data%', this.jobs[index].location) +
        HTMLworkLocation.replace('%data%', this.jobs[index].dates) +
        HTMLworkDescription.replace('%data%', this.jobs[index].description)
      );
    }
  }
};

projects = {
  
  projects: [
    {
      title: 'Project: Bears',
      dates: '2014 - 2015',
      description: 'Donec a diam lectus. Sed sit amet ipsum mauris.',
      images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ursus_arctos_-_Norway.jpg/200px-Ursus_arctos_-_Norway.jpg']
    },
    {
      title: 'Project: Frogs',
      dates: '2013 - 2014',
      description: 'Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. ',
      images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Atelopus_zeteki1.jpg/220px-Atelopus_zeteki1.jpg']
    }
  ],

  display: function () {
    
    for (index in this.projects){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(
        HTMLprojectTitle.replace('%data%', this.projects[index].title) +
        HTMLprojectDates.replace('%data%', this.projects[index].dates) +
        HTMLprojectDescription.replace('%data%', this.projects[index].description) +
        HTMLprojectImage.replace('%data%', this.projects[index].images[0])
      );
    }

  }
};

function inName() {
    var name = $("#name").text().split(" ");
    return name[0] + " " + name[1].toUpperCase();
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);


bio.display();

education.display();

work.display();

projects.display();