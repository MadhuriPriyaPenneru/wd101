<script>
        const registrationForm = document.getElementById("registration-form");
        const userTable = document.getElementById("user-table");

        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const dob = document.getElementById("dob").value;
            const acceptedTerms = document.getElementById("accepted-terms").checked;

            const newRow = userTable.insertRow();
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${dob}</td>
                <td>${acceptedTerms ? "Yes" : "No"}</td>
            `;

            // Clear form fields
            registrationForm.reset();
        });
    </script>
