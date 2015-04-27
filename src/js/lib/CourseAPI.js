
/*
 * This is where code to interact with remote services goes.
 */
module.exports = {
    /*
     * This returns a course given an id.
	 * GET: http://localhost:8080/course?id=c1
     */
    getCourse: function(id) {
        var course = {};


        return(course);
    },

/*
 * DELETE: http://localhost:8080/course?id=c1
*/
    deleteCourse: function(id) {
  	  if(!id) {
  		  return;;
  	  }
	  
  	  var xhr = new XMLHttpRequest();
        if (typeof xhr.overrideMimeType != 'undefined') {
           xhr.overrideMimeType('text/xml'); // Or anything else
        }
  	  var url = "http://localhost:8080/course?id=" + id;

  	  xhr.open("DELETE", url, false);
  	  xhr.send();
  	  console.log(xhr.status);
  	  console.log(xhr.statusText);
  	 // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  	  if (xhr.status != 200) {
  	     alert("REST Service DELETE call failed to:" + url);
  	  }
	  
    },

    /*
     * Performs a search for courses.
	 * GET: http://localhost:8080/course/search?s=PHYS
     */
    findCourses: function(serachString) {
      //  Search subject code, title, and description.
      //var courses = [];
	  if(!serachString) {
		  return [];
	  }
	  var xhr = new XMLHttpRequest();
      if (typeof xhr.overrideMimeType != 'undefined') {
         xhr.overrideMimeType('text/xml'); // Or anything else
      }
	  var url = "http://localhost:8080/course/search?s=" + serachString

	  xhr.open("GET", url, false);
	  xhr.send();
	  console.log(xhr.status);
	  console.log(xhr.statusText);
	 // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  if (xhr.status != 200) {
	     alert("REST Service call GET failed to:" + url);
	  }
	 var responseText = xhr.responseText;
	 var courses = JSON.parse(responseText);
      return(courses);
    },
	/*
	* PUT: http://localhost:8080/course?id=sri1   + course json in body
	*/
    updateCourse: function(course) {
        //  Not sure what this one should return. Validation messages? Void or throw?
    },
	/*
	* POST: http://localhost:8080/course   + course json in body
	*/
    createCourse: function(course) {
        //  Not sure what this one should return. Validation messages? Void or throw?
    },
    saveCourse: function(course) {
        //  Not sure what this one should return. Validation messages? Void or throw?
    }
};
