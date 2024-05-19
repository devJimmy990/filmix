export default class ErrorHandler {
    static login(error) {
        switch (error.code) {
            case 'auth/user-not-found': return 'User not found';
            case 'auth/wrong-password': return 'Wrong password';
            case 'auth/invalid-email': return 'Invalid email address';
            case 'auth/user-disabled': return 'User account has been disabled';
            case 'auth/invalid-credential': return 'No account found with that email';
            default: return 'Failed to sign in' + error.message;
        }
    }

    static signup(error) {
        switch (error.code) {
            case 'auth/email-already-in-use': return 'Email is used before, try another email';
            case 'auth/invalid-email': return 'Invalid email address';
            case 'auth/weak-password': return 'Password is too weak';
            default: return 'Failed to create account' + error.message;
        }
    }
}