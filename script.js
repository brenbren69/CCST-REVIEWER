/* CCST Cybersecurity Reviewer
 * Sole content source: CCST_Cybersecurity_Reviewer_2026_NEW.docx.pdf (55 pages).
 * All 179 source questions are retained, including repeats and source qualifications.
 * Whitespace from page layout is normalized; question 179 retains its log line breaks.
 * Matching questions expand into 226 total practice items.
 * No external requests, libraries, storage, or build process.
 */
"use strict";

const chapters = [
  {
    "id": 1,
    "title": "Network defense and wireless security",
    "sourceCount": 36
  },
  {
    "id": 2,
    "title": "Identity access and professional practice",
    "sourceCount": 31
  },
  {
    "id": 3,
    "title": "Cryptography and information protection",
    "sourceCount": 24
  },
  {
    "id": 4,
    "title": "Threats attacks and adversaries",
    "sourceCount": 42
  },
  {
    "id": 5,
    "title": "Endpoint tools and troubleshooting",
    "sourceCount": 13
  },
  {
    "id": 6,
    "title": "Vulnerability assessment and risk",
    "sourceCount": 19
  },
  {
    "id": 7,
    "title": "Incident response and recovery",
    "sourceCount": 14
  }
];

// Maintain original items here. Matching pairs are converted below without changing their keys.
const sourceQuestions = [
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "001",
    "chapter": 1,
    "sourceNumber": 1,
    "sourcePage": 2,
    "type": "single",
    "prompt": "Which of the following services or protocols can be used to ensure the security and compliance of an organization's network?",
    "options": [
      {
        "id": "A",
        "text": "NTP (Network Time Protocol)"
      },
      {
        "id": "B",
        "text": "SNMP (Simple Network Management Protocol)"
      },
      {
        "id": "C",
        "text": "DHCP (Dynamic Host Configuration Protocol)"
      },
      {
        "id": "D",
        "text": "DNS (Domain Name System)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (best fit for network management)",
    "explanation": "SNMP supports monitoring and managing network devices. SNMPv3 can authenticate and encrypt management exchanges. NTP, DHCP, and DNS also support secure operations; none of these protocols alone ensures security or regulatory compliance. B is the best management-focused choice, but the question is broad."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "002",
    "chapter": 1,
    "sourceNumber": 2,
    "sourcePage": 2,
    "type": "single",
    "prompt": "Which network security feature helps protect against unauthorized data access and ensures confidentiality of sensitive information?",
    "options": [
      {
        "id": "A",
        "text": "Firewall"
      },
      {
        "id": "B",
        "text": "VPN"
      },
      {
        "id": "C",
        "text": "Intrusion Detection System"
      },
      {
        "id": "D",
        "text": "Antivirus"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (best fit for confidentiality in transit)",
    "explanation": "An encrypted VPN protects the confidentiality of traffic crossing an untrusted network. A firewall also limits unauthorized access, so the wording overlaps access control and confidentiality. VPN is the strongest fit when the intended protection is encrypted communication."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "003",
    "chapter": 1,
    "sourceNumber": 3,
    "sourcePage": 2,
    "type": "single",
    "prompt": "What is the purpose of a firewall in a network security system?",
    "options": [
      {
        "id": "A",
        "text": "To prevent unauthorized access to or from private networks"
      },
      {
        "id": "B",
        "text": "To scan and filter network traffic for potential threats"
      },
      {
        "id": "C",
        "text": "To encrypt data transmitted over the network"
      },
      {
        "id": "D",
        "text": "To provide secure remote access to the network"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (best statement of purpose)",
    "explanation": "A firewall prevents unauthorized network access by enforcing traffic rules. B can also describe traffic inspection in a modern firewall, so the alternatives overlap. A states the general purpose most directly; firewalls do not inherently encrypt all traffic or provide remote access."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "004",
    "chapter": 1,
    "sourceNumber": 4,
    "sourcePage": 2,
    "type": "single",
    "prompt": "Which of the following is a characteristic of a network-based firewall?",
    "options": [
      {
        "id": "A",
        "text": "Inspects and filters traffic at the application layer"
      },
      {
        "id": "B",
        "text": "Operates at the data link layer"
      },
      {
        "id": "C",
        "text": "Provides protection against external threats only"
      },
      {
        "id": "D",
        "text": "Requires software installed on client devices"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (for an application aware network firewall)",
    "explanation": "Application-aware network firewalls can inspect and filter application-layer traffic, making A the best listed choice. Basic packet-filtering firewalls need not do this. C is incorrect because network firewalls can also protect internal segments; D describes endpoint deployment rather than a network appliance."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "005",
    "chapter": 1,
    "sourceNumber": 5,
    "sourcePage": 3,
    "type": "single",
    "prompt": "Which of the following features of the Cisco Identity Services Engine (ISE) allows network administrators to define policies for controlling access to network resources based on user identities and user or group attributes?",
    "options": [
      {
        "id": "A",
        "text": "Network Access Profiles"
      },
      {
        "id": "B",
        "text": "Identity Firewall"
      },
      {
        "id": "C",
        "text": "Profiling"
      },
      {
        "id": "D",
        "text": "TrustSec"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D (closest listed choice)",
    "explanation": "TrustSec uses identity-derived security groups and tags to enforce group-based access policies, making D the closest listed technology. The precise ISE mechanism described is authorization policies and authorization profiles, which are not accurately named among the choices. Profiling classifies endpoints and is not itself the authorization mechanism."
  },
  {
    "id": "006",
    "chapter": 1,
    "sourceNumber": 6,
    "sourcePage": 3,
    "type": "single",
    "prompt": "Which security feature provides network segmentation by creating virtual networks?",
    "options": [
      {
        "id": "A",
        "text": "VLANs"
      },
      {
        "id": "B",
        "text": "Intrusion Prevention System (IPS)"
      },
      {
        "id": "C",
        "text": "Virtual Private Network (VPN)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "VLANs create separate Layer 2 broadcast domains on shared switching infrastructure, providing network segmentation. Restricting communication between VLANs also requires routing policy, ACLs, or firewalls."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "007",
    "chapter": 1,
    "sourceNumber": 7,
    "sourcePage": 3,
    "type": "single",
    "prompt": "Which of the following is a network security device that operates at the session layer of the OSI model?",
    "options": [
      {
        "id": "A",
        "text": "Firewall"
      },
      {
        "id": "B",
        "text": "Intrusion Detection System (IDS)"
      },
      {
        "id": "C",
        "text": "Intrusion Prevention System (IPS)"
      },
      {
        "id": "D",
        "text": "SSL/TLS"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (if a circuit level firewall is intended)",
    "explanation": "A circuit-level gateway is a type of firewall commonly associated with session establishment in introductory OSI discussions. IDS and IPS are not exclusively session-layer devices, and SSL/TLS is not a device. Because the options omit circuit-level gateway, A is conditional rather than a universal description of every firewall."
  },
  {
    "id": "008",
    "chapter": 1,
    "sourceNumber": 8,
    "sourcePage": 3,
    "type": "single",
    "prompt": "Which of the following is true regarding secure web gateways (SWG)?",
    "options": [
      {
        "id": "A",
        "text": "SWGs provide protection against malware and advanced threats"
      },
      {
        "id": "B",
        "text": "SWGs are primarily used to secure internal web applications."
      },
      {
        "id": "C",
        "text": "SWGs are no longer necessary with the advent of cloud-based applications."
      },
      {
        "id": "D",
        "text": "SWGs can only be deployed on-premises"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A secure web gateway applies policy to users' outbound web access and can inspect downloads or block malicious destinations. It differs from a web application firewall protecting an organization's hosted application and may be cloud delivered."
  },
  // SOURCE: No valid listed answer. Do not add an invented option or substitute a key.
  {
    "id": "009",
    "chapter": 1,
    "sourceNumber": 9,
    "sourcePage": 4,
    "type": "ungraded",
    "prompt": "Which of the following protocols can be used to securely transfer files over a network?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctOptionIds": [],
    "answerText": "No secure file transfer protocol is listed",
    "explanation": "Ordinary HTTP and FTP do not encrypt transferred files by default. SMTP transports email and DNS resolves names; neither supplies the secure file-transfer function requested. FTP must not be confused with FTPS. Suitable examples would be SFTP, SCP, HTTPS, or properly configured FTPS, but none is listed.",
    "sourceNote": "The reviewer lists no valid answer. Review only; excluded from the score."
  },
  {
    "id": "010",
    "chapter": 1,
    "sourceNumber": 10,
    "sourcePage": 4,
    "type": "single",
    "prompt": "Which of the following describes the purpose of a VPN (Virtual Private Network)?",
    "options": [
      {
        "id": "A",
        "text": "To improve network performance and reduce latency"
      },
      {
        "id": "B",
        "text": "To segment a network into multiple smaller networks"
      },
      {
        "id": "C",
        "text": "To provide secure remote access to a private network over the internet"
      },
      {
        "id": "D",
        "text": "To control and filter network traffic based on predefined policies"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "A remote-access VPN securely connects an authorized remote user to private resources over an untrusted network. It does not guarantee lower latency and is distinct from creating VLANs or ordinary firewall filtering."
  },
  {
    "id": "011",
    "chapter": 1,
    "sourceNumber": 11,
    "sourcePage": 4,
    "type": "single",
    "prompt": "What is the primary purpose of a VPN (Virtual Private Network)?",
    "options": [
      {
        "id": "A",
        "text": "To encrypt email communications"
      },
      {
        "id": "B",
        "text": "To secure wireless network connections"
      },
      {
        "id": "C",
        "text": "To establish a secure remote connection over a public network"
      },
      {
        "id": "D",
        "text": "To protect against malware attacks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "A secure VPN creates a protected connection across a public network for remote access or site-to-site communication. It does not automatically secure every endpoint or remove malware already present."
  },
  {
    "id": "012",
    "chapter": 1,
    "sourceNumber": 12,
    "sourcePage": 4,
    "type": "single",
    "prompt": "What is the purpose of implementing a firewall in a network?",
    "options": [
      {
        "id": "A",
        "text": "To scan and remove malware from network traffic"
      },
      {
        "id": "B",
        "text": "To prevent unauthorized physical access to network devices"
      },
      {
        "id": "C",
        "text": "To control and filter network traffic based on predetermined security policies"
      },
      {
        "id": "D",
        "text": "To monitor network performance and troubleshoot issues"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "A firewall implements traffic-control rules, such as permitting a required service and denying other connections. It is not a guarantee that all malware will be removed or that physical equipment cannot be accessed."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "013",
    "chapter": 1,
    "sourceNumber": 13,
    "sourcePage": 5,
    "type": "single",
    "prompt": "Which of the following is a common authentication protocol used in wireless networks?",
    "options": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "WPA"
      },
      {
        "id": "C",
        "text": "SSH"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (intended Wi Fi security choice)",
    "explanation": "WPA is the wireless-security choice among these options. It is a security suite rather than a single authentication protocol; enterprise Wi-Fi commonly uses 802.1X and EAP. FTP, SSH, and SMTP are not the wireless-security family requested."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "014",
    "chapter": 1,
    "sourceNumber": 14,
    "sourcePage": 5,
    "type": "single",
    "prompt": "Which encryption method provides the highest level of security for a wireless SoHo network?",
    "options": [
      {
        "id": "A",
        "text": "WPA2"
      },
      {
        "id": "B",
        "text": "WEP"
      },
      {
        "id": "C",
        "text": "WPA"
      },
      {
        "id": "D",
        "text": "TKIP"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (among the listed choices)",
    "explanation": "WPA2 configured with AES-CCMP is the strongest listed choice. WEP and WPA/TKIP are obsolete. WPA3 should be preferred when supported, but it is not included among these options."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "015",
    "chapter": 1,
    "sourceNumber": 15,
    "sourcePage": 5,
    "type": "single",
    "prompt": "Which of the following features help to secure a wireless SoHo network from unauthorized access?",
    "options": [
      {
        "id": "A",
        "text": "Default admin credentials"
      },
      {
        "id": "B",
        "text": "Weak encryption"
      },
      {
        "id": "C",
        "text": "MAC filtering"
      },
      {
        "id": "D",
        "text": "SSID broadcast"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (limited filtering only)",
    "explanation": "MAC filtering is the only listed feature that attempts to restrict which device addresses may connect. It is weak because MAC addresses can be spoofed. Default credentials, weak encryption, and SSID broadcast do not provide strong access protection. Use WPA2-AES or WPA3 and strong credentials in practice."
  },
  {
    "id": "016",
    "chapter": 1,
    "sourceNumber": 16,
    "sourcePage": 5,
    "type": "single",
    "prompt": "Which technology is responsible for monitoring network traffic and identifying potential threats?",
    "options": [
      {
        "id": "A",
        "text": "IDS"
      },
      {
        "id": "B",
        "text": "Firewall"
      },
      {
        "id": "C",
        "text": "Server"
      },
      {
        "id": "D",
        "text": "IPS"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "An IDS monitors activity and produces alerts when it detects suspicious patterns. An IPS is commonly deployed inline to block traffic as well. Detection is not proof that every attack will be found."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "017",
    "chapter": 1,
    "sourceNumber": 17,
    "sourcePage": 6,
    "type": "multiple",
    "prompt": "Which protocol uses encryption for secure remote access to network resources?",
    "options": [
      {
        "id": "A",
        "text": "Point-to-Point Protocol (PPP)"
      },
      {
        "id": "B",
        "text": "Wireless Equivalent Privacy (WEP)"
      },
      {
        "id": "C",
        "text": "Internet Protocol Security (IPSec)"
      },
      {
        "id": "D",
        "text": "Secure Shell (SSH)"
      }
    ],
    "correctOptionIds": [
      "C",
      "D"
    ],
    "answerText": "C and D (both can secure remote access)",
    "explanation": "IPsec protects IP traffic and is widely used in VPNs; SSH encrypts remote administration sessions and supports secure transfers. Both can satisfy this broad question. SSH would be the unique choice only if the question specified remote command-line administration."
  },
  {
    "id": "018",
    "chapter": 1,
    "sourceNumber": 18,
    "sourcePage": 6,
    "type": "single",
    "prompt": "What is the purpose of using an application firewall in a cybersecurity setup?",
    "options": [
      {
        "id": "A",
        "text": "To encrypt network traffic between applications"
      },
      {
        "id": "B",
        "text": "To perform vulnerability scanning of applications"
      },
      {
        "id": "C",
        "text": "To increase the speed and performance of applications"
      },
      {
        "id": "D",
        "text": "To block malicious incoming requests and attacks aimed at the application"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "A web application firewall inspects HTTP application traffic and can block patterns associated with application attacks. It complements secure development, patching, and monitoring rather than replacing them."
  },
  {
    "id": "019",
    "chapter": 1,
    "sourceNumber": 19,
    "sourcePage": 6,
    "type": "multiple",
    "prompt": "You are planning to work from home. Your company requires that you connect to the company network through a VPN Which three critical functions do VPNs provide to remote workers? (Choose 3)",
    "options": [
      {
        "id": "A",
        "text": "Confidentiality of information"
      },
      {
        "id": "B",
        "text": "Authentication of users"
      },
      {
        "id": "C",
        "text": "WAN management"
      },
      {
        "id": "D",
        "text": "Integrity of data"
      },
      {
        "id": "E",
        "text": "Authorization of users"
      },
      {
        "id": "F",
        "text": "Password management"
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "answerText": "A B D",
    "explanation": "Confidentiality, authentication, and integrity are the three expected core VPN protections. Authorization may also be implemented by a VPN service, but the question asks for three selections and A B D is the conventional protection set. VPNs do not inherently manage every WAN or user password."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "020",
    "chapter": 1,
    "sourceNumber": 20,
    "sourcePage": 6,
    "type": "single",
    "prompt": "You need to transfer configuration files to a router across an unsecured network? Which protocol should you use to encrypt the files in transit?",
    "options": [
      {
        "id": "A",
        "text": "HTTPS"
      },
      {
        "id": "B",
        "text": "SSH"
      },
      {
        "id": "C",
        "text": "TELNET"
      },
      {
        "id": "D",
        "text": "TFTP"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (best router management answer)",
    "explanation": "SSH protects router management and supports configuration-file transfers through SFTP or SCP. HTTPS can also encrypt a transfer if the router offers an HTTPS upload/download interface, so A is technically possible. SSH is the best conventional router-management answer; Telnet and TFTP do not encrypt the transfer."
  },
  {
    "id": "021",
    "chapter": 1,
    "sourceNumber": 21,
    "sourcePage": 7,
    "type": "single",
    "prompt": "Your home network seems to have slowed down considerably. You look at the home router GUI and notice that an unknown host is attached to the network. What should you do to prevent this specific host from attaching to the network again?",
    "options": [
      {
        "id": "A",
        "text": "Implement Mac address filtering"
      },
      {
        "id": "B",
        "text": "Create an IP access control list"
      },
      {
        "id": "C",
        "text": "Block the host IP address"
      },
      {
        "id": "D",
        "text": "Change the network SSID"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A MAC denylist can block that observed address on a basic home router. It is a limited measure because addresses can be changed or spoofed; also remove the device, rotate exposed Wi-Fi credentials, and use strong wireless security."
  },
  {
    "id": "022",
    "chapter": 1,
    "sourceNumber": 22,
    "sourcePage": 7,
    "type": "single",
    "prompt": "Which encryption type is commonly used to secure wi-fi networks?",
    "options": [
      {
        "id": "A",
        "text": "Advanced Encryption Algorithm (AES)"
      },
      {
        "id": "B",
        "text": "Triple Data Encryption Algorithm (Triple DES)"
      },
      {
        "id": "C",
        "text": "RSA (Rivest-Shamir-Adleman)"
      },
      {
        "id": "D",
        "text": "Data Encryption Standard (DES)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "AES is the Wi-Fi encryption choice. Its correct expansion is Advanced Encryption Standard, even though the supplied option says Algorithm. Modern WPA2 configurations use AES-CCMP; RSA, DES, and Triple DES are not the appropriate modern Wi-Fi choice."
  },
  {
    "id": "023",
    "chapter": 1,
    "sourceNumber": 23,
    "sourcePage": 7,
    "type": "single",
    "prompt": "How does a honeypot enhance network security?",
    "options": [
      {
        "id": "A",
        "text": "It detects and prevents identified threats through real-time packet inspection."
      },
      {
        "id": "B",
        "text": "It acts as decoy and diverts malicious traffic away from important systems."
      },
      {
        "id": "C",
        "text": "It isolates external-facing services from the Internet and protects them from attack."
      },
      {
        "id": "D",
        "text": "It monitors network traffic and sends alerts when potential threats are detected."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A honeypot attracts interaction with a decoy and creates opportunities to detect or study attacker behavior. It does not guarantee that attackers will avoid production systems; isolation and monitoring are necessary."
  },
  {
    "id": "024",
    "chapter": 1,
    "sourceNumber": 24,
    "sourcePage": 7,
    "type": "single",
    "prompt": "What should you create to prevent spoofing of the internal network?",
    "options": [
      {
        "id": "A",
        "text": "A DNS record"
      },
      {
        "id": "B",
        "text": "An ACL"
      },
      {
        "id": "C",
        "text": "A record in the host file"
      },
      {
        "id": "D",
        "text": "A NAT rule"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "An anti-spoofing ACL can reject packets with impossible or unauthorized source addresses at a network boundary. NAT translates addresses; DNS and hosts-file records resolve names and do not enforce source-address validation."
  },
  {
    "id": "025",
    "chapter": 1,
    "sourceNumber": 25,
    "sourcePage": 8,
    "type": "single",
    "prompt": "A threat actor sets up a rogue access point (AP) at a local café. The rogue AP captures traffic and then forwards the traffic to the café AP. Which type of attack does this scenario describe?",
    "options": [
      {
        "id": "A",
        "text": "Man-in-the-middle"
      },
      {
        "id": "B",
        "text": "Ransomware"
      },
      {
        "id": "C",
        "text": "DDoS"
      },
      {
        "id": "D",
        "text": "Reconnaissance"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "The rogue access point relays the victim's traffic through attacker-controlled infrastructure, creating an on-path attack opportunity. Properly authenticated end-to-end encryption can limit exposure even when the network path is hostile."
  },
  {
    "id": "026",
    "chapter": 1,
    "sourceNumber": 26,
    "sourcePage": 8,
    "type": "single",
    "prompt": "Which network security technology passively monitors network traffic and compares the captured packet stream with known malicious signatures?",
    "options": [
      {
        "id": "A",
        "text": "Proxy Server"
      },
      {
        "id": "B",
        "text": "Honeypot"
      },
      {
        "id": "C",
        "text": "IPS"
      },
      {
        "id": "D",
        "text": "IDS"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "A signature-based IDS observes traffic and alerts on known malicious patterns. An IPS commonly sits inline to block traffic, while a proxy intermediates requests and a honeypot is a decoy target."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "027",
    "chapter": 1,
    "sourceNumber": 27,
    "sourcePage": 8,
    "type": "single",
    "prompt": "A remote worker is visiting a branch office to attend face-to-face meetings. The worker tries to associate their company laptop with the branch wireless access point (WAP) but is unable to do so What is a possible cause?",
    "options": [
      {
        "id": "A",
        "text": "The SSID is not broadcasting"
      },
      {
        "id": "B",
        "text": "The WAP is configured for MAC address filtering"
      },
      {
        "id": "C",
        "text": "The WAP is using open authentication."
      },
      {
        "id": "D",
        "text": "The IP address of the laptop is not correct."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (best listed association restriction)",
    "explanation": "A MAC allowlist can prevent a visiting laptop from associating if its address is not permitted. A hidden SSID may affect discovery or configuration, so A is also possible in some circumstances. A wrong IP address normally affects communication after association, not wireless association itself."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "028",
    "chapter": 1,
    "sourceNumber": 28,
    "sourcePage": 8,
    "type": "single",
    "prompt": "A restaurant installs a second wireless router that only employees can use Which statement describes how to securely configure the new router?",
    "options": [
      {
        "id": "A",
        "text": "Configure the SSID with the same SSID used by the customer router."
      },
      {
        "id": "B",
        "text": "Configure the new router to filter IP addresses"
      },
      {
        "id": "C",
        "text": "Configure a higher signal strength to allow coverage in the parking lot"
      },
      {
        "id": "D",
        "text": "Configure the SSID with broadcast disabled"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D (best listed option)",
    "explanation": "Disabling SSID broadcast hides the employee network name from casual public discovery, requiring employees to know the SSID to connect. In practice, pair hidden SSIDs with strong WPA2-AES or WPA3 encryption and network isolation from customer traffic. Sharing the customer SSID causes conflicts, IP filtering does not stop initial wireless association, and higher signal strength increases external exposure."
  },
  {
    "id": "029",
    "chapter": 1,
    "sourceNumber": 29,
    "sourcePage": 9,
    "type": "single",
    "prompt": "What should you create to prevent spoofing of the internal network?",
    "options": [
      {
        "id": "A",
        "text": "A DNS record."
      },
      {
        "id": "B",
        "text": "A NAT rule"
      },
      {
        "id": "C",
        "text": "A record in the host file"
      },
      {
        "id": "D",
        "text": "An ACL"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "An anti-spoofing ACL checks whether source addresses are appropriate for the interface or traffic direction. NAT and name-resolution records do not perform that filtering. This answer concerns source-IP spoofing, not every form of impersonation."
  },
  {
    "id": "030",
    "chapter": 1,
    "sourceNumber": 30,
    "sourcePage": 9,
    "type": "single",
    "prompt": "Your home network seems to have slowed down considerably. You look at the home router GUI and notice that an unknown host is attached to the network. What should you do to prevent this specific host from attaching to the network again?",
    "options": [
      {
        "id": "A",
        "text": "Implement MAC address filtering."
      },
      {
        "id": "B",
        "text": "Create an IP access control list"
      },
      {
        "id": "C",
        "text": "Change the network SSID."
      },
      {
        "id": "D",
        "text": "Block the host IP address."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "MAC filtering can deny the particular observed hardware address on a basic router, but the address can be spoofed. For lasting protection, remove unauthorized access, change exposed credentials, and enable strong Wi-Fi security."
  },
  {
    "id": "031",
    "chapter": 1,
    "sourceNumber": 31,
    "sourcePage": 9,
    "type": "single",
    "prompt": "You need to allow employees to access your company's secure network from their homes. Which type of security should you implement?",
    "options": [
      {
        "id": "A",
        "text": "SNMP"
      },
      {
        "id": "B",
        "text": "VPN"
      },
      {
        "id": "C",
        "text": "BYOD"
      },
      {
        "id": "D",
        "text": "IDS"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A VPN can provide authenticated, encrypted remote access to approved private resources. SNMP is for management, IDS for detection, and BYOD is an ownership/use policy rather than a secure transport mechanism."
  },
  {
    "id": "032",
    "chapter": 1,
    "sourceNumber": 32,
    "sourcePage": 9,
    "type": "single",
    "prompt": "You need to transfer configuration files to a router across an unsecured network. Which protocol should you use to encrypt the files in transit?",
    "options": [
      {
        "id": "A",
        "text": "TFTP"
      },
      {
        "id": "B",
        "text": "HTTP"
      },
      {
        "id": "C",
        "text": "SSH"
      },
      {
        "id": "D",
        "text": "Telnet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "SSH protects supported router administration and file-transfer methods such as SFTP or SCP. TFTP, plain HTTP, and Telnet do not encrypt the content by default and are unsuitable for this untrusted path."
  },
  {
    "id": "033",
    "chapter": 1,
    "sourceNumber": 33,
    "sourcePage": 10,
    "type": "single",
    "prompt": "You need to filter the websites that are available to employees on the company network. Which type of device should you deploy?",
    "options": [
      {
        "id": "A",
        "text": "IPS"
      },
      {
        "id": "B",
        "text": "Proxy server"
      },
      {
        "id": "C",
        "text": "IDS"
      },
      {
        "id": "D",
        "text": "Honeypot"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A filtering proxy intermediates web requests and applies access policy to destinations or content. IDS reports activity, IPS can block attacks, and a honeypot is a decoy; none is the most direct fit for website-use policy."
  },
  {
    "id": "034",
    "chapter": 1,
    "sourceNumber": 34,
    "sourcePage": 10,
    "type": "single",
    "prompt": "Which wireless encryption technology required AES to secure home wireless network?",
    "options": [
      {
        "id": "A",
        "text": "WEP"
      },
      {
        "id": "B",
        "text": "WPA"
      },
      {
        "id": "C",
        "text": "WPA2"
      },
      {
        "id": "D",
        "text": "TKIP"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "WPA2 with AES-CCMP provides wireless confidentiality and integrity protection. WEP and original WPA/TKIP are obsolete choices; TKIP is a legacy mechanism rather than the modern AES-based answer."
  },
  {
    "id": "035",
    "chapter": 1,
    "sourceNumber": 35,
    "sourcePage": 10,
    "type": "multiple",
    "prompt": "You are reviewing company remote access procedures and notice that telnet is being used to connect to the corporate database server to check on inventory levels. Which two actions should you take immediately? (choose 2).",
    "options": [
      {
        "id": "A",
        "text": "Force users to implement secure telnet passwords."
      },
      {
        "id": "B",
        "text": "Disable telnet access on the server"
      },
      {
        "id": "C",
        "text": "Implement SSH access on the server"
      },
      {
        "id": "D",
        "text": "Reconfigure the server to only accept HTTPS connection"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "answerText": "B and C",
    "explanation": "Disable Telnet and provide appropriately configured SSH for encrypted remote administration. A stronger Telnet password does not encrypt the session. HTTPS serves a different interface and is not automatically a drop-in CLI replacement."
  },
  {
    "id": "036",
    "chapter": 1,
    "sourceNumber": 36,
    "sourcePage": 10,
    "type": "single",
    "prompt": "A hospital needs to implement a system to secure remote access for employees using VPNs. The solution must generate logs for accounting and provide centralized authentication using Active Directory. Which solution will meet the requirements?",
    "options": [
      {
        "id": "A",
        "text": "MFA"
      },
      {
        "id": "B",
        "text": "SSL VPN"
      },
      {
        "id": "C",
        "text": "RADIUS"
      },
      {
        "id": "D",
        "text": "NAT"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "RADIUS (Remote Authentication Dial-In User Service) is a centralized AAA protocol commonly integrated with VPN servers and Active Directory (such as Microsoft Network Policy Server) to authenticate remote users and record session accounting logs. MFA adds verification factors without centralized accounting, SSL VPN provides the encrypted tunnel rather than the authentication backend, and NAT translates IP addresses."
  },
  {
    "id": "037",
    "chapter": 2,
    "sourceNumber": 37,
    "sourcePage": 12,
    "type": "single",
    "prompt": "Which of the following statements about multi-factor authentication (MFA) is correct?",
    "options": [
      {
        "id": "A",
        "text": "MFA is a security measure that requires users to provide two or more forms of identification to gain access to a system or application."
      },
      {
        "id": "B",
        "text": "MFA is a security measure that requires users to provide only one form of identification to gain access to a system or application"
      },
      {
        "id": "C",
        "text": "MFA is a security measure that is no longer recommended due to its complexity and potential for user errors."
      },
      {
        "id": "D",
        "text": "MFA is a security measure that only applies to physical access control systems."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "MFA combines at least two different factor categories, such as a password and possession of a security token. Two passwords are still one factor category; simply asking for several pieces of identifying information is not enough."
  },
  {
    "id": "038",
    "chapter": 2,
    "sourceNumber": 38,
    "sourcePage": 12,
    "type": "single",
    "prompt": "Which of the following is true about security policies and procedures?",
    "options": [
      {
        "id": "A",
        "text": "They should be regularly reviewed and updated to reflect changing threats and technologies"
      },
      {
        "id": "B",
        "text": "They should only be accessible to the IT department."
      },
      {
        "id": "C",
        "text": "They should be documented once and never changed."
      },
      {
        "id": "D",
        "text": "They should be kept confidential and not shared with employees."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Policies must stay aligned with business requirements, technology, and threats. Employees need access to the policies relevant to their responsibilities; keeping all policies secret prevents consistent implementation."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  // SOURCE AMBIGUITY: A is keyed, while D is also defensible. Do not infer a replacement key.
  {
    "id": "039",
    "chapter": 2,
    "sourceNumber": 39,
    "sourcePage": 12,
    "type": "single",
    "prompt": "Which of the following is a key requirement for conducting a security compliance audit?",
    "options": [
      {
        "id": "A",
        "text": "A comprehensive understanding of security compliance standards and regulations"
      },
      {
        "id": "B",
        "text": "A certified auditor with expertise in security compliance"
      },
      {
        "id": "C",
        "text": "Compliance monitoring tools and systems"
      },
      {
        "id": "D",
        "text": "A detailed audit plan and checklist"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (best conceptual answer; D is also defensible)",
    "explanation": "An auditor needs to understand the standards and regulations that define the audit criteria. A detailed audit plan and checklist are also important, making D a defensible requirement. The question does not establish a unique mandatory prerequisite; certification and particular monitoring tools are not universally required.",
    "sourceNote": "The reviewer keys A and also calls D defensible. Grading follows its explicit key A; see the explanation."
  },
  {
    "id": "040",
    "chapter": 2,
    "sourceNumber": 40,
    "sourcePage": 12,
    "type": "single",
    "prompt": "Which of the following is a security best practice for securing data in the cloud?",
    "options": [
      {
        "id": "A",
        "text": "Storing sensitive data in clear text"
      },
      {
        "id": "B",
        "text": "Implementing multi-factor authentication"
      },
      {
        "id": "C",
        "text": "Allowing unrestricted access to data"
      },
      {
        "id": "D",
        "text": "Using weak passwords"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "MFA reduces the chance that a stolen password alone can expose cloud data. Permissions, secure configuration, encryption, and monitoring are still needed; MFA does not replace those controls."
  },
  {
    "id": "041",
    "chapter": 2,
    "sourceNumber": 41,
    "sourcePage": 13,
    "type": "single",
    "prompt": "What is the purpose of multi-factor authentication?",
    "options": [
      {
        "id": "A",
        "text": "To provide multiple layers of security by requiring users to provide more than one form of identification"
      },
      {
        "id": "B",
        "text": "To simplify the login process by only requiring one form of identification"
      },
      {
        "id": "C",
        "text": "To restrict access to certain users by requiring additional authorization"
      },
      {
        "id": "D",
        "text": "To prevent unauthorized access by encrypting user credentials"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "MFA requires evidence from different factor categories to reduce dependence on any one credential. It authenticates identity; authorization separately determines which resources an authenticated identity may use."
  },
  {
    "id": "042",
    "chapter": 2,
    "sourceNumber": 42,
    "sourcePage": 13,
    "type": "single",
    "prompt": "Which of the following is a best practice for managing security policies and procedures?",
    "options": [
      {
        "id": "A",
        "text": "Implementing a regular review process for security policies"
      },
      {
        "id": "B",
        "text": "Relying solely on default security settings"
      },
      {
        "id": "C",
        "text": "Allowing users to create and manage their own security policies"
      },
      {
        "id": "D",
        "text": "Not documenting the security policies and procedures"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Regular reviews keep policies usable and aligned with current risks. Default settings are not a substitute for organization-specific requirements, and undocumented or individually improvised policies cannot be governed consistently."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "043",
    "chapter": 2,
    "sourceNumber": 43,
    "sourcePage": 13,
    "type": "single",
    "prompt": "Which of the following is a best practice for implementing strong password policies within an organization?",
    "options": [
      {
        "id": "A",
        "text": "Allowing users to choose their own passwords, regardless of complexity"
      },
      {
        "id": "B",
        "text": "Requiring users to change their password every 90 days"
      },
      {
        "id": "C",
        "text": "Storing passwords in clear text in a central database"
      },
      {
        "id": "D",
        "text": "Allowing users to reuse their previous passwords"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (legacy periodic rotation key)",
    "explanation": "B is the likely legacy intended key, but routine password changes every 90 days are not a current general best practice. NIST SP 800-63B-4 instead emphasizes adequate length, screening compromised values, and changes when compromise is evident. The other options weaken password security. Do not treat B as current NIST guidance."
  },
  {
    "id": "044",
    "chapter": 2,
    "sourceNumber": 44,
    "sourcePage": 13,
    "type": "single",
    "prompt": "What is the primary reason for implementing multi-factor authentication in a cloud environment?",
    "options": [
      {
        "id": "A",
        "text": "To provide an additional layer of security"
      },
      {
        "id": "B",
        "text": "To simplify the authentication process"
      },
      {
        "id": "C",
        "text": "To reduce costs"
      },
      {
        "id": "D",
        "text": "To improve performance"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "MFA adds independent evidence of identity, making password theft alone less useful to an attacker. Its main purpose is reducing unauthorized access, not improving processing speed or reducing cloud costs."
  },
  {
    "id": "045",
    "chapter": 2,
    "sourceNumber": 45,
    "sourcePage": 14,
    "type": "single",
    "prompt": "Which of the following is an example of a data security principle?",
    "options": [
      {
        "id": "A",
        "text": "Least Privilege"
      },
      {
        "id": "B",
        "text": "Session Management"
      },
      {
        "id": "C",
        "text": "ARP Spoofing"
      },
      {
        "id": "D",
        "text": "Ciphertext"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Least privilege grants only the permissions required for a task. It limits accidental exposure and the damage a compromised account can cause. Session management is a control area; ARP spoofing is an attack."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "046",
    "chapter": 2,
    "sourceNumber": 46,
    "sourcePage": 14,
    "type": "single",
    "prompt": "Which of the following password policies is considered a best practice?",
    "options": [
      {
        "id": "A",
        "text": "Requiring passwords to be changed every 5 years"
      },
      {
        "id": "B",
        "text": "Allowing users to set easily guessable passwords"
      },
      {
        "id": "C",
        "text": "Enforcing a minimum password length and complexity requirements"
      },
      {
        "id": "D",
        "text": "Storing passwords in plain text format"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (best listed; legacy complexity wording)",
    "explanation": "A minimum length is a useful password-policy requirement, so C is the best available option. Modern NIST guidance does not endorse arbitrary character-mixture requirements or routine periodic changes; it emphasizes sufficient length and compromised-password screening. Plaintext storage and guessable passwords are unsafe."
  },
  {
    "id": "047",
    "chapter": 2,
    "sourceNumber": 47,
    "sourcePage": 14,
    "type": "single",
    "prompt": "What is one of the ethical principles that guide the code of ethics for cybersecurity professionals?",
    "options": [
      {
        "id": "A",
        "text": "Impersonation"
      },
      {
        "id": "B",
        "text": "Confidentiality"
      },
      {
        "id": "C",
        "text": "Anonymity"
      },
      {
        "id": "D",
        "text": "Discrimination"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Confidentiality requires protecting information from unauthorized disclosure. Cybersecurity professionals must respect authorized access and disclosure boundaries; impersonation and discrimination are not professional ethical principles."
  },
  {
    "id": "048",
    "chapter": 2,
    "sourceNumber": 48,
    "sourcePage": 14,
    "type": "single",
    "prompt": "Which of the following is NOT a component of AAA?",
    "options": [
      {
        "id": "A",
        "text": "Authorization"
      },
      {
        "id": "B",
        "text": "Accountability"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Accurate accounting"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "AAA expands to authentication, authorization, and accounting. Accountability is a related objective but is not one of the three terms in the standard expansion. Although D says Accurate accounting rather than simply Accounting, accounting is the relevant AAA function."
  },
  {
    "id": "049",
    "chapter": 2,
    "sourceNumber": 49,
    "sourcePage": 15,
    "type": "single",
    "prompt": "Which statement accurately describes the concept of a code of ethics in the cybersecurity field?",
    "options": [
      {
        "id": "A",
        "text": "A document that articulates ethical standards for cybersecurity professionals."
      },
      {
        "id": "B",
        "text": "A set of laws and regulations governing cybersecurity practices."
      },
      {
        "id": "C",
        "text": "A framework outlining the steps of a cybersecurity attack."
      },
      {
        "id": "D",
        "text": "A compilation of open-source tools for network security."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A professional code of ethics states expected conduct, including authorization, confidentiality, and avoiding harm. It is distinct from legislation, technical attack frameworks, and a collection of software tools."
  },
  {
    "id": "050",
    "chapter": 2,
    "sourceNumber": 50,
    "sourcePage": 15,
    "type": "single",
    "prompt": "Which of the following is a common security control measure used to protect applications from unauthorized access?",
    "options": [
      {
        "id": "A",
        "text": "File compression"
      },
      {
        "id": "B",
        "text": "Biometric authentication"
      },
      {
        "id": "C",
        "text": "Hard disk formatting"
      },
      {
        "id": "D",
        "text": "Data anonymization"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Biometric authentication can verify a user before access is granted. Authorization still determines which application actions that user may perform. The other listed techniques do not authenticate an application user."
  },
  {
    "id": "051",
    "chapter": 2,
    "sourceNumber": 51,
    "sourcePage": 15,
    "type": "single",
    "prompt": "Which of the following access control methods is the most secure?",
    "options": [
      {
        "id": "A",
        "text": "Biometric authentication"
      },
      {
        "id": "B",
        "text": "Multi-factor authentication"
      },
      {
        "id": "C",
        "text": "Single-factor authentication"
      },
      {
        "id": "D",
        "text": "Password-based authentication"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "MFA combines independent authentication factor categories and is generally stronger than a biometric or password used alone. Security depends on implementation; phishing-resistant MFA provides stronger protection against credential phishing. Biometrics alone are not automatically the most secure approach."
  },
  {
    "id": "052",
    "chapter": 2,
    "sourceNumber": 52,
    "sourcePage": 15,
    "type": "single",
    "prompt": "Which of the following is a key advantage of multifactor authentication?",
    "options": [
      {
        "id": "A",
        "text": "It allows for anonymous access to systems and resources."
      },
      {
        "id": "B",
        "text": "It simplifies the authentication process."
      },
      {
        "id": "C",
        "text": "It eliminates the need for strong passwords."
      },
      {
        "id": "D",
        "text": "It provides enhanced security by requiring multiple proofs of identity."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Requiring independent proofs reduces the usefulness of a stolen single credential. MFA does not guarantee anonymity, remove every password requirement, or automatically make login simpler."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "053",
    "chapter": 2,
    "sourceNumber": 53,
    "sourcePage": 16,
    "type": "single",
    "prompt": "Which of the following represents a strong passphrase for securing a wireless SoHo network?",
    "options": [
      {
        "id": "A",
        "text": "12345678"
      },
      {
        "id": "B",
        "text": "P@ssword!"
      },
      {
        "id": "C",
        "text": "CorrectHorseBatteryStaple"
      },
      {
        "id": "D",
        "text": "jumpr0pe"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (strongest structure among these examples)",
    "explanation": "The long multiword passphrase has a stronger structure than the short or predictable alternatives. However, CorrectHorseBatteryStaple is a famous published example and must not be reused as a real password. Real passphrases should be long, unique, and unpredictably selected."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "054",
    "chapter": 2,
    "sourceNumber": 54,
    "sourcePage": 16,
    "type": "multiple",
    "prompt": "Which of the following is an example of multifactor authentication?",
    "options": [
      {
        "id": "A",
        "text": "Using a fingerprint scan only"
      },
      {
        "id": "B",
        "text": "Using a biometric scan and a passcode"
      },
      {
        "id": "C",
        "text": "Using a username and password only"
      },
      {
        "id": "D",
        "text": "Using a smart card and a PIN"
      }
    ],
    "correctOptionIds": [
      "B",
      "D"
    ],
    "answerText": "B and D (both use different factor categories)",
    "explanation": "A biometric plus a passcode combines inherence and knowledge in the introductory factor model. A smart card plus its PIN combines possession and knowledge. Both are MFA examples as worded; a real implementation must securely bind the factors and use an appropriate authenticator architecture."
  },
  {
    "id": "055",
    "chapter": 2,
    "sourceNumber": 55,
    "sourcePage": 16,
    "type": "single",
    "prompt": "Which network security concept focuses on limiting network access based on user roles and responsibilities?",
    "options": [
      {
        "id": "A",
        "text": "Intrusion detection"
      },
      {
        "id": "B",
        "text": "Access control"
      },
      {
        "id": "C",
        "text": "Vulnerability scanning"
      },
      {
        "id": "D",
        "text": "Network segmentation"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Access control decides which identities may use which resources and actions. Role-based access control assigns permissions through roles reflecting responsibilities. Detection and segmentation support security but do not define role-based authorization."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "056",
    "chapter": 2,
    "sourceNumber": 56,
    "sourcePage": 16,
    "type": "single",
    "prompt": "You need to design your company's password policy to adhere to the National Insitute of standards and Technology (NIST) guidelines for user password security. What is the minimum password length to be consistent with the NIST guidelines?",
    "options": [
      {
        "id": "A",
        "text": "4 char"
      },
      {
        "id": "B",
        "text": "8 Char"
      },
      {
        "id": "C",
        "text": "16 char"
      },
      {
        "id": "D",
        "text": "No minimum length"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (in the 2024 guidance context)",
    "explanation": "Eight characters was the NIST minimum used by the older guidance relevant to this 2024 question. NIST SP 800-63B-4 now requires 15 characters for a password used as the sole factor and allows at least eight when used within MFA. No option gives the exact current single-factor minimum."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "057",
    "chapter": 2,
    "sourceNumber": 57,
    "sourcePage": 17,
    "type": "multiple",
    "prompt": "Which two passwords follow strong password policy guidelines? (Choose 2)",
    "options": [
      {
        "id": "A",
        "text": "1mPressm3!"
      },
      {
        "id": "B",
        "text": "Feb121978"
      },
      {
        "id": "C",
        "text": "Wh@tareyouDo1ngtoday4"
      },
      {
        "id": "D",
        "text": "Fluffy#"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "answerText": "A and C (traditional policy interpretation)",
    "explanation": "A and C best satisfy traditional mixed-character password rules compared with a birthdate or short pet name. A is only nine characters, so it does not meet the current NIST single-factor minimum of 15. C is longer, but neither a printed example nor symbol substitution alone proves unpredictability; never reuse these examples as real credentials."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "058",
    "chapter": 2,
    "sourceNumber": 58,
    "sourcePage": 17,
    "type": "single",
    "prompt": "You work for a hospital that stores electronic protected heath information (ePHI) in an online portal. Authorized employees can use their mobile devices to access patient ePHI. You need to ensure that employees' mobile devices comply with HIPAA regulations. Which safeguard should you develop and implement",
    "options": [
      {
        "id": "A",
        "text": "a policy that requires multi-factor authentication to use the mobile device"
      },
      {
        "id": "B",
        "text": "a contingency plan"
      },
      {
        "id": "C",
        "text": "a policy to govern how ePHI is removed from mobile devices"
      },
      {
        "id": "D",
        "text": "an ownership policy for employees' mobile devices"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (best mobile data handling choice)",
    "explanation": "A policy governing removal of ePHI most directly protects sensitive data during device disposal or reuse. MFA and contingency planning are also relevant safeguards, so the broad question does not make C uniquely sufficient for all HIPAA compliance. Device ownership alone is not an adequate ePHI safeguard."
  },
  {
    "id": "059",
    "chapter": 2,
    "sourceNumber": 59,
    "sourcePage": 17,
    "type": "single",
    "prompt": "Which security assessment of IT systems verifies that PII data is available, accurate, confidential, and accessible only by authorized users?",
    "options": [
      {
        "id": "A",
        "text": "Risk framing"
      },
      {
        "id": "B",
        "text": "Information assurance"
      },
      {
        "id": "C",
        "text": "Workflow management"
      },
      {
        "id": "D",
        "text": "Cyber Kill Chain"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Information assurance concerns maintaining trustworthy information and services, including confidentiality, integrity, and availability. Risk framing establishes context; workflow management and the Cyber Kill Chain serve different purposes."
  },
  {
    "id": "060",
    "chapter": 2,
    "sourceNumber": 60,
    "sourcePage": 17,
    "type": "matching",
    "prompt": "Move each framework from the list on the left to correct purpose on the right",
    "answerText": "See the matches below.",
    "explanation": "GDPR is the best match for the EU personal-data description, while FISMA is the best available match for federal systems. HIPAA, PCI-DSS, and FERPA correspond to health, payment card, and education information. GDPR scope is not limited to EU citizenship, and FISMA is broader than a law solely about individuals' information.",
    "pairs": [
      {
        "term": "GDPR",
        "match": "Protects the personal information of members of the European Union"
      },
      {
        "term": "HIPAA",
        "match": "Protects the healthcare information of individuals"
      },
      {
        "term": "PCI-DSS",
        "match": "Protects the credit card information of individuals"
      },
      {
        "term": "FERPA",
        "match": "Protects the educational records of individuals"
      },
      {
        "term": "FISMA",
        "match": "Protects information about individuals that is stored by federal agencies"
      }
    ]
  },
  {
    "id": "061",
    "chapter": 2,
    "sourceNumber": 61,
    "sourcePage": 18,
    "type": "multiple",
    "prompt": "Your company is creating a BYOD policy to allow employees to join their personal smartphones to the company network Which three requirements are commonly included in a BYOD policy? (Choose 3.)",
    "options": [
      {
        "id": "A",
        "text": "Upgrade of data plan to maximum available"
      },
      {
        "id": "B",
        "text": "Configuration of a strong password"
      },
      {
        "id": "C",
        "text": "Installation of secure apps only"
      },
      {
        "id": "D",
        "text": "Encryption of stored confidential corporate data"
      },
      {
        "id": "E",
        "text": "Deletion of all personal data from the phone"
      },
      {
        "id": "F",
        "text": "Synchronization of phone lock screen password with network access password"
      }
    ],
    "correctOptionIds": [
      "B",
      "C",
      "D"
    ],
    "answerText": "B C D",
    "explanation": "BYOD policies commonly require strong device authentication, approved secure applications, and encryption of corporate data. They should define management and selective-removal rights; deleting all personal data or reusing the network password is not a universal requirement."
  },
  {
    "id": "062",
    "chapter": 2,
    "sourceNumber": 62,
    "sourcePage": 18,
    "type": "matching",
    "prompt": "For each statement, select True if the statement adheres to the cybersecurity code of ethics or False if it does not.",
    "answerText": "See the matches below.",
    "explanation": "The intended answers are F, T, F. Analysts must act within explicit authorization, use approved accounts, and preserve confidentiality. Access through another employee's credentials is not justified merely because the employee is disgruntled; specially authorized investigations must follow policy and legal requirements.",
    "pairs": [
      {
        "term": "A security analyst may use a disgruntled employee network credential to monitor behavior",
        "match": "F"
      },
      {
        "term": "A security analyst may access employee data On a company server if authorized",
        "match": "T"
      },
      {
        "term": "A security analyst may share sensitive data With unauthorized users",
        "match": "F"
      }
    ]
  },
  {
    "id": "063",
    "chapter": 2,
    "sourceNumber": 63,
    "sourcePage": 19,
    "type": "multiple",
    "prompt": "Which three authentication factors are valid for use in a multifactor authentication scenario? (choose 3)",
    "options": [
      {
        "id": "A",
        "text": "Something you are"
      },
      {
        "id": "B",
        "text": "Something you see"
      },
      {
        "id": "C",
        "text": "Something you know"
      },
      {
        "id": "D",
        "text": "Something you earn"
      },
      {
        "id": "E",
        "text": "Something you have"
      },
      {
        "id": "F",
        "text": "Somethings you do"
      }
    ],
    "correctOptionIds": [
      "A",
      "C",
      "E"
    ],
    "answerText": "A C E",
    "explanation": "The standard introductory categories are something you know, something you have, and something you are. Multiple checks from one category do not create MFA. Behavioral signals may support security decisions but are outside this question's conventional three-category model."
  },
  {
    "id": "064",
    "chapter": 2,
    "sourceNumber": 64,
    "sourcePage": 19,
    "type": "matching",
    "prompt": "Move each framework from the list on the left to the correct purpose on the right",
    "answerText": "See the matches below.",
    "explanation": "Match GDPR to the EU personal-data description, HIPAA to health information, PCI-DSS to payment card data, FERPA to education records, and FISMA to federal systems. The descriptions are simplified: GDPR scope is not based solely on EU membership or citizenship, and FISMA is federal information-security legislation.",
    "pairs": [
      {
        "term": "GDPR",
        "match": "Protects the personal information of member of The European Union"
      },
      {
        "term": "HIPAA",
        "match": "Protect the healthcare information of individuals"
      },
      {
        "term": "PCI-DSS",
        "match": "Protects the credits card information of individuals"
      },
      {
        "term": "FERPA",
        "match": "Protects the educational records of individuals"
      },
      {
        "term": "FISMA",
        "match": "Protects information about individuals that is stored by federal agencies"
      }
    ]
  },
  {
    "id": "065",
    "chapter": 2,
    "sourceNumber": 65,
    "sourcePage": 19,
    "type": "single",
    "prompt": "In order to do online banking, you enter a strong password and then enter the 5- digit code sent to you on your smartphone. Which type of authentication does this situation describe?",
    "options": [
      {
        "id": "A",
        "text": "VPN"
      },
      {
        "id": "B",
        "text": "Multifactor"
      },
      {
        "id": "C",
        "text": "AAA"
      },
      {
        "id": "D",
        "text": "RADIUS"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A password plus a one-time code received on a phone combines knowledge and possession. SMS-based MFA has interception and phishing limitations; a phishing-resistant authenticator can provide stronger protection."
  },
  {
    "id": "066",
    "chapter": 2,
    "sourceNumber": 66,
    "sourcePage": 20,
    "type": "multiple",
    "prompt": "You work for a community health care organization that uses an electronic health record (HER) system. You have implemented the physical and technical safeguards required by HIPAA. You need to prove that the EHR system is compliant with those safeguards. Which two approaches should you use to verify the system is compliant? (choose 2).",
    "options": [
      {
        "id": "A",
        "text": "Automatic log-off implementation"
      },
      {
        "id": "B",
        "text": "Penetration testing"
      },
      {
        "id": "C",
        "text": "Security awareness training"
      },
      {
        "id": "D",
        "text": "IT auditing"
      }
    ],
    "correctOptionIds": [
      "B",
      "D"
    ],
    "answerText": "B and D",
    "explanation": "Authorized penetration testing and IT auditing assess whether controls operate as intended. Automatic logoff and awareness training are safeguards, not independent verification methods. These checks contribute evidence and do not by themselves certify full HIPAA compliance."
  },
  {
    "id": "067",
    "chapter": 2,
    "sourceNumber": 67,
    "sourcePage": 20,
    "type": "single",
    "prompt": "A security assessment showed that a system administrator accessed files outside of his work hours, listed the commands he executed, and indicated how long he was connected to the system. Which AAA component does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Authorization"
      },
      {
        "id": "C",
        "text": "Auditing"
      },
      {
        "id": "D",
        "text": "Accounting"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Within the AAA framework (Authentication, Authorization, and Accounting), accounting tracks and records user activity during a session, including connection duration, timestamps, commands executed, and resources accessed. Authentication verifies identity, authorization enforces access permissions, and auditing is a compliance review process rather than one of the three AAA words."
  },
  {
    "id": "068",
    "chapter": 3,
    "sourceNumber": 68,
    "sourcePage": 21,
    "type": "single",
    "prompt": "What is a key principle of securing data in the cloud?",
    "options": [
      {
        "id": "A",
        "text": "Implementing strong physical security measures"
      },
      {
        "id": "B",
        "text": "Encrypting data at rest and in transit"
      },
      {
        "id": "C",
        "text": "Using complex passwords for all cloud users"
      },
      {
        "id": "D",
        "text": "Limiting access to the cloud from specific IP addresses"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Encryption at rest protects stored information, while encryption in transit protects information moving between systems. Access controls, physical safeguards, and key management remain necessary alongside encryption."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "069",
    "chapter": 3,
    "sourceNumber": 69,
    "sourcePage": 21,
    "type": "single",
    "prompt": "Which of the following is the most secure and recommended method for storing sensitive user data in a database?",
    "options": [
      {
        "id": "A",
        "text": "Storing the data in plain text"
      },
      {
        "id": "B",
        "text": "Using symmetric encryption"
      },
      {
        "id": "C",
        "text": "Using hashing algorithms"
      },
      {
        "id": "D",
        "text": "Using asymmetric encryption"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B (for recoverable sensitive records)",
    "explanation": "Symmetric encryption is the best listed way to protect recoverable sensitive records efficiently. If the data means passwords, use salted, computationally expensive password hashing instead. The question does not specify the data type, so no method is universally the most secure for every kind of user data."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "070",
    "chapter": 3,
    "sourceNumber": 70,
    "sourcePage": 21,
    "type": "single",
    "prompt": "Which of the following is a principle of data security?",
    "options": [
      {
        "id": "A",
        "text": "Encryption"
      },
      {
        "id": "B",
        "text": "Firewall"
      },
      {
        "id": "C",
        "text": "Intrusion Detection System"
      },
      {
        "id": "D",
        "text": "Data Masking"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (intended answer; terminology is imprecise)",
    "explanation": "Encryption is a common data-protection technique and is the likely intended answer. Data masking is also a protection technique. Strictly, neither is a foundational security principle such as confidentiality, integrity, or least privilege, so the wording does not yield a uniquely precise answer."
  },
  {
    "id": "071",
    "chapter": 3,
    "sourceNumber": 71,
    "sourcePage": 21,
    "type": "single",
    "prompt": "Which of the following is a data protection technique that involves the transformation of data into a format that is unreadable to unauthorized users?",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Encryption"
      },
      {
        "id": "C",
        "text": "Firewall"
      },
      {
        "id": "D",
        "text": "Intrusion Detection System"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Encryption makes data unintelligible without the appropriate key. Authentication verifies an identity, while firewalls and IDSs control or observe network traffic rather than cryptographically transforming the data."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "072",
    "chapter": 3,
    "sourceNumber": 72,
    "sourcePage": 22,
    "type": "single",
    "prompt": "Which of the following encryption algorithms is considered strong?",
    "options": [
      {
        "id": "A",
        "text": "RSA"
      },
      {
        "id": "B",
        "text": "MD5"
      },
      {
        "id": "C",
        "text": "ROT13"
      },
      {
        "id": "D",
        "text": "DES"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (with suitable keys and secure implementation)",
    "explanation": "RSA is the strongest listed encryption choice when appropriate key sizes and secure padding are used. MD5 is a broken hash function rather than encryption, ROT13 is weak substitution, and DES has an inadequate key size. RSA is not a guarantee against every future cryptanalytic threat."
  },
  {
    "id": "073",
    "chapter": 3,
    "sourceNumber": 73,
    "sourcePage": 22,
    "type": "single",
    "prompt": "Which encryption method is used to secure data while it is being actively used and processed by an application?",
    "options": [
      {
        "id": "A",
        "text": "Asymmetric encryption"
      },
      {
        "id": "B",
        "text": "Homomorphic encryption"
      },
      {
        "id": "C",
        "text": "Secure Sockets Layer (SSL)"
      },
      {
        "id": "D",
        "text": "Hash encryption"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Homomorphic encryption allows supported calculations to operate on ciphertext. It is a specialized way to protect data during computation, with practical limits; ordinary applications often decrypt data in memory while processing it."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "074",
    "chapter": 3,
    "sourceNumber": 74,
    "sourcePage": 22,
    "type": "single",
    "prompt": "What type of encryption is used to secure data that is stored on a hard drive or other storage media?",
    "options": [
      {
        "id": "A",
        "text": "File-based encryption"
      },
      {
        "id": "B",
        "text": "Hash encryption"
      },
      {
        "id": "C",
        "text": "Symmetric encryption"
      },
      {
        "id": "D",
        "text": "Public Key Infrastructure (PKI)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (best algorithm family answer)",
    "explanation": "Symmetric encryption commonly protects disks and stored files efficiently. File-based encryption in A describes a scope or method that can itself use symmetric encryption, so the alternatives overlap. Hash encryption is not a correct cryptographic category, and PKI is a trust infrastructure."
  },
  {
    "id": "075",
    "chapter": 3,
    "sourceNumber": 75,
    "sourcePage": 22,
    "type": "single",
    "prompt": "Which of the following is a characteristic of weak encryption algorithms?",
    "options": [
      {
        "id": "A",
        "text": "They support secure communication protocols."
      },
      {
        "id": "B",
        "text": "They are susceptible to cryptanalysis attacks."
      },
      {
        "id": "C",
        "text": "They are resistant to brute force attacks."
      },
      {
        "id": "D",
        "text": "They provide encryption keys with longer bit lengths."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Weak algorithms may be vulnerable to cryptanalysis, brute force, or structural attacks. A long key is useful only when the algorithm and implementation are also sound; key length alone cannot repair a broken design."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "076",
    "chapter": 3,
    "sourceNumber": 76,
    "sourcePage": 23,
    "type": "single",
    "prompt": "What is the purpose of encryption in network security?",
    "options": [
      {
        "id": "A",
        "text": "To monitor and detect network attacks"
      },
      {
        "id": "B",
        "text": "To authenticate and authorize users"
      },
      {
        "id": "C",
        "text": "To protect the confidentiality and integrity of data during transmission"
      },
      {
        "id": "D",
        "text": "To prevent unauthorized physical access to network devices"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (when authenticated encryption is used)",
    "explanation": "Encryption protects confidentiality. Integrity additionally requires authentication, such as an authenticated-encryption mode or a suitable MAC. C is the intended protection-oriented answer, but ordinary encryption alone does not automatically provide both properties."
  },
  {
    "id": "077",
    "chapter": 3,
    "sourceNumber": 77,
    "sourcePage": 23,
    "type": "single",
    "prompt": "Which cryptographic technique is used to ensure the integrity of data without the ability to reverse the process?",
    "options": [
      {
        "id": "A",
        "text": "Hashing algorithm"
      },
      {
        "id": "B",
        "text": "Digital signature"
      },
      {
        "id": "C",
        "text": "Asymmetric encryption"
      },
      {
        "id": "D",
        "text": "Symmetric encryption"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A cryptographic hash produces a fixed-length digest and is designed to resist recovery of its input. Comparing a digest to a trusted reference can detect changes. An attacker who can replace both a file and its unprotected hash can evade that check."
  },
  {
    "id": "078",
    "chapter": 3,
    "sourceNumber": 78,
    "sourcePage": 23,
    "type": "single",
    "prompt": "What is encryption?",
    "options": [
      {
        "id": "A",
        "text": "A process of converting plaintext into binary code to enhance data accessibility"
      },
      {
        "id": "B",
        "text": "A process of converting binary code into plaintext to improve data reliability"
      },
      {
        "id": "C",
        "text": "A process of converting plaintext into ciphertext to protect data confidentiality"
      },
      {
        "id": "D",
        "text": "A process of converting ciphertext into plaintext to secure data integrity"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Encryption transforms plaintext into ciphertext using an algorithm and key to protect confidentiality. Decryption reverses that transformation with the appropriate key; simply converting text into binary does not secure it."
  },
  {
    "id": "079",
    "chapter": 3,
    "sourceNumber": 79,
    "sourcePage": 23,
    "type": "single",
    "prompt": "What is a digital certificate used for in the context of cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Encrypting data"
      },
      {
        "id": "B",
        "text": "Verifying the identity of an entity"
      },
      {
        "id": "C",
        "text": "Creating a secure tunnel"
      },
      {
        "id": "D",
        "text": "Decrypting data"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A digital certificate binds an identity or name to a public key through an issuer's signature. Validation checks the trust chain, name, validity, and relevant status; a certificate alone does not encrypt all application data."
  },
  {
    "id": "080",
    "chapter": 3,
    "sourceNumber": 80,
    "sourcePage": 24,
    "type": "single",
    "prompt": "Which technology is responsible for managing cryptographic keys, digital certificates, and providing other security-related services?",
    "options": [
      {
        "id": "A",
        "text": "Intrusion Detection System (IDS)"
      },
      {
        "id": "B",
        "text": "Virtual Private Network (VPN)"
      },
      {
        "id": "C",
        "text": "Public Key Infrastructure (PKI)"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "PKI manages trust in public keys through certificates, certificate authorities, and related processes. It supports identity validation and secure key use; a firewall or IDS is not a certificate-management architecture."
  },
  {
    "id": "081",
    "chapter": 3,
    "sourceNumber": 81,
    "sourcePage": 24,
    "type": "single",
    "prompt": "Which encryption method uses a single key to both encrypt and decrypt data?",
    "options": [
      {
        "id": "A",
        "text": "SSL/TLS"
      },
      {
        "id": "B",
        "text": "Symmetric encryption"
      },
      {
        "id": "C",
        "text": "Hashing"
      },
      {
        "id": "D",
        "text": "Asymmetric encryption"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Symmetric encryption uses the same secret key for encryption and decryption. Asymmetric cryptography uses a related public/private key pair; hashing is a one-way transformation rather than encryption."
  },
  // SOURCE: No valid listed answer. Do not add an invented option or substitute a key.
  {
    "id": "082",
    "chapter": 3,
    "sourceNumber": 82,
    "sourcePage": 24,
    "type": "ungraded",
    "prompt": "Which of the following is an integral part of the CIA triad in cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Data loss prevention (DLP)"
      },
      {
        "id": "B",
        "text": "Two-factor authentication (2FA)"
      },
      {
        "id": "C",
        "text": "Intrusion Detection System (IDS)"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "correctOptionIds": [],
    "answerText": "No CIA triad member is listed",
    "explanation": "The CIA triad consists of confidentiality, integrity, and availability. DLP, two-factor authentication, IDS, and firewalls are security controls rather than members of the triad. None of the options is a technically correct answer to the question as written.",
    "sourceNote": "The reviewer lists no valid answer. Review only; excluded from the score."
  },
  {
    "id": "083",
    "chapter": 3,
    "sourceNumber": 83,
    "sourcePage": 24,
    "type": "single",
    "prompt": "Which of the following best describes the concept of data integrity in cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Ensuring data is available for authorized users when needed"
      },
      {
        "id": "B",
        "text": "Encrypting data to prevent unauthorized modifications"
      },
      {
        "id": "C",
        "text": "Protecting data from unauthorized access or disclosure"
      },
      {
        "id": "D",
        "text": "Ensuring data is accurate, consistent, and trustworthy"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Integrity means protecting the accuracy and completeness of information against unauthorized or improper change. Availability concerns access when needed, and confidentiality concerns preventing unauthorized disclosure."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "084",
    "chapter": 3,
    "sourceNumber": 84,
    "sourcePage": 25,
    "type": "single",
    "prompt": "Which type of encryption protects data while it is being transmitted over a network?",
    "options": [
      {
        "id": "A",
        "text": "Transport Layer Security (TLS)"
      },
      {
        "id": "B",
        "text": "Asymmetric encryption"
      },
      {
        "id": "C",
        "text": "Symmetric encryption"
      },
      {
        "id": "D",
        "text": "Hash encryption"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (best protocol answer)",
    "explanation": "TLS is the protocol specifically designed to protect data in transit, using cryptographic mechanisms including symmetric session encryption. B and C are algorithm families used within secure systems, not the specific transport-protection protocol. Hash encryption is not a valid category."
  },
  {
    "id": "085",
    "chapter": 3,
    "sourceNumber": 85,
    "sourcePage": 25,
    "type": "single",
    "prompt": "Which macOS security feature encrypts the entre macOS volume?",
    "options": [
      {
        "id": "A",
        "text": "Gatekeeper"
      },
      {
        "id": "B",
        "text": "FileVault"
      },
      {
        "id": "C",
        "text": "XProtect"
      },
      {
        "id": "D",
        "text": "System Integrity Protection (SIP)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "FileVault encrypts the Mac's startup volume and protects stored data when it is locked. Gatekeeper checks application trust, XProtect detects known malware, and SIP restricts changes to protected operating-system areas."
  },
  {
    "id": "086",
    "chapter": 3,
    "sourceNumber": 86,
    "sourcePage": 25,
    "type": "single",
    "prompt": "Which data type is protected through hard disk encryption?",
    "options": [
      {
        "id": "A",
        "text": "Data in use"
      },
      {
        "id": "B",
        "text": "Data in transit"
      },
      {
        "id": "C",
        "text": "Data at rest"
      },
      {
        "id": "D",
        "text": "Data in process"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Disk encryption protects data at rest on storage media. Data crossing a network is in transit; data being processed is in use. An unlocked, compromised endpoint can still expose decrypted information."
  },
  {
    "id": "087",
    "chapter": 3,
    "sourceNumber": 87,
    "sourcePage": 25,
    "type": "matching",
    "prompt": "Move each definition from the list on the left to the correct CIA Triad term on the right.",
    "answerText": "See the matches below.",
    "explanation": "Confidentiality restricts disclosure, integrity protects against unauthorized alteration, and availability supports timely reliable access. Authorized changes are compatible with integrity; availability is a design objective rather than a promise of absolute uninterrupted access.",
    "pairs": [
      {
        "term": "Confidentiality",
        "match": "Data should be accessed and read only by authorized users."
      },
      {
        "term": "Integrity",
        "match": "Data should never be altered or compromised."
      },
      {
        "term": "Availability",
        "match": "Legitimate requests should have access to data at all times."
      }
    ]
  },
  {
    "id": "088",
    "chapter": 3,
    "sourceNumber": 88,
    "sourcePage": 26,
    "type": "single",
    "prompt": "The company web server collects information through a form. The form is accessed by using port 80 . The form content is transferred to an encrypted database for storage. You are investigating a complaint that the form content has been compromised. What is the cause of the security breach?",
    "options": [
      {
        "id": "A",
        "text": "The data was transferred to the database using a nonsecure protocol."
      },
      {
        "id": "B",
        "text": "The web browser used to access the site was not updated to the latest version."
      },
      {
        "id": "C",
        "text": "The website was accessed using HTTP, which is an unencrypted protocol."
      },
      {
        "id": "D",
        "text": "The database was compromised"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Plain HTTP does not encrypt form submissions between browser and server. Encrypting the destination database does not repair that exposed network leg; use correctly configured HTTPS. The scenario identifies an exposure, not definitive proof of the actual breach path."
  },
  {
    "id": "089",
    "chapter": 3,
    "sourceNumber": 89,
    "sourcePage": 26,
    "type": "matching",
    "prompt": "Move each definition from the list on the left to the correct CIA Triad term on the right.",
    "answerText": "See the matches below.",
    "explanation": "Confidentiality restricts disclosure, integrity prevents improper alteration, and availability supports timely access. The matching wording is simplified: integrity allows authorized changes, and availability does not promise literal uninterrupted access at all times.",
    "pairs": [
      {
        "term": "Confidentiality",
        "match": "Data should be accessed and read by Authorized users only."
      },
      {
        "term": "Integrity",
        "match": "Data should never be altered or compromised."
      },
      {
        "term": "Availability",
        "match": "Legitimate requests should have access to Data at all times"
      }
    ]
  },
  {
    "id": "090",
    "chapter": 3,
    "sourceNumber": 90,
    "sourcePage": 26,
    "type": "single",
    "prompt": "Which data type is protected through hard disk encryption?",
    "options": [
      {
        "id": "A",
        "text": "Data in process"
      },
      {
        "id": "B",
        "text": "Data at rest"
      },
      {
        "id": "C",
        "text": "Data in transit"
      },
      {
        "id": "D",
        "text": "Data in use"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Full-disk encryption protects stored data at rest, particularly when the device is locked or powered off. It does not alone protect data during network transfer or from malware running in an unlocked user session."
  },
  {
    "id": "091",
    "chapter": 3,
    "sourceNumber": 91,
    "sourcePage": 26,
    "type": "single",
    "prompt": "What does hashing provide for the communication?",
    "options": [
      {
        "id": "A",
        "text": "Data integrity"
      },
      {
        "id": "B",
        "text": "Data encryption"
      },
      {
        "id": "C",
        "text": "Data non-repudiation"
      },
      {
        "id": "D",
        "text": "Origin authentication"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Hashing supports integrity checking by producing a digest that changes when the input changes. The reference digest must be trusted; an unkeyed hash by itself does not prove who sent the message or provide non-repudiation."
  },
  {
    "id": "092",
    "chapter": 4,
    "sourceNumber": 92,
    "sourcePage": 28,
    "type": "single",
    "prompt": "What is a common security threat in which an attacker attempts to overwhelm a targeted system by flooding it with Internet traffic?",
    "options": [
      {
        "id": "A",
        "text": "Ransomware"
      },
      {
        "id": "B",
        "text": "Distributed Denial of Service (DDoS) attack"
      },
      {
        "id": "C",
        "text": "Phishing"
      },
      {
        "id": "D",
        "text": "SQL injection"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A distributed denial-of-service attack uses multiple sources to exhaust a service's capacity or resources. Ransomware extorts victims, phishing deceives users, and SQL injection targets unsafe database queries."
  },
  {
    "id": "093",
    "chapter": 4,
    "sourceNumber": 93,
    "sourcePage": 28,
    "type": "single",
    "prompt": "What is the purpose of Security Information and Event Management (SIEM) systems?",
    "options": [
      {
        "id": "A",
        "text": "To analyze network traffic and detect potential security threats."
      },
      {
        "id": "B",
        "text": "To centrally collect, store, and analyze logs from various systems to detect and respond to security incidents."
      },
      {
        "id": "C",
        "text": "To encrypt sensitive data to protect it from unauthorized access."
      },
      {
        "id": "D",
        "text": "To authenticate and authorize users to access network resources."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A SIEM centralizes logs and correlates events to support threat detection and investigation. It may ingest network alerts, but it is not simply a packet analyzer, encryption service, or access-control system."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "094",
    "chapter": 4,
    "sourceNumber": 94,
    "sourcePage": 28,
    "type": "single",
    "prompt": "What is a common vulnerability in cloud-based systems?",
    "options": [
      {
        "id": "A",
        "text": "Inadequate access controls"
      },
      {
        "id": "B",
        "text": "Outdated antivirus software"
      },
      {
        "id": "C",
        "text": "Weak passwords"
      },
      {
        "id": "D",
        "text": "Lack of network segmentation"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (broadly applicable; the choices are not exclusive)",
    "explanation": "Inadequate access controls can expose cloud resources and are a broadly applicable cloud-security weakness. Weak passwords, poor segmentation, and outdated protection can also be vulnerabilities. A is the best general access-control answer, but the question does not provide enough context to rule out every other choice."
  },
  {
    "id": "095",
    "chapter": 4,
    "sourceNumber": 95,
    "sourcePage": 28,
    "type": "single",
    "prompt": "Which security technology uses an agent-based approach to protect endpoints and is designed to detect and prevent malicious activities?",
    "options": [
      {
        "id": "A",
        "text": "Firewall"
      },
      {
        "id": "B",
        "text": "Intrusion Prevention System (IPS)"
      },
      {
        "id": "C",
        "text": "Data Loss Prevention (DLP)"
      },
      {
        "id": "D",
        "text": "Advanced Malware Protection (AMP)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Cisco Advanced Malware Protection, now associated with Cisco Secure Endpoint branding, uses endpoint software to detect and respond to malicious activity. Other products can also have agents, so the Cisco product context makes this choice specific."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "096",
    "chapter": 4,
    "sourceNumber": 96,
    "sourcePage": 29,
    "type": "single",
    "prompt": "Which of the following is a common security threat that targets web applications?",
    "options": [
      {
        "id": "A",
        "text": "SQL injection"
      },
      {
        "id": "B",
        "text": "DNS poisoning"
      },
      {
        "id": "C",
        "text": "Man-in-the-middle attack"
      },
      {
        "id": "D",
        "text": "Distributed Denial of Service (DDoS)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (best application specific example)",
    "explanation": "SQL injection directly targets unsafe handling of database queries in an application. DNS poisoning, on-path attacks, and DDoS can also affect web services, but SQL injection is the most clearly application-specific example among these choices. The wording is broader than a question identifying a unique attack mechanism."
  },
  {
    "id": "097",
    "chapter": 4,
    "sourceNumber": 97,
    "sourcePage": 29,
    "type": "single",
    "prompt": "What is malware?",
    "options": [
      {
        "id": "A",
        "text": "A form of cyber attack that attempts to gain unauthorized access to a network."
      },
      {
        "id": "B",
        "text": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system."
      },
      {
        "id": "C",
        "text": "A technique used by attackers to obtain sensitive information through deception."
      },
      {
        "id": "D",
        "text": "A network of compromised computers used to carry out coordinated attacks."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Malware is software designed for harmful or unauthorized activity. It includes ransomware, spyware, viruses, and worms. A botnet is a collection of compromised systems rather than the general definition of malware."
  },
  {
    "id": "098",
    "chapter": 4,
    "sourceNumber": 98,
    "sourcePage": 29,
    "type": "single",
    "prompt": "What does hardening mean in the context of cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Removing all vulnerabilities from a system or network"
      },
      {
        "id": "B",
        "text": "Implementing cybersecurity policies and regulations"
      },
      {
        "id": "C",
        "text": "Creating a backup of critical data and configurations"
      },
      {
        "id": "D",
        "text": "Making a system more resistant to threats and attacks"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Hardening reduces attack surface through secure configuration, patching, least privilege, and disabling unnecessary services. It improves resistance to attack without guaranteeing that every vulnerability has been eliminated."
  },
  {
    "id": "099",
    "chapter": 4,
    "sourceNumber": 99,
    "sourcePage": 29,
    "type": "single",
    "prompt": "Which of the following best describes network security?",
    "options": [
      {
        "id": "A",
        "text": "Ensuring high availability and performance of the network"
      },
      {
        "id": "B",
        "text": "Securing physical access to network devices"
      },
      {
        "id": "C",
        "text": "Protecting data from unauthorized access or modifications"
      },
      {
        "id": "D",
        "text": "Preventing network configuration errors"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Network security protects information and services through confidentiality, integrity, and availability. Physical security and reliable configuration contribute to that goal but do not alone define its full scope."
  },
  {
    "id": "100",
    "chapter": 4,
    "sourceNumber": 100,
    "sourcePage": 30,
    "type": "single",
    "prompt": "What is spear phishing?",
    "options": [
      {
        "id": "A",
        "text": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person."
      },
      {
        "id": "B",
        "text": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information."
      },
      {
        "id": "C",
        "text": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information."
      },
      {
        "id": "D",
        "text": "A type of phishing attack that targets specific individuals or organizations."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Spear phishing targets a particular person, role, or organization with tailored deception. Smishing uses text messages, while tailgating is unauthorized physical entry behind another person."
  },
  {
    "id": "101",
    "chapter": 4,
    "sourceNumber": 101,
    "sourcePage": 30,
    "type": "single",
    "prompt": "What type of security technique involves setting up a decoy system or network to lure and trap potential attackers?",
    "options": [
      {
        "id": "A",
        "text": "Honeypot"
      },
      {
        "id": "B",
        "text": "Virtualization"
      },
      {
        "id": "C",
        "text": "DMZ"
      },
      {
        "id": "D",
        "text": "Proxy"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A honeypot is a deliberately monitored decoy that attracts or reveals attacker behavior. It must be isolated appropriately and does not replace production controls. A DMZ is a network zone rather than inherently a decoy."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "102",
    "chapter": 4,
    "sourceNumber": 102,
    "sourcePage": 30,
    "type": "single",
    "prompt": "Which of the following is an example of a web application vulnerability that can be exploited by an attacker?",
    "options": [
      {
        "id": "A",
        "text": "Network latency"
      },
      {
        "id": "B",
        "text": "Disk fragmentation"
      },
      {
        "id": "C",
        "text": "Buffer overflow"
      },
      {
        "id": "D",
        "text": "Cross-site scripting (XSS)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D (most directly associated with web applications)",
    "explanation": "XSS is a well-known web vulnerability that allows untrusted script to execute in a browser in the application context. Buffer overflow can also affect native components of a web application, so C is not universally impossible. D is the strongest directly web-specific choice; latency and fragmentation are not vulnerabilities by themselves."
  },
  {
    "id": "103",
    "chapter": 4,
    "sourceNumber": 103,
    "sourcePage": 30,
    "type": "single",
    "prompt": "What are botnets?",
    "options": [
      {
        "id": "A",
        "text": "An attack that manipulates individuals into revealing sensitive information or performing certain actions."
      },
      {
        "id": "B",
        "text": "A network of compromised computers controlled by a central entity to carry out malicious activities."
      },
      {
        "id": "C",
        "text": "A form of cyber attack that attempts to gain unauthorized access to a network."
      },
      {
        "id": "D",
        "text": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A botnet is a collection of compromised devices controlled for malicious activity such as DDoS or spam. B is the best listed description. The command-and-control architecture may be centralized or peer-to-peer, so a single central controller is not required."
  },
  {
    "id": "104",
    "chapter": 4,
    "sourceNumber": 104,
    "sourcePage": 31,
    "type": "single",
    "prompt": "Which of the following is a common threat to cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Software updates"
      },
      {
        "id": "B",
        "text": "Data encryption"
      },
      {
        "id": "C",
        "text": "User authentication"
      },
      {
        "id": "D",
        "text": "Phishing attacks"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Phishing deceives users into disclosing information or taking harmful actions. Updates, encryption, and authentication are normally protective activities, although attackers can imitate them as part of a lure."
  },
  {
    "id": "105",
    "chapter": 4,
    "sourceNumber": 105,
    "sourcePage": 31,
    "type": "single",
    "prompt": "What is a denial of service (DoS) attack?",
    "options": [
      {
        "id": "A",
        "text": "A technique used by attackers to obtain sensitive information through deception."
      },
      {
        "id": "B",
        "text": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system."
      },
      {
        "id": "C",
        "text": "A form of cyber attack that attempts to gain unauthorized access to a network."
      },
      {
        "id": "D",
        "text": "An attack that overwhelms a target system with a flood of traffic or requests, rendering it inaccessible to legitimate users."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "A denial-of-service attack makes a service unavailable by exhausting capacity or exploiting a fault. Flooding is one method. A distributed attack uses multiple sources; unauthorized access is not required to cause denial of service."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "106",
    "chapter": 4,
    "sourceNumber": 106,
    "sourcePage": 31,
    "type": "multiple",
    "prompt": "What is an attack vector in cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "The method used by an attacker to gain unauthorized access"
      },
      {
        "id": "B",
        "text": "A vulnerability in a system that can be exploited"
      },
      {
        "id": "C",
        "text": "The path or means through which an attacker can exploit vulnerabilities"
      },
      {
        "id": "D",
        "text": "The likelihood of a cyber attack taking place"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "answerText": "A and C (equivalent definitions)",
    "explanation": "Both A and C describe an attack vector: the route or method an attacker uses to reach or exploit a target. B is a vulnerability and D is a likelihood. Because A and C overlap, the question cannot fairly require only one of those two choices."
  },
  {
    "id": "107",
    "chapter": 4,
    "sourceNumber": 107,
    "sourcePage": 31,
    "type": "single",
    "prompt": "Which of the following is an example of a network vulnerability?",
    "options": [
      {
        "id": "A",
        "text": "Encrypting sensitive data"
      },
      {
        "id": "B",
        "text": "Running outdated and unpatched software"
      },
      {
        "id": "C",
        "text": "Using a strong password"
      },
      {
        "id": "D",
        "text": "Implementing a firewall"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Outdated, unpatched software may contain known exploitable weaknesses. Encryption, strong authentication, and firewalls can reduce risk, though they must be configured and maintained properly."
  },
  {
    "id": "108",
    "chapter": 4,
    "sourceNumber": 108,
    "sourcePage": 32,
    "type": "single",
    "prompt": "Which of the following is NOT an essential security principle?",
    "options": [
      {
        "id": "A",
        "text": "Complexity"
      },
      {
        "id": "B",
        "text": "Confidentiality"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Integrity"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "The CIA triad consists of confidentiality, integrity, and availability. Complexity is not a member and can make systems harder to secure, although real security designs may contain necessary complexity."
  },
  {
    "id": "109",
    "chapter": 4,
    "sourceNumber": 109,
    "sourcePage": 32,
    "type": "single",
    "prompt": "Which of the following best describes the concept of defense in depth in cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "Utilizing multiple layers of security controls to protect against different types of threats"
      },
      {
        "id": "B",
        "text": "Running regular vulnerability scans to maintain the integrity of the system"
      },
      {
        "id": "C",
        "text": "Implementing access controls to ensure availability of critical resources"
      },
      {
        "id": "D",
        "text": "Encrypting sensitive data to maintain confidentiality"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Defense in depth uses complementary controls so a failure in one layer does not leave the entire system exposed. It includes people, process, and technology rather than relying on only encryption or one scan."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "110",
    "chapter": 4,
    "sourceNumber": 110,
    "sourcePage": 32,
    "type": "single",
    "prompt": "What is the general motivation behind an Advanced Persistent Threat (APT)?",
    "options": [
      {
        "id": "A",
        "text": "Publicity"
      },
      {
        "id": "B",
        "text": "Random disruption"
      },
      {
        "id": "C",
        "text": "Financial gain"
      },
      {
        "id": "D",
        "text": "Revenge"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (best listed possible motive)",
    "explanation": "Financial gain is a possible APT motive and the strongest listed choice. APT campaigns are defined by targeted, sustained access rather than by one universal motive. Espionage and sabotage are also common objectives, but they are not offered."
  },
  {
    "id": "111",
    "chapter": 4,
    "sourceNumber": 111,
    "sourcePage": 32,
    "type": "single",
    "prompt": "What is a vulnerability in the context of cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "An advanced encryption algorithm"
      },
      {
        "id": "B",
        "text": "A software bug that causes system crashes"
      },
      {
        "id": "C",
        "text": "A weakness in a system that can be exploited by threats"
      },
      {
        "id": "D",
        "text": "A security measure that prevents unauthorized access"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "A vulnerability is a weakness that could be exploited to cause harm. A bug can be a vulnerability, but not every bug is exploitable and vulnerabilities also include configuration and process weaknesses."
  },
  {
    "id": "112",
    "chapter": 4,
    "sourceNumber": 112,
    "sourcePage": 33,
    "type": "single",
    "prompt": "What is an Advanced Persistent Threat (APT)?",
    "options": [
      {
        "id": "A",
        "text": "A vulnerability in network communication protocols."
      },
      {
        "id": "B",
        "text": "A cyberattack that compromises multiple devices simultaneously."
      },
      {
        "id": "C",
        "text": "A sophisticated and targeted attack that aims to gain unauthorized access and maintain persistence over a long period."
      },
      {
        "id": "D",
        "text": "A type of malware that spreads rapidly through a network."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "An APT is a sustained, targeted campaign that seeks persistent access. It is not defined by how many devices are compromised or by rapid self-propagation, which is associated with worms."
  },
  {
    "id": "113",
    "chapter": 4,
    "sourceNumber": 113,
    "sourcePage": 33,
    "type": "single",
    "prompt": "What is an insider threat?",
    "options": [
      {
        "id": "A",
        "text": "A threat posed by an individual with authorized access to an organization's systems and data."
      },
      {
        "id": "B",
        "text": "A vulnerability in an organization's network infrastructure."
      },
      {
        "id": "C",
        "text": "The accidental disclosure of sensitive information."
      },
      {
        "id": "D",
        "text": "A security breach caused by an external attacker."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "An insider threat arises from someone with authorized access, whether harm is deliberate or accidental. It may involve employees, contractors, or partners and is not limited to an outside attacker."
  },
  {
    "id": "114",
    "chapter": 4,
    "sourceNumber": 114,
    "sourcePage": 33,
    "type": "single",
    "prompt": "What is tailgating in the context of cybersecurity?",
    "options": [
      {
        "id": "A",
        "text": "A type of phishing attack that targets specific individuals or organizations."
      },
      {
        "id": "B",
        "text": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person."
      },
      {
        "id": "C",
        "text": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information."
      },
      {
        "id": "D",
        "text": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Tailgating occurs when an unauthorized person follows an authorized entrant into a restricted area. It exploits physical access practices rather than a software vulnerability or text-message lure."
  },
  {
    "id": "115",
    "chapter": 4,
    "sourceNumber": 115,
    "sourcePage": 33,
    "type": "single",
    "prompt": "What is the primary characteristic of an Advanced Persistent Threat (APT) compared to traditional attacks?",
    "options": [
      {
        "id": "A",
        "text": "APTs are easily detectable by conventional security measures"
      },
      {
        "id": "B",
        "text": "APTs involve persistent and prolonged attacks on specific targets"
      },
      {
        "id": "C",
        "text": "APTs are random and indiscriminate in their targets"
      },
      {
        "id": "D",
        "text": "APTs are primarily aimed at causing immediate damage to systems"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Persistence and focused targeting distinguish an APT campaign. Such campaigns can attempt to remain unnoticed for long periods and are not necessarily designed for immediate disruption."
  },
  {
    "id": "116",
    "chapter": 4,
    "sourceNumber": 116,
    "sourcePage": 34,
    "type": "single",
    "prompt": "What is smishing?",
    "options": [
      {
        "id": "A",
        "text": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information."
      },
      {
        "id": "B",
        "text": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person."
      },
      {
        "id": "C",
        "text": "A type of phishing attack that targets specific individuals or organizations."
      },
      {
        "id": "D",
        "text": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Smishing is phishing delivered through SMS or similar text messages. The message may request credentials, direct a victim to a malicious site, or trick the victim into installing software."
  },
  {
    "id": "117",
    "chapter": 4,
    "sourceNumber": 117,
    "sourcePage": 34,
    "type": "single",
    "prompt": "Which of the following best describes social engineering?",
    "options": [
      {
        "id": "A",
        "text": "A method of manipulating individuals to disclose sensitive information"
      },
      {
        "id": "B",
        "text": "A type of malware attack"
      },
      {
        "id": "C",
        "text": "A physical security control"
      },
      {
        "id": "D",
        "text": "A network security protocol"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Social engineering manipulates people into disclosing information or performing actions that benefit an attacker. It may use impersonation, urgency, authority, or trust and need not involve malware."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "118",
    "chapter": 4,
    "sourceNumber": 118,
    "sourcePage": 34,
    "type": "single",
    "prompt": "Which malicious activity is NOT typically associated with cyber attacks?",
    "options": [
      {
        "id": "A",
        "text": "Phishing"
      },
      {
        "id": "B",
        "text": "Malware"
      },
      {
        "id": "C",
        "text": "Data encryption"
      },
      {
        "id": "D",
        "text": "Denial of Service (DoS)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (for ordinary authorized encryption)",
    "explanation": "Encryption is normally protective, unlike phishing, malware, and denial of service. Attackers can also misuse encryption in ransomware, so C is the best ordinary-use answer rather than a claim that encryption can never be part of an attack."
  },
  {
    "id": "119",
    "chapter": 4,
    "sourceNumber": 119,
    "sourcePage": 34,
    "type": "single",
    "prompt": "What is a man-in-the-middle attack?",
    "options": [
      {
        "id": "A",
        "text": "An attack that intercepts and manipulates communication between two parties."
      },
      {
        "id": "B",
        "text": "An attack that exploits vulnerabilities in a device's software."
      },
      {
        "id": "C",
        "text": "An attack that targets Internet of Things devices."
      },
      {
        "id": "D",
        "text": "An attack where an insider intentionally releases sensitive information."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "An on-path or man-in-the-middle attacker intercepts communication and may alter or relay it. Correctly validated authenticated TLS helps protect against this; encryption without trustworthy authentication can still be vulnerable."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "120",
    "chapter": 4,
    "sourceNumber": 120,
    "sourcePage": 35,
    "type": "single",
    "prompt": "Which of the following best describes an Advanced Persistent Threat (APT)?",
    "options": [
      {
        "id": "A",
        "text": "An unintentional and harmless interaction with a computer system"
      },
      {
        "id": "B",
        "text": "A security incident caused by human error or negligence"
      },
      {
        "id": "C",
        "text": "A targeted cyber attack that aims to gain unauthorized access to sensitive information"
      },
      {
        "id": "D",
        "text": "A type of malware designed to disrupt computer networks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (closest listed description)",
    "explanation": "C is the closest option because an APT is targeted and seeks unauthorized access. The definition is incomplete without sustained persistence over time. Unintentional mistakes and generic disruptive malware are not equivalent to an APT campaign."
  },
  {
    "id": "121",
    "chapter": 4,
    "sourceNumber": 121,
    "sourcePage": 35,
    "type": "matching",
    "prompt": "You need to diagram an intrusion event by using the Diamond Model. Move each event detail from the list on the left to the correct location in the diagram on the right.",
    "answerText": "See the matches below.",
    "explanation": "The Diamond Model connects adversary, capability, infrastructure, and victim. The ransomware group is the adversary; phishing and malware are capabilities; the email server and domain support delivery; the customer and product databases are victim assets.",
    "pairs": [
      {
        "term": "Adversary",
        "match": "Ransomware Group"
      },
      {
        "term": "Infrastructure",
        "match": "Email Server, Domain Name"
      },
      {
        "term": "Capability",
        "match": "Phishing Email, Malware"
      },
      {
        "term": "Victim",
        "match": "Customer and Product Databases"
      }
    ]
  },
  {
    "id": "122",
    "chapter": 4,
    "sourceNumber": 122,
    "sourcePage": 35,
    "type": "single",
    "prompt": "How do threat actors launch ransomware attacks on organizations?",
    "options": [
      {
        "id": "A",
        "text": "They deface an organization's public-facing website."
      },
      {
        "id": "B",
        "text": "They lock data and deny access to the data until they receive money."
      },
      {
        "id": "C",
        "text": "They implant malware to collect data from the corporation's financial system."
      },
      {
        "id": "D",
        "text": "They secretly spy on employees and collect employees\" personal information."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Ransomware commonly encrypts or locks resources and demands payment; some campaigns also steal data and threaten disclosure. This describes its impact, not the initial delivery method, which can involve phishing or exploitation."
  },
  {
    "id": "123",
    "chapter": 4,
    "sourceNumber": 123,
    "sourcePage": 35,
    "type": "matching",
    "prompt": "Move each scenario from the list on the left to the correct type of attacker on the right.",
    "answerText": "See the matches below.",
    "explanation": "Financially motivated cybercriminals seek profit, state-sponsored actors support state objectives, insiders abuse legitimate access, and hacktivists pursue ideological goals. These categories can overlap in real investigations; the scenario's strongest clue determines the classroom match.",
    "pairs": [
      {
        "term": "Cyber criminal",
        "match": "Tries to profit from personal data gained by spamming companies or individuals"
      },
      {
        "term": "State-sponsored attacker",
        "match": "Works in conjunction with a government to promote its agenda"
      },
      {
        "term": "Insider threat",
        "match": "Works as a company contractor who installs malware on a server"
      },
      {
        "term": "Hacktivist",
        "match": "Interferes in a government election to promote a self- defined sense of justice"
      }
    ]
  },
  {
    "id": "124",
    "chapter": 4,
    "sourceNumber": 124,
    "sourcePage": 36,
    "type": "single",
    "prompt": "An employee accidentally sends an email containing sensitive corporate information to an external email address. Which type of threat does this scenario describe?",
    "options": [
      {
        "id": "A",
        "text": "Insider"
      },
      {
        "id": "B",
        "text": "Logic bomb"
      },
      {
        "id": "C",
        "text": "Malware"
      },
      {
        "id": "D",
        "text": "Phishing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "An employee's accidental disclosure is an unintentional insider incident because the person had legitimate access. Insider threats do not require malicious intent, and the scenario does not show phishing, a logic bomb, or malware."
  },
  {
    "id": "125",
    "chapter": 4,
    "sourceNumber": 125,
    "sourcePage": 36,
    "type": "single",
    "prompt": "A client cannot connect to the corporate web server. You discover a large number of half-open TCP connections to the server. What should you do?",
    "options": [
      {
        "id": "A",
        "text": "Take action to stop the TCP SYN flood attack."
      },
      {
        "id": "B",
        "text": "Ignore the half-open connections because this is a normal part of the TCP three-way handshake"
      },
      {
        "id": "C",
        "text": "Flush the DNS cache information."
      },
      {
        "id": "D",
        "text": "Change the connection protocol from HTTP to HTTPS."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Large numbers of incomplete TCP handshakes suggest a SYN flood exhausting connection resources. Investigate and apply appropriate protections such as SYN cookies, rate limits, and upstream filtering; changing HTTP to HTTPS does not remove the flood."
  },
  {
    "id": "126",
    "chapter": 4,
    "sourceNumber": 126,
    "sourcePage": 36,
    "type": "single",
    "prompt": "The employees in the accounting department of a company receive an email about the latest federal regulations. The email contains a hyperlink to register for a webinar that provides the latest updates on financial security. The webinar is hosted by a government agency. As a security officer, you notice that the hyperlink points to an unknown party. Which type of cybersecurity threat should you investigate?",
    "options": [
      {
        "id": "A",
        "text": "Spear phishing"
      },
      {
        "id": "B",
        "text": "Smishing"
      },
      {
        "id": "C",
        "text": "Ransomware"
      },
      {
        "id": "D",
        "text": "Vishing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "The message targets a particular department with a relevant lure and a misleading registration link, making spear phishing the best description. Smishing uses text messages; vishing uses voice communication."
  },
  {
    "id": "127",
    "chapter": 4,
    "sourceNumber": 127,
    "sourcePage": 37,
    "type": "single",
    "prompt": "Which classification of security alert is the greatest threat to an organization because it represents undetected exploits?",
    "options": [
      {
        "id": "A",
        "text": "False negative"
      },
      {
        "id": "B",
        "text": "False positive"
      },
      {
        "id": "C",
        "text": "True negative"
      },
      {
        "id": "D",
        "text": "True positive"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A false negative means malicious activity occurred but the detector failed to flag it. False positives are benign events wrongly alerted on, while true positives and true negatives are correct classifications."
  },
  {
    "id": "128",
    "chapter": 4,
    "sourceNumber": 128,
    "sourcePage": 37,
    "type": "single",
    "prompt": "A corporation hires a group of experienced cyber criminals to create a prolonged and in-depth presence on the network of a competitor. This presence will allow the corporation to steal or sabotage. Which type of attack does this scenario describe?",
    "options": [
      {
        "id": "A",
        "text": "Ransomware"
      },
      {
        "id": "B",
        "text": "Man-in-the-middle"
      },
      {
        "id": "C",
        "text": "APT"
      },
      {
        "id": "D",
        "text": "DDoS"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "The attackers seek sustained access for theft or sabotage, matching an APT campaign. APT describes targeted persistence; ransomware, on-path interception, and DDoS describe different behaviors or effects."
  },
  {
    "id": "129",
    "chapter": 4,
    "sourceNumber": 129,
    "sourcePage": 37,
    "type": "single",
    "prompt": "Several employees complain that the company intranet site is no longer accepting their login information. You attempt to connect by using the URL and notice some misspellings on the site. When you connect by using IP address the site functions normally. What should you do?",
    "options": [
      {
        "id": "A",
        "text": "Verify the accuracy of the entry for the site in the local DNS server."
      },
      {
        "id": "B",
        "text": "Take the company web portal offline immediately"
      },
      {
        "id": "C",
        "text": "Update the web server software to the latest version"
      },
      {
        "id": "D",
        "text": "Restore a backup copy of the authentication database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A name that resolves to a suspicious site while the expected server behaves normally suggests incorrect or poisoned DNS data. Check resolution and trusted DNS records first. Direct-IP testing can behave differently under HTTPS and virtual hosting, so it is a diagnostic clue rather than proof."
  },
  {
    "id": "130",
    "chapter": 4,
    "sourceNumber": 130,
    "sourcePage": 37,
    "type": "single",
    "prompt": "A security analyst discovers that a hacker was able to gain root access to an enterprise Linux server. The hacker accessed the server as a guest, used a program to bypass the root password and then killed essential processes as the root user. Which type of endpoint attack is this?",
    "options": [
      {
        "id": "A",
        "text": "Buffer overflow"
      },
      {
        "id": "B",
        "text": "DDoS"
      },
      {
        "id": "C",
        "text": "Privilege escalation"
      },
      {
        "id": "D",
        "text": "Brute force"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "The attacker moves from guest privileges to root privileges, which is privilege escalation. A buffer overflow might enable that change, but no overflow is established by the scenario; brute force and DDoS are not demonstrated."
  },
  {
    "id": "131",
    "chapter": 4,
    "sourceNumber": 131,
    "sourcePage": 38,
    "type": "single",
    "prompt": "Which activity by an adversary is an example of an exploit that is attempting to gain credentials?",
    "options": [
      {
        "id": "A",
        "text": "Installing a backdoor in order to enable two-way communication with the device"
      },
      {
        "id": "B",
        "text": "Sending an email with a link to a fictitious web portal login page"
      },
      {
        "id": "C",
        "text": "Obtaining a directory listing of files located on the web database server"
      },
      {
        "id": "D",
        "text": "Executing a remote port scan of all of the enterprise-registered IP addresses"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "A fake login portal sent in a deceptive email attempts credential phishing. Reconnaissance and directory listing may gather information but do not directly solicit a user's authentication secret in this scenario."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "132",
    "chapter": 4,
    "sourceNumber": 132,
    "sourcePage": 38,
    "type": "single",
    "prompt": "Customers of an online shopping store are complaining that they cannot visit the website. As an IT technician, you restart the website. After 30 minutes, the website crashes again. You suspect that the website has experiencing Which type of cybersecurity threat should you investigate?",
    "options": [
      {
        "id": "A",
        "text": "Spear phishing"
      },
      {
        "id": "B",
        "text": "Ransomware"
      },
      {
        "id": "C",
        "text": "Denial of service"
      },
      {
        "id": "D",
        "text": "Social engineering"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (a threat to investigate, not a proven cause)",
    "explanation": "Repeated website unavailability can result from denial of service, but crashes can also come from faults or ordinary capacity problems. C is the most relevant listed threat to investigate; traffic, system resources, and logs are needed to confirm the cause."
  },
  {
    "id": "133",
    "chapter": 4,
    "sourceNumber": 133,
    "sourcePage": 38,
    "type": "single",
    "prompt": "A security administrator is implementing defense-in-depth. Which set of solutions applies protections across each layer of the defense-in-depth approach?",
    "options": [
      {
        "id": "A",
        "text": "Strong passwords, access controls, MFA, Identity and access management (IAM)"
      },
      {
        "id": "B",
        "text": "Identity and access management (IAM), encryption, IPS/IDS, and endpoint detection and response (EDR) solutions"
      },
      {
        "id": "C",
        "text": "IPS/IDS, endpoint detection and response (EDR) solutions, strong passwords, firewall"
      },
      {
        "id": "D",
        "text": "IPS/IDS, antivirus/anti-malware, firewall, and endpoint detection and response (EDR) solutions"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Option B spans distinct security layers: identity and access (IAM), data protection (encryption), network perimeter (IPS/IDS), and host endpoint (EDR). Option A covers only identity and access controls, Option C omits dedicated data-layer encryption, and Option D covers only network and endpoint controls."
  },
  {
    "id": "134",
    "chapter": 5,
    "sourceNumber": 134,
    "sourcePage": 39,
    "type": "single",
    "prompt": "How does sandboxing help with the analysis of malware?",
    "options": [
      {
        "id": "A",
        "text": "It allows suspicious application to run in a safe and isolated testing environment"
      },
      {
        "id": "B",
        "text": "It specifies the applications that are authorized for use on the network"
      },
      {
        "id": "C",
        "text": "it restricts traffic from passing from one network to another"
      },
      {
        "id": "D",
        "text": "it defines the suspicious or malicious applications that should de blocked"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A sandbox runs suspicious code in a controlled, isolated environment so its behavior can be observed. It reduces exposure but does not guarantee perfect containment or detection; allowlisting and network filtering are separate controls."
  },
  {
    "id": "135",
    "chapter": 5,
    "sourceNumber": 135,
    "sourcePage": 39,
    "type": "single",
    "prompt": "Why is it necessary to update firmware to the latest version?",
    "options": [
      {
        "id": "A",
        "text": "To patch firmware in the kernel of the operating system"
      },
      {
        "id": "B",
        "text": "To support the latest operating systems and applications"
      },
      {
        "id": "C",
        "text": "To correct security holes and weaknesses"
      },
      {
        "id": "D",
        "text": "To explore new hardware features"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Firmware updates can fix vulnerabilities in device code. Updates may also improve compatibility and features, but correcting known security weaknesses is the security reason emphasized here; firmware is not simply the operating-system kernel."
  },
  {
    "id": "136",
    "chapter": 5,
    "sourceNumber": 136,
    "sourcePage": 39,
    "type": "single",
    "prompt": "Which Windows app is a command line interface that includes a sophisticated scripting language used to automate windows tasks?",
    "options": [
      {
        "id": "A",
        "text": "PowerShell"
      },
      {
        "id": "B",
        "text": "Vim"
      },
      {
        "id": "C",
        "text": "Microsoft Management Console"
      },
      {
        "id": "D",
        "text": "MS.DOS"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "PowerShell is a command shell and scripting environment used to automate Windows administration. MMC hosts graphical management tools, Vim is a text editor, and MS-DOS is not the modern Windows automation environment described."
  },
  {
    "id": "137",
    "chapter": 5,
    "sourceNumber": 137,
    "sourcePage": 39,
    "type": "single",
    "prompt": "A contractor is building a new home for a client. The client decides to install several IoT device. What should the client do to ensure that the smart home is less vulnerable to attacks?",
    "options": [
      {
        "id": "A",
        "text": "Buy IoT devices with the highest radio frequency for connecting to WiFi."
      },
      {
        "id": "B",
        "text": "Enable the SSID broadcast feature on the wireless router."
      },
      {
        "id": "C",
        "text": "Connect the IoT devices to different wireless APs."
      },
      {
        "id": "D",
        "text": "Update the firmware on the loT devices regularly"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Firmware updates address known IoT vulnerabilities when supported by the vendor. Merely using another access point does not guarantee isolation; segmentation, unique credentials, and disabling unnecessary access provide additional protection."
  },
  {
    "id": "138",
    "chapter": 5,
    "sourceNumber": 138,
    "sourcePage": 40,
    "type": "matching",
    "prompt": "You are using a Linux workstation to gather information that will assist in uncovering vulnerabilities on the local LAN",
    "answerText": "See the matches below.",
    "explanation": "tcpdump captures packets; nmap discovers hosts and services; netstat -a lists active connections and listening sockets; nslookup queries DNS. The connection-list wording is incomplete because netstat -a also includes listeners. Reverse DNS can map an IP address to a name when a suitable PTR record exists.",
    "pairs": [
      {
        "term": "tcpdump",
        "match": "Captures IP packets in a .pcap file for later analysis"
      },
      {
        "term": "nmap",
        "match": "Scans a domain or network to identify devices and open ports"
      },
      {
        "term": "netstat -a",
        "match": "Lists all current TCP and UDP connections on the local system"
      },
      {
        "term": "nslookup",
        "match": "Provides DNS information including IP address to domain name mapping"
      }
    ]
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  // SOURCE CONTEXT MISSING: No separate event-message exhibit is supplied; retain the explicit key A.
  {
    "id": "139",
    "chapter": 5,
    "sourceNumber": 139,
    "sourcePage": 40,
    "type": "single",
    "prompt": "You are reviewing the Application log on a Windows computer. You see an event with an error-level message as shown. What can you determine about the application that generated the event message?",
    "options": [
      {
        "id": "A",
        "text": "The application experienced a significant problem that caused it to fail."
      },
      {
        "id": "B",
        "text": "The application recovered from an event without loss of functionality."
      },
      {
        "id": "C",
        "text": "The application is currently running much slower than expected"
      },
      {
        "id": "D",
        "text": "The application loaded and ran successfully without issues"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A (closest listed answer)",
    "explanation": "An Error event indicates a significant problem affecting an application operation. A is the closest listed description, but severity alone does not prove that the entire application crashed or terminated. Read the event ID, message, and surrounding evidence before determining impact.",
    "sourceNote": "The question refers to an event message 'as shown,' but no separate event message appears in the supplied PDF. The reviewer explicitly keys A."
  },
  {
    "id": "140",
    "chapter": 5,
    "sourceNumber": 140,
    "sourcePage": 40,
    "type": "single",
    "prompt": "A system on your network is experiencing slower than usual response times. In order to gather information about the status of the system, you issue the netstat -l command to display all of the TCP ports that are in the listing state. What does the Listening state indicate about these ports?",
    "options": [
      {
        "id": "A",
        "text": "The state of the connection on the ports is unknown."
      },
      {
        "id": "B",
        "text": "The remote end disconnected and the ports are closing."
      },
      {
        "id": "C",
        "text": "The ports are open on the system and are waiting for connections."
      },
      {
        "id": "D",
        "text": "The ports are actively connected to another system or process."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "A listening socket is waiting for incoming connections rather than already exchanging data with another system. On Linux, netstat -l shows listening sockets and is not restricted to TCP; adding -t selects TCP. The printed word listing should be read as listening in this context."
  },
  {
    "id": "141",
    "chapter": 5,
    "sourceNumber": 141,
    "sourcePage": 41,
    "type": "single",
    "prompt": "What enables the network security team to keep track of the operating system version, security updates, and patches on end user's devices?",
    "options": [
      {
        "id": "A",
        "text": "Business continuity planning"
      },
      {
        "id": "B",
        "text": "Asset management"
      },
      {
        "id": "C",
        "text": "Incident management"
      },
      {
        "id": "D",
        "text": "Security policies and procedures"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Asset management maintains an inventory of devices, software versions, ownership, and patch status. Reliable inventory helps identify vulnerable systems; incident management and continuity planning use that information for different purposes."
  },
  {
    "id": "142",
    "chapter": 5,
    "sourceNumber": 142,
    "sourcePage": 41,
    "type": "single",
    "prompt": "You are security technician. You just completed a full scan of a Windows 10 PC. Where should you go to view the scan result?",
    "options": [
      {
        "id": "A",
        "text": "Windows Task Manager"
      },
      {
        "id": "B",
        "text": "Windows System Logs"
      },
      {
        "id": "C",
        "text": "Windows Application Logs"
      },
      {
        "id": "D",
        "text": "Windows Security"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Windows Security shows Microsoft Defender scan status and protection history. Task Manager shows running processes and resource use; general application or system logs are not the primary user interface for reviewing a Defender scan."
  },
  {
    "id": "143",
    "chapter": 5,
    "sourceNumber": 143,
    "sourcePage": 41,
    "type": "multiple",
    "prompt": "Several staff members are experiencing unexplained computer crashes and many unwanted pop-up messages. Which two actions should you take immediately to address the problem without impacting data? ( choose 2)",
    "options": [
      {
        "id": "A",
        "text": "Reinstall Windows on the affected workstations"
      },
      {
        "id": "B",
        "text": "Deploy a policy to install and automatically update antivirus and anti-malware software."
      },
      {
        "id": "C",
        "text": "Scan affected workstations and remove malware."
      },
      {
        "id": "D",
        "text": "Configure the network firewall to block malware from entering the internal network."
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "answerText": "B and C",
    "explanation": "Updating anti-malware protection and scanning affected hosts address suspected infection without immediately erasing user data. Isolate affected devices when needed and preserve evidence; reinstallation can be justified later but is not the least disruptive first choice."
  },
  {
    "id": "144",
    "chapter": 5,
    "sourceNumber": 144,
    "sourcePage": 42,
    "type": "single",
    "prompt": "A cybersecurity analyst is investigating an unknown executable file discovered on a Linux desktop computer. The analyst enters the following command in the terminal ls -l. What is the purpose of this command?",
    "options": [
      {
        "id": "A",
        "text": "To display the content of a text file"
      },
      {
        "id": "B",
        "text": "To open a text editor"
      },
      {
        "id": "C",
        "text": "To display the file permission and ownership of the executable file"
      },
      {
        "id": "D",
        "text": "To navigate to the folder that is passed as an argument to the command."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "ls -l displays a long listing with file type, permissions, owner, group, size, and timestamps. It does not execute the file, display its contents, open an editor, or change the current directory."
  },
  {
    "id": "145",
    "chapter": 5,
    "sourceNumber": 145,
    "sourcePage": 42,
    "type": "single",
    "prompt": "After an administrator installs an operating system update on a laptop, the laptop user can no longer print to their wireless printer. What should solve the issue?",
    "options": [
      {
        "id": "A",
        "text": "Check for patches for wireless printers."
      },
      {
        "id": "B",
        "text": "Reinstall the same service pack."
      },
      {
        "id": "C",
        "text": "Install a new device driver for the wireless printer"
      },
      {
        "id": "D",
        "text": "Update the firmware on the laptop"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "An operating-system update can make an existing printer driver incompatible. Installing a supported current driver addresses that likely software-interface problem; firmware or network checks may still be needed if the symptom persists."
  },
  {
    "id": "146",
    "chapter": 5,
    "sourceNumber": 146,
    "sourcePage": 42,
    "type": "matching",
    "prompt": "Move each windows host log type from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "Application logs contain program events; Setup logs concern installation and setup; System logs concern operating-system components, drivers, and services; Security logs record audited security events. Match by the event type rather than assuming the supplied row alignment is an answer key.",
    "pairs": [
      {
        "term": "Application logs",
        "match": "Contain events that are received from Programs running on the device"
      },
      {
        "term": "Setup logs",
        "match": "Record information about software Installation and operating system updates"
      },
      {
        "term": "System logs",
        "match": "List events generated by the operation of Hardware, drivers, and processes"
      },
      {
        "term": "Security logs",
        "match": "Record the success or failure of audit Policy events"
      }
    ]
  },
  {
    "id": "147",
    "chapter": 6,
    "sourceNumber": 147,
    "sourcePage": 43,
    "type": "single",
    "prompt": "What is the primary purpose of running a vulnerability scan on your network?",
    "options": [
      {
        "id": "A",
        "text": "to automatically prioritize security weaknesses for immediate remediation"
      },
      {
        "id": "B",
        "text": "to correlate event logs on multiple servers in order to generate intrusion alerts."
      },
      {
        "id": "C",
        "text": "To identify and document the locations of customer and financial databases"
      },
      {
        "id": "D",
        "text": "To determine whether systems are subject to CVEs that could be exploited by adversaries"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "A vulnerability scan identifies potential weaknesses, including applicable known CVEs and configuration problems. Findings must be validated and prioritized; a scan does not automatically prove successful exploitation or replace an authorized penetration test."
  },
  {
    "id": "148",
    "chapter": 6,
    "sourceNumber": 148,
    "sourcePage": 43,
    "type": "multiple",
    "prompt": "You are collecting data after a suspected intrusion on the local LAN. You need to capture incoming IP packets to a file for an investigator to analyze. Which two tools should you use? (Choose 2.)",
    "options": [
      {
        "id": "A",
        "text": "Nmap"
      },
      {
        "id": "B",
        "text": "Wireshark"
      },
      {
        "id": "C",
        "text": "netstat"
      },
      {
        "id": "D",
        "text": "tcpdump"
      }
    ],
    "correctOptionIds": [
      "B",
      "D"
    ],
    "answerText": "B and D",
    "explanation": "Wireshark and tcpdump capture packets and can save them for later analysis. Nmap primarily discovers hosts and services; netstat displays local connection information rather than recording packet contents."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "149",
    "chapter": 6,
    "sourceNumber": 149,
    "sourcePage": 43,
    "type": "single",
    "prompt": "You are going to perform a penetration test on a company LAN. As part of your preparation, you access the company's websites, view webpage source code, and run internet searches to uncover domain information. You also use social media to gather details about the company and its employees.",
    "options": [
      {
        "id": "A",
        "text": "Offline"
      },
      {
        "id": "B",
        "text": "Active"
      },
      {
        "id": "C",
        "text": "Invasive"
      },
      {
        "id": "D",
        "text": "Passive"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D (conventional introductory classification)",
    "explanation": "Public-source research, social-media review, and domain-information gathering are commonly classified as passive reconnaissance. Directly retrieving pages from the target server creates contact and may be treated as active interaction under stricter definitions. The overall scenario is intended to illustrate passive information gathering."
  },
  {
    "id": "150",
    "chapter": 6,
    "sourceNumber": 150,
    "sourcePage": 44,
    "type": "multiple",
    "prompt": "Which two basic metrics should be taken into consideration when assessing a severity to a vulnerability during an assessment? (choose 2)",
    "options": [
      {
        "id": "A",
        "text": "The age of the hardware running the software that contains the vulnerability"
      },
      {
        "id": "B",
        "text": "The likelihood that an adversary can and will exploit the vulnerability"
      },
      {
        "id": "C",
        "text": "The time involved in choosing replacement software to replace older systems"
      },
      {
        "id": "D",
        "text": "The impacts that an exploit of the vulnerability will have on the organization"
      }
    ],
    "correctOptionIds": [
      "B",
      "D"
    ],
    "answerText": "B and D",
    "explanation": "Likelihood and organizational impact are core risk-assessment considerations. They inform prioritization alongside technical severity and exposure; hardware age or replacement effort alone does not establish how serious a weakness is."
  },
  {
    "id": "151",
    "chapter": 6,
    "sourceNumber": 151,
    "sourcePage": 44,
    "type": "ordering",
    "prompt": "You need to manage security risks at your company. In which order should you complete the actions?",
    "options": [
      {
        "id": "A",
        "text": "Identify the risks"
      },
      {
        "id": "B",
        "text": "Prioritize the risks."
      },
      {
        "id": "C",
        "text": "Implement a response"
      },
      {
        "id": "D",
        "text": "Monitor results."
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerText": "A then B then C then D",
    "explanation": "First identify risks, then evaluate and prioritize them, implement appropriate treatment, and monitor the result. Monitoring can reveal changing conditions that require another assessment, so risk management is iterative."
  },
  {
    "id": "152",
    "chapter": 6,
    "sourceNumber": 152,
    "sourcePage": 44,
    "type": "multiple",
    "prompt": "Your manager asks you to review the output of some vulnerability scans and report anything that may require escalation. Which two findings should you report for further investigation as potential security vulnerabilities? (Choose 2.)",
    "options": [
      {
        "id": "A",
        "text": "Encrypted passwords"
      },
      {
        "id": "B",
        "text": "Disabled firewalls"
      },
      {
        "id": "C",
        "text": "Open ports"
      },
      {
        "id": "D",
        "text": "SSH packets"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "answerText": "B and C",
    "explanation": "A disabled firewall and unexpected open ports merit investigation. An open port is not automatically a vulnerability: establish whether the service is necessary, authorized, patched, and exposed appropriately before escalating its risk."
  },
  {
    "id": "153",
    "chapter": 6,
    "sourceNumber": 153,
    "sourcePage": 44,
    "type": "single",
    "prompt": "You notice that a new CVE has been shared to an email group that you belong to. What should you do first with the CVE?",
    "options": [
      {
        "id": "A",
        "text": "Record the CVE as part of the disaster recovery plan."
      },
      {
        "id": "B",
        "text": "Research measures to prevent the CVE from attacking the network."
      },
      {
        "id": "C",
        "text": "Add the CVE to the firewall rules for your organization."
      },
      {
        "id": "D",
        "text": "Look up details of the vulnerability to determine whether it applies to your network"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "A CVE identifier refers to a documented vulnerability. First compare affected products, versions, and conditions with your inventory; only then choose relevant mitigation. The CVE itself is not malware that can be blocked as a firewall rule."
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "154",
    "chapter": 6,
    "sourceNumber": 154,
    "sourcePage": 45,
    "type": "multiple",
    "prompt": "Your supervisor suspects that someone is attempting to gain access to a Windows computer by guessing user account IDs and passwords. The supervisor asks you to use the Windows Event Viewer security logs to verify the attempts. Which two audit policy events provide information to determine whether someone is using invalid credentials to attempt to log in to the computer? (Choose 2.)",
    "options": [
      {
        "id": "A",
        "text": "Object access failure"
      },
      {
        "id": "B",
        "text": "Account lockout success"
      },
      {
        "id": "C",
        "text": "Account logon failure"
      },
      {
        "id": "D",
        "text": "Account logoff success"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "answerText": "B and C (best listed evidence)",
    "explanation": "Failed logon or credential-validation events and account-lockout evidence help identify password guessing. The phrase Account lockout success is best interpreted as a successful audit record of a lockout, such as event 4740, not a successful user login. Inspect failed logon event 4625 and its details; an object-access failure alone does not establish invalid login credentials."
  },
  {
    "id": "155",
    "chapter": 6,
    "sourceNumber": 155,
    "sourcePage": 45,
    "type": "single",
    "prompt": "Your supervisor tells you that you will participate in a CVSS assessment. What will you be doing?",
    "options": [
      {
        "id": "A",
        "text": "Performing penetration tests on internal network devices and end system"
      },
      {
        "id": "B",
        "text": "Interviewing users to determine their level of cybersecurity awareness"
      },
      {
        "id": "C",
        "text": "Evaluating end system security and scoring software vulnerabilities"
      },
      {
        "id": "D",
        "text": "Analyzing host logs to identify abnormal activities"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "CVSS provides a standardized way to describe and score vulnerability severity. It does not perform a penetration test or measure awareness, and its score is an input to risk prioritization rather than a complete organizational risk assessment."
  },
  {
    "id": "156",
    "chapter": 6,
    "sourceNumber": 156,
    "sourcePage": 45,
    "type": "single",
    "prompt": "While conducting a risk evaluation at your company, you identify risks that are related to the web server located in the office. The risks include hardware and software failure as well as web service interruption caused by cyber attacks. You recommend purchasing insurance and hiring another organization to maintain the web server to help mitigate the risks.",
    "options": [
      {
        "id": "A",
        "text": "Risk reduction"
      },
      {
        "id": "B",
        "text": "Risk avoidance"
      },
      {
        "id": "C",
        "text": "Risk acceptance"
      },
      {
        "id": "D",
        "text": "Risk transfer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Insurance transfers some financial consequences to an insurer. Outsourcing can share or transfer responsibilities, but the organization retains accountability and residual risk; transfer does not remove the underlying threat."
  },
  {
    "id": "157",
    "chapter": 6,
    "sourceNumber": 157,
    "sourcePage": 46,
    "type": "single",
    "prompt": "You are working with the senior administration team to identify potential risks. Which phase of risk management are you in?",
    "options": [
      {
        "id": "A",
        "text": "Choosing risk strategies"
      },
      {
        "id": "B",
        "text": "Measuring residual risk"
      },
      {
        "id": "C",
        "text": "Mitigating risks"
      },
      {
        "id": "D",
        "text": "Determining a risk profile"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Identifying relevant threats, assets, and exposures contributes to building a risk profile. Selecting treatments and measuring residual risk follow assessment; the source's named phase is broad rather than a universal standard label."
  },
  {
    "id": "158",
    "chapter": 6,
    "sourceNumber": 158,
    "sourcePage": 46,
    "type": "matching",
    "prompt": "Move each cybersecurity tool from the list on the left to the correct location on the Vulnerability Management Process diagram on the right",
    "answerText": "See the matches below.",
    "explanation": "Nmap helps discover hosts and services, Nessus scans for vulnerabilities, CVSS supports severity prioritization, and update or patch tools remediate weaknesses. CVSS is a scoring system rather than a scanner, and business context must supplement it.",
    "pairs": [
      {
        "term": "Discover",
        "match": "Nmap; Nessus Scanner"
      },
      {
        "term": "Prioritize",
        "match": "CVSS"
      },
      {
        "term": "Remediate",
        "match": "Windows Auto Update; Patch Management Software"
      }
    ]
  },
  {
    "id": "159",
    "chapter": 6,
    "sourceNumber": 159,
    "sourcePage": 46,
    "type": "single",
    "prompt": "Your organization's SIEM system alerts you that users are connecting to an unusual URL. You need to determine whether the URL is malicious and what type of threat it represents. What should you do?",
    "options": [
      {
        "id": "A",
        "text": "Submit the URL to a threat intelligence portal for analysis"
      },
      {
        "id": "B",
        "text": "Ask users why they visited the website."
      },
      {
        "id": "C",
        "text": "Visit the URL to determine whether the websites is legitimate"
      },
      {
        "id": "D",
        "text": "Block the URL by placing it on the network block list."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "A trusted threat-intelligence service can help analyze a suspicious URL without visiting it directly from a normal workstation. Avoid submitting URLs containing secrets or sensitive internal data to public services; use approved internal analysis when appropriate."
  },
  {
    "id": "160",
    "chapter": 6,
    "sourceNumber": 160,
    "sourcePage": 46,
    "type": "matching",
    "prompt": "Move each cybersecurity term from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "These are the intended matches for asset, threat, risk, and vulnerability. More precisely, a threat is a potential cause of harm rather than only an action that already caused damage. Risk assessment also considers likelihood and impact; a vulnerability is the exploitable weakness.",
    "pairs": [
      {
        "term": "Asset",
        "match": "People, property, or data"
      },
      {
        "term": "Threat",
        "match": "An action that causes a negative impact"
      },
      {
        "term": "Risk",
        "match": "The potential for loss, damage, or destruction"
      },
      {
        "term": "Vulnerability",
        "match": "A weakness that potentially exposes Organizations to cyber attacks"
      }
    ]
  },
  {
    "id": "161",
    "chapter": 6,
    "sourceNumber": 161,
    "sourcePage": 47,
    "type": "single",
    "prompt": "Which activity is an example of active reconnaissance performed during a penetration test?",
    "options": [
      {
        "id": "A",
        "text": "Using a browser to view the HTTP source code of company webpages"
      },
      {
        "id": "B",
        "text": "Gathering employee information from available web directories and social media"
      },
      {
        "id": "C",
        "text": "Performing an Nmap port scan on the LAN to determine types of connected devices and open ports"
      },
      {
        "id": "D",
        "text": "Searching the WHOIS database for the owner and technical contact information for a domain."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "An Nmap port scan sends probes to target systems, making it active reconnaissance. WHOIS and social-media research use public information; directly retrieving a target web page also makes contact, so source context matters."
  },
  {
    "id": "162",
    "chapter": 6,
    "sourceNumber": 162,
    "sourcePage": 47,
    "type": "multiple",
    "prompt": "Which two basic metrics should be taken into consideration when assigning a severity to a vulnerability during an assessment? (Choose 2)",
    "options": [
      {
        "id": "A",
        "text": "The likelihood that an adversary can and will exploit the vulnerability"
      },
      {
        "id": "B",
        "text": "The impacts that an exploit of the vulnerability will have on the organization"
      },
      {
        "id": "C",
        "text": "The time involved n choosing replacement software to replace older systems"
      },
      {
        "id": "D",
        "text": "The age of the hardware running the software that contains the vulnerability"
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "answerText": "A and B",
    "explanation": "Likelihood of exploitation and organizational impact guide risk prioritization. Technical severity, exposure, and asset importance also matter; hardware age and replacement planning alone cannot determine the risk posed by the weakness."
  },
  {
    "id": "163",
    "chapter": 6,
    "sourceNumber": 163,
    "sourcePage": 47,
    "type": "multiple",
    "prompt": "What are two disadvantages of public vulnerability databases? (choose 2)",
    "options": [
      {
        "id": "A",
        "text": "Threat actors can access the databases to learn how to vary their threats to avoid detection."
      },
      {
        "id": "B",
        "text": "Publicly available database are incompatible with most security platform"
      },
      {
        "id": "C",
        "text": "It can take a long time for reported vulnerabilities to be investigated and approved for addition to the databases"
      },
      {
        "id": "D",
        "text": "It is costly for intelligence analysts to document and submit newly discovered vulnerabilities."
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "answerText": "A and C",
    "explanation": "Public vulnerability details can help adversaries plan attacks or adapt techniques, while investigation and publication delays can leave databases incomplete. These are the intended trade-offs in A and C. Public databases also provide major defensive value; public access does not automatically defeat detection, and platform incompatibility is not universal."
  },
  {
    "id": "164",
    "chapter": 6,
    "sourceNumber": 164,
    "sourcePage": 48,
    "type": "single",
    "prompt": "Which command displays both the configured DNS server information and the IP address resolution for a URL?",
    "options": [
      {
        "id": "A",
        "text": "Ping"
      },
      {
        "id": "B",
        "text": "Nslookup"
      },
      {
        "id": "C",
        "text": "Traceroute"
      },
      {
        "id": "D",
        "text": "Nmap"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "answerText": "B",
    "explanation": "nslookup displays the DNS server used and DNS record results for a queried name. A hostname is queried rather than an entire URL containing a scheme or path. ping and traceroute perform different reachability and route diagnostics."
  },
  {
    "id": "165",
    "chapter": 6,
    "sourceNumber": 165,
    "sourcePage": 48,
    "type": "multiple",
    "prompt": "Your manager asks you to review the output of some vulnerability scans and report anything that might require escalation. Which two findings should you report for further investigation as potential security vulnerabilities? (Choose 2.)",
    "options": [
      {
        "id": "A",
        "text": "Missing application patches"
      },
      {
        "id": "B",
        "text": "SSH packets"
      },
      {
        "id": "C",
        "text": "DNS packets with common domain names"
      },
      {
        "id": "D",
        "text": "Open ports"
      }
    ],
    "correctOptionIds": [
      "A",
      "D"
    ],
    "answerText": "A and D",
    "explanation": "Missing application patches expose systems to known, exploitable vulnerabilities (CVEs), and unexpected open ports expand the network attack surface. Routine SSH traffic and standard DNS queries for common domain names represent normal network activity rather than vulnerability scan findings."
  },
  {
    "id": "166",
    "chapter": 7,
    "sourceNumber": 166,
    "sourcePage": 49,
    "type": "single",
    "prompt": "Which of the following is true regarding the incident response process?",
    "options": [
      {
        "id": "A",
        "text": "It is a reactive process that is only initiated after an incident has occurred."
      },
      {
        "id": "B",
        "text": "It is a proactive process that focuses on preventing incidents from occurring."
      },
      {
        "id": "C",
        "text": "It is an iterative process that involves continuous improvement based on lessons learned."
      },
      {
        "id": "D",
        "text": "It is a one-time process that is only performed when an organization first establishes its security program."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Incident response includes preparation, detection, response, recovery, and improvement. Lessons from incidents should improve controls and procedures, so it is a continuing activity rather than a one-time response."
  },
  {
    "id": "167",
    "chapter": 7,
    "sourceNumber": 167,
    "sourcePage": 49,
    "type": "single",
    "prompt": "You need a software solution that performs the following tasks. ◦ Compiles network data ◦ Logs information from many sources ◦ Provides orchestration in the form of case management ◦ Automates incident response workflows What product should you use?",
    "options": [
      {
        "id": "A",
        "text": "Snort"
      },
      {
        "id": "B",
        "text": "NextGen IPS"
      },
      {
        "id": "C",
        "text": "SIEM"
      },
      {
        "id": "D",
        "text": "SOAR"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "SOAR emphasizes orchestration, case management, and automated response playbooks. SIEM emphasizes collecting and correlating security events; modern platforms may combine capabilities, but the workflow-automation requirement makes SOAR the best fit."
  },
  {
    "id": "168",
    "chapter": 7,
    "sourceNumber": 168,
    "sourcePage": 49,
    "type": "matching",
    "prompt": "Move each worm mitigation step from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "Containment limits spread; inoculation patches uninfected targets; quarantine isolates infected systems; treatment removes infection and restores trusted operation. These activities may overlap in real incidents rather than following a rigid one-time sequence.",
    "pairs": [
      {
        "term": "Step 1, Containment",
        "match": "Contain the spread of the worm into your network and within your network. Compartmentalize uninfected parts of your network."
      },
      {
        "term": "Step 2, Inoculation",
        "match": "Start patching all systems and, if possible, scanning for vulnerable systems."
      },
      {
        "term": "Step 3, Quarantine",
        "match": "Track down each infected machine in your network. Disconnect, remove, or block infected machines from the network."
      },
      {
        "term": "Step 4, Treatment",
        "match": "Clean and patch each infected system. Some worms may require complete core system reinstallations to clean the system."
      }
    ]
  },
  {
    "id": "169",
    "chapter": 7,
    "sourceNumber": 169,
    "sourcePage": 50,
    "type": "multiple",
    "prompt": "You are reviewing your company's disaster recovery plan. Which two daily data backup actions should the plan include? (Choose 2.)",
    "options": [
      {
        "id": "A",
        "text": "Back up the data by using RAID on a local external hard drive with a secondary power source."
      },
      {
        "id": "B",
        "text": "Back up the data to removable media and store it off-site."
      },
      {
        "id": "C",
        "text": "Back up the data by using cloud services."
      },
      {
        "id": "D",
        "text": "Back up each department's data to a separate local server."
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "answerText": "B and C",
    "explanation": "Off-site removable-media backups and appropriately secured cloud backups can retain recovery copies away from local disasters. RAID is redundancy, not a backup: it does not inherently protect against deletion, ransomware, or site loss. Separate local copies may help recovery but lack the off-site protection of B and C."
  },
  {
    "id": "170",
    "chapter": 7,
    "sourceNumber": 170,
    "sourcePage": 50,
    "type": "matching",
    "prompt": "Move each NIST Incident Response Lifecycle phase from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "The four labels are the historical NIST SP 800-61 Rev. 2 lifecycle. Preserve them for older course material, but Rev. 3, published in 2025, aligns incident response with CSF 2.0 and supersedes Rev. 2.",
    "pairs": [
      {
        "term": "Containment, Eradication, and Recovery",
        "match": "Mitigates the impact of the incident"
      },
      {
        "term": "Detection and Analysis",
        "match": "Evaluates incident indicators to determine whether they are legitimate attacks and alerts the organization of the incidents."
      },
      {
        "term": "Post-incident Activity",
        "match": "Reports the cause and cost of the incident and the steps to prevent future incidents."
      },
      {
        "term": "Preparation",
        "match": "Establishes an incident response capability to ensure that organizational assets are sufficiently secure."
      }
    ]
  },
  {
    "id": "171",
    "chapter": 7,
    "sourceNumber": 171,
    "sourcePage": 50,
    "type": "single",
    "prompt": "What is the main purpose of a disaster recovery plan as compared to a business continuity plan?",
    "options": [
      {
        "id": "A",
        "text": "Limiting operational downtime"
      },
      {
        "id": "B",
        "text": "Allowing staff to continue to serve customers throughout a disaster"
      },
      {
        "id": "C",
        "text": "Keeping the business open in some capacity during a disaster"
      },
      {
        "id": "D",
        "text": "Restoring data access and an IT infrastructure as quickly as possible"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Disaster recovery focuses on restoring IT systems and data after disruption. Business continuity covers maintaining critical business operations more broadly, potentially through alternate people, facilities, or manual procedures."
  },
  {
    "id": "172",
    "chapter": 7,
    "sourceNumber": 172,
    "sourcePage": 50,
    "type": "matching",
    "prompt": "For each statement, select True if it is a common motivation to commit cyber attacks or False if is not.",
    "answerText": "See the matches below.",
    "explanation": "Disgruntlement and ideological goals are recognized attacker motivations. Protecting one's own data through authorized defensive action is not itself a motive for an unauthorized attack. Motivation never establishes authorization to test another system.",
    "pairs": [
      {
        "term": "A person becomes disgruntled at work.",
        "match": "TRUE"
      },
      {
        "term": "A person wants to protect personal data.",
        "match": "FALSE"
      },
      {
        "term": "A person wants to advance a social agenda.",
        "match": "TRUE"
      }
    ]
  },
  {
    "id": "173",
    "chapter": 7,
    "sourceNumber": 173,
    "sourcePage": 51,
    "type": "matching",
    "prompt": "Move each NIST incident Response Lifecycle phase from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "Preparation establishes readiness; detection and analysis identifies and validates incidents; containment, eradication, and recovery limits harm and restores service; post-incident work captures lessons. These are Rev. 2 historical labels.",
    "pairs": [
      {
        "term": "Containment, Eradication and Recovery",
        "match": "Mitigate the impact of the incident."
      },
      {
        "term": "Post-incident Activity",
        "match": "Report the cause and cost of the incident And the steps to prevent future incident"
      },
      {
        "term": "Detection and Analysis",
        "match": "Evaluates incident indicators to determine whether they are legitimate attacks and alerts the organization of the incidents."
      },
      {
        "term": "Preparation",
        "match": "Establishes an incident response capability to Ensure that organizational assets are Sufficiently secure."
      }
    ]
  },
  // SOURCE QUALIFICATION: Retain the explicit key and its qualifications below.
  {
    "id": "174",
    "chapter": 7,
    "sourceNumber": 174,
    "sourcePage": 51,
    "type": "single",
    "prompt": "You are monitoring the syslog server and observe that the DNS server is sending messages with a Warning severity. What do these messages indicate about the operation of the DNS server?",
    "options": [
      {
        "id": "A",
        "text": "The DNS server is unusable due to a severe malfunction and is shutting down"
      },
      {
        "id": "B",
        "text": "The server has a hardware error that does not require immediate attention"
      },
      {
        "id": "C",
        "text": "A condition exists that will cause errors in the future if the issue is not fixed."
      },
      {
        "id": "D",
        "text": "An error condition is occurring that must be addressed immediately"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C (closest warning level description)",
    "explanation": "Syslog Warning has severity 4 and indicates a condition requiring attention before it becomes more serious. C is the closest supplied choice, but a warning does not guarantee future errors. Error is severity 3 and Emergency is severity 0."
  },
  {
    "id": "175",
    "chapter": 7,
    "sourceNumber": 175,
    "sourcePage": 51,
    "type": "matching",
    "prompt": "Move each worm mitigation step from the list on the left to the correct description on the right.",
    "answerText": "See the matches below.",
    "explanation": "Quarantine removes or blocks infected hosts; containment limits spread through segmentation; inoculation patches uninfected systems; treatment cleans and restores affected systems.",
    "pairs": [
      {
        "term": "Treatment",
        "match": "Clean and patch infected system"
      },
      {
        "term": "Quarantine",
        "match": "Remove or block infected system From the network"
      },
      {
        "term": "Inoculation",
        "match": "Patch uninfected systems to deprive The worm of more available targets"
      },
      {
        "term": "Containment",
        "match": "Compartmentalize and segment the Network to limit the spread of the Worm to areas already infected"
      }
    ]
  },
  {
    "id": "176",
    "chapter": 7,
    "sourceNumber": 176,
    "sourcePage": 52,
    "type": "matching",
    "prompt": "Move the appropriate control measures from the list on the left to the correct descriptions on the right. You may use each control measure once, more than once or not at all. Note. You will receive partial for each correct answer.",
    "answerText": "See the matches below.",
    "explanation": "Preventive controls aim to stop an event, detective controls identify it, and corrective controls restore or improve the affected system afterward. A control can serve more than one purpose depending on its implementation.",
    "pairs": [
      {
        "term": "Detective measures",
        "match": "Discover unwanted event"
      },
      {
        "term": "Preventive measures",
        "match": "Avert the occurrence of an event"
      },
      {
        "term": "Corrective measures",
        "match": "Restore a system after an event"
      }
    ]
  },
  {
    "id": "177",
    "chapter": 7,
    "sourceNumber": 177,
    "sourcePage": 52,
    "type": "multiple",
    "prompt": "What are two natural disasters that would cause a company to implement a disaster recovery plan? (choose 2).",
    "options": [
      {
        "id": "A",
        "text": "Hazardous material spills"
      },
      {
        "id": "B",
        "text": "Floods"
      },
      {
        "id": "C",
        "text": "Nuclear contamination"
      },
      {
        "id": "D",
        "text": "Volcanic eruptions"
      }
    ],
    "correctOptionIds": [
      "B",
      "D"
    ],
    "answerText": "B and D",
    "explanation": "Floods and volcanic eruptions are natural hazards. Hazardous-material spills and nuclear contamination are normally treated as technological or human-caused hazards in this classification, though disasters can have cascading causes."
  },
  {
    "id": "178",
    "chapter": 7,
    "sourceNumber": 178,
    "sourcePage": 52,
    "type": "single",
    "prompt": "You are a security analyst. You are reviewing output from the SIEM. You notice an alert concerning malicious files detected by the IDS. After reviewing the user, device and posture information you determine that it is a valid What should you do next?",
    "options": [
      {
        "id": "A",
        "text": "Escalate the situation immediately"
      },
      {
        "id": "B",
        "text": "Log the alert and watch for a second occurrence"
      },
      {
        "id": "C",
        "text": "Prepare notes to present at the weekly cybersecurity team meeting"
      },
      {
        "id": "D",
        "text": "Update the documentation to include the new alert information"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "answerText": "A",
    "explanation": "After validating a credible malicious-file alert, follow the response plan and promptly escalate to the authorized incident-response team. Delaying until a weekly meeting or waiting for another occurrence can allow further compromise."
  },
  {
    "id": "179",
    "chapter": 7,
    "sourceNumber": 179,
    "sourcePage": 52,
    "type": "single",
    "prompt": "Review the following log.\n2025-08-29 09:15:02 [INFO] Server startup initiated. OS: Ubuntu 22.04 LTS, Kernel: 5.15.0-78\n2025-08-29 09:15:05 [INFO] Database connection established to db-prod-01 (192.168.10.15:5432)\n2025-08-29 09:15:06 [WARN] High memory usage detected: 78% used\n2025-08-29 09:15:08 [INFO] Web service listening on port 8080\n2025-08-29 09:16:12 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\n2025-08-29 09:16:14 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\n2025-08-29 09:16:16 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\n2025-08-29 09:16:20 [CRITICAL] Multiple failed login attempts detected - possible brute force attack\n2025-08-29 09:16:25 [INFO] Security rule triggered: Blocking IP 203.0.113.45\n2025-08-29 09:17:02 [WARN] Disk space usage at 92% on /var\n2025-08-29 09:18:45 [ERROR] Database query timeout on db-prod-01 - query exceeded 30s\n2025-08-29 09:18:47 [INFO] Automatic database failover to db-backup-01 (192.168.10.16:5432)\n2025-08-29 09:19:10 [INFO] System health check: CPU 45%, Memory 82%, Disk 92%\nWhich description of events explains the unusual anomalies and their potential consequences?",
    "options": [
      {
        "id": "A",
        "text": "The system could not start because of low memory, then blocked an IP address for unrelated reasons, and finally shut down due to disk failure."
      },
      {
        "id": "B",
        "text": "The system experienced normal startup, then a scheduled security scan blocked an IP, and later a planned database migration caused a failover."
      },
      {
        "id": "C",
        "text": "The system experienced and blocked a brute force login attempt, then encountered a high disk usage and a database slowdown which ultimately triggered a failover event."
      },
      {
        "id": "D",
        "text": "The database server crashed first, resulting in login failures and high disk usage, which led to a brute force detection and IP block."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "answerText": "C",
    "explanation": "The log sequence shows repeated failed admin login attempts from 203.0.113.45 that triggered a brute force block at 09:16:25, followed by a high disk usage warning (92% on /var) at 09:17:02, a database query timeout on db-prod-01 at 09:18:45, and an automatic failover to db-backup-01 at 09:18:47."
  },
];




// Expand matching tables using only their source terms and pairings.
// Duplicate F/T matches become one option each, without duplicate answer choices.
function buildPracticeItems(sources) {
  return sources.flatMap(source => {
    if (source.type !== "matching") return [{ ...source }];
    const choices = [...new Set(source.pairs.map(pair => pair.match))];
    return source.pairs.map((pair, index) => ({
      ...source,
      id: source.id + "-" + (index + 1),
      type: "single",
      pairingTerm: pair.term,
      pairNumber: index + 1,
      pairCount: source.pairs.length,
      options: choices.map((text, i) => ({ id: String.fromCharCode(65 + i), text })),
      correctOptionIds: [String.fromCharCode(65 + choices.indexOf(pair.match))],
      sourceAnswerText: source.answerText,
      answerText: pair.term + " → " + pair.match
    }));
  });
}

const questions = buildPracticeItems(sourceQuestions);

// Pure grading functions keep scoring independent from presentation.
function gradeAnswer(question, selected) {
  if (question.type === "ungraded") return null;
  if (question.type === "ordering") {
    return selected.length === question.correctOptionIds.length &&
      selected.every((id, i) => id === question.correctOptionIds[i]);
  }
  const unique = new Set(selected);
  return unique.size === selected.length &&
    unique.size === question.correctOptionIds.length &&
    question.correctOptionIds.every(id => unique.has(id));
}

function getStats(items, responses) {
  const result = { reviewed: 0, graded: 0, correct: 0, reviewOnly: 0, scoredTotal: 0 };
  for (const item of items) {
    if (item.type === "ungraded") result.reviewOnly++;
    else result.scoredTotal++;
    const response = responses.get(item.id);
    if (!response || !response.submitted) continue;
    result.reviewed++;
    if (response.correct !== null) {
      result.graded++;
      if (response.correct) result.correct++;
    }
  }
  return result;
}

const ui = Object.fromEntries([
  "chapter-picker", "picker-title", "start-form", "chapter-select", "quiz",
  "session-title", "restart", "change-chapter", "position", "score",
  "progress-label", "review-progress", "completion", "source-reference",
  "question-title", "pairing-term", "source-note", "answer-form",
  "answer-fieldset", "answer-instructions", "answer-options", "validation",
  "submit-answer", "feedback", "feedback-title", "answer-key",
  "correct-choices", "explanation", "previous", "next"
].map(id => [id, document.getElementById(id)]));

const session = {
  chapter: "all",
  items: [],
  index: 0,
  responses: new Map()
};

function addTextOption(select, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.append(option);
}

addTextOption(ui["chapter-select"], "all", "All chapters — 226 practice items");
for (const chapter of chapters) {
  const count = questions.filter(q => q.chapter === chapter.id).length;
  addTextOption(ui["chapter-select"], String(chapter.id),
    chapter.id + ". " + chapter.title + " — " + count + " practice items");
}

function startPractice(chapter) {
  session.chapter = chapter;
  session.items = questions.filter(q => chapter === "all" || q.chapter === Number(chapter));
  session.index = 0;
  session.responses = new Map();
  ui["chapter-picker"].hidden = true;
  ui.quiz.hidden = false;
  const selectedChapter = chapters.find(c => c.id === Number(chapter));
  ui["session-title"].textContent = selectedChapter
    ? selectedChapter.id + ". " + selectedChapter.title
    : "All chapters";
  renderQuestion();
}

function getResponse(question) {
  if (!session.responses.has(question.id)) {
    session.responses.set(question.id, { selected: [], submitted: false, correct: null });
  }
  return session.responses.get(question.id);
}

function readSelection(question) {
  if (question.type === "ordering") {
    return Array.from(ui["answer-options"].querySelectorAll("select"), select => select.value);
  }
  return Array.from(ui["answer-options"].querySelectorAll("input:checked"), input => input.value);
}

function renderOptions(question, response) {
  const holder = ui["answer-options"];
  holder.replaceChildren();
  if (question.type === "ordering") {
    for (let i = 0; i < question.options.length; i++) {
      const row = document.createElement("div");
      row.className = "order-row";
      const label = document.createElement("label");
      label.htmlFor = "order-" + i;
      label.textContent = "Position " + (i + 1);
      const select = document.createElement("select");
      select.id = label.htmlFor;
      select.name = "order-" + i;
      select.disabled = response.submitted;
      addTextOption(select, "", "Select a step");
      for (const option of question.options) {
        addTextOption(select, option.id, option.id + ". " + option.text);
      }
      select.value = response.selected[i] || "";
      row.append(label, select);
      holder.append(row);
    }
    return;
  }

  for (const option of question.options) {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = question.type === "multiple" ? "checkbox" : "radio";
    input.name = "answer";
    input.value = option.id;
    input.id = "answer-" + option.id;
    input.checked = response.selected.includes(option.id);
    input.disabled = response.submitted || question.type === "ungraded";
    const text = document.createElement("span");
    text.textContent = option.id + ". " + option.text;
    label.append(input, text);

    if (response.submitted && question.type !== "ungraded") {
      const correct = question.correctOptionIds.includes(option.id);
      const wrongSelection = input.checked && !correct;
      if (correct || wrongSelection) {
        label.classList.add(correct ? "correct" : "incorrect");
        const status = document.createElement("span");
        status.className = "choice-result";
        status.textContent = correct ? " — Correct choice" : " — Your incorrect choice";
        text.append(status);
      }
    }
    holder.append(label);
  }
}

function renderFeedback(question, response) {
  ui.feedback.hidden = !response.submitted;
  ui.feedback.className = "feedback";
  ui["correct-choices"].replaceChildren();
  if (!response.submitted) return;
  ui["feedback-title"].textContent = response.correct === null
    ? "Review only — not scored"
    : response.correct ? "Correct" : "Incorrect";
  if (response.correct !== null) {
    ui.feedback.classList.add(response.correct ? "correct" : "incorrect");
  }
  ui["answer-key"].textContent = "Correct answer: " + question.answerText;

  if (question.type !== "ungraded") {
    for (const [index, id] of question.correctOptionIds.entries()) {
      const option = question.options.find(option => option.id === id);
      const li = document.createElement("li");
      li.textContent = (question.type === "ordering" ? (index + 1) + ". " : "") +
        option.id + ". " + option.text;
      ui["correct-choices"].append(li);
    }
  }
  ui["explanation"].textContent = question.explanation;
}

function renderStats() {
  const stats = getStats(session.items, session.responses);
  const percent = stats.graded ? " (" + Math.round(stats.correct / stats.graded * 100) + "%)" : "";
  ui.position.textContent = "Question " + (session.index + 1) + " of " + session.items.length;
  ui.score.textContent = "Score: " + stats.correct + " / " + stats.graded + " graded" + percent +
    " · " + stats.scoredTotal + " scored items total" +
    (stats.reviewOnly ? " · " + stats.reviewOnly + " review only" : "");
  ui["progress-label"].textContent = stats.reviewed + " of " + session.items.length + " items reviewed";
  ui["review-progress"].max = session.items.length;
  ui["review-progress"].value = stats.reviewed;
  ui.completion.hidden = stats.reviewed !== session.items.length;
  ui.completion.textContent = "Practice complete. Your final score is " + stats.correct + " / " +
    stats.scoredTotal + ". Restart or choose a new chapter to practice again.";
}

function renderQuestion() {
  const question = session.items[session.index];
  const response = getResponse(question);
  const chapter = chapters.find(c => c.id === question.chapter);
  ui["source-reference"].textContent = "Chapter " + chapter.id + ": " + chapter.title +
    " · Source question " + String(question.sourceNumber).padStart(3, "0") +
    " · PDF page " + question.sourcePage +
    (question.pairNumber ? " · Pair " + question.pairNumber + " of " + question.pairCount : "");
  ui["question-title"].textContent = question.prompt;
  ui["pairing-term"].hidden = !question.pairingTerm;
  ui["pairing-term"].textContent = question.pairingTerm ? "Match: " + question.pairingTerm : "";
  ui["source-note"].hidden = !question.sourceNote;
  ui["source-note"].textContent = question.sourceNote || "";
  ui.validation.textContent = "";
  ui["answer-instructions"].textContent = question.type === "ordering"
    ? "Select each step once, in the correct order."
    : question.type === "ungraded"
      ? "Original options (review only)"
      : question.type === "multiple"
        ? "Select " + question.correctOptionIds.length + " answers. The complete set must match."
        : question.pairingTerm
          ? "Select the correct match."
          : "Select one answer.";
  renderOptions(question, response);
  renderFeedback(question, response);
  ui["submit-answer"].disabled = response.submitted;
  ui["submit-answer"].textContent = response.submitted ? "Reviewed" :
    question.type === "ungraded" ? "Reveal reviewer answer" : "Submit answer";
  ui.previous.disabled = session.index === 0;
  ui.next.disabled = session.index === session.items.length - 1;
  renderStats();
  ui["question-title"].focus();
}

ui["start-form"].addEventListener("submit", event => {
  event.preventDefault();
  startPractice(ui["chapter-select"].value);
});

ui["answer-form"].addEventListener("change", () => {
  const question = session.items[session.index];
  const response = getResponse(question);
  if (!response.submitted) response.selected = readSelection(question);
  ui.validation.textContent = "";
});

ui["answer-form"].addEventListener("submit", event => {
  event.preventDefault();
  const question = session.items[session.index];
  const response = getResponse(question);
  if (response.submitted) return;
  const selected = readSelection(question);
  let error = "";
  if (question.type === "ordering") {
    if (selected.some(id => !id)) error = "Select a step for every position.";
    else if (new Set(selected).size !== question.options.length) error = "Use each step exactly once.";
  } else if (question.type !== "ungraded" && selected.length === 0) {
    error = "Select an answer before submitting.";
  }
  if (error) {
    ui.validation.textContent = error;
    ui["answer-options"].querySelector("input, select").focus();
    return;
  }
  response.selected = selected;
  response.correct = gradeAnswer(question, selected);
  response.submitted = true;
  renderQuestion();
  ui.feedback.focus();
});

function moveQuestion(offset) {
  const target = session.index + offset;
  if (target < 0 || target >= session.items.length) return;
  // Save an unsubmitted selection before rebuilding the next question.
  const question = session.items[session.index];
  const response = getResponse(question);
  if (!response.submitted) response.selected = readSelection(question);
  session.index = target;
  renderQuestion();
}

ui.previous.addEventListener("click", () => moveQuestion(-1));
ui.next.addEventListener("click", () => moveQuestion(1));
ui.restart.addEventListener("click", () => startPractice(session.chapter));
ui["change-chapter"].addEventListener("click", () => {
  ui.quiz.hidden = true;
  ui["chapter-picker"].hidden = false;
  ui["chapter-select"].value = session.chapter;
  ui["picker-title"].focus();
});
