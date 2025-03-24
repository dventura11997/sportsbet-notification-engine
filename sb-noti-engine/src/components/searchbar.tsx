import { useState } from 'react';


function Searchbar() {
    const [inputValue, setInputValue] = useState("");
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Updated URL for production
        const response = await fetch("/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: inputValue }),

            
        });

        if (response.ok) {
            setSuccessMessage("Notification sent successfully!");
            setErrorMessage(null);  // Clear previous error message
            setInputValue(""); // Clear input after success
        } else {
            setSuccessMessage(null);  // Clear previous success message
            setErrorMessage("Failed to send notification.");
        }}

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-field-with-button">
                <input
                    type="email"
                    placeholder="Enter a valid email address..."
                    className="form-field-home"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="button">Send notification</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Searchbar;