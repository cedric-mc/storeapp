const ShippingAddressManager = () => {
    return (
        <div>
            <form>
                <label>Nom</label>
                <input type="text" name="name"/>

                <label>Email</label>
                <input type="email" name="email"/>

                <label>Rue</label>
                <input type="text" name="address"/>

                <label>Ville</label>
                <input type="text" name="city"/>

                <label>Code postal</label>
                <input type="text" name="zip"/>

                <button onClick={(e) => {
                    e.preventDefault();
                    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
                    const address = (document.querySelector('input[name="address"]') as HTMLInputElement).value;
                    const zip = (document.querySelector('input[name="zip"]') as HTMLInputElement).value;
                    const city = (document.querySelector('input[name="city"]') as HTMLInputElement).value;
                    console.log(`Shipping address: ${name}, ${address}, ${zip} ${city}`);
                }}>Valider l'adresse
                </button>
            </form>
        </div>
    );
}

export default ShippingAddressManager;