import bcrypt from 'bcryptjs';

export const hashPassword = async({password}) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const verifyPassword = async({submittedPassword, hashedPassword}) => {
    return await bcrypt.compare(submittedPassword, hashedPassword);
}