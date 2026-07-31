# Contentful Press Integration Reference Guide

This document outlines the professional setup required to connect Contentful to the Wallanda Global Pressroom.

---

## 1. Credentials Configured

We have configured the environment variables in `wallanda-site/.env.local`. If deploying to a production server (like Vercel, Netlify, or Docker), make sure to configure these environment variables in your deployment dashboard:

```env
CONTENTFUL_SPACE_ID=x78x1y84gbce
CONTENTFUL_ACCESS_TOKEN=Vuls26RzKBHVk9VSemCIct8vrerMBI6YNcMsgwKi1cE
```

---

## 2. Professional Content Model Schema

To host press releases and blog posts under the same Space, your Contentful Content Type should be configured with the ID `kassongoBlogPost` to reuse existing connectors. For a professional Press layout, verify that the following fields exist in your Contentful content model:

| Field Name | API ID | Type | Description |
| :--- | :--- | :--- | :--- |
| **Title** | `title` | Short text (String) | The primary headline of the press release. |
| **Slug** | `slug` | Short text (String) | URL path e.g. `merger-announcement`. Set to unique and generate from Title. |
| **Excerpt** | `excerpt` | Short text (String) | A short 1-2 sentence preview text for cards and SEO descriptions. |
| **Category** | `category` | Short text (String) | Category of post e.g. `Corporate`, `Funding`, `Awards`. |
| **Date** | `date` | Date & Time | The publication date (e.g. `2026-07-28`). |
| **Read Time** | `readTime` | Short text (String) | E.g. `5 min`. |
| **Source** | `source` | Short text (String) | E.g. `PR Newswire`, `Wallanda Newsroom`, `Financial Times`. |
| **Cover Image** | `coverImage` | Media (Asset) | High-resolution image (PNG, JPG, or WEBP). |
| **Content** | `content` | Rich Text | Detailed article content (supports headings, lists, quotes, inline assets). |
| **Tags** | `tags` | List of short texts | E.g. `['Merger', 'Fintech', 'Logistics']`. |

---

## 3. Recommended Content to Publish

Below is the copy-pasteable content formatted for your Contentful Rich Text editor to post professionally:

### Release 1: The Merger Announcement
* **Title:** Potta Finance and Wallanda Complete Merger, Creating Leading Logistics Provider Wallanda Global
* **Slug:** `merger-announcement`
* **Excerpt:** The combining of these two industry leaders creates a unified global powerhouse with unmatched software capability and carrier partnerships.
* **Category:** Corporate
* **Source:** PR Newswire
* **Date:** `2026-07-28`
* **Read Time:** `5 min`
* **Tags:** `Merger`, `Fintech`, `Logistics`, `Corporate`
* **Content:**
  * **Paragraph:** We are thrilled to announce the official merger of Potta Finance and Wallanda, bringing together two category leaders in financial technology and logistics orchestration under a single unified brand: Wallanda Global. By combining Potta Finance's robust financial platform with Wallanda's intelligent multi-carrier routing systems, we are introducing a modern global freight management platform tailored for the digital-first economy.
  * **Heading 2:** A Unified Vision for Seamless Logistics
  * **Paragraph:** Historically, logistics orchestration and cargo financing have lived in isolated silos, causing delays, reconciliation bottlenecks, and capital inefficiencies for merchants worldwide. Wallanda Global addresses this integration gap. Our combined suite brings together Ntigi Shipping Tech, Kassongo Shipping App, and Kovasure Cargo Insurance, offering custom APIs and apps that embed finance and freight capabilities into a single checkout flow.
  * **Quote:** Under the new entity, existing clients of both Potta Finance and Wallanda will gain instant access to integrated cargo insurance and priority carrier dispatch routing at no additional monthly subscription cost.
  * **Heading 2:** Key Strategic Milestones of the Merger
  * **Bullet List:**
    * Establishment of unified localized hubs across Africa, Europe, and North America.
    * Automatic onboarding of 45,000+ certified shipping carrier partners.
    * Enhanced end-to-end payload visibility and electronic customs clearance modules.
    * Integration of automated cargo insurance claims powered by Kovasure.

---

### Release 2: Executive Award
* **Title:** Three Wallanda Global Leaders Named Recipients of 2026 Pros to Know Award for Supply Chain Innovation
* **Slug:** `pros-to-know`
* **Excerpt:** Annual award program recognizes supply chain professionals who have demonstrated exceptional leadership and strategic foresight.
* **Category:** Awards
* **Source:** Supply Chain Digest
* **Date:** `2026-06-15`
* **Read Time:** `4 min`
* **Tags:** `Leadership`, `Innovation`, `Awards`
* **Content:**
  * **Paragraph:** We are proud to share that Supply Chain Digest has named three executives from Wallanda Global as recipients of the prestigious 2026 Pros to Know Award. The award honors outstanding supply chain leaders who are driving efficiency and building resilience in global trade.
  * **Heading 2:** Recognizing Exceptional Industry Leadership
  * **Paragraph:** The annual Pros to Know award recognizes professionals who showcase forward-thinking strategies, technical expertise, and dedication to supply chain advancement. Our awardees this year were selected from a pool of hundreds of nominees across international logistics companies, tech providers, and academic institutes.
  * **Heading 3:** Our Honored Leaders
  * **Bullet List:**
    * Genesis St. James Amahnui (CEO): Honored for pioneering tech-driven cargo financing and multi-carrier integrations.
    * Sarah Jenkins (Chief Operating Officer): Selected for her strategic scaling of local hubs across five continents.
    * David Vance (VP of Products): Recognized for designing Ntigi's auto-routing algorithms.

---

### Release 3: Funding Round
* **Title:** Wallanda Global Receives Strategic Investment to Expand Unified Logistics and Fintech Solutions
* **Slug:** `strategic-investment`
* **Excerpt:** New investment round will accelerate product integration, core platform scalability, and enhance international delivery offerings.
* **Category:** Funding
* **Source:** Financial Times
* **Date:** `2026-05-20`
* **Read Time:** `6 min`
* **Tags:** `Investment`, `Scale`, `Fintech`, `Funding`
* **Content:**
  * **Paragraph:** Wallanda Global has closed a significant strategic investment round led by major venture firms specializing in enterprise logistics, cross-border payments, and supply chain technology. The fresh capital injection will be deployed to accelerate product consolidation across our core brands, expand international routing pipelines, and grow our engineering presence in global trade centers.
  * **Heading 2:** Expanding cross-border delivery capability
  * **Paragraph:** With this investment, Wallanda Global will build deeper integrations between Ntigi Shipping Tech and Kassongo Shipping App, providing small and large merchants with automated Customs Declaration generation and instantaneous shipment tracking. Additionally, Kovasure Cargo Insurance will expand its risk underwriting algorithms to cover temperature-sensitive goods and high-value industrial machinery across transatlantic corridors.
