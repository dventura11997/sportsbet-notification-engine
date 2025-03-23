import '../App.css';
import React, { useState } from 'react';

function PrefsForm() {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const firstName = formData.get("FirstName") as string;
        const lastName = formData.get("LastName") as string;
        const email = formData.get("Email") as string;

        // Get all checkbox values (adjust the names to match the checkboxes in your JSX)
        const preferences = [
            formData.get("promotions"), // Promotional Offers & Bonuses
            formData.get("bettingTips"), // Daily/Weekly Betting Tips
            formData.get("liveBettingAlerts"), // Live Betting Alerts
            formData.get("accountUpdates"), // Account & Transaction Updates
            formData.get("eventReminders"), // Event & Race Reminders
            formData.get("marketingEmails") // Marketing & Partner Emails
            ];

        const unsubscribe = formData.get("unsubscribeAll")

        // Check if at least one preference is selected
        const isAtLeastOneChecked = preferences.some((pref) => pref !== null);

        // Check for required fields
        if (!firstName || !lastName || !email) {
            setSuccessMessage(null);
            setErrorMessage("Please fill in all required fields.");
        } 
        // If they select both preferences and unsubscribe, show an error
        else if (isAtLeastOneChecked && unsubscribe) {
            setSuccessMessage(null);
            setErrorMessage("You cannot select preferences and unsubscribe at the same time.");
        } 
        // If at least one preference OR unsubscribe is selected, submit successfully
        else if (isAtLeastOneChecked) {
            setSuccessMessage("Thanks for submitting your preferences!");
            setErrorMessage(null);
        } 
        else if (unsubscribe) {
            setSuccessMessage("Successfully unsubscribed from all email communications. Sorry to see you go!");
            setErrorMessage(null);
        } 
        // Otherwise, show a general error
        else {
            setSuccessMessage(null);
            setErrorMessage("Please select at least one preference or unsubscribe.");
        }
    };
    
    return (
        <div>
            {successMessage && <p className="success-message-prefs">{successMessage}</p>}
            {errorMessage && <p className="error-message-prefs">{errorMessage}</p>}
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2 className='form-heading'>Personal details</h2>
                    <div className='grid'>
                        
                        <input className='form-field' placeholder="First name" type="text" name="FirstName" required />
                        <input className='form-field' placeholder="Last name" type="text" name="LastName" required />
                        <input className='form-field' placeholder="Email" type="email" name="Email" required />
                    </div>
                    <h2 className='form-heading-two'>Email preferences</h2>
                    <div className='form-container-prefs'>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="promotions" value="promotions" />Promotional Offers & Bonuses
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="bettingTips" value="bettingTips" />Daily/Weekly Betting Tips
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="liveBettingAlerts" value="liveBettingAlerts" />Live Betting Alerts
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="accountUpdates" value="accountUpdates" />Account & Transaction Updates
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="eventReminders" value="eventReminders" />Event & Race Reminders
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="marketingEmails" value="marketingEmails" />Marketing & Partner Emails
                        </div>
                        <div className="form-field-prefs">
                            <input type="checkbox" name="unsubscribeAll" value="unsubscribeAll" />Unsubscribe from all communications
                        </div>
                    </div>
                    <input className='button-form' type="submit" value="Submit preferences" /> 
                </form>
            </div>
            
        </div>
        
    );
}

export default PrefsForm;