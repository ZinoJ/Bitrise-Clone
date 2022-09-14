import React from "react";
import "./IntegrationsDrop.css";
import { MdOutlineApps } from "react-icons/md";

function IntegrationsDrop() {
  return (
    <div className="integrationDrop">
      <div className="left">
        <div className="left__left">
          <h2 className="intergrationHeading">300+ STEPS</h2>
          <div className="leftleft__content">
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5ebd46165179d7e8d4879993_certificate-and-profile-installer.svg"
                alt=""
              />
              <div className="right">
                <h3>Certificate and profile installer</h3>
                <h6>Code signing made easier</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2438cd12834842e0ee3d82_step-deploygate.svg"
                alt=""
              />
              <div className="right">
                <h3>DeployGate Upload</h3>
                <h6>Upload your apps to DeployGate</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f24388fb8df6cef1f407ef4_step-cocoapods.svg"
                alt=""
              />
              <div className="right">
                <h3>Run Cocoapods install</h3>
                <h6>Pod install for your VM</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2438dae9d7324aa1c6805f_step-fastlane.png"
                alt=""
              />
              <div className="right">
                <h3>Fastlane</h3>
                <h6>Runs your fastlane on Bitrise</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2438ad6a172874afa4befa_step-flutter.svg"
                alt=""
              />
              <div className="right">
                <h3>Flutter</h3>
                <h6>Execute Flutter Commands </h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2438ebd4a8f3ce5f8f5d53_step-gradlerunner.svg"
                alt=""
              />
              <div className="right">
                <h3>Gradle Runner</h3>
                <h6>Runs the specified gradle task</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <img
                src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2438bfe9d732014cc68004_step-codecov.svg"
                alt=""
              />
              <div className="right">
                <h3>Codecov</h3>
                <h6>Upload codes coverage files</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <MdOutlineApps className="icon" />
              <div className="right">
                <h3>View all steps</h3>
                <h6>Compare our plan and prices</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="left__right">
          <h2 className="intergrationHeading">ADD ONS</h2>
          <div className="IntegrationDrop__content">
            <img
              src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2d58f7042eab5b61baee1e_test-reports-addonicon.svg"
              alt=""
            />
            <div className="right">
              <h3>Test Reports</h3>
              <h6>See all your test results in one place</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5f2d57ffebac267c064c9468_ship-addonicon.svg" alt="" />
            <div className="right">
              <h3>Ship-app Deployment</h3>
              <h6>Fast and Effective Deployment</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h2 className="intergrationHeading">PARTNER PROGRAM</h2>
        <img
          src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5fcf9aa232415619f1ece0ff_5f2d634fa76d359ad2bf70fe_partner-program-small.png"
          alt=""
        />
        <h6>Partner Program</h6>
        <h6>
          Join our veriefied step program today, and reach the biggest
          concentrated audience of mobile developers there is
        </h6>
      </div>
    </div>
  );
}

export default IntegrationsDrop;
