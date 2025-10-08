
export default function UserInput({ inputs, onChange }) {

    //Functions for value of Inputs
    function handleInputs(e) {
        const value = parseFloat(e.target.value)
        const id = e.target.id
        onChange(prev => ({
            ...prev,
            [id]: value
        }))
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">INITIAL INVESTMANT</label>
                    <input id="initialInvestment" type="number" required value={inputs.initialInvestment} onChange={handleInputs}></input>
                </p>
                <p>
                    <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
                    <input id="annualInvestment" type="number" required value={inputs.annualInvestment} onChange={handleInputs}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">EXPECTED RETURN</label>
                    <input id="expectedReturn" type="number" required value={inputs.expectedReturn} onChange={handleInputs}></input>
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input id="duration" type="number" required value={inputs.duration} onChange={handleInputs}></input>
                </p>
            </div>



        </section>
    )
}