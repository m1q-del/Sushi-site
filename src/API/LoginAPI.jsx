export async function loginApi(payload) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { email, password } = payload;
            if (email === "blocked@example.com") reject({ status: 403, message: "User is blocked" });
            else if (email === "server@example.com") reject({ status: 500, message: "Server error" });
            else if (email === "network@example.com") reject({ status: 0, message: "Network error" });
            else resolve({ success: true, userId: "user-1" });
        }, 1000);
    });
}