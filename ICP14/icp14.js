const connectDB = require('./modules/db.js');
connectDB(true);
const modelCourse = require('./models/CreateCSCourses.js');

modelCourse.find()
.then(function(courses){
    // Check if course already exist in the Collection, if true then print it into the console
    if(courses.length){
        for(let course of courses){
            if(course.preReqs.length>0)
                console.log(`Course: ${course.courseID}-${course.name} (Prerequisites: ${course.preReqs.join(', ')})`);
            else
                console.log(`Course: ${course.courseID}-${course.name} (Prerequisites: None)`);
            
        }
        connectDB(false);
        // If course does not exist in the collection then add into the Collection
    }else{
        console.log('Add Data');

        modelCourse.insertMany([
            {
                courseID: 'CS110',
                name: 'Introduction to Computer Science I',
                preReqs: ['CS107', 'Math109']
            },
            {
                courseID: 'Math109',
                name: 'Calculus I',
                preReqs: []
            },
            {
                courseID: 'CS107',
                name: 'Computing, Mobile Apps, & Web',
                preReqs: []
            }
        ])
        .then(function(){
            console.log('Done creating data');
            connectDB(false);
        });
    }
});