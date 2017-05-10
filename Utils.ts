export function classes(...classNames: (string | null | undefined | boolean /*false*/)[]) {
    return classNames.filter(a => a && a != "").join(" ");
}