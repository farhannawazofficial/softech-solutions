import React from 'react';
import './DevelopmentProcessSection.css';

const DevelopmentProcessSection = () => {
    const steps = [
        { number: "#1", title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do." },
        { number: "#2", title: "Sprint planning", description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
        { number: "#3", title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
        { number: "#4", title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
        { number: "#5", title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
        { number: "#6", title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
    ];

    return (
        <div className="development-process-section">
            <h2>How development <span>through Alcaline works</span></h2>
            <div className="timeline">
                {steps.map((step, index) => (
                    <div key={index} className="timeline-step">
                        <div className="step-number">{step.number}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
                <div className="trophy-icon">
                    🏆 {/* Replace this with a trophy icon image if preferred */}
                </div>
            </div>
        </div>
    );
};

export default DevelopmentProcessSection;
