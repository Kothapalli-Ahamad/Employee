let employees = [
    { id: 1, firstName: 'Aarav', lastName: 'Sharma', email: 'aarav.sharma@company.com', department: 'IT', role: 'Software Engineer' },
    { id: 2, firstName: 'Priya', lastName: 'Patel', email: 'priya.patel@company.com', department: 'HR', role: 'HR Manager' },
    { id: 3, firstName: 'Vikram', lastName: 'Singh', email: 'vikram.singh@company.com', department: 'Finance', role: 'Accountant' },
    { id: 4, firstName: 'Neha', lastName: 'Reddy', email: 'neha.reddy@company.com', department: 'Marketing', role: 'Marketing Specialist' },
    { id: 5, firstName: 'Rohan', lastName: 'Mehta', email: 'rohan.mehta@company.com', department: 'IT', role: 'DevOps Engineer' },
    { id: 6, firstName: 'Anjali', lastName: 'Desai', email: 'anjali.desai@company.com', department: 'Sales', role: 'Sales Representative' },
    { id: 7, firstName: 'Karan', lastName: 'Gupta', email: 'karan.gupta@company.com', department: 'IT', role: 'System Admin' },
    { id: 8, firstName: 'Sneha', lastName: 'Iyer', email: 'sneha.iyer@company.com', department: 'HR', role: 'Recruiter' },
    { id: 9, firstName: 'Arjun', lastName: 'Joshi', email: 'arjun.joshi@company.com', department: 'Finance', role: 'Financial Analyst' },
    { id: 10, firstName: 'Divya', lastName: 'Kapoor', email: 'divya.kapoor@company.com', department: 'Marketing', role: 'Content Creator' }
];
let currentPage = 1;
let itemsPerPage = 10;
let filteredEmployees = [...employees];
let editingId = null;

function displayEmployees(emps = filteredEmployees) {
    const employeeList = document.getElementById('employee-list');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedEmployees = emps.slice(start, end);
    employeeList.innerHTML = '';
    paginatedEmployees.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        card.innerHTML = `
            <h3>${employee.firstName} ${employee.lastName}</h3>
            <p>ID: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Role: ${employee.role}</p>
            <button class="edit-btn" onclick="editEmployee(${employee.id})">✎</button>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">🗑</button>
        `;
        employeeList.appendChild(card);
    });
    updatePagination(emps.length);
    updatePaginationButtons(emps.length);
}

function updatePagination(total) {
    document.getElementById('employee-count').textContent = `${total} employees found`;
    document.getElementById('pagination-info').textContent = `Showing ${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, total)} of ${total} results`;
}

function updatePaginationButtons(total) {
    const totalPages = Math.ceil(total / itemsPerPage);
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentPage = i;
            displayEmployees();
        });
        pageNumbers.appendChild(btn);
    }
    if (totalPages > 5) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        pageNumbers.appendChild(ellipsis);
        const lastBtn = document.createElement('button');
        lastBtn.textContent = totalPages;
        if (totalPages === currentPage) lastBtn.classList.add('active');
        lastBtn.addEventListener('click', () => {
            currentPage = totalPages;
            displayEmployees();
        });
        pageNumbers.appendChild(lastBtn);
    }
}

function showForm() {
    document.getElementById('form-popup').style.display = 'block';
    document.getElementById('form-title').textContent = 'Add New Employee';
    clearForm();
    editingId = null;
}

function hideForm() {
    document.getElementById('form-popup').style.display = 'none';
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('department').value = '';
    document.getElementById('role').value = '';
}

function saveEmployee() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const role = document.getElementById('role').value;

    if (firstName && lastName && email && department && role) {
        const employee = { id: editingId || Date.now(), firstName, lastName, email, department, role };
        if (editingId) {
            const index = employees.findIndex(emp => emp.id === editingId);
            employees[index] = employee;
        } else {
            employees.push(employee);
        }
        filteredEmployees = [...employees];
        hideForm();
        currentPage = 1;
        displayEmployees();
    } else {
        alert('Please fill all fields!');
    }
}

function editEmployee(id) {
    editingId = id;
    const employee = employees.find(emp => emp.id === id);
    document.getElementById('firstName').value = employee.firstName;
    document.getElementById('lastName').value = employee.lastName;
    document.getElementById('email').value = employee.email;
    document.getElementById('department').value = employee.department;
    document.getElementById('role').value = employee.role;
    document.getElementById('form-title').textContent = 'Edit Employee';
    document.getElementById('form-popup').style.display = 'block';
}

function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        employees = employees.filter(emp => emp.id !== id);
        filteredEmployees = [...employees];
        if (currentPage > Math.ceil(filteredEmployees.length / itemsPerPage)) {
            currentPage = Math.ceil(filteredEmployees.length / itemsPerPage) || 1;
        }
        displayEmployees();
    }
}

function showFilter() {
    document.getElementById('filter-popup').style.display = 'block';
}

function hideFilter() {
    document.getElementById('filter-popup').style.display = 'none';
}

function applyFilters() {
    const firstName = document.getElementById('filter-firstName').value.toLowerCase();
    const department = document.getElementById('filter-department').value.toLowerCase();
    const role = document.getElementById('filter-role').value.toLowerCase();
    filteredEmployees = employees.filter(emp =>
        (!firstName || emp.firstName.toLowerCase().includes(firstName)) &&
        (!department || emp.department.toLowerCase().includes(department)) &&
        (!role || emp.role.toLowerCase().includes(role))
    );
    currentPage = 1;
    displayEmployees();
    hideFilter();
}

function resetFilters() {
    filteredEmployees = [...employees];
    document.getElementById('filter-firstName').value = '';
    document.getElementById('filter-department').value = '';
    document.getElementById('filter-role').value = '';
    currentPage = 1;
    displayEmployees();
    hideFilter();
}

document.addEventListener('DOMContentLoaded', () => {
    displayEmployees();
});

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    filteredEmployees = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(query) ||
        emp.lastName.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query)
    );
    currentPage = 1;
    displayEmployees();
});

document.getElementById('sort').addEventListener('change', function() {
    const sortBy = this.value;
    if (sortBy) {
        filteredEmployees.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
    } else {
        filteredEmployees = [...employees];
    }
    currentPage = 1;
    displayEmployees();
});

document.getElementById('items-per-page').addEventListener('change', function() {
    itemsPerPage = parseInt(this.value);
    currentPage = 1;
    displayEmployees();
});

document.getElementById('first-page').addEventListener('click', () => { currentPage = 1; displayEmployees(); });
document.getElementById('prev-page').addEventListener('click', () => { if (currentPage > 1) { currentPage--; displayEmployees(); } });
document.getElementById('next-page').addEventListener('click', () => { if (currentPage < Math.ceil(filteredEmployees.length / itemsPerPage)) { currentPage++; displayEmployees(); } });
document.getElementById('last-page').addEventListener('click', () => { currentPage = Math.ceil(filteredEmployees.length / itemsPerPage); displayEmployees(); });

document.getElementById('add-employee').addEventListener('click', showForm);
document.getElementById('filter-btn').addEventListener('click', showFilter);
