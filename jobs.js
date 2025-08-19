document.addEventListener("DOMContentLoaded", function () {
  const jobs = [
    { id: "frontend-developer", baseApplications: 12, maxIncrease: 3 },
    { id: "ai-prompt-engineer", baseApplications: 8, maxIncrease: 2 },
    { id: "product-manager", baseApplications: 15, maxIncrease: 4 },
    { id: "backend-developer", baseApplications: 10, maxIncrease: 3 },
    { id: "marketing-specialist", baseApplications: 18, maxIncrease: 5 },
  ];

  const updateInterval = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
  const lastUpdateKey = "lastUpdateTimestamp";
  const applicationsKey = "jobApplications";

  // Get current timestamp
  const now = Date.now();

  // Load or initialize application counts and last update time
  let applications = JSON.parse(localStorage.getItem(applicationsKey)) || {};
  let lastUpdate = parseInt(localStorage.getItem(lastUpdateKey)) || now;

  // Initialize applications if not set
  jobs.forEach((job) => {
    if (!applications[job.id]) {
      applications[job.id] = job.baseApplications;
    }
  });

  // Update application counts if enough time has passed
  if (now - lastUpdate >= updateInterval) {
    jobs.forEach((job) => {
      // Random increase between 0 and maxIncrease
      const increase = Math.floor(Math.random() * (job.maxIncrease + 1));
      applications[job.id] =
        (applications[job.id] || job.baseApplications) + increase;
    });

    // Save updated applications and timestamp
    localStorage.setItem(applicationsKey, JSON.stringify(applications));
    localStorage.setItem(lastUpdateKey, now);
  }

  // Update DOM with application counts
  document.querySelectorAll(".application-count").forEach((element) => {
    const jobId = element.getAttribute("data-job-id");
    element.textContent =
      applications[jobId] ||
      jobs.find((job) => job.id === jobId).baseApplications;
  });

  // Notification for page load
  const notificationContainer = document.getElementById(
    "notificationContainer"
  );
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = "<p>Job openings updated!</p>";
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }, 100);
});
