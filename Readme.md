# Phishing Awareness Demo Site

This project simulates a realistic phishing website designed for educational and research purposes.  
It demonstrates how phishing attacks can trick users into entering sensitive information, and how subtle design choices influence trust.

## Key Features

- Fake bank login page (mimicking a real bank site)
- Front-end loading spinner for "logging in" effect
- Security warning and time pressure banners to create urgency
- Navbar with fake account tabs to simulate a real dashboard
- Fake transaction history table to increase realism
- Backend server to capture and store login credentials (educational use only)

## Research Applications

- Educational training: Teach students and employees how phishing sites operate
- User behavior analysis: Study how design elements (like urgency, warnings) affect decision-making
- Security awareness campaigns: Use this as a live demo to show the dangers of untrusted links
- Cybersecurity research: Serve as a mock platform for developing anti-phishing tools and detection algorithms

## Key Findings from Development

- Users are more likely to submit information when urgent banners ("Verify now to avoid suspension") are shown
- Professional-looking UI (even basic) dramatically increases trust
- Time pressure tactics (countdown timer) significantly reduce careful inspection by users
- Including fake transactions and multiple tabs builds an illusion of legitimacy

## Research Questions

- How do realistic phishing websites manipulate users into surrendering private information?
- What design features (such as urgency, professional appearance, and fake transaction histories) increase user trust?

## Significance of Research

Understanding how phishing websites operate and deceive users is crucial for protecting digital privacy.  
This research highlights the ease with which behavioral and financial information can be stolen through realistic phishing techniques, emphasizing the urgent need for public awareness and education on cybersecurity risks.

## Connection to Course Concepts

This project applies the informational approach to privacy discussed in class.  
Phishing attacks target an individual's private behavioral and financial data, violating their right to control access to their information.  
By simulating phishing tactics, this project demonstrates real-world threats to digital privacy.

## Limitations

- The project was conducted in a simulated environment without real-world users.
- The phishing site was modeled after a simplified banking interface.
- No collection of actual personal data was involved; all data remained within a controlled test setup.

## Sources

1. Karanjit, U., Roy, S. S., & Nilizadeh, S. (2024). *A Large-Scale Analysis of Phishing Websites Hosted on Free Web Hosting Domains.* arXiv, [cs.CR]. https://doi.org/10.48550/arXiv.2212.02563

2. Roy, S. S., Karanjit, U., & Nilizadeh, S. (2021). *Evaluating the Effectiveness of Phishing Reports on Twitter.* arXiv, [cs.CR]. https://doi.org/10.48550/arXiv.2111.07201

3. Irwin, L. (2022, October 20). *The 5 Biggest Phishing Scams of All Time.* IT Governance Blog. Retrieved from https://www.itgovernance.eu/blog/en/the-5-biggest-phishing-scams-of-all-time


## How to Run Locally

1. Clone the repository:
   git clone https://github.com/Ilya-Abbasian/Phishing_Site_Proj_CMPINF1205.git

2. Navigate into the project folder:
   cd Phishing_Site_Proj_CMPINF1205

3. Run the front-end and back-end servers.

4. Visit localhost in your browser to see the phishing simulation.
