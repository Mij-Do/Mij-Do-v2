/**
 * Validates user input fields (username, email, message) and returns an object with error messages.
 *
 * @param {Object} input - The user input to validate.
 * @param {string} input.user - The user's name. Must be between 10 and 80 characters.
 * @param {string} input.email - The user's email. Must be a valid email format.
 * @param {string} input.msg - The message content. Must be between 10 and 800 characters.
 * @returns {{ user: string; email: string; msg: string }} An object containing error messages for each field.
 * If the field is valid, its value will be an empty string.
 *
 * @example
 * const errors = InputValidation({
 *   user: "Ahmed Samir",
 *   email: "ahmed@example.com",
 *   msg: "Hello, this is a message."
 * });
 * console.log(errors); // { user: "", email: "", msg: "" }
 */

import { IValue } from "../../interfaces";

export const InputValidation  = (input: IValue) => {

    const errors: {user: string; email: string; msg: string;} = {
        user: '',
        email: '',
        msg: '',
    }

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email);

    if (!input.user.trim() || input.user.length < 10 || input.user.length > 80) {
        errors.user = 'User Name should be more than 10 characters, and less than 80!';
    }
    if (!input.email.trim() || !validEmail) {
        errors.email = 'Email is not Valid!';
    }
    if (!input.msg.trim() || input.msg.length < 10 || input.msg.length > 800) {
        errors.msg = 'User Name should be more than 10 characters, and less than 800!';
    }

    return errors;
}