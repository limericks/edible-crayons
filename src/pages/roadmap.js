import React from "react";
import Layout from "@theme/Layout";
import RoadmapRow from "../components/Roadmap/RoadmapRow";
import SearchBanner from "../components/Roadmap/SearchBanner";

//end is reviewed source platform engineering education platform
//engineers collaborate on solutions to challenges
//teams/individuals receive challenge completion badges.
//certly sync in?

const topicsWithSubtopics = [
  {
    title: "Introduction",
    description:
      "You're here because you want to learn about platform engineering, or consume bad jokes.",
    subtopics: ["What is Platform Engineering"],
    plane: "Foundations",
    estimatedDate: "10/30/2023",
    url: "/docs/intro",
  },
  {
    title: "History and Evolution of Platform Engineering",
    description: "From ancient alien infrastructure to modern practices.",
    subtopics: [
      "Swiftly Turning Pages: History of Virtualization",
      "Clouded Rearrangement",
      "Clear Containers: I lack object permanence",
    ],
    plane: "Foundations",
    estimatedDate: "11/06/2023",
    url: "/docs/history",
  },
  {
    title: "Key Principles of Platform Engineering",
    description:
      "Understanding the core tenets and philosophies behind Platform Engineering.",
    subtopics: [
      "Infrastructure as Code",
      "Immutable Infrastructure",
      "Continuous Delivery and Integration",
      "Self-service Platforms",
      "Arbitrary complexity, job security, and you: ",
    ],
    plane: "Foundations",
    estimatedDate: "11/19/2023",
    url: "/docs/key-principles",
  },
  {
    title: "Deep Dive into the Planes of Platform Engineering",
    description:
      "Exploring each of the planes in depth, understanding their significance and role.",
    subtopics: ["Exploration of the Planes"],
    plane: "Foundations",
    estimatedDate: "11/23/2023",
    url: "/docs/planes-deepdive",
  },
  {
    title: "Infrastructure as Code (IaC): A Practical Approach",
    description: "Hands-on introduction to IaC, with labs and exercises.",
    subtopics: [
      "Introduction to IaC",
      "Terraform 101",
      "Ansible Basics",
      "GitOps Principles",
    ],
    plane: "Management Plane",
    estimatedDate: "11/30/2023",
    url: "/docs/IaC-practical",
  },
  {
    title: "Containerization, Orchestration, and Kubernetes",
    description:
      "Understanding containers, their benefits, and orchestration with Kubernetes.",
    subtopics: [
      "Docker Basics",
      "Intro to Kubernetes",
      "Kubernetes Architecture",
      "Hands-on Lab: Setting up a Kubernetes Cluster",
    ],
    plane: "Resource Plane",
    estimatedDate: "12/05/2023",
    url: "/docs/kubernetes-intro",
  },
  {
    title: "State Management and Persistence in Platform Engineering",
    description:
      "Understanding how state is managed, stored, and made resilient in platform architectures.",
    subtopics: [
      "Databases: SQL vs. NoSQL",
      "Stateful vs. Stateless Architectures",
      "Storage Solutions: Block, File, Object",
    ],
    plane: "State Plane",
    estimatedDate: "12/11/2023",
    url: "/docs/state-management",
  },
  {
    title:
      "Project: Building a Platform on Azure using GitHub and IaC - Initialization",
    description:
      "Setting the stage for our project: Choosing services, setting up accounts, and initializing our infrastructure code.",
    subtopics: [
      "Project Overview and Goals",
      "Setting up Azure Account and GitHub Repository",
      "Choosing the right IaC Tool for Azure (Terraform will be used for its compatibility and free tier)",
      "Initializing Terraform for Azure on GitHub",
    ],
    plane: "Management Plane",
    estimatedDate: "12/18/2023",
    url: "/docs/project-initialization",
  },
  {
    title: "Project: Infrastructure Setup on Azure",
    description:
      "Beginning our platform infrastructure setup using Terraform and Azure services.",
    subtopics: [
      "Setting up Virtual Networks in Azure",
      "Creating and Configuring Storage Solutions",
      "Initializing Virtual Machines or Azure Kubernetes Service (AKS)",
      "Integrating with GitHub Actions for CI/CD",
    ],
    plane: "Resource Plane",
    estimatedDate: "01/08/2024",
    url: "/docs/project-infrastructure",
  },
  {
    title: "Project: Configuring Platform Interfaces and State Management",
    description:
      "Ensuring our platform interfaces are established and state management solutions are in place.",
    subtopics: [
      "Setting up Azure Database Services",
      "Configuring API Gateways and Load Balancers",
      "Storing State: Blob Storage and Databases",
      "State Management with Terraform on Azure",
    ],
    plane: "State Plane",
    estimatedDate: "01/15/2024",
    url: "/docs/project-interfaces",
  },
  {
    title: "Project: Integration, Delivery, and Monitoring",
    description:
      "Focusing on the continuous integration/delivery and monitoring aspects of our platform.",
    subtopics: [
      "Setting up CI/CD with GitHub Actions and Azure DevOps",
      "Deploying Applications on the Platform",
      "Monitoring with Azure Monitor and Log Analytics",
      "Alerts and Incident Response Scenarios",
    ],
    plane: "Integration & Delivery Plane",
    estimatedDate: "01/22/2024",
    url: "/docs/project-integration",
  },
  {
    title: "Project: Ensuring Security and Compliance",
    description:
      "Implementing security best practices, identity management, and compliance checks.",
    subtopics: [
      "Setting up Azure Active Directory and RBAC",
      "Network Security and Firewalls",
      "Auditing and Compliance with Azure Policy",
      "Secrets Management with Azure Key Vault",
    ],
    plane: "Security Plane",
    estimatedDate: "01/29/2024",
    url: "/docs/project-security",
  },
  {
    title: "Project: Finalizing and Documentation",
    description:
      "Wrapping up our platform implementation, testing, and documenting our journey.",
    subtopics: [
      "End-to-end Testing of the Platform",
      "Documenting the Architecture and Decisions",
      "Cost Analysis and Optimization on Azure",
      "Project Wrap-up and Future Improvements",
    ],
    plane: "Developer Plane",
    estimatedDate: "02/05/2024",
    url: "/docs/project-finalizing",
  },
];
export default function Roadmap() {
  const startDate = new Date("10/30/2023");
  const endDate = new Date("03/04/2024");

  topicsWithSubtopics.sort((a, b) => {
    const [monthA, dayA, yearA] = a.estimatedDate.split("/").map(Number);
    const [monthB, dayB, yearB] = b.estimatedDate.split("/").map(Number);

    if (yearA !== yearB) return yearA - yearB;
    if (monthA !== monthB) return monthA - monthB;
    return dayA - dayB;
  });

  const dateIncrement = 7;
  const topicsCount = topicsWithSubtopics.length;
  const weeksCount = Math.ceil(
    (endDate - startDate) / (1000 * 60 * 60 * 24 * dateIncrement)
  );

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
