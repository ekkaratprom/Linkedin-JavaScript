// constructor
function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function () {
    return ++this.views;
  };
}

var courses = [
  new Course("JavaScript Essential Training ", "Bugbigz", 1, true, 0),
  new Course("ES6", "Eve lee", 1, true, 12345),
];

var course01 = new Course(
  "JavaScript Essential Training ",
  "Bugbigz",
  1,
  true,
  0
);
var course02 = new Course("ES6", "Eve lee", 1, true, 12345);

console.log(course01);
console.log(course02);

console.log(courses);

console.log(courses[1].instructor);

// +1 views
console.log(courses[1].updateViews());
