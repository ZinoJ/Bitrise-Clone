import React from "react";
import "./FirstSection.css";

function FirstSection() {
  return (
    <div className="firstSection">
      <div className="firstSection__header">
        <div className="left">
          <img
            src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/6299d95032dcea7aa5ac0192_M1_OPTIMIZED.png"
            alt=""
          />
        </div>
        <div className="right">
          <h2 style={{ color: "#341C48" }}>
            Build on blazingly fast, scalable, virtualized M1 environments built
            for iOS CI/CD
          </h2>
          <p style={{ color: "#444" }}>
            <strong>
              Benefit from the world's first fully virtualized, ephemeral Apple
              Silicon environments, managed, in the cloud
            </strong>
          </p>
          <p style={{ color: "#341C48" }}>
            <strong>Try it now!</strong>
          </p>
        </div>
      </div>
      <h1 className="firstSection__headerrr">
        Accelerate mobile builds, releases, and teams through a DevOps platform
        built for mobile
      </h1>

      <div className="firstSection__content">
        <div className="content">
          <img
            src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e7b67e418c107d21428fa03_illustration-landing-features-full-mobile-400x400.png"
            alt=""
          />
          <div className="content__right">
            <h2>Mobile CI/CD that just works</h2>
            <p>
              Automatically configure basic workflows to get started quickly
              with integration and deployment of your iOS, Android, React
              Native, macOS, and Flutter apps. Let Bitrise take care of stack
              and technology updates like new Xcode versions, the transition to
              Apple silicon, and more.
            </p>
          </div>
        </div>

        <div className="content">
          <img
            src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e7dfae302085216f080d140_Illustration-landing-storing-code-400x400.png"
            alt=""
          />
          <div className="content__right">
            <h2>Easy integration with your tech</h2>
            <p>
              Connect to GitHub, GitHub Enterprise, GitLab, GitLab Enterprise
              and Bitbucket, both in the cloud as well as on premise, and choose
              from over 300 integrations that connect workflows to your toolset
              across security, testing, messaging, and other categories.
            </p>
          </div>
        </div>

        <div className="content">
          <img
          className="image3"
            src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e7dfaf8c84a8818eea0d1fb_Illustration-landing-triggering-builds-400x400.png"
            alt=""
          />
          <div className="content__right">
            <h2>Automate, monitor, and improve</h2>
            <p>
              Automation workflows to run how and when you need them, allowing
              you to string together common tasks like deployment to testers,
              pinging the company Slack about a new version, or bumping up a
              version number. Dive into Bitrise Insights to track how your
              workflows are performing over time.
            </p>
          </div>
        </div>

        <div className="content">
          <img
            src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e7dfb0709d0fe702eb59072_Illustration-landing-no-hardware-400x400.png"
            alt=""
          />
          <div className="content__right">
            <h2>Stop maintaining hardware</h2>
            <p>
              Bitrise is fully managed, and cloud-based. Hardware is in our data
              centers, maintained by a team dedicated to ensuring the best
              possible performance for your workflows, whether they run on
              Linux, Intel-based macOS, or our new Apple silicon-based iOS build
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
