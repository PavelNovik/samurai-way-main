import {create} from "react-test-renderer";
import {ProfileStatusFC} from "./ProfileStatusFC";

describe('ProfileStatusFC component', ()=> {
    test('status from props should be in the state', ()=> {
const component = create(<ProfileStatusFC status={'hello world'} updateProfileStatus={()=>{}}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('hello world')
    })
})