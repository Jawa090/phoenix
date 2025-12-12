
/**
 * Submits form data to a Google Sheet via a Google Apps Script Web App.
 * 
 * @param formData The form data object (name, email, etc.)
 * @param file The file object (optional)
 * @param scriptUrl The URL of your deployed Google Apps Script Web App
 */
export const submitToGoogleSheet = async (
    formData: Record<string, string>,
    file: File | null,
    scriptUrl: string
): Promise<boolean> => {
    try {
        const payload: any = { ...formData };

        if (file) {
            // Convert file to Base64
            const base64File = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = error => reject(error);
            });

            // Remove the "data:*/*;base64," prefix for Google Apps Script
            payload.fileData = base64File.split(',')[1];
            payload.fileName = file.name;
            payload.mimeType = file.type;
        }

        // Google Apps Script usually requires 'no-cors' for simple POST requests from browser
        // preventing us from reading the response, but it submits the data.
        await fetch(scriptUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        return true;
    } catch (error) {
        console.error("Error submitting to Google Sheet:", error);
        return false;
    }
};
