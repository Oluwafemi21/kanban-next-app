import { useState } from "react";
import Modal from "./BaseModal";
import LoadingButton from "./LoadingButton";

type props = {
    skipIntro:()=>void
}

export default function Introduction({ skipIntro }:props) {
    const [step, setStep] = useState(0);
    const guides = [
        {
            step: 1,
            header: "Welcome to Kanban App",
            body: "Do you struggle with task management? You're in the right place! Take a tour and see how Kanban App can help you stay organized.",
            position: "center",
        },
        {
            step: 2,
            header: "Menu Panel",
            body: "On this side you can manage your current boards. Create new boards, rename them, or delete them as needed.",
            position: "left",
            // Add overlay highlighting the menu panel in the app
        },
        {
            step: 3,
            header: "Adding Tasks",
            body: "Click the 'Add Task' button on a board to create new tasks. Give your task a title, description, and due date (optional).",
            position: "top-right",
            // Add screenshot of adding a task
        },
        {
            step: 4,
            header: "Kanban Stages",
            body: "Kanban boards typically have stages like 'To Do', 'In Progress', and 'Done'. Drag and drop tasks between stages to reflect their progress.",
            position: "center",
            // Add short animation or video demonstrating dragging tasks
        },
        // {
        //   step: 5,
        //   header: "Collaborate with Others",
        //   body: "Assign tasks to team members, add comments and discussions, and keep everyone on the same page. Click on a task to see these options.",
        //   position: "bottom-right",
        //   // Add explanation on assigning tasks with a screenshot (optional)
        // },
    ];

    function increaseStep() {
        if (step === guides.length - 1) {
            return;
        } else {
            setStep(step + 1);
        }
    }

    return (
        <Modal id="introduction" onClose={skipIntro}>
            <div className="relative text-black dark:text-white">
                <h3 className="heading-l ">{guides[step].header}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="absolute top-0 -right-2 cursor-pointer text-mediumGrey w-5 h-5"
                >
                    <path d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <article className="text-black dark:text-white">
                <p>{guides[step].body}</p>
            </article>
            <div className="flex items-center justify-between w-full">
                {step > 0 && (
                    <div className="grid w-20">
                        <LoadingButton
                            type="button"
                            size="small"
                            variant="primary"
                            text="previous"
                            action={() => setStep(step - 1)}
                        />
                    </div>
                )}
                <div className="grid w-20 ml-auto justify-self-end">
                    {step !== guides.length - 1 ? (
                        <LoadingButton
                            type="button"
                            size="small"
                            variant="primary"
                            text="next"
                            action={increaseStep}
                        />
                    ) : (
                        <LoadingButton
                            type="button"
                            size="small"
                            variant="primary"
                            text="done"
                            action={skipIntro}
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
                {guides.map((guide, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setStep(step)}
                            className={`h-1.5 w-1.5 rounded-full ${
                                step === guide.step - 1
                                    ? "bg-primaryPurple"
                                    : "bg-mediumGrey"
                            }`}
                        ></button>
                    );
                })}
            </div>
        </Modal>
    );
}
