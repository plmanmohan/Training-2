import {useRef} from 'react';
const Focusmanager = () => {
    const refName = useRef(null);
    const refEmail = useRef(null);
    const refPassword = useRef(null);

    const focusInput = (inputRef) => {
        inputRef.current.focus();
    }
    return (
        <div className="focus-manager">
        <div className="input-group">
            <label>Name</label>
            <input  ref={refName} type="text" placeholder="Enter your Name" />
            <button onClick={() => focusInput(refName)}>Focus Name</button>
        </div>
        <div className="input-group">
            <label>Email</label>
            <input ref={refEmail} type="email" placeholder="Enter your Email" />
            <button onClick={() => focusInput(refEmail)}>Focus Email</button>
        </div>
        <div className="input-group">
            <label>Password</label>
            <input  ref={refPassword} type="password" placeholder="Enter your password" />
            <button onClick={() => focusInput(refPassword)}>Focus Password</button>
        </div>
    </div>
    )
}

export default Focusmanager;