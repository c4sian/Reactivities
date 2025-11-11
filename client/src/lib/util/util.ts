import { format, formatDistanceToNow, type DateArg } from "date-fns";
import z from "zod";

export function formatDate(date: DateArg<Date>) {
    return format(date, 'dd MMM yyyy h:mm a');
}

export function timeAgo(date: DateArg<Date>) {
    return formatDistanceToNow(date) + ' ago';
}

export const requiredString = (fieldName: string) => z
    .string({ error: (issue) => issue.code === 'invalid_type' ? `${fieldName} is required.` : "Invalid input." })
    .min(1, { message: `${fieldName} is required` });