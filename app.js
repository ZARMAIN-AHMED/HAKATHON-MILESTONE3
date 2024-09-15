var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile picture
    var profilePicInput = document.getElementById('profilePic');
    var profilePicURL = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Generate resume HTML with profile picture
            var resumeHTML = "\n                <h2><b>Resume</b></h2>\n                <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; border-radius:50%;\"><br/>\n                <h3>Personal Information</h3>\n                <p><b>Name:</b> ").concat(name, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <h3>Education:</h3>\n                <p>").concat(education, "</p>\n\n                <h3>Experience:</h3>\n                <p>").concat(experience, "</p>\n                \n                <h3>Skills:</h3>\n                <p>").concat(skills, "</p>\n            ");
            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        console.error('Profile picture file is missing.');
    }
});
