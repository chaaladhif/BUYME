// Définir et exporter la fonction register
export async function register(email, password) {
    try {
        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );
        return await response.json();
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}

// Définir et exporter la fonction login
export async function login(email, password) {
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}
