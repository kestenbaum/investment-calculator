
const UserInput = ({label, defaultValue, onChange}) => {
    return (
        <div className="user-input">
            <label>{label}</label>
            <input
                type="text"
                placeholder={defaultValue}
                value={defaultValue}
                onChange={onChange}
                required
            />
        </div>

    );
};

export default UserInput;