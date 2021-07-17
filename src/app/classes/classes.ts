export class User {
    id: number;
    username: string;
    password: string;
    userLevel: number;
    experience: number;
    workouts: Workout[];
    customExercises: CustomExercise[];
}

export class Exercise {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export class CustomExercise {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export class Workout {
    id: number;
    name: string;
    exercises: Exercise[];
    customExercises: CustomExercise[];
}

export interface User {
    id: number;
    username: string;
    password: string;
    userLevel: number;
    experience: number;
    workouts: Workout[];
    customExercises: CustomExercise[];
}
