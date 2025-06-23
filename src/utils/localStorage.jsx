// localStorage.clear()
 const employee = [
  {
    id: 1,
    name: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        newTask: "T",
        completed: "F",
        failed: "F",
        title: "Prepare weekly report",
        description: "Summarize sales data from the past week.",
        date: "2025-06-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Client meeting",
        description: "Discuss project updates with client.",
        date: "2025-06-18",
        category: "Meetings"
      },
      {
        active: false,
        newTask: "F",
        completed: "F",
        failed: "T",
        title: "Fix login bug",
        description: "Resolve the login issue reported by users.",
        date: "2025-06-19",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    name: "Neha",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 2,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        newTask: "T",
        completed: "F",
        failed: "F",
        title: "Design dashboard UI",
        description: "Create new UI for admin dashboard.",
        date: "2025-06-21",
        category: "Design"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Send invoice",
        description: "Send invoice to vendor for software tools.",
        date: "2025-06-17",
        category: "Finance"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Onboard intern",
        description: "Assist new intern with tools and project overview.",
        date: "2025-06-16",
        category: "HR"
      },
      {
        active: false,
        newTask: "F",
        completed: "F",
        failed: "T",
        title: "Deploy test build",
        description: "Deploy and test latest backend build.",
        date: "2025-06-19",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    name: "Siddharth",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        newTask: "T",
        completed: "F",
        failed: "F",
        title: "Conduct team training",
        description: "Train new hires on internal tools.",
        date: "2025-06-21",
        category: "Training"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Review code",
        description: "Review recent pull requests on GitHub.",
        date: "2025-06-19",
        category: "Development"
      },
      {
        active: false,
        newTask: "F",
        completed: "F",
        failed: "T",
        title: "Update documentation",
        description: "Document recent changes to API endpoints.",
        date: "2025-06-18",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    name: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 2,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        newTask: "T",
        completed: "F",
        failed: "F",
        title: "Monitor system logs",
        description: "Check for errors and performance issues.",
        date: "2025-06-21",
        category: "IT Support"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Create backup",
        description: "Generate system backup and upload to cloud.",
        date: "2025-06-19",
        category: "Operations"
      },
      {
        active: false,
        newTask: "F",
        completed: "F",
        failed: "T",
        title: "Patch server",
        description: "Apply security patch to Linux servers.",
        date: "2025-06-17",
        category: "Security"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Audit access logs",
        description: "Review access logs for suspicious activity.",
        date: "2025-06-18",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    name: "Vikas",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        newTask: "T",
        completed: "F",
        failed: "F",
        title: "Research market trends",
        description: "Study upcoming trends in fintech.",
        date: "2025-06-21",
        category: "Research"
      },
      {
        active: false,
        newTask: "F",
        completed: "T",
        failed: "F",
        title: "Write blog post",
        description: "Publish an article on new tech stack.",
        date: "2025-06-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: "F",
        completed: "F",
        failed: "T",
        title: "Organize webinar",
        description: "Set up a webinar for product launch.",
        date: "2025-06-19",
        category: "Events"
      }
    ]
  }
];





const admin =[{
  "id": 101,
  "name": "Rahul Mehta",
  "email": "admin@example.com",
  "password": "123"
}
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}


