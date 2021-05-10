import profileReducer, { setStatus, setProfile } from "../../redux/profileReducer";
import ProfileStatus from "./../../components/Profile/ProfileStatusWithHooks";
import { create } from 'react-test-renderer';

describe('ProfileStatus component', () => {

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='status'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status")
    })

})