$(document).ready(function () {
    // Add task when the Add button is clicked
    $("#add-button").on("click", function () {
        addTask();
    });

    // Add task on Enter key press in the input field
    $("#todo-input").on("keypress", function (event) {
        if (event.which === 13) { // Enter key code
            addTask();
        }
    });

    function addTask() {
        const taskText = $("#todo-input").val().trim();
        let dateText = $("#todo-date").val().trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        dateText = dateText === "" ? "상시" : dateText;

        const listItem = `
            <li>
                <input type="checkbox" class="task-checkbox">
                <span>${dateText}</span>
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            </li>
        `;
        $("#todo-list").append(listItem);
        $("#todo-input").val("");

        attachEventHandlers();
    }

    function attachEventHandlers() {
        // Handle checkbox toggle
        $(".task-checkbox").off("change").on("change", function () {
            $(this).parent().toggleClass("completed");
        });

        // Handle delete button click
        $(".delete-button").off("click").on("click", function () {
            $(this).parent().remove();
        });
    }

    attachEventHandlers();
});
