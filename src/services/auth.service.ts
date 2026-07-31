import prisma from "../config/prisma";
import { hashPassword } from "../utils/hashPassword";
import { comparePassword } from "../utils/comparePassword";
import { generateToken } from "../utils/generateToken";

interface RegisterUser {
    name: string;
    email: string;
    password: string;
}

interface LoginUser {
    email: string;
    password: string;
}

export const registerUser = async (payload: RegisterUser) => {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Hash password
    const hashedPassword = await hashPassword(payload.password);

    // Save user
    const user = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            // role: "STAFF",
        },
    });

    // Don't return password
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
};


export const loginUser = async (payload: LoginUser) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordMatched = await comparePassword(
        payload.password,
        user.password
    );

    if (!isPasswordMatched) {
        throw new Error("Invalid email or password");
    }


    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
    });

    const { password, ...userWithoutPassword } = user;

    return {
        token,
        user: userWithoutPassword,
    };
};

