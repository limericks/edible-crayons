import React from "react";
import Layout from "@theme/Layout";
import RoadmapRow from "../components/Roadmap/RoadmapRow";
import SearchBanner from "../components/Roadmap/SearchBanner";

const topicsWithSubtopics = [
  {
    title: "Introduction to Platform Engineering",
    subtopics: ["7 Planes", "Benefits of Platform Engineering"],
    estimatedDate: "10/30/2023",
    url: "/docs/Intro",
  },
  {
    title: "Development Architecture",
    subtopics: [
      "Monolithic Architecture",
      "Microservices Architecture",
      "Serverless Architecture",
    ],
    estimatedDate: "11/06/2023",
    url: "/docs/Platform_Architecture",
  },
  {
    title: "Scalability and Performance",
    subtopics: [
      "Strategies for Scalability",
      "Performance Optimization Techniques",
    ],
    estimatedDate: "11/13/2023",
    url: "/docs/Scalability-and-Performance",
  },
  {
    title: "Infrastructure as Code (IaC)",
    subtopics: ["Introduction to IaC", "Tools and Best Practices"],
    estimatedDate: "11/20/2023",
    url: "/docs/Infrastructure-as-Code-IaC",
  },
  {
    title: "Containerization and Orchestration",
    subtopics: ["Docker and Containers", "Kubernetes and Orchestration"],
    estimatedDate: "11/27/2023",
    url: "/docs/Containerization-and-Orchestration",
  },
  {
    title: "Cloud Computing Platforms",
    subtopics: [
      "AWS (Amazon Web Services)",
      "Azure (Microsoft Azure)",
      "GCP (Google Cloud Platform)",
    ],
    estimatedDate: "12/04/2023",
    url: "/docs/Cloud-Computing-Platforms",
  },
  {
    title: "Continuous Integration and Continuous Deployment (CI/CD)",
    subtopics: ["CI/CD Pipelines", "Automation Tools (e.g., Jenkins)"],
    estimatedDate: "12/11/2023",
    url: "/docs/CI-CD",
  },
  {
    title: "Service Mesh and Networking",
    subtopics: [
      "Introduction to Service Mesh",
      "Networking in Platform Engineering",
    ],
    estimatedDate: "12/18/2023",
    url: "/docs/Service-Mesh-and-Networking",
  },
  {
    title: "Security in Platform Engineering",
    subtopics: [
      "Best Practices for Platform Security",
      "Identity and Access Management (IAM)",
    ],
    estimatedDate: "12/25/2023",
    url: "/docs/Platform-Security",
  },
  {
    title: "Monitoring and Observability",
    subtopics: [
      "Telemetry Data and Metrics",
      "Log Management and Troubleshooting",
    ],
    estimatedDate: "01/01/2024",
    url: "/docs/Monitoring-and-Observability",
  },
  {
    title: "High Availability and Disaster Recovery",
    subtopics: ["Redundancy and Failover", "Backup and Recovery Strategies"],
    estimatedDate: "01/08/2024",
    url: "/docs/High-Availability-and-Disaster-Recovery",
  },
  {
    title: "DevOps Culture",
    subtopics: ["Principles of DevOps", "Collaboration and Automation"],
    estimatedDate: "01/15/2024",
    url: "/docs/DevOps-Culture",
  },
  {
    title: "Performance Testing",
    subtopics: ["Load Testing", "Performance Benchmarking"],
    estimatedDate: "01/22/2024",
    url: "/docs/Performance-Testing",
  },
  {
    title: "Cost Optimization",
    subtopics: ["Cost Monitoring", "Budgeting and Optimization Strategies"],
    estimatedDate: "01/29/2024",
    url: "/docs/Cost-Optimization",
  },
  {
    title: "Compliance and Regulations",
    subtopics: [
      "GDPR and Data Privacy Compliance",
      "HIPAA and Healthcare Compliance",
    ],
    estimatedDate: "02/05/2024",
    url: "/docs/Compliance-and-Regulations",
  },
  {
    title: "Emerging Technologies",
    subtopics: [
      "Edge Computing",
      "Serverless Computing",
      "Machine Learning Integration",
    ],
    estimatedDate: "02/12/2024",
    url: "/docs/Emerging-Technologies",
  },
  {
    title: "Use Cases and Case Studies",
    subtopics: ["Real-World Examples", "Success Stories"],
    estimatedDate: "02/19/2024",
    url: "/docs/Use-Cases-and-Case-Studies",
  },
  {
    title: "Certifications and Career Paths",
    subtopics: [
      "Platform Engineering Certifications",
      "Career Opportunities in Platform Engineering",
    ],
    estimatedDate: "02/26/2024",
    url: "/docs/Certifications-and-Career-Paths",
  },
  // Add more items with estimated dates and URLs
];

export default function Roadmap() {
  const startDate = new Date("10/30/2023");
  const endDate = new Date("03/04/2024");

  const dateIncrement = 7; // Number of days between each week
  const topicsCount = topicsWithSubtopics.length;
  const weeksCount = Math.ceil(
    (endDate - startDate) / (1000 * 60 * 60 * 24 * dateIncrement)
  );

  // Function to group weeks by month
  const groupWeeksByMonth = () => {
    const weeksByMonth = [];
    let currentMonth = null;
    let currentMonthWeeks = [];

    Array.from({ length: weeksCount }, (_, weekIndex) => {
      const weekStartDate = new Date(startDate);
      weekStartDate.setDate(startDate.getDate() + weekIndex * dateIncrement);

      const matchingTopicIndex = Math.min(weekIndex, topicsCount - 1);
      const matchingTopic = topicsWithSubtopics[matchingTopicIndex];

      const monthLabel = weekStartDate.toLocaleString("default", {
        month: "short",
      });

      if (currentMonth !== monthLabel) {
        if (currentMonthWeeks.length > 0) {
          weeksByMonth.push(currentMonthWeeks);
        }
        currentMonth = monthLabel;
        currentMonthWeeks = [];
      }

      currentMonthWeeks.push({
        weekStartDate,
        topic: matchingTopic,
      });
    });

    if (currentMonthWeeks.length > 0) {
      weeksByMonth.push(currentMonthWeeks);
    }

    return weeksByMonth;
  };

  const weeksByMonth = groupWeeksByMonth();

  return (
    <Layout title="Roadmap" description="Platform Engineering Roadmap">
      <SearchBanner />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {weeksByMonth.map((monthWeeks, monthIndex) => (
          <RoadmapRow key={monthIndex} weeks={monthWeeks} />
        ))}
      </div>
    </Layout>
  );
}
