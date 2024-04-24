
        document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form values
            var rollNumber = document.getElementById('roll_number').value;
            var name = document.getElementById('name').value;
            var batch = document.getElementById('batch').value;
            var section = document.getElementById('section').value;

            // Create an object to store student details
            var student = {
                rollNumber: rollNumber,
                name: name,
                batch: batch,
                section: section
            };

            // Convert the object to JSON string
            var studentJSON = JSON.stringify(student);

            // Store the JSON string in Session Storage
            sessionStorage.setItem('student', studentJSON);

            // Optional: Display a confirmation message
            alert('Student details submitted successfully!');
        });
 