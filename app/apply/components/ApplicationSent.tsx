"use client"
import {useUser} from "@/contexts/UserContext";
import {ApplicationState} from "@/types/application";
import ApprovedMessage from "@/app/apply/components/ApprovedMessage";
import DeclinedMessage from "@/app/apply/components/DeclinedMessage";
import NeutralMessage from "@/app/apply/components/NeutralMessage";

const messageContent = {
    [ApplicationState.NEUTRAL]: NeutralMessage,
    [ApplicationState.APPROVED]: ApprovedMessage,
    [ApplicationState.DECLINED]: DeclinedMessage,
    [ApplicationState.DELAYED]: NeutralMessage
}

const ApplicationSent = () => {

    const {application} = useUser().user!

    const Message = messageContent[application!.state]

    return (
        <div className="pt-32 px-2 flex flex-1 flex-col items-center justify-center">
            <Message position={application!.position} />
        </div>
    );
};

export default ApplicationSent;