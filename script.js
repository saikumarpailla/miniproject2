function predictSalary(event) {
  event.preventDefault();

  const experience = parseFloat(document.getElementById("experience").value);
  const qualification = document.getElementById("qualification").value;
  const hackerrankRank = parseInt(document.getElementById("hackerrank").value);
  const leetcodeRank = parseInt(document.getElementById("leetcode").value);

  let salary = 0;

  // Add base salary based on qualification
  switch (qualification) {
    case "Bachelors":
      salary += 25000;
      break;
    case "Masters":
      salary += 50000;
      break;
    case "PhD":
      salary += 75000;
      break;
  }

  // Add experience bonus
  salary += experience * 5000;

  // Add HackerRank bonus
  if (hackerrankRank >= 500 && hackerrankRank < 1000) {
    salary += 5000;
  } else if (hackerrankRank >= 1000 && hackerrankRank < 20000) {
    salary += 2500;
  } else if (hackerrankRank >= 20000) {
    salary += 1000;
  }

  // Add LeetCode bonus
  if (leetcodeRank >= 500 && leetcodeRank < 1000) {
    salary += 5000;
  } else if (leetcodeRank >= 1000 && leetcodeRank < 20000) {
    salary += 25000;
  } else if (leetcodeRank >= 20000) {
    salary += 1000;
  }

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Predicted Salary: rs ${salary.toFixed(2)}`;
}
