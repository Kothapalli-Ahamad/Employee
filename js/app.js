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
    { id: 10, firstName: 'Divya', lastName: 'Kapoor', email: 'divya.kapoor@company.com', department: 'Marketing', role: 'Content Creator' },
    { id: 11, firstName: 'Rahul', lastName: 'Chopra', email: 'rahul.chopra@company.com', department: 'IT', role: 'Senior Developer' },
    { id: 12, firstName: 'Pooja', lastName: 'Malhotra', email: 'pooja.malhotra@company.com', department: 'HR', role: 'Training Coordinator' },
    { id: 13, firstName: 'Siddharth', lastName: 'Verma', email: 'siddharth.verma@company.com', department: 'Finance', role: 'Auditor' },
    { id: 14, firstName: 'Ishita', lastName: 'Nair', email: 'ishita.nair@company.com', department: 'Marketing', role: 'Digital Marketer' },
    { id: 15, firstName: 'Amit', lastName: 'Bhattacharya', email: 'amit.bhattacharya@company.com', department: 'IT', role: 'Cloud Engineer' },
    { id: 16, firstName: 'Riya', lastName: 'Saxena', email: 'riya.saxena@company.com', department: 'Sales', role: 'Sales Manager' },
    { id: 17, firstName: 'Nikhil', lastName: 'Rao', email: 'nikhil.rao@company.com', department: 'IT', role: 'Network Engineer' },
    { id: 18, firstName: 'Tanya', lastName: 'Mishra', email: 'tanya.mishra@company.com', department: 'HR', role: 'Employee Relations' },
    { id: 19, firstName: 'Kunal', lastName: 'Pandey', email: 'kunal.pandey@company.com', department: 'Finance', role: 'Budget Analyst' },
    { id: 20, firstName: 'Shreya', lastName: 'Sen', email: 'shreya.sen@company.com', department: 'Marketing', role: 'Brand Manager' },
    { id: 21, firstName: 'Aditya', lastName: 'Kumar', email: 'aditya.kumar@company.com', department: 'IT', role: 'Data Analyst' },
    { id: 22, firstName: 'Meera', lastName: 'Dutta', email: 'meera.dutta@company.com', department: 'HR', role: 'Payroll Specialist' },
    { id: 23, firstName: 'Vivek', lastName: 'Ghosh', email: 'vivek.ghosh@company.com', department: 'Finance', role: 'Tax Consultant' },
    { id: 24, firstName: 'Simran', lastName: 'Chatterjee', email: 'simran.chatterjee@company.com', department: 'Marketing', role: 'Social Media Manager' },
    { id: 25, firstName: 'Sanjay', lastName: 'Bose', email: 'sanjay.bose@company.com', department: 'IT', role: 'Security Analyst' },
    { id: 26, firstName: 'Anita', lastName: 'Roy', email: 'anita.roy@company.com', department: 'Sales', role: 'Customer Success' },
    { id: 27, firstName: 'Manish', lastName: 'Singhania', email: 'manish.singhania@company.com', department: 'IT', role: 'UI/UX Designer' },
    { id: 28, firstName: 'Kavita', lastName: 'Das', email: 'kavita.das@company.com', department: 'HR', role: 'Talent Acquisition' },
    { id: 29, firstName: 'Rakesh', lastName: 'Banerjee', email: 'rakesh.banerjee@company.com', department: 'Finance', role: 'Investment Analyst' },
    { id: 30, firstName: 'Swati', lastName: 'Jain', email: 'swati.jain@company.com', department: 'Marketing', role: 'SEO Specialist' },
    { id: 31, firstName: 'Harsh', lastName: 'Thakur', email: 'harsh.thakur@company.com', department: 'IT', role: 'Backend Developer' },
    { id: 32, firstName: 'Lakshmi', lastName: 'Pillai', email: 'lakshmi.pillai@company.com', department: 'HR', role: 'Benefits Coordinator' },
    { id: 33, firstName: 'Prakash', lastName: 'Menon', email: 'prakash.menon@company.com', department: 'Finance', role: 'Cost Accountant' },
    { id: 34, firstName: 'Preeti', lastName: 'Agarwal', email: 'preeti.agarwal@company.com', department: 'Marketing', role: 'Advertising Coordinator' },
    { id: 35, firstName: 'Suresh', lastName: 'Lal', email: 'suresh.lal@company.com', department: 'IT', role: 'Full Stack Developer' },
    { id: 36, firstName: 'Radhika', lastName: 'Goyal', email: 'radhika.goyal@company.com', department: 'Sales', role: 'Account Manager' },
    { id: 37, firstName: 'Ashok', lastName: 'Trivedi', email: 'ashok.trivedi@company.com', department: 'IT', role: 'QA Engineer' },
    { id: 38, firstName: 'Sunita', lastName: 'Khanna', email: 'sunita.khanna@company.com', department: 'HR', role: 'Onboarding Specialist' },
    { id: 39, firstName: 'Deepak', lastName: 'Mukherjee', email: 'deepak.mukherjee@company.com', department: 'Finance', role: 'Risk Analyst' },
    { id: 40, firstName: 'Nidhi', lastName: 'Sinha', email: 'nidhi.sinha@company.com', department: 'Marketing', role: 'PR Specialist' },
    { id: 41, firstName: 'Rajesh', lastName: 'Puri', email: 'rajesh.puri@company.com', department: 'IT', role: 'Mobile Developer' },
    { id: 42, firstName: 'Geeta', lastName: 'Bhardwaj', email: 'geeta.bhardwaj@company.com', department: 'HR', role: 'HR Generalist' },
    { id: 43, firstName: 'Vijay', lastName: 'Chaudhary', email: 'vijay.chaudhary@company.com', department: 'Finance', role: 'Treasury Analyst' },
    { id: 44, firstName: 'Pallavi', lastName: 'Seth', email: 'pallavi.seth@company.com', department: 'Marketing', role: 'Event Planner' },
    { id: 45, firstName: 'Anand', lastName: 'Kulkarni', email: 'anand.kulkarni@company.com', department: 'IT', role: 'AI Engineer' },
    { id: 46, firstName: 'Shalini', lastName: 'Biswas', email: 'shalini.biswas@company.com', department: 'Sales', role: 'Business Development' },
    { id: 47, firstName: 'Chetan', lastName: 'Srivastava', email: 'chetan.srivastava@company.com', department: 'IT', role: 'Database Admin' },
    { id: 48, firstName: 'Renu', lastName: 'Dubey', email: 'renu.dubey@company.com', department: 'HR', role: 'Compliance Officer' },
    { id: 49, firstName: 'Sandeep', lastName: 'Gandhi', email: 'sandeep.gandhi@company.com', department: 'Finance', role: 'Credit Analyst' },
    { id: 50, firstName: 'Jyoti', lastName: 'Rastogi', email: 'jyoti.rastogi@company.com', department: 'Marketing', role: 'Graphic Designer' }
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
    const totalPages = Math.ceil(total / itemsPerPage);
    document.getElementById('pagination-info').textContent = `Showing ${start = (currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, total)} of ${total} results`;
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

// Event Listeners
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

document.getElementById('add-employee').addEventListener('click', showForm);x
document.getElementById('filter-btn').addEventListener('click', showFilter);

displayEmployees();
