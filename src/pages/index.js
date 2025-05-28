"use client";

import Image from "next/image";
import Link from "next/link";

const values = [
  {
    name: "Languages",
    description: "JavaScript, TypeScript, GoLang, SQL, HTML, CSS",
  },
  {
    name: "Backend",
    description:
      "Go (Gin, Echo), JavaScript (Node.js, Express), TypeScript (Node.js, Express), RESTful APIs, GraphQL, PostgreSQL, MongoDB, Redis, gRPC",
  },
  {
    name: "Frontend",
    description:
      "React, React Native, Next.js, Tailwind CSS, Redux, Styled Components",
  },
  {
    name: "DevOps and Infrastructure",
    description:
      "Docker, Kubernetes (basic), CI/CD (GitHub Actions), Git, Nginx",
  },
  {
    name: "Cloud and Tools",
    description:
      "Google Cloud Platform (GCP), Amazon Web Services (AWS) Firebase, Vercel, Supabase,, SendGrid,  Heroku",
  },
  {
    name: "Observability and Monitoring",
    description: "OpenTelemetry, Datadog, Sentry, Grafana",
  },
  {
    name: "Practices",
    description:
      "Clean Architecture, Test-Driven Development (TDD), Microservices, Agile/Scrum, Gitflow",
  },
];

const portfolios = [
  {
    id: 1,
    title: "Sehat Indonesiaku (ASIK)",
    href: "#",
    description:
      "A nationwide digital health platform built for both web and mobile, ASIK helps health workers across Indonesia report and access real-time medical data.",
    imageUrl: "/images/asik.jpeg",
    date: "2023 - 2025",
  },
  {
    id: 2,
    title: "Qore",
    href: "#",
    description:
      "A low-code platform that simplifies building systems and applications. It helps developers work more efficiently and maintain their projects with ease.",
    imageUrl: "/images/qore.jpeg",
    date: "2021 - 2023",
  },
  {
    id: 3,
    title: "Earheye",
    href: "#",
    description:
      "Geospatial marketplace where you can get access to Truths (Data) and Answers (Insights) from multiple suppliers, in one place, using a simple interface.",
    imageUrl: "/images/eartheye.jpeg",
    date: "2022",
  },
  {
    id: 4,
    title: "Mandiri Investment Forum",
    href: "#",
    description:
      "Built the official event platform for one of Indonesia’s largest financial forums, attended by international investors and policymakers.",
    imageUrl: "/images/mif.jpeg",
    date: "2021",
  },
  {
    id: 5,
    title: "InepInn",
    href: "#",
    description:
      "A hotel app that lets customers explore hotel facilities through an interactive 360° VR experience to get a realistic sense of what staying there feels like.",
    imageUrl: "/images/inepinn.jpeg",
    date: "2020",
  },
];

const timeline = [
  {
    name: "Frontend Developer at Bitgroup Asia",
    description:
      "Built responsive, high-performance web apps using ReactJS and Tailwind CSS, integrated RESTful APIs and GraphQL for efficient data handling, and worked closely with designers to improve UI/UX and boost user engagement.",
    date: "Jan 2021",
  },
  {
    name: "Software Engineer at Feedloop",
    description:
      "Optimized database queries and caching to improve Node.js performance and scalability by 60%. Refactored legacy code into scalable Golang and TypeScript services, enhancing reliability and maintainability. Boosted test coverage to 85% with unit tests and established CI/CD pipelines for automated deployment. Designed event-driven systems using SQS, Pub/Sub, and Kafka for efficient async processing. Deployed cloud-native apps on GCP and AWS with high availability, and improved system monitoring with NewRelic, speeding up issue resolution by 30%.",
    date: "Aug 2021",
  },
  {
    name: "Software Engineer at Ministry of Health (DTO Kemkes)",
    description:
      "Built scalable backend services with Golang and Echo, handling thousands of concurrent users. Designed efficient schemas and optimized queries for PostgreSQL and MongoDB. Refactored monolithic apps into microservices, enhancing scalability and maintainability. Improved API performance using Redis caching, indexing, and query tuning, cutting response times by 70%. Ensured compliance with national data security laws across APIs. Developed event-driven systems with Pub/Sub for real-time processing and used Datadog to monitor performance, reducing downtime by 20%.",
    date: "Feb 2023",
  },
];

const contacts = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hutamy-triesthi/",
      icon: (props) => (
        <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/hutamy",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:hutamytriesthi@gmail.com",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M2 4.75A2.75 2.75 0 0 1 4.75 2h14.5A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V4.75Zm2.75-.25a.75.75 0 0 0-.75.75v.637l8 5.714 8-5.714V5.25a.75.75 0 0 0-.75-.75H4.75Zm15.25 3.363-7.46 5.33a1 1 0 0 1-1.08 0L4 7.863V19.25c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75V7.863Z" />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  return (
    <div className="bg-stone-100">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-stone-300 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-amber-600 to-amber-950 opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center justify-between">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Software Engineer
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    I build efficient, scalable, and maintainable software that
                    solves real problems and creates meaningful user value.
                  </p>
                </div>
                <div className="lg:mt-14 flex lg:justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="w-60 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        width={400}
                        height={600}
                        alt=""
                        src="/images/me.jpeg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-4 lg:px-8 xl:mt-14">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600 text-justify">
                  I’m a software engineer passionate about solving meaningful
                  problems through clean, reliable, and user-focused code. I
                  love working at the intersection of thoughtful system design
                  and seamless user experience, whether that means building
                  intuitive UIs or architecting scalable APIs that quietly power
                  things behind the scenes.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700 text-justify">
                  Currently, I’m a Software Engineer at the Digital
                  Transformation Office of the Ministry of Health (DTO Kemkes),
                  where I help build digital health platforms that serve
                  millions of Indonesians. I deliver features that are not just
                  functional but valuable, secure, and maintainable. In the
                  past, I’ve worked with startups and product teams across
                  sectors like fintech, events, and hospitality. I’ve built
                  internal tools, customer-facing apps, and API platforms,
                  always with an eye for performance, simplicity, and detail. I
                  care deeply about code quality, collaboration, and building
                  things that make a difference.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  <div className="flex flex-col gap-y-4">
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      Contact
                    </dd>
                    {contacts.social.map((item) => {
                      return (
                        <dd
                          key={item.name}
                          className="text-base/7 text-gray-600 hover:text-stone-500 hover:text-semibold hover:underline"
                        >
                          <Link
                            href={item.href}
                            className="text-gray-600 hover:text-stone-500 hover:text-semibold hover:underline flex items-center gap-x-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <item.icon aria-hidden="true" className="size-6" />
                            {item.name}
                          </Link>
                        </dd>
                      );
                    })}
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Skill section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Skills and Tech Stacks
            </h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-stone-500">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portfolio section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Portfolio
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Explore my recent projects and contributions that showcase my
              skills and passion for software development.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {portfolios.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  width={800}
                  height={600}
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* Work Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Work Experience
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              I have worked with various companies and startups, contributing to
              projects that range from digital health platforms to low-code
              development tools.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-16 sm:mt-20">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm/6 font-semibold text-stone-500"
                >
                  <svg
                    viewBox="0 0 4 4"
                    aria-hidden="true"
                    className="mr-4 size-1 flex-none"
                  >
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base/7 text-gray-600 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="mt-5 flex justify-center gap-x-10">
            {contacts.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-stone-500 hover:text-semibold hover:underline"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
