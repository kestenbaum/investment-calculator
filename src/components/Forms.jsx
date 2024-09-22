import UserInput from "./UserInput.jsx";

const Forms = ({input, onChange}) => {
    return (
        <section className="input-group">
            <UserInput
                label={"Initial Investment"}
                defaultValue={input.initialInvestment}
                onChange={event => onChange('initialInvestment', event.target.value)}
            />
            <UserInput
                label={"Expected return"}
                defaultValue={input.expectedReturn}
                onChange={event => onChange('expectedReturn', event.target.value)}
            />
            <UserInput
                label={"Annual investment"}
                defaultValue={input.annualInvestment}
                onChange={event => onChange('annualInvestment', event.target.value)}
            />
            <UserInput
                label={"Duration"}
                defaultValue={input.duration}
                onChange={event => onChange('duration', event.target.value)}
            />

        </section>
    );
};

export default Forms;