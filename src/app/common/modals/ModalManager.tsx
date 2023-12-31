import LoginForm from "../../../features/auth/LoginForm";
import TestModal from "../../../features/scratch/TestModal"
import { useAppSelector } from "../../store/strore"

export default function ModalManager() {
    const modalLookup = {
        TestModal,
        LoginForm
    }

    const {type, data, open} = useAppSelector(state => state.modals);

    let renderedModal;

    if (open && type) {
        const ModalComponent = (modalLookup as any)[type]
        renderedModal = <ModalComponent data={data}/>
    }

    return (
    <div>{renderedModal}</div>
  )
}
