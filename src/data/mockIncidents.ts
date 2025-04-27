import { Incident } from '../types';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendation systems, leading to reduced visibility of opportunities for underrepresented groups. Initial analysis suggests a training data imbalance that wasn't properly addressed during model development.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information when queried about emergency protocols in a manufacturing setting. This could have led to dangerous situations if the information had been followed without verification. Root cause appears to be conflicting training data and lack of proper guardrails.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversation sessions. While no personally identifiable information was compromised, the incident highlights potential vulnerability in prompt engineering and response filtering systems that could be exploited in more targeted attacks.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Facial Recognition False Positives",
    description: "Security system using AI facial recognition incorrectly identified several individuals as persons of interest, leading to unnecessary security escalations. Investigation revealed insufficient diversity in training data and inadequate threshold setting for confidence scores.",
    severity: "Medium",
    reported_at: "2025-02-28T16:45:00Z"
  },
  {
    id: 5,
    title: "AI-Generated Content Misattribution",
    description: "Content generation system created articles that closely resembled existing copyrighted material without proper attribution. This raises concerns about potential copyright infringement and the need for better provenance tracking in generative AI systems.",
    severity: "Medium",
    reported_at: "2025-03-10T11:20:00Z"
  },
  {
    id: 6,
    title: "Critical Decision System Failure",
    description: "Automated decision-making system for resource allocation in emergency services experienced complete failure during a minor crisis event. Failover systems prevented any harm, but the incident revealed critical vulnerabilities in the system's architecture and testing procedures.",
    severity: "High",
    reported_at: "2025-03-05T08:30:00Z"
  }
];